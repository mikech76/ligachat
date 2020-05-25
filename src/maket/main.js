$(document).ready(function () {
  $('.messenger-panel__list, .messenger-panel__chat').click(function () {
    $('.messenger-panel__list, .messenger-panel__chat, .messenger-contacts, .messenger-chat').toggleClass('active');
  });
});
