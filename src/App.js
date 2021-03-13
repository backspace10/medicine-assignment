import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/elements/Navbar";
import AddMedicine from "./components/medicine/AddMedicine";
import EditMedicine from "./components/medicine/EditMedicine";
import Home from "./components/medicine/Home";
import store from "./store";
import "./styles/App.scss";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/medicines/add" component={AddMedicine} />
                <Route
                  exact
                  path="/medicines/edit/:id"
                  component={EditMedicine}
                />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
