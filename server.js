const { PORT } = require('./config/const');
const logger = require('./src/service/logger');

require('./src/service/database')();

const app = require('./src/app');

app.listen(PORT, () => {
  logger.debug(`server started at: ${PORT}`);
});
