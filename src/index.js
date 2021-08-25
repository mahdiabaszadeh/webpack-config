import "./styles/index.scss";
const test={
    ali: 20,
    sohrab: 18.5,
    farhad: 12
};

const test2={
    ...test,
    mahdi: 15,
    shahram: 9.5
}
console.log(test);
console.log(test2);