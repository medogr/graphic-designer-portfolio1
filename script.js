// عند النقر على الصورة، فتح النافذة
function openModal(imgElement) {
    var modal = document.getElementById("imageModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imgElement.src;
}

// غلق النافذة عند النقر على زر الإغلاق
var closeModal = document.getElementById("closeModal");
closeModal.onclick = function() {
    var modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
