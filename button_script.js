// Built by @traf
// https://tr.af

// Replace access token with your own
// Generate here: https://instagram.pixelunion.net

$(function(){
  $.get('https://api.instagram.com/v1/users/self/?access_token=27019167.1677ed0.27958a214ce141dfaaf18ddb103e33e7',
        function(data) {
    $("#button-count").html((kFormatter(data.data.counts.followed_by)));
  }
       )
  function kFormatter(num) {
    return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num)
  }

});