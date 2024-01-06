using System.ComponentModel.DataAnnotations;

namespace Dirakitin.Models
{
    public class MataKuliah
    {
        [Key]
        public string KodeMK { get; set; }
        [Required(AllowEmptyStrings = false, ErrorMessage = "Nama is required")]
        [StringLength(256, MinimumLength = 3, ErrorMessage = "Nama must between 3 - 256 character")]
        public string Nama {  get; set; }
        [Required(ErrorMessage = "JumlahSKS is required")]
        public byte JumlahSKS { get;set; }
        [DataType(DataType.Text)]
        public string Keterangan { get; set; }
    }
}
