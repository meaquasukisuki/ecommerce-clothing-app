const actions = {
    deleteCartItem({commit,state},item) {
        let {cartItems} = state;
        if (item.quantity === 1) {
            commit('removeItemFromCart',item);
        }
        else {
            item = {...item,quantity:item.quantity--};
            cartItems = {...cartItems}
        }
        console.log(cartItems)
    }

}

export default actions;