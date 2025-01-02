const Hero = () => {
    return (
      <div className="relative h-[calc(100vh-76px)] overflow-hidden">
        <div className="absolute  inset-0">
          <img
            src="#"
            alt="Fashion model"
            className="w-full  h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6">
          <div className="max-w-xl">
            <span className="text-sm uppercase tracking-wider mb-4 block">
              FASHION & SHOW
            </span>
            <h1 className="text-6xl font-bold mb-6">
              WHAT YOU BUY
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Look at the sunset, life is amazing, life is beautiful, life is what you make it
            </p>
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors duration-200">
              SHOP NOW
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
            <button className="w-2 h-2 rounded-full bg-black"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300"></button>
          </div>
        </div>
      </div>
    )
  }
  
  export default Hero
  
  