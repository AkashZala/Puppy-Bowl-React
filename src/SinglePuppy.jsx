import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SinglePuppy = () => {
    const { id } = useParams();

    const [puppy, setPuppy] = useState(null);

    useEffect(() => {
        const fetchSingle = async () => {
            const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`)
            const selected = response.data.data.player
            setPuppy(selected);
        }
        fetchSingle();
    }, []);

    if (!puppy) {
        return;
    } else {
        return (
            <div>
                <h1>{puppy.name}</h1>
                <h2>{puppy.breed}</h2>
                <h2>Team: {puppy.team.name}</h2>
                <h3>Status: currently on the {puppy.status}</h3>
                <img src={puppy.imageUrl}/>
            </div>
        );
    }
}

export default SinglePuppy;