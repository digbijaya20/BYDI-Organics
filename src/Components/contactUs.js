import React from 'react';
import '../stylesheets/_contact_us.css'


const Contactus = () =>{
    return(
        <div>
            <h2 style={{textAlign:"center", padding:"2rem"}}>Contact Us</h2>
       <div className="style-main-container">
           <div className="style-form-container">
               <div className="style-main-heading">
                   Get in touch with us by filling details below
               </div>
               <div >
                   <div className="style-input-row">
                       <label className="style-input-name">
                           <input type="text" name="name" className="style-inputbox" placeholder="Name*"/>
                           <span></span>
                       </label>
                       <label className="style-input-phone">
                           <input type="text" name="phone" className="style-inputbox" placeholder="Phone No"/>
                           <span></span>
                       </label>
                   </div>
                   <div className="style-input-row">
                       <label className="style-input-email">
                           <input type="email" className=" style-inputbox" placeholder="Email*"/>
                       </label>
                       <span></span>
                   </div>
                   <div className="style-input-row">
                       <label className="style-input-query">
                           <textarea className="style-input-query-box style-inputbox" placeholder="Write Your Query*"></textarea>
                       </label>
                       <span></span>
                   </div>
                   <input type="submit" placeholder="Submit" />
               </div>
           </div>
          

           
       </div>
       <iframe
  width="600"
  height="450"
  frameborder="0" 
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCIhz1O77zBqm5ZMAnv_1FngwQ5GrTzaSE&q=Space+Needle,Seattle+WA" allowfullscreen>
</iframe>
       </div>
    )
}
export default Contactus