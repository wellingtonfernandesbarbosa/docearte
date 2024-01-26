const navDashboard = document.getElementById("navDashboard")
const navCalc = document.getElementById("navCalc")

const dashboardContainer = document.getElementById("dashboardContainer")
const calcContainer = document.getElementById("calcContainer")

function dashboardNavigation() {
  navDashboard.addEventListener("click", () => {
    dashboardContainer.classList.remove("hidden")
    calcContainer.classList.add("hidden")
    navDashboard.classList.add("header-nav-active")
    navCalc.classList.remove("header-nav-active")
  })

  navCalc.addEventListener("click", () => {
    dashboardContainer.classList.add("hidden")
    calcContainer.classList.remove("hidden")
    navCalc.classList.add("header-nav-active")
    navDashboard.classList.remove("header-nav-active")

  })
};


dashboardNavigation();
