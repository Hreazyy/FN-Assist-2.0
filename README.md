README.md
markdown
Copy
Edit
# FN Assist Extension

**FN Assist** is a Chrome extension that makes it quick and easy to open Field Nation pages by ID — including user profiles, work orders, company settings, and lists of users within a company.

---

## 🔧 Features

- 🔍 Right-click any numeric ID on a webpage to:
  - Open a **User Profile**
  - Open a **Company Settings** page
  - Open a **Work Order**
  - View **All Users in a Company**

- 🧩 Use the **popup** to manually enter an ID and choose the type of page to open.

---

## 🚀 Installation

1. Download the ZIP:  
   [FN_Assist_2.0_CompanyID_Fixed.zip](https://your-download-link.com)

2. Open Chrome and go to `chrome://extensions`

3. Enable **Developer mode** (top-right corner)

4. Click **Load unpacked** and select the unzipped folder

---

## 🧠 Usage

### 🔘 Popup

Click the extension icon in the Chrome toolbar, enter a numeric ID, and choose one of:

- **User Profile** → Opens `https://app.fieldnation.com/p/{id}`
- **Company Settings** → Opens `https://app.fieldnation.com/admin/company_management/company_details.php?company_id={id}`
- **Work Order** → Opens `https://app.fieldnation.com/workorders/{id}`
- **Users in Company** → Opens `https://app.fieldnation.com/admin/user_management/user_search_results.php?company_id={id}`

### 🖱️ Context Menu

Right-click a numeric ID on any webpage to directly open the relevant Field Nation page.

---

## 📁 File Structure

FN_Assist_2.0/
├── background.js
├── popup.html
├── popup.js
├── manifest.json
├── icon-16.png
├── icon-48.png
└── icon-128.png

yaml
Copy
Edit

---

## 🔒 Permissions

This extension uses:

- `contextMenus` to add right-click functionality
- `tabs` to open Field Nation links in new tabs

---


