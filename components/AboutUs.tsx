
import { Cloud, Shield, ArrowRight, Truck, Building2, Heart } from 'lucide-react';
import PageCarrerSection from './PageCarrerSection';
import Footer from './Footer';
import { Button } from './ui/button';
import Link from 'next/link';
// import Team from './team';

const AboutUS = () => {
  const industries = [
    {
      id: 1,
      icon: Truck,
      title: "Transportation & Logistics",
      description: "Cost-efficient solutions for great operational efficiency!"
    },
    {
      id: 2,
      icon: Building2,
      title: "Financial Services",
      description: "Better data management and advanced scalability"
    },
    {
      id: 3,
      icon: Heart,
      title: "Healthcare",
      description: "Integrating health with technology!"
    },
    {
      id: 4,
      icon: Shield,
      title: "Public sector",
      description: "Accommodate community needs through better operability!"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 mt-18">

      <section className="bg-[#753a88] text-white py-40">
        <div className="max-w-8xl w-[90%] mx-auto px-4 sm:px-6 lg:px-8  p-2" >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className='col-span-2'>
              <h1 className="text-4xl lg:text-6xl font-medium mb-6">
                Connectors of Innovation and Technology!
              </h1>
              <p className="text-base text-purple-100 leading-relaxed">
                Our customer-centric approach and experience in adopting and transforming modernization programs for enterprises makes us one of the pioneers in the technology modernization sector!
              </p>
              <Link href='/contact'>
                <Button className='mt-6 text-base md:text-lg' size={'lg'}>Get In Touch</Button>
              </Link>
            </div>
            <div className="relative flex justify-center">

              <div className="relative col-span-1">

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg transform rotate-12">
                  <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <div className="text-white text-xs">Cloud Platform</div>
                  </div>
                  <div className="w-36 h-2 bg-white/20 rounded-full mx-auto mt-2"></div>
                </div>


                <div className="absolute -left-16 top-8 bg-white/10 backdrop-blur-sm p-3 rounded-lg transform -rotate-12">
                  <div className="w-12 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md flex flex-col justify-between p-2">
                    <div className="w-full h-1 bg-white/30 rounded"></div>
                    <div className="space-y-1">
                      <div className="w-full h-1 bg-white/50 rounded"></div>
                      <div className="w-3/4 h-1 bg-white/50 rounded"></div>
                      <div className="w-1/2 h-1 bg-white/50 rounded"></div>
                    </div>
                    <div className="w-6 h-1 bg-white/30 rounded mx-auto"></div>
                  </div>
                </div>


                <div className="absolute -top-8 -right-8">
                  <Cloud className="h-16 w-16 text-white/30" />
                </div>
                <div className="absolute -bottom-4 -left-8">
                  <Cloud className="h-12 w-12 text-white/20" />
                </div>

                <div className="absolute top-12 -right-12">
                  <div className="flex items-center space-x-2 text-white/60">
                    <div className="w-8 h-0.5 bg-white/60"></div>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-5 relative bottom-20 space-y-18">
        <div className="max-w-8xl w-[90%] mx-auto px-4 sm:px-6 lg:px-8 " id='introduction'>
          <div className="bg-white rounded-2xl shadow-2xl p-3 px-5 md:p-10 md:px-15 lg:p-18 lg:px-20">
            <div className="prose max-w-none">
              <div className='flex justify-start md:justify-center items-center'>
                <h1 className="text-[#343a40] text-2xl md:text-3xl lg:text-4xl font-semibold  md:text-center tracking-normal leading-relaxed mb-2">
                  Exceptional Services. Outstanding Performance!
                </h1>
              </div>
              <div>
                <p className='flex justify-start md:justify-center items-center prose md:text-center text-[#343a40]'>
                  Our talented workforce always strives to deliver superior and excellent technical solutions through a customer-centric approach! With rich experience in technology development, we are always committed to offer complete satisfaction to our clients. We also provide customized solutions according to the requirement of the clients!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="max-w-8xl w-[90%] mx-auto px-4 sm:px-6 lg:px-8" id='team'>
          <div className="bg-white rounded-2xl shadow-2xl p-3 px-5 md:p-10 md:px-15 lg:p-18 lg:px-20">
            <div className="prose max-w-none">
              <div>
                <Team/>
              </div>
            </div>
          </div>
        </div> */}

        <div className="max-w-8xl w-[90%] mx-auto px-4 sm:px-6 lg:px-8 " id='vision'>
          <div className="bg-white rounded-2xl shadow-2xl p-3 px-5 md:p-10 md:px-15 lg:p-18 lg:px-20">
            <div className="prose max-w-none">
              <div className='flex justify-start md:justify-center items-center'>
                <h1 className="text-[#343a40] text-2xl md:text-3xl lg:text-4xl font-semibold  md:text-center tracking-normal leading-relaxed mb-2">
                  Our Vision
                </h1>
              </div>
              <div>
                <p className='flex justify-start md:justify-center items-center prose md:text-center text-[#343a40]'>
                  We envision a world where technology is accessible to all and void of any barriers. We have a vision of creating a community of intelligent like-minded individuals who will empower numerous stakeholders in various industries to adopt latest technological innovations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <div className="max-w-8xl w-[90%] mx-auto px-4 sm:px-6 lg:px-8 mb-10" id='vision'>
        <div className="bg-white rounded-2xl shadow-2xl p-3 px-5 md:p-10 md:px-15 lg:p-18 lg:px-20">
          <div className="prose max-w-none">
            <div className='flex justify-center items-center mb-4 md:mb-0'>
              <h1 className="text-[#343a40] text-2xl md:text-3xl lg:text-4xl font-semibold  md:text-center tracking-normal leading-relaxed mb-2">
                Clients Industries
              </h1>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {industries.map((industry) => {
                  const IconComponent = industry.icon;
                  return (
                    <div key={industry.id} className="text-center">
                      {/* Icon Circle */}
                      <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-8 w-8 text-[#154fa1]" />
                      </div>

                      {/* Industry Title */}
                      <h3 className="text-xl lg:text-xl text-gray-900 mb-4">
                        {industry.title}
                      </h3>

                      {/* Industry Description */}
                      <p className="text-[#343a40] text-base leading-relaxed max-w-md mx-auto">
                        {industry.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageCarrerSection />
      <Footer />
    </div>
  );
};

export default AboutUS;