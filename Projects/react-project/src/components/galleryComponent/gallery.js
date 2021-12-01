import './gallery.css';
import g1 from './g1.jpg';
import g2 from './g2.jpg';
import g3 from './g3.jpg';
import g4 from './g4.jpg';
import g5 from './g5.jpg';
import g6 from './g6.jpg';
import g7 from './g7.jpg';
import g8 from './g8.jpg';


const Gallery = () => {
    return (
    <div className="gallery-grid">
        <div className="box-grid"><img src={g1}></img></div>
        <div className="box-grid"><img src={g5}></img></div>
        <div className="box-grid"><img src={g6}></img></div>
        <div className="box-grid"><img src={g4}></img></div>
        <div className="box-grid"><img src={g5}></img></div>
        <div className="box-grid"><img src={g6}></img></div>
        <div className="box-grid"><img src={g4}></img></div>
        <div className="box-grid"><img src={g1}></img></div>
    </div>
    )
}
export default Gallery;