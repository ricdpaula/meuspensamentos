import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPensamentosComponent } from './listagem-pensamentos.component';

describe('ListagemPensamentosComponent', () => {
  let component: ListagemPensamentosComponent;
  let fixture: ComponentFixture<ListagemPensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListagemPensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemPensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
