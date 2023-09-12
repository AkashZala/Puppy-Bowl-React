import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NewPlayerForm from "./NewPlayerForm";
import Loading from "./Loading";

const PuppyList = () => {
    const [puppies, setPuppies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPuppies = async () => {
            const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players')
            const data = response.data.data.players;
            setPuppies(data);
            setLoading(false);
        }

        //fetchPuppies();
        setTimeout(fetchPuppies, 1000)
    }, [])

    return (
        <div className="puppyList">
            <h1>All Player Puppies</h1>
            <p>Fill out this form to add a new player: </p>
            <NewPlayerForm />
            <p>Select a player for more information:</p>
            <div>
                {loading ? <Loading /> :
                    puppies.map(puppy => {
                        return (

                            <div key={puppy.id}>
                                <Link to={`/players/${puppy.id}`}>
                                    {puppy.name}
                                </Link>
                            </div>

                        );
                    })
                }
            </div>
        </div >
    );
}

export default PuppyList;