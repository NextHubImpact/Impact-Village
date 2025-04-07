import { Eye, Handshake } from "lucide-react";

export default function OurValues() {
  return (
    <section className="px-10 py-1 mx-auto max-w-7xl px-6 lg:px-8 ">
      <div className="mt-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Story
          </h3>
          <div className="w-12 h-1 bg-[#F4A623] mt-2"></div>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Impact Village was founded with a clear and compelling mission: to
            empower youth and communities by bridging the digital and social
            divide. We recognize that today’s most pressing challenges require
            inclusive and innovative solutions, fostering collaboration across
            different sectors and backgrounds.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Over the years, we have developed a transformative approach that
            integrates digital literacy, social well-being, and community
            engagement. By leveraging technology, mentorship, and strategic
            partnerships, we create sustainable impact, equipping individuals
            with the skills and knowledge needed to thrive in a rapidly evolving
            world.
          </p>
        </div>

        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration session"
            className="w-full rounded-1xl shadow-lg"
          />
        </div>
      </div>

      <div>
        <div className="py-6">
          {/* Title Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              OUR VALUES
            </h2>
            <div className="w-12 h-1 bg-[#F4A623] mt-2"></div>
          </div>

          {/* Content Section */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Text */}
            <div className="col-span-1">
              <p className="mt-6 text-base leading-7 text-gray-600">
                We believe every child and youth, regardless of their
                background, deserves access to quality digital education. Our
                programs are designed to be inclusive and accessible, empowering
                everybody with the skills needed to thrive in the digital world.
              </p>
            </div>

            {/* Right Cards */}
            <div className="col-span-2 grid md:grid-cols-2 gap-6">
              {/* Card 1 - Mission */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Handshake className="h-10 w-10 text-[#F4A623]" />
                {/* <img src="https://via.placeholder.com/50" alt="Mission Icon" className="mx-auto mb-3"/>
                 */}
                <h3 className="text-xl font-bold text-[#251F57]">
                  Mission Statement
                </h3>
                <p className="mt-6 text-base leading-7 text-gray-500">
                  Impact Village is dedicated to enhancing the digital and
                  social well-being of youth and community members by providing
                  innovative programs, mentorship, and resources that foster
                  sustainable development..
                </p>
              </div>

              {/* Card 2 - Vision */}
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <Eye className="h-10 w-10 text-[#F4A623]" />
                <h3 className="text-xl font-bold text-[#251F57]">Our Vision</h3>
                <p className="mt-6 text-base leading-7 text-gray-500">
                  To create a digitally inclusive and socially empowered society
                  where every individual has access to the knowledge and tools
                  needed for personal and community growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
