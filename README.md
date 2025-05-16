# 🌐 FRONTEND – MERN Places Uygulaması (React)

Bu proje, kullanıcıların konum ekleyebildiği ve güncelleyebildiği bir React frontend arayüzüdür. Uygulama backend ile entegre çalışır ve JWT doğrulama sistemi kullanır.

---

## ⚙️ Özellikler

- ✅ React Router ile yönlendirme
- ✅ `useContext` ve `useAuth` ile oturum yönetimi
- ✅ Lazy loading ile performans optimizasyonu
- ✅ Resim yükleme (multipart/form-data)
- ✅ Login / Signup sayfaları
- ✅ Yetkili kullanıcıya özel sayfalar
- ✅ Backend: [BACKEND](https://github.com/ebrarkadir/BACKEND)

---

## 🚀 Başlatmak için

```bash
cd frontend
npm install
npm start
```

Uygulama `http://localhost:3000` üzerinde çalışır.

---

## 🗺️ Sayfalar

- `/auth`: Kullanıcı girişi / kayıt
- `/`: Tüm kullanıcıları listele
- `/:userId/places`: Belirli kullanıcıya ait konumlar
- `/places/new`: Yeni konum ekleme
- `/places/:placeId`: Mevcut konumu güncelleme

---
