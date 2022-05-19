type Goods = {
    id: number,
    name: string,
    price: number,
    stock?: number
    [key: string]: any
}
type Cart = {
    items: CartItem[]
}
type CartItem = {
    GoodsId: number,
    quantity: number,
    naem: string,
    price: number
}