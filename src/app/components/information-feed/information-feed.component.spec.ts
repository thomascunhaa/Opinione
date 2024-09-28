import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFeedComponent } from './information-feed.component';

describe('InformationFeedComponent', () => {
  let component: InformationFeedComponent;
  let fixture: ComponentFixture<InformationFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationFeedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
