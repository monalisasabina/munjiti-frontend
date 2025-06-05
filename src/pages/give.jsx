import { useNavigate } from 'react-router-dom'
import './give.css'

function Give(){
    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/contacts")
    }

    return(

        <div className="give_cont">
            <h1 className='give_title'>Ways to Give</h1>
            <p className='give_para1' > We are grateful for you support</p>

            <div className='donate_cont'>

                <div className='donate_card'>
                    <h2>M-Pesa Paybill</h2>
                    <p><strong>Paybill:</strong>123456</p>
                    <p><strong>Account:</strong> MUNJITI DONATION </p>
                    <p><strong>No.:</strong>123456</p>
                </div>

                <div className='donate_card'>
                    <h2>Bank Transfer</h2>
                    <p><strong>Bank:</strong> MNOP Bank</p>
                    <p><strong>Account:</strong> St. Mary's Munjiti Church</p>
                    <p><strong>No.:</strong>789012</p>
                </div>

                <div className='donate_card'>
                    <h2>In-Person</h2>
                    <p>Give during any service ot visit our church office.</p>
                </div>

                <div className='donate_card' >
                    <h2>Need Help?</h2>
                    <p><strong>Email Us:</strong> <a href="mailto:munjitichurc@kmail.com">munjitichurch@kmail.com</a> </p>
                    <p><strong>Mobile No:</strong>00000000000</p>
                    <p onClick={goToContact} style={{ fontWeight: 'bold', color: '#4CAF50' }}>Go to Contact Page →</p>
                </div>

            </div>

        </div>
       
    )
}

export default Give