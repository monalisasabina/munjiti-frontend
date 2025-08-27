import "./home.css"
import churchImage from '../Pictures/Munjiti Church.png'

function Home(){

   const serviceTimes = [
      { title: "Early Morning Daily Service", time: "5:30am-6:30am" },
      { title: "Sunday School", time: "8:00am-9:00am" },
      { title: "English Sunday service", time: "9:00am-10:30am" },
      { title: "Kiswahili Sunday service (Main)", time: "10:30am-12:30pm" },
      { title: "Compassion Saturday Programme", time: "from 7:00am" },
   ];

 return(
    <div className="home_cont">

       <div className="home_intro">

         <div className="home-heading-block">

             <h1 className="home_title"> Welcome to St. Mary's Munjiti Parish</h1>

             <blockquote className="give_verse">
               <p>But seek first his kingdom and his righteousness, and all these things will be given to you as well</p>
               <cite className="verse_ref">-Matthew 6:33</cite>
             </blockquote>
          
         </div>

          <div className="home_images_cont">
               <img className="home_image"  src={churchImage} alt="St. Mary's Munjiti Church building"/>
          </div>
         
        </div>

       <div className="home_services_cont">

           <h2 className="home_services_title"> OUR SERVICES</h2>

           <div className="home_services_time_cont">

               {serviceTimes.map((service, index) => (
                   <div key={index}>
                       <p className="service_title">{service.title}</p>
                       <p className="service_time">{service.time}</p>
                   </div>
               ))}
           </div>
       </div>

    </div>

 )
}

export default Home