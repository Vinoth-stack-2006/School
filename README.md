# Dev Little Stars - Django Website

## 🚀 Quick Start (Run Locally)

### Step 1: Install Python & Django
```bash
pip install django
```

### Step 2: Run the server
```bash
cd devlittlestars
python manage.py runserver
```

### Step 3: Open browser
Go to: http://127.0.0.1:8000

---

## 🌐 Host on Free Platforms

### Option A: PythonAnywhere (Free - Recommended)
1. Go to https://www.pythonanywhere.com and sign up free
2. Go to "Files" → Upload this zip → Extract
3. Go to "Web" → "Add a new web app"
4. Choose: Manual config → Python 3.11
5. In WSGI config file, set path to your project
6. Done! Your site is live at yourusername.pythonanywhere.com

### Option B: Railway.app (Free tier)
1. Go to https://railway.app
2. Connect GitHub, push this project
3. Add `gunicorn` and `whitenoise` to requirements
4. Deploy!

### Option C: Render.com (Free)
1. Push to GitHub
2. New Web Service → Connect repo
3. Build: `pip install -r requirements.txt`
4. Start: `gunicorn devlittlestars.wsgi`

---

## 📁 Project Structure
```
devlittlestars/
├── manage.py
├── devlittlestars/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── school/
    ├── views.py
    ├── urls.py
    ├── templates/school/
    │   └── index.html   ← Main website page
    └── static/school/
        └── images/      ← All photos
```

## ⚙️ For Production (Before Hosting)
In settings.py:
- Change `DEBUG = True` to `DEBUG = False`
- Set `SECRET_KEY` to a strong random key
- Add your domain to `ALLOWED_HOSTS`

## 📞 Contact
Dev Little Stars · devlittlestars@gmail.com · 86100 85225
