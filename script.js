<?php
// تحقق إذا كان الطلب تم عبر POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // التحقق من البيانات المرسلة
    $name = isset($_POST['name']) ? trim($_POST['name']) : '';
    $phone = isset($_POST['phone']) ? trim($_POST['phone']) : '';

    // التحقق من أن البيانات ليست فارغة
    if (empty($name) || empty($phone)) {
        echo "الرجاء ملء جميع الحقول.";
        exit;
    }

    // إعداد البريد الإلكتروني
    $to = "mogcggh@gmail.com"; // بريدك الإلكتروني
    $subject = "طلب تصميم جديد"; // موضوع الرسالة
    $message = "الاسم: $name\nرقم الهاتف: $phone"; // محتوى الرسالة
    $headers = "From: no-reply@kinggraphic.com\r\n"; // عنوان المرسل (افتراضي)

    // محاولة إرسال البريد الإلكتروني
    if (mail($to, $subject, $message, $headers)) {
        echo "تم إرسال الطلب بنجاح.";
    } else {
        echo "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.";
    }
} else {
    // في حالة محاولة الوصول المباشر لهذا الملف بدون إرسال بيانات
    echo "الرجاء ملء النموذج أولاً.";
}
?>
