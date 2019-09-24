import { IUser } from '../interfaces/iuser';
export class UsersFakeDb {
    public static users_data = [
        {
            'ID': 1,
            'FIRST_NAME': 'Prueba Uno',
            'LAST_NAME': 'Apellido Prueba Uno',
            'EMAIL': 'pruebauno@gmail.com',
            'PASSWORD': '123123'
        },
        {
            'ID': 2,
            'FIRST_NAME': 'Prueba Dos',
            'LAST_NAME': 'Apellido Prueba Dos',
            'EMAIL': 'pruebados@gmail.com',
            'PASSWORD': '123123'
        }, 
        {
            'ID': 3,
            'FIRST_NAME': 'Prueba Tres',
            'LAST_NAME': 'Apellido Prueba Tres',
            'EMAIL': 'pruebatres@gmail.com',
            'PASSWORD': '123123'
        },
        {
            'ID': 4,
            'FIRST_NAME': 'Prueba Cuatro',
            'LAST_NAME': 'Apellido Prueba Cuatro',
            'EMAIL': 'pruebacuatro@gmail.com',
            'PASSWORD': '123123'
        },
        {
            'ID': 5,
            'FIRST_NAME': 'Prueba Cinco',
            'LAST_NAME': 'Apellido Prueba Cinco',
            'EMAIL': 'pruebacinco@gmail.com',
            'PASSWORD': '123123'
        },
    ];
}