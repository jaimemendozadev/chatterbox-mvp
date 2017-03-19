# [Chatterbox MVP](https://github.com/jaimemendozadev/chatterbox-mvp)


Chatterbox is a working full-stack chat application where a client can access a global chat room and chat with other clients that are utilizing the app.



## Table of contents

- Quick start
- Bugs, feature requests, and contributing
- Current Chatterbox issues and wishlist
- Creators

## Quick start

When you run these commands in the Terminal, please don't include the $ dollar sign. It's just a coding convention to indicate what command should be entered into the Terminal.

- Clone the repo locally to your computer by entering the following command into the Terminal: `$ git clone https://github.com/jaimemendozadev/chatterbox-mvp.git`
- Make sure you have [npm](https://www.npmjs.com) installed.
- Once npm is installed, run the following commands in three separate Terminal tabs:
  - `$ npm install` to install the npm dependencies in the `package.json` file. Please be patient, it'll take awhile to load the dependencies.
  - `$ npm start` to start the server on `localhost:3000`.
  - `$ npm run build` to build all the React components.
- Navigate to [http://localhost:3000/public](http://localhost:3000/public) on your favorite web browser to be directed to the login page.

*A friendly reminder, the `dev/` folder has all the project React components in JSX form. Every time you modify/change any of these files, you'll have to run `$ npm run build` in the Terminal to rebuild the React components.



### What's included

Within the download you should find the following directories and files:

```
db/
|
dev/
|
output/
|
.gitignore
|
index.html
|
package.json
|
README.md
|
router.js
|
server.js
|
webpack.config.js

```



## Bugs, feature requests, and contributing

Have a bug, feature request, or issue that has not addressed yet, [please open a new issue](https://github.com/jaimemendozadev/chatterbox-mvp/issues) with a few small caveats:

- Constructive criticism is always welcome, but...
 - No trolling.
 - Don't be sexist/racist/homophobic/`add other inappropriate behavior here`.
 - Always be respectful.
- In other words, be nice.



## Current Chatterbox issues and wishlist

While Chatterbox in its current version 'works', some basic functionality still needs to be implemented, including:

- Implementing User sessions and authentication.
- Protecting the form again User attacks.
- Registering Users into the database and hashing their passwords.
- Refreshing the chat feed without having to be redirected to the login page.


In the future, I'd like to implement the following features on this wishlist:

- User profiles.
- Creating new chatrooms, including private chat rooms, for users.
- Including rich media (code snippets, gifs, videos, links) and render them properly in a chat.


## Creators

**Jaime Mendoza**

- [jaimemendoza.com](http://jaimemendoza.com/)
- [https://github.com/jaimemendozadev](https://github.com/jaimemendozadev)