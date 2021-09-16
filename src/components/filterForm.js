import React from "react";
import Form from "react-bootstrap/Form";
import HornedFile from "./assets/HornedBeasts.json";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSelect = (e) => {
    // console.log(e.target.value);
    // this.setState({
    //   selectedOption: e.target.value,
    // });

    let hornsNumber = parseInt(e.target.value);
    let filteredArr = HornedFile.filter((i) => {
      if (i.horns === hornsNumber) {
        return hornsNumber;
      } else if (hornsNumber === 0) {
        return filteredArr;
      }
    });
  };

  render() {
    return (
      <div>
        <Form className="selectForm">
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Filter based on number of horns</Form.Label>
            <Form.Control as="select" custom onChange={this.handleSelect}>
              <option value="0">default</option>
              <option value="1">1 horn</option>
              <option value="2">2 horns</option>
              <option value="3">3 horns</option>
              <option value="100">100 horns</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default FilterForm;
