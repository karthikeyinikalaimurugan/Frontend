import './gradient.css';
const Gradient = (props) => {
    return(
       <div className="gradient">
           <div className="card">
                <h1 className="title">{props.title}</h1>
                <div className="subheading">{props.subheading}</div>
                <div className="description">{props.description}</div>
                <button className="btn" type="button" onClick={props.action}>{props.actionName}</button>
           </div>
       </div>
    )
}
export default Gradient;