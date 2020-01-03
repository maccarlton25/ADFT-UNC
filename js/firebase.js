//grab a form
const form = document.querySelector('.form-inline');

//grab an input
const inputEmail = form.querySelector('#inputEmail');

var firebaseConfig = {
    apiKey: "AIzaSyCHjbHUunRGo89iIse44hwafW6EUBl0Efs",
    authDomain: "adft-unc.firebaseapp.com",
    databaseURL: "https://adft-unc.firebaseio.com",
    projectId: "adft-unc",
    storageBucket: "adft-unc.appspot.com",
    messagingSenderId: "9014095480",
    appId: "1:9014095480:web:40023cb9da72faa2b0878d",
    measurementId: "G-P21MTYRV86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

//create a functions to push
function firebasePush(input) {
    //prevents from braking
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    //push itself
    var mailsRef = firebase.database().ref('emails').push().set(
        {
            mail: input.value
        }
    );
}

//push on form submit
if (form) {
    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        firebasePush(inputEmail);

        //shows alert if everything went well.
        return alert('Data Successfully Sent to Realtime Database');
    })
}