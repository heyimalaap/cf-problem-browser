import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Main from './components/Main.component.js';
import Header from './components/Header.component';
import Footer from './components/Footer.component';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <Main />
                <Footer />
            </React.Fragment>
        );
    }
}

export default App;
