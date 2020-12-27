const listBtns = document.querySelectorAll(".work__type");
const works = document.querySelectorAll(".work-box");

document.addEventListener("click", (e) => {
  const handleFilterBtnClick = (e) => {
    for (let listBtn of listBtns) {
      listBtn.classList.remove("active-btn");
    }
    e.target.classList.add("active-btn");
  };
  if (e.target.classList.contains("all")) {
    for (let work of works) {
      work.classList.remove("hidden");
    }
    handleFilterBtnClick(e);
  }
  if (e.target.classList.contains("front")) {
    for (let work of works) {
      work.classList.remove("hidden");
      if (work.dataset.type !== "front") {
        work.classList.add("hidden");
      }
    }
    handleFilterBtnClick(e);
  }
  if (e.target.classList.contains("back")) {
    for (let work of works) {
      work.classList.remove("hidden");
      if (work.dataset.type !== "back") {
        work.classList.add("hidden");
      }
    }
    handleFilterBtnClick(e);
  }
  if (e.target.classList.contains("graphics")) {
    for (let work of works) {
      work.classList.remove("hidden");
      if (work.dataset.type !== "graphics") {
        work.classList.add("hidden");
      }
    }
    handleFilterBtnClick(e);
  }
});
