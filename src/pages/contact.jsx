import './contact.css'

function ContactUs(){

    return(
        <div className='contact_cont'>

           <div className='contact_title_cont'>
              <h1 className='contact_title'>CONTACT US</h1>

              <div className='other_contacts'>
                 <h3> Mobile No: </h3>
              </div>

 

           </div>

           <div className='contact_form_cont'>

              <form className='contact_form'>
                   {/* First Name */}
                   <label htmlFor='fname'>First Name</label>
                   <input type='text'
                          className='contact_input'  />

                   {/* Last Name */}
                   <label htmlFor='lname'>Last Name</label>
                   <input type='text'
                          className='contact_input' />

                    {/* Email Number */}
                    <label htmlFor='email'>Email</label>
                    <input type='email'
                          className='contact_input' 
                           />

                    {/* Message */}
                    <label htmlFor='message'>Message</label>
                    <textarea className='contact_message'
                              name='message'
                              placeholder=''
                    ></textarea>

                    {/* Submit button */}
                    <button className='contact_button'> SUBMIT</button>





              </form>

           </div>
           
        </div>
    )
}

export default ContactUs