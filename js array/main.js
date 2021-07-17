console.log("hello world")
var firstname="Nimrat";
var lastname="Rai";
console.log(firstname);
console.log(lastname)
var fullname=firstname.concat(lastname)
console.log(fullname);
var lengthfullname=fullname.length;
console.log(lengthfullname)
var name1="i am Nimrat Rai"
console.log(name1)
var replacename1=name1.replace("Nimrat","Nanki");
console.log(replacename1)
var name2=["Nimrat","Nanki","Inder","Gurmeet"]
console.log (name2)
document.getElementById("declearation of array").innerHTML=name2
console.log(name2[0])
document.getElementById("array1").innerHTML=name2[0]
console.log(name2[1])
document.getElementById("array2").innerHTML=name2[1]
console.log(name2[3])
document.getElementById("array3").innerHTML=name2[2]
console.log(name2[3])
document.getElementById("array4").innerHTML=name2[3]
name2.push("Simi")
console.log(name2)
name2.pop()
console.log(name2)
name2.reverse()
console.log(name2)
name2.sort()
console.log(name2)
var number=[2,5,6,8]
var maxnumber=Math.max.apply(Math,number);
console.log(maxnumber)
var minnumber=Math.min.apply(Math,number);
console.log(minnumber)
var name3="Nimrat Rai"
console.log(name3)
lengthname3=name3.length
console.log(lengthname3)
var a=10;
var b=10
console.log(a+b)