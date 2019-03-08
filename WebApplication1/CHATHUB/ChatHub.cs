using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.CHATHUB
{
    [HubName("chaty")]
    public class ChatHub:Hub
    {
        //Burada Clientten gelen mesajı mesajial metoduyla  diger clientlere verıyoruz. Js ile mesajı al dedıgımızde yollanılan mesajı yakalıyoruz.
        public void yollaa(string mesaj)
        {
            
            Clients.All.mesajial($"{mesaj} from {Environment.UserName}");
        }
        //public void echo(string mesaj)
        //{
        //    Clients.Caller.mesajial($"{mesaj} from {Environment.MachineName}");
        //}
    }
}