/**
 * Google Reviews Service
 * This service handles fetching reviews directly from the Google Places API.
 * 
 * PLACE_ID: ChIJ3UQhYan4tDsRJy3vvADE4uU (Arise Awuake)
 * 
 * To use this, you need a Google Maps API Key.
 * Instructions:
 * 1. Go to Google Cloud Console
 * 2. Enable 'Places API'
 * 3. Create an API Key
 * 4. Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your real key.
 */

import { Review } from "@/data/reviews";

const PLACE_ID = "ChIJ3UQhYan4tDsRJy3vvADE4uU";
const API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // Replace this

export const fetchGoogleReviews = async (): Promise<Review[]> => {
  try {
    // Note: In a production environment, you should fetch this through a backend proxy
    // to hide your API Key and avoid CORS issues.
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${API_KEY}`
    );
    
    const data = await response.json();
    
    if (data.result && data.result.reviews) {
      return data.result.reviews.map((r: any) => ({
        name: r.author_name,
        role: "Google Reviewer",
        text: r.text,
        rating: r.rating,
        avatar: r.profile_photo_url,
        date: r.relative_time_description,
      }));
    }
    
    return [];
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    throw error;
  }
};
