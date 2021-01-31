import React, { useState } from 'react';
import { ANIMALS } from '@frontendmasters/pet';
import useDropdown from './useDropdown';

const SearchParams = () => {
    const [ location, setLocation ] = useState("Seatle, WA"); //it always returnes an ARRAY
    const [breeds, setBreeds] = useState([]);
    const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
    const [breed, BreedDropdown] = useDropdown("Breed", "", breeds);

    return (
        <div className="search-params">
            <h1>{location}</h1>
            <form>
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
        </div>
    );
};

export default SearchParams;