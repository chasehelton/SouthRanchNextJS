import React from 'react'

export default function About() {
    return (
        <div id="about">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-blue-700 font-semibold tracking-wide uppercase">About</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Meet the team
                    </p>
                </div>
            </div>
            <div class="grid grid-flow-col grid-rows-4 grid-cols-1 sm:grid-rows-4 sm:grid-cols-1 lg:grid-rows-2 lg:grid-cols-2 gap-y-20">
                {/* <figure class="mx-10 shadow-2xl md:flex bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl p-8 md:pl-4 items-center"> */}
                <figure class="mx-10 shadow-2xl md:flex white rounded-xl p-8 md:pl-4 items-center">
                    <img class="w-32 h-32 md:w-64 md:h-64 md:rounded-none rounded-full mx-auto p-2" src="/images/rick.jpeg" alt="" width="384" height="384"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-large">
                            <div class="text-black font-bold text-2xl">
                                Rick Helton
                            </div>
                            <div class="text-blue-700">
                                Unlimited Licensed Residential<br/>Commercial General Contractor <br/>License Qualifier
                            </div>
                        </figcaption>
                        <hr/>
                        <blockquote>
                            <p class="text-lg text-black">
                            Rick graduated from Virginia Tech in 1990 with a degree in Housing, Interior Design and Resource Management. He became a third generation builder and attained his unlimited commercial and residential general contractor’s license. Rick is also a qualifier in over 15 states for multiple companies in the solar and construction industries, and has over 10 years experience in the utility scale solar industry.
                            </p>
                        </blockquote>
                    </div>
                </figure>
                {/* <figure class="mx-10 shadow-2xl md:flex bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl p-8 md:pl-4 items-center"> */}
                <figure class="mx-10 shadow-2xl md:flex white rounded-xl p-8 md:pl-4 items-center">
                    <img class="w-32 h-32 md:w-64 md:h-64 md:rounded-none rounded-full mx-auto p-2" src="/images/andrea.jpeg" alt="" width="384" height="384"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-large">
                            <div class="text-black font-bold text-2xl">
                                Andrea Helton
                            </div>
                            <div class="text-blue-700">
                                Office Manager<br/>Accountant
                            </div>
                        </figcaption>
                        <hr/>
                        <blockquote>
                            <p class="text-lg text-black">
                            I have a B.S. in Accounting from Virginia Tech and have been working as an accountant since 1991. I am the office manager and accountant for South Ranch LLC, as well as a full time wife and mother. I love my jobs!
                            </p>
                        </blockquote>
                    </div>
                </figure>
                {/* <figure class="mx-10 shadow-2xl md:flex bg-gradient-to-br from-blue-700 to-blue-600 rounded-xl p-8 md:pl-4 items-center"> */}
                <figure class="mx-10 shadow-2xl md:flex white rounded-xl p-8 md:pl-4 items-center">
                    <img class="w-32 h-32 md:w-64 md:h-64 md:rounded-none rounded-full mx-auto p-2" src="/images/nikki.jpg" alt="" width="384" height="384"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-large">
                            <div class="text-black font-bold text-2xl">
                                Nikki Helton
                            </div>
                            <div class="text-blue-700">
                                Customer Service<br/>Social Media
                            </div>
                        </figcaption>
                        <hr/>
                        <blockquote>
                            <p class="text-lg text-black">
                            I am the customer service representative and social media manager at South Ranch LLC. I have a Masters in School Counseling from the University of North Carolina at Chapel Hill and I am also a Licensed Clinical Mental Health Counselor Associate. I love working with people and problem solving for solutions that help you find success and joy in your life. I can’t wait to meet you and help you along the way!
                            </p>
                        </blockquote>
                    </div>
                </figure>
                <figure class="mx-10 shadow-2xl md:flex white rounded-xl p-8 md:pl-4 items-center">
                    <img class="w-32 h-32 md:w-64 md:h-64 md:rounded-none rounded-full mx-auto" src="/images/chase.jpg" alt="" width="384" height="384"/>
                    <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
                        <figcaption class="font-large">
                            <div class="text-black font-bold text-2xl">
                                Chase Helton
                            </div>
                            <div class="text-blue-700">
                                Web Developer<br/>UI/UX Designer
                            </div>
                        </figcaption>
                        <hr/>
                        <blockquote>
                            <p class="text-lg text-black">
                                I am currently a student at NC State University pursuing a B.S. in Computer Science. I have 2 years of web development experience and am currently working at SAS Institute as a DevOps intern. I develop and maintain this website, as well as several other across different companies.
                            </p>
                        </blockquote>
                    </div>
                </figure>
            </div>
        </div>
    )
}
