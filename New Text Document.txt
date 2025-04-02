<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // الحصول على البيانات المدخلة من النموذج
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    // البريد الإلكتروني الذي سيتم إرسال الطلب إليه
    $to = "mogcggh@gmail.com";  // استبدل بعنوان بريدك الإلكتروني

    // موضوع البريد الإلكتروني
    $subject = "طلب تصميم جديد";

    // محتوى البريد الإلكتروني
    $message = "اسم العميل: $name\nرقم الهاتف: $phone";

    // رؤوس البريد الإلكتروني
    $headers = "From: webmaster@example.com" . "\r\n" .
               "Reply-To: $phone" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $message, $headers)) {
        echo "تم إرسال الطلب بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال الطلب.";
    }
}
?>
