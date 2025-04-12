const dropArea = document.getElementById("drop-area");
const posterInput = document.getElementById("posterInput");
const posterPreview = document.getElementById("posterPreview");
const previewWrapper = document.getElementById("previewWrapper");
const dropText = document.getElementById("drop-text");
const removeBtn = document.getElementById("removeBtn");

function showPopup(msg) {
  const el = document.createElement("div");
  el.textContent = msg;
  el.className = "fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded shadow-lg z-50";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2000);
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = () => {
    posterPreview.src = reader.result;
    previewWrapper.classList.remove("hidden");
    dropText.classList.add("hidden");
  };
  reader.readAsDataURL(file);
  posterInput.value = ""; // Reset sau khi đọc
}

// Kéo/thả
["dragover", "dragleave", "drop"].forEach(evt =>
  dropArea.addEventListener(evt, e => e.preventDefault())
);
dropArea.addEventListener("drop", e => {
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) handleFile(file);
});

// Click để chọn
dropArea.addEventListener("click", () => posterInput.click());
posterInput.addEventListener("change", () => {
  const file = posterInput.files[0];
  if (file && file.type.startsWith("image/")) handleFile(file);
});

// Ctrl+V
window.addEventListener("paste", e => {
  const item = [...e.clipboardData.items].find(i => i.type.indexOf("image") !== -1);
  if (item) handleFile(item.getAsFile());
});

// Xoá ảnh
removeBtn.addEventListener("click", () => {
  if (confirm("Bạn có chắc muốn xoá ảnh poster này không?")) {
    posterPreview.src = "";
    previewWrapper.classList.add("hidden");
    dropText.classList.remove("hidden");
    showPopup("Đã xoá ảnh poster.");
  }
});

// Lưu
document.querySelector("button[type='submit']").addEventListener("click", e => {
  e.preventDefault();
  showPopup("Đã lưu thành công!");
});
