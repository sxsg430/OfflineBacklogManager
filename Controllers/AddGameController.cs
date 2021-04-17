using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using OfflineBacklogManager.Models;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace OfflineBacklogManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddGameController : ControllerBase
    {
        [HttpPost]
        public async Task<string> Post([FromForm] string title, [FromForm] string status, [FromForm] string ownership, [FromForm] string achivement, [FromForm] string achievementmax, [FromForm] string progress, [FromForm] string platform)
        {
            SQL context = HttpContext.RequestServices.GetService(typeof(OfflineBacklogManager.Models.SQL)) as SQL;
            Models.Game temp = new Models.Game();
            temp.title = title;
            temp.status = status;
            temp.ownership = ownership;
            temp.achievement = achivement;
            temp.achievement_max = achievementmax;
            temp.progress = progress;
            temp.gamesystem = platform;
            temp.playing = 0;
            temp.wishlist = 0;
            temp.appid = "";
            context.AddNewGame(temp);
            return JsonSerializer.Serialize(temp);
        }
    }
}
