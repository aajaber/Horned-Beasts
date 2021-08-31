import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";



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

        
        //====== voting Function:
        const vote = () => {
             // console.log('Click');
            this.setState({
                numberOfVotes: this.state.numberOfVotes + 1,
            });
        }

      
        return (
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    onClick={() => vote()}
                    src={this.props.imageUrl}
                    alt={this.props.title}
                    title={this.props.title}
                    
                />
                <Card.Body>
                    <Card.Title> {this.props.title}</Card.Title>
                    <Card.Text>{this.props.describtion}</Card.Text>
                    <Card.Text>votes= {this.state.numberOfVotes}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HornedBeasts;