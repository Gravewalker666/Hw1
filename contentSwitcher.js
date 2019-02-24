$(function () {
    $("#home").click(function () {
        $.ajax({
            type: 'get',
            url: 'Home.html',
            dataType: 'html',
            success: function (content) {
                $("#body").html(content)
            }
        })
    })

    $("#about").click(function () {
        $.ajax({
            type: 'get',
            url: 'aboutus.html',
            dataType: 'html',
            success: function (content) {
                $("#body").html(content)
            }
        })
    })

    $("#blog").click(function () {
        $.ajax({
            type: 'get',
            url: 'blog.html',
            dataType: 'html',
            success: function (content) {
                $("#body").html(content)
            }
        })
    })

    $("#contact").click(function () {
        $.ajax({
            type: 'get',
            url: 'contact.html',
            dataType: 'html',
            success: function (content) {
                $("#body").html(content)
            }
        })
    })
})
