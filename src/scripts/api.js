//follow crud and make sure error handling is set up correctly

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/victor';






deleteBookmark{
     method: 'DELETE'
}

export default { 
     createBookmark,
     getBookmarks,
     editBookmark,
     deleteBookmark
}