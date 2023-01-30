import { Backdrop, CircularProgress } from "@mui/material";
import { color } from "@mui/system";
import { useSelector } from "react-redux";


 const Loader = () => {       
  const procesando = useSelector((state) => state.cocktail.procesando);
return(
<div>
  <Backdrop sx={{ color: "#FFF", zIndex: "99" }} open={procesando}>
    <CircularProgress color="inherit" />
  </Backdrop>
</div>
)}
 export default Loader;