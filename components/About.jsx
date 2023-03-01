import React from 'react'

function About({ aboutSection }) {
    const { introText, partnerOne, partnerTwo } = aboutSection
    return (
        <>
            <div className="container mx-auto px-4">
                <p className="md:text-2xl text-xl text-center">
                    {introText}
                </p>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center my-5">
                    <div>
                        <h1>
                            {partnerOne.name}
                        </h1>
                        <p>
                            {partnerOne.role}
                        </p>
                        <p>
                            {partnerOne.about}
                        </p>
                    </div>
                    <div>
                        <h1>
                            {partnerTwo.name}
                        </h1>
                        <p>
                            {partnerTwo.role}
                        </p>
                        <p>
                            {partnerOne.about}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About