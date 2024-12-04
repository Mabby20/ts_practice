class Product {
    public id: number
    public name: string
    public price: number

    constructor(id: number, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }
}

class Delivery {
    date: Date

    constructor(date: Date) {
        this.date = date
    }
}

class HomeDelivery extends Delivery {
    address: string

    constructor(address: string, date: Date) {
        super(date);
        this.address = address
    }
}

class ShopDelivery extends Delivery {
    shopId: number

    constructor(shopId: number, date: Date) {
        super(date);
        this.shopId = shopId
    }
}

type DeliveryOptions = HomeDelivery | ShopDelivery

class Cart {
    private products: Product[] = []
    private delivery: DeliveryOptions

    addProduct(product: Product): void {
        this.products.push(product)
    }

    deleteProduct(productId: number): void {
        this.products = this.products.filter((p) => p.id !== productId)
    }

    getSum(): number {
        return this.products.reduce((acc, { price }) => acc + price, 0)
    }


    setDelivery(delivery: DeliveryOptions): void {
        this.delivery = delivery
    }

    checkout(): boolean {
        if (this.products.length < 1) {
            throw new Error('корзина пуста')
        }

        if (!this.delivery) {
            throw new Error('доставка не оформлена')
        }

        return true
    }
}

const cart = new Cart();

cart.addProduct(new Product(1, 'asdf1', 12))
cart.addProduct(new Product(2, 'asdf1', 12))
cart.addProduct(new Product(3, 'asdf1', 12))
cart.deleteProduct(1)
cart.setDelivery(new HomeDelivery('asdf', new Date(),))

console.log(cart)
console.log(cart.getSum())
console.log(cart.checkout())