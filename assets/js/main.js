var name_show_en = "Arian";
var name_show_per = "C V";

function check_is_pwa() {
    let is_pwa = false;
    if (window.matchMedia('(display-mode: standalone)').matches) {
        is_pwa = true;
    }
    return is_pwa;
}

function check_is_mobile() {
    let is_mobile = false;
    var checkMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (checkMobile) {
        is_mobile = true;
    }
    return is_mobile;
}

function show_modal_save() {
    let os = get_os();
    let html = get_android_guide();
    if (os == 'i') {
        html = get_ios_guide();
    }

    html = get_logo() + "<div>" + html + "<br></div>";
    $(".modal").addClass("modal_help");

    modal_custom(html, true);
}

function get_os() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;


    if (/android/i.test(userAgent)) {
        return "a";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "i";
    }

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "w";
    }

    return "u";
}

function get_android_guide() {
    let html = '<div class="help_install_detail">\n\
            <ol class="ol_help">1. Open link in “Chrome”</ol>\n\
            <ol class="ol_help">2. Tap the menu icon &nbsp; &nbsp;&#9776;&nbsp; or &nbsp; &#8285;  &nbsp;</ol>\n\
            <ol class="ol_help">3. Tap “Add to Home Screen.”</ol>\n\
            <ol class="ol_help">4. Tap “Add.” </ol>\n\
        </div>';
    return html;
}

function get_ios_guide() {
    let html = '<div class="help_install_detail">\n\
            <ol class="ol_help">1. Open link in “Safari”</ol>\n\
            <ol class="ol_help">2. Tap the icon &nbsp;<img src="assets/img/safari.png" style="margin-top: 5px;" width="25" height="25"></ol>\n\
            <ol class="ol_help">3. Tap “Add to Home Screen.”</ol>\n\
            <ol class="ol_help">4. Tap “Add.” </ol>\n\
        </div>';
    return html;
}

function get_logo() {
    let html = '<div class="card-panel card-save center">\n\
            <i style="position: absolute; top :0px; right: 0px; opacity: 0.3; padding:10px;" class="material-icons modal-close">close</i>\n\
            <img class="center responsive-img" src="assets/img/lg.png" width="55" style="border-radius: 5px; margin-top: 10px;" alt="">\
            <h5 class="center"> ' + name_show_en + '</h5>\n\
            <p class="center grey-text">' + name_show_per + '</p>\n\
    </div>';
    return html;
}

function set_data() {
    return; 
}


function download_cv() {
    window.open("Arian_CV.pdf", '_blank');
}
