import "./App.css";
import Cocktail from "./components/screens/Cocktail";
import { Provider, useDispatch } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Cocktail />
      </Provider>
    </>
  );
}

export default App;
