import { browser, element , by } from "protractor";


describe("Titulo Prueba",()=>{
  beforeEach(() => {
    browser.get("/");
  });

  //prueba 1
  it("La pestaña Tab One se muestra por defecto",()=>{
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 1");
  });
  //prueba 2
  it("El usuario puede navegar a la pestaña Tab 2",async ()=>{
    await element(by.css("[tab=tab2]")).click();
    browser.driver.sleep(500);
    expect(element(by.css(".tab-selected ion-label")).getText()).toContain("Tab 2");
  });
});