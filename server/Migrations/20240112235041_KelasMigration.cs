using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Dirakitin.Migrations
{
    /// <inheritdoc />
    public partial class KelasMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Dosen",
                columns: table => new
                {
                    NIP = table.Column<string>(type: "varchar(18)", maxLength: 18, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Nama = table.Column<string>(type: "varchar(256)", maxLength: 256, nullable: false)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    Alamat = table.Column<string>(type: "longtext", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dosen", x => x.NIP);
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "KelasMengajar",
                columns: table => new
                {
                    IdKelas = table.Column<int>(type: "int", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Jadwal = table.Column<DateTime>(type: "datetime(6)", nullable: false),
                    DosenNIP = table.Column<string>(type: "varchar(18)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4"),
                    MataKuliahKodeMK = table.Column<string>(type: "varchar(255)", nullable: true)
                        .Annotation("MySql:CharSet", "utf8mb4")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_KelasMengajar", x => x.IdKelas);
                    table.ForeignKey(
                        name: "FK_KelasMengajar_Dosen_DosenNIP",
                        column: x => x.DosenNIP,
                        principalTable: "Dosen",
                        principalColumn: "NIP");
                    table.ForeignKey(
                        name: "FK_KelasMengajar_MataKuliah_MataKuliahKodeMK",
                        column: x => x.MataKuliahKodeMK,
                        principalTable: "MataKuliah",
                        principalColumn: "KodeMK");
                })
                .Annotation("MySql:CharSet", "utf8mb4");

            migrationBuilder.CreateIndex(
                name: "IX_KelasMengajar_DosenNIP",
                table: "KelasMengajar",
                column: "DosenNIP");

            migrationBuilder.CreateIndex(
                name: "IX_KelasMengajar_MataKuliahKodeMK",
                table: "KelasMengajar",
                column: "MataKuliahKodeMK");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "KelasMengajar");

            migrationBuilder.DropTable(
                name: "Dosen");
        }
    }
}
