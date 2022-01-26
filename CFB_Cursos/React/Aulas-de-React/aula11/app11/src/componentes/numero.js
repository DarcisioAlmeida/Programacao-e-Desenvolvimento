import React from 'react'
export default function numero(props){
    return(
        <p>
            <p>Valor de num em número: {props.num}</p>
            <button onClick={()=>props.setNum(props.num +10)}>soma +10</button> 
        </p>
    )
}