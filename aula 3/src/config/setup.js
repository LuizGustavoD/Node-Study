export const initialSetup = () => {
  return {
    appName: 'My Application',
    version: '1.0.0',
    environment: 'development',
    database: {
      host: 'localhost',
      port: 5432,
      username: 'user',
      password: 'password',
      name: 'my_database',
    },
    server: {
      port: 3000, 
    },
    logging: {
      level: 'info',
      format: 'combined',
    },
  };
}