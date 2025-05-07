document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("openUser").addEventListener("click", () => openUrl("user"));
  document.getElementById("openCompany").addEventListener("click", () => openUrl("company"));
  document.getElementById("openWO").addEventListener("click", () => openUrl("wo"));
  document.getElementById("openCompanyUsers").addEventListener("click", () => openUrl("companyUsers"));
});

function openUrl(type) {
  const id = document.getElementById("idInput").value.trim();
  if (!/^\d+$/.test(id)) {
    alert("Please enter a valid numeric ID.");
    return;
  }

  let url = "";
  switch (type) {
    case "user":
      url = `https://app.fieldnation.com/p/${id}`;
      break;
    case "company":
      url = `https://app.fieldnation.com/admin/company_management/company_details.php?company_id=${id}`;
      break;
    case "wo":
      url = `https://app.fieldnation.com/workorders/${id}`;
      break;
    case "companyUsers":
      url = `https://app.fieldnation.com/admin/user_management/user_search_results.php?company_id=${id}`;
      break;
  }

  if (url) {
    chrome.tabs.create({ url });
  }
}
