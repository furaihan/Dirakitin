namespace Dirakitin.Models
{
    public class Socket
    {
        public enum SocketType
        {
            Intel,
            AMD
        }
        public int SocketID { get; set; }
        public string SocketName { get; set; }
        public SocketType Type { get; set; }
        public List<CPU> CPUs { get; set; }
    }
}
