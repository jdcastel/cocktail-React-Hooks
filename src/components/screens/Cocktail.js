import { Provider, useDispatch, useSelector } from "react-redux";
import { getCocktailAsync } from "../../redux/cocktail/cocktailThunk";
import store from "../../store";
import { useEffect, useState } from "react";
import Tarjeta from "../controls/Tarjeta";
import { Grid } from "@mui/material";


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
    <Grid container>
      <Grid item sm={12}>
        <input
          type="text"
          name="name"
          value={filter}
          onChange={onChangeHandler}
        />
        <button onClick={handleButton}>Submit</button>
      </Grid>
      <Grid item sm={12} sx={{ backgroundColor: "red" }}>
        {drinks &&
          drinks.map((x, i) => 
            <Grid item sm={4} >
              <div height={100}>hola</div>
              {/* <Tarjeta key={i} cocktail={x} />; */}
            </Grid>
          )}
      </Grid>

    </Grid>
  );
}

export default Cocktail;
