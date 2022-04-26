import React from "react"
import  './Card.scss';
import logo from './logo.svg';
import {formatCreditCardNumber} from './FormUtil';
import { format } from 'date-fns'
// import { ColorPickerValueType } from 'primereact/colorpicker';

export enum CreditCardSide {
    Front = "Front",
    Back = "Back"
}

interface CreditCardProps {
    side: CreditCardSide,
    cardNumber: string,
    holderName:string,
    expiresDate:Date,
    cvv:string,
    color:any
}

export default function CreditCard({side,cardNumber,holderName,expiresDate, cvv,color}: CreditCardProps) {

    return (
        <div className={"card " + (side === CreditCardSide.Front ? "show-front" : "show-back")}>
            <div className={"card-front card-part"} style={{backgroundColor:`#${color}`}}>
                <div className="card-logo">
                    <img alt="" className="card-front-square card-square" src={logo}/>
                </div>
                <p className="card-number">{formatCreditCardNumber(cardNumber)}</p>
                <div className="card-spaces">
                    <div className="card-space-75">
                        <span className="card-label">Card holder</span>
                        <p className="card-info">{holderName}</p>
                    </div>
                    <div className="card-space-25">
                        <span className="card-label">Expires</span>
                        <p className="card-info">{format(expiresDate, 'MM/yy')}</p>
                    </div>
                </div>
            </div>

            <div className={"card-back card-part"} style={{backgroundColor:`#${color}`}}>
                <div className="card-black-line"></div>
                <div className="card-back-content">
                    <div className="card-secret">
                        <p className="card-secret-last">{cvv}</p>
                    </div>
                    <img className="card-back-square card-square"
                         alt=""
                         src="https://image.ibb.co/cZeFjx/little_square.png"/>
                    <img className="card-back-logo card-logo"
                         alt=""
                         src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png"/>

                </div>
            </div>
        </div>
    )
}