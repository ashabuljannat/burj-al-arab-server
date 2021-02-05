const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient;

// const pass = 'volunteer0193'
// const userName = 'volunteer'
// const dbName = 'volunteer'

const uri = "mongodb+srv://volunteer:volunteer0193@cluster0.vgs8p.mongodb.net/hotelBook?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true,  useUnifiedTopology: true });
client.connect(err => {
  const hotelBooking = client.db("hotelBook").collection("hotelBooking");
   console.log('database connection ok');

    app.post('/addBooking',(req, res) => {
        const newBooking = req.body;
        hotelBooking.insertOne(newBooking)
        .then(result => (console.log(result)))
        console.log(newBooking);
    })
    app.get('/bookings',(req, res) => {
      hotelBooking.find({email: req.query.email})
      .toArray((err, bookings) =>{
        res.send(bookings)
      })
    })
});

app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/',(req, res) => {
    res.send('server is listening...')
})

app.listen(5000)

