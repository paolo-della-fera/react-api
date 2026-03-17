import { useEffect } from "react"

const api_url = 'https://lanciweb.github.io/demo/api/actresses/'

export default function AppMain() {

    useEffect(() => {
        
        fetch(api_url)
        .then (res => res.json())
        .then (data => {
            console.log(data)
        })

    }, []);


    return (
        <>

            <div className="container">

                <main>
                    <h1 className="text-center mt-5 mb-0 fw-bold">Actors</h1>
                    <p className="text-center">List of actors fetched from an Api</p>
                </main>

            </div>

        </>

    )
}