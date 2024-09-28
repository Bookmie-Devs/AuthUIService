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

# Running the program locally

```bash
npm start | npm run dev
```

# Running it as a simple linux service

```plaintext
[Unit]
Description=AuthUi Service
After=network.target

[Service]
WorkingDirectory=/path/to/project/dir
ExecStart=/bin/node start /path/to/project/dir
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

# copy to serice etc

```bash
sudo cp authUiSerive.service /etc/systemd/system/
```

# reload demmon

```bash
sudo systemctl daemon-reload
```

# start service

```bash
sudo systemctl start authUiSerive
```

# 28 directories, 67 files

# Project Structure

```plaintext
.
├── app.js
├── authentication
│   ├── auth_backend.js
│   └── middlewares.js
├── bin
│   └── www
├── configs
│   ├── email.js
│   └── env.js
├── deno.json
├── Dockerfile
├── dtos
│   ├── accounts.js
│   ├── forms.js
│   └── projects.js
├── engine
│   ├── apis
│   │   ├── api_schema
│   │   │   └── schema.js
│   │   ├── handlers
│   │   │   ├── loginRequests.js
│   │   │   └── signupRequests.js
│   │   ├── middlewares
│   │   │   └── middlewares.js
│   │   └── routes
│   │       └── apiRoutes.js
│   ├── logs
│   └── utils
│       ├── api_auth.js
│       └── utils.js
├── forms
├── handlers
│   ├── accounts.js
│   ├── admin.js
│   ├── dashboard.js
│   ├── forms.js
│   └── projects.js
├── _logs
│   ├── email.log
│   └── log.bash
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
│   │   ├── 20240920131214_emai_verification_table
│   │   │   └── migration.sql
│   │   ├── 20240920131817_emai_verification_table
│   │   │   └── migration.sql
│   │   ├── 20240920135827_project_users
│   │   │   └── migration.sql
│   │   ├── 20240920142933_project_users
│   │   │   └── migration.sql
│   │   ├── 20240920143201_project_users
│   │   │   └── migration.sql
│   │   ├── 20240920144133_project_users
│   │   │   └── migration.sql
│   │   ├── 20240920170707_project_users
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
│   ├── forms.js
│   ├── index.js
│   └── projects.js
├── tailwind.config.js
├── uploads
├── utils
│   ├── email_templates
│   │   └── otp_verification.html
│   └── utils.js
└── views
    ├── add_forms.hbs
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

40 directories, 79 files
```
