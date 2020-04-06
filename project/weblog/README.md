# Weblog
 
 ----------------------------------
 1. UI design
 2. data 
 3. RESTful API

## Team members
Qian Huang 

Luqing Jing (me)
## Description

We give our final project name as Weblog Because we are intended to develop a microBlog sharing platform. 

WeBlog is used to share blogs/information with others. Users can view all public blogs listing in homepage no matther he/she is logged in or not. Users have 4 basic operation of their own blogs: view, add, edit and delete.

## Use Cases

1. when opening the weblog page, users can view all blogs listing in the homepage (Initialy, the list is empty)
2. Users can sign up or log in to post their own blogs by clicking "Add New" button on the navBar or under user info
3. After users loging in, they can view their own blogs by clicking "Personal Homepage" button or username on the navBar
4. After entering personal homepage, users can edit or delete their own blogs
5. When users click 'Sign Out' on the navbar, the current user will be signed out and the login/sign up page will be reloaded

## RESTful API

### Overview

|Group|URL|
|---|---|
|[Home](#api-home)|/home|
|[PersonalHome](#api-ph)|/:username

###  <a name="api-home" style="color: #000;"></a> Home

|endpoint|URL|Method|
|---|---|---|
|[List](#api-homelist)|/home|GET|
|[Sign in](#api-signin)|/login|PUT|
|[Sign up](#api-signup)|/signup|POST|
|[Sign out](#api-signout)|/signout|PUT|
|[Add blog](#api-add)|/:username/add|POST|

####  <a name="api-homelist" style="color: #000;"></a> List

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

Example of response data if successful:

```json
[
	{
	"title":"my first blog",
	"author":"peter"
	"content":"hahhahahahahahahahahah",
	"id": 1,

	}
	{
	"title":"my second blog",
	"author":"peter"
	"content":"blalalalalbalallalllalalalalalalalalalalallallallalalalalala",
	"id": 2,
	}
]
```

The response is an array of blogs.

More details on the field:

|Field|Type|Explain|
|---|---|---|
|title|string|the title of each blog|
|id|int|the unique id of each blog|
|author|string|the author of each blog|
|content|string|the content of each blog|

#### <a name="api-signup" style="color: #000;"></a> Sign up

Resquest example:

```json
	{
	"username": "peter",
	"password": ********	
	}

```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|
|password|string|password of the user created|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 201 Created|
|Already has this username|409 conflict|

Example of response if successful:

```json
{
	"logged":true
}
```

More details on the field:

|Field|Type|Explain|
|---|---|---|
|username|string|the name of user created|
|logged|boolean|if the user created logged in|


#### <a name="api-signin" style="color: #000;"></a> Sign in

Resquest example:

```json
	{
	"username": "peter",
	"password": ********	
	}

```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|
|password|string|password of the user created|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|
|No this user|404 Not Found|

Example of response if successful:

```json
{
	"logged": true
}
```

More details on the field:

|Field|Type|Explain|
|---|---|---|
|username|string|the name of user created|
|logged|boolean|if the user logged in|

#### <a name="api-signout" style="color: #000;"></a> Sign out

Resquest example:

```json
	{
	"username": "peter",
	}

```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

Example of response if successful:

```json
{
	"logged": false
}
```

More details on the field:

|Field|Type|Explain|
|---|---|---|
|username|string|the name of user created|
|logged|boolean|if the user logged in|

#### <a name="api-add" style="color: #000;"></a> Add new blog

Resquest example:

```json
	{
	"title":"first",
	"author":"peter",
	"content":"blalalalala,hhahahhaah,hello world"
	}

```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

```json
[
	{
	"title": "my first blog",
	"author":"peter",
	"content": "hahhahahahahahahahahah",
	"id": 1,

	}
	{
	"title": "my second blog",
	"author":"peter",
	"content": "blalalalalbalallalllalalalalalalalalalalallallallalalalalala",
	"id": 2,

	}
	{
	"title":"first",
	"author":"jane",
	"content":"blalalalala,hhahahhaah,hello world",
	"id":1,
	}
]
```

The response is an array of blogs.

More details on the field:

|Field|Type|Explain|
|---|---|---|
|title|string|the title of each blog|
|id|int|the unique id of each blog|
|author|string|the author of each blog|
|content|string|the content of each blog|

###  <a name="api-ph" style="color: #000;"></a> PersonalHome

|endpoint|URL|Method|
|----|---|---|
|[list](#api-phlist)|/:username|GET|
|[get one blog](#api-get)|/:username/edit/:blogID|GET|
|[edit one blog](#api-edit)|/:username/edit/:blogID|PUT|
|[delete one blog](#api-delete)|/:username/delete/:blogID|DELETE|

#### <a name="api-phlist" style="color: #000;"></a> List

Resquest example:

```json
	{
	"username": "peter",
	}

```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

Example of response if successful:

```json
[
	{
	"title": "my first blog",
	"author":"peter"
	"content": "hahhahahahahahahahahah",
	"id": 1,

	}
	{
	"title": "my second blog",
	"author":"peter"
	"content": "blalalalalbalallalllalalalalalalalalalalallallallalalalalala",
	"id": 2,

	}
]
```

The response is an array of blogs of that user

More details on the field:

|Field|Type|Explain|
|---|---|---|
|title|string|the title of each blog|
|id|int|the unique id of each blog|
|author|string|the author of each blog|
|content|string|the content of each blog|

#### <a name="api-get" style="color: #000;"></a> Get one blog

Resquest example:

```json
	{
	"username": "peter",
	"blogID": 3
	}

```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|
|blogID|int|the id of the blog|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

Example of response if successful:

```json
	{
	"title": "my first blog",
	"author":"peter"
	"content": "hahhahahahahahahahahah",
	"id": 1,

	}
```
More details on the field:

|Field|Type|Explain|
|---|---|---|
|title|string|the title of each blog|
|id|int|the unique id of each blog|
|author|string|the author of each blog|
|content|string|the content of each blog|

#### <a name="api-edit" style="color: #000;"></a> Edit one blog

Resquest example:

```json
	{
	"title":"third",
	"author":"peter",
	"content":"blalalalala,hhahahhaah,hello world,good bye",
	"id":5,

	}
```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|
|blogID|int|the id of the blog|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

```json
[
	{
	"title": "my first blog",
	"author":"peter",
	"content": "hahhahahahahahahahahah",
	"id": 1,

	}
	{
	"title": "my second blog",
	"author":"peter",
	"content": "blalalalalbalallalllalalalalalalalalalalallallallalalalalala",
	"id": 2,	
	}
	{
	"title":"first",
	"author":"jane",
	"content":"blalalalala,hhahahhaah,hello world",
	"id":3,

	}
	{
	"username": "peter",
	"title":"third",
	"author":"peter",
	"content":"blalalalala,hhahahhaah,hello world,good bye",
	"id":5,
	}
]
```
The response is an array of blogs.

More details on the field:

|Field|Type|Explain|
|---|---|---|
|title|string|the title of each blog|
|id|int|the unique id of each blog|
|author|string|the author of each blog|
|content|string|the content of each blog|

#### <a name="api-delete" style="color: #000;"></a> Delete one blog

Resquest example:

```json
	{
	"username": "peter",
	"id":5,
	}
```
Parameters in URL:

|Parameter|Type|Explain|
|----|----|----|
|username|string|name of the user created|
|blogID|int|the id of the blog|

HTTP Response:

|Case|http response|
|---|---|
|Successful| 200 OK|

```json
{
	logged:false
}
```
The response is an array of blogs.

More details on the field:

|Field|Type|Explain|
|---|---|---|
|logged|boolean|if the user is loggedin|












