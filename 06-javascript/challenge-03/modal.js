function createModal(title, content, buttons) {
  const overlay = document.createElement("div");
  overlay.className = "overlay";

  const modal = document.createElement("div");
  modal.className = "modal";

  modal.innerHTML = `
    <div class="header">
      <b>${title}</b>
      <span class="close">X</span>
    </div>
    <p>${content}</p>
    <div class="footer"></div>
  `;
  const footer = modal.querySelector(".footer");

  buttons.forEach(b => {
    const btn = document.createElement("button");
    btn.innerText = b.text;
    btn.onclick = b.onClick;
    footer.appendChild(btn);
  });

  overlay.appendChild(modal);
  document.body.appendChild(overlay);

  function open() {
    overlay.classList.add("show");
    document.body.classList.add("noscroll");
  }

  function close() {
    overlay.classList.remove("show");
    document.body.classList.remove("noscroll");
    setTimeout(() => overlay.remove(), 300);
  }

  modal.querySelector(".close").onclick = close;
  overlay.onclick = e => e.target === overlay && close();

  document.onkeydown = e => e.key === "Escape" && close();

  return { open, close };
}

function openModal() {
  const modal = createModal(
    "Confirm Delete",
    "Are you sure you want to delete this item?",
    [
      { text: "Cancel", onClick: () => modal.close() },
      { text: "Delete", onClick: () => { alert("Deleted"); modal.close(); } }
    ]
  );
  modal.open();
}
