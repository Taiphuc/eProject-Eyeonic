var path = window.location.href,
    expand = true,
    contentWidth = "100%",
    contentHeight = $(window).height(),
    getsideHeight = $("#mobile-menu-items").height() + 90,
    sideHeight = getsideHeight < $(window).height() ? $(window).height() : getsideHeight;

function openSideNav(b, a) {
    if ($("#sliding-box-call-us").is(":visible")) {
        $("#close-call-us-menu").trigger("click")
    }
    $(window).scrollTop(0);
    $(".icon-nav-menu").addClass("icon-red");
    contentWidth = $(window).width();
    $("body").css({
        "overflow-x": "hidden"
    });
    $(".mobile_body_wrapper").width(contentWidth + "px").css({
        height: sideHeight + "px",
        overflow: "hidden",
        position: "absolute"
    });
    if (b == "left") {
        $(".mobile_body_wrapper").animate({
            left: "95%"
        });
        $(a).width("95%").css({
            "min-height": sideHeight + "px",
            left: "-95%"
        }).animate({
            left: "0"
        })
    } else {
        if (b == "right") {
            $(".mobile_body_wrapper").animate({
                left: "-95%"
            });
            $(a).width("95%").css({
                "min-height": sideHeight + "px",
                left: "190%"
            }).animate({
                left: "5%"
            })
        }
    }
    $("#content,#bnr-holder").addClass("touch_mask");
    $(".touch_mask").on("click", function(c) {
        c.preventDefault();
        closeSideNav(false)
    });
    expand = false
}

function closeSideNav(a) {
    $(".icon-nav-menu").removeClass("icon-red");
    if ($(".openItem").length) {
        $(".openItem").trigger("click")
    }
    $("body").css({
        "overflow-x": "visible"
    });
    $(".mobile_body_wrapper").animate({
        left: 0
    }, function() {
        if (a) {
            $(window).scrollTop(0);
            $("#sliding-box-call-us").prepend('<span id="close-call-us-menu" class="icon-red icon-cancel-circle size-25"></span>');
            $("#close-call-us-menu").on("click", function() {
                $("#close-call-us-menu").remove();
                $("#sliding-box-call-us").hide()
            })
        }
    }).width("100%").height("auto").css({
        overflow: "visible",
        position: "relative"
    });
    $(".mobile-nav").animate({
        left: "-95%"
    });
    $("#content,#bnr-holder").removeAttr("style class").off("click");
    expand = true
}

function addMenuClickEvent() {
    $(".mobile-nav h3").each(function(c) {
        var b = $(this),
            a = b.html();
        a = a.replace(/\W+/g, "");
        a = a.replace("'", "");
        b.addClass("btn-sliding-box");
        b.attr("data-slider", a);
        if (b.data("slider") === "TopBrands") {
            b.parent().next().find("ul").attr("id", "sliding-box-" + a);
            $("#sliding-box-TopBrands").parent().next().find("li").appendTo($("#sliding-box-TopBrands"));
            b.parent().next(".top-nav-col50").next(".top-nav-col50").remove()
        } else {
            b.next().attr("id", "sliding-box-" + a)
        }
    });
    $(".mobile-nav h3").not().append('<span class="arrow"></span>')
}
$(document).on("click", '#mobile-menu-items a.btn-sliding-box:not([data-slider="call-us"])', function(f) {
    var d = $(this),
        b = d.next().height(),
        g = $(".mobile-nav").height(),
        c = $(window).height();
    if (d.data("slider") === "TopBrands") {
        b = d.parent().next().find("ul").height()
    }
    if (d.hasClass("openItem")) {
        d.removeClass("openItem");
        $(".mobile-nav").height(g - b)
    } else {
        if (!d.hasClass("openItem") && $(".openItem").length) {
            var a = $(".openItem").next().height();
            $(".openItem").not(this).trigger("click");
            $(".openItem").not(this).removeClass("openItem");
            d.addClass("openItem");
            $(".mobile-nav").height(g - a + b)
        } else {
            if (!$(".openItem").length) {
                d.addClass("openItem");
                $(".mobile-nav").height(g + b)
            }
        }
    }
});
$(document).on("click", ".mobile-nav h3.btn-sliding-box", function(c) {
    var b = $(this),
        a = b.next().height(),
        d = $(".mobile-nav").height();
    if (b.hasClass("tab-down-active") && !b.hasClass("default")) {
        $(".mobile-nav").height(d - a)
    } else {
        if (!b.hasClass("tab-down-active")) {
            $(".mobile-nav").height(d + a)
        } else {
            if (b.hasClass("default")) {
                b.removeClass("default")
            }
        }
    }
});

