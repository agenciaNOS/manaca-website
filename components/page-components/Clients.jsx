import React from 'react'
import Image from 'next/image'
import { externalLinkProps } from '../../content/cta'

function Clients({ clientsSection }) {
	return (
		<section className="bg-white py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12 sm:mb-16 md:mb-20">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
						{clientsSection.title}
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-4xl mx-auto font-light px-2">
						Conheça algumas das empresas que confiam em nossos serviços
					</p>
				</div>

				<div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
					{clientsSection.clients.map((client) => (
						<div 
							key={client.id} 
							className="bg-white p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-40 flex items-center justify-center transform transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:border-primary/20"
						>
							<a
								href={client.href}
								className="flex items-center justify-center w-full h-full"
								{...externalLinkProps}
							>
								<Image
									alt={client.name}
									src={client.image}
									width={client.width || 140}
									height={client.height || 70}
									className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
									loading="lazy"
								/>
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Clients