using Dirakitin.Models;
using Microsoft.AspNetCore.Mvc;

namespace Dirakitin.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MahasiswaController(ILogger<MahasiswaController> logger, AppDbContext context) : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Mahasiswa mahasiswa)
        {
            logger.LogInformation("Mahasiswa Post Requested");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            context.Mahasiswa.Add(mahasiswa);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetMahasiswa", new { id = mahasiswa.NIM }, mahasiswa);
        }
    }
}
