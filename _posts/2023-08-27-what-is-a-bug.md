---
author: saif
title: "بگ کیا ہوتا ہے؟"
excerpt: "کسی سافٹ وئیر میں بگ (کمزوری) کیا ہوتی ہے؟؟"
header:
  image: 'assets/images/headers/bug.png'
---

* toc
{: toc}
---

# مقدمہ

اس بلاگ پوسٹ میں ہم جانیں گے کہ بگ کسے کہتے  ہیں؟ حملہ آور لوگوں کو نشانہ بنانے کے لیے اس کا استعمال کیسے کرتے ہیں؟

## بگ کیا ہوتا ہے؟

بگ کے معنی ہے (کمزوری) یعنی جب آپ کوئی سافٹ ویئر کا استعمال کرتے ہیں اور اس میں کوئی کمزوری ہوتی ہے، تو اسے بگ کہتے ہیں، اب یہ جاننا ضروری ہے کی سافٹ ویئر کیا ہوتا ہے؟ اور یہ بنتا کیسے  ہے؟؟

سافٹ ویئر ایک پروگرام ہوتا ہے جو کمپیوٹر زبان کی  مدد سے لکھا جاتا ہے، سافٹ ویئر کو کمپیوٹر کی کسی بھی زبان میں لکھا جا سکتا ہے۔ سافٹ ویئر کا استعمال ہم روزانہ کرتے ہیں، آپ اپنے فون یا کمپیوٹر میں جس بھی ایپ کا استعمال کرتے ہیں، وہ ایک سافٹ ویئر ہے، اب  ان سب ایپ کو ایک پروگرامنگ زبان میں  ہی لکھا جاتا ہے اور لکھنے والے انسان ہی ہوتے ہیں، تو عین ممکن ہے کہ کوڈ لکھتے وقت کوئی ایسا کوڈ لکھا جائے جو کمزور ہو اور جس کا فائدہ اُٹھا کرر حملہ آور یوزرس کو نشانہ بنا لے۔

## بگ کی قسمیں

بگ کی کئی قسمیں ہیں، کچھ بگ ایسے ہوتے ہیں، جس سے سیکورٹی کا مسئلہ بنتا ہے، اور کچھ بگ بس نارمل ہوتے ہیں، جو بس خرابی (Error) پیدا کرتے ہیں، بگ کی قسمیں: 

1. سیٹیکس ایرر (Syntax Error): یہ نارمل ایرر ہوتے ہیں، پروگرام لکھتےوقت اگر پروگرام کو پروگرامنگ زبان کے قواعد سےنہ لکھا جائے تو یہ ایرر پیدا ہوتے ہیں۔

2. لاجک  ایرر (Logic Error): یہ بگ پروگرام کے لاجک کو بگاڑ دیتے ہیں، اگر لاجک صحیح نہیں لکھا جائے تو پروگرام کچھ کا کچھ کام کرتا ہے۔

3. سیکیورٹی بگ (Security Bugs): یہ بگ خطرناک ہوتے ہیں، کیوں کہ اسی بگ کا استعمال کر کے حملہ آور حملہ کرتے ہیں، اور نقصان پہنچاتے ہیں۔

بگ کی اور بہت سی قسمیں ہیں، لیکن یہ عام ہوتے ہیں، جن کا ذکر ابھی میں نے کیا۔

## سیکیورٹی بگس کی قسمیں

جب کسی سافٹ ویئر میں سیکیورٹی بگ ملتا ہے، حملہ آور اس کا استعمال کئی طریقہ سے کرتے ہیں، اس کا انحصار اس بات پر ہے کی سیکیورٹی بگ کس قسم کا ہے:

1. ڈینائل  آف سروس (Denial Of Service): اس حملہ میں ایک ایپ یا سرور پر ایک بار میں اتنا زیادہ ٹریفک بھیجا جاتا ہے کہ وہ ایپ یا سرور اس ٹریفک کو روک نہیں پاتا اور کریش کر جاتا ہے، جس سے عام انسان اس ایپ یا سرور کو استعمال نہیں کر پاتے۔

2.  ریموٹ کوڈ ایکزیکیوشن  (Remote Code Execution): اس بگ میں حملہ آور سرور پر اپنی مرضی کے کمانڈ کو رن کر سکتا ہے، اور اس سرور پر اپنا پورا کنٹرول پا سکتا ہے۔

3. پی آئی آئی لیک (PII Leakage): اس بگ کی مدد سے حملہ آور سرور سے صارفین کی مکمل معلومات کو لے سکتا ہے، خواہ وہ کتنی زیادہ ہی کیوں نہ ہوں۔

4. ایس کیو ایل انجیکشن (SQL Injection): اس بگ کی مدد سے حملہ آور پورے ڈیٹا  بیس کے ڈیٹا کو چرا سکتا ہے۔

اور بہت سی بگس کی قسمیں ہیں، لیکن یہ زیادہ خطرناک ہیں، جن کاذکر ابھی کیاگیا ہے۔

## ایک اصل بگ

کچھ وقت پہلے میں نے انڈیا کی جانی مانی کمپنی کے اندر ایک `SQLi`  کا بگ ڈھونڈ کر انہیں رپورٹ کیا تھا اور انہوں نے اسے درست بھی کر لیا تھا، اس بگ میں اٹیکر بغیر کسی یوزرنیم اور پاسورڈ کے بآسانی لاگ اِن کر سکتا تھا اور اندر موجود تمام صارفین کے ڈیٹا کو نکال سکتا، اور ڈیٹا بیس کے ڈیٹا کو بھی۔

![sql]({{site.baseurl}}/assets/images/bugs/sql.png){: width="700" .align-center}

یہ ایک کریٹیکل بگ تھا، اور اس قسم کے بگ روزانہ سیکیورٹی ماہرین نکالتے رہتے ہیں، اور اسے کمپینوں کو رپورٹ کرتے رہتے ہیں، تاکہ حملہ آورتک اس بگ کو پہنچنے سے پہلے اسے ٹھیک کر لیا جائے۔

# حرف آخر

امید ہے اس مختصر سے بلاگ سے آپ کو بگ اورسیکیورٹی بگ کے متعلق جاننے کو ملا ہوگا۔
