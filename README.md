# INTERN WEBAPP 

A full-stack intern management portal built using **React (Vite)** for the frontend and **Django** for the backend.  
This project is developed as part of an internship assignment and helps manage intern/volunteer registrations, and admin panel to view and manage applicants.

---

## 🌐 Tech Stack

### Frontend – `client/`
- React (with Vite)
- Tailwind CSS
- React Router DOM
- Recharts (for charts/graphs)
- Axios

### Backend – `server/`
- Django
- Django REST Framework
- SQLite3 (for development)
- CORS Headers
- Django Admin (for managing applicants)

---

## 📁 Folder Structure

```
INTERN-WEBAPP/
│
├── client/              # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # Navbar, Sidebar etc.
│   │   ├── layouts/     # Main layout with navbar/sidebar
│   │   ├── pages/       # Dashboard, Reports, Files, Settings
│   │   └── App.jsx
│   └── tailwind.config.js
│
├── server/              # Django backend
│   ├── manage.py
│   ├── server/          # Main Django project folder
│   └── api/             # Django app for handling registration
│
├── .gitignore
├── README.md
└── LICENSE (optional)
```

---

## 🚀 How to Run the Project Locally

### 🖥️ 1. Clone the Repository

```bash
git clone https://github.com/Vikasprajapat1602/INTERN-WEBAPP.git
cd INTERN-WEBAPP
```

---

### 🌐 2. Setup Frontend (`client`)

```bash
cd client
npm install
npm run dev
```

The React app will run on `http://localhost:5173`.

---

### 🔧 3. Setup Backend (`server`)

```bash
cd server
# (Optional but recommended) Create a virtual environment
python -m venv venv
# Activate it
# For Windows:
venv\Scripts\activate
# For Linux/macOS:
source venv/bin/activate

# Install required packages (create requirements.txt first if needed)
pip install django djangorestframework django-cors-headers

# Apply database migrations and run the server
python manage.py migrate
python manage.py runserver
```

The Django server will run on `http://localhost:8000`.


---

## 🧩 Features

- 📝 **Intern/Volunteer Registration Form**
- 🧑‍💻 **Admin Dashboard** to view applicant data
- 🎨 Modern, responsive UI using Tailwind CSS
- 🔒 Secure data submission via Django REST API

---

## 📌 Notes

- Ensure CORS is configured in Django to allow requests from React frontend.
- Environment variables like `.env` are included in `.gitignore`.
- No sensitive data (like keys or tokens) is committed to GitHub.

---

## 🙌 Author

**Vikas Prajapat**  
[GitHub Profile](https://github.com/Vikasprajapat1602)

---

## 📄 License

This project is for educational/internship use.  
You may add a license like [MIT License](https://opensource.org/licenses/MIT) if planning to open source it officially.

