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
        };
    }
    //===== function to increment the number of votes for each beast.
    vote = () => {
        this.setState({
            numberOfVotes: this.state.numberOfVotes + 1,
        });
        this.props.modalClose(
            this.props.title,
            this.props.description,
            this.props.imageUrl);
      
    };

    render() {
        return (
            <div>
                <Card style={{ width: "20rem" }}>
                    <Card.Img
                       
                        onClick={this.vote}
                        src={this.props.imageUrl}
                        alt={this.props.title}
                        title={this.props.title}
                        
                    />
                    <Card.Body>
                        <Card.Title>The Title : {this.props.title}</Card.Title>
                        <Card.Text>Number of votes : {this.state.numberOfVotes} 💓</Card.Text>
                        <Card.Text>horns: {this.props.horns}</Card.Text>
                        <Card.Text>Descriptions: {this.props.descriptions}</Card.Text>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HornedBeasts;