function marry(man, woman) {
  // man =   { father: { name: john, wife: { name: 'ann' } } }
  woman.husband = man;
  man.wife = woman;

  return {
    father: man,
    mother: woman
  }
}

let family = marry({
  name: "John"
}, {
  name: "Ann"
});

console.log(family);