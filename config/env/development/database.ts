export default ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            connectionString: env('DATABASE_URL')
        },
        acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    }
});

// export default ({ env }) => ({
//   connection: {
//     client: "sqlite",
//     connection: {
//       filename: ".tmp/data.db",
//     },
//     useNullAsDefault: true,
//   },
// });