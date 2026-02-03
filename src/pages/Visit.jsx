import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";

function Visit(){

       const navigate = useNavigate();

       const mainService = {
         title: "Kiswahili Sunday service (Main)",
         time: "10:30am-12:30pm",
         description: "Join us for our main Sunday service, filed with worship, teaching and community fellowship."
       };

       const otherServices = [
        { title: "Early Morning Daily Service", time: "5:30am-6:30am" },
        { title: "Sunday School", time: "8:00am-9:00am" },
        { title: "English Sunday service", time: "9:00am-10:30am" },
        { title: "Compassion Saturday Programme", time: "from 7:00am" },
       ];


    return(
        <div className="visit_cont">

            {/* Header */}
            <div className="visit-header">
               <h1>Plan Your Visit</h1>
               <p>You are most welcome! Here is some helpful information to make your visit comfortable.</p>
            </div>

            {/* Main Service */}
            <div className="visit_main_service">
               <h2>Main Service</h2>
               <p className="service_title">{mainService.title}</p>
               <p className="service_time">{mainService.time}</p>
               <p className="service_desc">{mainService.description}</p>
            </div>

            {/*Other Services */}
            <div className="visit_other_services">
               <h2>Other Services</h2>
               <ul className="visit_other_services_list">
                  {otherServices.map((service, index) => (
                     <li key={index} className="visit_other_service_item">
                        <p className="service_title">{service.title}</p>
                        <p className="service_time">{service.time}</p>
                     </li>
                  ))}
               </ul>
            </div>

            {/* Google map location */}
            <div className='visit_locations'>
               <h2> <IoLocationOutline /> Our Location </h2>
            
                     <iframe
                           title='Church Location'
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.9053389191645!2d34.59340185228021!3d0.11214476368870711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178003346e1f2bad%3A0x1aa7920c53f10d2c!2sACK%20ST%20MARYS%20MUNJI!5e0!3m2!1sen!2ske!4v1755548917201!5m2!1sen!2ske"  
                           width="600" 
                           height="300" 
                           style={{border:0}}
                           allowfullscreen="" 
                           loading="lazy" 
                           referrerpolicy="no-referrer-when-downgrade"
                     ></iframe>
            </div>

            {/*Contact Us */}
            <div className="visit_contact">
               <h2>Have Questions?</h2>
               <p>If you need assistance or want to get in touch before visiting, please contact us</p>
               <button onClick={() =>navigate("/contacts")}>Contact Us</button>
            </div>

        </div>

    )
}

export default Visit;