document.addEventListener("DOMContentLoaded", function () {
  // --- 服務項目下拉選單 ---
  const servicesNavItem = document.querySelector(".nav-item.services");
  const servicesDropdown = servicesNavItem.querySelector(".dropdown-menu");

  if (servicesNavItem) {
    // 滑鼠移入時顯示選單
    servicesNavItem.addEventListener("mouseenter", () => {
      servicesDropdown.style.display = "flex";
    });

    // 滑鼠移出時隱藏選單
    servicesNavItem.addEventListener("mouseleave", () => {
      servicesDropdown.style.display = "none";
    });
  }

  // --- 會員中心下拉選單 ---
  const membershipNavItem = document.querySelector(".nav-item.membership");
  const membershipDropdown = membershipNavItem.querySelector(".dropdown-menu");

  if (membershipNavItem) {
    // 滑鼠移入時顯示選單
    membershipNavItem.addEventListener("mouseenter", () => {
      membershipDropdown.style.display = "flex";
    });

    // 滑鼠移出時隱藏選單
    membershipNavItem.addEventListener("mouseleave", () => {
      membershipDropdown.style.display = "none";
    });
  }

  // --- 搜尋框點擊展開 ---
  const searchArea = document.querySelector(".search-area");
  const searchInput = searchArea.querySelector(".search-input");
  const searchPlaceholder = searchArea.querySelector(".search-placeholder");

  if (searchArea) {
    searchArea.addEventListener("click", (e) => {
      // 防止點擊輸入框時又觸發收合
      if (e.target !== searchInput) {
        searchArea.classList.add("active");
        searchInput.style.display = "block";
        searchPlaceholder.style.display = "none";
        searchInput.focus();
      }
    });

    // 點擊其他地方或輸入框失焦時收合
    searchInput.addEventListener("blur", () => {
      searchArea.classList.remove("active");
      // 只有在輸入框為空時才隱藏
      if (searchInput.value === "") {
        searchInput.style.display = "none";
        searchPlaceholder.style.display = "block";
      }
    });
  }
});
