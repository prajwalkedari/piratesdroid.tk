
var configgg = {
    'apiKey': 'AIzaSyAQ_cLzsi4jRJTAXHP1MdgZFvlnd1xfD2U',
    'authDomain': 'piratesdroid-8c4ed.firebaseapp.com',
    'databaseURL': 'https://piratesdroid-8c4ed.firebaseio.com',
    'projectId': 'piratesdroid-8c4ed',
    'storageBucket': 'piratesdroid-8c4ed.appspot.com',
    'messagingSenderId': '782951610606',
    'appId': '1:782951610606:web:3d4616f53c370e23',
    'measurementId': 'G-5YHQPCK2F2'
};

firebase.initializeApp(configgg);
var database = firebase.database(),
    firebaseOrdersCollection = database.ref('Place');
