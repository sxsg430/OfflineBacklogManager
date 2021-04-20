using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using OfflineBacklogManager.Models;
using OfflineBacklogManager.DBContexts;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace OfflineBacklogManager.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AddGameController : ControllerBase
    {
        private OBMDBContext OBContext;
        public AddGameController(OBMDBContext context)
        {
            OBContext = context;
        }

        [HttpPost]
        public async Task<string> Post([FromForm] string title, [FromForm] string status, [FromForm] string ownership, [FromForm] string achievement, [FromForm] string achievementmax, [FromForm] string progress, [FromForm] string platform, [FromForm] string playing, [FromForm] string wishlist)
        {
            Game temp = new()
            {
                title = title,
                status = status,
                ownership = ownership,
                achievement = achievement,
                achievement_max = achievementmax,
                progress = progress,
                gamesystem = platform,
                playing = playing,
                wishlist = wishlist,
                appid = ""
            };
            OBContext.Games.Add(temp);
            OBContext.SaveChanges();

            return JsonSerializer.Serialize(temp);
        }
    }
}
