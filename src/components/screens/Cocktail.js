import { Provider, useDispatch, useSelector } from "react-redux";
import { getCocktailAsync } from "../../redux/cocktail/cocktailThunk";
import store from "../../store";
import { useEffect, useState } from "react";

function Cocktail() {
  const [filter, setFilter] = useState("");

  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.cocktail.drinks);

  const handleButton = () => {
    dispatch(getCocktailAsync(filter));
  };

  const onChangeHandler = (event) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    console.log(drinks);
  }, [drinks]);

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={filter}
          onChange={onChangeHandler}
        />
        <button onClick={handleButton}>Submit</button>
      </div>
      <div>
        {drinks &&
          drinks.drinks.map((x, i) => {
            return <h3 key={i}>{x.strDrink}</h3>;
          })}
      </div>
    </>
  );
}

export default Cocktail;
