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

  // --- 選項按鈕與提交按鈕連動 ---
  const optionButtons = document.querySelectorAll(".option-button");
  const submitButton = document.querySelector(".submit-button");

  // 檢查是否有任何選項按鈕被選中，並更新提交按鈕的狀態
  function updateSubmitButtonState() {
    // Array.from() 將 NodeList 轉為陣列，才能使用 .some() 方法
    // .some() 會檢查陣列中是否至少有一個元素符合條件
    const anyButtonSelected = Array.from(optionButtons).some(btn => btn.classList.contains("selected"));
    
    // 如果有任何按鈕被選中 (anyButtonSelected 為 true)，則 !anyButtonSelected 為 false，按鈕的 disabled 狀態被設為 false (即啟用)
    // 如果沒有任何按鈕被選中 (anyButtonSelected 為 false)，則 !anyButtonSelected 為 true，按鈕的 disabled 狀態被設為 true (即禁用)
    submitButton.disabled = !anyButtonSelected;
  }

  optionButtons.forEach(button => {
    button.addEventListener("click", () => {
      // 切換被點擊按鈕的 'selected' class
      button.classList.toggle("selected");
      // 每次點擊後都檢查並更新提交按鈕的狀態
      updateSubmitButtonState();
    });
  });

  // 頁面載入時，立即執行一次檢查以設定初始狀態
  // 這確保了如果頁面上有預設選中的按鈕，提交按鈕會是啟用狀態
  updateSubmitButtonState();
});
