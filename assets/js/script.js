$(function() {

// Initial loading script (via https://github.com/potomak/jquery-instagram)
  var
    insta_container = $(".pics"),
    insta_next_url

  insta_container.instagram({
      hash: 'coldplaylive',
      clientId : 'a0ce1d337ae34c388aa2471f1065ed99',
      image_size: 'low_resolution',
      show : 20,
      onComplete : function (photos, data) {
      insta_next_url = data.pagination.next_url
    }
  })

  $('button').live('click', function(){
    var
      button = $(this),
      text = button.text()

    if (button.text() != 'Loading…'){
      button.text('Loading…')
      insta_container.instagram({
          next_url : insta_next_url,
          image_size: 'low_resolution',
          show : 20,
          onComplete : function(photos, data) {
          insta_next_url = data.pagination.next_url
          button.text(text)
        }
      })
    }
  });

  // Fake 'click' when user hits the end of page
  $(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
      $('button').click();
    }
  });

});
