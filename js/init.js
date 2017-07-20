(function($){
  $(function(){

    $('.button-collapse').sideNav({
         menuWidth: 200, // Default is 300
         edge: 'right' // Choose the horizontal origin
    });
    $('.modal').modal();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('select').material_select();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
      });
  }); // end of document ready
})(jQuery); // end of jQuery name space
