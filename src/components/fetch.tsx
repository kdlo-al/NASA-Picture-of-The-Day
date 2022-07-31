import { useEffect, useState } from 'react'
import { Api } from './Api'

const Nasa = () => {
    const [item, setItem] = useState(Object);
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${Api}`)
            .then(res => res.json())
            .then((results) => { setItem(results) },
                (error) => { setError(error) })
    }, [])

    if (error) {
        return (
            <div>Error</div>
        )
    }

    console.log({ item })

    return (
        <div>
            <h1>Nasa's Picture of the day</h1>
            <h2>{item.title}</h2>
            <h3>{item.date}</h3>
            <img src={item.url} alt={item.title} style={{ width: '500px', height: '500px' }} />
            <p>{item.explanation}</p>
        </div>
    )
}

export default Nasa