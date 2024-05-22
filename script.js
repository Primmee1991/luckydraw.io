let names = ["คุณนิรัติศัย คำโมน๊ะ","คุณกฤษณะ เนื่องจำนงค์","คุณรณชัย อินต๊ะยศ","คุณอริศรา ภัททโยธา","คุณสุพจน์ เตชะคานณรงค์",
"คุณเอื้องคำ สงสนั่น","คุณพุธิตา ปางแก้ว","คุณพิษณุ สร้อยคำ","คุณเอกรัฐ กงเวียน","คุณสมัชญา สุวรรณชู","คุณกฤษดา โพระดก",
"คุณพณัติ ใจกอง","คุณณัฐพล สุทธิ"];
let prizes = ["พัดลม Hatari 16 นิ้ว (ชมพู)","พัดลม Hatari 16 นิ้ว (น้ำตาล)","หม้อหุงข้าว 1 ลิตร Hanabishi",
"เครื่องปั่นใหญ่ Smart Home","หม้อสุกี้กลาง OTTO (น้ำตาล)","พัดลม Hatari 8 นิ้ว","หม้อสุกี้กลาง OTTO (ชมพู)","เครื่องปิ้งขนมปัง Kashiwa",
"หม้อต้มอเนกประสงค์ Kashiwa","เตาปิ้งย่าง Kashiwa","เตารีดไอน้ำ Smart Home","เครื่องบดอาหาร Smart Home","เตารีด Tefal"];
const prizeImages = {
    "พัดลม Hatari 16 นิ้ว (ชมพู)": "pic/01 พัดลม Hatari HT16M5 2.jpg",
    "พัดลม Hatari 16 นิ้ว (น้ำตาล)": "pic/02 พัดลม Hatari HT-T16M5.jpg",
    "หม้อหุงข้าว 1 ลิตร Hanabishi": "pic/03 หม้อหุงข้าว 1 ลิตร Hanabishi HAP 101.jpg",
    "เครื่องปั่นใหญ่ Smart Home": "pic/04 เครื่องปั่นใหญ่ Smart Home BD 1510.jpg",
    "หม้อสุกี้กลาง OTTO (น้ำตาล)": "pic/05 หม้อสุกี้ OTTO SP 310A.jpg",
    "พัดลม Hatari 8 นิ้ว": "pic/06 พัดลมตั้งโต๊ะ Hatari HT PS20M1.jpg",
    "เตารีด Tefal": "pic/07 เตารีดธรรมดา Tefal FS4020.jpg",
    "หม้อสุกี้กลาง OTTO (ชมพู)": "pic/08 หม้อสุกี้กลาง OTTO 306A.jpg",
    "เครื่องปิ้งขนมปัง Kashiwa": "pic/09 เครื่องปิ้ขนมปัง Kashiwa YT1001.jpg",
    "หม้อต้มอเนกประสงค์ Kashiwa": "pic/10 หม้อต้มอเนกประสงค์ Kashiwa KW 219.jpg",
    "เตาปิ้งย่าง Kashiwa": "pic/11 เตาย่างบาร์บีคิวไฟฟ้า KASHIWA 3010.jpg",
    "เตารีดไอน้ำ Smart Home": "pic/12 เตารีดไอน้ำ Smart Home  SSIR 925.jpg",
    "เครื่องบดอาหาร Smart Home": "pic/13 เครื่องบดอาหาร SM CP1603.jpg"
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

    // เพิ่มเอฟเฟกต์เข้าสู่การหมุนของปุ่ม
    drawButton.style.backgroundColor = "#ff6347";
    drawButton.style.transform = "scale(1.1)";
    drawButton.textContent = "Spinning...";
    drawButton.disabled = true;
    
    // เพิ่มการหมุนภาพระหว่างรอสุ่ม
    let interval = 100;
    const spinAnimation = setInterval(() => {
        nameElement.textContent = names[Math.floor(Math.random() * names.length)];
        prizeElement.textContent = prizes[Math.floor(Math.random() * prizes.length)];
    }, interval);

    // เพิ่มความเร็วการหมุน
    const decreaseInterval = setInterval(() => {
        interval += 50;
        if (interval >= 1000) {
            clearInterval(decreaseInterval);
        }
    }, 1000);

    setTimeout(function() {
        clearInterval(spinAnimation);

        const nameIndex = Math.floor(Math.random() * names.length);
        const prizeIndex = Math.floor(Math.random() * prizes.length);
        const winner = names[nameIndex];
        const prize = prizes[prizeIndex];

        nameElement.textContent = winner;
        prizeElement.textContent = prize;
        prizeImg.src = prizeImages[prize];
        prizeImageElement.classList.remove('hidden');
        loadingIcon.classList.add('hidden');

        // ตัดชื่อและรางวัลที่สุ่มไปแล้วออก
        names.splice(nameIndex, 1);
        prizes.splice(prizeIndex, 1);

        // เอฟเฟกต์การหยุดการหมุนของปุ่ม
        drawButton.style.backgroundColor = "#28a745";
        drawButton.style.transform = "scale(1)";
        drawButton.textContent = "Draw Again";
        drawButton.disabled = false;

        // แสดงพลุ
        confetti({
            particleCount: 200,
            spread: 100,
            origin: { y: 0.6 }
        });
    }, 10000);  // 10 วินาที
});
