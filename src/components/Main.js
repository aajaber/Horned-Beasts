import React from 'react';
import HornedBeasts from './HornedBeasts';
import HornedFile from '../assets/HornedBeasts.json';
import SelectedBeast from './SelectedBeast';



// Main =====> App
class Main extends React.Component {

    getJsonData() {
        return HornedFile.map((beast) => {
            return (
                <div>

                    <HornedBeasts title={beast.title}
                        imageUrl={beast.image_url}
                        desc={beast.description}
                        horns={beast.horns} />




{/* 
                    <SelectedBeast title={beast.title}
                        imageUrl={beast.image_url}
                        desc={beast.description}
                        horns={beast.horns} /> */}
                </div>



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
