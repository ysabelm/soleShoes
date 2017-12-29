$(document).ready(() => {

  $('.login-button').on('click', () => {
    $('.login-form').toggle();
  });

  $('.menu-button').on('mouseenter', () => {
    $('.nav-menu').removeClass('hide');
    $('.menu-button').addClass('button-active');
  })

  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
    $('.menu-button').animate({
      color: '#EFEFEF',
      backgroundColor: '#303030',
      fontSize: '18px'
    }, 200);
  })

}); 
