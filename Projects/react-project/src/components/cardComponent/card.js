import './card.css';
const Card = (props) => {
    return (
        <div className="card-container">
            <div className="card-item">
            <h1 className="title">{props.title}</h1>
            <div className="subheading">{props.subheading}</div>
            <div className="description">{props.description}</div>
            <button className="btn" type="button" onClick={props.action}>{props.actionName}</button>
            </div>
            <div className="card-item">
            <h1 className="title">{props.title}</h1>
            <div className="subheading">{props.subheading}</div>
            <div className="description">{props.description}</div>
            <button className="btn" type="button" onClick={props.action}>{props.actionName}</button>
            </div>
            <div className="card-item">
            <h1 className="title">{props.title}</h1>
            <div className="subheading">{props.subheading}</div>
            <div className="description">{props.description}</div>
            <button className="btn" type="button" onClick={props.action}>{props.actionName}</button>
            </div>
            <div className="card-item">
            <h1 className="title">{props.title}</h1>
            <div className="subheading">{props.subheading}</div>
            <div className="description">{props.description}</div>
            <button className="btn" type="button" onClick={props.action}>{props.actionName}</button>
            </div>
            <div className="card-item">
            <h1 className="title">{props.title}</h1>
            <div className="subheading">{props.subheading}</div>
            <div className="description">{props.description}</div>
            <button className="btn" type="button" onClick={props.action}>{props.actionName}</button>
            </div>
        </div>
    )
}
export default Card;