// const element = React.createElement('h1',{
//     id:'title'
// },
//     "HEllo coders army"
// );

//JSX :javascript XML:Look Like HTML
//JSX -->React.createElement()


// const element = <h1 id='title'>Hello Coder Army</h1>;


// const element2 = (<div>
//     <h1>hi bro</h1>
//     <h2>how are u</h2>
// </div>);


//React component

// function Apps(name){
//     return (
//         <h1>Hello COder Army bro {name} </h1>
//     );
// }
// const a = Apps();


// const elements = <h1>Hello Coder {"10+90"}</h1>

// const courses = ['html','css','javascript'];
//     /*[<li>html</li>,<li>css</li>,<li>javascript</li>];*/


// const elements = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
//     </ul>
// );


// const elements = <h1 id="title" className="first" style={{backgroundColor:"orange",color:"white"}}>Hello coder Army</h1>

// function App(props){
// return (
//     <h1>Hello Coder Army {props.name} {props.name} {props.age}</h1>
// )
// }


// {
//     name:"Rohit",
//     age:30
// }

// const elements = <App name="Rohit" age={30}></App>



function Header({name}) {

    return (
            <h1 > {name} Welcome to Indian Election commission Website</h1>
    )
}


// const props = {
//     name:"Rohit"
// }

// const {name} = props;



function Main({user}) {
    return (
        <>
        <h2>Hi {user.name}</h2>
        <h3>{user.age>18? "You are eligible foe vote": "You are not eligible for the vote"}</h3>
        <p>Yo6ur city is {user.city}</p>
        </>
    )
}


function Footer(){
    return(
        <h3>Thanks for visiting our website</h3>
    )
}S


function App() {

    return (
        <>
            <Header name="ROhit"></Header>
            <Footer></Footer>
        </>
    )
}






const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(element2);
// console.log(element2);
// root.render(a);
// root.render(elements);

root.render(<App />);
