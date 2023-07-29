var x;
function showPass(){
  if(x==1){
    document.getElementById('pass').type="password";
    x=0;
    document.getElementById('btn2').innerHTML='Show'
  }
  else{
    document.getElementById('pass').type='text';
    x=1;
    document.getElementById('btn2').innerHTML='Hide'
  }
}



  function login(){
  var age= document.getElementById('age').value;
  var name= document.getElementById('name').value;
  var password= document.getElementById('pass').value;
  var dire= ", you will be redirected back to the homepage NOTE! The infos you have entered are not actually registered this is just a practice."
  if(age<18){
    alert("You are not old enough to proceed "+name+", your age is "+age+" your password is *"+password+"*"+dire)
  }
  else{
    alert("You can proceed "+name+", your age is "+age+" your password is *"+password+"*"+dire)
  }
  }
