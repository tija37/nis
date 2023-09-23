import './Card.css';
import { useState, useEffect } from 'react';

function Card(props){

      const [rezervisano, setRezervisano] = useState(false);

      useEffect(()=>{
        console.log(rezervisano);
      },[rezervisano]);

      const rezervacija = ()=>{
        setRezervisano(!rezervisano);
      };
      return(
          <div className="card">
            <div className="card-body">
                <div className='inside slikaDiv'>
                    <img src={props.obj.slika} />
                </div>
              <div className='inside ostaloDiv'>
                <p>{props.obj.ime}</p>
                <p>{props.obj.cijena}</p>
                {
                  rezervisano ? 
                  <div className='dugmad'>
                    <button className='dugmeRez' >Rezervisano</button>
                    <button className='dugmeOdu' onClick={rezervacija}>X</button>
                  </div>
                  :
                  <button className='dugme' onClick={rezervacija}>Kupi</button>
                }
                <p className='napomena'>I preuzmi na Drive.Gone automatu</p>
              </div>
              
            </div>
            
          </div>
      )
}

  export default Card;