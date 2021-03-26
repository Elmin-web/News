$(".profile .profile-name").on("click", (e) => {
  e.stopPropagation();
  $(".dropdown-content").slideToggle(200);
});
$(".dropdown-content").on("click", (e) => {
  e.stopPropagation();
});
$(document).on("click", (e) => {
  $(".dropdown-content").slideUp(200);
});
