const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/estimasi', (req, res) => {
    const jumlah = parseInt(req.query.jumlah);
    const jenis = req.query.jenis ? req.query.jenis.toLowerCase() : '';

    const daftarHarga = {
        'snack': 15000,
        'makan': 30000,
        'lengkap': 45000
    };

    if (!jumlah || !jenis || !daftarHarga[jenis]) {
        return res.status(400).json({ error: "Input busuk. Kasih jumlah (angka) & jenis (snack/makan/lengkap)." });
    }

    const hargaPerPeserta = daftarHarga[jenis];
    const totalBiaya = jumlah * hargaPerPeserta;

    res.json({
        jumlah: jumlah,
        jenis: jenis,
        hargaPerPeserta: hargaPerPeserta,
        total: totalBiaya,
        timestamp: new Date().toISOString(),
        note: "Deployed via App Service"
    });
});

app.listen(port, () => console.log(`Server jalan di port ${port}`));
