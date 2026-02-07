import Image from "next/image";


export default function PageCarrerSection() {
  return (
    <>
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <div className='flex justify-center mb-6'>
            <Image src='/insight-logo.png' alt='Insightsoftware Logo' width={250} height={100} className="object-cover block" />
          </div>
          <h2 className="text-3xl md:text-4xl font-[700] tracking-wide text-[#343a40] mb-4">Career with Insightsoftware</h2>
          <p className="text-gray-600 mb-8 text-base max-w-2xl mx-auto">
            We always keep our 'GROW MODE' on! We seek young and powerful individuals who are equally excited and curious to break the barriers of stagnancy and adopt novel methodologies!
          </p>
          <button className="bg-[#154fa1] text-white px-8 py-3 rounded-lg text-base md:text-lg tracking-wide transition-colors">
            View all openings
          </button>
        </div>
      </section>
    </>
  )
}
