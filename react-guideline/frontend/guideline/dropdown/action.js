(function () {
    const OPEN_CLASS = 'open';
    const SELECTED_CLASS = 'selected';

    var containers = document.querySelectorAll('.dropdown');

    Array.from(containers).map(function (container) {
        var btn = container.querySelector('.dd-btn');

        btn.onclick = function(e) {
            if (container.classList.contains(OPEN_CLASS)) {
                container.classList.remove(OPEN_CLASS);
            } else {
                closeAnotherDropdown();
                container.classList.add(OPEN_CLASS);
            }
			e.stopPropagation();
        };

        var text = btn.querySelector('.dd-text');
        var menu = container.querySelector('.dd-menu');
        var menuElements = menu.querySelectorAll('.dd-element');
        Array.from(menuElements).map(function (element) {
            element.onclick = function() {
                var selectedElement = menu.querySelector('.dd-element.selected');
                if(element !== selectedElement){
                    selectedElement.classList.remove(SELECTED_CLASS);
                    element.classList.add(SELECTED_CLASS);
                    text.innerHTML = element.innerText;
                }

                container.classList.remove(OPEN_CLASS);
            };
        });
    });

    function closeAnotherDropdown() {
        var openElements = document.querySelectorAll('.dropdown.open');
        Array.from(openElements).map(function(element) {
            element.classList.remove(OPEN_CLASS);
        });
    }

    document.addEventListener('click', function(e){
        closeAnotherDropdown();
    });
})();
