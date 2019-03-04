import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
export default class IndecisonApp extends React.Component{
    state = {
        options: [],
        selectedOption: undefined

    };
    handleDelSelectedOption =()=>{
        this.setState(()=>({selectedOption:undefined}))
    };
    handleDeleteOptions = () =>{
        this.setState(()=>({options:[]}))
    };

    handleDeleteOption = (optionToRemove)=> {
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option)
        }))
    };

    handlePick = () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({selectedOption:option} ))
    };

    //handlePick pass down to Action and setup onClick bind here 
    // randomly pick an option and alert it
    handleAddOption = (option) =>{
         if(!option){
                return 'enter something';
         }else if(this.state.options.indexOf(option)> -1){
             return 'option already exists';
         }

            this.setState((prevState)=>({options: prevState.options.concat([option])}));
     };
   
    
    //LifeCycle method
    componentDidMount(){
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options){
        this.setState(()=>({options}));
        }
    } catch (e){}
    };

    componentDidUpdate (prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data');
        } 
    };

    componentWillUnmount(){
        console.log('componentWillUnmount');
    };
    
    render(){

        
        const subtitle = "BOSTON";
        
        return( // nested structure, when we create instances of react components we can also choose some data into it, looks similar to html attributes, key and value pairs eg: title and {title}
            <div> 
            <Header  subtitle= {subtitle}/> 
            <div className="container">   
            <Action hasOptions = {this.state.options.length > 0}
            handlePick = {this.handlePick}/>
            
            <div className="widget">
            <Options options={this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption} />

            <AddOption 
            handleAddOption = {this.handleAddOption}/>
            </div>
            </div>

            <OptionModal
            selectedOption={this.state.selectedOption}
            handleDelSelectedOption = {this.handleDelSelectedOption}/>
            </div>
            
        );

    }
}
