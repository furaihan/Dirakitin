using Dirakitin.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Dirakitin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MahasiswaController(ILogger<MahasiswaController> logger, AppDbContext context) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Mahasiswa mahasiswa)
        {
            logger.LogInformation("/Mahasiswa Post Requested");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            logger.LogInformation("Mahasiswa is valid");

            context.Mahasiswa.Add(mahasiswa);
            await context.SaveChangesAsync();
            logger.LogInformation("Mahasiswa added successfully in database");

            return CreatedAtAction(nameof(GetMahasiswa), new {nim = mahasiswa.NIM}, mahasiswa);
        }
        // GET: api/Mahasiswa/123456
        [HttpGet("{nim}")]
        public async Task<IActionResult> GetMahasiswa(string nim)
        {
            var mahasiswa = await context.Mahasiswa.FindAsync(nim);

            if (mahasiswa == null)
            {
                return NotFound();
            }

            return Ok(mahasiswa);
        }

    }
}
