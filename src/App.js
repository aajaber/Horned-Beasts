import React from 'react'
import Header from './components/Header'
import Main from './components/Main';
import Footer from './components/Footer';
import HornedFile from './assets/HornedBeasts.json';




// Header , Main , Footer =====> App ===> index.js 

class App extends React.Component {

  constructor(props){
    super(props);
    this.state({
      dataRendered: HornedFile,
      beastName:{}
    });
  }

  displayData =(imageTitle)=>{
    let beastName= HornedFile.find(e=>e.title === imageTitle);
    this.setState({
        beastName:beastName
    });
  }

  closeData=()=>{
    
  }

  render() {
    return (
      <div>

        <Header />
        <Main />
        <Footer />

      </div>
    )
  }
}


export default App;

