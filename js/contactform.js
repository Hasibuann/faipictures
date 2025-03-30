document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const whatsappNumber = "6283161200344"; // Format tanpa "+"

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman formulir standar

      const firstName = document.getElementById("fname")?.value.trim();
      const lastName = document.getElementById("lname")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const subject = document.getElementById("subject")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      if (!firstName || !lastName || !email || !subject || !message) {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
      }

      // Format pesan WhatsApp lebih natural
      const whatsappMessage = `Halo Fai Picture! 👋\n\nSaya *${firstName} ${lastName}*, ingin bertanya tentang *${subject}*.\n\n${message}\n\nTerima kasih! Saya tunggu kabarnya. 😊`;

      // Deteksi perangkat
      const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
      const isDesktop = /Windows|Macintosh|Linux/i.test(navigator.userAgent);

      let whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

      if (isMobile) {
  whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
} else if (isDesktop) {
        // Coba buka WhatsApp Desktop terlebih dahulu
        const desktopUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

        window.open(desktopUrl, "_blank");

        // Jika WhatsApp Desktop gagal dibuka, alihkan ke WhatsApp Web setelah 1 detik
        setTimeout(() => {
          window.open(whatsappUrl, "_blank");
        }, 1000);
        
        return; // Mencegah eksekusi `window.open()` dua kali
      }

      window.open(whatsappUrl, "_blank"); // Buka WhatsApp sesuai perangkat
    });
  }
});