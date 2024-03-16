

function condition(){
  let emaill = document.getElementById('email').value;
  // let passwordd = document.getElementById('password');
  //     let length = passwordd.value.length;
      console.log(length)
      if(emaill.includes('@gmail.com')){
      alert("Login");
      }
      else{
         alert('Please enter Correct Email');
      }
  
 
  
}

function signup(){
  let signup = document.getElementById('khan');
  let  login = document.getElementById('khan1'); 
  if(login.style.display != 'none'){
      signup.style.display = 'block';
  }
  else{
      signup.style.display = 'none';
  }
 
}

function login(){
  let signup = document.getElementById('khan');
  let  login = document.getElementById('khan1'); 
  if(login.style.display != 'block'){
      signup.style.display = 'none';
  }
  else{
      signup.style.display = 'block';
  }
}

function myfunction(){
  let emaill = document.getElementById('email1').value;
  let password1 = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;

  if(emaill.includes('@gmail.com') && password1 === password2){
      alert("Hum Apko Welcome krte han ");
      }
      else{
         alert('Please enter Correct Email OR Password');
      }
  
  

}
