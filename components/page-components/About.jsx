import Image from 'next/image';

function About({ aboutSection }) {
  const { introText, teamText, partnerOne, partnerTwo } = aboutSection;

  return (
    <section className="min-h-screen flex flex-col justify-center py-6 sm:py-8 md:py-12 lg:py-8 bg-gradient-to-b from-white to-gray-50 px-4 sm:px-6" id="about">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex flex-col items-center space-y-4 sm:space-y-6">

          </div>
        </div>

        {/* Main Content - Side by Side Layout */}
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-10 md:mb-12">
          {/* Left Side - Company Description */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Sobre Nós
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed font-light mb-6 sm:mb-8">
              {introText}
            </p>
            <Image
              src="/manaca-logo.svg"
              alt="Manacá"
              width={250}
              height={67}
              className="transform hover:scale-105 transition-transform duration-300 w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px]"
            />
          </div>

          {/* Right Side - Team Information */}
          <div className="flex-1">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Nossa Equipe
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {teamText.split('\n').map((line, index) => (
                <div
                  key={index}
                  className="border-l-4 border-primary pl-4 sm:pl-6 py-3 sm:py-4 hover:border-accent transition-colors duration-300 bg-white rounded-r-lg shadow-sm hover:shadow-md transform hover:-translate-x-2 transition-all"
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-light">
                    {line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Member - Modern List Layout */}
        <div className="max-w-5xl mx-auto">
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8 md:gap-12 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg ring-4 ring-primary/20 hover:ring-accent/20 transition-all duration-300">
                  <Image
                    src="/thais.png"
                    alt={partnerOne.name}
                    width={192}
                    height={192}
                    className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2 sm:mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  {partnerOne.name}
                </h4>
                <p className="text-lg sm:text-xl text-accent font-medium mb-4 sm:mb-6 uppercase tracking-wider">
                  {partnerOne.role}
                </p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                  {partnerOne.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
