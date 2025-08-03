document.addEventListener("DOMContentLoaded", function () {
  // --- 服務項目下拉選單 ---
  const servicesNavItem = document.querySelector(".nav-item.services");

  // 滑鼠移入時顯示選單
  servicesNavItem.addEventListener("mouseenter", () => {
    servicesNavItem.classList.add("dropdown-active");
  });

  // 滑鼠移出時隱藏選單
  servicesNavItem.addEventListener("mouseleave", () => {
    servicesNavItem.classList.remove("dropdown-active");
  });

  // --- 會員中心下拉選單 ---
  const membershipNavItem = document.querySelector(".nav-item.membership");

  // 滑鼠移入時顯示選單
  membershipNavItem.addEventListener("mouseenter", () => {
    membershipNavItem.classList.add("dropdown-active");
  });

  // 滑鼠移出時隱藏選單
  membershipNavItem.addEventListener("mouseleave", () => {
    membershipNavItem.classList.remove("dropdown-active");
  });

  // --- 搜尋框點擊展開 ---
  const searchArea = document.querySelector(".search-area");
  const searchInput = searchArea.querySelector(".search-input");

  searchArea.addEventListener("click", (e) => {
    // 防止點擊輸入框時又觸發收合
    if (e.target !== searchInput) {
      searchArea.classList.add("active");
      searchInput.focus();
    }
  });

  // 點擊其他地方或輸入框失焦時收合
  searchInput.addEventListener("blur", () => {
    // 只有在輸入框為空時才收合
    if (searchInput.value === "") {
      searchArea.classList.remove("active");
    }
  });
});
