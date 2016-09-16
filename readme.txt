#Start creating your Express App!

$ mkdir bencrypt-express
$ cd bencrypt-express
$ npm init -y
  --this creates your package.json
$ express --hbs --git
$ mkdir db
  --this creates your directory to put your knex.js and query.js files amongst others

##BEST PRACTICES: Create a readme.txt file and a userStories.txt filename
$ touch readme.txt
$ touch userStories.txt

##Write in your user stories.
##Write in your essential steps as you are doing now to best document for your learning process and when you wish to go back.

## Create your knexfile.js
$ knex init

##create .env file
$ touch .env

  --Remember to put this at top of knex.js file:
    -- require('dotenv').config();

##You will be using knex so create your knex file.
  --How do I get a preloaded knex.js file? It wasnt in this case.

##What node modules do you need to bring in and save to dependencies? Best practice. Split screen and have package.json open on other screen to ensure what you expect to be loading it is immediately there. Instant feedback!

$ npm i dotenv -S
$ npm i pg -S
# npm i knex -S


##Eventually we are going to want to add authentication/authorization to this app so lets go ahead and add the necessary dependencies for that.

$ npm i express-session -S
$ npm i passport -S
$ npm i passport-local -S
$ npm i bcrypt -S

##Here is a list of all your installed dependencies. Check each one off as you link using require and app.use in your app.js and elsewhere.

- bcrypt
- dotenv
- express
- express-session
- hbs
- knex
- passport
- passport-local
- pg

##Edit your knexfile.js

  --set your Development client to:
    -- postgresql

  --set your development connection to:
    --database : '<dbName>'

  --set your connection to:
    -- process.env.DATABASE_URL

##Go create your database.
$ createdb bce

  --now, verify db was indeed created.


##Make your migrations.
  --What migrations do we need?
  --For the first part of this app, before verification, we will need the following migrations/tables:
    -- post
    -- comment
    -- post-update

##It is best to do them one at a time. Create. Test. Move on. So that is what we will do on the ground up build in the next iteration of this as part of 'build-and-burn' practice. In this case I am going to create all and copy code Sam and I wrote from F31blog to quickly and efficiently get a working personal blog off the ground.

$ knex migrate:make post
$ knex migrate:make comment
(not yet)$ knex migrate:make update-post
  --changed from post-update to improve readability and avoid mistakes in differentiation.

##So even though on this iteration we are copy and pasting in code... What columns are we going to want to define for each of these tables?

##For the Post Table:

-increments
-title
-subtitle
-author id
-body
-can_comment
-timestamps

##For the Comment Table:
-increments
-post_id
-author_id
-body
-is_positive
-timestamps

##Now, Migrate Latest
  $knex migrate:latest

##Check you table to confirm migrations worked.

$psql bce
  -- bce=# SELECT * FROM post;
  -- bce=# SELECT * FROM comment;

  --The tables should each display the column names you designated in your migration files.

##Create your files in your db directory
$ touch db/knex.js
$ touch db/query.js


##We also need to add the files to our views directory for our posts and comments pages.

$ touch views/new.hbs
$ touch views/post.hbs

##We need a main.js file in our javascripts directory in our public directory.

$ touch public/javascripts/main.js

##You need to Convert varchar to text so that body posts and post comments can be more than 255 characters.
  --Use the following template from stack overflow:
    -- ALTER TABLE table1 ALTER COLUMN column1 TYPE text;

bce=# ALTER TABLE comment ALTER COLUMN body TYPE text;
  --verify with:
    -- bce=# \d comment
bce=# ALTER TABLE post ALTER COLUMN body TYPE text;
  --verify with:
    -- bce=# \d post

##Now, re-test and verify that you can make a post greater than 255 characters
