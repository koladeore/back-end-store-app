import express, { json } from 'express';
import route from './src/routes';

const app = express();
app.use(json());
const PORT = 9000;

app.get('/', (req, res) => res.send('The API is working'));

route(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
