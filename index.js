const express = require('express');
const app = express();
const config = require('./config');

const Exercise  = require('./models/Exercise');
const Exercise_Category = require('./models/exercise_category');
const User_Info = require('./models/user_info');

const cors = require('cors');
const bcrypt = require('bcrypt');
const saltRounds = 10;

app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({extended: false}));




app.post('/signup', function(req, res){

    let plainPassword = req.body.password;

    bcrypt.hash(plainPassword, saltRounds, function(err, hash) {
        
        let user_data = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            contact: req.body.contact,
            password: hash
        };

        User_Info.create(user_data).then((result) => {
            res.status(200).send(result);
        }).catch((err) => {
            res.status(500).send(err);
        });

    });    
});

app.post('/login', function(req, res){

    let email = req.body.email;
    let password = req.body.password;
    let user_data = {
        where: {email} 
    }
    
    User_Info.findOne(user_data).then((result) => {

        if(result){
            console.log(result);
            bcrypt.compare(password, result.password, function(err, output) {
                console.log(output);
                if(output){
                    res.status(200).send(result);
                }else{
                    res.status(400).send('Incorrect password.');
                }
            });            
        }
        else{
            res.status(404).send('User does not exist.');
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
        
});


app.get('/userinfo', function(req, res) {
    User_Info.findAll().then(function(results){
        res.status(200).send(results);
    }).catch(function (err){
        res.status(500).send(err);
    })
})




Exercise.belongsTo(Exercise_Category, {
    foreignKey: "exe_cat_id"
});

Exercise_Category.hasMany(Exercise, {
    foreignKey: "exe_cat_id"
});



config.authenticate().then(function(){
    console.log('Database is connected.');
}).catch(function(err){
    console.log(err);
});


app.get('/exercises', function(req, res) {
    Exercise.findAll().then(function(results){
        res.status(200).send(results);
    }).catch(function (err){
        res.status(500).send(err);
    })
})


app.get('/exercises/:exe_cat_id', function(req, res){
    let catId = req.params.exe_cat_id;

    let data = {
        where: {exe_cat_id: catId}
    }

    Exercise.findAll(data).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
});



app.get('/exercise_categories', function (req, res) {
    let data = {
        include: Exercise
    }
    Exercise_Category.findAll(data)
    .then(function (results){
        res.status(200).send(results);
    })
    .catch(function (err) {
        res.status(500).send(err);
    })
})



app.post('/exercises', function(req, res){
    Exercise.create(req.body).then((results) => {
        return res.status(200).send(results);
    }).catch((err) => {
        return res.status(500)  .send(err)
    });
})



app.listen(3000, function() {
    console.log('Server running on port 3000...')
})