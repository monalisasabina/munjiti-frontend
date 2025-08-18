import './contact.css'
import contactUsImage from "/src/Pictures/contactUs.png"
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdOutlineEmail } from "react-icons/md";

function ContactUs(){

    return(
        <div className='contact_cont'>

           {/* Title Section */}
           <div className='contact_title_cont'>
              <h1 className='contact_title'>CONTACT US</h1>
           </div>   

           {/* Main Content */}
           <div className='contact_main'>

               {/* Image Section */}
               <div className='contact_image_cont'>
                 <img 
                    src={contactUsImage} 
                    alt='Contact Us' 
                    className='contact_image'
                 />
               </div>

               {/* Contacts */}
               <div className='other_contacts'>
                  <h3> <HiMiniDevicePhoneMobile /> Mobile No: </h3>
                  <h4> 00000000000000</h4>
                  <h3> <MdOutlineEmail /> Email: </h3>
                  <h4>  munjiti@munjiti.com </h4> 

                  {/* Google map location */}
               <div className='map_cont'>

                  <iframe 
                       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.9053389191645!2d34.59340185228021!3d0.11214476368870711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178003346e1f2bad%3A0x1aa7920c53f10d2c!2sACK%20ST%20MARYS%20MUNJI!5e0!3m2!1sen!2ske!4v1755548917201!5m2!1sen!2ske"  
                       width="600" 
                       height="300" 
                       style={{border:0}}
                       allowfullscreen="" 
                       loading="lazy" 
                       referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>


               </div>

               

            </div>
        
         </div> 
    )
}

export default ContactUs