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
        public DbSet<UserData> UserDatas { get; set; }

        public OBMDBContext(DbContextOptions<OBMDBContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserData>().ToTable("UserData");
            modelBuilder.Entity<UserData>().HasKey(ud => ud.id).HasName("PK_UD");
            modelBuilder.Entity<UserData>().Property(ud => ud.id).HasColumnType("int").IsRequired();
            modelBuilder.Entity<UserData>().Property(ud => ud.username).HasColumnType("text").IsRequired();
            modelBuilder.Entity<UserData>().Property(ud => ud.authid).HasColumnType("text").IsRequired();
            modelBuilder.Entity<UserData>().Property(ud => ud.email).HasColumnType("text").IsRequired();
            modelBuilder.Entity<UserData>().Property(ud => ud.gamedata).HasColumnType("longtext").IsRequired();
        }
    }
}
