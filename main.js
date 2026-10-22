// ===== CONFIG: set the contract address here once known =====
const CONTRACT_ADDRESS = "0x8d3d2c633d0dd4dabb59bdff681d45ac8f22f776";
const X_LINK = "https://x.com/Snowmoon_E";
const UNISWAP_BASE = "https://app.uniswap.org/swap?chain=mainnet";
const hasCA = /^0x[a-fA-F0-9]{40}$/.test(CONTRACT_ADDRESS);
const buyUrl = hasCA ? UNISWAP_BASE + "&outputCurrency=" + CONTRACT_ADDRESS : UNISWAP_BASE;

document.querySelectorAll("#ca, .ca-text").forEach((el) => {
  el.textContent = CONTRACT_ADDRESS;
});
document.querySelectorAll("a.buy").forEach((a) => {
  a.href = buyUrl;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
});
document.querySelectorAll("a.xlink").forEach((a) => {
  a.href = X_LINK;
});
