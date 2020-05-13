(function () {
  const toggle = document.getElementById("toggle");
  const adult = document.getElementById("adult");
  const input = document.getElementById("input");
  const text = document.getElementById("test_text");

  input.addEventListener("input", () => {
    text.innerText = input.value;
  });

  toggle.addEventListener("change", () => {
    // if (toggle.checked) {
    //   adult.classList.remove("hidden");
    // } else {
    //   adult.classList.add("hidden");
    // }
    toggle.checked
      ? adult.classList.remove("hidden")
      : adult.classList.add("hidden");
    // switch (true) {
    //   case toggle.checked:
    //     adult.classList.remove("hidden")
    //   default:
    //     adult.classList.add("hidden");
    // }
  });
})();
