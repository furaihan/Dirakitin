using Dirakitin.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dirakitin.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class DosenController(ILogger<DosenController> logger, AppDbContext context) : Controller
    {
        // POST: /Dosen
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Dosen dosen)
        {
            logger.LogInformation("/Dosen Post Requested");
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            logger.LogInformation("Dosen is valid");

            context.Dosen.Add(dosen);
            await context.SaveChangesAsync();
            logger.LogInformation("Dosen added successfully in database");

            return CreatedAtAction(nameof(GetDosen), new {nip = dosen.NIP}, dosen);
        }
        // GET: /Dosen/123456
        [HttpGet("{nip}")]
        public async Task<IActionResult> GetDosen(string nip)
        {
            var dosen = await context.Dosen.FindAsync(nip);

            if (dosen == null)
            {
                return NotFound();
            }

            return Ok(dosen);
        }
    }
}
