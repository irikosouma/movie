import React, { useState, useEffect, useRef } from 'react'
//styles
import {Wrap} from './index.styles'
export default function MainPage() {
    const [list, setList] = useState([])
    const [error, setError] = useState("")
    const myInputRef = useRef(null);
    const timer = useRef(null)
    const [isTyping, setIsTyping] = useState(false);
    const [inputState, setInputState] = useState("");
    // const [finalState, setFinalState] = useState("")

    const [searchTerm, setSearchTerm] = useState('')
    useEffect(() => {
        if(isTyping === false) {
            fetch('https://www.omdbapi.com/?apikey=c24c2c7d&s=batman')
            .then(response => response.json())
            .then(json => {
                setList(json?.Search)
            })
            .catch(
                err => console.log('failed', err)
            )

        }
    }, [])
    let myTimer  
    



    const requestServer = (searchTerm) => {
        let newApi = `https://www.omdbapi.com/?apikey=c24c2c7d&s=${encodeURIComponent(searchTerm)}`
        fetch(`${newApi}`)
        .then(response => response.json())
        .then(json => {
            if(json.Response === "True") {
                if(json.Search.length !== 0){
                    setList(json.Search)
                    setError("")
                }
                else {
                    setList(list)
                }
            }
            else {
                throw json 
            }
        })
        .catch(
            error => {
                setError(error.Error)
                fetch('https://www.omdbapi.com/?apikey=c24c2c7d&s=batman')
                .then(response => response.json())
                .then(json => {
                    setList(json?.Search)
                })
                .catch(
                    err => console.log('failed', err)
                )
            }
        )
    }
    const _handleChange = (e) => {
        const value = e.target.value
        if(timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            requestServer(value)
        }, 2000)
    }


    return (
        <Wrap>
            <div className="wrap-title">
                <p className="title">Search Movies</p>
                <div className="search">
                    <input type="text" 
                    ref={myInputRef}  
                    placeholder='batman' 
                    onKeyDown={(e) => setIsTyping(true)}
                    // value={inputState} 
                    // onChange={(e) => setSearchTerm(e.target.value)} 
                    onChange={_handleChange}
                    autoComplete='off'
                    className="input-style" /> 
                </div>
                    <div className="error">
                        {error}
                    </div>
            </div>
            <div className="movie-list">
                <div className="wrap-movie">
                    {list?.map((item, index) => (
                        <div key={index} className="wrap-movie-item">
                            <article>
                                <img src={item.Poster} alt="movie-poster" className="images-movie" />
                                <div className="title-item">
                                    <p>{item.Title}</p>
                                    <p className="year">{item.Year}</p>
                                </div>
                            </article>
                        </div>
                    )
                    )}
                </div>
            </div>
        </Wrap>
    )
}



// const _handleChange = (e) => {
//     if(timer.current) {
//         clearTimeout(timer.current)
//     } 
//     const value = e.target.value
//     timer.current = setTimeout(() => {
//         requestServer(value)
//     }, 2000)
// }

