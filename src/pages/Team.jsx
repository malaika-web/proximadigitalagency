import { motion } from 'framer-motion';
import { founders, leadership } from '../data/teamData';
import Button from '../components/Button';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

function Team() {
  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariants} className="bg-white min-h-screen font-poppins text-[#1A0533] overflow-x-hidden">
      
      {/* 1) HERO SECTION */}
<section
  className="relative pt-32 pb-20 px-6 text-center text-white overflow-hidden"
  style={{
    backgroundColor: "#0B0F1A",
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
  }}
>
  {/* soft glow overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-black/40 pointer-events-none" />

  <div className="relative z-10">
    <motion.h1
      variants={itemVariants}
      className="text-5xl md:text-7xl font-black tracking-tight text-white"
    >
      Built for{" "}
      <span className="bg-gradient-to-r from-[#A855F7] to-[#C084FC] bg-clip-text text-transparent">
        High Velocity Growth
      </span>
    </motion.h1>

    <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">
      Scale your product, automate workflows, and accelerate performance with a modern system driven UI.
    </p>
  </div>
</section>

      {/* 2) STRATEGIC LEADERSHIP */}
      <motion.section variants={itemVariants} className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/3">
            <h2 className="text-4xl font-black mb-4">Strategic Leadership</h2>
            <p className="text-[#5C4D72]">Our specialized team of experts, driving revenue and results across businesses.</p>
          </div>
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {founders.map((f, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="bg-white p-4 rounded-[32px] border border-[#E0D8F0] shadow-xl">
                <img src={f.image} alt={f.name} className="w-full h-80 object-cover rounded-[24px] mb-4" />
                <h3 className="text-xl font-bold">{f.name}</h3>
                <p className="text-[#7B2FBE] font-bold text-sm uppercase">{f.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 3) SYSTEMS SECTION (White Text) */}
<motion.section
  variants={itemVariants}
  className="bg-[#030305] text-white py-24 px-6"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12">
    
    {/* Left Content */}
    <div className="md:col-span-4">
      <h2 className="text-4xl font-black mb-6 text-white">Systems</h2>
      <p className="text-gray-300 mb-10 text-lg">
        We don't build teams, We build systems. Every workflow is engineered to be measurable and designed to scale.
      </p>
    </div>

    {/* Cards */}
    <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {leadership.map((member, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05 }}
          className="bg-[#141414] p-4 rounded-[28px] text-white border border-white/5 hover:border-purple-500/30 transition-all"
        >
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-64 object-cover rounded-[20px] mb-4"
          />

          {/* Name (light white tone) */}
          <h4 className="font-bold text-lg text-gray-100">
            {member.name}
          </h4>

          {/* Role (muted light) */}
          <p className="text-gray-400 text-xs font-bold uppercase tracking-wider">
            {member.role}
          </p>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

      {/* 4) VISION SECTION */}
      <motion.section variants={itemVariants} className="py-24 bg-[#7B2FBE]/5 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black mb-6">We don't build teams,<br/><span className="text-[#7B2FBE]">We build systems.</span></h2>
            <p className="text-[#5C4D72] text-lg">Every workflow is engineered to be measurable, repeatable, and designed to scale.</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[ {n: "50+", l: "Projects"}, {n: "98%", l: "Retention"} ].map((stat, i) => (
              <div key={i} className="p-8 rounded-[24px] bg-white border border-[#E0D8F0] text-center shadow-lg">
                <div className="text-4xl font-black text-[#7B2FBE] mb-2">{stat.n}</div>
                <div className="text-[#5C4D72] text-sm uppercase tracking-widest">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 5) CTA */}
      <motion.section variants={itemVariants} className="py-24 border-t border-[#E0D8F0] text-center px-6">
        <Button href="https://calendly.com/sharjeel-qureshi/new-meeting" variant="primary" size="lg">
          Book Strategy Call
        </Button>
      </motion.section>
    </motion.div>
  );
}

export default Team;