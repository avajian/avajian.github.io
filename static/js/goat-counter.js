/**
 * Connect to the GoatCounter API and grab the total visitor count
 */
async function loadStats() {
  const totalRes = await fetch(
    "https://avajian.goatcounter.com/counter/TOTAL.json",
  );
  const totalData = await totalRes.json();

  // Display Total Views
  document.getElementById("visit-count").innerText =
    `${totalData.count.toLocaleString()}`;
}

loadStats();
