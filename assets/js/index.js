
var g_img_dir = "assets/images/";
//carousel variable
var g_carousel_timer = 0;
var g_carousel_interval = 2000;
var g_carousel_inx = 1;
var g_carousel_datas = [
    {
        "normal": "carousel-1.png",
        "perspective": "carousel-1.png",
    },
    {
        "normal": "carousel-2.png",
        "perspective": "carousel-2.png",
    },
    {
        "normal": "carousel-3.png",
        "perspective": "carousel-3.png",
    },
];
var g_carousel_datas_len = g_carousel_datas.length;

function init() {
    //carousel timer
    g_carousel_timer = setInterval("carousel_fresh()",g_carousel_interval);

    return;
    $(window).scroll(throttle(function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log("滚动距离" + scrollTop);
    }, 100));
}

function carousel_fresh() {
    g_carousel_inx = (g_carousel_inx + 1) % g_carousel_datas_len;
    var left = (g_carousel_inx + g_carousel_datas_len - 1) % g_carousel_datas_len;
    var right = (g_carousel_inx + 1) % g_carousel_datas_len;
    $("#carousel-left").attr("src", g_img_dir + g_carousel_datas[left]["perspective"]);
    $("#carousel-curr").attr("src", g_img_dir + g_carousel_datas[g_carousel_inx]["normal"]);
    $("#carousel-right").attr("src", g_img_dir + g_carousel_datas[right]["perspective"]);
}


function throttle(mainFunction, delay) {
  let timerFlag = null; // Variable to keep track of the timer
  // Returning a throttled version
  return (...args) => {
    if (timerFlag === null) { // If there is no timer currently running
      mainFunction(...args); // Execute the main function
      timerFlag = setTimeout(() => { // Set a timer to clear the timerFlag after the specified delay
        timerFlag = null; // Clear the timerFlag to allow the main function to be executed again
      }, delay);
    }
  };
}


function copyTokenAddr() {
    var tokenAddr = $("#tokenomics-addr-token").text();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(tokenAddr);
      console.log('Text copied to clipboard');
    } else {
      console.error('Clipboard API not available');
    }
}