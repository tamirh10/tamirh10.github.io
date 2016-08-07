/**
 * Created by tamirWindow on 07-Aug-16.
 */

    var _mgn = {
    env: "production",
    hosts: {
    globalnav: "https://d2otzcfu7vqzws.cloudfront.net/globalnav/1.1.1",
    moz: "https://moz.com",
    ma: "http://analytics.moz.com",
    ose: "https://moz.com/researchtools/ose/",
    fwe: "https://moz.com/researchtools/fwe/",
    rank: "https://moz.com/researchtools/rank-tracker",
    kwd: "https://moz.com/researchtools/keyword-difficulty",
    onpage: "https://moz.com/researchtools/on-page-grader",
    crawl: "https://moz.com/researchtools/crawl-test",
    api: "https://moz.com/products/api",
    fw: "https://moz.com/followerwonk",
    local: "https://moz.com/local",
    qa: "https://moz.com/community/q",
    content: "https://moz.com/content/"
},
    active: {},
    metanav: 1

};
    (function () {
    var w = window;
    var i = function () {
    var gn = document.createElement('script');
    gn.type = 'text/javascript';
    gn.async = true;
    gn.src = 'https://d2otzcfu7vqzws.cloudfront.net/globalnav/1.1.1/scripts/globalnav.min.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gn, s);
};
    if (w.$) {
    i();
} else {
    var wl = w.onload;
    w.onload = function () {
    wl && wl();
    i();
};
}
})();

    var _qevents = _qevents || [];

    (function () {
    var elem = document.createElement('script');
    elem.src = (document.location.protocol == "https:" ? "https://secure" : "http://edge") + ".quantserve.com/quant.js";
    elem.async = true;
    elem.type = "text/javascript";
    var scpt = document.getElementsByTagName('script')[0];
    scpt.parentNode.insertBefore(elem, scpt);
})();

    _qevents.push(
    {qacct: "p-m6uWWu9N3_-aJ", labels: "_fp.event.About"}
    );

var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1870679-1']);
_gaq.push(['_setDomainName', 'moz.com']);
_gaq.push(['_setAllowLinker', true]);
_gaq.push(['_setAllowAnchor', true]);

_gaq.push(['_setCustomVar', 5, 'User-Type', 'visitor', 2]);


_gaq.push(['_addIgnoredRef', 'seomoz.org']);
_gaq.push(['_addIgnoredRef', 'moz.com']);
_gaq.push(['_addIgnoredRef', 'opensiteexplorer.org']);
_gaq.push(['_trackPageview']);


(function () {
    var ga = document.createElement('script');
    ga.type = 'text/javascript';
    ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(ga, s);
})();


    /* <![CDATA[ */
    var google_conversion_id = 992024495;
    var google_custom_params = window.google_tag_params;
    var google_remarketing_only = true;
    /* ]]> */

var _kiq = _kiq || [];


(function () {
    setTimeout(function () {
            var d = document, f = d.getElementsByTagName('script')[0], s = d.createElement('script');
            s.type = 'text/javascript';
            s.async = true;
            s.src = '//s3.amazonaws.com/ki.js/52771/bm9.js';
            f.parentNode.insertBefore(s, f);
        }
        , 1);
})();