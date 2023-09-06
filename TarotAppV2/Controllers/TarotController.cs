/*namespace TarotAppV2.Controllers
{
    public class TarotController
    {
        
    }
}*/
//original, ide moje:
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;


using TarotAppV2.Models;

namespace TarotAppV2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TarotController : ControllerBase
    {
        public static readonly IEnumerable<TarotModel> Items = new[]
        {

        new TarotModel{Id =0, Name = "The Fool",  Description="The Fool is passionate and unknowing.", ImageId=0 },
        new TarotModel{Id =1, Name = "The Magician",  Description="Wise and master of all elements.", ImageId=1 },
        new TarotModel{Id =2, Name = "The High Priestess",  Description="Sees all across all planes.", ImageId=2 }




        };
        [HttpGet("{numOfCards:int}")]
        /*public List<TarotModel> Get(int cardNumber)
        {
            var rand = new Random();
            //bracino:
            //var cards = Items.ToList();
            var cards = Items.ToArray();
            //bracino:
            //cards.OrderBy(x => Guid.NewGuid()).Take(cardNumber);

            //Random r = new Random();
            //List<TarotModel> threeRandom = cards.OrderBy(x => r.Next()).Take(cardNumber);
            //Items[rand.Next(Items.Length)];
            //Items.Where(i => i.ItemType == itemType).ToArray();
            return cards[cardNumber];
            
        }*/
        public TarotModel[] Get(int numOfCards)
        {
            TarotModel[] items = Items.ToArray();
            return items;
            //return 
        }

    }
}
