# NestJS - Prisma - GraphQL template

## Description

NestJS GraphQL API with Prisma ORM and PostgreSQL database.

## Project Setup

### 1. Install Dependencies

```bash
# Install project dependencies
$ npm install
```

### 2. Create Local Environment File

Create a `.env` file in the root directory with the following content:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/my_database?schema=public"

# Optional: If you need to configure database connection separately
# DATABASE_USERNAME=postgres
# DATABASE_PASSWORD=postgres
# DATABASE_HOST=localhost
# DATABASE_PORT=5432
# DATABASE_NAME=my_database
```

### 3. Start Local Database

```bash
# Using Docker Compose (the docker-compose.yaml file is already provided)
$ docker-compose up -d
```

### 4. Generate Prisma Client

```bash
# Generate Prisma client based on your schema
$ npx prisma generate
```

### 5. Generate GraphQL Types

```bash
# Generate TypeScript types from GraphQL schema
$ npm run gen:graphql-types
```

## Running the Application

```bash
# development
$ npm run start

# watch mode
$ npm run dev

# production mode
$ npm run start:prod
```

## GraphQL Playground

Once the application is running, you can access the GraphQL playground at:

```
http://localhost:3000/graphql
```

Example mutation to create a user:

```graphql
mutation CreateUser {
  createUser(
    createUserInput: {
      email: "user@example.com"
      password: "securePassword123"
      name: "John Doe"
    }
  ) {
    id
    email
    name
    createdAt
    updatedAt
  }
}
```

## Testing

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
