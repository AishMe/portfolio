import linksData from './links.json'
import { white } from 'tailwindcss/colors';

export default function Links() {

  return (
    <main className="min-h-screen bg-[#121212] flex flex-col items-center">
      <div className="mt-5 pt-10 w-full">
        <h1 className="mb-5 pb-10 text-white text-center text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Links
          </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-20">
          {linksData.map((link, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <div className="w-30 h-30 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg transition-transform duration-500 ease-in-out hover:scale-125">
                <a href={link.link} target="_blank" rel="noopener noreferrer">
                  <img src={link.imageURL} alt={link.platform} style={{backgroundColor: white}} className="object-cover w-full h-full"/>
                </a>
              </div>
              <div className="text-center text-white mt-4 mb-5 pb-5">
                <p className="text-3xl font-bold">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                    {link.platform}
                  </span>
                </p>
                <p className="text-xs text-neutral-300">{link.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
