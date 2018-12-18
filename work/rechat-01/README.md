# Rechat 01 (due by start of class - note we have no class next week due to a holiday, so the next class is 2 weeks out.)

* copy the rechat and rechat-server directories from classes/ to this directory, do not modify the files there
* Create a feature branch "rechat-01"
* Make the changes listed below and create a PR to merge those changes into master
* Be sure to add myself and the TA as reviewers on that PR

## Login and Logout

* Modify rechat to send the username to the server when they login (as a POST) to the /session/:username endpoint
* Modify rechat-server to add that endpoint
* Modify rechat to have a Logout button for users that are logged in (in the upper right of the window, above the Display component
* the Logout button should NOT be visible if a user is not logged in
* The login will return an id number to the user
    * the id number should be the same for a user that is already "logged in", but different if the user has logged out.
    * Example sequence of steps:
        - Jane logs in and gets back user id 6.  
        - Bob logs in and gets back user id 7.  
        - Jane accidentally closed her browser and reopens it and logs in again.  
        - The server never knew she logged out, so it considers her still logged in and sends 6 again.  
        - Preetha logs in and gets user id 8.  
        - Bob logs in on a second window (while still logged in on the first) and gets back user id 7 again.  
        - Jane logs out.   
        - Jane logs back in, and gets user id 9, not 6.
* Modify rechat to send the user Id, not the username, when sending a new message
* Modify rechat-server to track the userlist by users that are logged in, not who has sent a message
    * Users that login but don't send messages are listed
    * Users that logout are not listed, but messages that are sent still show their names

## MessageId 

* Modify rechat-server to assign a unique messageId to every message, and send it in the user list
* modify rechat-server /messages to include the messageId in the list of messages
* modify rechat-server /messages to OPTIONALLY take a "since" query param that indicates the last messageId the client knows about.  The endpoint will respond only with messages since that message.
* modify rechat to send that "since" query param and properly add the new messages to the list of known messages

