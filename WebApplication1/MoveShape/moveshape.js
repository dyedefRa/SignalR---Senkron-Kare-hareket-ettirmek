/// <reference path="../scripts/jquery-1.12.4.min.js" />
/// <reference path="../scripts/jquery.signalr-2.3.0.min.js" />
/// <reference path="../scripts/jquery-ui-1.12.1.min.js" />

(function () {

    $(function () {

        var hub = $.connection.moveShape,
            $shape = $('#shape');
        //Hareket ettirtiğin client haricindeki clientler için işliyor.
        hub.client.shapeMoved = function (x, y) {
            console.log('client.shapeMoved');
            $shape.css({ left: x, top: y })
        }

        $.connection.hub.start().done(function () {
      
            $shape.draggable({
                drag: function () {
                    //Buraya sadece orjinal clien giriyor.Haraket ettırdıgın clıen
                    hub.server.mooveShape(this.offsetLeft, this.offsetTop || 0);
                    console.log('draggable');
                }
            });
        });

    });
}());