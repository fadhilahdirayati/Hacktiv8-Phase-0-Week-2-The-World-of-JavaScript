/* 1 */
console.log('LOOPING PERTAMA');
var x =0;
while (x < 20){
  x += 2;
  console.log(x+' - '+'I love coding');

}
console.log('LOOPING KEDUA');

while (x >=2){
  console.log(x +' - '+'I will become fullstack developer');
  x -=2;
}


/* 2 */
console.log('LOOPING PERTAMA');
var x =0;
while (x < 20){
  x += 1;
  console.log(x+' - '+'I love coding');

}
console.log('LOOPING KEDUA');

while (x >=1){
  console.log(x +' - '+'I will become fullstack developer');
  x -=1;
}


/* 3 */


for (var i = 1; i <= 100 ; i ++) {


 if(i % 2 === 0){

   console.log ( i + ' - GENAP')

 } else if (i % 2 !== 0 ){

   console.log (i + ' - GANJIL')
 }



}

//////////////////////////////////////////
for (var i = 1; i <=100; i+= 2){


if (i % 3 === 0){

  console.log (i + ' 3 KELIPATAN  ' + 3)

} else {

  console.log(i + " - ")
}

}

/////////////////////////////////////////



for (var i = 1; i <=100; i+= 5){

  if (i % 6 === 0){

  console.log (i + '6 KELIPATAN ' + 6)

} else {

  console.log(i + " - ")
}

}

///////////////////////////////////////


for (var i = 1; i <=100; i+= 9){

if (i % 10 === 0){

  console.log (i + '10 KELIPATAN ' + 10)

} else {

  console.log(i + " - ")
}
