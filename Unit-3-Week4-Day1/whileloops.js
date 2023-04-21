let a = 0;
let j = 0;

while (a < 30){
    console.log(a);
    j += a;//Same thing as j = j+a;
    console.log(j);
    a++;
}
//////////////////way to do it differently
do {
    console.log(a);
    j += a;
    a++;
}
while (a < 30);