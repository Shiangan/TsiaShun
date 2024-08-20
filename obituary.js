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
```

### 主要优化点：
1. **检查元素存在性**：在操作音频和按钮时，检查元素是否存在，避免在元素不存在时引发错误。
2. **优化幻灯片功能**：简化了幻灯片的显示逻辑，将 `showSlides` 函数放到 `DOMContentLoaded` 事件处理器内部，确保在文档加载后立即执行。
3. **删除留言板相关代码**：去掉了留言板相关的功能代码。

这样可以确保页面加载更高效，且去除了留言板功能。
