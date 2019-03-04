//stateless functional component combination of 2

class IndecisonApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = { 
            options : []
        };
    }
    //LifeCycle method
    componentDidMount(){
        try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if (options){
        this.setState(()=>({options}));
        }
    } catch (e)
        {

        }    }
    componentDidUpdate(prevProps,prevState){
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('saving data');
        }

        
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    handleDeleteOptions(){
       /* this.setState(()=>{
            return{
                options: []
            };
        });*/


        this.setState(()=>({options:[]}))
    }

    handleDeleteOption(optionToRemove){
        this.setState((prevState)=>({
            options: prevState.options.filter((option)=> optionToRemove !== option)
        }))
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    //handlePick pass down to Action and setup onClick bind here 
    // randomly pick an option and alert it
     handleAddOption(option){
         if(!option){
                return 'enter something';
         }else if(this.state.options.indexOf(option)> -1){
             return 'option already exists';
         }
        /*this.setState((prevState)=>{
            return{
                options: prevState.options.concat([option])
            };*/


            this.setState((prevState)=>({options: prevState.options.concat([option])}));
     }
    render(){

        
        const subtitle = "IA 2";
        
        return( // nested structure, when we create instances of react components we can also choose some data into it, looks similar to html attributes, key and value pairs eg: title and {title}
            <div> 
            <Header  subtitle= {subtitle}/>    
            <Action hasOptions = {this.state.options.length > 0}
            handlePick = {this.handlePick}
            />
            <Options options={this.state.options}
            handleDeleteOptions = {this.handleDeleteOptions}
            handleDeleteOption = {this.handleDeleteOption}
            
            />
            <AddOption 
            handleAddOption = {this.handleAddOption}
            
            />
            </div>
            
        );

    }
}
// 
// this- reference to current instance of a component
/*IndecisonApp.defaultProps= {
 options:[]
};
*/





const Header = (props)=>
{
    return(
        <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};
Header.defaultProps = {
title: 'InDecision'
};
/*class Header extends React.Component // Comoponent is a class from React, es6 classes, have to define render method
 {

    

render(){
    
    return (
    <div>
    <h1>{this.props.title}</h1>
    <h2>{this.props.subtitle}</h2>
    </div>
);

}
}*/

const Action = (props) => {
return(
    <div>
    <button onClick= {props.handlePick}
    disabled = {!props.hasOptions}>
     What should I do ? </button>
    </div>
);

};
    /*class Action extends React.Component{
   
    

  
    render(){

        return(
            
            <div>
            <button onClick= {this.props.handlePick}
            disabled = {!this.props.hasOptions}>
             What should I do ? </button>
            </div>
        )
    }

}*/


const Options = (props) =>{
return(
    <div>
               
    <button onClick= {props.handleDeleteOptions}> Remove All </button>
    {props.options.length === 0 &&  <p>Please add an option to get started</p>}
    {
    props.options.map((option)=> (
        <Option 
        key={option}
        optionText={option}
        handleDeleteOption = {props.handleDeleteOption}
        />
    ))
    }
    
    </div>
);
};
/*class Options extends React.Component{
    
 
    render(){
        return(
            <div>
               
            <button onClick= {this.props.handleDeleteOptions}> Remove All </button>
            {
            this.props.options.map((option)=> <Option key={option} optionText={option}/>)
            }
            
            </div>
// this.props.map((item that you are trying top list)=> <p key={item}> {item}</p>) key for each
        );
    }
}*/
const Option = (props)=>{
    return(
    

        <div>
        {props.optionText}
        <button onClick ={(e)=>{
            props.handleDeleteOption(props.optionText)
        }}
         >
         remove
         </button>
        </div>
    );
};

/*class Option extends React.Component{
    render(){
        return(
            <div>
            {this.props.optionText}
            </div>
        );

    }
}*/


class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
         // 2 handleAddOptions 1 is built into the component doing something when the form gets submitted and one is passed down the parent will get things manipulated interms of that state
    
        this.state = {
            error: undefined

        };   }

    //class method// instead of global function its a class method
    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(()=>({error}));

        if(!error){
             e.target.elements.option.value = '';
        }
        
        
        /*this.setState(()=>{
            return{
                error
            };

        });*/
        
    }
    render(){
        return(
            <div>
        
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button> Add Option </button>
            </form>
            
            </div>
        );

    }
}

/*const User = (props) =>{
    return(
        <div>
        <p>Name:{props.name} </p>
        <p>Age:{props.age} </p>
        </div>
    );

};*/
ReactDOM.render(<IndecisonApp/>, document.getElementById('app'));