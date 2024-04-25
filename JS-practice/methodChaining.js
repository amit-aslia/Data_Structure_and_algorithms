// const obj = {
//   total: 0,
//   add: function (val) {
//     this.total += val;
//     return this;
//   },
// };

// function Calc() {
//   this.total = 0;

//   this.add = function(val) {
//     this.total += val;
//     return this;
//   }
// }

// const ins = new Calc();

// ins.add(23);
// console.log(ins.total);

function computeAmount() {
  return {
    total: 0,
    lacs: function (val) {
      this.total += val * 100000;
      return this;
    },

    crore: function (val) {
      this.total += val * 10000000;
      return this;
    },

    thousand: function (val) {
      this.total += val * 1000;
      return this;
    },
    value: function () {
      return this.total;
    },
  };
}

console.log(
  computeAmount()
    .lacs(15)
    .crore(5)
    .crore(2)
    .lacs(20)
    .thousand(45)
    .crore(7)
    .value()
);
