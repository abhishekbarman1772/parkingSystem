const log4js = require("log4js");
log4js.configure({
    appenders: {
        Parking: { type: "file", filename: "./logs/application.log" },
        console: { type: 'stdout' },
    },
    categories: { default: { appenders: ["Parking", "console"], level: "debug" } }
});

const logger = log4js.getLogger("Parking");
logger.level = "debug";

module.exports = logger;