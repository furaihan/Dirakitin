namespace Dirakitin.Models
{
    using System.ComponentModel.DataAnnotations;

    public class Mahasiswa
    {
        [Required(ErrorMessage = "NIM is required")]
        [StringLength(12, MinimumLength = 5, ErrorMessage = "NIM must be between 5 and 12 characters")]
        [Key]
        public string NIM {  get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Mahasiswa Name is required")]
        public string Nama { get; set; }
        public string Alamat { get; set; }
        [Required(ErrorMessage = "Mahasiswa Jurusan is required")]
        public string Jurusan { get; set; }
    }
}
