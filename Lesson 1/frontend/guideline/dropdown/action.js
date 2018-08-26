(function () {
    const OPEN_CLASS = 'open';
    const SELECTED_CLASS = 'selected';

    var containers = document.querySelectorAll('.dropdown');

    Array.from(containers).map(function (container) {
        var btn = container.querySelector('.dd-btn');


        btn.onclick = function() {
            console.log('btn');
            if (container.classList.contains(OPEN_CLASS)) {
                container.classList.remove(OPEN_CLASS);
            } else {
                container.classList.add(OPEN_CLASS);
            }
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

    //TODO:закрывать меню, когда клик мимо
    /*
    document.onclick = function(e){
        console.log('window');
        if(!e.target.classList.contains(OPEN_CLASS) && !e.target.classList.contains('.dropdown')){
            var openElement = document.querySelector('.dropdown.open');
            if(openElement !== null){
                openElement.classList.remove(OPEN_CLASS);
            }
        }
    };
    */
})();
