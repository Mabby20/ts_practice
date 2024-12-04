interface ILogger {
    log(...args: any[]): void //* arrow fn
    error(...args: any[]): void //* function declaration
}

//! в данном случае с помощью интерфейса ILogger мы абстрагировались от конкретной реализации логера, согласовывая основные методы и свойства классов.
//! Логирование может быть разным (в базу, консоль, файл), но важно наличие универсальных методов (log, error).
//! Создание интерфейса ILoger предопределяет наличие этих методов в любой реализации логера.

class Logger implements ILogger {
    log(...args: any[]): void {
        console.log(...args)
    }
    error(...args: any[]): void {
        console.error(...args)
    }
}