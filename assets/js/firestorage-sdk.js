import { initializeApp, getApp } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js'

// If you enabled Analytics in your project, add the Firebase SDK for Google Analytics
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js'

// Add Firebase products that you want to use
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-auth.js'
import { ref, getStorage, _getChild, getDownloadURL, getBlob } from 'https://www.gstatic.com/firebasejs/9.9.0/firebase-storage.js'

  // TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
// ...
storageBucket: 'gs://gyneca-82aac.appspot.com',
name: 'gyneca',
projectId: 'gyneca-82aac'
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
// const storage = firebase.storage();
const storage = getStorage(firebase, 'gs://gyneca-82aac.appspot.com');

// Create a storage reference from our storage service
var storageRef = ref(storage, "/");

// Create a child reference
var journalsRef = _getChild(storageRef, 'journals');
// imagesRef now points to 'images'

var journal_paths = {
"fall2022":"Fall2022/Volume 1 Issue 1.pdf",
"spring2023":"Spring2023/Volume 1, Issue 2.pdf"
}

document.querySelector("#fall2022").addEventListener('click', loadJournal("fall2022"));
// Child references can also take paths delimited by '/'
var mastheadRef = _getChild(storageRef, 'images/masthead');
// spaceRef now points to "images/space.jpg"
// imagesRef still points to "images"
function loadJournal(journal) {
let this_journal_path = journal_paths[journal]
getDownloadURL(_getChild(journalsRef, this_journal_path))
.then((url) => {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = (event) => {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

  console.log(url)
  // Or inserted into an <img> element
  var img = document.getElementById('fall2022journal');
  img.setAttribute('src', url);
  console.log("hello")

})
.catch((error) => {
  // Handle any errors
});
}