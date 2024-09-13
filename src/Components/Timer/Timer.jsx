import { useEffect, useState } from "react"

export default function Timer( {onTimeout , totalTime} ){

    const [remainingTime , setRemainingTime] = useState(totalTime);


    useEffect( () => {

        const timer = setTimeout( onTimeout , totalTime )

        return () => {
            clearTimeout(timer)
        }

    } , [onTimeout , totalTime] )

    useEffect(()=>{

        const interval = setInterval( () => {
            setRemainingTime( (prevRemainingTime) => prevRemainingTime - 100 )
        } , 100 )
        return () => {
            clearInterval(interval)
        }
    } , [])

    return (
        <progress value={remainingTime} max={totalTime} />
    )

}