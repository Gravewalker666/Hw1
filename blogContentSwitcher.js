$(function () {
    $("#bc1").click(function () {
        $.ajax({
            type : 'get',
            url : 'blogContent0.html',
            dataType : 'html',
            success : function (content) {
                $("#blogSwitch").html(content)
            }
        })
    })
    $("#bc2").click(function () {
        $.ajax({
            type : 'get',
            url : 'blogContent1.html',
            dataType : 'html',
            success : function (content) {
                $("#blogSwitch").html(content)
            }
        })
    })
    $("#bc3").click(function () {
        $.ajax({
            type : 'get',
            url : 'blogContent2.html',
            dataType : 'html',
            success : function (content) {
                $("#blogSwitch").html(content)
            }
        })
    })
})