import express, { json } from 'express';
import indexRoutes from './src/routes/index';

const app = express();
app.use(json());
const PORT = 4000;

app.get('/', (req, res) => res.send('The API is working'));

const API_VERSION = '/api/v1';

app.use(`${API_VERSION}`, indexRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});
