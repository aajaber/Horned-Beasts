import React from 'react';
import HornedBeasts from './HornedBeasts';



// Main =====> App

class Main extends React.Component {

    render() {
        let beastsArr = this.props.bests.map(beast => {
            return (

                <HornedBeasts
                    title={beast.title}
                    imageUrl={beast.image_url}
                    desc={beast.description}
                    handleClose={this.props.handleClose}
                />
                
            );
        });
        return <main>{beastsArr}</main>;
    }

}
export default Main;
