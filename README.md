# Social Network API

This is an implementation of a social network API using Node.js, Express, and MongoDB with Mongoose.

## Getting Started

1. Clone the repository:

git clone https://github.com/hlampton/the-social-network-api.git

2. Install the dependencies:

npm install

3. Start the MongoDB server:

mongod

4. Start the API server:

npm start

5. Test the API using a tool such as Insomnia.

## API Routes

The API has the following routes:

- `GET /api/users`: Returns all users.
- `GET /api/users/:id`: Returns a specific user by ID.
- `POST /api/users`: Creates a new user.
- `PUT /api/users/:id`: Updates a specific user by ID.
- `DELETE /api/users/:id`: Deletes a specific user by ID.
- `GET /api/thoughts`: Returns all thoughts.
- `GET /api/thoughts/:id`: Returns a specific thought by ID.
- `POST /api/thoughts`: Creates a new thought.
- `PUT /api/thoughts/:id`: Updates a specific thought by ID.
- `DELETE /api/thoughts/:id`: Deletes a specific thought by ID.
- `POST /api/reactions`: Creates a new reaction.
- `DELETE /api/reactions/:id`: Deletes a specific reaction by ID.

## Built With

- Node.js
- Express
- MongoDB
- Mongoose

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b my-new-feature`.
3. Commit your changes: `git commit -am 'Add some feature'`.
4. Push to the branch: `git push origin my-new-feature`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
