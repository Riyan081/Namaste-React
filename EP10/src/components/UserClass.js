import React from 'react';

class UserClass extends React.Component{
    constructor(props){
     super(props); //why we write super props 
     //this.state = { //  count:0,//count2:1,
 //}

 this.state ={
    userInfo:{
        name:"dummy",
        location:"def",
        avatar_url:"htp://dummy-photo"
    },
 };
    // console.log(this.props.name+"child constructor");
    }

  async  componentDidMount(){ //this is not equal to useEffect        
        // used to make api calls 
      //  console.log(this.props.name+"child component called");
        //we want to reder componet once and dill the data and rerender 

        const data = await fetch(" https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        this.setState({
            userInfo:json
        })
        console.log(json);
    }

    //why we use componentdidunmount  ==  we we write anything in component did mount and made setInterval or settimeout and we want to clear that interval or timeout we use component will unmount if not then it will start running continuesly and it will not be good as it will take memory and it will not be good for the performance of the application

    render(){
       //let {name, location} = this.props;
      //let {count} = this.state;
     // console.log(this.props.name+"child renderd")
     const {name, location, avatar_url} = this.state.userInfo;
        return(
            <div className="user-card">
             {/*  <h1>count:{count}</h1>
                <button onClick={()=>{
                    //never update state variable directly 
                    this.setState({
                    count: this.state.count +1,
                       
                    });
                }}>
                    Count Increase</button>
                <h1>count:{this.state.count2}</h1>*/
                 }
          
            
            
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: @akshaymarch7:</h4>
            <img src={avatar_url}/>
            </div>
            
           
        );
    }
}

export default UserClass;