document.addEventListener("DOMContentLoaded", () => {
  //todo sayfa tamamen yüklendiğind eçalışacak kodlar
  const generateBtn = document.querySelector(".generate-btn");
  const saveBtn = document.querySelector(".save-btn");
  const qrCodeContainer = document.querySelector(".qr-code");
  let qrCodeInstance = null;

  generateBtn.addEventListener("click", (e) => {
    //btn click olduğunda qr oluşturur
    //kullanıcığın girdiği text/url
    let qrText = document.querySelector(".qr-text").value;

    if (qrCodeInstance) {
      qrCodeInstance.clear(); //önceki qr sil
      qrCodeInstance = null; //qr kod boş ata
      qrCodeContainer.innerHTML = ""; //qr kod container temizle
    }
    if (qrText) {
      //kullanıcının girdiği text boş değilse qr oluşturacak
      //! Qr oluşturma kısmına tekrar bakılmalı
      qrCodeInstance = new QRCode(qrCodeContainer, { text: qrText, with: 128, height: 128 });

      //qr kod animayonlu görünmesi
      qrCodeContainer.style.opacity = "1";
      qrCodeContainer.style.transform = "scale(1)";
    }
  });

  //KAydet btn basıldığında çalışan kısım

  saveBtn.addEventListener("click", () => {
    if (qrCodeInstance) {
      const qrImageData = qrCodeInstance._el.querySelector("img").getAttribute("src");

      const link = document.createElement("a");
      link.href = qrImageData;
      link.download = "qr-code.png";
      link.click;
    }
  });
});
