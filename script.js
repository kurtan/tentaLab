//Uppgift 1
var utanDubletter=[...new Set([1,2,3,1,2,3,1,2,3,72])].
filter(x=>x%2>0)
//console.log(utanDubletter)
//Rätt svar[1,3]



//Uppgift2 //Rätt svar=12
var array=Array.from({length:10000}).map((x,i)=>i+1)
//console.log(array.length)
var result=array.filter(x=>Number.isInteger(x/792))
//console.log(result.length)
//Uppgift 3
//var ul
 $.get("namn",function(response){
   var array=response.split(",")
   array.sort()
 //  console.log(array)
 /*  ul=(  array.map(x=>`<li>${x}</li>`))
  console.log(ul)
  document.body.innerHTML='<ul>'+ul.join("")+'</ul>' */
}) 
//Uppgift 4

//Uppgift 5
var v=setInterval(function(){
   date=new Date()
   var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hour = date.getHours();
  if(hour<10) hour="0"+hour
  document.body.style.fontSize="2rem"
  document.body.innerHTML=hour+":"+minutes+":"+seconds
  },1000) 

function klick()
{
    var y
    var antal=document.querySelector("input").value
    var array=Array.from({length:antal}).map((x,i)=>i+1)
 var array2=   array.map(x=>document.createElement("div"))
  console.log(array2)
 array2.map((x,i)=>{
      var r=Math.floor((Math.random() * 255) + 0);
      var g=Math.floor((Math.random() * 255) + 0);
      var b=Math.floor((Math.random() * 255) + 0);
    if(i==0) 
    {
       x.style.border=`10px solid rgb(${0},${0},${0})`
       x.style.minHeight="200px"
       document.body.appendChild(x)
    }
   
       else
       {
          y.appendChild(x)
        y.style.backgroundColor=`rgb(${r},${g},${b})`
        y.style.border=`10px solid rgb(${r},${g},${b})`
       }
       y=x
   })
}

// bilar
(function uppgift6()
{
var array=a=[{regnr:'ABC123',märke:'Ford',färg:'Grön',årsmodell:2011,besiktigad:true}]
array.push(new Bil("XYZ765","Fiat",'Blå',2003,false))
array.push(new Bil("WTY111","BMW",'Vit',2014,true))
array.sort((a,b)=>{
   if(a.årsmodell>b.årsmodell) return 1
   else if(a.årsmodell<b.årsmodell) return -1
   else return 0
})
console.log(array)
})()

function Bil(regnr,m,f,åm,bes)
{
   this.regnr=regnr
   this.märke=m
   this.färg=f
   this.årsmodell=åm
   this.besiktad=bes
}
//Uppgift 8 igen
//Uppgift 8
var getAge= (dateOfBirth, dateToCalculate = new Date()) => {
   const dob = new Date(dateOfBirth).getTime();
   const dateToCompare = new Date(dateToCalculate).getTime();
   const age = (dateToCompare - dob) / (365 * 24 * 60 * 60 * 1000);
   return Math.floor(age);
};
console.log(getAge('1992-07-12'))