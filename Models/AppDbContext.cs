namespace Dirakitin.Models
{
    using Microsoft.EntityFrameworkCore;
    public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
    {
        public DbSet<Mahasiswa> Mahasiswa { get; set; } = null;
        public DbSet<MataKuliah> MataKuliah { get; set;} = null;
        public DbSet<Dosen> Dosen { get; set; } = null;
        public DbSet<KelasMengajar> KelasMengajar { get; set; } = null;
    }
}
