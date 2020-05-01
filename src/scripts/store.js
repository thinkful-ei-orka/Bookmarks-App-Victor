/*

INITIAL STORE
const store = {
  bookmarks: [
    {
      id: 'x56w',
      title: 'Title 1',
      rating: 3,
      url: 'http://www.title1.com',
      description: 'lorem ipsum dolor sit',
      expanded: false
    },
    {
      id: '6ffw',
      title: 'Title 2',
      rating: 5,
      url: 'http://www.title2.com',
      description: 'dolorum tempore deserunt',
      expanded: false
    } 
    ...
  ],
  adding: false,
  error: null,
  filter: 0
};

EXPANDED STORE
const store = {
  bookmarks: [
    {
      id: '7ddr',
      title: 'Title 11',
      rating: 5,
      url: 'http://www.title11.com',
      description: 'lorem ipsum dolor',
      expanded: true
    }
    ...
  ],
  adding: false,
  error: null,
  filter: 0
};

ADD BOOKMARK FORM
const store = {
  bookmarks: [...],
  adding: true,
  error: null,
  filter: 0
};

ERROR FORM
const store = {
  bookmarks: [...],
  adding: true,
  error: true,
  filter: 0
};

*/

const store = {
     bookmarks,
     adding: true,
     error: false,
     filter: 0
}

const bookmarks = [];
let adding = true;
let error = false;
let filter = 0;

const findById = function(id) {
     return this.bookmarks.find(currentBookmark => currentBookmark.id === id);
}

function addBookmark(bookmark) {
     this.bookmarks.push(bookmark)
}

function findAndEdit(id, newData) {
     let currentBookmark = this.findById(id);
     Object.assign(currentBookmark, newData)
}

const findAndRate = function (id, newRating) {
     let currentBookmark = this.findById(id);
     Object.assign(currentBookmark, newRating)
}

const findAndDelete = function(id) {
     this.bookmarks = this.bookmarks.filter(currentBookmark => currentBookmark.id !== id);
};

export default {
     bookmarks,
     adding,
     error,
     filter,
     findById,
     addBookmark,
     findAndEdit,
     findAndRate,
     findAndDelete
}