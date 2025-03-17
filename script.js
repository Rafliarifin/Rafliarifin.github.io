const quotes = [
    "Hidup bukan tentang menunggu badai berlalu, tetapi tentang belajar menari di tengah hujan.",
    "Kesuksesan adalah kemampuan untuk pergi dari kegagalan ke kegagalan tanpa kehilangan antusiasme.",
    "Tidak ada yang tidak mungkin, kata itu sendiri sudah mengandung kata ‘mungkin’.",
    "Jangan takut gagal, takutlah jika kamu tidak mencoba.",
    "Cinta bukanlah sesuatu yang kita temukan, tetapi sesuatu yang kita bangun.",
    "Pikiran adalah segalanya. Apa yang kamu pikirkan, itulah yang kamu jadi.",
    "Langkah pertama menuju kesuksesan adalah berani gagal.",
    "Jika kamu ingin pergi cepat, pergilah sendiri. Jika kamu ingin pergi jauh, pergilah bersama-sama.",
    "Keberhasilan bukan kunci kebahagiaan. Kebahagiaan adalah kunci keberhasilan.",
    "Jangan menunggu kesempatan, ciptakanlah kesempatanmu sendiri.",
    "Keberanian adalah ketika kamu merasa takut tetapi tetap melangkah maju.",
    "Mimpi tidak akan menjadi kenyataan tanpa tindakan.",
    "Jangan biarkan apa yang tidak bisa kamu lakukan mengganggu apa yang bisa kamu lakukan.",
    "Belajar dari kemarin, hidup untuk hari ini, berharap untuk besok.",
    "Jadilah perubahan yang ingin kamu lihat di dunia.",
    "Kegagalan adalah kesempatan untuk memulai lagi dengan lebih cerdas.",
    "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu meresponsnya.",
    "Kita tidak bisa mengubah arah angin, tapi kita bisa menyesuaikan layar untuk mencapai tujuan kita.",
    "Ketika satu pintu tertutup, pintu lain terbuka.",
    "Usaha keras mengalahkan bakat ketika bakat tidak berusaha keras.",
    "Kebahagiaan sejati datang dari dalam diri, bukan dari luar.",
    "Jangan pernah menyerah, keajaiban terjadi setiap hari.",
    "Sukses dimulai dengan mimpi besar dan tindakan nyata.",
    "Orang sukses melakukan apa yang orang gagal tidak mau lakukan.",
    "Sikap yang positif akan membawa hasil yang positif.",
    "Hanya mereka yang berani gagal yang bisa meraih kesuksesan sejati.",
    "Setiap hari adalah peluang baru untuk menjadi lebih baik.",
    "Masa depan adalah milik mereka yang percaya pada keindahan impian mereka.",
    "Kesuksesan tidak datang dari zona nyaman.",
    "Semua orang bisa sukses, asal mereka mau berusaha dan belajar.",
    "Hidup bukan soal menunggu badai reda, tapi bagaimana kita belajar menari di tengah hujan.",
];

const indexTerpakai = new Set();
const quoteTag = document.getElementById("quote");

function quoteGenerator(){
    if(indexTerpakai.size >= quotes.length){
        indexTerpakai.clear();
    }

    while(true){
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if(indexTerpakai.has(randomIdx)) continue;
        const quote = quotes[randomIdx];
        quoteTag.innerHTML = quote;
        indexTerpakai.add(randomIdx);
        break;
    }
}