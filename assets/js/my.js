function body_load() {
    window.setTimeout(function () {
        typeWriter();
    }, 250);
}

var cnt = 0;
const txt = "Hi, I'm Arian";
const speed = 120;

function typeWriter() {
    if (cnt < txt.length) {
        document.getElementById("title_name").innerHTML += txt.charAt(cnt);
        cnt++;
        setTimeout(typeWriter, speed);
    } else {
        anime_title();
    }
}

function anime_title() {
    $("#title_detail").show();
    anime({
        targets: "#title_detail path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutQuad',
        duration: 8000
    });
    window.setTimeout(function () {
        // show_next_button("show_desktop_div()");
        show_desktop_div();
    }, 1750);
    // window.setTimeout(show_desktop_div, 2000);
}

function show_webapp_div() {
    next_button_down();
    window.setTimeout(function () {
      $("#webapp_div").show();
      $('html, body').animate({
          scrollTop: $("#webapp_div").offset().top - 20
      }, 500);
      window.setTimeout(function(){
        $("#webapp_title").fadeIn(1000);
        window.setTimeout(function () {
            $("#webapp_detail").fadeIn(750);
            show_skills_webapp();
            show_div_video();
        }, 750)

      },500)
    }, 500)
}

function show_skills_webapp(){
  show_next_button("show_skills_webapp()")
  anime({
      targets: '.skillsW',
      translateX: 250
    });
  /*$(".skillsW").hide();
  window.setTimeout(function(){
    $(".skillsW").show();
  },50);
  var tl = anime.timeline({});
  tl.add({
      targets: ".skillsW",
      scale: 2,
      duration: 2000
  });
  .add({
      targets: ".skillsW",
      easing: 'easeInOutQuad',
      opacity: 1,
      keyframes: [
          {translateX: -20},
          {translateX: 10},
          {translateX: 0}
      ],
      duration: 5000
  });*/
}

function show_div_video(){
  window.setTimeout(function () {
      $("#div_video").show();
  }, 2500);
}

function show_desktop_div() {
    next_button_down();
    window.setTimeout(function () {
        // $("#next_button").removeClass("grey-text").addClass("black-text");
        $(".parallax-container").removeClass("back_before").addClass("back_after");
        window.setTimeout(show_desktop_detail, 1200);
    }, 500)
}

function show_desktop_detail() {
    $("#desktop_div").show();
    $("#desktop_title").fadeIn(1000);
    window.setTimeout(function () {
        $("#desktop_detail").fadeIn(1200);
    }, 1200)
    window.setTimeout(show_destkop_pictures, 3000)
}

function show_destkop_pictures() {
    window.setTimeout(function () {
        $("#div_desktop_images").show();
        $('html, body').animate({
            scrollTop: $("#div_desktop").offset().top - 20
        }, 500);
    }, 50);

    window.setTimeout(function () {
        show_next_button("show_webapp_div()")
    }, 2500);

    var tl = anime.timeline({});
    tl.add({
        targets: ".desk_application",
        translateY: 4000,
        duration: 50
    }).add({
        targets: ".desk_application",
        easing: 'easeInOutQuad',
        translateY: 0,
        direction: 'alternate',
        delay: function (el, i, l) {
            return i * 125;
        },
        duration: 2000
    });
}

function show_next_button(onclick) {
    window.setTimeout(function () {
        $("#next_button").attr("onclick", onclick);
    }, 50);
    var tl = anime.timeline({});
    tl.add({
        targets: "#next_button",
        translateY: 600,
        opacity: 0.8,
        duration: 50
    }).add({
        targets: "#next_button",
        easing: 'easeInOutQuad',
        opacity: 0.8,
        keyframes: [
            // {translateY: -20},
            // {translateY: 10},
            {translateY: 0}
        ],
        duration: 500
    });
}

function next_button_down() {
    anime({
        targets: "#next_button",
        easing: 'easeInOutQuad',
        translateY: 600,
        opacity: 0,
        duration: 500
    });
}
