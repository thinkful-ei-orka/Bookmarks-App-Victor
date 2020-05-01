//follow crud and make sure error handling is set up correctly

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/victor';

const listOfFetch = function (...arguments) {
     let error;
     return fetch(...arguments)
          .then(response => {
               if (!response.ok) {
                    error = {
                         code: response.status
                    };
                    if (response.headers.get('content-type').includes('json')) {
                         error.message = response.statusText;
                         return Promise.reject(error);
                    }
               }
               return res.json();
          })
          .then(data => {
               if (error) {
                    error.message = data.message;
                    return Promise.reject(error);
               }
               return data;
          });
}

getBookmarks = function () {
     return listOfFetch(`${BASE_URL}/bookmarks`);
}

createBookmark = function (title) {
     let newBookmarkInfo = JSON.stringify({
          title
     })
     return listOfFetch(`${BASE_URL}/bookmarks`, {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: newBookmark
     });
}

editBookmark = function (id, updateData) {
     let newBookmarkData = JSON.stringify(updateData)
     return listOfFetch(`${BASE_URL}/bookmarks`, {
          method: 'PATCH',
          headers: {
               'Content-Type': 'application/json',
          },
          body: newBookmarkData
     });
}


deleteBookmark = function (id) {
     return listOfFetch(`${BASE_URL}/bookmarks`, {
          method: 'PATCH'
     });
}

export default {
     createBookmark,
     getBookmarks,
     editBookmark,
     deleteBookmark
}