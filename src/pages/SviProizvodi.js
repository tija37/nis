import Naslov from "../components/Naslov";
import Card from "../components/Card";
import Notifications from "../components/Notifications";

function SviProizvodi(){

    const niz = [
        {ime:'Voda G-Drive',
        cijena:'100,-',
        slika:''},
        {ime:'G-Drive Iced Coffee',
        cijena:'150,-',
        slika:''},
        {ime:'G-Drive Raw bar',
        cijena:'100,-',
        slika:''}
    ]

    return(
        <>
            <Naslov naslov='NAPUNITE BATERIJE DOK PUNITE REZERVOAR'/>
            
            {
                niz.map((currElement)=>{
                    return <Card  obj={currElement} key={Math.random()}/>
                })
            }

            <Notifications/>
        </>

    );
}

export default SviProizvodi;