//everything here is sourced in the html

/*
User Stories
As a user:

add bookmarks to bookmark list which contain:
- title
- url link
- description
- rating (1-5)

see a list of my bookmarks when first opening the app

all bookmarks default to a "condensed" view showing only title and rating

click on a bookmark to display the "detailed" view

detailed view expands to additionally display description and a "Visit Site" link

remove bookmarks from bookmark list

receive appropriate feedback when I cannot submit a bookmark

Check all validations in the API documentation (e.g. title and url field required)

can select from a dropdown (a <select> element) a "minimum rating" to filter the list 
by all bookmarks rated at or above the chosen selection

-----------------------------------------------------------------------

Technical Requirements
Use fetch for AJAX calls and jQuery for DOM manipulation

Use namespacing to adhere to good architecture practices
-Minimal global variables
-Create modules in separate files to organize your code
-Logically group your functions (e.g. API methods, store methods...)

Keep your Data out of the DOM
-No direct DOM manipulation in your event handlers!
-Follow the React-ful design pattern - change your state, re-render your component
-Use semantic HTML

Use a responsive and mobile-first design
-Visually and functionally solid in viewports for mobile and desktop

Follow a11y best practices

-Refer back to the lessons on accessibility, forms*/


import $ from 'jquery';

import './index.css';

import api from './api';
import store from './store';
import bookmarklist from './bookmarklist';

const main = function() {
     api.getBookmarks()
     .then((bookmarks) => {
          bookmarks.forEach((bookmark) => store.addBookmark(bookmark));
          bookmarklist.render();
     });
     bookmarklist.
     bookmarklist.render();
}

$(main)