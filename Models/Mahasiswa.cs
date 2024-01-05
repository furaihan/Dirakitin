namespace Dirakitin.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Mahasiswa
    {
        [Key]
        public string NIM {  get; set; }
        public string Nama { get; set; }
        public string Alamat { get; set; }
        public string Jurusan { get; set; }
    }
}
