import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';


import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace'
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './user/pages/Auth';
import Settings from './settings/Settings';

const App = () => {



  return (
    <div className="main-cotainer">
    <Router>
      
      <MainNavigation />
      <main>
        <TransitionGroup>
          <CSSTransition timeout={300} classNames="fade">
            
            <Switch> {/* nem fog redirectolni ha valamelyik path van beírva a böngészőbe*/}
              
              <Route path="/" exact> {/*exact azt jelenti hog csak a localhost:3000/ url beírásakor jelenik meg az itt kiiratott oldal.  */}
                <Users />   
              </Route>

              <Route path="/:userId/places" exact>
                <UserPlaces />
              </Route>

              <Route path="/places/new" exact> 
                <NewPlace />
              </Route>
              <Route path="/places/:placeId">
                <UpdatePlace />
              </Route>
              <Route path="/auth">
                <Auth />
              </Route>
              <Route path="/settings">
                <Settings />
              </Route>
              <Redirect to="/" />
            </Switch>

            </CSSTransition>
        </TransitionGroup>
      </main>
    </Router>
    </div>
  );
};

export default App;
