//! если класс не имеет модификатора abstract - то и методы не могут быть абстрактными.
//! от абстрактного класса можно только унаследоваться, создать его инстанс нельзя.

abstract class Controller {
    //! описывает сигнатуру абстрактного метода.
    abstract handle(rea: string): void

    handleWithLogs(req: string) {
        console.log('start')
        //! могу обратиться к абстрактному методу, потому что абстрактный класс обязывает реализовать этот метод в наследуемом классе. 
        this.handle(req);
        console.log('end')
    }
}

// const controller = new Controller() - будет ошибка так как абстрактный класс

class UserController extends Controller {
    handle(req: string) {
        console.log(req)
    }
}

const userController = new UserController()
Math.random()
userController.handleWithLogs('hello aboba')