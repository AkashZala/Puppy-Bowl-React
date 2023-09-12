import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import Loading from "./Loading";

const SinglePuppy = () => {
    const { id } = useParams();

    const [puppy, setPuppy] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSingle = async () => {
            const response = await axios.get(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`)
            const selected = response.data.data.player
            setPuppy(selected);
            setLoading(false);
        }

        //fetchSingle();
        setTimeout(fetchSingle, 1000);
    }, []);

    const navigate = useNavigate();

    const handleDelete = async () => {
        const result = await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/${id}`)
        navigate('/players');
    }


    return (
        <div>
            {loading ? <Loading /> :
                <div className="singlePuppy">
                    <Link to='/players'>Back to all puppies</Link>
                    <h1>{puppy.name}</h1>
                    <h2>{puppy.breed}</h2>
                    {/* <h2>Team: {puppy.team.name}</h2>  */}
                    <h3>Status: currently on the {puppy.status}</h3>
                    <img src={puppy.imageUrl} /><br />
                    <button onClick={handleDelete}>Delete</button>
                </div>
            }
        </div>
    );
}


export default SinglePuppy;