import Naslov from "../components/Naslov";
import Card from "../components/Card";
import Notifications from "../components/Notifications";
import './SviProizvodi.css';
import Linkovi from "../components/Linkovi";

function SviProizvodi(){

    const linkovi = [
        {
            link : '/igrica',
            tekst : 'Zelis da se zabavis dok cekas? Igraj igricu - napuni (virtuelni) rezervoar'
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
        slika:'/assets/cokoladica.png'},
        {ime:'G-Drive Kroasan',
        cijena:'90,-',
        slika:'/assets/kroasan.png'},
        {ime:'Zvake G-Drive',
        cijena:'170,-',
        slika:'/assets/zvake.png'},
        {ime:'Energetsko pice G-Drive',
        cijena:'150,-',
        slika:'/assets/energetsko.png'},
    ]

    return(
        <>
            <Naslov naslov='NAPUNITE BATERIJE DOK PUNITE REZERVOAR'/>
            
            <div className="topLevel">
                <div className="nesto"><Card obj={niz[0]}/></div>
                <div className="nesto"><Card obj={niz[1]}/></div>
                <div className="nesto"><Card obj={niz[2]}/></div>
                <div className="nesto"><Card obj={niz[3]}/></div>
                <div className="nesto"><Card obj={niz[4]}/></div>
                <div className="nesto"><Card obj={niz[5]}/></div>
            </div>

            <Linkovi niz = {linkovi}/>
        </>

    );
}

export default SviProizvodi;