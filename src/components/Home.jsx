import Navbar from "./Navbar";
import { services } from "../constants";
import Memories from "./Memories";
import Strengths from "./Strengths";

const Home = () => {

    const videoStyling = {
        width: '100%',
        height: '100vh',
        objectFit: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        filter: 'brightness(0.6)'
    }

    const divStyling = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    }

    return (
        <article>
            <header className="h-screen">
                <video autoPlay muted loop style={videoStyling} >
                    <source src="/Images/bgVideo.mp4" type="video/mp4" />
                </video>
                <div style={divStyling} className="text-center w-11/12 sm:w-6/12">
                    <h1 style={{ fontFamily: 'Dancing Script, cursive'}} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-8 drop-shadow-xl">
                        Memory & diamond
                    </h1>
                    <p className="text-lg font-poppins text-sm sm:text-xl">
                        Embrace Elegance, Where Modernity Meets <b><i>Artificial Intelligence</i></b> in Your Celebration
                    </p>
                </div>

            </header>

            <section className="mt-24 ">
                <h1 className="text-xl sm:text-3xl font-poppins font-semibold text-center">Some Of Our Services</h1>
                <div className="absolute top-[220%] -z-30 bg-pink-400 w-40 h-96 rounded-full blur-3xl opacity-50"></div>
                <div className="sm:mx-20 md:mx-36 lg:mx-52 mt-9 flex justify-evenly flex-wrap ">
                    {services.map((service, index) => (
                        <div className={`w-60 mx-2 max-sm:mt-6 h-80 rounded-3xl ${service.margin} ${service.color} text-center `} key={index}>
                            <img src={service.img} className="w-12/12 rounded-3xl" />
                            <h3 className="text-lg font-semibold my-5">{service.title}</h3>
                            <button className="border-2 border-black rounded-full px-6 py-2 hover:bg-black hover:text-white duration-300 ">View Details</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mt-24">
                <h1 className="text-xl sm:text-3xl font-poppins font-semibold text-center">Memories of Our Newlyweds</h1>
                <Memories />
            </section>

            <Strengths />

            <section className='flex-col sm:flex-row text-center sm:text-left sm:flex bg-black-gradient-2 rounded-3xl p-12 my-28 mx-6 sm:mx-12 font-poppins'>
                <div className="flex-1 flex flex-col text-white">
                    <h1 className="text-2xl sm:text-5xl font-semibold">Let’s Try our Services Now!</h1>
                    <p className='text-lg sm:text-xl mt-10 w-full sm:w-9/12'>
                        Everything you need to accept card payments and grow your business
                        anywhere on the planet.
                    </p>
                </div>
                <div className='sm:ml-10 ml-0 sm:mt-0 mt-10'>
                    <button className="w-32 h-12 text-xl text-white rounded bg-blue-gradient-btn font-medium flex items-center justify-center gap-2">Let's Try <div className="arrAnimate font-extrabold">&rarr;</div></button> :
                </div>
            </section>

        </article>

    );
};

export default Home;
