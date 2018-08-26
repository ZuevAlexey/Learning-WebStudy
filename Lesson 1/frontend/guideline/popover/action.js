(function () {
    var containers = document.querySelectorAll('.popover');

    Array.from(containers).map(function (container) {
        var btn = container.querySelector('.pp-btn');
        var trigger = container.dataset.trigger;

        const OPEN_CLASS = 'open';
        if (trigger === 'click') {
            btn.onclick = function () {
                if (container.classList.contains(OPEN_CLASS)) {
                    container.classList.remove(OPEN_CLASS);
                } else {
                    container.classList.add(OPEN_CLASS);
                }
            };
        } else {
            btn.onmouseover = function () {
                container.classList.add(OPEN_CLASS);
            };
            btn.onmouseout = function () {
                container.classList.remove(OPEN_CLASS);
            };
        }
    });
})();
