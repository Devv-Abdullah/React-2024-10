import React , {useEffect, useState} from 'react';

export default function EffectPage(){
    const [data, setData] = useState([])
    const [newData, setNewtData] = useState([])
    const [loading, setLoading] = useState(true)

    const getFact =()=>{
        fetch('https://catfact.ninja/fact')
        .then((res)=> // يعني بعد ما تروح تجيب الداتا من هاض الرابط سيفها داخل ريسبونس بمعنى استجابه
        res.json() //عشان يحول الاستجابه ل جيسون 

    ).then((apiData)=>{
        // setData(apiData)
        console.log(apiData)

        setLoading(false)
        setNewtData([...newData, apiData])

    })
    }


useEffect(()=>{
    getFact()
}, [])

return(
    <>
    <h1>this is an effect</h1>
    <button onClick={getFact}>add fact</button>

    {loading ? (<p>loading...</p>) :(
        <div>
        {newData.map((f, index) => (
        <div key={index}>
        <h2>{f.fact}</h2>
        </div>
    ))}
        </div>
    )}
    </>
)  
}