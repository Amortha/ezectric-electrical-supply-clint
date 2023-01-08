import React from 'react';
import ContactBanar from './ContactBanar';
import GatTouch from './GatTouch';



const Contact = () => {
    return (
        <div>
           <ContactBanar></ContactBanar>
          <GatTouch></GatTouch>
       <div className='mb-8'>
      <iframe style={{width:"100%" ,height:"500px"}} id="gmap_canvas" src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
       </div>
        </div>
    );
};

export default Contact;