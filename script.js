const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    modeToggle.innerHTML =
      '<i class="fas fa-moon"  style="color : #fff;" ></i>';
  } else {
    modeToggle.innerHTML = '<i class="fas fa-sun" ></i>';
  }
});

function scrollDown() {
  window.scrollBy({ top: 500, behavior: "smooth" });
}

function handleDownload() {
  const pdfLink =
    "https://drive.google.com/uc?export=download&id=1fD-ctN8CXclmcsB4gRzl6UNQZESIi69y";

  const link = document.createElement("a");
  link.href = pdfLink;
  link.download = "resume.pdf";
  link.click();
}
