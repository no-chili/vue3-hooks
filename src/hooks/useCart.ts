import { } from "element-plus"
import { computed, ref } from "vue"
const cart = ref<Cart>({
    items: []
})
export const useCart = () => {
    const addToCart = async (item: Goods) => {
        const cartItem = cart.value.items.find((cartItem) => cartItem.GoodsId === item.id)
        if (cartItem) {
            updateQuantity(cartItem, cartItem.quantity + 1)
        } else {
            cart.value.items.push({
                GoodsId: item.id,
                quantity: 1,
                naem: item.name,
                price: item.price
            })
        }
    }

    const removeFromCart = async (item: CartItem) => {
        const index = cart.value.items.findIndex(cartItem => item.GoodsId === cartItem.GoodsId)
        cart.value.items.splice(index, 1)
    }

    const updateQuantity = (item: CartItem, quantity: number) => {
        item.quantity = quantity
    }

    const totalCartItem = computed(() => {
        return cart.value.items.reduce((pre, cur) => {
            return pre + cur.quantity
        }, 0)
    })

    const isEmpty = computed(() => {
        return cart.value.items.length === 0
    })

    const cartItemChang = (item: CartItem) => {
        if (item.quantity === 0) {
            removeFromCart(item)
        }
    }

    return {
        cart,
        isEmpty,
        totalCartItem,
        addToCart,
        updateQuantity,
        removeFromCart,
        cartItemChang
    }
}