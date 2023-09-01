export default () => ({
  port: parseInt(process.env.API_PORT, 10) ?? 3001,
  prefix: process.env.API_PREFIX ?? '/api',
  db: {
    host: process.env.DB_HOST ?? 'mongo',
    name: process.env.DB_NAME ?? 'nest',
    port: parseInt(process.env.DB_PORT, 10) ?? 27017,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    uri: `mongodb://${process.env.DB_HOST ?? 'mongo'}:${parseInt(process.env.DB_PORT, 10) ?? 27017}/${process.env.DB_NAME ?? 'nest'}`,
  },
  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn: process.env.JWT_EXPIRATION ?? '10m',
    refreshExpiresIn: process.env.JWT_EXPIRATION ?? '2h',
  },
});