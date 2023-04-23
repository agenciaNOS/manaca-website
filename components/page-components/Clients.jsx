import React from 'react'
import { externalLinkProps } from '../../content/cta'

function Clients({ clientsSection }) {
	return (
		<div className="container bg-secondary mx-auto min-w-[100%]">
			<h1 className="text-center text-4xl font-bold text-white my-10">
				{clientsSection.title}
			</h1>

			<ul className="flex flex-row justify-evenly items-baseline my-5 flex-wrap">
				{clientsSection.clients.map((client) => (
					<div key={client.id} className="place-self-center mx-5 my-1">
						<a
							href={client.href}
							{...externalLinkProps}
						>
							<img
								alt={client.name}
								src={client.image}
								width={client.width}
								height={client.height}
							/>
						</a>
					</div>
				))}
				</ul>
		</div>
	)
}

export default Clients