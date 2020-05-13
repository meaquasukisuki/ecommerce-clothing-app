const mutations = {
    increaseCounter:(state) => {
        state.cartItemsCounter++;
    },

    addCartItem:(state,item) => {

        import('../../router/index').then(res => {
            let router = res.default;
            let {userObj} = state;
            if (!userObj) {
                router.push('/404');
                alert('Please login first!');
            }
        })

        let {cartItems} = state;
        let matchedItem = cartItems.items.find((cartItem) => {
            return cartItem.id === item.id
        });
        if (!matchedItem) {
            cartItems.items.push({...item,quantity:1})
            cartItems = {...cartItems}
        }
        else {
            matchedItem = {...matchedItem,quantity:matchedItem.quantity++}
        }


    },

    deleteCartItem:(state,item) => {
        console.log(this)
        let {cartItems} = state;
        if (item.quantity === 1) {
            this.removeItemFromCart(state,item);
        }
        else {
            item = {...item,quantity:item.quantity--};
            cartItems = {...cartItems}
        }
        console.log(item,cartItems)
    },

    removeItemFromCart:(state,item) => {
        let {cartItems} = state;
        cartItems.items.find((cartItem,index) => {
            if (cartItem.id === item.id) {
                cartItems.items.splice(index,1)
                return true
            }
        })
        cartItems.items = [...cartItems.items];
        cartItems = {...cartItems}
    },

}

export default mutations;