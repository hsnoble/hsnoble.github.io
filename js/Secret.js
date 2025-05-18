class Secret{
    #hash;
    constructor(){
        this.#hash = "8d0eadf72c6ac3576d8abc9a2ff0b6ad";
    }
    getHash(){
        return this.#hash;
    }
    isVerified(secretGuess){
        if(md5(secretGuess) == this.#hash)
            return true;
        else
            return false;
    }
}

if($( "form#pin-entry" ).has("#originPath").length > 0){
    const urlParams = new URLSearchParams(window.location.search);
    $( "form#pin-entry input#originPath" ).val(urlParams.get('origin'));
}
$( "form#pin-entry" ).on( "submit", function( event ) {
    event.preventDefault();
    var secret = new Secret();
    const guess = $('form#pin-entry #pin-input').val();
    const url = window.location.origin + '/' + $('input#originPath').val();
    if($('form#pin-entry #pin-input').val() != ''){
        if(secret.isVerified(guess) == true){
            $(location).attr('href',url);
            setCookie("pinEntered",url);
        }
    }
    $('form#pin-entry').trigger("reset");
});