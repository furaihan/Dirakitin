using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Dirakitin.Models
{
    public class KelasMengajar
    {
        [Key]
        [Required]
        public int IdKelas { get; set; }
        [DataType(DataType.DateTime)]
        public DateTime Jadwal {  get; set; }
        //Foreign Key
        public Dosen Dosen { get; set; }
        public MataKuliah MataKuliah { get; set; }

    }
}
