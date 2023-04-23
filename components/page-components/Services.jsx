import { FaBuilding, FaIndustry, FaTractor } from 'react-icons/fa'
import React from 'react'

const properIcon = (area) => {
	switch (area.title) {
		case 'Indústrias':
			return <FaIndustry className=" w-8 h-8 text-3xl text-white" />
		case 'Empreendimentos urbanos':
			return <FaBuilding className=" w-8 h-8 text-3xl text-white" />
		case 'Empreendimentos rurais':
			return <FaTractor className=" w-8 h-8 text-3xl text-white" />
	}
}

function Services({ servicesSection }) {
	return (
		<div className="flex flex-col items-center">
			<div className="container mx-auto">
				<p className="md:text-3xl text-xl font-bold mt-8">
					{servicesSection.introText}
				</p>
			</div>
			<div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-x-0 md:gap-x-16">
				{servicesSection.areas.map((area) => (
					<div key={area.id} className="w-[80%] md:w-[40%] flex flex-col justify-arround items-center">
						<span className="flex flex-col items-center">
							<div className="m-4 p-5 bg-secondary rounded-full mx-2">
								{properIcon(area)}
							</div>
							<h1>
								{area.title}
							</h1>
						</span>
						<div className="min-w-[100%] my-8">
							{area.services.map((service) => (
								<div
									key={service.id}
									className="p-6 mb-2 rounded shadow-xl hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer"
								>
									<h2>
										{service.title}
									</h2>
									<ul className="list-disc">
										{service.list.map((item) => (
											<li key={item.id}>
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
	)
}

export default Services