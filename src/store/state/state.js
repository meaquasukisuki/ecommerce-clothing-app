import SHOP_DATA from "../../data/shop.data";
import {sections} from "../../data/directory.data";

let state = {
    allShopItems:SHOP_DATA,
    homepageShopItems:sections,
    cartItemsCounter:1,
    cartItems:{
        items:[]
    },
    userObj: null
}

export default state;