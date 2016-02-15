var flag = $('#flag');
$(flag)
    .mouseover(function(){
        $('#img').attr({
            src:'img/regional_home_flag_on.png',
            usemap:'#map'
        });
    })
    .mouseout(function(){
        $('#img').attr({
            src:'img/regional_home.png',
            usemap:'#map'
        });
    })
$('#flag').click(function(){
    alert('hello world')
});