import { useNavigate } from 'react-router-dom';
import './Home.css'
import AboutMe from './AboutMe';
import Wave from './assets/wave.png'
import Cartoon from './assets/cartoon.png'


function Home() {

  return (
   
    <div className='container'>
      
    <div className='quote'>
      <pre>We cannot solve our problems with the same thinking we used when we created them.<br></br>
                                    <strong>-Albert Einstein</strong>
      </pre>
      </div>

      <div className='intro'>
      <img src={Cartoon} alt="" width="200" height="200" />
        <p>Hello <img src={Wave} alt=""style={{height:'40px',width:'40px'}} />, I am Aydon Cupido. </p> 
      </div>
      <div className='avatar'>
        <pre>An aspiring Software Developer and web designer with a passion for programming and designing applications for a fun, purposeful user experience.</pre>
      </div>

      <div className='start'>
      <p>Scroll Down</p>
      <div className="arrow">&#x25BC;</div> {/* Unicode for down arrow */}
      </div>
      <AboutMe/>
    </div>
    
    
    
   

  )
}

export default Home
