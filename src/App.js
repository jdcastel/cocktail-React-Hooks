import "./App.css";
import Cocktail from "./components/screens/Cocktail";
import { Provider, useDispatch } from "react-redux";
import store from "./store";
import Loader from "./components/utils/Loader";

function App() {
  return (
    <>
      <Provider store={store}>
        <Loader />
        <Cocktail />
      </Provider>
    </>
  );
}

export default App;
