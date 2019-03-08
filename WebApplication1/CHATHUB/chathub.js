/// <reference path="../scripts/jquery-1.12.4.min.js" />
/// <reference path="../scripts/jquery.signalr-2.3.0.min.js" />
/// <reference path="../scripts/jquery-ui-1.12.1.min.js" />

(function () {

    $(function () {

        var hub = $.connection.chaty,
            $btnYolla = $('#btnYolla'),
            $msgIcerik = $('#msgIcerik'),
            $msgContainer = $('#msgContainer');

        hub.client.mesajial = function (msg) {

            $msgContainer.append($('<li>').text(msg));
            console.log('Herhangi bir clientten yollanan mesajı Server her cliente yolluyor.Mesaj alındı.(Bu ıletı , mesajı gonderen clıenttede cıkacak cunku serverda Clients.All dedik)')
        }

        $.connection.hub.start().done(() => {
            $msgIcerik.focus();
            $btnYolla.click(() => {
                sendMessage();
            });
            $msgIcerik.keypress((e) => {
                var code = (e.keyCode ? e.keyCode : e.which);
                if (code === 13) {
                    sendMessage();
                }
            });
        });
        function sendMessage() {
            if ($msgIcerik.val() !== null & $msgIcerik.val().length > 0) {
                hub.server.yollaa($msgIcerik.val());
                $msgIcerik.val(null);
                console.log('Clientten mesaj yollandı. ve Hubtan dagıtılacak');
            }
            $msgIcerik.focus();
        }
       
    

    });
}());