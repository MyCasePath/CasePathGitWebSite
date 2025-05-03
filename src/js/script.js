
function ToggleNav() {
    const sidebar = document.getElementById("mySidebar");
    const main = document.getElementById("myContent");
  
    if (sidebar.style.width === "200px") {
      // Sidebar is open — close it
      sidebar.style.width = "0";
      main.style.marginLeft = "0";
    } else {
      // Sidebar is closed — open it
      sidebar.style.width = "200px";
      main.style.marginLeft = "200px";
    }
  }

  