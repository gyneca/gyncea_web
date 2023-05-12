// // TODO: Replace the following with your app's Firebase project configuration
// // See: https://firebase.google.com/docs/web/learn-more#config-object
// const firebaseConfig = {
//   // ...
//   storageBucket: 'gs://gyneca-82aac.appspot.com' 
// };

// // Initialize Firebase
// initializeApp(firebaseConfig);

// // Initialize Cloud Storage and get a reference to the service
// const storage = firebase.storage();

// // Create a storage reference from our storage service
// var storageRef = storage.ref();

// // Create a child reference
// var journalsRef = storageRef.child('journals');
// // imagesRef now points to 'images'

// // Child references can also take paths delimited by '/'
// var mastheadRef = storageRef.child('images/masthead');
// // spaceRef now points to "images/space.jpg"
// // imagesRef still points to "images"

// journalsRef.child("Fall2022/Volume 1 Issue 1.pdf").getDownloadURL()
//   .then((url) => {
//     console.log("hello")
//     // `url` is the download URL for 'images/stars.jpg'

//     // This can be downloaded directly:
//     var xhr = new XMLHttpRequest();
//     xhr.responseType = 'blob';
//     xhr.onload = (event) => {
//       var blob = xhr.response;
//     };
//     xhr.open('GET', url);
//     xhr.send();

//     // Or inserted into an <img> element
//     var img = document.getElementById('fall2022journal');
//     img.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//   });