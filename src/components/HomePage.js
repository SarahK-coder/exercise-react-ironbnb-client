import ironhackersImg from "../assets/ironhackers.avif"

function HomePage() {
    return (
    <>
        <h1>Welcome</h1>
        <img className='rounded-4 border border-3 border-dark' src={ironhackersImg} alt="ironhackers" />
    </>
    )
}

export default HomePage;