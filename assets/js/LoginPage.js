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

  // Functionality for edit icons in membership-page.html
  const editIcons = document.querySelectorAll('.card .edit-icon');

  editIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      const card = icon.closest('.card');
      if (!card) return;

      const valueDisplays = card.querySelectorAll('.display-text');
      const valueInputs = card.querySelectorAll('.edit-input');
      const editButtons = card.querySelector('.edit-buttons');

      // Toggle visibility of display spans and input fields
      valueDisplays.forEach(span => {
        span.style.display = 'none';
      });
      valueInputs.forEach(input => {
        input.style.display = 'inline-block'; // Or 'block' depending on desired layout
        input.value = input.previousElementSibling.textContent.trim() === '-' ? '' : input.previousElementSibling.textContent.trim();
      });

      // Show edit buttons
      if (editButtons) {
        editButtons.style.display = 'flex';
      }

      // Hide the edit icon
      icon.style.display = 'none';
    });
  });

  const saveButtons = document.querySelectorAll('.card .save-button');
  saveButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      if (!card) return;

      const valueDisplays = card.querySelectorAll('.display-text');
      const valueInputs = card.querySelectorAll('.edit-input');
      const editButtons = card.querySelector('.edit-buttons');
      const editIcon = card.querySelector('.edit-icon');

      // Update display spans with new input values
      valueInputs.forEach(input => {
        const displaySpan = input.previousElementSibling;
        if (displaySpan && displaySpan.classList.contains('value-display')) {
          displaySpan.textContent = input.value === '' ? '-' : input.value;
        }
        input.style.display = 'none';
      });
      valueDisplays.forEach(span => {
        span.style.display = 'inline'; // Or 'block'
      });

      // Hide edit buttons
      if (editButtons) {
        editButtons.style.display = 'none';
      }

      // Show the edit icon
      if (editIcon) {
        editIcon.style.display = 'block';
      }
    });
  });

  const cancelButtons = document.querySelectorAll('.card .cancel-button');
  cancelButtons.forEach(button => {
    button.addEventListener('click', () => {
      const card = button.closest('.card');
      if (!card) return;

      const valueDisplays = card.querySelectorAll('.display-text');
      const valueInputs = card.querySelectorAll('.edit-input');
      const editButtons = card.querySelector('.edit-buttons');
      const editIcon = card.querySelector('.edit-icon');

      // Revert input fields to original display values
      valueInputs.forEach(input => {
        const displaySpan = input.previousElementSibling;
        if (displaySpan && displaySpan.classList.contains('value-display')) {
          input.value = displaySpan.textContent.trim() === '-' ? '' : displaySpan.textContent.trim();
        }
        input.style.display = 'none';
      });
      valueDisplays.forEach(span => {
        span.style.display = 'inline'; // Or 'block'
      });

      // Hide edit buttons
      if (editButtons) {
        editButtons.style.display = 'none';
      }

      // Show the edit icon
      if (editIcon) {
        editIcon.style.display = 'block';
      }
    });
  });
});
