//remember: no direct DOM manipulation
import $ from 'jquery';

import store from './store';
import api from './api';

const generateBookmark = function(bookmark) {
     let bookmarkTitle = `htmlrulezdood`
}


const getBookmarkId = function(bookmark) {
     return $(bookmark)
     .closest(`html class`)
     .data(`html id`)
}

const generateBookmarksTitlesString = function (bookmarkList) {
     const booksmarks = bookmarkList.map((bookmark) => generateBookmark(bookmark));
     return bookmarks.join('')
}

const handleNewBookmarkSubmit = function() {
     $('js-bookmark-list-form').submit(function (event) {
          event.preventDefault();
          const newBookmarkTitle = $('.js-bookmark-list-entry').val();
          $('.js-bookmark-list-entry').val();

     api.createBookmark(newBookmarkTitle)
          .then(response => response.json())
          .then((newBookmark) => {
               store.addBookmark(newBookmark);
               render();
          });
});
}


//handleEditBookmarkItemSubmit


const handleBookmarkClicked = function() {

}


const handleDeleteBookmarkClicked = function() {
     $('.js-bookmark-list').on('click', '.js-bookmark-delete', event => {
          const id = getBookmarkId(event.currentTarget);
          api.deleteBookmark(id)
               .then(response => response.json())
               .then(() => {
                    store.findAndDelete(id)
                    render();
               });
     });
}


const handleBookmarkRatingClick = function() {
     $('.js-bookmark-list').on('click', '.js-bookmark-list-entry', event => {
          const id = getBookmarkId(event.currentTarget);
          api.rateBookmark(id)
               .then(response => response.json())
               .then(() => {
                    store.findAndRate(id)
                    render();
               }); 
     });
}


renderError


const render = function() {
     let bookmarks = [...store.bookmarks];

     let bookmarksTitlesString = generateBookmarksTitlesString(bookmarks)

     $('bookmark-list').html()
}


const combineEventListeners = function() {
     handleNewBookmarkSubmit();
     handleEditBookmarkItemSubmit();
     handleBookmarkClicked();
     handleDeleteBookmarkClicked();
     handleBookmarkRatingClick();
}

export default {
     combineEventListeners,
     render
}