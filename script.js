let names = ["วุฒิพงษ์","ภาวดี"];
let prizes = ["iPad", "Smartphone", "Laptop", "Headphones", "Gift Card"];
const prizeImages = {
    "iPad": "images/ipad.png",
    "Smartphone": "images/smartphone.png",
    "Laptop": "images/laptop.png",
    "Headphones": "images/headphones.png",
    "Gift Card": "images/giftcard.png"
};

document.getElementById('drawButton').addEventListener('click', function() {
    if (names.length === 0 || prizes.length === 0) {
        alert("No more prizes or participants available!");
        return;
    }

    const drawButton = document.getElementById('drawButton');
    const nameElement = document.getElementById('name');
    const prizeElement = document.getElementById('prize');
    const prizeImageElement = document.getElementById('prizeImage');
    const prizeImg = document.getElementById('prizeImg');
    const loadingIcon = document.getElementById('loadingIcon');
    
    drawButton.disabled = true;
    nameElement.textContent = '...';
    prizeElement.textContent = '...';
    loadingIcon.classList.remove('hidden');
    prizeImageElement.classList.add('hidden');
    
    setTimeout(function() {
        const nameIndex = Math.floor(Math.random() * names.length);
        const prizeIndex = Math.floor(Math.random() * prizes.length);
        const winner = names[nameIndex];
        const prize = prizes[prizeIndex];

        nameElement.textContent = winner;
        prizeElement.textContent = prize;
        prizeImg.src = prizeImages[prize];
        prizeImageElement.classList.remove('hidden');
        loadingIcon.classList.add('hidden');
        drawButton.disabled = false;

        // ตัดชื่อและรางวัลที่สุ่มไปแล้วออก
        names.splice(nameIndex, 1);
        prizes.splice(prizeIndex, 1);

        // แสดงพลุ
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    }, 5000);  // 5 วินาที
});
