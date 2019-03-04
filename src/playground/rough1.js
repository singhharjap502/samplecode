
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisonApp from './components/IndecisionApp';

ReactDOM.render(<IndecisonApp/>, document.getElementById('app'));

class OldSyntax{
    constructor(){
        this.name = 'hi';
        this.getGreeting = this.getGreeting.bind(this);
    }
    getGreeting(){
        return`hello ${this.name}`;    }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting;
console.log(getGreeting());

class NewSyntax{
    name='kvk';
    getGreeting = () => { 
        return`hello ${this.name}`;
    }

}
const newSyntax= new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
