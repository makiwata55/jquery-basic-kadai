$(function () {
  // class属性のbtnの要素がクリックされたら
  $('.btn').on('click', function () {
    $('.text-box').val('クリックしました！');
  });
});  