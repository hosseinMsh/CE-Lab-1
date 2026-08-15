# وب‌سایت نمونه‌کار شخصی

یک وب‌سایت نمونه‌کار واکنش‌گرا که با React و Vite ساخته شده است تا یک گردش‌کار کامل Git را نمایش دهد.

## توضیحات پروژه

این پروژه شامل موارد زیر است:

- بخش قهرمان صفحه اصلی
- بخش درباره من
- بخش مهارت‌ها
- بخش پروژه‌ها
- بخش تماس
- پیمایش واکنش‌گرا
- پابرگ
- کلید تغییر پوسته تاریک/روشن

## نصب
```bash
npm install

## اجرای محلی

bash
npm run dev

## استقرار

این پروژه برای استقرار در GitHub Pages از طریق GitHub Actions آماده شده است.

### تنظیمات مخزن

1. تنظیمات مخزن را باز کنید.
2. به بخش `Pages` بروید.
3. منبع را روی `GitHub Actions` تنظیم کنید.
4. تغییرات را ذخیره کنید.

### استقرار با Actions

گردش‌کار موجود در `.github/workflows/deploy.yml`:

1. مخزن را دریافت می‌کند.
2. وابستگی‌ها را نصب می‌کند.
3. برنامه React را می‌سازد.
4. پوشه `dist` را در GitHub Pages مستقر می‌کند.

## توضیح گردش‌کار Git

این مخزن از رویکردی مشابه Git Flow پیروی می‌کند:

- شاخه `main` نسخه پایدار را نگهداری می‌کند.
- شاخه `develop` کارهای تکمیل‌شده را یکپارچه می‌کند.
- شاخه‌های `feature/*` قابلیت‌های مشخص رابط کاربری را اضافه می‌کنند.
- شاخه‌های `hotfix/*` مشکلات استقرار یا انتشار را برطرف می‌کنند.

### روند شاخه‌ها

1. یک شاخه از `develop` ایجاد کنید.
2. قابلیت را در قالب commitهای کوچک پیاده‌سازی کنید.
3. یک pull request به مقصد `develop` باز کنید.
4. در صورت نیاز، تعارض‌ها را برطرف کنید.
5. برای انتشار، `develop` را با `main` ادغام کنید.

### سبک commit

نمونه‌های استفاده‌شده در این پروژه:

- `feat: initialize React project scaffold`
- `feat: add responsive navigation and theme toggle`
- `feat: build the portfolio landing page sections`
- `feat: add contact form and footer links`
- `fix: harden GitHub Pages deployment workflow`
- `docs: refine deployment guidance`

### Pull Requestها

هر شاخه قابلیت باید از طریق یک pull request ادغام شود. PRها تاریخچه پروژه را قابل بررسی نگه می‌دارند، گفت‌وگو و بررسی را الزامی می‌کنند و به شناسایی تعارض‌های ادغام پیش از انتشار کمک می‌کنند.

### رفع تعارض‌ها

در این آزمایشگاه دو تعارض واقعی ایجاد و برطرف شدند:

1. `feature/navbar` در برابر `feature/home-page` در فایل `src/components/Navbar.jsx`
2. `docs/readme-finish` در برابر `develop` در فایل `README.md`

## دستورات Git به‌صورت گام‌به‌گام

bash
git init
git branch -m main
git checkout -b develop
git checkout -b feature/navbar
git checkout develop
git checkout -b feature/home-page
git checkout develop
git checkout -b feature/contact-section
git checkout develop
git checkout -b hotfix/deploy-fix
git checkout -b docs/readme-finish
git checkout main
git merge --no-ff develop -m "merge: develop into main"

## دستورات توالی commitها

bash
git add . && git commit -m "feat: initialize React project scaffold"
git add src/components/Navbar.jsx src/components/ThemeToggle.jsx src/App.jsx src/styles/global.css && git commit -m "feat: add responsive navigation and theme toggle"
git add src/styles/global.css && git commit -m "style: improve navbar interactions and focus states"
git add src/App.jsx && git commit -m "fix: synchronize document color scheme with theme"
git add src/pages/Home.jsx src/components/sections/HeroSection.jsx src/components/sections/AboutSection.jsx src/components/sections/SkillsSection.jsx src/components/ProjectCard.jsx src/components/sections/ProjectsSection.jsx src/components/sections/ContactSection.jsx src/components/Footer.jsx src/components/Navbar.jsx src/styles/global.css && git commit -m "feat: build the portfolio landing page sections"
git add src/components/SectionHeading.jsx src/components/sections/AboutSection.jsx src/components/sections/SkillsSection.jsx src/components/sections/ProjectsSection.jsx src/components/sections/ContactSection.jsx src/styles/global.css && git commit -m "style: tighten section spacing and card layouts"
git add src/components/sections/ContactSection.jsx src/components/Footer.jsx src/styles/global.css README.md && git commit -m "feat: add contact form and footer links"
git add README.md && git commit -m "docs: expand git workflow notes"
git add .github/workflows/deploy.yml README.md && git commit -m "fix: harden GitHub Pages deployment workflow"
git add README.md && git commit -m "docs: add git flow overview"
git add README.md && git commit -m "docs: refine deployment guidance"
git add index.html && git commit -m "style: polish document metadata"
git add src/components/sections/HeroSection.jsx src/components/sections/AboutSection.jsx && git commit -m "feat: refine hero and about copy"
git add README.md && git commit -m "docs: expand branch protection guidance"

## دستورات شبیه‌سازی تعارض

### تعارض ۱: نوار پیمایش

bash
git checkout develop
git merge --no-ff feature/navbar -m "merge: feature/navbar into develop"
git merge --no-ff feature/home-page -m "merge: feature/home-page into develop"

تعارض موجود در `src/components/Navbar.jsx` و `src/styles/global.css` را برطرف کنید، سپس:

bash
git add src/components/Navbar.jsx src/styles/global.css
git commit --no-edit

### تعارض ۲: README

bash
git checkout develop
git merge --no-ff docs/readme-finish -m "merge: docs/readme-finish into develop"

تعارض موجود در `README.md` را برطرف کنید، سپس:

bash
git add README.md
git commit --no-edit

## پرسش‌های تئوری Git

### ۱. پوشه `.git` چیست؟

این پوشه پایگاه داده داخلی Git برای مخزن است.

### ۲. چه اطلاعاتی درون `.git` ذخیره می‌شود؟

آبجکت‌ها، commitها، شاخه‌ها، tagها، refها، داده‌های index، گزارش‌ها و تنظیمات.

### ۳. `.git` چگونه ایجاد می‌شود؟

با اجرای `git init` یا clone کردن یک مخزن موجود.

### ۴. منظور از atomic در موارد زیر چیست؟

- **Atomic commit:** یک تغییر منطقی که به‌تنهایی کامل است.
- **Atomic pull request:** یک PR که یک تغییر منسجم را ارائه می‌کند.

### ۵. تفاوت‌های `git fetch`، `git pull`، `git merge`، `git rebase` و `git cherry-pick` را توضیح دهید.

- `git fetch`: به‌روزرسانی‌های remote را دریافت می‌کند، بدون اینکه شاخه‌های محلی را تغییر دهد.
- `git pull`: در یک مرحله، fetch را انجام داده و سپس merge یا rebase می‌کند.
- `git merge`: تاریخچه شاخه‌ها را با یک merge commit یا fast-forward ترکیب می‌کند.
- `git rebase`: commitها را روی یک پایه دیگر بازنویسی می‌کند.
- `git cherry-pick`: یک commit مشخص را روی شاخه‌ای دیگر کپی می‌کند.

### ۶. تفاوت‌های `git reset`، `git revert`، `git restore`، `git switch` و `git checkout` را توضیح دهید.

- `git reset`: موقعیت HEAD را جابه‌جا می‌کند و می‌تواند تاریخچه را بازنویسی کند.
- `git revert`: یک commit جدید ایجاد می‌کند که اثر یک commit قبلی را برمی‌گرداند.
- `git restore`: فایل‌های درخت کاری یا index را بازیابی می‌کند.
- `git switch`: بین شاخه‌ها جابه‌جا می‌شود.
- `git checkout`: دستور قدیمی و چندمنظوره برای شاخه‌ها و فایل‌ها است.

### ۷. ناحیه staging یا index و `git stash` را توضیح دهید.

- **ناحیه staging یا index:** محلی که تغییرات پیش از commit در آن آماده می‌شوند.
- `git stash`: تغییرات محلی را به‌طور موقت کنار می‌گذارد.

### ۸. Snapshot و رابطه آن با commit را توضیح دهید.

- **Snapshot:** وضعیت ثبت‌شده فایل‌های تحت ردیابی در یک لحظه مشخص.
- یک commit به‌علاوه فراداده و پیوندهای commit والد، به یک snapshot اشاره می‌کند.

### ۹. مخزن محلی در برابر مخزن remote

- **مخزن محلی:** نسخه‌ای از مخزن که روی دستگاه شما قرار دارد.
- **مخزن remote:** نسخه‌ای مشترک که در GitHub یا سرور دیگری قرار دارد.

## قوانین شاخه محافظت‌شده

تنظیمات پیشنهادی GitHub برای `main`:

- محافظت از شاخه
- الزام pull request پیش از ادغام
- الزام حداقل یک بررسی
- الزام موفقیت‌آمیز بودن بررسی‌های وضعیت
- غیرفعال کردن push مستقیم
- محدود کردن push اجباری

بررسی‌های پیشنهادی گردش‌کار:

- ساخت پروژه باید روی `main` موفق باشد.
- پیش از ادغام باید بررسی یک مشارکت‌کننده دیگر انجام ش

## Result

The final project is a clean static portfolio site with a realistic Git Flow history, branch-based development, merge conflict handling, and GitHub Pages deployment readiness.
