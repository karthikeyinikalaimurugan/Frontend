import {connect} from 'react-redux';
import auth from './store/actions';

const App = (props) => {
    return (
        <div>App component {props.user.name}{props.isLoggedIn}
        <button onClick={(e)=>props.logIn({name:'karthi',isLoggedIn:true})}>Switch User</button></div>
    )
}
const mapStateToProp = (state) => {
    console.log('state',state);
    return {
        user: state.user,
        isLoggedIn: state.isLoggedIn,
    }
}
const mapDispatchToProps = (dispatch) => ({
    logIn: (payload) => {dispatch(auth.login(payload))}
})
export default connect(mapStateToProp,mapDispatchToProps)(App);