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
   if(s === "")
   alert(" You did not choose a problem to handle");
   else
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
   if(s === "")
   alert(" You did not choose a problem to handle");
   else
   alert("Report Handeled");
   
}
function submitpopCR(){
    if(document.getElementById("exampleFormControlTextarea1").value==="")
    alert("Please write a problem");
    else
    if(document.getElementById("exampleFormControlInput1").value==="")
    alert("Please write a valid credit card number");
    else
    alert("Submitted");
}
function submitpop(){
    if(document.getElementById("exampleFormControlTextarea1").value==="")
    alert("Please write a problem");
    else 
    alert("Submitted");
}
/*var previousPage ;
function redirectToPage2(){
    window.open(previousPage);
}
function setPreviousPage(){
    const page = location.href.split("/").slice(-1).toString().split("?")[0];
   previousPage = page;
   
}*/

function Alert(){
    var notempty = document.getElementById('exampleFormControlTextarea1').value;
    if (notempty === ""){
    alert("Nothing To Post!!");
    }
    else
    alert("Posted Successfully")
}
