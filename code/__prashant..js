const name = ['amit', 'puneet', 'prashant'];
const details = [{name:'amit'}];

const checkAvailblity = name => {
    const nameAvailblity = details.find(data => data.name == name);
    // console.log(nameAvailblity)
    return nameAvailblity;
};

checkAvailblity('amit')


const newArr = name.forEach(name => {
    // console.log(checkAvailblity(data.name))
    if(!checkAvailblity(name)) {
        details.push({name})
    }
});

console.log(details);

