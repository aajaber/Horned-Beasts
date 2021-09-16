import React from "react";
import HornedBeasts from "./HornedBeasts";
import HornedFile from "./assets/HornedBeasts.json";
import FilterForm from "./filterForm";

// Main =====> App

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: HornedFile,
    };
  }
  handle = (item) => {
    this.setState({ filteredData: item });
  };

  render() {
    let beastsArr = this.props.bests.map((beast) => {
      return (
        <HornedBeasts
          title={beast.title}
          imageUrl={beast.image_url}
          desc={beast.description}
          modalClose={this.props.modalClose}
        />
      );
    });
    return (
      <main>
        <FilterForm Callback={this.handle} />
        {beastsArr}
      </main>
    );
  }
}
export default Main;
