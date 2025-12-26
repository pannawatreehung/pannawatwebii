document.getElementById("borrowForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const fields = [
        "studentId",
        "firstname",
        "lastname",
        "bookId",
        "borrowTime"
    ];

    for (let id of fields) {
        const value = document.getElementById(id).value.trim();
        if (!value) {
            alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
            return;
        }
    }

    alert("บันทึกข้อมูลเรียบร้อยแล้ว ✅");
    this.reset();
});
