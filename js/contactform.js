document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const whatsappNumber = "6283161200344"; // Nomor WhatsApp tanpa "+"

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman formulir standar

      const firstName = document.getElementById("fname")?.value.trim();
      const lastName = document.getElementById("lname")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const subject = document.getElementById("subject")?.value.trim();
      const message = document.getElementById("message")?.value.trim();

      // Validasi input
      if (!firstName || !lastName || !email || !subject || !message) {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
      }

      // Format pesan WhatsApp
      const whatsappMessage = `Halo Fai Picture! 👋\n\nSaya *${firstName} ${lastName}*, ingin bertanya tentang *${subject}*.\n\n${message}\n\nTerima kasih! Saya tunggu kabarnya. 😊`;

      // Deteksi perangkat
      const userAgent = navigator.userAgent;
      const isMobile = /iPhone|Android|iPad|iPod/i.test(userAgent);

      let whatsappUrl = isMobile
        ? `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappUrl, "_blank"); // Buka WhatsApp sesuai perangkat
    });
  }
});