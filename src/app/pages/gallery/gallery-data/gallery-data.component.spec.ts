import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryDataComponent } from './gallery-data.component';

describe('GalleryDataComponent', () => {
  let component: GalleryDataComponent;
  let fixture: ComponentFixture<GalleryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
