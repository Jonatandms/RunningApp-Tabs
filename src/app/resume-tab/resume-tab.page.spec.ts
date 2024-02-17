import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResumeTabPage } from './resume-tab.page';

describe('Tab1Page', () => {
  let component: ResumeTabPage;
  let fixture: ComponentFixture<ResumeTabPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeTabPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ResumeTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
