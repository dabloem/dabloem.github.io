

function openMenu(){

    $('div.menu').removeClass('hide');
    $('div.circle').addClass('expand');
    $('div.mobile_logo').addClass('hide');

    $('div.burger').addClass('open');
    $('div.x, div.y, div.z').addClass('collapse');
    $('.menu li').addClass('animate');

    setTimeout(function(){
        $('div.y').hide();
        $('div.x').addClass('rotate30');
        $('div.z').addClass('rotate150');
    }, 70);
    setTimeout(function(){
        $('div.x').addClass('rotate45');
        $('div.z').addClass('rotate135');
    }, 120);



}

function closeMenu(){
    $('div.menu').addClass('hide');
    $('div.burger').removeClass('open');
    $('div.mobile_logo').removeClass('hide');

    $('div.x').removeClass('rotate45').addClass('rotate30');
    $('div.z').removeClass('rotate135').addClass('rotate150');
    $('div.circle').removeClass('expand');
    $('.menu li').removeClass('animate');

    setTimeout(function(){
        $('div.x').removeClass('rotate30');
        $('div.z').removeClass('rotate150');
    }, 50);
    setTimeout(function(){
        $('div.y').show();
        $('div.x, div.y, div.z').removeClass('collapse');
    }, 70);

}