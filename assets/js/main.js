document.addEventListener("DOMContentLoaded", function () {
  var tables = document.querySelectorAll(".table-scroll");

  tables.forEach(function (el) {
    var hint = el.nextElementSibling;
    if (!hint || !hint.hasAttribute("data-scroll-hint")) hint = null;

    function update() {
      var overflow = el.scrollWidth > el.clientWidth + 4;
      var atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;

      el.classList.toggle("has-overflow", overflow);
      el.classList.toggle("at-end", atEnd);
      if (hint) hint.classList.toggle("is-visible", overflow && !atEnd);
    }

    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  });

  var rotator = document.querySelector("[data-rotator]");
  if (rotator) {
    var phrases = [
      "ficar parado.",
      "esperar a vida acontecer.",
      "aceitar o que sobrou.",
      "ver os outros saírem na frente.",
      "ficar na zona de conforto.",
      "seguir a manada."
    ];
    var i = 0;
    setInterval(function () {
      rotator.classList.add("is-swapping");
      setTimeout(function () {
        i = (i + 1) % phrases.length;
        rotator.textContent = phrases[i];
        rotator.classList.remove("is-swapping");
      }, 320);
    }, 2200);
  }
});
