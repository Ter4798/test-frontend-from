import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import FormData from "./pages/FormData";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
          <Route path="/formData">
            <FormData/>
          </Route>
          <Route path="/detail/:id">
            <DetailPage/>
          </Route>
        </Switch>
    </Router>
    </>
  );
}

export default App;
