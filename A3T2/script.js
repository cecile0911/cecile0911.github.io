// 获取DOM元素
const starButton = document.getElementById('star');
const cardsContainer = document.getElementById('cardsContainer');
const cards = document.querySelectorAll('.card');

// 鼠标悬停在星星上显示卡片
starButton.addEventListener('mouseenter', function() {
    cardsContainer.style.display = 'flex';
});

// 鼠标离开星星区域时隐藏卡片
starButton.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!cardsContainer.matches(':hover')) {
            hideCards();
        }
    }, 300);
});

// 鼠标在卡片区域内时保持显示
cardsContainer.addEventListener('mouseenter', function() {
    cardsContainer.style.display = 'flex';
});

// 鼠标离开卡片区域时隐藏
cardsContainer.addEventListener('mouseleave', function() {
    setTimeout(function() {
        if (!starButton.matches(':hover')) {
            hideCards();
        }
    }, 300);
});

// 点击卡片翻转
cards.forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('flipped');
    });
});

// 隐藏卡片并重置翻转状态
function hideCards() {
    cardsContainer.style.display = 'none';
    cards.forEach(card => {
        card.classList.remove('flipped');
    });
}

// 点击星星也可以显示/隐藏卡片
starButton.addEventListener('click', function() {
    if (cardsContainer.style.display === 'flex') {
        hideCards();
    } else {
        cardsContainer.style.display = 'flex';
    }
});