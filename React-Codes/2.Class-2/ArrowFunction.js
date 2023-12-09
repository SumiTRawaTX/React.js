// in ES6

// const fn = () => {

// }

console.log(this); //window object

const obj = {
    fn: function() {
        console.log(this);
    },

    fn2: () => {
        console.log(this);
    }
};

obj.fn(); // obj
obj.fn2(); // window object

function x() {
    console.log(this);
    function y() {
        console.log(this);
        function z() {
            console.log(this);
        }
        z();
    }
    y();
}
x();


const person = {
    name: "Sumit"
};
const person2 ={
    name: "Shubham"
};

function a() {
    console.log(this);
}
a(); // x() and a.call(this) are same
a.call(this); // window objecy
a.call(person); // sumit
a.call(person2); // Shubham