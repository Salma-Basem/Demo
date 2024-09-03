import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavBarComponent } from './Components/NavBar/nav-bar.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { HomeComponent } from './Components/Home/home.component';
import { AboutUsComponent } from './Components/AboutUs/about-us.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from './translate-loader';
import { NewlineToBrPipe } from './Components/newline-to-br.pipe';
import { VisionComponent } from './Components/Vision/vision.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoalsComponent } from './Components/Goals/goals.component';
import { ContactUsComponent } from './Components/ContactUs/contact-us.component';
import { FoundersComponent } from './Components/Founders/founders.component';
import { BoardmembersComponent } from './Components/BoardMembers/boardmembers.component';
import { PolicyComponent } from './Components/Policy/policy.component';

import { CarouselModule } from 'ngx-owl-carousel-o';

import { CarouslComponent } from './Components/Carousl/carousl.component';
import { ThemeService } from './Services/theme.service';
import { ThemeSwitcherComponent } from './Components/theme-switcher/theme-switcher.component';
import { TrialComponent } from './Components/trial/trial.component';
import { HomeTrialComponent } from './Components/home-trial/home-trial.component';
import { SComponent } from './Components/s/s.component';
import { BooksComponent } from './Components/Books/books.component';
import { BooksCategoriesComponent } from './Components/books-categories/books-categories.component';
import { BookDetailsComponent } from './Components/BookDetails/book-details.component';
import { ShortstoryComponent } from './Components/ShortStory/shortstory.component';
import { AwardsComponent } from './Components/Awards/awards.component';
import { TeamComponent } from './Components/Team/team.component';
import { AwardsBriefComponent } from './Components/AwardsBrief/awards-brief.component';
import { PhotographyComponent } from './Components/photography/photography.component';
import { ContentcreationComponent } from './Components/ContentCreationAwards/contentcreation.component';
import { PublishingHouseComponent } from './Components/PublishingHouse/publishing-house.component';
import { AcademyComponent } from './Components/Academy/academy.component';
import { ProductionComponent } from './Components/Production/production.component';
import { LoaderComponent } from './Components/Loader/loader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http);
}
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    NewlineToBrPipe,
      VisionComponent,
    GoalsComponent,
    ContactUsComponent,
    FoundersComponent,
    BoardmembersComponent,
    PolicyComponent,
    CarouslComponent,
       ThemeSwitcherComponent,
       TrialComponent,
       HomeTrialComponent,
       SComponent,
       BooksComponent,
       BooksCategoriesComponent,
       BookDetailsComponent,
       ShortstoryComponent,
       AwardsComponent,
       TeamComponent,
       AwardsBriefComponent,
       PhotographyComponent,
       ContentcreationComponent,
       PublishingHouseComponent,
       AcademyComponent,
       ProductionComponent,
       LoaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule, 
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  
  ],
  providers: [ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
