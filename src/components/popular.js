import c1 from '../images/c1.jpg';
import c2 from '../images/c2.jpg';
import c3 from '../images/c3.jpg';
import c4 from '../images/c4.jpg';

const Popular = ()=>{
    return(
        <div class="popular">
        <h1 class="popular__title">Most Popular</h1>
        <p>Pick The Best Fit</p>
        <div class="popular__container">
            <div className="course-card">
                <img src={c1} alt=""></img>
                <h3>Python</h3>
                <p>jose portilla</p>
                <p>4.6 ⭐⭐⭐⭐</p>
                <p>2999 <strike>5999</strike></p> 
             </div>
             <div className="course-card">
                 <img src={c2} alt=""></img>
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
        </div>
    </div>
    )
}

export default Popular;