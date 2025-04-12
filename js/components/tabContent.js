import { formatPrice, calculateDistance } from "../utils/calculations.js";

export function createTabContent(
  tab,
  destinationData,
  userData,
  destinationCoordinates,
  destinationKey
) {
  const tabContent = document.createElement("div");
  tabContent.id = "tab-content";

  // Add distance information if source location is set
  if (userData.source && destinationCoordinates && destinationKey) {
    // Calculate distance
    const distance = calculateDistance(
      0,
      0, // Default values since we don't have geocoding for source
      destinationCoordinates[destinationKey].lat,
      destinationCoordinates[destinationKey].lng
    );

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
    tabContent.appendChild(distanceInfo);
  }

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
              <span class="price"><i class="fas fa-dollar-sign"></i> ${formatPrice(
                hotel.price
              )}</span>
              <span class="rating"><i class="fas fa-star"></i> ${
                hotel.rating
              }/5</span>
            </div>
            <button class="book-btn" data-type="hotel" data-name="${
              hotel.name
            }">
              <i class="fas fa-calendar-check"></i> Book Now
            </button>
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
              <span class="price"><i class="fas fa-ticket-alt"></i> ${formatPrice(
                trans.price
              )}</span>
            </div>
            <button class="book-btn" data-type="transport" data-name="${
              trans.type
            }">
              <i class="fas fa-ticket-alt"></i> Book Transport
            </button>
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
              <span class="price"><i class="fas fa-ticket-alt"></i> ${formatPrice(
                attraction.price
              )}</span>
              <p class="description"><i class="fas fa-info-circle"></i> ${
                attraction.description
              }</p>
            </div>
            <button class="book-btn" data-type="attraction" data-name="${
              attraction.name
            }">
              <i class="fas fa-calendar-check"></i> Book Tour
            </button>
          </div>
        </div>
      `
        )
        .join("");
      break;
  }

  tabContent.innerHTML += content;

  // Add event listeners to the buttons
  setTimeout(() => {
    tabContent.querySelectorAll(".book-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        const name = btn.dataset.name;
        const event = new CustomEvent("bookingRequested", {
          detail: { type, name },
        });
        document.dispatchEvent(event);
      });
    });
  }, 0);

  return tabContent;
}
