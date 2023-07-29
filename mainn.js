var zab= "PAKI ZOOM IN NALANG POD IF U R USING A LAPTOP HAHA"
alert("SMILE SA POD DIRA LOVE HAHA, "+zab)

var x;
function button(){
  if(x==1){
    document.getElementById('show').style.display='none';
    document.getElementById('button').innerHTML='READ MY MESSAGE FOR YOU MYLOVE'
    x=0;
  }
  else{
    document.getElementById('show').style.display='block';
    document.getElementById('button').innerHTML='DONE READING'
    x=1;
  }
}