$(document).ready(function () {

  $('.messenger-panel__list, .messenger-panel__chat').click(function () {
    $('.messenger-panel__list, .messenger-panel__chat, .messenger-contacts, .messenger-chat').toggleClass('active');
  });

  $('.login-panel__burger').click(function () {
    $('.login-panel__burger,.login-panel').toggleClass('active');
  });
});
