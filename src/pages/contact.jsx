import './contact.css'

function ContactUs(){

    return(
        <div className='contact_cont'>

           <div className='contact_title_cont'>
              <h1 className='contact_title'>CONTACT US</h1>
           </div>

           <div className='contact_form_cont'>

              <form>
                   {/* First Name */}
                   <label htmlFor='fname'>First Name</label>
                   <input type='text'
                          className='contact_fname' 
                          placeholder='Your First Name...' />

                   {/* Last Name */}
                   <label htmlFor='lname'>Last Name</label>
                   <input type='text'
                          className='contact_lname' 
                          placeholder='Your Last Name...' />

                    {/* Email Number */}
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                          className='contact_email' 
                          placeholder='Your Email...' />

                    {/* Message */}
                    <label htmlFor='fname'>Message</label>
                    <textarea className='contact_message'
                              name='message'
                              placeholder=''
                    
                    ></textarea>





              </form>

           </div>
           
        </div>
    )
}

export default ContactUs