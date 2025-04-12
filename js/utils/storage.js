// User data storage
export const userStorage = {
  saveUserData(userData) {
    localStorage.setItem("userData", JSON.stringify(userData));
  },

  getUserData() {
    const data = localStorage.getItem("userData");
    return data
      ? JSON.parse(data)
      : {
          name: "",
          email: "",
          phone: "",
          source: "",
        };
  },

  clearUserData() {
    localStorage.removeItem("userData");
  },
};

// Future visits storage
export const visitsStorage = {
  saveFutureVisits(visits) {
    localStorage.setItem("futureVisits", JSON.stringify(visits));
  },

  getFutureVisits() {
    const visits = localStorage.getItem("futureVisits");
    return visits ? JSON.parse(visits) : [];
  },

  clearFutureVisits() {
    localStorage.removeItem("futureVisits");
  },
};
