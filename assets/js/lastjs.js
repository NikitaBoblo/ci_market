$(function () {

    $(document).on('click', '#btnAdd', function () {

        $('#modalMain').children('.modal-dialog').children('.modal-content')
            .children('.modal-header').children('.modal-title').text('Add Product');
        var btn = $('#modalMain').children('.modal-dialog').children('.modal-content')
            .children('.modal-footer').children('.enter');
        btn.text('Add');
        btn.attr('id', '#addproduct');
        $('#modalMain').modal('show');

    });

    $(document).on('click', '.edit', function () {

        $('#modalMain').children('.modal-dialog').children('.modal-content')
            .children('.modal-header').children('.modal-title').text('Edit Product');
        var btn = $('#modalMain').children('.modal-dialog').children('.modal-content')
            .children('.modal-footer').children('.enter');
        btn.text('Save');
        btn.attr('id', '#editproduct');
        $('#modalMain').modal('show');

    });


    $(document).on('click', '.remove', function () {
        var parrent_id = $(this).parent().attr('data-id');
        // $.ajax({
        //     url: "http://mvcmarket.loc/index.php/Goods/deleteGood",
        //     type: "post",
        //     data: {
        //         id: parrent_id
        //     },
        //     dataType: "json",
        //     success: function (json) {
        //         if (json !== 0){
        //             $('#'+parrent_id).remove();
        //         } else {
        //             console.log('err');
        //         }
        //     }
        // });

        console.log(parrent_id);
        console.log('ops');
    });

    $(document).on('click', '#addproduct', function (e) {

        console.log('btn add');
        // e.preventDefault();
        // $.ajax({
        //     url: "http://mvcmarket.loc/index.php/Goods/addGood",
        //     type: "post",
        //     data: {
        //         name: $('#product-name').val(),
        //         text: $('#product-text').val()
        //     },
        //     dataType: "json",
        //     success: function (json) {
        //
        //         if (json == 'wrong'){
        //             console.log('wrong');
        //         } else {
        //             $('.main').append(
        //                 '<div class="post" data-id="' + json['id'] + '">\n' +
        //                 '    <div class="col-md-2 col-sm-12">\n' +
        //                 '        <img src="https://www.google.com.ua/intl/ru/adwords/images/illustrations/overview-costs-bg.png" class="img-responsive img-rounded" alt="Responsive image">\n' +
        //                 '    </div>\n' +
        //                 '    <div class="col-md-8 col-sm-12">\n' +
        //                 '        <p class="lead">' + json['name'] + '</p>\n' +
        //                 '        <p>' + json['text'] + '</p>\n' +
        //                 '    </div>\n' +
        //                 '    <button type="button" class="btn btn-primary edit" aria-label="Left Align">\n' +
        //                 '        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>\n' +
        //                 '    </button>\n' +
        //                 '    <button type="button" class="btn btn-danger remove" aria-label="Left Align">\n' +
        //                 '        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n' +
        //                 '    </button>\n' +
        //                 '</div>' );
        //         }
        //
        //
        //     }
        //
        //
        //
        // })
    })

});