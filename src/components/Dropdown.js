import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

class FilterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "",
    };
  }

  handleSelect = (e) => {
    console.log(e.target.value);
    this.setState({
      selectedOption: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Filter Based on Horns
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1" onSelect={this.handleSelect}>
              1 Horn
            </Dropdown.Item>
            <Dropdown.Item href="#/action-2" onSelect={this.handleSelect}>
              2 Horns
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" onSelect={this.handleSelect}>
              3 Horns
            </Dropdown.Item>
            <Dropdown.Item href="#/action-3" onSelect={this.handleSelect}>
              100 Horns
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        {/* <h1>You Selected {this.selectedOption}</h1> */}
      </div>
    );
  }
}

export default FilterForm;
