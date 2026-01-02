
import img3 from "@/assets/RS4.png";

export default function PopularCourses() {
          const courses = [
            {
              title: "Digital Empowerment",
              image: img3.src,
              color: "bg-[#05092D]",
            },
            {
              title: "Community Well-being",
              image: "https://media.istockphoto.com/id/1466734748/photo/explaining-to-the-group-in-community-centre.webp?a=1&b=1&s=612x612&w=0&k=20&c=pPjNXIketZXbv3O9bF4Chr-e8P033whCLma1bI4xDH0=",
              color: "bg-[#F4A623]",
            },
            {
              title: "Sustainable Impact",
              image: "https://images.unsplash.com/photo-1709068874215-731a9291d208?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fFN1c3RhaW5hYmxlJTIwSW1wYWN0fGVufDB8fDB8fHww",
              color: "bg-[#05092D]",
            },
          ];
        
          return (
            <section className="px-10 py-16 px-6 mx-auto max-w-7xl lg:px-8 ">
              <div className="max-w-7xl mx-auto">
                {/* Title Section */}
                <h2 className="text-3xl font-bold text-black">OUR POPULAR COURSES</h2>
                <div className="w-12 h-1 bg-[#F4A623] mt-2"></div>
        
                {/* Grid Layout */}
                <div className="grid md:grid-cols-3 gap-8 mt-8">
                  {courses.map((course, index) => (
                    <div key={index} className="group">
                      <div className="w-full h-60">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover rounded-t-lg"
                        />
                      </div>
                      <div className={`${course.color} p-4 rounded-b-lg`}>
                        <h3 className="text-white text-lg font-semibold">{course.title}</h3>
                        <div className="w-12 h-1 bg-white mt-2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        }
        