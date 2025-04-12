// Store user data and future visits in localStorage
let userData = {
  name: "",
  email: "",
  phone: "",
  source: "",
};
let futureVisits = JSON.parse(localStorage.getItem("futureVisits")) || [];

// Destination data
const destinations = {
  paris: {
    hotels: [
      { name: "Luxury Hotel Paris", price: "$300/night", rating: "4.8" },
      { name: "Boutique Hotel", price: "$200/night", rating: "4.5" },
      { name: "Budget Hotel", price: "$100/night", rating: "4.0" },
    ],
    transportation: [
      { type: "Metro", price: "$2/ticket" },
      { type: "Bus", price: "$1.5/ticket" },
      { type: "Taxi", price: "Starting from $10" },
    ],
    attractions: [
      {
        name: "Eiffel Tower",
        price: "$25",
        description: "Iconic iron lattice tower",
      },
      {
        name: "Louvre Museum",
        price: "$20",
        description: "World's largest art museum",
      },
      {
        name: "Notre-Dame",
        price: "Free",
        description: "Medieval Catholic cathedral",
      },
    ],
  },
  bali: {
    hotels: [
      { name: "Beach Resort", price: "$250/night", rating: "4.9" },
      { name: "Villa Resort", price: "$180/night", rating: "4.7" },
      { name: "Guest House", price: "$80/night", rating: "4.3" },
    ],
    transportation: [
      { type: "Scooter", price: "$10/day" },
      { type: "Taxi", price: "Starting from $5" },
      { type: "Private Driver", price: "$40/day" },
    ],
    attractions: [
      {
        name: "Ubud Temple",
        price: "$10",
        description: "Ancient temple complex",
      },
      {
        name: "Rice Terraces",
        price: "Free",
        description: "Scenic agricultural landscape",
      },
      {
        name: "Beach Clubs",
        price: "$20",
        description: "Luxury beach entertainment",
      },
    ],
  },
  newyork: {
    hotels: [
      { name: "Manhattan Hotel", price: "$400/night", rating: "4.7" },
      { name: "Brooklyn Inn", price: "$250/night", rating: "4.6" },
      { name: "Hostel", price: "$100/night", rating: "4.2" },
    ],
    transportation: [
      { type: "Subway", price: "$2.75/ticket" },
      { type: "Bus", price: "$2.75/ticket" },
      { type: "Taxi", price: "Starting from $3" },
    ],
    attractions: [
      { name: "Central Park", price: "Free", description: "Urban oasis" },
      {
        name: "Times Square",
        price: "Free",
        description: "Famous commercial intersection",
      },
      {
        name: "Statue of Liberty",
        price: "$25",
        description: "Iconic American symbol",
      },
    ],
  },
  tokyo: {
    hotels: [
      { name: "Luxury Tokyo Hotel", price: "$350/night", rating: "4.9" },
      { name: "Traditional Ryokan", price: "$280/night", rating: "4.8" },
      { name: "Capsule Hotel", price: "$50/night", rating: "4.0" },
    ],
    transportation: [
      { type: "JR Train", price: "$5/ticket" },
      { type: "Metro", price: "$2/ticket" },
      { type: "Bullet Train", price: "$100/ticket" },
    ],
    attractions: [
      {
        name: "Shibuya Crossing",
        price: "Free",
        description: "Famous pedestrian crossing",
      },
      {
        name: "Senso-ji Temple",
        price: "Free",
        description: "Ancient Buddhist temple",
      },
      {
        name: "Tokyo Skytree",
        price: "$30",
        description: "Tallest structure in Japan",
      },
    ],
  },
  dubai: {
    hotels: [
      { name: "Burj Al Arab", price: "$1000/night", rating: "5.0" },
      { name: "Desert Resort", price: "$400/night", rating: "4.8" },
      { name: "City Hotel", price: "$200/night", rating: "4.5" },
    ],
    transportation: [
      { type: "Metro", price: "$3/ticket" },
      { type: "Taxi", price: "Starting from $5" },
      { type: "Private Car", price: "$50/day" },
    ],
    attractions: [
      {
        name: "Burj Khalifa",
        price: "$50",
        description: "World's tallest building",
      },
      {
        name: "Dubai Mall",
        price: "Free",
        description: "Largest shopping mall",
      },
      {
        name: "Desert Safari",
        price: "$80",
        description: "Desert adventure tour",
      },
    ],
  },
  sydney: {
    hotels: [
      { name: "Harbor View Hotel", price: "$450/night", rating: "4.8" },
      { name: "Beach Resort", price: "$300/night", rating: "4.6" },
      { name: "Backpacker Hostel", price: "$80/night", rating: "4.2" },
    ],
    transportation: [
      { type: "Train", price: "$4/ticket" },
      { type: "Ferry", price: "$6/ticket" },
      { type: "Bus", price: "$3/ticket" },
    ],
    attractions: [
      {
        name: "Sydney Opera House",
        price: "$40",
        description: "Iconic performing arts center",
      },
      { name: "Bondi Beach", price: "Free", description: "Famous beach" },
      {
        name: "Taronga Zoo",
        price: "$45",
        description: "Major zoo and conservation center",
      },
    ],
  },
};

