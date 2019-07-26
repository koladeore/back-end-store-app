import express from 'express';
import bodyParser from 'body-parser';
import route from './src/routes';

const app = express();
app.use(bodyParser.json());
const PORT = 9000;

app.get('/', (req, res) => res.send('The API is working'));

route(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Sever is running on Port ${PORT}`);
});
