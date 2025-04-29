
function ToggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("main");
  
    if (sidebar.style.width === "250px") {
      // Sidebar is open — close it
      sidebar.style.width = "0";
      main.style.marginLeft = "0";
    } else {
      // Sidebar is closed — open it
      sidebar.style.width = "250px";
      main.style.marginLeft = "250px";
    }
  }
