import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentPostInformationComponent } from './recent-post-information.component';

describe('RecentPostInformationComponent', () => {
  let component: RecentPostInformationComponent;
  let fixture: ComponentFixture<RecentPostInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentPostInformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentPostInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
