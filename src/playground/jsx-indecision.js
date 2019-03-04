class Person {
    constructor(name= 'Anonymous',age = 0) //default part called implicitly , constructor function
    { 
    this.name = name ;
    this.age = age ; 
    }
    getGreeting() {
        //return this.name ;
        return `I am ${this.name}`;// template strings use `` 
    }
    getDescription() // methods
     {
        return `${this.name} is ${this.age} year(s) old.`;
    }
    
    }
    
    class Student extends Person{
    constructor(name,age,major){
        super(name,age);// calling parent constructor
        this.major = major;
    }
    hasMajor()
    {
       return !!this.major; 
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor()){
            description += `major is ${this.major}.`;
        }
        return description;
    }
    
    }
    
    //Home location override getGreeting
    // use super method
    class Traveler extends Person{
        constructor(name,age,location){
            super(name,age);
            this.location = location;
        }
        hasLoc(){
            return !!this.location;
        }
        getGreeting(){
            let greeting = super.getGreeting();
            if(this.hasLoc()){
                greeting += ` I'm visiting from ${this.location}.`;
            }
            return greeting;
        }
    }
    
    const me = new Traveler('kvk',27,'BOS');//instances of class
    console.log(me.getGreeting());
    
    const me2 = new Traveler();
    console.log(me2.getGreeting());
     /*
    
     flow
     define class 
     instances of class
     define constructor
     define methods 
     then call them
    
     we can extend existing class 
     customise behaviour 
     add new methods eg hasLoc hasMajor
    
     define subclass
     use super override the properties
     override the methods from parent class
    
    
     */