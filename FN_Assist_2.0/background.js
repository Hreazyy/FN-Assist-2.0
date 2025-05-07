
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "openUserProfile",
    title: "Open FN User Profile by ID",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "openCompanySettings",
    title: "Open FN Company Settings by ID",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "openWorkOrder",
    title: "Open FN Work Order by ID",
    contexts: ["selection"]
  });

  chrome.contextMenus.create({
    id: "openCompanyUsers",
    title: "Open All Users in Company by ID",
    contexts: ["selection"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  const id = info.selectionText.trim();
  if (!/^\d+$/.test(id)) {
    alert("Please select a valid numeric ID.");
    return;
  }

  let url = "";
  switch (info.menuItemId) {
    case "openUserProfile":
      url = `https://app.fieldnation.com/p/${id}`;
      break;
    case "openCompanySettings":
      url = `https://app.fieldnation.com/admin/company_management/company_details.php?company_id=${id}`;
      break;
    case "openWorkOrder":
      url = `https://app.fieldnation.com/workorders/${id}`;
      break;
    case "openCompanyUsers":
      url = `https://app.fieldnation.com/admin/user_management/user_search_results.php?company_id=${id}`;
      break;
  }

  if (url) {
    chrome.tabs.create({ url });
  }
});
