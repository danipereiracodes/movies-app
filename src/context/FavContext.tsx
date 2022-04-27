import { createContext } from "react";

const FavContext = createContext({
    favState: {
        favs:[],
        active:true
    }
})

export default FavContext