document.addEventListener('DOMContentLoaded', function() {
    var backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 600) { // Show button after scrolling 300px
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
document.querySelectorAll('.menu-item > a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let submenu = this.nextElementSibling;
        if (submenu.style.display === "block") {
            submenu.style.display = "none";
        } else {
            submenu.style.display = "block";
        }
    });
});
function calculatePrice() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const numPeople = document.getElementById("num-people").value;
    
    // シンプルな料金計算（仮のロジック）
    const pricePerPerson = 10000;
    const totalPrice = numPeople * pricePerPerson;
    
    // 計算結果を表示
    document.getElementById("result").innerText = `料金: ¥${totalPrice}`;

    // 選択内容を右側に表示
    document.getElementById("selected-dates").innerText = `開始日: ${startDate || '未選択'}`;
    document.getElementById("selected-end").innerText = `終了日: ${endDate || '未選択'}`;
    document.getElementById("selected-people").innerText = `人数: ${numPeople}`;
    document.getElementById("selected-price").innerText = `料金: ¥${totalPrice}`;
}
