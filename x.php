<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/7.15.5/firebase-database.js"></script>
<script>
const firebaseConfig = {
     apiKey: "AIzaSyDJkrfI7Q4I131-_xI3vGr24NCmwKezKJc",
     authDomain: "aioa-a3681.firebaseapp.com",
     databaseURL: "https://aioa-a3681-default-rtdb.firebaseio.com",
     projectId: "aioa-a3681",
     storageBucket: "aioa-a3681.appspot.com",
     messagingSenderId: "1026728717226",
     appId: "1:1026728717226:web:de443353b59925319419d3",
     measurementId: "G-JCBPYQ4S98"
   };

 firebase.initializeApp(firebaseConfig);

 firebase.database().ref('all/mngmnt').on('value', function(snapshot){
   alert(snapshot.val().work);
 });



</script>
