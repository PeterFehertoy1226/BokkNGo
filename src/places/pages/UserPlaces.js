import React from 'react';
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'u1',
        title: 'Tampere',
        description: 'Cool Place',
        imageUrl:"https://lh5.googleusercontent.com/p/AF1QipMGz5gmqlJ1MORMhdHapYcNHCPps3EfwhuvkFtS=w408-h272-k-no",
        address: 'Tullikamarin aukio 2, 33100 Tampere',
        location: {
            lat: 61.4979864,
            lng: 23.770818
        },
        creator: 'u1'
    },
    {
        id: 'u2',
        title: 'Empire State Building',
        description: 'Legfaszább hely',
        imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg",
        address: '20 W 34th St, New York, NY 10001',
        location: {
            lat: 40.7484405,
            lng: -73.9878584
        },
        creator: 'u2'
    },
];

const UserPlaces = () => {
    const userId = useParams().userId; // ez rakja be az urlbe az aktuális felhasználó ID-t
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId); // Ez listázza ki az adott felhasználóhoz tartozó helyeket.

    return <PlaceList items={loadedPlaces} />

    
}

export default UserPlaces;