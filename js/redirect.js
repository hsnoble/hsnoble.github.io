if($("meta[name='pinProtected']").attr("content") == 'true'){
    console.log("checking..")
    const origin = $(location)[0].pathname.replace('/', '');
    if(!getCookie('pinEntered'))
    {
        $(location).attr('href','./passwordProtected.html?origin='+origin);
    }
    else{
        console.log('cookie detected');
    }
}

if(!getCookie('pinEntered')){$('button#logout').hide();}
else{$('button#logout').show();}

$('button#logout').on('click', function(e){
    eraseCookie('pinEntered');
    $(location).attr('href', $(location)[0].pathname);
});