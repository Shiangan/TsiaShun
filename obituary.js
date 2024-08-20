document.addEventListener('DOMContentLoaded', function() {
    // Timeline animation
    function animateTimeline() {
        const timelineBlocks = document.querySelectorAll(".VivaTimeline .event");
        timelineBlocks.forEach(function (block) {
            const rect = block.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0) {
                block.classList.add("animated");
            } else {
                block.classList.remove("animated");
            }
        });
    }

    // 背景音樂自動播放
            const backgroundMusic = document.getElementById("background-music");
            if (backgroundMusic) {
                backgroundMusic.play().catch(error => {
                    console.warn("自動播放被阻止:", error);
                    document.addEventListener("click", () => {
                        backgroundMusic.play().catch(err => console.warn("点击后播放失败:", err));
                    }, { once: true });
                });
            }


    // 幻灯片功能
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 4000); // 每4秒更换幻灯片
    }
    showSlides();

    // 渐显动画效果
    const fadeInTexts = document.querySelectorAll('.fade-in-text');
    fadeInTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
        }, index * 1500); // 每个段落延迟1.5秒逐个渐显
    });

    // 花篮展示功能
    const flowerBasketsButton = document.getElementById('show-flower-baskets');
    const flowerBasketGallery = document.getElementById('flower-basket-gallery');

    if (flowerBasketsButton && flowerBasketGallery) {
        flowerBasketsButton.addEventListener('click', function() {
            flowerBasketGallery.style.display = 'flex';
            flowerBasketGallery.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 初始化动画
    animateTimeline();
    window.addEventListener('scroll', animateTimeline);
});
