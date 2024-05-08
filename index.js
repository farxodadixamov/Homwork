"use strict"
// 1-misol
function ortachaQiymatHisobla(raqamlar) {
    if (raqamlar.length === 0) {
      return 0;
    }
    
    var summa = 0;
    for (var i = 0; i < raqamlar.length; i++) {
      summa += raqamlar[i];
    }
    
    var ortacha = summa / raqamlar.length;
    return ortacha;
  }


  var royxat = [5, 10, 15, 20, 25];
  var ortachaQiymat = ortachaQiymatHisobla(royxat);
  console.log(ortachaQiymat);

 ///////////////////////----------------------/////////////////// 


// 2-misol

// function numberToPower(number, power) {
//     let result = 1;
  
//     for ( let i = 1; i <= power; i++ ) {
//       result *= number;
//     }
    
//     return result;
//   }
//   console.log(numberToPower(3, 2)); 
//   console.log(numberToPower(2, 3));  
//   console.log(numberToPower(10, 6)); 


//////////////////////----------------------///////////////////////

// 4-misol
// function gollarSoniniHisobla(liga, kubok, chempionlar) {
//     var umumiySon = liga + kubok + chempionlar;
//     return umumiySon;
//   }
  
//   var ligaGollar = 5;
//   var kubokGollar = 10;
//   var chempionlarGollar = 2;
  
//   var umumiyGollar = gollarSoniniHisobla(ligaGollar, kubokGollar, chempionlarGollar);
//   console.log(umumiyGollar);
  
/////////////////////-----------------------////////////////////////
// 5-misol

// function yashashJoyiniTekshir(gul1, gul2) {
//     var gul1GulbarglarSon = gul1.length;
//     var gul2GulbarglarSon = gul2.length;
  
//     if (gul1GulbarglarSon % 2 === 0 && gul2GulbarglarSon % 2 === 1) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   var timGul = "lalala";
//   var saraGul = "lalalala";
  
//   var gulAtir = yashashJoyiniTekshir(timGul, saraGul);
//   console.log(gulAtir);
  
    //////////////////////------------------///////////////
  // 7-misol

//   function tubSonTekshirish(n) {
//     if (n <= 1) {
//       return false;
//     }
    
//     for (var i = 2; i < n; i++) {
//       if (n % i === 0) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  

//   console.log(tubSonTekshirish(0)); 
//   console.log(tubSonTekshirish(1)); 
//   console.log(tubSonTekshirish(2)); 
//   console.log(tubSonTekshirish(11)); 
//   console.log(tubSonTekshirish(12)); 



////////////////------------------////////////////

// 8- misol 
// function massivYigindisiniTopish(arr) {
//     if (!arr || arr.length === 0) {
//       return [];
//     }
    
//     var musbatSonalr = 0;
//     var manfiySonalr = 0;
    
//     for (var i = 0; i < arr.length; i++) {
//       if (arr[i] > 0) {
//         musbatSonalr += arr[i];
//       } else if (arr[i] < 0) {
//         manfiySonalr += arr[i];
//       }
//     }
    
//     return [musbatSonalr, manfiySonalr];
//   }
  
  
//   var massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
//   var natija = massivYigindisiniTopish(massiv);
//   console.log(natija); 


///////////////--------------------//////////////////

  