const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const dotenv = require('dotenv')
const terrenosRoute = require("./routes/terrenosRoutes")
const sequelize = require("./config/database")

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cors());
app.use(helmet());
app.use('/terrenos', terrenosRoute)

async function syncDB() {
    try {
      await sequelize.sync({ force: true, alter: false, logging: false });
    } catch (error) {
      console.error('Error de conexión a la base de datos:', error);
    }
  }
  
  syncDB();


app.listen(PORT, () => {
    console.log(`SERVER on port ${PORT}`);
})
