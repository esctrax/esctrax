  window.fbAsyncInit = function() {
    FB.init({
      appId      : '442196062655535',
      xfbml      : true,
      version    : 'v2.4'
    });
  };



(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ja_JP/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));