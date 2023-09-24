import Naslov from "../components/Naslov";
import Card from "../components/Card";
import Notifications from "../components/Notifications";
import Linkovi from "../components/Linkovi";
import '../components/Card.css'

function Pocetna1(){

    const linkovi = [
        {
            link : '/svi',
            tekst : 'Prikaži kompletnu Drive.Gone ponudu'
        },
        {
            link : '/igrica',
            tekst : 'Ispuni vrijeme napuni (virtuelni) rezervoar'
        }
    ]

    const niz = [
        {ime:'Voda G-Drive',
        cijena:'100,-',
        slika:'/assets/voda.png'},
        {ime:'G-Drive Iced Coffee',
        cijena:'150,-',
        slika:'/assets/kafa.png'},
        {ime:'G-Drive Raw bar',
        cijena:'100,-',
        slika:'/assets/cokoladica.png'}
    ]

    return(
        <>
            <Naslov naslov='NAPUNITE BATERIJE DOK PUNITE REZERVOAR'/>
            
            {
                niz.map((currElement)=>{
                    return <Card  obj={currElement} key={Math.random()}/>
                })
            }
            
            <Linkovi niz = {linkovi} />
        </>

    );
}

export default Pocetna1;