document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const name = document.getElementById("fullName").value;
            alert(`ขอบคุณครับคุณ ${name}! ทีมงาน Rush'n'Roll ได้รับข้อมูลของคุณเรียบร้อยแล้ว 🤘`);
            contactForm.reset();
        });
    }
});