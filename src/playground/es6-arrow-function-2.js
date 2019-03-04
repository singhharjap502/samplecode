// arguments object no longer bound with arrow functions

const add = (a,b) => 
{
    return a + b ;

};
console.log(add(1,2));


const user = {
    name: 'kvk',
    cities: ['bos','sf','NY'],
    printPlacesLived() {

    return this.cities.map((city)=> this.name+' has lived in ' + city);

   return cityMessages;
    }
};
console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1,2],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((mul)=> mul*this.multiplyBy);
        return num;
    }
};
console.log(multiplier.multiply());