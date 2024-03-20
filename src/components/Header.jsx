import Navigation from '../components/Navigation';
// TODO Add picture and styling for the navbar

function Header() {
    return (
        <>
            <div className="flex flex-row">
                <div className="basis-1/2">
                    <Navigation />
                </div>
                <div className="basis-3/8">
                    <h1 className="text-3xl">Jesse Bradbury</h1>
                </div>
                <div>
                    <p className="basis-1/8 mx-2">Pic Soon...</p>
                </div>
            </div>
        </>

    )
}

export default Header