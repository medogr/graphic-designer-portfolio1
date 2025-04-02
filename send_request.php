<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // استلام البيانات من النموذج
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    // البريد الإلكتروني الذي سيتم إرسال البيانات إليه
    $to = "mogcggh@gmail.com";  // ضع هنا بريدك الإلكتروني
    $subject = "طلب تصميم جديد";
    
    // إعداد محتوى البريد الإلكتروني
    $message = "تم استلام طلب تصميم جديد من العميل التالي:\n\n";
    $message .= "الاسم: " . $name . "\n";
    $message .= "رقم الهاتف: " . $phone . "\n";
    
    // رأس البريد الإلكتروني
    $headers = "From: no-reply@yourwebsite.com" . "\r\n" .
               "Reply-To: " . $phone . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    
    // إرسال البريد الإلكتروني
    if (mail($to, $subject, $message, $headers)) {
        echo "تم إرسال الطلب بنجاح!";
    } else {
        echo "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.";
    }
}
?>
