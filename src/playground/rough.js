
//counter.js
console.log('App.js is running');

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count:0

        };


    }
    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) =>{
            return {
                count: prevState.count -1
            };
        });
    }
    handleReset(){
        this.setState(() =>{
            return {
                count:  0
            };
        });
        
    }
    render(){
        return(
            <div>
            <h1> Count: {this.state.count}</h1>
            <button onClick = {this.handleAddOne} > +1 </button>
            <button onClick = {this.handleMinusOne} > -1 </button>
            <button onClick = {this.handleReset} > reset </button>

            </div>
        );

        
    }
}
ReactDOM.render(<Counter/>,document.getElementById('app')); 


//Visibilty Toggle
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
    
        this.handleShowD = this.handleShowD.bind(this);
        this.state = {
            visibility: false 
        }
    }

    handleShowD(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };

        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick= {this.handleShowD}>
                {this.state.visibility ? 'Hide Details':'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>hey</div>
                )}
                </div>
            
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));


//visibility toggle
class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
    
        this.handleShowD = this.handleShowD.bind(this);
        this.state = {
            visibility: false 
        }
    }

    handleShowD(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };

        });
    }
    render(){
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick= {this.handleShowD}>
                {this.state.visibility ? 'Hide Details':'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>hey</div>
                )}
                </div>
            
        );
    }
}

ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));

let visibility = false;

const showDetails=() => {
    visibility =! visibility;
    
    renderV();
    

};
const appRoot = document.getElementById('app');

const renderV = () =>{ 
const template = (
<div>
<h1>Visibility Toggle</h1>
<button onClick= {showDetails}>
{visibility ? 'Hide Details':'Show Details'}
</button>
{visibility && (
    <div>hey</div>
)}
</div>

);
ReactDOM.render(template,appRoot);
};
renderV()
