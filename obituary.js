document.addEventListener("DOMContentLoaded", function() {
    // 背景音樂自動播放
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic) {
        backgroundMusic.play().catch(error => {
            console.log("音樂自動播放被阻止:", error);
            // 提示用户手动播放音乐
            const playButton = document.createElement('button');
            playButton.innerText = "點擊播放音樂";
            playButton.style.position = 'fixed';
            playButton.style.top = '10px';
            playButton.style.right = '10px';
            playButton.style.zIndex = 1000;
            document.body.appendChild(playButton);

            playButton.addEventListener('click', function() {
                backgroundMusic.play();
                playButton.remove();
            });
        });
    }

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
        setTimeout(showSlides, 4000); // Change image every 4 seconds
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
            commentForm.reset(); // 重置表單

            // 添加删除功能
            newComment.querySelector('.delete-comment').addEventListener('click', function() {
                newComment.remove();
            });
        } else {
            alert("請填寫姓名和留言內容。");
        }
    });

    // 花籃展示功能
    const flowerBasketsButton = document.getElementById('show-flower-baskets');
    const flowerBasketGallery = document.getElementById('flower-basket-gallery');

    flowerBasketsButton.addEventListener('click', function() {
        flowerBasketGallery.style.display = 'flex';
        flowerBasketGallery.scrollIntoView({ behavior: 'smooth' });
    });
});
