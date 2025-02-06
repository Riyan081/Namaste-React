import react from 'react';
import User from './User';
import UserClass from './UserClass';
import React from 'react';

class About extends React.Component{
constructor(props){
    super(props);
    console.log("parant constructor called")
    
}

componentDidMount(){
    console.log("parent componentDidMount called");
    //
}

render(){
    console.log(this.props.name+"parent render called");
    return(
          <div>
            <h1>About Class Components </h1>
            <h2>hi</h2>
            <UserClass name={"hi i am riyan"} location ={ "mumbai"}/>
           
           
          </div>
    );
    //so the ccall back is not like what you currently think the calling will be like 
    //Parant constructor called
    //Parant render called
    //child constructor called(riyan one)
    //child render called(riyan one)
    //child constructor called(2nd instance)
    //child render called(2nd instance)
    //child componentDidMount called(riyan one)
    //child componentDidMount called(2nd instance)
    //parent componentDidMount called
    //so the child component will be called first then the parent component will be called
    //this is the call back of the react(check react lificle method diagram imp for revise )


}
}
// const About = ()=>{
//     return(
//         <div>
//             <h1>About</h1>
//             <h1>This is Namaste React web Series</h1>
//             <User name={"hi bhai "}/>

//             <UserClass name = {"yo nigga"} />
//         </div>
//     );
// };

export default About;