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
    
    const audio = document.getElementById('background-music');
    audio.muted = false; // 取消靜音
    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
    });
});
</script>

    // 幻灯片功能
    let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }    
        slides[slideIndex-1].style.display = "block";  
        setTimeout(showSlides, 4000); // 每4秒更换幻灯片
    }

    function plusSlides(n) {
        slideIndex += n;
        showSlides();
    }

    // 留言板提交功能
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments-container');

    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('comment-name').value.trim();
        const message = document.getElementById('comment-message').value.trim();

        if (name && message) {
            const newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.innerHTML = `
                <strong>${name}</strong> <span class="timestamp">${new Date().toLocaleString()}</span>
                <p>${message}</p>
                <button class="delete-comment">刪除</button>
            `;

            commentsContainer.appendChild(newComment);
            commentForm.reset(); // 重置表单

            // 添加删除功能
            newComment.querySelector('.delete-comment').addEventListener('click', function() {
                newComment.remove();
            });
        } else {
            alert("請填寫姓名和留言內容。");
        }
    });

    // 花篮展示功能
    const flowerBasketsButton = document.getElementById('show-flower-baskets');
    const flowerBasketGallery = document.getElementById('flower-basket-gallery');

    flowerBasketsButton.addEventListener('click', function() {
        flowerBasketGallery.style.display = 'flex';
        flowerBasketGallery.scrollIntoView({ behavior: 'smooth' });
    });
});
