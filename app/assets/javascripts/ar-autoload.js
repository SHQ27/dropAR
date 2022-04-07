$(document).ready(function() {
    //Reload after focus
    var localStoragePlaystore = localStorage.getItem('playStoreAccessed');
    var playStoreAccessed = localStoragePlaystore && ((localStoragePlaystore - 150000) > Date.now()) ? true : false;
    var blurred = false;
    var accessedAR = false;
    var checkedCompatibility = false;


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
                document.getElementById('AndroidLink').click();
            } 
        }
    };

    //Autoload
    var counter = 0;
    var checkExist = setInterval(function() {
        ++counter;
        isIOS = getIOSVersion();
        let compatible = checkCompatibility();
        if (counter > 1) {
            if (compatible) {
                if (isIOS) {
                    clearInterval(checkExist);
                    document.getElementById('IOSLink').click();
                }
                accessedAR = true;
            } else {
                handleFallback();
            }
        }
    }, 1000);

    function checkCompatibility() {
        if (!checkedCompatibility) {
            checkedCompatibility = true;
            iOSVersion = getIOSVersion();    
            if (iOSVersion && iOSVersion < 13) {
                alert('La versión de tu sistema operativo debe ser 13 o superior para acceder al contenido');
                return false;
            } 
            let iOS = iOSVersion ? true : false;

            if (!iOS) {
                var ticks = 0;
                setTimeout(function timeoutCallback(ticks) {
                    var shadow = $('#modelViewer')[0].shadowRoot;
                    var arButton = $(shadow).find('#default-ar-button');
                    console.log(shadow);
                    console.log(arButton.length);
                    arButton[0].click();
                    viewerAttempt += 1;

                    if (ticks > 10) {
                        if (!playStoreAccessed && confirm('Para acceder al contenido debe descargar un componente de Google Play ¿Desea proceder?')) {
                            localStorage.setItem('playStoreAccessed', Date.now());
                            checkedCompatibility = true;
                            window.open('https://play.google.com/store/apps/details?id=com.google.ar.core&hl=es_AR&gl=US', '_blank').focus();
                            return true;
                        } else {
                            return false;
                        }
                        return;
                    }
                    setTimeout(timeoutCallback, 0, ++ticks);
                }, 1000, 0);
            } else {
                return true;
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
        callbackLink = document.getElementById('callback');
        if (callbackLink) {
            callbackLink.click();
        } else {
            window.close();
        }
    }
});
