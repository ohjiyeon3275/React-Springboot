// eslint-disable-next-line
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ListGoodsComponent from './components/ListGoodsComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateGoodsComponent from './components/CreateGoodsComponent';
import UpdateGoodsComponent from './components/UpdateGoodsComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';


function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path="/" exact component={ListGoodsComponent}></Route>
                <Route path="/goods" component={ListGoodsComponent}></Route>
                <Route path="/add-goods/:id" component={CreateGoodsComponent}></Route>
                <Route path="/view-goods/:id" component={ViewEmployeeComponent}></Route>
                
                
                {/* <Route path="/update-goods/:id" component={UpdateGoodsComponent}></Route> */}
                
              </Switch>
            </div>
          <FooterComponent/>
        </div>
      </Router>
    </div>
  );
}


export default App;
