import React from 'react'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import FilterForm from './components/Dropdown';
import HornedFile from './assets/HornedBeasts.json';
import SelectedBeast from './components/SelectedBeast';


// Header , Main , Footer =====> App ===> index.js 

class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      show: false,
      title: "",
      description: "",
      image_url: "",
    };
  }

  displayData = (imageTitle) => {
    let beastName = HornedFile.find(e => e.title === imageTitle);
    this.setState({
      beastName: beastName
    });
  }


  modalClose = (title, description, imageUrl) => {
    this.setState({
      show: !this.state.show,

      title: title,
      description: description,
      imageUrl: imageUrl,
    });
  };


  render() {
    return (
      <div>
        <FilterForm />
        <Header />
        <Main bests={HornedFile} modalClose={this.modalClose} />
        <Footer />


        <SelectedBeast
          show={this.state.show}
          modalClose={this.modalClose}
          title={this.state.title}
          description={this.state.description}
          image_url={this.state.imageUrl}
        />
      </div>
    )
  }
}


export default App;

