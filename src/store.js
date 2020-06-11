export default {
    posts: [
        { id: 1, title: 'Foo', content: 'Foo content', author: 'John', status: 'published', slug: 'foo', image: 'equalizer.jpg' },
        { id: 2, title: 'Bar', content: 'Bar content', author: 'Jane', status: 'deleted', slug: 'bar', image: 'halloween.jpg' },
        { id: 3, title: 'Baz', content: 'Baz content', author: 'Jack', status: 'published', slug: 'baz', image: 'hangover.jpg' },
        { id: 4, title: 'Dev', content: 'Dev content', author: 'Jasmin', status: 'published', slug: 'dev', image: 'inception.jpg' },
        { id: 5, title: 'Test', content: 'Test content', author: 'Lilly', status: 'pending', slug: 'test', image: 'knight.jpg' }
    ],
    users: [
        { id: 1, firstName: 'John', lastName: 'Doe', email: 'johndoe@gmail.com', age: 32, gender: 'Male', role: 'admin', username: 'john', avatar: 'john.jpg' },
        { id: 2, firstName: 'Jane', lastName: 'Doe', email: 'janedoe@gmail.com', age: 40, gender: 'Female', role: 'editor', username: 'jane', avatar: 'jane.jpg' },
        { id: 3, firstName: 'Jack', lastName: 'Smith', email: 'jacksmith@gmail.com', age: 22, gender: 'Male', role: 'subscriber', username: 'jack', avatar: 'jack.jpg' },
        { id: 4, firstName: 'David', lastName: 'Johnson', email: 'david@gmail.com', age: 52, gender: 'Male', role: 'admin', username: 'david', avatar: 'david.jpg' },
        { id: 5, firstName: 'Lilly', lastName: 'Lock', email: 'lillylock@gmail.com', age: 25, gender: 'Female', role: 'author', username: 'lilly', avatar: 'lilly.jpg' }
    ],
    comments: [
        { id: 1, postID: 1, userID: 1, text: 'This is comment one.' },
        { id: 2, postID: 1, userID: 2, text: 'This is comment two.' },
        { id: 3, postID: 2, userID: 2, text: 'This is comment three.' },
        { id: 4, postID: 3, userID: 3, text: 'This is comment four.' },
        { id: 5, postID: 4, userID: 4, text: 'This is comment five.' }
    ],
    news: [
        { id: 1, title: 'Test one', description: 'Test one description' },
        { id: 2, title: 'Test two', description: 'Test two description' },
        { id: 3, title: 'Test three', description: 'Test three description' }
    ]
}