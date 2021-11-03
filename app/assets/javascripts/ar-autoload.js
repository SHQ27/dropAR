$(document).ready(function() {
    //Reload after focus
//    var blurred = false;
//    window.onblur = function() { blurred = true; };
//    window.onfocus = function() { blurred && (location.reload()); };

    //Autoload
    var counter = 0;
    var checkExist = setInterval(function() {
        ++counter;
        shadow = $('#modelViewer')[0].shadowRoot;
        arButton = $(shadow).find('#default-ar-button');
        canActivateAR = $('#modelViewer')[0].canActivateAR;
        if (arButton.length && counter >= 5 && canActivateAR) {
            arButton[0].click();
            clearInterval(checkExist);
        }

        if (counter >= 60 && !canActivateAR) {
            clearInterval(checkExist);
            checkCompatibility();
        }

    }, 100);

    function checkCompatibility() {
        iOSVersion = getIOSVersion();    
        if (iOSVersion && iOSVersion < 13) {
            alert('La versión de tu sistema operativo debe ser 13 o superior para acceder al contenido');
        }
        let iOS = iOSVersion ? true : false;

        if (!iOS) {
            if (confirm('Para acceder al contenido debe descargar un componente de Google Play ¿Desea proceder?')) {
                window.open('https://play.google.com/store/apps/details?id=com.google.ar.core&hl=es_AR&gl=US', '_blank').focus();
                return true;
            } else {
                window.history.back()
                return false;
            }
        }
    }

    function getIOSVersion() {
        let version = false;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            versionArr = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            version = versionArr[0];
            alert(version);
        }
        return version;
    }
});
