import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PuppyList = () => {
    const [puppies, setPuppies] = useState([]);

    useEffect(() => {
        const fetchPuppies = async () => {
            const response = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players')
            const data = response.data.data.players;
            setPuppies(data);
        }
        fetchPuppies();
    }, [])

    return (
        <div>
            <h1>List of Player Puppies</h1>
            <div>
                {
                    puppies.map(puppy => {
                        return (

                            <div key={puppy.id}>
                                <Link to={`/players/${ puppy.id }`}>
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