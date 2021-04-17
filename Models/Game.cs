using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfflineBacklogManager.Models
{
    public class Game
    {
        // ID - ID of the Game in the DB
        public int ID { get; set; }
        // title - Game's Title, stored as Base64 to mitigate potential MySQL Unicode issues
        public string title { get; set; }
        // gamesystem - The system the game belongs to (such as Steam, Xbox One, PS4, etc)
        public string gamesystem { get; set; }
        // ownership - Represents different ownership types for a game. Values yet to be decided
        public string ownership { get; set; }
        // status - Represents progress status, such as not starting a game or 100%ing one. Values yet to be decided
        public string status { get; set; }
        // achievement - Number of achievements currently completed
        public string achievement { get; set; }
        // achievement_max - Total number of achievements in a game.
        public string achievement_max { get; set; }
        // progress - Text field for current progress information, stored as Base64 to mitigate potential MySQL Unicode issues
        public string progress { get; set; }
        // playing - Is the player playing this game now.
        public string playing { get; set; }
        // wishlist - Does the player want this game in the future.
        public string wishlist { get; set; }
        // appid - Stores the App ID for anything imported from a profile, used to track previously imported games to stop duplicate imports. Stored as "steam:<appid>" or "gog:<appid>".
        public string appid { get; set; }
    }
}
