import React, {Component} from 'react';
import './App.css';
import Products from './Products';
import {Button} from 'react-bootstrap';
import JumboTronComponent from './JumboTronComponent';
import UserForm from "./UserForm";

class App extends Component {
    // render() {
    //     const isValid = true;
    //   return (
    //       <div>
    //         <Products/>
    //         <Button bsStyle="primary" disabled={!isValid}>Default</Button>
    //       </div>
    //   );
    // }
    render() {
        return (
            <div>
                <UserForm/>
            </div>
        );
    }

}

export default App;
