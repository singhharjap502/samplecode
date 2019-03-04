console.log('App.js is running');
const app = {
    title: 'Indecision App',
    options: [],
};

const onFormSubmit =(e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;//on form access to elem list of elem indexed by name

    if(option){ //option is a string
        app.options.push(option);//adding elem onto the array options is an array
        e.target.elements.option.value='';
        renderIni();
   
    } //option = input
}
const removeAll = () => {
    app.options = [];
    renderIni();
}
const onPi = () => {
const randomNum = Math.floor(Math.random() * app.options.length);
const option = app.options[randomNum];
alert(option);
};


const appRoot = document.getElementById('app');



const renderIni = () => {

    const template = (
        <div>
        <h1>{app.title}</h1>
        <p>{app.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <button disabled = {app.options.length === 0} onClick={onPi}>pick an option</button>
        <button onClick={removeAll}>remove all</button>
       
        <ol>
        {
            app.options.map((option)=><li key = {option} > option: {option}</li>)
        }
        
        </ol>
    
        <form onSubmit={onFormSubmit}>
        <input type= "text" name="option"/>
        <button>Add Option</button>
        </form>
        </div>
    );
    ReactDOM.render(template,appRoot);
    

};
renderIni();