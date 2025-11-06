document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");

  header.innerHTML = `
    <div class="top-header bg-white d-flex justify-content-between align-items-center px-4 py-2 border-bottom fixed-top"
         style="z-index: 1030; left: 250px; width: calc(100% - 250px);">
        <div class="search-box position-relative d-flex align-items-center" style="width: 250px;">
            <i class="fas fa-search text-muted position-absolute ms-2"></i>
            <input type="text" class="form-control border-start-0" placeholder="Search...">
        </div>
        <div class="header-icons d-flex align-items-center gap-3">
            <i class="fas fa-bell fs-5 text-dark"></i>
            <i class="fas fa-cog fs-5 text-dark"></i>
        </div>
    </div>

    <!-- Spacer to prevent overlap -->
    <div style="height: 60px;"></div>
  `;
});
