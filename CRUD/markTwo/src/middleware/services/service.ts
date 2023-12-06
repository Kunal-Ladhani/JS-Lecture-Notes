import { Path } from 'typescript-rest';

@Path('/hello')
class Service {

    getUsers(): Array<Number> {
        return [1, 2, 3, 4, 5];
    }
}

export { Service };