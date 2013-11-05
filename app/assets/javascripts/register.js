/**
 * Created with JetBrains RubyMine.
 * User: weng
 * Date: 10/25/13
 * Time: 9:40 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function () {
    $('[data-validate]').blur(function() {
        $this = $(this);
        $.get($this.data('validate'), {
            user: $this.val()
        }).success(function() {
                $('#badUserName').hide()
                $('#goodUserName').show()
                $('#submit').attr("disabled" ,false)
//                    $this.removeClass('field_with_errors');
            }).error(function() {
                $('#goodUserName').hide()
                $('#badUserName').show()

                $('#submit').attr("disabled" ,true)
//                    $this.addClass('field_with_errors');
            });
    });

    $('#password').change(function(){
        var pattern = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
        if(pattern.test($('#password').val())){
            $('#patternWrongPwd').hide()
            if($('#confirmInput').val()=='')
                $('#submit').attr("disabled" ,true)

        }
        else{

            $('#patternWrongPwd').show()
            $('#submit').attr("disabled" ,true)

        }

    })

    $('#confirmInput').change(function(){
        if($('#patternWrongPwd').is(":visible")) return;


        if($('#password').val() =='' ){
            $('#mismatchPwd').hide();
            $('#emptyPwd').show();
            $('#submit').attr("disabled" ,true)
        }

        else if($('#password').val() != $('#confirmInput').val()){
            $('#mismatchPwd').show();
            $('#rightPwd').hide();
            $('#emptyPwd').hide();
            $('#submit').attr("disabled" ,true)
        }
        else{
            $('#submit').attr("disabled" ,false)
            if( $('#badUserName').is(":visible")) {
                $('#submit').attr("disabled" ,true)
            }
            $('#mismatchPwd').hide();
            $('#emptyPwd').hide();
            $('#rightPwd').show();
        }

    });
});
