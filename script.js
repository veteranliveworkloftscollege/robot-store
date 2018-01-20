$(function() {

    // Index loader
    setTimeout( function() {
        $('.loader').hide(500);
    }, 2000);

    // Handle Hardward form options
    $('.myForm').on('submit', function(e) {
        e.preventDefault();
        $('input[type="checkbox"]:checked').each( function() {
            console.log($(this).attr('id') + '=true');
        });

        $('input[type="radio"]:checked').each( function() {
            console.log($(this).attr('name') + ' = ' + $(this).attr('id'));
        });
    });

    // Handle robot search
    $('.searchbox').on('keyup', function() {
        var value = $(this).val();

        $('.robots-catalog li').each( function() {
            var item = $(this);

            var title = item.find('h4').text().toLowerCase();

            if( title.indexOf(value) >= 0 ) {
                $(this).show(500);
            }else{
                $(this).hide(500);
            }
        })
    })
});