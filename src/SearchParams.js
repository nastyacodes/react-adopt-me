import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [ location, setLocation ] = useState("Seatle, WA"); //it always returnes an ARRAY
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
    const [pets, setPets] = useState([]);

    async function requestPets() {
        const { animals } = await pet.animals({ // wait for this to finish and then give me this data
            location,
            breed,
            type: animal
        });

        setPets(animals || []);
    }

    useEffect(() => { //this function runs after render happens, async
        setBreeds([]);
        setBreed("");

        pet.breeds(animal).then(({ breeds: apiBreeds }) => {
            const breedStrings = apiBreeds.map(({ name }) => name); //destructure name
            setBreeds(breedStrings);
        }, console.error); // error => console.log(error) -- the same
    }, [animal, setBreed, setBreeds]); //the list of dependencies: if smth changes useEffect works

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }}>
                <label htmlFor="location">
                    Location
                    <input 
                        id="location" 
                        value={location} 
                        placeholder="Location" 
                        onChange={e => setLocation(e.target.value)} //any time this event working the input value changes
                    />
                </label>
                <AnimalDropdown/>
                <BreedDropdown/>
                <button>Submit</button>
            </form>
            <Results pets={pets}/>
        </div>
    );
};

export default SearchParams;