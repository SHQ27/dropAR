$(document).ready(function() {
    //Reload after focus
    var playStoreAccessed = false;
    var blurred = false;
    window.onblur = function() { blurred = true; };
    window.onfocus = function() {
        let currentURL = decodeURI(window.location.href);
        let currentParams = window.location.search;
        var searchParams = new URLSearchParams(currentParams);
        var hasCallback = searchParams.has('callback');

        if (blurred & hasCallback && clicked && !playStoreAccessed) {
            //Redirect post load filter.
            var callback = searchParams.get("callback");
            callback = callback.replaceAll('"', '');
            window.location.href = callbackURL; 
            return false;
        } else {
            if(blurred && playStoreAccessed) {
                //Reload post playstore
                window.location.reload()
            } else if (blurred && window.history.length > 3) {
                //Return to referrer
                clearInterval(checkExist);
                window.history.back();
            } else {
                clearInterval(checkExist);
            }
        }
    };

    //Autoload
    var counter = 0;
    var checkExist = setInterval(function() {
        ++counter;
        shadow = $('#modelViewer')[0].shadowRoot;
        arButton = $(shadow).find('#default-ar-button');
        if (arButton.length && counter >= 5) {
            clicked = true;
            arButton[0].click();
        }

        if (counter >= 30) {
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
                playStoreAccessed = true;
                window.open('https://play.google.com/store/apps/details?id=com.google.ar.core&hl=es_AR&gl=US', '_blank').focus();
                return true;
            } else {
                //TODO: Si vengo de QR quedo atrapado en el load
                window.history.back()
                return false;
            }
        }
    }

    function getIOSVersion() {
        let version = false;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            // supports iOS 2.0 and later: <http://bit.ly/TJjs1V>
            let v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            versionArr = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            version = versionArr[0];
        }
        return version;
    }
});
