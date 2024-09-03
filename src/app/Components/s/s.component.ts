import { Component, HostBinding, HostListener } from '@angular/core';
import { LanguageService } from 'src/app/Services/language.service';
import { ThemeService } from 'src/app/Services/theme.service';

@Component({
  selector: 'app-s',
  templateUrl: './s.component.html',
  styleUrls: ['./s.component.css']
})
export class SComponent {
  isScrolled = false;
  theme: 'dark' | 'light'='dark';
  constructor(private themeService: ThemeService,private languageService: LanguageService) {
    this.loadTheme();
  }

  private loadTheme(): void {
    const theme = this.themeService.getTheme();
    document.documentElement.setAttribute('data-theme', theme);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    this.isScrolled = scrollPosition > headerHeight;
  }

  toggleTheme(): void {
    const newTheme = this.themeService.getTheme() === 'dark' ? 'light' : 'dark';
    this.themeService.setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }
  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  

  ngOnInit() {
    // Subscribe to language changes
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }
  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
}
