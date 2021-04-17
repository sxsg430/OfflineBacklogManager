using OfflineBacklogManager.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace OfflineBacklogManager.DBContexts
{
    public class OBMDBContext : DbContext
    {
        public DbSet<Game> Games { get; set; }

        public OBMDBContext(DbContextOptions<OBMDBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().ToTable("UserData");
            modelBuilder.Entity<Game>().HasKey(ud => ud.ID).HasName("PK_UD");
            modelBuilder.Entity<Game>().Property(ud => ud.ID).HasColumnType("int").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.title).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.gamesystem).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.ownership).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.status).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.achievement).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.achievement_max).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.progress).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.playing).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.wishlist).HasColumnType("text").IsRequired();
            modelBuilder.Entity<Game>().Property(ud => ud.appid).HasColumnType("text").IsRequired();
        }
    }
}
