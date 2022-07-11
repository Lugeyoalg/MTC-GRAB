
//Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDmlZRJLhYLTlD2-PpXa0Pay8cjMFmEDpM",
  authDomain: "form-5423e.firebaseapp.com",
  projectId: "form-5423e",
  storageBucket: "form-5423e.appspot.com",
  messagingSenderId: "666727433742",
};


firebase.initializeApp(firebaseConfig);

// Reference messages collection
var firestore = firebase.firestore()

// Listen for form submit
const db = firestore.collection("contactForm")
const chauffeur = document.getElementById('phone');
// Submit form
let submitButton = document.getElementById('submit') 


                       
            


//Create Event Listener to allow submission
submitButton.addEventListener("click", (e) =>{
   //Prevent Default form submission behavior
   e.preventDefault();
   const chauffeur = document.getElementById('phone');
   const supp = document.getElementById('name');
   let name = document.getElementById('name').value
   let date = document.getElementById('date').value
   let time = document.getElementById('time').value
   let phone = document.getElementById('phone').value
   
  
   function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !==null;
  }  
             if(isEmptyOrSpaces(supp.value)){
                     alert("deconnectez-vous SVP! Merci d'utiliser notre service")
                           return false;
                        }
              if(isEmptyOrSpaces(chauffeur.value) ){
                        alert("Le code du chauffeur est vide! Inserez-le SVP")
                        return false;
                    }
                    
                    
   document.querySelector('.alert').style.display = 'block';
  
   // Hide alert after 3 seconds
   setTimeout(function(){
     document.querySelector('.alert').style.display = 'none';
   },4000);
 
   // Clear form
   document.getElementById('contactForm').reset();
   //save form data to firebase
   db.doc().set({
    name: name,
    date: date,
    time : time,
    phone : phone,
   }).then( () =>{
    console.log("data saved")
   }).catch((error) =>{
    console.log(error)
   })
})
var date = new Date();
var currentDate = date.toISOString().slice(0,10);
var currentTime = date.toTimeString().substring(0,5);

document.getElementById('date').value = currentDate;
document.getElementById('time').value = currentTime;
