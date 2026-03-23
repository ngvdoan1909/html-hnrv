(function ($) {
    "use strict";
    var google_form = {
        init: function () {
            var booking_form = $('.booking-form');
            if (booking_form.length > 0) {
                booking_form.on('submit', function () {
                    var container = $(this);
                    google_form.send_booking(container);
                    return false;
                });
            }
            var subcribe_form = $('.subcribe-form');
            if (subcribe_form.length > 0) {
                subcribe_form.on('submit', function () {
                    var container = $(this);
                    google_form.send_subcribe(container);
                    return false;
                });
            }
            var contact_form = $('.contact-form');
            if (contact_form.length > 0) {
                contact_form.on('submit', function () {
                    var container = $(this);
                    google_form.send_contact_to_google(container);
                    return false;
                });
            }
        },
        send_booking: function (container) {
            var fullname = $(container).find('input[name="booking-name"]').val();
            var numberphone = $(container).find('input[name="booking-phone"]').val();
            var booking_date = $(container).find('input[name="booking-date"]').val();
            var booking_guest = $(container).find('input[name="booking-guest"]').val();
            var booking_note = $(container).find('[name="booking-note"]').val();
            var data_url = $(location).attr('href');
            var referrer = document.referrer;
            if ((fullname !== "") && (numberphone !== "") ) {
                $.ajax({
                    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScdzTo-grz23yNT73n4GyRhH6H-Jy-zZBpToY2ghOlzozJjUQ/formResponse",
                    data: {

                        "entry.1999904181": data_url,
                        "entry.34620882": fullname,
                        "entry.272354492": numberphone,
                        "entry.1070738631": booking_date,
                        "entry.1150465014": booking_note,
                        "entry.1973630186": data_url,
                        "entry.1117131390": referrer
                    },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function () {
                            alert('Gửi thành công');
                        },
                        200: function () {
                            alert('Gửi thành công');
                        }
                    }
                });
            } else {
                alert('Kiểm tra lại các thông vừa nhập')
            }
        },
        send_subcribe: function (container) {
            var email = $(container).find('input[name="email"]').val();
            if ((email !== "")) {
                $.ajax({
                    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc4h8fBdP2__2tb7LmJVSbzyAVG59_VzVvql0AZYHLvClYlVg/formResponse",
                    data: {
                        "entry.177756269": email,
                    },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function () {
                            alert('Đăng ký thành công!');
                        },
                        200: function () {
                            alert('Đăng ký thành công!');
                        }
                    }
                });
            } else {
                alert('Kiểm tra lại email vừa nhập')
            }
        },
        send_contact_to_google: function (container) {
            var email = $(container).find('input[name="email"]').val();
            var fullname = $(container).find('input[name="fullname"]').val();
            var numberphone = $(container).find('input[name="numberphone"]').val();
            var content = $(container).find('[name="content"]').val();

            if ((email !== "") && (fullname !== "") && (numberphone !== "")) {
                $.ajax({
                    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScfgnb-q2psoyjh1nu5ooQyyX6LbJ2cPrihIvx9j3Ce29wIzA/formResponse",
                    data: {
                        "entry.1174600799": fullname,
                        "entry.784561498": email,
                        "entry.1913024843": numberphone,
                        "entry.1611136219": content
                    },
                    type: "POST",
                    dataType: "xml",
                    statusCode: {
                        0: function () {
                            $(container).closest('form').find("input[type=text]").val("");
                            $(container).find('button').attr('disabled', 'disabled');
                            alert('Gửi thành công!');
                        },
                        200: function () {
                            $(container).closest('form').find("input[type=text]").val("");
                            $(container).find('button').attr('disabled', 'disabled');
                            alert('Gửi thành công!');
                        }
                    }
                });
            } else {
                alert('Kiểm tra lại các thông vừa nhập')
            }
        },
    };
    google_form.init();
    $('.loadmore-post').click(function(){
        var button = $(this);
        var post_type = $(this).attr('data-post-type');
        var slug = $(this).attr('data-slug');
        var current_term_id = $(this).attr('data-term-id');
        var taxonomy = $(this).attr('data-tax');
        var data_page = $(this).attr('data-page');
        var max_page = $(this).attr('data-max-page');
        var  data = {
            'action': 'loadmore_in_location',
            'post_type' : post_type,
            'page' : data_page,
            'slug' : slug,
            'taxonomy' : taxonomy,
            'current_term_id' : current_term_id,
            'max_page' : max_page
        };
        $.ajax({
            url : loadmore_params.ajaxurl,
            data : data,
            type : 'POST',
            beforeSend : function ( xhr ) {
                button.text('Đang tải...');
            },
            success : function( data ){
                if( data ) { 
                    button.text( 'Xem thêm' ).prev().append(data);
                    data_page++;
                    button.attr('data-page',data_page);
                    if(data_page == max_page){
                        button.remove();
                    }
                } else {
                    button.remove();
                }
            }
        });
        return false;
    })
    var livechat = {
      init: function () {
        $('.btn-livechat').click(function () {
          $(this).toggleClass('show');
          $('.live-support').toggleClass('show');
      })
    }
}
livechat.init();
})(jQuery);

