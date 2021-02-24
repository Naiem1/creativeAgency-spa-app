const express = require('express')
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config()
const fileUpload = require('express-fileupload')


const port = 5000
const cors = require('cors');

const app = express()
app.use(bodyParser.json())
app.use(cors());
app.use(express.static('images'))
app.use(fileUpload())


app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  const uri = `mongodb+srv://${process.DB_USER}:${process.env.DB_PASS}/${process.DB_NAME}?retryWrites=true&w=majority`;
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const serviceCollection = client.db("creative-agency").collection("services");
    const orderCollection = client.db("creative-agency").collection("orders");
    const reviewCollection = client.db("creative-agency").collection("reviews");
    const adminCollection = client.db("creative-agency").collection("admins");
        console.log('Mongodb connected');

        app.post('/addService', (req, res) => {
            const file = req.files.file;
            const title = req.body.title;
            const desc = req.body.desc;
            console.log(title,desc,file);
            const info = {
                title: title,
                path: `/${file.name}`,
                desc: desc
            }

            file.mv(`${__dirname}/images/${file.name}`, error =>{
                if(error){
                    console.log(error);
                    return res.status(500).send({msg: 'Failed to upload Image'})
                }
                serviceCollection.insertOne(info)
                .then(result =>{
                    console.log(result);
                })
                return res.send({name: file.name, path: `/${file.name}`})
            })
        })

        app.get('/services', (req, res) => {
            serviceCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
        })

        app.post('/addOrder',(req, res) => {
            const file = req.files.file;
            const newOrder = {
                name:req.body.name,
                file:`/${file.name}`,
                email:req.body.email,
                photoURL:req.body.photoURL,
                details:req.body.details,
                price:req.body.price,
                service:req.body.service,
                serviceIcon:req.body.serviceIcon,
                status:'Pending'
            };
            orderCollection.insertOne(newOrder)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
            .catch(err => {
                console.log(err)
            })

        })

        app.get('/userOrder/:email', (req, res) => {
            orderCollection.find({email: req.params.email})
            .toArray((err, document) => {
                res.send(document)
            })
        })

        app.post('/addReview', (req,res) => {
            reviewCollection.insertOne(req.body)
            .then(result => {
                res.send(result.insertedCount > 0)
            })
        })

        app.get('/reviews', (req, res) => {
            reviewCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
        })

        app.get('/serviceList', (req, res) => {
            orderCollection.find({})
            .toArray((err, document) => {
                res.send(document)
            })
        })

        app.patch('/updateStatus/:id',(req, res) => {
            orderCollection.updateOne({_id: ObjectId(req.params.id)}, 
            {
                $set: {status: req.body.status}
            })
            .then(result => {
                res.send(result.modifiedCount > 0)
            })
        }) 

        app.get('/addAdmin/:email', (req, res) => {
            adminCollection.insertOne({email: req.params.email})
            .then(result => {
                res.send(result.insertedCount > 0)
            })
        })

        app.get('/checkAdmin/:email', (req, res) => {
            adminCollection.find({email: req.params.email})
            .toArray((err, document) => {
                if(document[0].email){
                    res.send(document[0])
                }
                else{
                    res.send(false)
                }
            })
        })
        





    // client.close();
  });
  

  app.listen(process.env.PORT || port);