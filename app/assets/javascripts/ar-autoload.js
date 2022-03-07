$(document).ready(function() {
    //Reload after focus
    var localStoragePlaystore = localStorage.getItem('playStoreAccessed');
    var playStoreAccessed = localStoragePlaystore && ((localStoragePlaystore - 150000) > Date.now()) ? true : false;
    var blurred = false;
    var accessedAR = false;
    var usdzUrl = $('#usdz-url').val();
    var glbUrl = $('#glb-url').val();

    window.onblur = function() { blurred = true; };
    window.onfocus = function() {
        if (blurred && accessedAR && !playStoreAccessed) {
            //Redirect post load filter.
            window.location.href = callback; 
            clearInterval(checkExist);
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
    var checkExist = setInterval(function() {
        ++counter;
        isIOS = getIOSVersion();
        checkCompatibility();
        if (counter > 300) {
            if (isIOS) {
                alert('IOS');
                $('#IOSLink').click();
            } else {
                alert('ELSE')
                $('#AndroidLink').click();
            }
            clearInterval(checkExist);
            accessedAR = true;
        }
    }, 100);

    function checkCompatibility() {
        iOSVersion = getIOSVersion();    
        if (iOSVersion && iOSVersion < 13) {
            alert('La versión de tu sistema operativo debe ser 13 o superior para acceder al contenido');
            handleFallback();
            return false;
        }
        let iOS = iOSVersion ? true : false;

        if (!iOS) {
            if (!playStoreAccessed && confirm('Para acceder al contenido debe descargar un componente de Google Play ¿Desea proceder?')) {
                localStorage.setItem('playStoreAccessed', Date.now());
                window.open('https://play.google.com/store/apps/details?id=com.google.ar.core&hl=es_AR&gl=US', '_blank').focus();
                return true;
            } else {
                handleFallback();
                return false;
            }
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
