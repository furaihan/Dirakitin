using Dirakitin.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Dirakitin.Controllers
{
    [ApiController]
    [Route("Jokes")]
    public class JokeController : ControllerBase
    {
        private HttpClient _httpClient;
        private readonly ILogger<WeatherForecastController> _logger;
        public JokeController(HttpClient httpClient, ILogger<WeatherForecastController> logger)
        {
            _httpClient = httpClient;
            _logger = logger;
            _httpClient.DefaultRequestHeaders.Add("Accept", "application/json");
        }
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            Uri uri = new("https://icanhazdadjoke.com/");
            try
            {
                HttpResponseMessage httpResponseMessage = await _httpClient.GetAsync(uri);
                if (httpResponseMessage.IsSuccessStatusCode)
                {
                    string jsonResponse = await httpResponseMessage.Content.ReadAsStringAsync();
                    _logger.LogInformation(jsonResponse);
                    Joke joke = JsonConvert.DeserializeObject<Joke>(jsonResponse);
                    joke.DateRetreived = DateTime.Now;
                    return Ok(joke);
                }
                return StatusCode((int)httpResponseMessage.StatusCode,
                    $"Error: {httpResponseMessage.StatusCode} - {httpResponseMessage.ReasonPhrase}");

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message, ex);
                return StatusCode(500, $"Internal Server Error: {ex.Message}");
            }
        }

    }
}
