/**
 * Created with JetBrains RubyMine.
 * User: weng
 * Date: 10/29/13
 * Time: 4:25 AM
 * To change this template use File | Settings | File Templates.
 */
    $('document').ready(function(){
        if($('#text').text()!= "") {
            $('#welcomeUser').show()
            $('#notSignIn').hide()
            $('#signOutNow').show()
        }
        else{
            $('#notSignIn').show()
            $('#welcomeUser').hide()
//            $('#signOut').hide()

        }
    })