import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { PersonType } from "../../types/types"

export const Person = () => {

    const [person, setPerson] = useState<PersonType | null>(null);

    const { id } = useParams()

    useEffect(() => {
        const fetchPerson = async () => {
            try {
                const res = await fetch(`http://localhost:3001/persons/${id}`);
                const data = await res.json();
                setPerson(data);
                console.log(data)
            } catch { console.error(`error in fetch : http://localhost:3000/persons/${id}`) }
        }
        fetchPerson();
    }, [id]);

    if (!person) {
        return <h1>Loading ...</h1>
    }

    return (
        <>
            <h1>Person Page {id} </h1>

        </>
    )
}