// Add destination coordinates
const destinationCoordinates = {
  paris: { lat: 48.8566, lng: 2.3522 },
  bali: { lat: -8.4095, lng: 115.1889 },
  newyork: { lat: 40.7128, lng: -74.006 },
  tokyo: { lat: 35.6762, lng: 139.6503 },
  dubai: { lat: 25.2048, lng: 55.2708 },
  sydney: { lat: -33.8688, lng: 151.2093 },
};

// Calculate distance between two points using Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // Earth's radius in kilometers
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Handle user form submission
document.getElementById("user-form").addEventListener("submit", (e) => {
  e.preventDefault();
  userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    source: document.getElementById("source").value,
  };
  localStorage.setItem("userData", JSON.stringify(userData));
  alert("User details saved successfully!");
  updateDestinationCards();
});

// Handle destination selection
document.querySelectorAll(".destination-card").forEach((card) => {
  card.addEventListener("click", () => {
    const destination = card.dataset.destination;
    showDestinationDetails(destination);
  });
});

// Handle tab switching
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const tab = btn.dataset.tab;
    showTabContent(tab);
  });
});

// Update destination cards with distance information
function updateDestinationCards() {
  if (!userData.source) return;

  // Geocode the source location (simplified for demo)
  // In a real application, you would use a geocoding service
  const sourceCoords = { lat: 0, lng: 0 }; // Default coordinates

  document.querySelectorAll(".destination-card").forEach((card) => {
    const destination = card.dataset.destination;
    const destCoords = destinationCoordinates[destination];

    if (destCoords) {
      const distance = calculateDistance(
        sourceCoords.lat,
        sourceCoords.lng,
        destCoords.lat,
        destCoords.lng
      );

      // Add distance information to the card
      const distanceInfo = card.querySelector(".card-details");
      if (distanceInfo) {
        const distanceSpan = document.createElement("span");
        distanceSpan.innerHTML = `<i class="fas fa-plane"></i> ${Math.round(
          distance
        )} km`;
        distanceInfo.appendChild(distanceSpan);
      }
    }
  });
}

