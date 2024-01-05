namespace Dirakitin.Models
{
    using Microsoft.EntityFrameworkCore;
    public class AppDbContext: DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) 
        {
        }
        public DbSet<Mahasiswa> Mahasiswa { get; set; } = null;
    }
}
