using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.MoveShape
{
    [HubName("moveShape")]
    public class MoveShapeHub:Hub
    {
        public void mooveShape(int x,int y)
        {
            //Clientta oynatılan nesnenin kordinatlarını alıp bağlı olan clientlara yayacağız.
            Clients.Others.shapeMoved(x, y);
        }
    }
}