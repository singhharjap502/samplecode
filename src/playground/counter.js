class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }



    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
            
        }
    }
    componentDidMount(){
        
        const stringCount = localStorage.getItem('count');
        const count = parseInt(stringCount,10);
        if(!isNaN(count)){
            this.setState(()=>({count}));
        }
    }
        



    handleAddOne(){
      this.setState((prevState)=>{ //passing function in this.setState
          return {
              count:prevState.count+1};
      });

    }
    handleMinusOne(){
        this.setState((prevState)=>{
            return {
                count:prevState.count-1};
        });
    }
    handleReset(){
        this.setState(()=>{
            return {
                count: 0};
        });
    }
    render(){
        return(
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

/*Counter.defaultProps = {
    counter:0
};
*/
ReactDOM.render(<Counter counter={5}/>, document.getElementById('app'));


//create three methods
//use console.log to print method names 
//wire up onClick and bind the constructor
// 5 states component state in counter


// JSX - JavaScript XML



/*let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
    
};
const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};


const appRoot = document.getElementById('app');


const renderCounterApp = () => { //creating a function and calling at few different places like addOne minusOne

    const template = ( //template is object 
        <div> 
        <h1>count:{count} </h1>
        <button onClick={addOne}>+1 </button>
        <button onClick={minusOne}>-1 </button>
        <button onClick={reset}>reset </button>
        </div>
    );
    ReactDOM.render(template,appRoot);
};
renderCounterApp();
*/
