$(function () {

    var edit_id;

    $('#modalMain').on('shown.bs.modal', function () {
        $('#product-name').focus();
    });
    $('#modalMain').on('hidden.bs.modal', function () {
        $('#product-name').val('');
        $('#product-text').val('');
    });

    $(document).on('click', '#btnMain', (function () {

        $('#modalMain').children('.modal-dialog').children('.modal-content')
            .children('.modal-header').children('.modal-title').text('Add Product');
        var btn = $('#modalMain').children('.modal-dialog').children('.modal-content')
            .children('.modal-footer').children('.enter');
        btn.attr('id', 'addproduct');
        btn.text('Add');
        $('#modalMain').modal('show');

    }));

    $(document).on('click', '.edit', (function () {

        edit_id = $(this).parent().attr('id');

        $.ajax({

            url: "http://mvcmarket.loc/index.php/Goods/getGood",
            type: "post",
            data: { 'id': edit_id },
            dataType: "json",
            success: function (json) {
                if (json == 'wrong' || json.length != 1){
                    console.log('wrong')
                } else {

                    $('#modalMain').children('.modal-dialog').children('.modal-content')
                        .children('.modal-header').children('.modal-title').text('Edit   Product');
                    var btn = $('#modalMain').children('.modal-dialog').children('.modal-content')
                        .children('.modal-footer').children('.enter');
                    btn.attr('id', 'editproduct');
                    btn.text('Save');


                    $('#product-name').val(json[0]['name']);
                    $('#product-text').val(json[0]['text']);

                    $('#modalMain').modal('show');
                }
            }

        });

    }));

    $(document).on('click', '.remove', function () {
        var parrent_id = $(this).parent().attr('id');
        $.ajax({
            url: "http://mvcmarket.loc/index.php/Goods/deleteGood",
            type: "post",
            data: {
                id: parrent_id
            },
            dataType: "json",
            success: function (json) {
                if (json !== 0){
                    $('#'+parrent_id).remove();
                } else {
                    console.log('err');
                }
            }
        });

        console.log('ops');
    });

    // $(document).on('click', '.close-main', function () {
    //     $('#product-name').val('');
    //     $('#product-text').val('');
    // });

    $(document).on('click', '#addproduct', function (e) {

        e.preventDefault();
        $.ajax({
            url: "http://mvcmarket.loc/index.php/Goods/addGood",
            type: "post",
            data: {
                name: $('#product-name').val(),
                text: $('#product-text').val()
            },
            dataType: "json",
            success: function (json) {

                if (json == 'wrong'){
                    console.log('wrong');
                } else {
                    $('.main').append(
                        '<div class="post" id="' + json['id'] + '">\n' +
                        '    <div class="col-md-2 col-sm-12">\n' +
                        '        <img src="https://www.google.com.ua/intl/ru/adwords/images/illustrations/overview-costs-bg.png" class="img-responsive img-rounded" alt="Responsive image">\n' +
                        '    </div>\n' +
                        '    <div class="col-md-8 col-sm-12 descr">\n' +
                        '        <p class="lead" data-name="name">' + json['name'] + '</p>\n' +
                        '        <p data-name="text">' + json['text'] + '</p>\n' +
                        '    </div>\n' +
                        '    <button type="button" class="btn btn-primary edit" aria-label="Left Align">\n' +
                        '        <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>\n' +
                        '    </button>\n' +
                        '    <button type="button" class="btn btn-danger remove" aria-label="Left Align">\n' +
                        '        <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>\n' +
                        '    </button>\n' +
                        '</div>' );
                }


            }



        });

        $('#product-name').val('');
        $('#product-text').val('');

        $('#modalMain').modal('hide');

    });

    $(document).on('click', '#editproduct', function (e) {

        e.preventDefault();
        $.ajax({
            url: "http://mvcmarket.loc/index.php/Goods/updateGood",
            type: "post",
            data: {
                id: edit_id,
                name: $('#product-name').val(),
                text: $('#product-text').val()
            },
            dataType: "json",
            success: function (json) {

                var product_name = '';
                var product_text = '';

                if (json != 0) {

                    $.ajax({

                        url: "http://mvcmarket.loc/index.php/Goods/getGood",
                        type: "post",
                        data: {'id': edit_id},
                        dataType: "json",
                        success: function (json) {
                            if (json == 'wrong' || json.length != 1) {
                                console.log('wrong');
                            } else {

                                product_name = json[0]['name'];
                                product_text = json[0]['text'];
                                // console.log(product_name, '  ', product_text);
                                // $('#modalMain').modal('show');

                                post = $('#' + edit_id);
                                // console.log(post.children('.descr').children('p[data-name="name"]')[0].innerText);
                                post.children('.descr').children('p[data-name="name"]')[0].innerText = product_name;
                                post.children('.descr').children('p[data-name="text"]')[0].innerText = product_text;
                            }
                        }
                    });

                    // console.log(product_name, '  ', product_text);

                    // post = $('#' + edit_id);
                    // // console.log(post.children('.descr').children('p[data-name="name"]')[0].innerText);
                    // post.children('.descr').children('p[data-name="name"]')[0].innerText = product_name;
                    // post.children('.descr').children('p[data-name="text"]')[0].innerText = product_text;
                } else {
                    console.log('wrong');
                }


            }



        });

        $('#product-name').val('');
        $('#product-text').val('');

        $('#modalMain').modal('hide');

    });

});