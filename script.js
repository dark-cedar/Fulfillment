const third = document.getElementById("third");
const panel = document.getElementById("chat_snippet");
let opened = false;

third.addEventListener("click", () => {
  opened ? collapse(panel) : expand(panel);
  opened = !opened;

  third.style.backgroundColor = opened ? "#FFFAEB" : "#FDFDFD";
});

function expand(el) {
  el.classList.add("open");
  el.style.maxHeight = "0px";
  el.style.opacity = "0";

  requestAnimationFrame(() => {
    el.style.maxHeight = el.scrollHeight + "px";
    el.style.opacity = "1";
  });

  el.addEventListener("transitionend", function onEnd(e) {
    if (e.propertyName === "max-height") {
      el.style.maxHeight = "none";
      el.removeEventListener("transitionend", onEnd);
    }
  });
}

function collapse(el) {

  el.style.maxHeight = el.scrollHeight + "px";

  requestAnimationFrame(() => {
    el.style.maxHeight = "0px";
    el.style.opacity = "0";
  });

  el.addEventListener("transitionend", function onEnd(e) {
    if (e.propertyName === "max-height") {
      el.classList.remove("open");
      el.removeEventListener("transitionend", onEnd);
    }
  });
}