import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Modal'
import HornedFile from '../assets/HornedBeasts.json';
import HornedBeasts from './HornedBeasts';


// Modal =====> App


class SelectedBeast extends React.Component {

    

    render() {
        return (
            <div>
                {this.getBeastData()}
            </div>

        );

    }
}


export default SelectedBeast;


