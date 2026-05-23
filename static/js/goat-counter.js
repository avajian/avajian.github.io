async function loadStats() {
  const totalRes = await fetch(
    "https://avajian.goatcounter.com/counter/TOTAL.json",
  );
  const totalData = await totalRes.json();

  // Display Total Views
  document.getElementById("visit-count").innerText =
    `${totalData.count.toLocaleString()}`;

  // Display Unique Visitors
  if (totalData.count_unique) {
    document.getElementById("unique-count").innerText =
      `${totalData.count_unique.toLocaleString()}`;
  } else {
    document.getElementById("unique-count").innerText = "0";
  }
}

loadStats();
