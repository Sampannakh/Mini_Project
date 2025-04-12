import { destinations, destinationCoordinates } from "./data/destinations.js";
import { userStorage, visitsStorage } from "./utils/storage.js";
import { createDestinationCard } from "./components/destinationCard.js";
import { createTabContent } from "./components/tabContent.js";

// Global state
let userData = userStorage.getUserData();
let futureVisits = visitsStorage.getFutureVisits();
let currentDestination = null;

// Initialize the application
function init() {
  console.log("Initializing application...");

  // Load user data
  if (userData.name) {
    document.getElementById("name").value = userData.name;
    document.getElementById("email").value = userData.email;
    document.getElementById("phone").value = userData.phone;
    document.getElementById("source").value = userData.source;
  }

  // Load future visits
  updateVisitsList();

  // Initialize destination cards
  updateDestinationCards();

  // Add event listeners
  setupEventListeners();

  console.log("Application initialized successfully");
}

// Setup all event listeners
function setupEventListeners() {
  // User form submission
  document
    .getElementById("user-form")
    .addEventListener("submit", handleUserFormSubmit);

  // Destination selection
  document.addEventListener("destinationSelected", handleDestinationSelection);

  // Booking requests
  document.addEventListener("bookingRequested", handleBooking);

  // Tab switching
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document
        .querySelectorAll(".tab-btn")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const tab = btn.dataset.tab;
      showTabContent(tab);
    });
  });

  // Search functionality
  document
    .getElementById("destination-search")
    .addEventListener("input", handleSearch);

  // Make removeVisit function global
  window.removeVisit = removeVisit;
}

// Handle user form submission
function handleUserFormSubmit(e) {
  e.preventDefault();
  userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    source: document.getElementById("source").value,
  };
  userStorage.saveUserData(userData);
  alert("User details saved successfully!");
  updateDestinationCards();

  // Update tab content if a destination is selected
  if (currentDestination) {
    showDestinationDetails(currentDestination);
  }
}

// Handle destination selection
function handleDestinationSelection(e) {
  const destination = e.detail;
  currentDestination = destination;
  showDestinationDetails(destination);

  // Scroll to destination details section
  document.getElementById("destination-details").scrollIntoView({
    behavior: "smooth",
  });
}

// Handle search
function handleSearch(e) {
  const searchTerm = e.target.value.toLowerCase();
  document.querySelectorAll(".destination-card").forEach((card) => {
    const destination = card.dataset.destination;
    const isVisible = destination.includes(searchTerm);
    card.style.display = isVisible ? "block" : "none";
  });
}

// Update destination cards
function updateDestinationCards() {
  const grid = document.querySelector(".destination-grid");
  grid.innerHTML = "";
  Object.keys(destinations).forEach((destination) => {
    const card = createDestinationCard(
      destination,
      userData,
      destinationCoordinates,
      destinations
    );
    grid.appendChild(card);
  });
}

// Show destination details
function showDestinationDetails(destination) {
  const destinationData = destinations[destination];
  if (!destinationData) {
    console.error(`No data found for destination: ${destination}`);
    return;
  }

  // Set current destination for reference
  currentDestination = destination;

  const tabContent = createTabContent(
    "hotels", // Default tab
    destinationData,
    userData,
    destinationCoordinates,
    destination
  );

  const detailsContent = document.getElementById("details-content");
  const existingContent = document.getElementById("tab-content");
  if (existingContent) {
    existingContent.remove();
  }

  // Make details section visible
  const detailsSection = document.getElementById("destination-details");
  detailsSection.style.display = "block";

  // Update tab content
  detailsContent.appendChild(tabContent);

  // Add to future visits if not already there
  if (!futureVisits.includes(destination)) {
    futureVisits.push(destination);
    visitsStorage.saveFutureVisits(futureVisits);
    updateVisitsList();
  }
}

// Show tab content
function showTabContent(tab) {
  if (!currentDestination) {
    console.log("No destination selected");
    return;
  }

  const destinationData = destinations[currentDestination];
  const tabContent = createTabContent(
    tab,
    destinationData,
    userData,
    destinationCoordinates,
    currentDestination
  );

  const detailsContent = document.getElementById("details-content");
  const existingContent = document.getElementById("tab-content");
  if (existingContent) {
    existingContent.remove();
  }
  detailsContent.appendChild(tabContent);
}

// Update visits list
function updateVisitsList() {
  const visitsList = document.getElementById("visits-list");

  if (futureVisits.length === 0) {
    visitsList.innerHTML = `<p class="no-visits">No future visits planned yet. Select a destination to add it here.</p>`;
    return;
  }

  visitsList.innerHTML = futureVisits
    .map(
      (destination) => `
    <div class="visit-item">
      <span>${destination.charAt(0).toUpperCase() + destination.slice(1)}</span>
      <button onclick="removeVisit('${destination}')">
        <i class="fas fa-trash"></i> Remove
      </button>
    </div>
  `
    )
    .join("");
}

// Remove visit
function removeVisit(destination) {
  futureVisits = futureVisits.filter((d) => d !== destination);
  visitsStorage.saveFutureVisits(futureVisits);
  updateVisitsList();
}

// Handle booking
function handleBooking(e) {
  const { type, name } = e.detail;

  if (!userData.name) {
    alert("Please save your details first!");
    document.getElementById("user-details").scrollIntoView({
      behavior: "smooth",
    });
    return;
  }

  alert(
    `Booking request received for ${type}: ${name}\nWe will contact you at ${userData.email} shortly.`
  );
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
