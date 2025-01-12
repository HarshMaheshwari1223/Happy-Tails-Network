const express = require('express');
const cors = require('cors');

const {mongoose}=require('mongoose');
const {mongourl} = require('./keys');


const app = express();
const port = 5000 ;

app.use(cors());
// eske neche sare db files

require('./Database/addpet.js')


app.use(express.json());

// eske neche sare api files 

app.use(require('./routes/addactivity.js'));
app.use(require('./routes/details.js'));

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});

// -------------------------------------------------------------------------------------------------------------------------------------------------

mongoose.connect(mongourl);

mongoose.connection.on('connected',()=>{
    console.log('Mongoose is connected');
});

mongoose.connection.on('error',(err)=>{
    console.log('Mongoose connection error:',err);
});
