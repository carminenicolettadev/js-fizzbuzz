// Scrivi un programma che stampi i numeri da 1 a 100 ma per i multipli di 3 stampi “Fizz”
// al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
var parola;
var temp;
for ( i = 1; i <= 100 ; i++ ){
  parola = i;
  if( i % 3 == 0 && i % 5 != 0 ){
     parola = "Fizz";
  } else if( i% 5 == 0 && i% 3 !=0 ){
    parola = "Buzz";
  }else if( i % 3 == 0 && i % 3 == 0){
    parola = "FizzBuzz";
  }
  temp = document.getElementById("lista").innerHTML;
  document.getElementById("lista").innerHTML = temp + '<li>' + parola + '</li>' + '<hr>';

  console.log( parola);
}
