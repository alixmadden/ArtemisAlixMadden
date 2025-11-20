# ArtemisAlixMadden
// Sample data for highlights
const highlights = [
  {
    title: "Breanna Stewart & A'ja Wilson — WNBA Stars",
    img: "https://images.unsplash.com/photo-1579656592043-3c4c18f6a5a0?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Hilary Knight — Team USA Hockey",
    img: "https://images.unsplash.com/photo-1599948092216-3c6fe7f02d20?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Sophia Smith — NWSL Forward",
    img: "https://images.unsplash.com/photo-1601315004504-1e2699b0f9b1?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Charlotte North — Lacrosse Phenomenon",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Jocelyn Alo & Montana Fouts — Softball Icons",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?auto=format&fit=crop&w=800&q=60"
  }
];

// Render card gallery
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("highlights");
  container.innerHTML = highlights
    .map(
      (h) => `
      <div class="card">
        <img src="${h.img}" alt="${h.title}" />
        <div class="text">
          <h3>${h.title}</h3>
        </div>
      </div>
    `
    )
    .join("");
});
