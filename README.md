# prisma-highlight-bug

To reproduce the issue, run the steps below:

```
npm install
npm run build
npm run start
```

You don't need an actual database since the error is thrown before the database is connected.
If you want to test with a database, create a `.env` file with DATABASE_URL set to a valid PostgreSQL database URL and run the following command to initialize the database:

```
npx prisma migrate dev
```

This project also uses a placeholder `foo` project id for highlight. If you want to test with a real project, you can create one in highlight.io and replace with your project id.