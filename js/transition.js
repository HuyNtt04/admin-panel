// transition.js
document.body.classList.add("fade-in");

document.querySelectorAll("a[href$='.html']").forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");
    if (href && !href.startsWith("#")) {
      e.preventDefault();
      document.body.classList.remove("fade-in");
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = href;
      }, 300); // thời gian khớp với CSS fade-out
    }
  });
});
