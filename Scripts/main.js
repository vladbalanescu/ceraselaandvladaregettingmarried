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
  function getTimeRemaining(date) {
    var t = new Date();
    var seconds = 59 - t.getSeconds();
    var minutes = 59 - t.getMinutes();
    var hours = 23 - t.getHours();
    var days = Math.floor((date - t) / (1000 * 60 * 60 * 24) % 365);
    var years = date.getFullYear() - t.getFullYear() - 1
    return {
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

      if (t.days == 0 && t.hours == 0 && t.minutes == 0 && t.seconds == 0 ) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }

  initializeClock(new Date("09/01/2019"));
});
