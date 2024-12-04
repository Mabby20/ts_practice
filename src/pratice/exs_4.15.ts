interface IPayment1 {
    sum: number;
    from: number;
    to: number;
}

interface IPaymentRequest1 extends IPayment1 { }

interface IDataSuccess2 extends IPayment1 {
    databaseId: number;
}

interface IDataFailed2 {
    errorMessage: string;
    errorCode: number;
}

interface IResponseSuccess2 {
    status: PaymentStatus.Success;
    data: IDataSuccess2;
}

interface IResponseFailed2 {
    status: PaymentStatus.Failed;
    data: IDataFailed2;
}

const isResponseFailed = (resp: IResponseSuccess2 | IResponseFailed2): resp is IResponseFailed2 => {
    return resp.status === PaymentStatus.Failed
}

const getResponseStatus = (resp: IResponseSuccess2 | IResponseFailed2): number => {
    if (!isResponseFailed(resp)) {
        return resp.data.databaseId;
    } else {
        throw new Error(resp.data.errorMessage)
    }
}