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

   /* 渐显动画效果 */
.fade-in-text {
    opacity: 0;
    transition: opacity 1s ease-in-out;
} 

    // 自动播放背景音乐
    const audio = document.getElementById('background-music');
    if (audio) {
        audio.play().catch(error => {
            console.log('Autoplay was prevented:', error);
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


    const fadeInTexts = document.querySelectorAll('.fade-in-text');

    fadeInTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
        }, index * 1500); // 每个段落延迟1.5秒逐个渐显
    });
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

    const fadeInTexts = document.querySelectorAll('.fade-in-text');

    fadeInTexts.forEach((text, index) => {
        setTimeout(() => {
            text.style.opacity = '1';
        }, index * 1500); // 每个段落延迟1.5秒逐个渐显
    });
});

    // 初始化动画
    animateTimeline();
    window.addEventListener('scroll', animateTimeline);
});

#

