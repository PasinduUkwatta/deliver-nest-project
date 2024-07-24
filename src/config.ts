export default {
  mongo: {
    username:  'upasinduukwatta',
    password: 'VpwB4xI8VLMRbSpZ',
  },
  mysql: {
    username: process.env.MYSQL_USERNAME || 'default_username',
    password: process.env.MYSQL_PASSWORD || 'default_password',
    host: process.env.MYSQL_HOST || 'localhost',
    database: process.env.MYSQL_DATABASE || 'your_database_name',
  },
};
