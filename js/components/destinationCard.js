import { calculateDistance } from "../utils/calculations.js";

export function createDestinationCard(
  destination,
  userData,
  destinationCoordinates,
  destinationData
) {
  const card = document.createElement("div");
  card.className = "destination-card";
  card.dataset.destination = destination;

  // Get destination details
  const hotels = destinationData[destination].hotels;
  const minPrice = getMinPrice(hotels);
  const avgRating = getAvgRating(hotels);

  // Calculate distance if source is provided
  const distance =
    userData.source && destinationCoordinates[destination]
      ? calculateDistance(
          0,
          0, // Default source coordinates
          destinationCoordinates[destination].lat,
          destinationCoordinates[destination].lng
        )
      : null;

  // Destination name mapping for display
  const destinationNames = {
    paris: "Paris, France",
    bali: "Bali, Indonesia",
    newyork: "New York, USA",
    tokyo: "Tokyo, Japan",
    dubai: "Dubai, UAE",
    sydney: "Sydney, Australia",
    delhi: "Delhi, India",
    goa: "Goa, India",
    jaipur: "Jaipur, India",
  };

  // Icon mapping for different destinations
  const destinationIcons = {
    paris: "fas fa-city",
    bali: "fas fa-umbrella-beach",
    newyork: "fas fa-building",
    tokyo: "fas fa-torii-gate",
    dubai: "fas fa-mosque",
    sydney: "fas fa-water",
    delhi: "fas fa-landmark",
    goa: "fas fa-umbrella-beach",
    jaipur: "fas fa-fort-awesome",
  };

  card.innerHTML = `
    <div class="card-image">
      <img src="images/destinations/${destination}.jpg" 
           alt="${destination}" 
           onerror="this.onerror=null; this.src='https://source.unsplash.com/400x300/?${destination}';" />
      <div class="card-overlay">
        <span class="price">From ${minPrice}</span>
      </div>
    </div>
    <div class="card-content">
      <h3><i class="${
        destinationIcons[destination] || "fas fa-map-marker-alt"
      }"></i> ${destinationNames[destination] || destination}</h3>
      <div class="card-details">
        <span><i class="fas fa-star"></i> ${avgRating}</span>
        <span><i class="fas fa-hotel"></i> ${hotels.length}+ Hotels</span>
        ${
          distance
            ? `<span><i class="fas fa-plane"></i> ${Math.round(
                distance
              )} km</span>`
            : ""
        }
      </div>
    </div>
  `;

  card.addEventListener("click", () => {
    // Remove selected class from all cards
    document.querySelectorAll(".destination-card").forEach((c) => {
      c.classList.remove("selected");
    });

    // Add selected class to clicked card
    card.classList.add("selected");

    // Dispatch event
    const event = new CustomEvent("destinationSelected", {
      detail: destination,
    });
    document.dispatchEvent(event);
  });

  return card;
}

// Helper functions
function getMinPrice(hotels) {
  if (!hotels || !hotels.length) return "$0";
  const prices = hotels.map((hotel) => {
    const price = hotel.price.match(/\$(\d+)/);
    return price ? parseInt(price[1]) : 0;
  });
  return "$" + Math.min(...prices);
}

function getAvgRating(hotels) {
  if (!hotels || !hotels.length) return "0.0";
  const sum = hotels.reduce((acc, hotel) => acc + parseFloat(hotel.rating), 0);
  return (sum / hotels.length).toFixed(1);
}
