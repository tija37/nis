import Igrica from '../components/Igrica'
import Notifications from '../components/Notifications';
import Linkovi from '../components/Linkovi'

function Game(){

    const linkovi = [
        {
            link : '/uclanjenje',
            tekst : `Čanovi loyalty programa osvajaju bodove pri svakom oborenom rekordu. Učlani se u loyalty klub`
        }
    ]

    return(
        <>
            <Igrica />

            <Linkovi niz={linkovi}/>
        </>

    )
}

export default Game;