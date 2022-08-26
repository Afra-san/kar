import { motion } from 'framer-motion';

export default function Works() {
  return (

    <div className="w-full bg-[#F5F5F4] py-20 m-0  flex items-center justify-center md:m-0">
        <div className="w-10/12 h-5/6 bg-stone-200 rounded-2xl p-4 flex flex-col justify-between sm:rounded-3xl">
            <h1 className="text-2xl text-end my-4 sm:text-4xl sm:my-8">نمونه کارهای من</h1>
            <div className="flex flex-col justify-between w-full lg:flex-row items-center lg:items-center">
                <motion.div>
                  <div className="img-1 box-size radius"></div>
                  <h2 className="text-start text-2xl my-4">Portofolio v1.0 <a className='font-normal text-xl ml-4 mr-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://github.com/Afra-san/portofolio-V-1.0'>Repo</a>/<a className='font-normal text-xl ml-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://afra0.netlify.app/'>Live Demo</a></h2>
                  <p className="text-start font-light mb-8">React js</p>
                </motion.div>
                <div>
                  <div className="img-2 box-size bg-[#D9D9D9] radius"></div>
                  <h2 className="text-start text-2xl my-4">Portofolio v2.0 beta <a className='font-normal text-xl ml-4 mr-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://github.com/Afra-san/V2.0beta'>Repo</a>/<a className='font-normal text-xl ml-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://afra-v2beta.netlify.app/'>Live Demo</a></h2>
                  <p className="text-start font-light mb-8">React js</p>
                </div>
                <div>
                  <div className="img-3 box-size bg-[#D9D9D9] radius"></div>
                  <h2 className="text-start text-2xl my-4">Shopping Cart <a className='font-normal text-xl ml-4 mr-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://github.com/Afra-san/Cart'>Repo</a>/<a className='font-normal text-xl ml-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://afra-cart.netlify.app/'>Live Demo</a></h2>
                  <p className="text-start font-light mb-8">React js , Context</p>
                </div>
            </div>
            <div className="flex flex-col justify-between w-full lg:flex-row items-center lg:items-center">
                <div>
                  <div className="img-4 box-size bg-[#D9D9D9] radius"></div>
                  <h2 className="text-start text-2xl my-4 font-medium">Prototype <a href='https://afra-resume.netlify.app/' className='font-normal text-xl ml-4 mr-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300'>Repo</a>/<a href='https://afra-resume.netlify.app/' className='font-normal text-xl ml-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300'>Live Demo</a> </h2>
                  <p className="text-start font-light">React js , Next js</p>
                </div>
                <div>
                  <div className="img-5 box-size bg-[#D9D9D9] radius"></div>
                  <h2 className="text-start text-2xl my-4 font-medium">Dashboard <a className='font-normal text-xl ml-4 mr-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://github.com/Afra-san/dash'>Repo</a>/<a className='font-normal text-xl ml-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300' href='https://dash-afra.netlify.app/'>Live Demo</a></h2>
                  <p className="text-start font-light">React js</p>
                </div>
                <div>
                  <div className="img-6 box-size bg-[#D9D9D9] radius"></div>
                  <h2 className="text-start text-2xl my-4 font-medium">Rimakii Brand <a href='https://afra-resume.netlify.app/' className='font-normal text-xl ml-4 mr-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300'>Repo</a>/<a href='https://afra-resume.netlify.app/' className='font-normal text-xl ml-2 bg-stone-400 py-1 transition px-4 rounded-lg hover:bg-stone-300'>Live Demo</a></h2>
                  <p className="text-start font-light">React js , Figma</p>
                </div>
            </div>

            
        </div>

    </div>
  )
}
