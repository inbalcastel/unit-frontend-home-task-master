import React, { useState } from "react"
import CreditCard, {CreditCardSide} from "./Card";
import './CardForm.scss';
import "primereact/resources/primereact.min.css";    
import "primeicons/primeicons.css"
import "primereact/resources/themes/saga-blue/theme.css"  
import { ColorPicker } from 'primereact/colorpicker';
import { Calendar } from 'primereact/calendar';
import {formatCreditCardNumber,onlyNumber,onlyLetter} from './FormUtil';


export default function CardForm() {

    const [cardSide, setCardSide] = useState<CreditCardSide>(CreditCardSide.Front)
    const [cardNumber,setCardNumber] = useState('0123456789012345');
    const [holderName,setHolderName] = useState('John Doe');
    const [cvv,setCvv] = useState('123');
    const [expiresDate,setExpiresDate] = useState<Date>(new Date());
    const [color,setColor] = useState<any | null>('f15075');
    let year = new Date().getFullYear();

    const handleFlipClick=()=>{
      if(cardSide === CreditCardSide.Front)
        setCardSide(CreditCardSide.Back)
      else
        setCardSide(CreditCardSide.Front)
    }


    return (
        <div>
               <button className="flip-button" onClick={handleFlipClick} >Flip</button>  
              <CreditCard side={cardSide}  cardNumber={cardNumber} holderName={holderName} cvv={cvv} color={color} expiresDate={expiresDate}/>
              <form className="card-form">
                  <div className="form-control">
                    <label htmlFor="card-number">Card number</label>
                    <input id="card-number" 
                        value={formatCreditCardNumber(cardNumber)} 
                        onChange={e=>setCardNumber(e.target.value)} 
                        maxLength={19}
                        onFocus={()=>setCardSide(CreditCardSide.Front)}/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="card-name">Cardholder Name</label>
                    <input id="card-name" 
                     value={holderName}
                     maxLength={16}
                      onChange={e=>setHolderName(e.target.value)}
                      onKeyPress={onlyLetter}
                      onFocus={()=>setCardSide(CreditCardSide.Front)}/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="expires-date">Expires</label>
                    <Calendar id="basic" value={expiresDate} 
                    onChange={(e : any) => setExpiresDate(e.value)} view="month"
                     dateFormat="MM yy"
                     showIcon 
                      yearNavigator yearRange={`${year}:${year+15}`} 
                      onFocus={()=>setCardSide(CreditCardSide.Front)}/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="cvv">CVV</label>
                    <input id="cvv" 
                     value={cvv}
                     onChange={e=>setCvv(e.target.value)} 
                     onKeyPress={onlyNumber}
                     maxLength={3}
                     onFocus={()=>setCardSide(CreditCardSide.Back)}/>
                  </div>
                  <div className="form-control">
                    <label htmlFor="card-color">Card Color</label>
                    <ColorPicker id="card-color" value={color} onChange={(e: any) => setColor(e.value)} />
                  </div>
              </form>
        </div>
    )
}
