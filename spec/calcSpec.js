

describe("add ", function(){
    it("should add two numbers that return 0", function(){
        let result = addMore(0, 0);
        expect(result).toBe(0);
    });
    it("should add negative numbers that return -2", function(){
        let result = addMore(-1,-1);
        expect(result).toBe(-2);
        
    });
    
     it("should add more numbers that returns 10", function(){
        let result = addMore(1, 2, 3,4);
        expect(result).toBe(10);
        
    });
    it("should add more numbersthat returns 9", function(){
        let result = addMore(4,5);
        expect(result).toBe(9);
        
    });
});

describe("multiply",function(){
    it("should multiply two numbers that returns 2", function(){
        let result = multiplyUnlimited(1,2);
        expect(result).toBe(2);
    });
    it("should multiply more than two numbers that returns 24",function(){
        let result = multiplyUnlimited(1,2,3,4);
        expect(result).toBe(24);
    });
});
