import React from "react";

function Home (props){
    return props.hide ? null : (
        <div>
            Home page!
        </div>
    )
}
export default Home;


// eslint-disable-next-line no-lone-blocks
{/* <div class="test">hello</div>
const element = React.createElement('div', {className:"test"}, 'hello');

<div class="test">
    hi
    <h1>
        hello
    </h1>
</div>

const h1element = React.createElement('h1',null,'hello');
const elemnt1 = React.createElement('div', {className:'test'}, `hi ${h1element}`); */}


// <div className="container">
//     <Table characterData={characters} result={'Iam result'} />
//   </div>

//   Table
//   this.props = {}
//   this.props = {
//       characterData: [],
//       result:'iam result'
//   }

//   const {characterData,} = this.props;
//   characterData

// state = {
//     fname: 'senthur',
//     lname: 'athiban',
// }

// this.setState({fname:'karthi'},(newstate)=>{
//     console.log(newstate);
// })

// {
//     fname: 'senthur',
//     lname: 'athiban',
//     ...{fname:'karthi'}
// }

// function setUsers(updatedUsers){
//     console.log(this.state.users.length); // 3
//     this.setState({users:updatedUsers}); 
// }




// state = {
//     contacts: [],
//     newContact: {
//         contactName: '',
//         contactNo: '',
//     }
// }