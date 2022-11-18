const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
const static_path = path.join(__dirname, '../public')
require('./db/conn')


const signup = require('./models/signup')
app.use(express.static(static_path))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render("index", {
        warning: ''
        , secuss: ''
        // user_name: ''
    })
})

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.post('/signup', async (req, res) => {
    try {
        // const firstname = req.body.firstname
        // const lastname = req.body.lastname
        // const username = req.body.email_address
        // const password = req.body.password
        // const cpassword = req.body.cpassword
        const {
            firstname,
            lastname,
            email_address,
            password,
            cpassword
        } = req.body
        if (password === cpassword) {
            const UserData = new signup({
                firstname: firstname,
                number: lastname,
                email_address: email_address,
                password: password,
                cpassword: cpassword
            })
            const useremail = await signup.findOne({ email_address: email_address })
            if (useremail != null) {
                if (email_address === useremail.email_address) {
                    res.render("index", {
                        warning: 'username already in database',
                        secuss: ''
                    })
                }
                
            }
            UserData.save(function (err, doc) {
                if (err) res.render('index', { warning: 'Please Fill all the feilds!!', secuss: '' });
                else res.render('index', { warning: '', secuss: 'Secussfully inserted your information in our database' });
            });
        } else {
            res.render("index", {
                warning: 'password not match',
                secuss: ''
            })
        }
    } catch { res.status(400) }
})



// login
app.post('/login', (req, res) => {

    const {
        login_email_address,
        login_password
    } = req.body
    signup.findOne({ email_address: login_email_address }, (err, result) => {
        console.log(result);
        if (login_email_address === result.email_address && login_password === result.password) {
            res.render('admin-page',{
                user_name:result.firstname,
                phone_number:result.number,
                email_address:result.email_address
            })
        } else {
            res.render("index", {
                warning: 'Invalid username or password!!'
                , secuss: ''
            })
        }
    })
})


app.listen(port, (req, res) => {
    console.log(`server listening at http://localhost:${port}`)
})