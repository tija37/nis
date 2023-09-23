import './Linkovi.css'

function Linkovi(props){

    return(
        <div className='linkovi'>
            {
                props.niz.map((currElement,index)=>{
                    let bla =index<props.niz.length-1 ? 
                    <div className='link'>
                        <a href={currElement.link} key={Math.random()}>{currElement.tekst}</a> 
                        <br/> 
                        ili
                        <br/>
                    </div>
                    : 
                    <div className='link'>
                        <a href={currElement.link} key={Math.random()}>{currElement.tekst}</a>
                    </div>
                    return(
                        bla
                    );
                })
            }
        </div>
    );
}

export default Linkovi;