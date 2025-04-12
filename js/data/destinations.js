export const destinations = {
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
  // Indian destinations
  delhi: {
    hotels: [
      { name: "The Imperial", price: "$250/night", rating: "4.9" },
      { name: "Taj Palace", price: "$180/night", rating: "4.7" },
      { name: "Leela Palace", price: "$220/night", rating: "4.8" },
    ],
    transportation: [
      { type: "Metro", price: "$1/ticket" },
      { type: "Auto Rickshaw", price: "Starting from $2" },
      { type: "Taxi", price: "Starting from $5" },
    ],
    attractions: [
      {
        name: "Red Fort",
        price: "$10",
        description:
          "Historic fort that was the main residence of the Mughal Emperors",
      },
      {
        name: "India Gate",
        price: "Free",
        description:
          "War memorial dedicated to soldiers of British Indian Army",
      },
      {
        name: "Qutub Minar",
        price: "$7",
        description:
          "UNESCO World Heritage Site and the tallest brick minaret in the world",
      },
    ],
  },
  goa: {
    hotels: [
      { name: "Taj Exotica", price: "$300/night", rating: "4.8" },
      { name: "Grand Hyatt", price: "$220/night", rating: "4.7" },
      { name: "Beach Huts", price: "$50/night", rating: "4.0" },
    ],
    transportation: [
      { type: "Scooter", price: "$5/day" },
      { type: "Taxi", price: "Starting from $4" },
      { type: "Motorbike", price: "$8/day" },
    ],
    attractions: [
      {
        name: "Calangute Beach",
        price: "Free",
        description:
          "Largest beach in North Goa, known as the 'Queen of Beaches'",
      },
      {
        name: "Basilica of Bom Jesus",
        price: "Free",
        description:
          "UNESCO World Heritage Site and ancient church with the remains of St. Francis Xavier",
      },
      {
        name: "Dudhsagar Falls",
        price: "$15",
        description:
          "Four-tiered waterfall and one of India's tallest waterfalls",
      },
    ],
  },
  jaipur: {
    hotels: [
      { name: "Rambagh Palace", price: "$400/night", rating: "4.9" },
      { name: "Jai Mahal Palace", price: "$250/night", rating: "4.7" },
      { name: "Traditional Haveli", price: "$80/night", rating: "4.3" },
    ],
    transportation: [
      { type: "Auto Rickshaw", price: "$2/ride" },
      { type: "Cycle Rickshaw", price: "$1/ride" },
      { type: "Tourist Taxi", price: "$30/day" },
    ],
    attractions: [
      {
        name: "Amber Fort",
        price: "$15",
        description:
          "UNESCO World Heritage Site and magnificent hilltop fort-palace complex",
      },
      {
        name: "Hawa Mahal",
        price: "$5",
        description:
          "Palace with a unique honeycomb facade featuring 953 small windows",
      },
      {
        name: "City Palace",
        price: "$12",
        description: "Royal residence with gardens, courtyards and museums",
      },
    ],
  },
};

export const destinationCoordinates = {
  paris: { lat: 48.8566, lng: 2.3522 },
  bali: { lat: -8.4095, lng: 115.1889 },
  newyork: { lat: 40.7128, lng: -74.006 },
  tokyo: { lat: 35.6762, lng: 139.6503 },
  dubai: { lat: 25.2048, lng: 55.2708 },
  sydney: { lat: -33.8688, lng: 151.2093 },
  // Indian destinations coordinates
  delhi: { lat: 28.6139, lng: 77.209 },
  goa: { lat: 15.2993, lng: 74.124 },
  jaipur: { lat: 26.9124, lng: 75.7873 },
};
