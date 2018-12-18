const users={};
const blogs=[];
const userState={};
const bcrypt=require('bcryptjs');

const usersBlog={};
let id=1;

const blogData = function(username){
    if (username===undefined) {
        return blogs;
    }
    let temp=[];
    if(username in usersBlog){
        temp=usersBlog[username];
    }
    return temp;
};

function addValueToKey(key, value) {
    usersBlog[key] = usersBlog[key] || [];
    usersBlog[key].unshift(value);

}

const addBlog = function ({username},{title,author,content,blogID}) {
    if(blogID==='') {
        blogID = generateBlogID();
        blogs.unshift({title,author,content,blogID});
        addValueToKey(username,{title,author,content,blogID});
    }else{
        for (let i=0;i<blogs.length;i++){
            if (blogs[i].blogID===blogID) {
                blogs[i].title=title;
                blogs[i].author=author;
                blogs[i].content=content;
                break;
            }
        }
        for (let i=0;i< usersBlog[username].length;i++){
            if (usersBlog[username][i].blogID===blogID){
                usersBlog[username][i].title=title;
                usersBlog[username][i].author=author;
                usersBlog[username][i].content=content;
                break;
            }
        }
    }
};

const addUser = function (username,password) {

    users[username] = password;
    userState[username]=true;
    console.log(users);
};

const signIn = function (username,password) {
    if (isMatching(username,password))
        userState[username]=true;
};

const signOut = function (username) {
    console.log("before sign out: "+userState[username]);
    userState[username]=false;
    console.log("after signout: "+userState[username]);
    console.log(userState);
};

const existUser = function(username){
    for (let key of Object.keys(users)) {
        if (key===username)
            return true;
    }
    return false;
};

const isMatching = function (username,password) {
    const hash=users[username];
    if (!existUser(username))
        return false;
    if (!bcrypt.compareSync(password, hash))
        return false;
    return true;
};

const getOneBlog = function (username,blogID) {
    const temp=usersBlog[username];
    // console.log(temp);
    // console.log(temp[0]);
    let targetBlog={};
    for(let i=0;i<temp.length;i++){
        if(temp[i].blogID.toString()===blogID.toString()) {
            targetBlog=temp[i];
        }
    }

    return targetBlog;
};

const deleteOneBlog = function (username,blogID) {
    console.log(blogs);
    for (let i=0;i<blogs.length;i++){
        if (blogs[i].blogID.toString()===blogID){
            blogs.splice(i,1);
          console.log(blogs);
            break;
        }
    }
    console.log(usersBlog[username]);
    for (let i=0;i<usersBlog[username].length;i++) {
        if (usersBlog[username][i].blogID.toString() === blogID) {
            usersBlog[username].splice(i, 1);
          console.log(usersBlog[username]);
          break;
        }
    }
};

const getUserState = function (username) {
    return userState[username];
};

const generateBlogID = function () {
    return id++;
};

module.exports={
    blogData,
    getUserState,
    addBlog,
    addUser,
    signIn,
    signOut,
    existUser,
    isMatching,
    deleteOneBlog,
    getOneBlog,
    usersBlog,
    blogs
};