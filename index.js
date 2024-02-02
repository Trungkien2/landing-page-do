window.addEventListener("load", () => {
  const loadingContainer = document.querySelector(".loading-container");
  const loadingContainerBody = document.querySelector(
    ".loading-container-body"
  );
  loadingContainerBody.style.transition = "opacity 1s";
  loadingContainerBody.style.opacity = 1;

  setTimeout(() => {
    loadingContainer.style.display = "none";
  }, 3000);
});
