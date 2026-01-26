function Visit(){

       const serviceTimes = [
      { title: "Early Morning Daily Service", time: "5:30am-6:30am" },
      { title: "Sunday School", time: "8:00am-9:00am" },
      { title: "English Sunday service", time: "9:00am-10:30am" },
      { title: "Kiswahili Sunday service (Main)", time: "10:30am-12:30pm" },
      { title: "Compassion Saturday Programme", time: "from 7:00am" },
   ];


    return(
        <div className="visit_cont">
            <h1>Plan Your Visit</h1>

                 
           {/* SERVICES */}
           {/* <div className="home_services_cont">

                 <h2 className="home_services_title"> OUR SERVICES</h2>

                 <p className="home_services_intro">
                    We come together during the week to worship, pray and grow as a community.
                 </p>

                <div className="home_services_time_cont">

                     {serviceTimes.map((service, index) => (
                        <div key={index}>
                           <p className="service_title">{service.title}</p>
                           <p className="service_time">{service.time}</p>
                        </div>
                 ))}
                </div>
              </div>   */}
        </div>

    )
}

export default Visit;