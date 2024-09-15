```
A service platform that allows developers, project managers etc to add customize
forms to thier  site ans sit back relax and let the service take care of OTP, email verification,
login, signup, etc.
```

# Setup

```bash
cd AuthUiService
npm run dev
```

<!-- # Testing
```bash
./manage.py test | python manage.py test
``` -->

# Running the program locally

/manage.py runserver | python manage.py runserver

````bash
npm start | npm run dev

# 28 directories, 67 files

# Project Structure
```plaintext
.
├── apis
│   ├── handlers
│   │   ├── loginRequets.js
│   │   └── signupRequests.js
│   ├── logs
│   ├── routes
│   │   └── apiRoutes.js
│   └── utils
│       ├── api_auth.js
│       └── utils.js
├── app.js
├── authentication
│   ├── auth_backend.js
│   └── middlewares.js
├── bin```

```
│   └── www
├── configs
│   ├── email.js
│   └── env.js
├── dtos
│   ├── accounts.js
│   ├── forms.js
│   └── projects.js
├── handlers
│   ├── accounts.js
│   ├── admin.js
│   ├── dashboard.js
│   ├── forms.js
│   └── projects.js
├── index.log
├── _logs
│   └── email.log
├── main.js
├── package.json
├── package-lock.json
├── prisma
│   ├── dev.db
│   ├── migrations
│   │   ├── 20240912205112_null_fields_2
│   │   │   └── migration.sql
│   │   ├── 20240912205536_null_fields_2
│   │   │   └── migration.sql
│   │   ├── 20240914164253_apikeys_and_forms
│   │   │   └── migration.sql
│   │   ├── 20240914233116_changes
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema
│       ├── accounts.prisma
│       ├── dev.db
│       ├── forms.prisma
│       ├── projects.prisma
│       └── schema.prisma
├── public
│   ├── images
│   │   ├── index_bg2.png
│   │   ├── index_bg.png
│   │   ├── logo.webp
│   │   └── profile.png
│   ├── javascripts
│   │   ├── dashboard.js
│   │   └── index.js
│   └── stylesheets
│       └── style.css
├── README.md
├── repository
│   ├── accounts.js
│   ├── forms.js
│   └── projects.js
├── routes
│   ├── accounts.js
│   ├── dashboard.js
│   ├── index.js
│   └── projects.js
├── tailwind.config.js
├── utils
│   ├── email_templates
│   │   └── otp_verification.html
│   └── utils.js
└── views
    ├── dashboard.hbs
    ├── error.hbs
    ├── error_message.hbs
    ├── index.hbs
    ├── info_message.hbs
    ├── key.hbs
    ├── layout.hbs
    ├── login_forms.hbs
    ├── login.hbs
    ├── project_settings.hbs
    ├── signup_forms.hbs
    ├── signup.hbs
    ├── user_settings.hbs
    └── verifyOtp.hbs
```

````
