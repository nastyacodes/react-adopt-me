import React, { useState } from 'react';

const SearchParams = () => {
    const [ location, setLocation ] = useState("Seatle, WA"); //it always returnes an ARRAY

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
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;