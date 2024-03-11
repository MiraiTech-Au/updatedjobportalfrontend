import React, { useState } from 'react';
import { useLoadScript, Autocomplete } from '@react-google-maps/api';

const PlacesAutocomplete = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "YOUR_API_KEY", // Replace with your Google Maps API key
        libraries: ["places"],
    });

    const [address, setAddress] = useState("");

    const handleSelect = async (value) => {
        setAddress(value.description);
        // Additional actions can be taken here, such as retrieving more details about the selected place
    };

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <Autocomplete
            onSelect={handleSelect}
            onPlaceChanged={() => {}}
        >
            <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter a location"
                style={{ width: "300px", height: "40px" }}
            />
        </Autocomplete>
    );
};

export default PlacesAutocomplete;
