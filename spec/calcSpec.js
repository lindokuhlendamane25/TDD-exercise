
describe("add ", function(){
    it("should add two numbers", function(){
        let result = addMore(3, 2);
        expect(result).toBe(5);
    });
    it("should add more numbers", function(){
        let result = addMore(5, 6, 7);
        expect(result).toBe(18);
        
    });
     
});

describe("multiply",function(){
    it("should multiply two numbers", function(){
        let result = multiplyUnlimited(2,5);
        expect(result).toBe(10);
    });
    it("should multiply more than two numbers",function(){
        let result = multiplyUnlimited(2,3,4);
        expect(result).toBe(24);
    });
});