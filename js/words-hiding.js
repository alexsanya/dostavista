$(document).ready(function () {
    $.fn.replaceText = function() {  
        return this.each(function(){  
            var v1, v2, rem = [];
            $(this).find("*").andSelf().contents().each(function(){
                if(this.nodeType === 3) {
                    v1 = this.nodeValue;
                    v2 = v1.split(' ').map(function(word){return '<span class="clickable">'+word+"</span>"}).join(' ');
                    $(this).before(v2);  
                    rem.push(this);
                }
            });
            if(rem.length) $(rem).remove();
        });
    };

    $('body').replaceText();
    $('.clickable').css('cursor', 'not-allowed').click(function(){$(this).hide()});
});