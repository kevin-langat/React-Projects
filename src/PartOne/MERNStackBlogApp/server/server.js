require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/index');
const blogRouter = require('./routes/blog-routes');

const app = express();
app.use(cors());
app.use(express.json());

// connect To database fn
connectToDb();

// using blog routes
app.use('/api', blogRouter);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
