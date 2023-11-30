import { strengths } from "../constants"
export default function Strengths() {
    return (
        <section className="mt-32">
            <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12 px-4">
                <div className='px-6 sm:pl-6'>
                    <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
                        <h1 className="text-xl sm:text-5xl font-poppins font-semibold text-center">Our Strengths</h1>
                        <p className='text-gray-900'>
                            Imagine a space Where the physical world needs the digital realm welcome to a world of ai projections a
                            world where every moment every memory can come alive in vid life like detail this is no ordinary wedding
                            hall but a breathtaking future ai projections work by using advanced algorithms to analyze data and generate
                            3 dimensional images these images projected into the space around you can recreate moments from your past present
                            and even future perhaps it's the first dance or even the first shared laugh That's around you come alive
                        </p>
                        <span className='ml-0 mt-3'>
                            <button className="w-28 h-10 text-white rounded bg-blue-gradient-btn font-semibold">Get Started</button>
                        </span>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-4 max-md:mx-5">
                    {strengths.map((strength, index) => (
                        <article key={index} className="w-full md:max-w-[30rem] lg:max-w-[36rem] border-2 border-transparent rounded-lg py-4 px-8 hover:bg-gray-100 hover:border-gray-700 cursor-pointer">
                            <article className="flex flex-col items-center md:items-start lg:flex-row lg:items-center gap-6">
                                <span className="bg-pink-300/80 rounded-full lg:w-32 p-3">
                                    <img src={strength.imageUrl} width={40} height={40} alt={strength.title} />
                                </span>
                                <div className="flex flex-col text-center md:text-start space-y-1">
                                    <h4 className="font-bold text-base">{strength.title}</h4>
                                    <p className="text-sm leading-6">{strength.content}</p>
                                </div>
                            </article>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
