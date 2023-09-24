import './Notifications.css'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const variants = {
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.6
      }
    },
    hide: {
      y: -30,
      opacity: 0
    }
  };

function Notifications(){
    const [notifikacija, setNotifikacija] = useState({
        naslov : 'ZAPOCNI TOCENJE',
        opis : 'Ostavi telefon u automobilu i zapocni tocenje goriva na uobicajen nacin'
    });
    const [pozicija,setPozicija] = useState(0);

    if(pozicija==0){
        setPozicija(pozicija+1);
        setTimeout(()=>{
            setNotifikacija({
                naslov : 'TOCENJE U TOKU',
                opis : 'Ostavi telefon u automobilu i započni točenje goriva na uobičajen način'
            });
        },5000);
    }else if(pozicija==1){
        setPozicija(pozicija+1);
        setTimeout(()=>{
            setNotifikacija({
                naslov : 'ZAVRSENO TOCENJE',
                opis : 'Ostavi telefon u automobilu i započni točenje goriva na uobičajen način'
            });
        },35000);
    }

    return(
        <div className='notKomp'>
            <div className='dugmence'>
                <button className='odustani'>
                    Odustani
                </button>
            </div>


            <motion.div key={notifikacija} variants={variants} animate={'show'} initial="hide" className='notifikacija'>
                <div className='lijevi'>
                    <FontAwesomeIcon icon={faCircleInfo} size="2xl" style={{color: "#358cf7",}} /> 
                </div>
                <div className='desni'>
                    {`${notifikacija.naslov}`}
                    <br/>
                    {`${notifikacija.opis}`}
                </div>
            </motion.div>

            <div className='dugmence'>
                <button className='dugmeNot'>
                    <FontAwesomeIcon icon={faLocationDot} /> Informacije o benzinskoj pumpi i tocionom mjestu
                </button>
            </div>

        </div>
    );
}

export default Notifications;