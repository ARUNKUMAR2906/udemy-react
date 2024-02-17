import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';
import c5 from '../images/c5.jpg';
import c6 from '../images/c6.jpg';
import c7 from '../images/c7.jpg';
import c8 from '../images/c8.jpg';



const Cards = ()=>{
    return(
    <div className="recommended">
    <h1 className="recommended__title">Recommended For You</h1>
    <p>Pick The Best fit</p>
    <div className="recommended__container">
        <div className="course-card">
           <img src={c1} alt="c1"></img>
           <h3>Python</h3>
           <p>jose portilla</p>
           <p>4.6 ⭐⭐⭐⭐</p>
           <p>2999 <strike>5999</strike></p> 
        </div>
        <div className="course-card">
            <img src={c2} alt="c2"></img>
            <h3>Web Development</h3>
            <p>jose portilla</p>
            <p>4.7 ⭐⭐⭐⭐</p>
            <p>8999 <strike>14999</strike></p> 
         </div>
         <div className="course-card">
            <img src={c3} alt=""></img>
            <h3>Dart</h3>
            <p>jose portilla</p>
            <p>4.6 ⭐⭐⭐⭐</p>
            <p>1999 <strike>4999</strike></p> 
         </div>
         <div className="course-card">
            <img src={c4} alt=""></img>
            <h3>Machine Learning</h3>
            <p>jose portilla</p>
            <p>4.6 ⭐⭐⭐⭐</p>
            <p>4999 <strike>8999</strike></p> 
         </div>
         <div className="course-card">
            <img src={c5} alt=""></img>
            <h3>Java</h3>
            <p>jose portilla</p>
            <p>4.3 ⭐⭐⭐⭐</p>
            <p>3999 <strike>9999</strike></p> 
         </div>
         <div className="course-card">
            <img src={c6} alt=""></img>
            <h3>Ruby</h3>
            <p>jose portilla</p>
            <p>4.6 ⭐⭐⭐⭐</p>
            <p>2999 <strike>4999</strike></p> 
         </div>
         <div className="course-card">
            <img src={c7} alt=""></img>
            <h3>Node.js</h3>
            <p>jose portilla</p>
            <p>4.6 ⭐⭐⭐⭐</p>
            <p>1999 <strike>5999</strike></p> 
         </div>
         <div className="course-card">
            <img src={c8} alt=""></img>
            <h3>react.js</h3>
            <p>jose portilla</p>
            <p>4.6 ⭐⭐⭐⭐</p>
            <p>5999 <strike>8999</strike></p> 
         </div>
    </div>
</div>
    )
}

export default Cards;