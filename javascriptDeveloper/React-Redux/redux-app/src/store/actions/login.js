import { LOGIN  } from "../actionTypes";

const LOGIN_ACTION = (payload)=>{
    // payload.username payload.password
    // user error
    // api
    // const user = {name:'karthi', age:'25'};
    
    return {type:LOGIN, payload:payload};
}
export default LOGIN_ACTION;