import { Component, HostBinding } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from 'src/app/Services/language.service';

@Component({
  selector: 'app-trial',
  templateUrl: './trial.component.html',
  styleUrls: ['./trial.component.css']
})
export class TrialComponent {

  language: string = 'en';

  @HostBinding('attr.dir') get dir() {
    return this.language === 'ar' ? 'rtl' : 'ltr';
  }

  constructor(private languageService: LanguageService,private router: Router) 
  {

      // Subscribe to router events to handle scrolling
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.handleScroll();
      });
  }

  ngOnInit() {
    this.languageService.getLanguage().subscribe(language => {
      this.language = language;
    });
  }
 
  changeLanguage(newLanguage: string) {
    this.languageService.setLanguage(newLanguage); // Changes language and updates direction
  }
  switchLanguage(language: string) {
    this.languageService.setLanguage(language);
  }
  goToFacebook() {
    window.open('https://www.facebook.com/profile.php?id=61563488381588&mibextid=ZbWKwL', '_blank');
  }
  goToInstagram()
  {
    window.open('https://www.instagram.com/ghayaeg/','_blank');
  }

  goToSnapChat()
  {
    window.open('https://www.snapchat.com/add/ghayaeg?share_id=V4Wnq9NiApo&locale=ar-EG','_blank')
  }

  goToYoutube()
  {
    window.open('https://www.youtube.com/@Ghaya-7','_blank')
  }

  goToTikTok()
  {
    window.open('https://www.tiktok.com/@ghayaeg','_blank')
  }

  goToLinkedin()
  {
    window.open('https://www.linkedin.com/in/ghaya-eg-3b726531a/','_blank')
  }

  goToGmail()
  {
    window.open('ghayaeg@gmail.com','_blank')
  }
  navigateAndScroll(sectionId: string): void {
    // Navigate to the AboutUs route
    this.router.navigate(['/AboutUs']).then(() => {
      // Store the section ID to scroll to
      localStorage.setItem('scrollToSection', sectionId);
      // Navigate to the same route to trigger scrolling
      this.router.navigate(['/AboutUs']);
    });
  }

  handleScroll(): void {
    const sectionId = localStorage.getItem('scrollToSection');
    if (sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      localStorage.removeItem('scrollToSection');
    }
  }
  theme: 'light' | 'dark' = 'light'; // Default theme

  // Switch between light and dark themes
  changeTheme(newTheme: 'light' | 'dark') {
    this.theme = newTheme;
    document.documentElement.setAttribute('data-theme', this.theme);
  }
 
 
}
