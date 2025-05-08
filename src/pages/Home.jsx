import "./home.css"
import churchImage from '../Pictures/Munjiti Church.png'

function Home(){

 return(
    <div className="home_cont">

       <div className="home_intro">

          <h1 className="home_title"> Welcome to St. Mary's Munjiti Church</h1>
 
          <div className="home_images_cont">
               <img className="home_image"  src={churchImage} alt="church image"/>

               {/* <img className="home_image_1"  src={bibleQuote} alt="Philipians 4:13"/> */}
          </div>
         
        </div>

       <div className="home_services_cont">

           <h4 className="home_services_title"> OUR SERVICES</h4>

           <div className="home_services_time_cont">
               <div>
                  <p className="service_title">Early Morning service</p>
                  <p className="service_time">7:00am-8:00pm</p>
               </div>

               <div>
                  <p className="service_title">Late morning service</p>
                  <p className="service_time">7:00am-8:00pm</p>
               </div>

               <div>
                  <p className="service_title">Evening service</p>
                  <p className="service_time">7:00am-8:00pm</p>
               </div>
           </div>

       </div>

    </div>

 )
}

export default Home