const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

// the app file should be always after the env variable are read
const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
