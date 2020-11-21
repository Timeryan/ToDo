using Microsoft.EntityFrameworkCore;

namespace TodoApi.Models
{
    public class NoteContext : DbContext
    {
        public NoteContext(DbContextOptions<NoteContext> options)
            : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=postgres;Username=postgres;Password=1984");
        }

        public DbSet<Note> Note { get; set; }
    }
}
