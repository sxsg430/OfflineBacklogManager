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
    public class GetGameInfoController : ControllerBase
    {
        private OBMDBContext OBContext;
        public GetGameInfoController(OBMDBContext context)
        {
            OBContext = context;
        }

        [HttpGet]
        public string Get(int gameid)
        {
            var local = OBContext.Games.Single(s => s.ID == gameid);
            return JsonSerializer.Serialize(local);
        }
    }
}
