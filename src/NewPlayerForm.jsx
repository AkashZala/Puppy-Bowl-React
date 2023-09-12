import { useState } from "react";
import axios from "axios";

const NewPlayerForm = () => {
    const [name, setName] = useState('');
    const [breed, setBreed] = useState('');
    const [status, setStatus] = useState('bench');
    const [imageUrl, setImageUrl] = useState('');

    async function handleSubmit(event) {
        event.preventDefault()
        const { data } = await axios.post('https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players'
            , { name, breed, status, imageUrl })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input
                            value={name}
                            type="text"
                            name="name"
                            placeholder="Enter name here"
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        <input
                            value={breed}
                            type="text"
                            name="breed"
                            placeholder="Enter breed here"
                            onChange={(event) => setBreed(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            value={status}
                            type="text"
                            name="status"
                            placeholder="Enter status here"
                            onChange={(event) => setStatus(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <input
                            value={imageUrl}
                            type="text"
                            name="imageUrl"
                            placeholder="Enter image URL here"
                            onChange={(event) => setImageUrl(event.target.value)}
                        />
                    </label>
                </div>
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default NewPlayerForm;