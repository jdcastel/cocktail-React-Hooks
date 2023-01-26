import axios from 'axios'

export const cocktailApi=async(filter)=>{
    return await axios
     .get("https://www.thecocktaildb.com/api/json/v1/1/search.php?f="+filter)
     .then( (response)=> {
       return response;
     })
     .catch( (error)=> {
       console.log(error);
     });
}
