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
    "fall2022":["Fall2022/Volume 1 Issue 1.pdf","Volume 1 Issue 1"],
    "spring2023":["Spring2023/Gyneca Spring 2023.pdf", "Volume 2 Issue 1"]
  }

  document.querySelector("#fall2022").addEventListener('click', loadJournal);
  document.querySelector("#spring2023").addEventListener('click', loadJournal);

  // const page = window.open('index.html')
  // page.document.querySelector(".journal-redirect").addEventListener('click', loadJournal("spring2023"))

  // document.querySelector("link[rel=import]").import.querySelector(".journal-redirect").addEventListener('click', loadJournal("spring2023"))

  // Child references can also take paths delimited by '/'
  var mastheadRef = _getChild(storageRef, 'images/masthead');
  // spaceRef now points to "images/space.jpg"
  // imagesRef still points to "images"
  
  function loadJournal(journal) {
    console.log("heyyyy", journal)
    let this_journal_path = journal_paths[journal][0]
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
      let check = false;
      (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
      console.log(check)

      if (check === true) {
        document.getElementById(journal).setAttribute('href', url)
        document.getElementById("journal-link").innerHTML = "Mobile Browser Version does not support iframe. Click link for Journal"
        document.getElementById("journal-link").setAttribute("href", url)
        document.getElementById("journal-title").innerHTML = journal_paths[journal][1]
      }
      else {
        var img = document.getElementById('fall2022journal');
        img.setAttribute('src', url);
        console.log("hello")

        document.getElementById("journal-title").innerHTML = journal_paths[journal][1]
      }
    })
    .catch((error) => {
      // Handle any errors
    });
  } 