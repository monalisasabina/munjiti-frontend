import "./home.css"
import churchImage from '../Pictures/Munjiti Church.png'
import { useNavigate } from "react-router-dom"

function Home(){

    const navigate = useNavigate();

 return(
    <div className="home_cont">

      {/* HOME INTRO */}
      <div className="home_intro">

         <div className="home-heading-block">
             <h1 className="home_title">ACK St. Mary's Munjiti Parish</h1>

             <p className="home_subtitle">
                  A welcoming Anglican community in Munjiti, rooted in faith, worship and fellowship
             </p>
         </div>


         {/* Buttons */}
         <div className="home_button">
              <button onClick={() => navigate("/visit")}>Plan Your Visit</button>
              <button onClick={() => navigate("/notices")}>Notices</button>
         </div>

         {/* BIBLE VERSE */}
         <div className="home_bible_verse">
              <blockquote className="give_verse">
                <p>But seek first his kingdom and his righteousness, and all these things will be given to you as well</p>
                <cite className="verse_ref">-Matthew 6:33</cite>
             </blockquote>
         </div>

      </div>
       
      {/* HOME IMAGES */}
      <div className="home_images_cont">
               <img className="home_image"  src={churchImage} alt="St. Mary's Munjiti Church building"/>
          </div>
   
    </div>

 )
}

export default Home