using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dirakitin.Migrations
{
    /// <inheritdoc />
    public partial class MataKuliah : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MataKuliah",
                columns: table => new
                {
                    KodeMK = table.Column<string>(type: "varchar(255)", nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Nama = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    JumlahSKS = table.Column<byte>(type: "tinyint unsigned", nullable: false),
                    Keterangan = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MataKuliah", x => x.KodeMK);
                })
                .Annotation("MySql:CharSet", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MataKuliah");
        }
    }
}
