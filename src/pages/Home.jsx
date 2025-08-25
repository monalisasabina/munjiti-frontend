import "./home.css"
import churchImage from '../Pictures/Munjiti Church.png'

function Home(){

 return(
    <div className="home_cont">

       <div className="home_intro">

          <h1 className="home_title"> Welcome to St. Mary's Munjiti Parish</h1>

           <blockquote className="give_verse">
               But seek first his kingdom and his righteousness, and all these things will be given to you as well.
                <cite className="verse_ref">Matthew 6:33</cite>
           </blockquote>
          

          <div className="home_images_cont">
               <img className="home_image"  src={churchImage} alt="church image"/>
          </div>
         
        </div>

       <div className="home_services_cont">

           <h4 className="home_services_title"> OUR SERVICES</h4>

          

           <div className="home_services_time_cont">

               <div>
                 <p className="service_title"> Early Morning Daily Service</p>
                 <p className="service_time"> 5:30am-6:30am</p>
               </div>

                <div>
                 <p className="service_title"> Compassion Saturday Programme</p>
                 <p className="service_time"> from 7:00am</p>
               </div>   

               <div>
                  <p className="service_title">Sunday School</p>
                  <p className="service_time">8:00am-9:00am</p>
               </div>

               <div>
                  <p className="service_title">English Sunday service</p>
                  <p className="service_time">9:00am-10:30am</p>
               </div>

               <div>
                  <p className="service_title">Kiswahili Sunday service (Main) </p>
                  <p className="service_time">10:30am-12:30pm</p>
               </div>
           </div>

       </div>

    </div>

 )
}

export default Home