"use strict";
let hGlas = {а:1,я:1,е:1,ё:1,о:1,э:1,ю:1,у:1,и:1,ы:1}; 
let mas = prompt('input str').toLowerCase().split("");
let count=0;


// forEach
function f(v,i,a){      
    if(v in  hGlas)
    count++;
}
mas.forEach(f);
console.log(count);
/////////////////////

// filter
//1 способ
let countGlasFilter = mas.filter((v,i,a)=>(v in hGlas)).length;
console.log(countGlasFilter);
//2 способ
function ff(v,i,a){
    return (v in hGlas);
}
console.log(mas.filter(ff).length);
/////////////////////

// reduce
function fff(r,v,i,a){
    if(v in hGlas)
    r++;
    return r++;
}
console.log(mas.reduce(fff,0));








