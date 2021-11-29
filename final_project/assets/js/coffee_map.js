// make the page smoothly scrolls down from the top after a short period of time
window.onload = function(){
    window.scrollTo(0, 0);

    setTimeout(function() {
        $("html, body").animate({
            scrollTop: $('html, body').get(0).scrollHeight
        }, 1000);
    }, 2500);
}


// customize the world map
$(".container-fluid.mymap").mapael({
    map : {
        name : "world_countries",
        // Set default plots and areas style
        defaultPlot: {
            
        },
        defaultArea: {
            attrs: {
                fill: "#D7BA98",
                stroke: "#D7BA98"
            }
            , attrsHover: {
                fill: "#402009"
            }
            , text: {
                attrs: {
                    fill: "#505444"
                }
                , attrsHover: {
                    fill: "#000"
                }
            }
        }

    },

    // Customize some areas of the map
    areas: {
        "JP": {
            attrs: {
                fill: "#DC8A54"
            }
            , attrsHover: {
                fill: "#402009",
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">Country :</span> Japan"},
            eventHandlers: {
                click: function () {
                    // display recommendation only for the selected area 
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'revert'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#tokyo";
                }
            }
        },
        "US": {
            attrs: {
                fill: "#DC8A54"
            }
            , attrsHover: {
                fill: "#402009",
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">Country :</span> USA"},
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'revert'});
                    $(".container-fluid.recommendations.iowa").css({display: 'revert'});
                    $(".container-fluid.recommendations.chicago").css({display: 'revert'});
                    $(".container-fluid.recommendations.la").css({display: 'revert'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#pittsburgh";
                }
            }
        },
        "CN": {
            attrs: {
                fill: "#DC8A54"
            }
            , attrsHover: {
                fill: "#402009",
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">Country :</span> China"},
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.beijing").css({display: 'revert'});
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'revert'});
                    $(".container-fluid.recommendations.dali").css({display: 'revert'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#beijing";
                }
            }
        }

    },

    

    // Add some plots on the map
    plots: {
        // Image plot
        'iowa': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 41.66,
            longitude: -93.53,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Iowa City"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'revert'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#iowa";
                }
            }
        },

        'losangeles': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 39.05,
            longitude: -118.24,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Los Angeles"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'revert'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#la";
                }
            }
        },

        'pittsburgh': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 40.44,
            longitude: -79.996,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Pittsburgh"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'revert'});
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#pittsburgh";
                }
            }
        },

        'chicago': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 41.87,
            longitude: -87.63,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Chicago"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'revert'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#chicago";
                }
            }
        },

        'tokyo': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 39.687418,
            longitude: 139.692306,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Tokyo"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'revert'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#tokyo";
                }
            }
        },

        'beijing': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 39.9,
            longitude: 116.41,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Beijing"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.beijing").css({display: 'revert'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#beijing";
                }
            }
        },

        'chengdu': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 31.57,
            longitude: 104.06,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Chengdu"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'revert'});
                    $(".container-fluid.recommendations.dali").css({display: 'none'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#chengdu";
                }
            }
        },

        'dali': {
            type: "image",
            url: "assets/img/location.svg",
            width: 22,
            height: 29,
            latitude: 27.48,
            longitude: 101.34,
            attrs: {
                opacity: 1
            },
            attrsHover: {
                transform: "s1.5"
            },
            tooltip: {content: "<span style=\"font-weight:bold;\">City :</span> Dali"},
            // change recommendations based on user's choice of city
            eventHandlers: {
                click: function () {
                    $(".container-fluid.recommendations.pittsburgh").css({display: 'none'});
                    $(".container-fluid.recommendations.beijing").css({display: 'none'});
                    $(".container-fluid.recommendations.iowa").css({display: 'none'});
                    $(".container-fluid.recommendations.chicago").css({display: 'none'});
                    $(".container-fluid.recommendations.la").css({display: 'none'});
                    $(".container-fluid.recommendations.chengdu").css({display: 'none'});
                    $(".container-fluid.recommendations.dali").css({display: 'revert'});
                    $(".container-fluid.recommendations.tokyo").css({display: 'none'});
                    $("#back_button").css({display: 'revert'});
                    // automatically scrolls down the page
                    window.location.href="#dali";
                }
            }
        }
        


    }

    
});

// direct user back to the map
function back_to_map() {
    window.location.href="#world_map";
}

