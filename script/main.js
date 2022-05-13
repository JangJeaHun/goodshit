$(function(){
// Scroll Animation (sa, 스크롤 애니메이션)
const saTriggerMargin = 300;
const saElementList = document.querySelectorAll('.sa');

const saFunc = function() {
  for (const element of saElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
        element.classList.add('show');
      }
    }
  }
}

window.addEventListener('load', saFunc);
window.addEventListener('scroll', saFunc);

$(".fa-minus").click(function (){

  $(this).hide().siblings("i").show().siblings("form").hide();
  
  
});
$(".fa-plus").click(function (){

  $(this).hide().siblings("i").show().siblings("form").show();;
  
});




});