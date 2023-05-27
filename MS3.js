function reportDisplay1(){
    var s = 'My transaction was not completed';
    document.getElementById("displayText").value =s;
}
function reportDisplay2(){
    var s = 'I lost my card';
    document.getElementById("displayText").value =s;
}
function reportDisplay3(){
    var s = 'My card was damaged';
    document.getElementById("displayText").value =s;
}
function handle(){
   var table = document.getElementById('table1');
   var s= document.getElementById("displayText").value ;
   var a ='handeled';
   if(s==='My transaction was not completed')
   table.rows[1].cells[4].innerHTML =a;
   else
   if(s==='I lost my card')
   table.rows[2].cells[4].innerHTML =a;
   else
   if(s==='My card was damaged')
   table.rows[3].cells[4].innerHTML =a;
   alert("Report Handeled");
   
}
function reportDisplay4(){
    var s = 'The home button is not working';
    document.getElementById("displayText").value =s;
}
function reportDisplay5(){
    var s = 'I can not submit requests';
    document.getElementById("displayText").value =s;
}

function handle2(){
   var table = document.getElementById('table2');
   var s= document.getElementById("displayText").value ;
   var a ='handeled';
   if(s==='The home button is not working')
   table.rows[1].cells[1].innerHTML =a;
   else
   if(s==='I can not submit requests')
   table.rows[2].cells[1].innerHTML =a;

   alert("Report Handeled");
   
}
