(function() {
    const CLASS_OPEN = 'open';
    const CLASS_MODAL = '.modal-window';
    var modalWindows = document.querySelectorAll(CLASS_MODAL);
    Array.from(modalWindows).map(function(modalWindow) {
        var modalClose = function() {
            modalWindow.classList.remove(CLASS_OPEN);
        }

        var closeButton = modalWindow.querySelector('.mw-close');
        closeButton.addEventListener('click', function(e){
            modalClose();
        });

        var windowCaption = modalWindow.querySelector('.mw-caption');
        windowCaption.innerHTML = modalWindow.dataset.caption;

        if(modalWindow.classList.contains('outclick-close')){
            var overlay = modalWindow.querySelector('.mw-overlay');
            overlay.addEventListener('click', function() {
                modalClose();
            });
        }

        var openButton = modalWindow.querySelector('.mw-ok');
        openButton.addEventListener('click', function () {
            openButton.disabled = true;
            var text = modalWindow.querySelector('.mw-text');
            var prevText = text.innerText;
            text.innerHTML = modalWindow.dataset.successtext;
            setTimeout(function () {
                text.innerHTML = prevText;
                openButton.disabled = false;
                modalClose();
            }, 1500);
        });
    });

    var showModal = function(modalClass){
        var modalWindow = document.querySelector(CLASS_MODAL + '.' + modalClass);
        modalWindow.classList.add(CLASS_OPEN);
    };
    window.showModal = showModal;
})();