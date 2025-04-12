
function toggleDropdown() {
    const dropdown = document.getElementById('movie-dropdown');
    const icon = document.getElementById('dropdown-icon');
  
    dropdown.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  
    // Lưu trạng thái vào localStorage
    const isOpen = !dropdown.classList.contains('hidden');
    localStorage.setItem('dropdown-movie-open', isOpen ? 'true' : 'false');
  }
  
  // Khi load trang: kiểm tra trạng thái dropdown
  document.addEventListener("DOMContentLoaded", function () {
    const dropdown = document.getElementById("movie-dropdown");
    const icon = document.getElementById("dropdown-icon");
  
    // Nếu localStorage đã ghi nhận trạng thái mở
    const savedState = localStorage.getItem('dropdown-movie-open');
    if (savedState === 'true') {
      dropdown.classList.remove('hidden');
      icon.classList.add('rotate-180');
    }
  });

  const currentPage = window.location.pathname.split("/").pop().split("?")[0].split("#")[0];
  const canonical = currentPage.replace(/^edit/, '');


  document.querySelectorAll("aside a[href$='.html']").forEach(link => {
    const linkPage = link.getAttribute("href").split("?")[0].split("#")[0];
    if (linkPage === currentPage) {
      link.classList.add("text-blue-400", "font-semibold"); // tô sáng
    } else {
      link.classList.remove("text-blue-400", "font-semibold"); // xóa sáng các mục khác
    }
  });
  
  
