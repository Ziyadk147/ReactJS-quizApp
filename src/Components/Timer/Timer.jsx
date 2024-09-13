import { useEffect, useState } from "react"

export default function Timer( {onTimeout , totalTime} ){

    const [remainingTime , setRemainingTime] = useState(totalTime);


    useEffect( () => {

        setTimeout( onTimeout , totalTime )

    } , [onTimeout , totalTime] )

    useEffect(()=>{

        setInterval( () => {
            setRemainingTime( (prevRemainingTime) => prevRemainingTime - 100 )
        } , 100 )
    
    } , [])

    return (
        <progress value={remainingTime} max={totalTime} />
    )

}