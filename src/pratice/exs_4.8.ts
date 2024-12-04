interface IPayment1 { // business entity
    sum: number,
    from: number,
    to: number,
}

enum PaymentStatus {
    Success = 'success',
    Failed = 'failed'
}

interface IPaymentRequest1 extends IPayment1 { }

interface IDataFailed2 {
    errorMessage: string,
    errorCode: number,
}

interface IDataSuccess2 extends IPayment1 {
    databaseId: number,
}


//! не совсем верный подход, так мы не можем разделить по статусу какая конкретно будет data.
//! Данный интерфес будет подразумевать что у сатуса success может быть дата от IResponseFailed, что не верно

interface ServerAnswer {
    status: PaymentStatus,
    data: IDataFailed2 | IDataSuccess2
}

//! павильный подход разделить данные чуть выше, на уровне ответа, а не данных

interface IResponseSuccess2 {
    status: PaymentStatus.Success,
    data: IDataSuccess2,
}

interface IResponseFailed2 {
    status: PaymentStatus.Failed,
    data: IDataFailed2,
}

//! использование

const get = (): IResponseSuccess2 | IResponseFailed2 => { }

// Запрос в виде платежа
{
    "sum": 10000,
        "from": 2,
            "to": 4
}
// Ответ
{
    "status": "success",
        "data": {
        "databaseId": 567,
            "sum": 10000,
                "from": 2,
                    "to": 4
    }
},
{
    "status": "failed",
        "data": {
        "errorMessage": "Недостаточно средств",
            "errorCode": 4
    }
}