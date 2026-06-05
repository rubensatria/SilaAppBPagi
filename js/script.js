// Daftar Kode Layanan
const Layanan = ['CAK', 'PDA','TNM','SKA']

// Validasi

function validasiform(){
    // 1.Dapatkan semua nilai dari inputan
    // trim menghilangkan inputan spasi
    const namalengkap = document.getElementById("namalengkap").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const prodi = document.getElementById("prodi").value.trim();
    const layanan = document.getElementById("layanan").value.trim();
    const tanggal = document.getElementById("tanggal").value.trim();
    const keterangan = document.getElementById("keterangan").value.trim();


    // Validasi 1: CEK APAKAH ADA FIELD YANG KSOONG
    if (namalengkap === '' || nim === '' || prodi === '' ||layanan === '' || tanggal === '' || keterangan === ''){
        alert("❌ Semua form wajib di isi!");
        return false;
        // mencegah form tersubmit
    }

}

