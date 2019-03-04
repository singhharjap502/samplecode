var nameVar = 'kvk';
nameVar = 'k';
console.log('nameVar',nameVar);

let nameLet = 'kvk1';
nameLet = 'k1';
console.log('nameLet',nameLet);

const nameConst = 'kvk2';

console.log('nameConst',nameConst);

//Block scoping

const fullName = 'Avi kvk';
let firstName;
if(fullName){
     firstName = fullName.split(' ')[0];
console.log(firstName);
}
console.log(firstName);