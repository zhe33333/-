document.addEventListener('DOMContentLoaded', () => {
  const servicesNavItem = document.querySelector('.nav-item.services');
  const membershipNavItem = document.querySelector('.nav-item.membership');
  const searchArea = document.querySelector('.search-area');
  const searchInput = document.querySelector('.search-input');
  const searchPlaceholder = document.querySelector('.search-placeholder');

  if (servicesNavItem) {
    servicesNavItem.addEventListener('mouseenter', () => {
      servicesNavItem.classList.add('dropdown-active');
      const dropdownMenu = servicesNavItem.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.display = 'flex';
      }
    });
    servicesNavItem.addEventListener('mouseleave', () => {
      servicesNavItem.classList.remove('dropdown-active');
      const dropdownMenu = servicesNavItem.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  if (membershipNavItem) {
    membershipNavItem.addEventListener('mouseenter', () => {
      membershipNavItem.classList.add('dropdown-active');
      const dropdownMenu = membershipNavItem.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.display = 'flex';
      }
    });
    membershipNavItem.addEventListener('mouseleave', () => {
      membershipNavItem.classList.remove('dropdown-active');
      const dropdownMenu = membershipNavItem.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
      }
    });
  }

  if (searchArea) {
    searchArea.addEventListener('click', () => {
      searchArea.classList.add('active');
      if (searchPlaceholder) {
        searchPlaceholder.style.display = 'none';
      }
      if (searchInput) {
        searchInput.style.display = 'block';
        searchInput.style.color = 'white'; // Ensure typed text is white
        searchInput.focus();
      }
    });

    if (searchInput) {
      searchInput.addEventListener('blur', () => {
        if (searchInput.value === '') {
          searchArea.classList.remove('active');
          if (searchPlaceholder) {
            searchPlaceholder.style.display = 'block';
          }
          searchInput.style.display = 'none';
        }
      });
    }
  }
});
