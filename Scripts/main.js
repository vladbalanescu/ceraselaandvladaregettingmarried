/*------------------COPYRIGHT------------------*
* ALL RIGHTS RESERVED TO VLAD BALANESCU, 2016  *
* Personal Website                             *
* NOTICE:  All  information  contained  herein *
*          is and remains  the   property   of *
*          Vlad Balanescu.  The   intellectual *
*          and technical  concepts   contained *
*          herein  are proprietary   to   Vlad *
*          Balanescu.   Dissemination  of this *
*          information   or   reproduction  of *
*          this material is strictly forbidden *
*          unless prior written  permission is *
*          obtained    from     Vlad Balanescu.*
----------------------------------------------*/
$(document).ready(function() {

  // Preloader
  $(window).load(function() {
    $('#preloader, #preloaderText').fadeOut('slow', function() {
      $(this).remove();
    });
  });
  // Preloader - END

  // Function to slide to a particular el. on the page
  function slide(button, container) {
    button.click(function() {
      $("html, body").animate({
        scrollTop: container.offset().top - 46
      }, "slow");
      return false;
    });
  }

  slide($("#downArrow"), $("#counter-container"))
  slide($("#storyButton"), $("#counter-container"))
  slide($("#galleryButton"), $("html"))
  slide($("#upArrow"), $("html"))
  slide($("#proposalButton"), $("#proposal-container"))
  slide($("#detailsButton"), $("#details-container"))

  // Countdown
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24) + 1;
    var days = Math.floor(t / (1000 * 60 * 60 * 24) % 365);
    var years = Math.floor(t / (1000 * 60 * 60 * 24) / 365);
    return {
      'total': t,
      'seconds': seconds,
      'minutes': minutes,
      'hours': hours,
      'days': days,
      'years': years
    };
  }

  function initializeClock(endtime) {
    var seconds = $("#seconds");
    var minutes = $("#minutes");
    var hours = $("#hours");
    var days = $("#days");
    var years = $("#years");

    function updateClock() {
      var t = getTimeRemaining(endtime);

      seconds.text(('0' + t.seconds).slice(-2));
      minutes.text(('0' + t.minutes).slice(-2));
      hours.text(('0' + t.hours).slice(-2));
      days.text(t.days);
      years.text(t.years);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
  initializeClock('09/05/2020');
});
