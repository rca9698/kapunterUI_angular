var accountCoins = 0;

(function ($) {

    "use strict";

    var fullHeight = function () {

        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });

    };
    fullHeight();

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

})(jQuery);



const mobileScreen = window.matchMedia("(max-width: 990px )");
$(document).ready(function () {
    accountCoins = parseInt($('.coinsValidation').attr('data-coins'));
    $(document).on('click',".dashboard-nav-dropdown-toggle",function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(document).on('click',".menu-toggle",function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});

$(document).on('click', '.CopyToClipboard', function () {
    var copyText = $(this).attr('copyData');

    if (copyText == undefined)
        copyText = $(this).attr('copydata');
 
    navigator.clipboard.writeText(copyText);
});


$(document).click(function (e) {

    var container2 = $(".menu-toggle");
    if (container2.is(e.target) && container2.has(e.target).length > 0) {
        $(".dashboard-nav").addClass("mobile-show");
    }
    var container = $(".dashboard-nav");
    if (!container2.is(e.target) && container2.has(e.target).length === 0 && !container.is(e.target) && container.has(e.target).length === 0) {
        if (container.hasClass('mobile-show')) {
            $(".dashboard-nav").removeClass("mobile-show");
        }
    }

    $(document).on('click', '.dashboard-nav-item, .dashboard-nav-dropdown-item, .closeMobileMenu, .Burger-Menu-Close-btn', function () {

        if (!$(this).hasClass('dashboard-nav-dropdown-toggle')) {
            if (container.hasClass('mobile-show')) {
                $(".dashboard-nav").removeClass("mobile-show");
            }
        }
    });

});


// function LoadSessionData() {
//     $.ajax({
//         url: '/Account/get-user-by-id',
//         type: 'POST',
//         data: '',
//         success: function (result) {
//             if (result.returnStatus == 1) {
//                 $('.coinsValidation').attr('data-coins', result.returnVal.coins);
//                 accountCoins = parseInt($('.coinsValidation').attr('data-coins'));
//                 $('.mainWalletBalance').html(accountCoins);
//             }
//         }
//     });
// }

function ToasteRMessage(result, id) {
    if (result.returnStatus == 1) {
        toastr.success(result.returnMessage);
        $(id + ' .close').trigger('click');
        setTimeout(function () {
            location.reload();
        }, 500);
    } else {
        toastr.warning(result.returnMessage);
        $(':input[type="submit"]').prop('disabled', false);
    }
}
 
$(document).on('click','.pagination a', function(){
    var id =parseInt($('.pagination .active').attr('p-id'));
    $('.pagination a').removeClass('active');
    if($(this).attr('p-id') == 'next') {
        $(`.pagination [p-id=${id+1}]`).addClass('active');
    }
    else if($(this).attr('p-id') == 'previous') {
        $(`.pagination [p-id=${id-1}]`).addClass('active');
    }else{
        $(this).addClass('active');
    }
});
