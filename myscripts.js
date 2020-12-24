var yes=0, no=0 ;
function yep()
{
  yes++;
  var put=document.getElementById("alert")
  put.innerHTML="Thanks for Voting. Your response has been recorded <br>";
  put.innerHTML+="Affermative Responses :"+yes+"<br>";
  put.innerHTML+="Negative Responses :"+no;
}
function nop()
{
  no++;
  var put=document.getElementById("alert")
  put.innerHTML="Thanks for Voting. Your response has been recorded <br>";
  put.innerHTML+="Affermative Responses :"+yes+"<br>";
  put.innerHTML+="Negative Responses :"+no;
}
