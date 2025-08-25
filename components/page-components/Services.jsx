import { FaBuilding, FaIndustry, FaTractor, FaLeaf } from 'react-icons/fa'
import React from 'react'

const properIcon = (area) => {
	switch (area.title) {
		case 'Indústrias':
			return <FaIndustry className="w-10 h-10 text-white" />
		case 'Empreendimentos urbanos':
			return <FaBuilding className="w-10 h-10 text-white" />
		case 'Empreendimentos rurais':
			return <FaTractor className="w-10 h-10 text-white" />
		default:
			return <FaLeaf className="w-10 h-10 text-white" />
	}
}

function Services({ servicesSection }) {
	return (
		<section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-100 px-4 sm:px-6" id="services">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary text-center mb-4 sm:mb-6">
					Nossos Serviços
				</h2>
				<p className="text-base sm:text-lg md:text-xl font-light mb-12 sm:mb-16 md:mb-20 text-gray-700 text-center max-w-5xl mx-auto leading-relaxed px-2">
					{servicesSection.introText}
				</p>
				
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 max-w-6xl mx-auto">
					{servicesSection.areas.map((area) => (
						<div key={area.id} className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8 lg:p-4 hover:shadow-lg hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1">
							<div className="flex items-center mb-6 sm:mb-8">
								<div className="p-3 sm:p-4 bg-primary rounded-xl sm:rounded-2xl shadow-lg mr-4 sm:mr-6 flex-shrink-0">
									{properIcon(area)}
								</div>
								<h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary leading-tight">
									{area.title}
								</h3>
							</div>
							
							<p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed font-light">
								{area.description}
							</p>
							
							<div className="space-y-4 sm:space-y-6">
								{area.services.map((service) => (
									<div
										key={service.title}
										className="border-l-4 border-primary pl-4 sm:pl-6 py-2 sm:py-3"
									>
										<h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
											{service.title}
										</h4>
										<ul className="space-y-1.5 sm:space-y-2">
											{service.list.map((item) => (
												<li key={item.id} className="text-gray-600 text-sm sm:text-base md:text-lg flex items-start font-light">
													<span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-accent rounded-full mt-2 sm:mt-3 mr-3 sm:mr-4 flex-shrink-0"></span>
													{item.name}
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services