document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let commentText = document.getElementById("commentText").value;
    let commentList = document.getElementById("comments-list");

    if (commentText.trim() !== "") {
        let newComment = document.createElement("div");
        newComment.classList.add("comment");
        newComment.textContent = commentText;
        commentList.appendChild(newComment);
        document.getElementById("commentText").value = "";
    }
});

document.getElementById("designForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("تم إرسال طلب التصميم بنجاح!");
});
