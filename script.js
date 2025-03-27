const modeToggle = document.getElementById("mode-toggle");
const body = document.body;

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  body.classList.toggle("light-mode");

  if (body.classList.contains("dark-mode")) {
    modeToggle.innerHTML =
      '<i class="fas fa-moon"  style="color : #fff;" ></i>';
    // const mailLink = document.querySelector(".folio-contact-mail a");
    // mailLink.style.color = "red";
  } else {
    modeToggle.innerHTML = '<i class="fas fa-sun" ></i>';
    // const mailLink = document.querySelector(".folio-contact-mail a");
    // mailLink.style.color = "blue";
  }
});

function scrollDown() {
  window.scrollBy({ top: 500, behavior: "smooth" });
}

function handleDownload() {
  const pdfLink =
    "https://drive.google.com/uc?export=download&id=1N4pZUR_zplqn8g4jkTrNxoUpwNnVluRe";

  const link = document.createElement("a");
  link.href = pdfLink;
  link.download = "resume.pdf";
  link.click();
}
