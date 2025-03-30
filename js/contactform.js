document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const whatsappNumber = "6285692592661"; // Format tanpa "+"

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Mencegah pengiriman formulir standar

      const firstName = document.getElementById("fname").value.trim();
      const lastName = document.getElementById("lname").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!firstName || !lastName || !email || !subject || !message) {
        alert("Harap isi semua kolom sebelum mengirim pesan.");
        return;
      }

      // Format pesan WhatsApp lebih natural
      const whatsappMessage = `Halo Fai Picture! 👋\n\nSaya *${firstName} ${lastName}*, ingin bertanya tentang *${subject}*.\n\n${message}\n\nTerima kasih! Saya tunggu kabarnya. 😊`;

      // Deteksi perangkat dan aplikasi yang digunakan
      const isMobile = /iPhone|Android|iPad|iPod/i.test(navigator.userAgent);
      const isDesktop = /Windows|Macintosh|Linux/i.test(navigator.userAgent);

      let whatsappUrl = "";

      if (isMobile) {
        // Jika di HP, buka aplikasi WhatsApp langsung
        whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
          whatsappMessage
        )}`;
      } else if (isDesktop) {
        // Coba buka WhatsApp Desktop terlebih dahulu
        whatsappUrl = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
          whatsappMessage
        )}`;

        // Tambahkan fallback jika WhatsApp Desktop tidak terpasang
        setTimeout(() => {
          window.open(
            `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
              whatsappMessage
            )}`,
            "_blank"
          );
        }, 2000); // Tunggu 2 detik sebelum beralih ke WhatsApp Web
      } else {
        // Jika tidak terdeteksi, buka WhatsApp Web
        whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
          whatsappMessage
        )}`;
      }

      window.open(whatsappUrl, "_blank"); // Buka WhatsApp sesuai perangkat
    });
  }
});
