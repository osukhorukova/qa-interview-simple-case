import { faker } from '@faker-js/faker';

export function randomUserGenerator() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = `${firstName}${lastName}${faker.number.int(100)}@test.com`;
    const password = faker.internet.password({ length: 9 });

    return {
        firstName,
        lastName,
        email,
        password,
    };
}

export const existingUsers = [
    {
        email: 'test1@mail.com',
        password: 'testPassword!',
        firstName: 'Test1',
        lastName: 'Testsson1',
    },
    {
        email: 'test2@mail.com',
        password: 'testPassword!',
        firstName: 'Test2',
        lastName: 'Testsson2',
    },
    {
        email: 'test3@mail.com',
        password: 'testPassword!',
        firstName: 'Test3',
        lastName: 'Testsson3',
    },
] as const