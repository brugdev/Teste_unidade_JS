const {calcularMDC} = require("./mdc");




describe('Deve calcular o MDC entre dois numeros ', () => {
    
    it('MDC entre dois numeros pares', () => {
        expect(calcularMDC(4,6)).toBe(2)
        
    });

    it('MDC entre dois numeros impares', () => {
        expect(calcularMDC(5,7)).toBe(1)
        
    });

    

    
   

    
});