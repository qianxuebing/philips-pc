$(function() {
    // 获取验证码倒计时
    $(".get-code").on("click", function() {
        var time = 60;
        $(".tip").show();
        var a = setInterval(function() {
            time -= 1;
            if (time == 0) {
                time = 60;
                clearInterval(a);
                $(".tip").hide();
            } else {
                $(".tip i").text(time);
            }
        }, 1000);
    });

    $(".btn-login").on("click", function() {
        window.location.href = "../views/login.html";
    });
    $(".btn-register").on("click", function() {
        window.location.href = "../views/register.html";
    });

    $(".revise-name").on("click", function() {
        window.location.href = "../views/personalData.html";
    });
})