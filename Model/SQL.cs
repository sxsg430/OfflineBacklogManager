using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace OfflineBacklogManager.Model
{
    public class SQL
    {
        public string ConnString { get; set; }
        public SQL(string connectionStr)
        {
            this.ConnString = connectionStr;
        }

        private MySqlConnection GetConnection()
        {
            return new MySqlConnection(ConnString);
        }
    }
}
