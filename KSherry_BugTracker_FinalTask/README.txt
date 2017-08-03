Read me .txt 

Start by downloading the entire folder 'BugReporter'

Install node from https://nodejs.org/en/

open up a node command window and navigate into the BugReporter folder

type 'npm install' then press enter
this will install all necessary node_modules
(potentially not jasmine and Karma but at the time of writing they weren't doing anything anyway)

A mongo database will have to be set up this can be done locally or not 
All that needs to change is within express.js 
find this line : 
var mongoDB = 'mongodb://127.0.0.1:27017/bugDB'; 
						**************** -----
and change it if necessary where the *** section is the address and the --- section is the database name

the data to insert into the database is in the jsondata folder within BugReporter
if you are using robo 3t, the robomongoBugs.json is in the format to just copy and paste in directly

then it should all be set up 
within the node command window run npm start and the site should load at localhost:15000

 
Day 1
Hand drew wire frames (see wireframes folder)
Made static version of the website(set up all the empty components)
Implemented and linked mongo, express, react and node
Created Mongoose Schema to access the database 
created api to utilise the Mongoose Schema
Set up Karma and Jasmine
Attempted to use Karma and Jasmine in order for ttd to no success
Pulled the data to a store with intention of using flux for searching
Pulled the data into small Listing components for the homepage
Created a link to a DetailContainer page wherein there is logic to chhose between
the details page and an edit page 
attempted some css using mdl and inline styles
created a logo 
decided on a colour scheme
some sort functionality added to the store
 
 TO BE ADDED TOMORROW
 - full sort /search implementation
 - submitting edits and creating new posts
 - better css 
 
 
 Why flux, mongo, mongoose etc
 
flux: I feel allows for easier implementation of searching and sorting and is very responsive
mongo: having finally leanrnt how to set everything up, coding for it is as easy if not easier than constantly
reading and writing to json files. The only downside is the delayed loading.
mongoose: is a simple way of accessing the data in Mongo
mdl: having not used it before I wanted to try it out


Day 2 
Started by adding filtering
Called filtering by use of buttons
Had another go at Jasmine and Karma but still failed to make them funtion once(target cointainer is not a dom component (npm test : to see the failure))
Restarted the edit page to be part of the details page
Made it so that a button could be pressed that changed the div so that a method to edit data appeared
Designed and implemented an image for the button to be that changed when pressed
implemented editing for the components I thought necessary
- _id and id - I decided shouldn't change so that the risk of doubling up on id's was negated
-  dateCreated - I decided shouldn't change so that deadlines for the bugs are not moved
- actions - I decided that all actions should be visible and if an erroneous one is submitted a second submnission could call attention to that
also elminates the potential to edit other peoples actions
made sure that only 'correct' information could be edited in ie: if a something could only be true or false they are the only options 
(more information is in comments in BugDetails.jsx)
inserted a put method to put the updates in the database
changed the colour scheme to something more paletable
improved the cdd with more mdl use
added some tests performed with the selenium IDE in firefox (saved in the spec folder)

Why Selenium IDE 
After the failure of the other testing method I decided that some testing is better than none and so made a couple of tests.

What I would've liked to add
- methods that utilised the unused sort functions in the store
- flux implementation of a search
- methods to add actions
- functional jasmine+karma tests
- a page to add new bugs
  
