﻿// <auto-generated />
using Dirakitin.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Dirakitin.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20240105185417_Initial")]
    partial class Initial
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("Dirakitin.Models.Mahasiswa", b =>
                {
                    b.Property<string>("NIM")
                        .HasColumnType("varchar(255)");

                    b.Property<string>("Alamat")
                        .HasColumnType("longtext");

                    b.Property<string>("Jurusan")
                        .HasColumnType("longtext");

                    b.Property<string>("Nama")
                        .HasColumnType("longtext");

                    b.HasKey("NIM");

                    b.ToTable("Mahasiswa");
                });
#pragma warning restore 612, 618
        }
    }
}
