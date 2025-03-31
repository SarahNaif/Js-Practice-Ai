document.addEventListener('DOMContentLoaded', () => {
  
    const setTheme = (isDark) => {
      document.documentElement.classList.toggle('dark', isDark);
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
      }
    };
  
    
    const savedTheme = typeof localStorage !== 'undefined' ? localStorage.getItem('theme') : null;
    if (savedTheme) {
      setTheme(savedTheme === 'dark');
    } else if (typeof window.matchMedia !== 'undefined') {
    
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark);
    }
  
  
    if (typeof window.matchMedia !== 'undefined') {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        setTheme(e.matches);
      });
    }
  
   
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
      themeToggleButton.addEventListener('click', () => {
        const isDark = document.documentElement.classList.contains('dark');
        setTheme(!isDark);
      });
    }


  });
  