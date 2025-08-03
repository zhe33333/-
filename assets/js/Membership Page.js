document.addEventListener("DOMContentLoaded", function () {
  // --- 服務項目下拉選單 ---
  const servicesNavItem = document.querySelector(".nav-item.services");
  const servicesDropdown = servicesNavItem.querySelector(".dropdown-menu");

  // 滑鼠移入時顯示選單
  servicesNavItem.addEventListener("mouseenter", () => {
    servicesDropdown.style.display = "flex";
  });

  // 滑鼠移出時隱藏選單
  servicesNavItem.addEventListener("mouseleave", () => {
    servicesDropdown.style.display = "none";
  });

  // --- 會員中心下拉選單 ---
  const membershipNavItem = document.querySelector(".nav-item.membership");
  const membershipDropdown = membershipNavItem.querySelector(".dropdown-menu");

  // 滑鼠移入時顯示選單
  membershipNavItem.addEventListener("mouseenter", () => {
    membershipDropdown.style.display = "flex";
  });

  // 滑鼠移出時隱藏選單
  membershipNavItem.addEventListener("mouseleave", () => {
    membershipDropdown.style.display = "none";
  });

  // --- 搜尋框點擊展開 ---
  const searchArea = document.querySelector(".search-area");
  const searchInput = searchArea.querySelector(".search-input");
  const searchPlaceholder = searchArea.querySelector(".search-placeholder");

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

  // --- 側邊欄點擊效果 ---
  const sidebarItems = document.querySelectorAll(".sidebar-nav li");

  sidebarItems.forEach(item => {
    item.addEventListener("click", () => {
      // 移除所有項目上的 active-sidebar-item 類
      sidebarItems.forEach(li => li.classList.remove("active-sidebar-item"));
      // 為當前點擊的項目添加 active-sidebar-item 類
      item.classList.add("active-sidebar-item");
    });
  });

  // --- Info Cards Edit Functionality ---
  const infoCards = document.querySelectorAll(".card");

  infoCards.forEach(card => {
    const editIcon = card.querySelector(".edit-icon");
    const editButtons = card.querySelector(".edit-buttons");
    const valueDisplays = card.querySelectorAll(".value-display");
    const valueInputs = card.querySelectorAll(".value-input");
    const saveButton = card.querySelector(".save-button");
    const cancelButton = card.querySelector(".cancel-button");

    let originalValues = {};

    if (editIcon) {
      editIcon.addEventListener("click", () => {
        // Store original values
        valueDisplays.forEach(display => {
          originalValues[display.dataset.field] = display.textContent;
        });

        // Toggle visibility
        valueDisplays.forEach(display => display.style.display = "none");
        valueInputs.forEach(input => {
          input.style.display = "inline-block";
          input.value = originalValues[input.dataset.field]; // Populate input with current value
        });
        editIcon.style.display = "none";
        editButtons.style.display = "flex";
      });
    }

    if (saveButton) {
      saveButton.addEventListener("click", () => {
        valueInputs.forEach(input => {
          valueDisplays.forEach(display => {
            if (display.dataset.field === input.dataset.field) {
              display.textContent = input.value;
            }
          });
        });
        // Exit edit mode
        valueDisplays.forEach(display => display.style.display = "inline");
        valueInputs.forEach(input => input.style.display = "none");
        editIcon.style.display = "block";
        editButtons.style.display = "none";
      });
    }

    if (cancelButton) {
      cancelButton.addEventListener("click", () => {
        // Revert to original values
        valueDisplays.forEach(display => {
          display.textContent = originalValues[display.dataset.field];
        });
        // Exit edit mode
        valueDisplays.forEach(display => display.style.display = "inline");
        valueInputs.forEach(input => input.style.display = "none");
        editIcon.style.display = "block";
        editButtons.style.display = "none";
      });
    }
  });
});
