using System.ComponentModel.DataAnnotations;

namespace Dirakitin.Models
{
    public class Dosen
    {
        [Key]
        [Required]
        [StringLength(18)]

        public string NIP { get; set; }
        [StringLength(256, MinimumLength = 3, ErrorMessage = "Nama must between 3-256 character")]
        [Required]
        public string Nama { get; set; }
        [DataType(DataType.Text)]
        public string Alamat { get; set; }
        public List<KelasMengajar> Kelas {  get; set; }


    }
}
