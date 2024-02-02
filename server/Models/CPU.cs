namespace Dirakitin.Models
{
    public class CPU
    {
        public int CPUID { get; set; }
        public string Model { get; set; }
        public int Core { get; set; }
        public int Thread { get; set; }
        public int BaseClock { get; set; }
        public int BoostClock { get; set; }
        public int TDP { get; set; }
        public int Price { get; set; }
        public int L1Cache { get; set; }
        public int L2Cache { get; set; }
        public int L3Cache { get; set; }

    }
}
