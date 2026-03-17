import { useEffect, useState } from "react"

const api_url = 'https://lanciweb.github.io/demo/api/actresses/'

export default function AppMain() {

    const [actors, setActors] = useState([])

    useEffect(() => {

        fetch(api_url)
            .then(res => res.json())
            .then(data => {
                setActors(data)
                // console.log(data)
            })

    }, []);


    return (
        <>

            <div className="container">

                <main>
                    <h1 className="text-center mt-5 mb-0 fw-bold">Actors</h1>
                    <p className="text-center">List of actors fetched from an Api</p>

                    {/* actors card */}

                    <div className="card">
                        <h3 className="card-title fw-bold">Nome</h3>
                        <div className="card-body">
                            <img src="" className="card-img-top" alt="...">
                            <p className="card-text">anno <span>nazionalità</span></p>
                            <p className="card-text">biografia</p>
                            <p className="card-text">riconoscimenti</p>

                        </div>
                    </div>

                </main>

            </div>

        </>

    )
}