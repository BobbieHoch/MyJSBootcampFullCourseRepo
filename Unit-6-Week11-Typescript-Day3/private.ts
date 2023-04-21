class Circle {
    private circumference: number;
    public radius: number;
    private area: number;

    //Notice how the constructor doesn't take the radius or the circumference
    constructor(radius: number) {
        this.radius = radius;
        this.circumference = Math.PI * 2 * this.radius;
        //Math.pow(x,y) = x raising to the power of y
        this.area = Math.PI * Math.pow(this.radius, 2);
    }

    GetArea(): number {
        return this.area;
    }

    GetCircumference(): number {
        return this.circumference;
    }

}
let newCircle = new Circle(10);
//the area should be 314.15
//the circumference should be 62.8

console.log(newCircle.GetArea());
console.log(newCircle.GetCircumference());







