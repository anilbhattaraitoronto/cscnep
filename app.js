const express= require('express')
const app = express();
const path = require('path')


const PORT = process.env.PORT || 3070

app.use(express.json())
app.use(express.urlencoded({extended:false, limit:'2mb'}))

app.use(express.static(path.join(__dirname, 'client/public')))

//import routers 

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, 'client/public', 'index.html'))
})
app.listen(PORT, console.log(`App is running on port ${PORT}`))