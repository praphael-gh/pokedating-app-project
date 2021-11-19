import React, {useState} from "react";

function PokeForm({handleNewPokemon}) {
    const [formData, setFormData] = useState({
        name:"",
        image:"https://img.uquiz.com/content/images/quiz_share_images/1613315734.jpg",
        type:"",
        pokeindex:0,
        weight:0,
        height:0,
    })


    const handleSubmit = (event) => {
        event.preventDefault()

        fetch('http://localhost:3001/pokemons', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(formData)
        }).then(resp => resp.json())
        .then((newPokemon) =>
        handleNewPokemon(newPokemon))
    }

    
    function handlePokeFormChange(event) {
        setFormData ({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    return (
        <div className="new-form">
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" name="name" placeholder="Name" onChange={handlePokeFormChange}/>
                    <input type="text" name="image"placeholder="Image" onChange={handlePokeFormChange}/>
                    <input type="text" name="type" placeholder="Type" onChange={handlePokeFormChange}/>
                    <input type="number" name="pokeindex" placeholder="Poke Index" onChange={handlePokeFormChange}/>
                    <input type="number" name="weight" placeholder="Weight" onChange={handlePokeFormChange}/>
                    <input type="number" name="height" placeholder="Height" onChange={handlePokeFormChange}/>
                </div>
                <button type="submit">Submit Your Pokemon</button>
            </form>
            
        </div>
    );
}

export default PokeForm;