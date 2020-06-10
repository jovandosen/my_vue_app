export default {
    posts: [
        { id: 1, title: 'Foo', content: 'Foo content', author: 'John', status: 'published', slug: 'foo' },
        { id: 2, title: 'Bar', content: 'Bar content', author: 'Jane', status: 'deleted', slug: 'bar' },
        { id: 3, title: 'Baz', content: 'Baz content', author: 'Jack', status: 'published', slug: 'baz' },
        { id: 4, title: 'Dev', content: 'Dev content', author: 'Jasmin', status: 'published', slug: 'dev' },
        { id: 5, title: 'Test', content: 'Test content', author: 'Lilly', status: 'pending', slug: 'test' }
    ],
    users: [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', age: 32, gender: 'Male', role: 'admin' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', age: 40, gender: 'Female', role: 'editor' },
        { id: 3, firstName: 'Jack', lastName: 'Smith', email: 'jacksmith@gmail.com', age: 22, gender: 'Male', role: 'subscriber' },
        { id: 4, firstName: 'David', lastName: 'Johnson', email: 'david@gmail.com', age: 52, gender: 'Male', role: 'admin' },
        { id: 5, firstName: 'Lilly', lastName: 'Lock', email: 'lillylock@gmail.com', age: 25, gender: 'Female', role: 'author' }
    ]
}