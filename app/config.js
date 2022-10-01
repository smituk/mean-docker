global.config = {};

config.port = process.env.PORT;

// GUI https://github.com/Studio3T/robomongo
// https://download.studio3t.com/robomongo/mac/robo3t-1.4.4-darwin-x86_64-e6ac9ec.dmg
config.mongo = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=admin`;