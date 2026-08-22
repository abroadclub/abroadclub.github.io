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
});
