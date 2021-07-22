import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Chat from './Chat';
import Login from './Login.jsx';

import { useStateValue } from './StateProvider';

function App() {
    const [{ user }] = useStateValue();

    return (
        <div className="App">
            <Router>
                {!user ? (
                    <Login />
                ) : (
                    <Fragment>
                        <Header />
                        <div className="app_body">
                            <Sidebar />
                            <Switch>
                                <Route path="/room/:roomId">
                                    <Chat />
                                </Route>
                                <Route path="/"></Route>
                            </Switch>
                        </div>
                    </Fragment>
                )}
            </Router>
        </div>
    );
}

export default App;
