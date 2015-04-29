# Community-Messages-Display

Show messages on the screen and updates in realtime thanks to Firebase

### Setup
[Change the Firebase url](https://github.com/techhubdotcom/Community-Messages-Display/blob/master/app/scripts/main.js#L25  ) to point at your application.  
`var ref = new Firebase('https://your-app-name-here.firebaseio.com/messages');`

### Dependencies and installation
 * Node.js
 * Gulp
 * Bower

`npm install && bower install`

### Develop
`gulp serve` will start the browser with livereload

### Build
`gulp` and you will find everything inside `dist/`
