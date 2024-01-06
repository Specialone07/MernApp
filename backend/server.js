const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const bodyParser=require('body-parser')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('./models/userSchema')
const Form = require('./models/formSubmit'); 

const dotenv =require('dotenv');
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || 'default-secret-key';


//connect to express app
const app =express();

//connect to mongo db
const DB_URI='mongodb+srv://bibekpuri34:QwxvJv50XaxHYcPl@cluster30.sva5gvn.mongodb.net/UserDB?retryWrites=true&w=majority'


mongoose.connect(DB_URI)  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });


//middleware
app.use(bodyParser.json())

  app.use(function (req, res, next) {
    //Enabling CORS
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, 
    Accept, x-client-key, x-client-token, x-client-secret, Authorization");
      next();
    });

app.use(cors({
  origin:['https://mern-app-frontend-one.vercel.app'],
  methods:["POST",'GET'],
  credentials:true
}));



//routes 
app.options('/register', cors()); 
app.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ email, username, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'Signed up' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Error in signing up' });
    }
});

// Get registered users
app.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Unable to get users' });
    }
});

//get login
app.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        // Assuming SECRET_KEY is defined somewhere in your code
        const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1hr' });

        res.status(200).json({ message: "Login successful" });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Unable to process login' });
    }
});
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
  
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) {
        return res.status(401).json({ error: 'Invalid token' });
      }
  
      req.userId = decoded.userId;
      next();
    });
  };
  
  app.post('/ContactUs', async (req, res) => {
    try {
        const { email, name, message } = req.body;

        // Check for missing or empty fields
        if (!name || !message) {
            return res.status(400).json({ error: 'Name and message are required' });
        }

        const formData = { email, name, message };
        const form = new Form(formData);
        await form.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (e) {
        console.error(e);
        res.status(500).json({ error: 'Error in form submission' });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
  // ...
  

//routes to handle submission
// Route to handle form submission

  
  
  
//crud //create:post read:get  update:put and delete:delete


