using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

namespace OfflineBacklogManager.Migrations
{
    public partial class DBInit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "games",
                columns: table => new
                {
                    ID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySQL:ValueGenerationStrategy", MySQLValueGenerationStrategy.IdentityColumn),
                    title = table.Column<string>(type: "text", nullable: false),
                    gamesystem = table.Column<string>(type: "text", nullable: false),
                    ownership = table.Column<string>(type: "text", nullable: false),
                    status = table.Column<string>(type: "text", nullable: false),
                    achievement = table.Column<string>(type: "text", nullable: false),
                    achievement_max = table.Column<string>(type: "text", nullable: false),
                    progress = table.Column<string>(type: "text", nullable: false),
                    playing = table.Column<string>(type: "text", nullable: false),
                    wishlist = table.Column<string>(type: "text", nullable: false),
                    appid = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UD", x => x.ID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "games");
        }
    }
}
