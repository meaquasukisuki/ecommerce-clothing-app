const getters = {
    getShopItemByTitle:function (state) {
        return function (title) {
            return state.allShopItems[title]
        }
    },
    getCount: (state) => state.cartItemsCounter,
    getCartItems:(state) => state.cartItems.items,
    getTotalMoney:(state) => {
        let {cartItems} = state;
        const total =  cartItems.items.reduce((acc,item) => {
            return acc + item.quantity * item.price
        },0)
        console.log(total)
        return total;
    }
};

export default getters;