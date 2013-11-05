/**
 * Created with JetBrains RubyMine.
 * User: weng
 * Date: 10/29/13
 * Time: 1:09 AM
 * To change this template use File | Settings | File Templates.
 */
$(document).ready(function(){
    if($('#notice').text()==""){
        $('#signIn').show()
        $('#signOut').hide()
    }
    else{
        $('#session_exist').show()
        $('#signIn').hide()
        $('#signOut').show()

    }

})