import express, { json, urlencoded } from 'express';
import indexRoutes from './src/routes/index';

const app = express();
app.use(json());
app.use(urlencoded({ extended: false }));
const PORT = 4000;

const API_VERSION = '/api/v1';

app.use(`${API_VERSION}`, indexRoutes);

app.get('/', (req, res) => res.send('The API is working'));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${PORT}`);
});

export default app;
