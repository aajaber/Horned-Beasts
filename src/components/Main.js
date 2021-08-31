import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedFile from '../assets/HornedBeasts.json';



// Main =====> App
class Main extends React.Component {

    getJsonData() {
        return HornedFile.map((beast) => {
            return (
                <HornedBeasts title={beast.title}
                    imageUrl={beast.imageUrl}
                    desc={beast.desc}
                    horns={beast.horns} />
            );
        });
    }
    render() {
        return (
            <div>
                {this.getJsonData()}
            </div>
        );

    }
}

export default Main;
