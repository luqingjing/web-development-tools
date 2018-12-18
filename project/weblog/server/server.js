const express = require('express');
const bodyParser = require('body-parser');
const operate = require('./routers/operate');
const app=express();
const bcrypt=require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const PORT=4000;

app.use(bodyParser.json());

app.get('/home',(req,res)=>{
  res.json(operate.blogData(undefined));
});

app.get('/:username',(req,res)=>{
  const username=req.params.username;
  res.json(operate.blogData(username));
});

app.put('/login',(req,res)=>{
  const {username,password}=req.body;
  if (operate.isMatching(username,password)){
    operate.signIn(username,password);
    res.json({state:operate.getUserState(username)});
  }else {
    res.status(404).json(`username or password is invalid!`);
  }
});

app.post('/signup',(req,res)=>{
  const {username,password}=req.body;
  if(!operate.existUser(username)){
    operate.addUser(username,bcrypt.hashSync(password, salt));
    res.json({state:operate.getUserState(username)});
  }else{
    res.status(409).json(`${username} is already used!`);
  }
});

app.put('/signout',(req,res)=>{
  const {username}=req.body;
  operate.signOut(username);
  res.json({state:operate.getUserState(username)});

});

app.post('/:username/add',(req,res)=>{
  const username=req.params.username;
  const {title,author,content}=req.body;
  const blogID='';
  operate.addBlog({username},{title,author,content,blogID});
  res.json(operate.blogData(undefined));
});

app.get('/:username/edit/:blogID',(req,res)=>{
  const username=req.params.username;
  const blogID=req.params.blogID;
  res.json(operate.getOneBlog(username,blogID));
});

app.put('/:username/edit/:blogID',(req,res)=>{
  const username=req.params.username;
  const {title,author,content,blogID}=req.body;
  operate.addBlog({username},{title,author,content,blogID});
  res.json(operate.blogData(undefined));
});

app.delete('/:username/delete/:blogID',(req,res)=>{
  const username=req.params.username;
  const blogID=req.params.blogID;
  operate.deleteOneBlog(username,blogID);
  res.json(operate.blogData(undefined));
});

app.listen(PORT, () => console.log(`listening on localhost:${PORT}`) );