import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { Review } from "@/data/reviews";

interface ReviewCarouselProps {
  reviews: Review[];
}

const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  // Limit to 10 reviews
  const displayReviews = reviews.slice(0, 10);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: true,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-stretch">

        {/* Left Summary Card */}
        <div className="lg:w-1/4 flex flex-col justify-center items-center text-center p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-white/5 mb-6 lg:mb-0">
          <h2 className="text-xl lg:text-2xl font-bold text-white mb-1">4.9 RATING</h2>
          <div className="flex gap-1 mb-2 lg:mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="fill-[#FBBC04] text-[#FBBC04]" />
            ))}
          </div>
          <p className="text-gray-400 text-xs lg:text-sm font-medium mb-3 lg:mb-4">
            Based on <span className="font-bold text-white">152 reviews</span>
          </p>
          <div className="flex items-center gap-2">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="w-20 lg:w-24 h-auto brightness-110"
            />
          </div>
        </div>

        {/* Right Carousel */}
        <div className="lg:w-3/4 relative group w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {displayReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] h-full"
                >
                  <ReviewCard review={review} index={index} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-2 md:-left-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
            onClick={scrollPrev}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            className="absolute top-1/2 -right-2 md:-right-6 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card/90 backdrop-blur-md border border-white/10 shadow-xl flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
            onClick={scrollNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="mt-12 flex flex-col items-center gap-6">

        <a
          href="https://www.google.com/maps/search/?api=1&query=Arise+Awuake&query_place_id=ChIJ3UQhYan4tDsRJy3vvADE4uU"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-gold text-primary-foreground px-8 py-3.5 rounded-md font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-gold"
        >
          View All Reviews <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
};

export default ReviewCarousel;
