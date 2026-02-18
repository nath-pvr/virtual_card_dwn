const copyButton = document.getElementById("copy-link");
const toast = document.getElementById("toast");

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1600);
}

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(window.location.href);
    showToast("Lien copie");
  } catch {
    showToast("Impossible de copier le lien");
  }
});
