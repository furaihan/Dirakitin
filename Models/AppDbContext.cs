namespace Dirakitin.Models
{
    using Microsoft.EntityFrameworkCore;
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Mahasiswa> Mahasiswa { get; set; } = null;
    }
}
