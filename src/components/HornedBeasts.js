import React from 'react';

// HornedBeast =====> Main

class HornedBeasts extends React.Component {


    //======  votes counter:
    constructor(props) {
        super(props);
        this.state = {
            numberOfVotes: 0,
        }
    }

    render() {

        //====== voting function
        const vote = () => {
            //  console.log('Click');
            this.setState({
                numberOfVotes: this.state.numberOfVotes + 1,
            });
        }
        return (
            <div>
                <h2>{this.props.title}</h2>

                <img src={this.props.imageUrl}
                    alt={this.props.title}
                    title={this.props.title}
                    onClick={() => vote()}
                />

                <p>{this.props.desc} , Number of Horns : {this.props.horns}</p>
            </div>
        );
    }
}

export default HornedBeasts;