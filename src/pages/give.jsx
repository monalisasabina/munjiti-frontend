import { useNavigate } from 'react-router-dom'
import './give.css'
import lipanampesa from '../Pictures/lipa na mpesa image.jpg'
import { FaUniversity } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function Give(){
    const navigate = useNavigate();

    const goToContact = () => {
        navigate("/contacts")
    }

    return(

        <div className="give_cont">

            {/* HEADER */}
            <div className='give_header'>

                 <h1 className='give_title'>Ways to Give</h1>
                 <p className='give_para1' > We are grateful for your support</p>

            </div>
           

            {/* CARDS CONTAINER */}
            <div className='donate_cont'>

                {/* MPESA */}
                <div className='donate_card'>
                    <h2> <CiMobile3 className='donate_icon' /> M-Pesa Paybill</h2>
                    <p><strong>Paybill:</strong> 123456</p>
                    <p><strong>Account:</strong> MUNJITI DONATION </p>
                    <p><strong>No:</strong> 123456</p>
                    {/* <img className="donate_mpesa_logo" src={lipanampesa} alt='lipanammpesa logo'  /> */}
                </div>

                {/* BANK */}
                <div className='donate_card'>
                    <h2> <FaUniversity className='donate_icon' /> Bank Transfer</h2>
                    <p><strong>Bank: </strong> MNOP Bank</p>
                    <p><strong>Account:</strong> St. Mary's Munjiti Church</p>
                    <p><strong>No:</strong> 789012</p>
                </div>

                {/* IN PERSON */}
                <div className='donate_card'>
                    <h2> <LiaHandsHelpingSolid  className='donate_icon'/> In-Person</h2>
                    <p>Give during any service or visit our church office.</p>
                </div>

                {/* NEED HELP */}
                <div className='donate_card' >
                    <h2><AiOutlineQuestionCircle  className='donate_icon'/> Need Help?</h2>
                    <p><strong>Email Us:</strong> <a href="mailto:munjitichurc@kmail.com">munjitichurch@kmail.com</a> </p>
                    <p><strong>Mobile No:</strong> 00000000000</p>
                    <p onClick={goToContact} style={{ fontWeight: 'bold', color: '#4CAF50' }}> Go to Contact Page →</p>
                </div>

            </div>

        </div>
       
    )
}

export default Give