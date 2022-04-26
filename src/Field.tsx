import React from "react"

interface FieldProps {
    name:string,
    type:string,
    value:any
}

export default function Field({name,type,value}: FieldProps) {

    return (
    <div>
        <input type={type} value={value} ></input>
    </div>
    )
}