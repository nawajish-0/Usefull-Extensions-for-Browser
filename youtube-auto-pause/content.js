(function () {
    document.addEventListener("visibilitychange", () => {
        const video = document.querySelector("video");
        if (video) {
            if (document.hidden) {
                video.pause();
                console.log("Video paused because the tab is hidden.");
            } else {
                video.play();
                console.log("Video resumed because the tab is visible.");
            }
        }
    });
    console.log("Video Auto Pause/Resume script loaded!");
})();