// Show destination details
function showDestinationDetails(destination) {
  const destinationData = destinations[destination];
  const tabContent = document.getElementById("tab-content");

  // Add distance information to the details
  if (userData.source && destinationCoordinates[destination]) {
    const sourceCoords = { lat: 0, lng: 0 }; // Default coordinates
    const destCoords = destinationCoordinates[destination];
    const distance = calculateDistance(
      sourceCoords.lat,
      sourceCoords.lng,
      destCoords.lat,
      destCoords.lng
    );

    // Add distance info to the content
    const distanceInfo = document.createElement("div");
    distanceInfo.className = "distance-info";
    distanceInfo.innerHTML = `
      <div class="detail-item">
        <div class="detail-header">
          <i class="fas fa-plane"></i>
          <h3>Distance from ${userData.source}</h3>
        </div>
        <div class="detail-content">
          <div class="detail-info">
            <span class="distance"><i class="fas fa-route"></i> ${Math.round(
              distance
            )} km</span>
            <span class="estimated-time"><i class="fas fa-clock"></i> ${Math.round(
              distance / 800
            )} hours by plane</span>
          </div>
        </div>
      </div>
    `;
    tabContent.insertBefore(distanceInfo, tabContent.firstChild);
  }

  // Show hotels by default
  showTabContent("hotels", destinationData);

  // Add to future visits
  if (!futureVisits.includes(destination)) {
    futureVisits.push(destination);
    localStorage.setItem("futureVisits", JSON.stringify(futureVisits));
    updateVisitsList();
  }
}

// Show tab content
function showTabContent(tab, destinationData) {
  const tabContent = document.getElementById("tab-content");
  let content = "";

  switch (tab) {
    case "hotels":
      content = destinationData.hotels
        .map(
          (hotel) => `
            <div class="detail-item hotel-item">
              <div class="detail-header">
                <i class="fas fa-hotel"></i>
                <h3>${hotel.name}</h3>
              </div>
              <div class="detail-content">
                <div class="detail-info">
                  <span class="price"><i class="fas fa-dollar-sign"></i> ${hotel.price}</span>
                  <span class="rating"><i class="fas fa-star"></i> ${hotel.rating}/5</span>
                </div>
                <button class="book-btn">Book Now</button>
              </div>
            </div>
          `
        )
        .join("");
      break;
    case "transportation":
      content = destinationData.transportation
        .map(
          (trans) => `
            <div class="detail-item transport-item">
              <div class="detail-header">
                <i class="fas fa-bus"></i>
                <h3>${trans.type}</h3>
              </div>
              <div class="detail-content">
                <div class="detail-info">
                  <span class="price"><i class="fas fa-ticket-alt"></i> ${trans.price}</span>
                </div>
                <button class="book-btn">Book Transport</button>
              </div>
            </div>
          `
        )
        .join("");
      break;
    case "attractions":
      content = destinationData.attractions
        .map(
          (attraction) => `
            <div class="detail-item attraction-item">
              <div class="detail-header">
                <i class="fas fa-landmark"></i>
                <h3>${attraction.name}</h3>
              </div>
              <div class="detail-content">
                <div class="detail-info">
                  <span class="price"><i class="fas fa-ticket-alt"></i> ${attraction.price}</span>
                  <p class="description"><i class="fas fa-info-circle"></i> ${attraction.description}</p>
                </div>
                <button class="book-btn">Book Tour</button>
              </div>
            </div>
          `
        )
        .join("");
      break;
  }

  tabContent.innerHTML = content;
}

// Update future visits list
function updateVisitsList() {
  const visitsList = document.getElementById("visits-list");
  visitsList.innerHTML = futureVisits
    .map(
      (destination) => `
        <div class="visit-item">
            <span>${
              destination.charAt(0).toUpperCase() + destination.slice(1)
            }</span>
            <button onclick="removeVisit('${destination}')">Remove</button>
        </div>
    `
    )
    .join("");
}

// Remove visit from future visits
function removeVisit(destination) {
  futureVisits = futureVisits.filter((d) => d !== destination);
  localStorage.setItem("futureVisits", JSON.stringify(futureVisits));
  updateVisitsList();
}

// Initialize the page
function init() {
  const savedUserData = localStorage.getItem("userData");
  const savedFutureVisits = localStorage.getItem("futureVisits");

  if (savedUserData) {
    userData = JSON.parse(savedUserData);
    document.getElementById("name").value = userData.name;
    document.getElementById("email").value = userData.email;
    document.getElementById("phone").value = userData.phone;
    document.getElementById("source").value = userData.source;
    updateDestinationCards();
  }

  if (savedFutureVisits) {
    futureVisits = JSON.parse(savedFutureVisits);
    updateVisitsList();
  }
}
