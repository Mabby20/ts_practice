type PaymentStatus1 = 'new' | 'paid';

class Payment {
    id: number
    status: PaymentStatus1 = 'new'

    constructor(id: number) {
        this.id = id
    }

    pay() {
        this.status = 'paid'
    }
}

class PersistentPayment extends Payment {
    databaseId: number
    paidAt: Date

    constructor() {
        const id = Math.random();

        //! вызываем с помощью super конструктор класса от которого наследуемся
        super(id)
    }

    save() {
        //---
    }

    //! можем расширить или добавить логику для метода который достался от наследуемого класса
    //! override - позволяет явно понять что мы переопределили метод,
    //! а не создали новый с таким же именем перезатерев старый метод, который унаследовался
    //! таким образом расширили метод paid

    override pay(date?: Date) {
        //* super по сути дает нам ref к нашему классу от которого наследуемся, соответсвенно и к его методам
        super.pay()

        if (date) {
            this.paidAt = date
        }
    }
}