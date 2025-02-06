const express = require('express');
const mongoose = require('mongoose');
const birthdayRoutes = require('./routes/birthdayRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

const cors = require('cors');
app.use(cors());
app.use(express.json());

app.use('/birthdays', birthdayRoutes);

mongoose
  .connect(
    'mongodb+srv://narrensingh31:narren2006%3FMango@cluster0.3k2fg.mongodb.net/birthdayDB?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
