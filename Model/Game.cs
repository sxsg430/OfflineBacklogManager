using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfflineBacklogManager.Model
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
        public int ownership { get; set; }
        // status - Represents progress status, such as not starting a game or 100%ing one. Values yet to be decided
        public int status { get; set; }
        // achievement - Number of achievements currently completed
        public int achievement { get; set; }
        // achievement_max - Total number of achievements in a game.
        public int achievement_max { get; set; }
        // progress - Text field for current progress information, stored as Base64 to mitigate potential MySQL Unicode issues
        public string progress { get; set; }
        // playing - 1 if the user is currently playing the game.
        public int playing { get; set; }
        // wishlist - 1 if the user doesn't own the game but wants it in the future.
        public int wishlist { get; set; }
        // appid - Stores the App ID for anything imported from a profile, used to track previously imported games to stop duplicate imports. Stored as "steam:<appid>" or "gog:<appid>".
        public string appid { get; set; }
    }
}
