namespace Dirakitin.Models
{
    using Newtonsoft.Json;
    public class Joke
    {
        public string Id { get; set; }
        [JsonProperty(PropertyName = "joke")]
        public string Content {  get; set; }
        public DateTime DateRetreived { get; set; } = DateTime.UtcNow;
    }
}
