// Module "application" (convention/pratique)
const app = {

    init: function() {

        // On démarre les modules nécessaires
        
        slider.init();
    }

}

document.addEventListener('DOMContentLoaded', app.init);