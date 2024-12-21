// const h = React.createElement("h1", //it is react elemehet like object this is object console.log(h) will show you the object
//     {id: "heading"},
//     "hi ths is riyan"
// );
     
// const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(h);






/*
<div id=parant>
    <div id="child">
    <h1></h1>

    </div>
    </div>

*/
//this parent is just an object  and this obj is react element 
//react element is an object and this obj becomes html that browser understand React.createelement(obj) => html
const parent = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
     "div",
    {id:"child"},
 React.createElement("h1", {}, "Hello World")
)
);


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
933