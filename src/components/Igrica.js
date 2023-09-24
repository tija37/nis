import './Igrica.css'
import {useState, useEffect} from 'react'
import Naslov from './Naslov';

function Igrica(){

    const [countdown, setCountdown] = useState(5000); 
    const [running, setRunning] = useState(false);
    const [count,setCount] = useState(0);

    useEffect(() => {
      let timer;
      
      if (running) {
        timer = setInterval(() => {
          setCountdown(prevCountdown => {
            if (prevCountdown > 0) {
              return prevCountdown - 10; // Decrease by 100 milliseconds
            } else {
              clearInterval(timer);
              setRunning(false);
              return 0; // Prevent countdown from going below 0
            }
          });
        }, 10); // Update every 100 milliseconds
      } else {
        clearInterval(timer);
      }
  
      return () => clearInterval(timer); // Clean up the timer when the component unmounts
    }, [running]);
  
    const startCountdown = () => {
      setRunning(true);
    };
  
    const stopCountdown = () => {
      setRunning(false);
    };

    const [topPoz, setTopPoz] = useState(100);

    function klik(){
        setTopPoz(topPoz-0.8);
        if(countdown>0)
            setCount(count+1);

        if(countdown==0.01){
          stopCountdown();
        }

        if(count==1){
          startCountdown();
        }
    }

    function resetuj(){
      setRunning(false);
      setCount(0);
      setCountdown(5000);
      setTopPoz(100);
    }

    return(
        <>

          <Naslov naslov='NAPUNI (VIRTUELNI) REZERVOAR'/>

          <h3 className='podNa'>Pritiskaj što brže možes!</h3>

            <div className="center">
              <img src="/assets/kanistercep.png" alt="" className='cep'/>
                <div className="circle" onClick={klik}>
                    <div className="wave" style={{top:topPoz + '%'}}>
                        
                    </div>
                </div>
            </div>

            <div className='kontrole'>
                <h2>{(countdown/1000).toFixed(2)}</h2>
                 <p>Rezultat: {count}</p>

                {
                  countdown == 0 ?
                  <>
                    <p>Lični rekord: 54</p>
                  </> :
                  ""
                }

            </div>
        </>

    )
}

export default Igrica;