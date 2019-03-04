
import React from 'react';
import ReactDOM from 'react-dom';
import IndecisonApp from './components/IndecisionApp';

const Layout = (props) => {
    return(
        <div>
        <p>header</p>
        {props.children}
        <p>footer</p>
        </div>
    );
}

ReactDOM.render((<Layout> 
    <p> hi </p>
    <h1>Title</h1>
    <p>hi</p>
    </Layout>
), document.getElementById('app'));


