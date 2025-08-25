import "./history.css"
import { LoremIpsum } from "react-lorem-ipsum"

function History(){

    return(
        <div className="about-cont">

           {/* MAIN TITLE */}
           <div>
              <h1 className="about-title">ABOUT</h1>
           </div>

          <div className="about-content">
             <div className="mission-vision">
                 {/* MISSION STATEMENT */}
                 <div>
                    <h3>MISSION</h3>
                    <p>
                       To nurture, empower and transform beneficiaries into productive, responsible and resourceful members of the society through holistic development.
                    </p>
                  </div>

                  <br/>

                  {/* VISION STATEMENT */}
                  <div>
                    <h3>VISION</h3>
                    <p>
                      A dignified, self-sufficient and fulfilled humanity.
                    </p>
                  </div>
              </div>

              <br/>
              
              {/* ABOUT PARAGRAPH */}
              <div className="about-para">

                <LoremIpsum 
                         p={3}
                         startWithLoremIpsum={false}    
                />
              </div>
              
          </div>
        </div>
    )
}

export default History