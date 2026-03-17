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

                <main className="mt-4">
                    <h1 className="text-center mb-0 fw-bold">Actors</h1>
                    <p className="text-center">List of actors fetched from an Api</p>

                    {/* actors card */}
                    <div className="row g-3">

                        {actors.map((actor) => (
                            <div className="col-12 col-md-6 col-lg-4" key={actor.id}>
                                <div className="card">
                                    <h3 className="card-title fw-bold text-center pt-3">{actor.name}</h3>

                                    <div className="card-body pt-0">
                                        <img src={actor.image} className="card-img-top" alt={actor.name} />

                                        <p className="card-text text-center fst-italic">
                                            {actor.birth_year} <span>{actor.nationality}</span>
                                        </p>

                                        <p className="card-text text-center">{actor.biography}</p>

                                        <p className="card-text text-center awards"><b>Awards</b>: <br /> {actor.awards.join(", ")}</p>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>

                </main>

            </div>

        </>

    )
}