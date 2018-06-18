import { AlcgasModule } from './alcgas.module';

describe('AlcgasModule', () => {
  let alcgasModule: AlcgasModule;

  beforeEach(() => {
    alcgasModule = new AlcgasModule();
  });

  it('should create an instance', () => {
    expect(alcgasModule).toBeTruthy();
  });
});
