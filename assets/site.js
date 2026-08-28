(() => {
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && matchMedia('(prefers-color-scheme: dark)').matches)) root.classList.add('dark');
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    root.classList.toggle('dark');
    localStorage.setItem('theme', root.classList.contains('dark') ? 'dark' : 'light');
  }));
  const form = document.querySelector('[data-whatsapp-form]');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const service = data.get('service') || '';
    const details = data.get('details') || '';
    const isEn = document.documentElement.lang === 'en';
    const text = isEn
      ? `New request from the website:\nName: ${name}\nMobile: ${phone}\nService: ${service}\nDetails: ${details}`
      : `طلب جديد من الموقع:\nالاسم: ${name}\nالجوال: ${phone}\nالخدمة: ${service}\nالتفاصيل: ${details}`;
    window.open(`https://wa.me/966583463510?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  });
})();