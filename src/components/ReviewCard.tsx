import { Star, User } from "lucide-react";
import { motion } from "framer-motion";
import { Review } from "@/data/reviews";

interface ReviewCardProps {
  review: Review;
  index: number;
}

const ReviewCard = ({ review, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="bg-card/50 backdrop-blur-md rounded-xl p-5 shadow-sm border border-white/5 flex flex-col h-full hover:border-primary/30 transition-all relative group"
    >
      {/* Google G Icon */}
      <div className="absolute top-4 right-4">
        <img 
          src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" 
          alt="G" 
          className="w-4 h-4 brightness-125"
        />
      </div>

      <div className="flex items-center gap-3 mb-3">
        <div 
          className={`w-10 h-10 rounded-full flex items-center justify-center overflow-hidden border border-white/10 font-bold text-white text-sm shadow-lg`}
          style={{ backgroundColor: `hsl(${(index * 137) % 360}, 60%, 45%)` }}
        >
          {review.avatar ? (
            <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
          ) : (
            <span>{review.name.charAt(0)}</span>
          )}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-bold text-sm text-white leading-tight line-clamp-1">
              {review.name}
            </h4>
            <div className="bg-blue-500 rounded-full p-0.5 flex items-center justify-center shrink-0 shadow-sm">
              <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <p className="text-gray-500 text-[10px] uppercase tracking-wider font-medium">
            {review.date || "JUST RECENTLY"}
          </p>
        </div>
      </div>

      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, j) => (
          <Star
            key={j}
            size={14}
            className={`${
              j < review.rating ? "fill-primary text-primary" : "text-white/10"
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-300 text-xs leading-relaxed mb-4 line-clamp-4 flex-grow">
        {review.text}
      </p>

      <a 
        href={`https://www.google.com/maps/search/?api=1&query=Arise+Awuake&query_place_id=ChIJ3UQhYan4tDsRJy3vvADE4uU`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 text-[10px] font-semibold hover:text-primary transition-colors mt-auto flex items-center gap-1"
      >
        Read more on Google
      </a>
    </motion.div>
  );
};

export default ReviewCard;
