// load
addEventListener("load", function() {
    setTimeout(hideURLbar, 0);
}, false);

function hideURLbar() {
    window.scrollTo(0, 1);
}




window.jQuery || document.write('<script src="js/vendor/jquery-1.11.1.min.js"><\/script>')

// toTop

jQuery(document).ready(function($) {
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
});

$(document).ready(function() {
    $().UItoTop({
        easingType: 'easeOutQuart'
    });
});



// cart
$(function() {

    var goToCartIcon = function($addTocartBtn) {
        var $cartIcon = $(".my-cart-icon");
        var $image = $('<img width="30px" height="30px" src="' + $addTocartBtn.data("image") + '"/>').css({
            "position": "fixed",
            "z-index": "999"
        });
        $addTocartBtn.prepend($image);
        var position = $cartIcon.position();
        $image.animate({
            top: position.top,
            left: position.left
        }, 500, "linear", function() {
            $image.remove();
        });
    }

    $('.my-cart-btn').myCart({
        classCartIcon: 'my-cart-icon',
        classCartBadge: 'my-cart-badge',
        affixCartIcon: true,
        checkoutCart: function(products) {
            $.each(products, function() {
                console.log(this);
            });
        },
        clickOnAddToCart: function($addTocart) {
            goToCartIcon($addTocart);
        },
        getDiscountPrice: function(products) {
            var total = 0;
            $.each(products, function() {
                total += this.quantity * this.price;
            });
            return total * 1;
        }
    });

});