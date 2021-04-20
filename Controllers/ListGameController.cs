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
    public class ListGameController : ControllerBase
    {
        private OBMDBContext OBContext;
        public ListGameController(OBMDBContext context)
        {
            OBContext = context;
        }

        [HttpGet]
        public Models.Game[] Get()
        {
            // TODO: Add Search functions
            var local = OBContext.Games.ToArray();
            return local;
        }
    }
}
