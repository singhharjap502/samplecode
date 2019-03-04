class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.state = { 
            visibility: false 
        };
    }

    showDetails(){
      this.setState((prevState)=>{
        return{
            visibility: !prevState.visibility
        };

      });
    }
    render(){
        return(
            <div>
            <h1>VisibilityToggle</h1>
            <button onClick={this.showDetails}>
            {this.state.visibility ? 'Hide Details':'Show Details'}</button>
            {this.state.visibility && ( <div>
                <p>hey</p>
                </div>

            )}
            
            </div>



        );
    }
}
ReactDOM.render(<VisibilityToggle/>,document.getElementById('app'));