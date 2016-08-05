/**
 * Created by Tamir on 14-Apr-16.
 */
$(function () {
    $("#video-wallpaper").wallpaper({
        source: {
            poster: "images/red_bowers_and_wilkins_p3_headphones-wallpaper-1920x1080.jpg",
            webm: "Videos/starTellescope.webm"
            // mp4: "http://example.com/video.mp4",
            // ogg: "http://example.com/video.ogv"
        }
    });
    
    // $("#video-wallpaper").wallpaper({
    //     source: {
    //         poster: "images/red_bowers_and_wilkins_p3_headphones-wallpaper-1920x1080.jpg",
    //         video: "//www.youtube.com/embed/3LLj8bDdj64"
    //     }
    // });

});