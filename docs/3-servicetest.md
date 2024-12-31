---
sidebar_position: 1
---

# راهنمای تست سرویس در داشبورد

بعد از ایجاد اولین سرویس و کلید دسترسی‌تان، می‌توانید عملکرد فلش‌کال را به صورت دستی در صفحه تست سرویس تست کنید. به این صورت که کلید دسترسی سرویسی که ساخته اید و شماره تلفنی که می‌خواهید به آن تک‌زنگ بزنید را وارد کرده و روی دریافت کد کلیک نمایید. 
.


.


.


.


.


.

حال باید منتظر بمانید تا با شماره شما تماس گرفته شود و پس از آن n رقم انتهایی آن را در کادر داده شده وارد کنید. اگر درست وارد کرده باشید، پیغام موفقیت برایتان نمایش داده شده و اطلاعات این تماس برایتان نمایش داده می شود.

.

.

.

.

.
# خلاصه مشخصات سرویس:

## تعداد ارقام:
با مشخص کردن این ویژگی تعیین می‌کنید که کدی که در نهایت کاربر شما باید وارد کند، قرار است چند رقم داشته باشد.
 ## مدت اعتبار کد:
 مشخص می‌کند که چند دقیقه بعد از کلیک کردن کاربر روی دکمه انجام تماس، کاربر فرصت دارد که کد را وارد کند و بعد از آن کد عملا منقضی خواهد شد.

گام بعدی، درخواست زدن به api فلش‌کال است. نیاز است در برنامه‌تان مکانیزمی را ایجاد کنید که هنگام احراز هویت هر کاربر، شماره تلفن آن کاربر را دریافت کرده و بعد از اینکه کاربر روی دکمه احراز هویت (یا چیزی شبیه آن در برنامه شما) کلیک می‌کند، سرور شما درخواستی به فلش‌کال بزند تا با آن کاربر تماس گرفته شود و برایش تک‌زنگ بیفتد. ضمنا در صورت اینکه کاربر بعد از گذشت زمان اعتبار کد آن را وارد نکرده باشد، با درخواست "تماس مجدد" می توانید دوباره با شماره جدیدی به او تک‌زنگ بزنید. برای دیدن جزئیات چگونگی این درخواست‌ها،
[راهنمای درخواست برقراری تک‌زنگ (Call API)](//)
و
[راهنمای درخواست تماس مجدد (Retry API)](//)
را مشاهده کنید.

شما می‌توانید گزارش تماس های برقرار شده را با جزئیات کامل در صفحه گزارش‌ها مشاهده و دانلود کنید. ضمنا این امکان وجود دارد که گزارش‌ها را به تفکیک هر سرویس و کلید دسترسی بررسی کنید. برای این کار
[راهنمای مشاهده و دانلود گزارش‌ها](//)
را ببینید.

سرویس فلش کال به صورت پس‌پرداخت است، یعنی هزینه ایجاد سرویس رایگان است و به ازای تماس‌های موفقی که با کلید های شما در سامانه انجام شده، مبلغ به صورت اعتباری کسر می‌شود. به ازای هر سرویس‌تان اعتبار وجود دارد و تا زمانی که اعتبار کل شما از حدی منفی تر نشده باشد، نیازی به پرداخت نخواهید داشت. البته که در مورد سرویس هایی که ممکن است پیک بزنند پیشنهاد می‌شود که از قبل اعتبار شارژ شده ی مثبت داشته باشید تا گذر از حد منفی منجر به قطع سرویس‌تان نشود. برای اطلاع از نحوه انجام این کار،
[راهنمای شارژ سرویس و افزایش اعتبار را](/)
ببینید.