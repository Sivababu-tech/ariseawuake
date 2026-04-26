import { useState, useEffect } from "react";
import { Review, reviews as initialReviews } from "@/data/reviews";

/**
 * A hook to fetch reviews dynamically.
 * Currently it returns the static data from reviews.ts, 
 * but it's structured to easily switch to a real API (like Google Places API).
 */
export const useReviews = () => {
  const [data, setData] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulate an API fetch
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        // In a real scenario, you would replace this with:
        // const response = await fetch('YOUR_API_ENDPOINT');
        // const result = await response.json();
        
        // Simulating network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setData(initialReviews);
      } catch (err) {
        setError("Failed to fetch reviews");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { data, isLoading, error };
};
