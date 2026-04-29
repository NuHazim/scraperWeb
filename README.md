# 📚 Book Scraper Web App

A simple full-stack web application that scrapes book data from a practice website and displays it in a clean, structured format.

---

## 🚀 Features

* Scrape books from multiple pages
* User-defined page range (e.g. `1-3`)
* Data grouped and displayed by page
* REST API integration
* Clean and simple UI

---

## 🧠 How It Works

This project follows a proper web architecture:

Frontend (HTML, CSS, JavaScript)
→ sends request to backend API
→ backend scrapes data from website
→ returns JSON response
→ frontend displays results

---

## 🛠 Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express
* **Scraping Tools:** Axios, Cheerio

---

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-link>
cd scraper-app
```

2. Install dependencies:

```bash
npm install
```

3. Run the server:

```bash
node server.js
```

4. Open in browser:

```
http://localhost:3000
```

---

## ▶️ Usage

1. Enter a page range (e.g. `1-3`)
2. Click **Scrape**
3. View books grouped by page

---

## 🔌 API Endpoint

### GET `/api/books`

Query parameters:

* `range` → page range (e.g. `1-3`)

Example:

```
http://localhost:3000/api/books?range=1-2
```

Response:

```json
{
  "Page 1": ["Book A", "Book B"],
  "Page 2": ["Book C", "Book D"]
}
```

---

## ⚠️ Notes

* This project uses a practice website designed for scraping
* Avoid scraping real websites without permission
* A small delay is added between requests to prevent overload

---

## 💡 Future Improvements

* Add book price and rating
* Store data in database (MongoDB)
* Add search and filtering
* Improve UI design
* Add loading indicator

---

## 🎯 Learning Outcomes

* Understanding REST APIs
* Implementing CRUD (Read operation)
* Handling pagination in scraping
* Connecting frontend and backend
* Debugging real-world issues

---

## 📌 Author

NuHazim

---

## ⭐ Acknowledgements

Data sourced from a public practice scraping website.
