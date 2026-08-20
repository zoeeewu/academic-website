document.querySelectorAll(".accordion").forEach((item) => {
  item.addEventListener("toggle", () => {
    item.setAttribute("aria-expanded", item.open ? "true" : "false");
  });
});
