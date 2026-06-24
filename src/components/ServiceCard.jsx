import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ service }) {
  return (
    <Link to={`/services/${service.slug}`} className="group block h-full">
      <div className="rounded-[32px] overflow-hidden transition-all duration-500 h-full flex flex-col bg-[#0B0A13] border border-white/10 hover:border-[#8b00ff]/30 hover:shadow-[0_20px_50px_rgba(139,0,255,0.08)]">
        
        {/* Image with locked aspect ratio */}
        <div className="relative bg-[#0B0A13] overflow-hidden w-full aspect-video flex items-center justify-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0A13]/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <span className="px-3 py-1 rounded-full bg-[#8b00ff]/10 border border-[#8b00ff]/20 text-[9px] font-bold text-[#a33bff] uppercase tracking-widest">
              {service.timelineMonths} Months
            </span>
          </div>
        </div>

        {/* Content with fixed heights */}
        <div className="p-6 flex flex-col flex-1 justify-between">
          <div>
            {/* Title: max 2 lines */}
            <h3 className="text-lg font-bold text-white group-hover:text-[#a33bff] transition-colors line-clamp-2 min-h-[3.5rem]">
              {service.title}
            </h3>
            {/* Description: max 3 lines */}
            <p className="text-sm text-white/40 leading-relaxed line-clamp-3 min-h-[4.2rem] mt-1">
              {service.shortDescription}
            </p>
          </div>
          {/* Button pushed to bottom */}
          <div className="flex items-center gap-2 text-[#a33bff] font-bold text-sm group-hover:gap-4 transition-all group-hover:translate-x-1 mt-4">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ServiceCard;