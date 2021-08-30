import React from 'react'
import { OfficeBuildingIcon, GlobeIcon, GlobeAltIcon, SunIcon, HomeIcon, ViewBoardsIcon, CubeIcon, LocationMarkerIcon } from '@heroicons/react/outline'

const newFeatures = [
  {
    name: 'Unlimited Contracting',
    description:
      'We provide multi-state, unlimited general contracting for both commercial and residential needs.',
    icon: GlobeIcon,
  },
  {
    name: 'Solar Contracting',
    description:
      'In addition to commercial and residential, we also provide multi-state utility solar contracting.',
    icon: SunIcon,
  },
  {
    name: 'Residential & Commercial Developing',
    description:
      '"description"',
    icon: OfficeBuildingIcon,
  },
  {
    name: 'Multi-state Civil and Grading Contracting',
    description:
      '"description"',
    icon: CubeIcon,
  },
  {
    name: 'Opportunity Zone (OZ) Advising',
    description:
      '"description"',
    icon: LocationMarkerIcon,
  },
  {
    name: 'Commercial & Residential Fence Contracting',
    description:
      '"description"',
    icon: ViewBoardsIcon,
  },
  {
    name: 'NC Real Estate Broker',
    description:
      '"description"',
    icon: HomeIcon,
  },
]

export default function Services() {
    return (
        <div id="services">
            <div className="bg-blue-300 mt-12">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">Services</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Here's how we can help you
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-700 lg:mx-auto">
                            These are just a few of the services we can provide for you.
                        </p>
                    </div>

                    <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                        {newFeatures.map((feature) => (
                        <div key={feature.name} className="relative ">
                            {/* <dt> */}
                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                        </div>
                        ))}
                    </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
