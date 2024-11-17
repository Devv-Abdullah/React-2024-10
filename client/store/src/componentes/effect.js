import React , {useEffect, useState} from 'react';

export default function EffectPage(){
    const [data, setData] = useState([])
    const [newData, setNewtData] = useState([])
    const [loading, setLoading] = useState(true)

    const getFact =()=>{
        fetch('https://catfact.ninja/fact')
    .then((res)=>
        res.json()

    ).then((data)=>{
        // setData(data)
        console.log(data)

        setNewtData([...newData, data])
        setLoading(false)

    })
    }


useEffect(()=>{
    getFact()
}, [])

return(
    <>
    <h1>this is an effect</h1>
    <button onClick={getFact}>add fact</button>

    {loading ? (<p>loading...</p>):(
        <div>
        {newData.map((fact, index) => (
        <div key={index}>
        <h2>{fact.fact}</h2>
        </div>
))}
        </div>
    )}
    </>
)
}