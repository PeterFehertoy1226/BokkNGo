import React from 'react';

import Popup from'../../shared/components/UIElements/Popup'
import UsersList from'../components/UsersList';


const Users = () => {
    const USERS = [
        {id: 'u1',
        name:'Peter Fehertoy', 
        route:'Tampere - Rovaniemi',
        price: '19 EUR',
        freeplaces: 2,
        time: '08:00 - 12:30',
        image:'https://www.revolvermag.com/sites/default/files/styles/image_750_x_420/public/media/images/article/behemoth-6.jpg?itok=x2MkUZFU&timestamp=1532539230',
        places:3
    },
        {id: 'u2',
        name:'Miklos Oravecz',
        route:'Helsinki - Tampere', 
        price: '12 EUR',
        freeplaces: 2,
        time: '12:00 - 15:30',
        image:'https://www.emp.fi/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw9ddf498f/images/2/5/4/6/254682-emp.jpg?sfrm=png',
        places:3

    },
   
        {id: 'u3',
        name:'Mancika', 
        route:'Oulu - Lempäälä',
        price: '15 EUR',
        freeplaces: 4,
        time: '10:00 - 18:40',
        image:'https://i1.wp.com/pinnaclemusic.org/wp-content/uploads/2017/09/Helmuth-Lehner-2.jpg?fit=800%2C533&ssl=1',
        places:3
    }];
    
    

    return (
      
    <div className="user-main-container">
        <div className="search-field">
         <h2>Keresési mező</h2>
         <Popup />
        </div>
        
        <div className="user-field">
            <UsersList items={USERS}/>
        </div>
    </div>
    )
};

export default Users;