import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  const doctors = [
    {
      image: "https://pravarayu.com/wp-content/uploads/2024/04/prajakta_.jpg",
      name: "Dr. Prajakta Salunke",
      role: "Ayurveda Specialist",
      exp: 12,
    },
    {
      image: "https://pravarayu.com/wp-content/uploads/2024/01/updated-1.jpeg",
      name: "Dr. Sumit Salunke",
      role: "Panchakarma Expert",
      exp: 15,
    },
  ];

  return (
    <div className="bg-[#f5f1ea] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold text-green-900 font-serif">
              Our Healers
            </h1>
            <p className="mt-2 text-gray-600">
              Expert practitioners dedicated to your wellbeing.
            </p>
          </div>

          <button className="text-green-800 font-medium">
            Meet all doctors →
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {doctors.map((doc, i) => (
            <DoctorCard key={i} {...doc} />
          ))}
        </div>

      </div>
    </div>
  );
}