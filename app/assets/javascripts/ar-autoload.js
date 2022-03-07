$(document).ready(function() {
    //Reload after focus
    var localStoragePlaystore = localStorage.getItem('playStoreAccessed');
    var playStoreAccessed = localStoragePlaystore && ((localStoragePlaystore - 150000) > Date.now()) ? true : false;
    var blurred = false;
    var accessedAR = false;

    window.onblur = function() { blurred = true; };
    window.onfocus = function() {
        if (blurred && accessedAR && !playStoreAccessed) {
            //Redirect post load filter.
            clearInterval(checkExist);
            window.location.href = callback; 
            return false;
        } else {
            if(blurred && playStoreAccessed) {
                //Reload post playstore
                window.location.reload()
            } 
        }
    };

    //Autoload
    var counter = 0;
    alert
    var checkExist = setInterval(function() {
        ++counter;
        isIOS = getIOSVersion();
        let compatible = checkCompatibility();
        if (counter > 1) {
            if (compatible) {
                if (isIOS) {
                    alert('IOS');
                    $('#IOSLink').click();
                } else {
                    alert('ELSE')
                    $('#AndroidLink').click();
                }
                clearInterval(checkExist);
                accessedAR = true;
            } else {
                handleFallback();
            }
        }
    }, 1000);

    function checkCompatibility() {
        iOSVersion = getIOSVersion();    
        if (iOSVersion && iOSVersion < 13) {
            alert('La versión de tu sistema operativo debe ser 13 o superior para acceder al contenido');
            return false;
        } 
        let iOS = iOSVersion ? true : false;

        if (!iOS) {
            if (!playStoreAccessed && confirm('Para acceder al contenido debe descargar un componente de Google Play ¿Desea proceder?')) {
                localStorage.setItem('playStoreAccessed', Date.now());
                window.open('https://play.google.com/store/apps/details?id=com.google.ar.core&hl=es_AR&gl=US', '_blank').focus();
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    function getIOSVersion() {
        let version = false;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            let v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            versionArr = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            version = versionArr[0];
        }
        return version;
    }

    function handleFallback() {
        callbackLink = $('#callback')
        if (callbackLink) {
            callbackLink.click();
        } else {
            window.close();
        }
    }
});
