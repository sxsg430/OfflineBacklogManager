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

        public void AddNewGame(Game input)
        {
            using MySqlConnection conn = GetConnection();
            string CmdStr = "insert into obm_list (title, gamesystem, ownership, status, achievement, achievement_max, progress, playing, wishlist, appid) VALUES (@GTITLE, @GSYSTEM, @GOWNER, @GSTATUS, @GACH, @GACHMAX, @GPROG, @GPLAYING, @GWISH, @GAPPID)";
            MySqlCommand cmd = new MySqlCommand(CmdStr, conn);
            cmd.Parameters.AddWithValue("@GTITLE", input.title);
            cmd.Parameters.AddWithValue("@GSYSTEM", input.gamesystem);
            cmd.Parameters.AddWithValue("@GOWNER", input.ownership);
            cmd.Parameters.AddWithValue("@GSTATUS", input.status);
            cmd.Parameters.AddWithValue("@GACH", input.achievement);
            cmd.Parameters.AddWithValue("@GACHMAX", input.achievement_max);
            cmd.Parameters.AddWithValue("@GPROG", input.progress);
            cmd.Parameters.AddWithValue("@GPLAYING", input.playing);
            cmd.Parameters.AddWithValue("@GWISH", input.wishlist);
            cmd.Parameters.AddWithValue("@GAPPID", input.appid);

            conn.Open();
            int result = cmd.ExecuteNonQuery();
            conn.Close();
        }
    }
}