function loadMenu() {
    var a = $(".top-items.top-men").html(),
        b = $(".top-items.top-women").html(),
        i = $(".top-items.top-brands").html(),
        d = $(".top-items.top-eg").html(),
        g = $(".top-items.top-sg").html(),
        h = $(".top-items.top-ps").html(),
        c = $(".top-items.top-cl").html(),
        e = $(".top-items.top-sale").html(),
        f = $("#ctl00_lbLogin").text(),
        k = "";
    if ($("#your-cash-credit").length) {
        k = " (" + $("#your-cash-credit").text() + " Credit)"
    }
    $("#mobile-login").append('<a href="' + $("#ctl00_lbLogin").prop("href") + '">' + f + k + "</a>");
    $("#sliding-box-mobile-mens").append(a);
    $("#sliding-box-mobile-womens").append(b);
    $("#sliding-box-mobile-brands").append(i);
    $("#sliding-box-mobile-eg").append(d);
    $("#sliding-box-mobile-sg").append(g);
    $("#sliding-box-mobile-ps").append(h);
    $("#sliding-box-mobile-cl").append(c);
    $("#sliding-box-mobile-sale").append(e);
    $("#mobile-menu-items .promo-bottom").remove();
    if ($("#ctl00_lbLogin + a").length) {
        $('<li id="mobile-logout"></li>').insertAfter("#mobile-login");
        $("#ctl00_lbLogin + a").clone().appendTo("#mobile-logout")
    }
    if ($('.btn-sliding-box[data-slider="call-us"]').length) {
        var j = $('.btn-sliding-box[data-slider="call-us"]').parent().html();
        $('<li id="call-us">' + j + "</li>").insertBefore("#mobile-menu-phone")
    }
    $(".mobile-nav-icon-holder").on("click", function() {
        if (!expand) {
            closeSideNav(false)
        } else {
            openSideNav("left", ".mobile-nav")
        }
        if ($("#sliding-box-top").is(":visible")) {
            $("#sliding-box-top").hide()
        }
    });
    $('.btn-sliding-box[data-slider="call-us"]').on("click", function() {
        closeSideNav(true)
    });
    $('<li id="mobile-all-promos"><a href="javascript:shadowboxPop(700,480,\'/include/popup/popup-coupons.aspx\')" class="btn-cta btn-large">See All Promos</a></li>').insertAfter($("#mobile-menu-phone"))
}
$(function() {
    $("#ctl00_txtSearch").attr("data-rfkid", "rfkid_6")
});
$(window).on("load", function() {
    loadMenu();
    addMenuClickEvent()
}).on("orientationchange", function() {
    closeSideNav(false);
    $("#content-inner,#bnr-holder-inner").width($(window).width())
}).on("resize", function() {
    if (this.resizeTO) {
        clearTimeout(this.resizeTO)
    }
    this.resizeTO = setTimeout(function() {
        $(this).trigger("resizeEnd")
    }, 360);
    $("#content-inner,#bnr-holder-inner").width($(window).width())
}).on("resizeEnd", function() {
    var a = contentWidth - $(window).width();
    if (!expand && a !== 0) {
        closeSideNav(false)
    }
});
var mobile_timer = false;
if (navigator.userAgent.match(/iPhone/i)) {
    $("#viewport").attr("content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0");
    $(window).on("gesturestart", function() {
        clearTimeout(mobile_timer);
        $("#viewport").attr("content", "width=device-width,minimum-scale=1.0,maximum-scale=10.0")
    }).on("touchend", function() {
        clearTimeout(mobile_timer);
        mobile_timer = setTimeout(function() {
            $("#viewport").attr("content", "width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0")
        }, 1000)
    })
};
