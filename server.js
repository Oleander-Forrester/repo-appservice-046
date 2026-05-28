const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Ini "Nuclear Option" biar gak diblok browser lagi

app.get('/estimasi', (req, res) => {
    const jumlah = parseInt(req.query.jumlah);
    const jenis = (req.query.jenis || '').toLowerCase();
    const daftarHarga = { 'snack': 15000, 'makan': 30000, 'lengkap': 45000 };

    if (!jumlah || !daftarHarga[jenis]) {
        return res.status(400).json({ error: "Input busuk." });
    }

    res.json({
        jumlah,
        jenis,
        hargaPerPeserta: daftarHarga[jenis],
        total: jumlah * daftarHarga[jenis],
        timestamp: new Date().toISOString()
    });
});

app.listen(port, () => console.log(`Run on ${port}`));
