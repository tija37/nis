import './Navbar.css'

function Navbar(){
    return(
        <nav>
            <div className='timeBar'>
                <p>4:20</p>
            </div>
            <div className='statusBar'>
                <img src='/assets/Asset 2.svg' className='slicica'/>
                <img src='/assets/Asset 1.svg' className='slicica'/>
                <img src='/assets/Asset 3.svg' className='slicica'/>
            </div>
            
        </nav>
    );
}

export default Navbar;