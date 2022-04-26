import { KeyboardEvent } from "react"

function clearNumber(value = '') {
    return value.replace(/\D+/g, '')
  }

export function formatCreditCardNumber(value:string) {
    if (!value) {
      return value
    }
    let clearValue = clearNumber(value)
    let nextValue = `${clearValue.slice(0, 4)} ${clearValue.slice(4,8)} ${clearValue.slice(8, 12)} ${clearValue.slice(12, 19)}`

  
    return nextValue.trim()
  }

  export  function onlyNumber (event : KeyboardEvent<HTMLInputElement>) {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  export function onlyLetter (event : KeyboardEvent<HTMLInputElement>){
    if (!/^[a-zA-Z ]*$/.test(event.key)) {
      event.preventDefault();
    }
  }