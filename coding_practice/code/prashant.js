const numberData = [{ item: 1 }, { item: 2 }, { item: 3 }];
const itemData = [{ id: 34, qty: 3 }, { id: 35, qty: 2 }];

/*  
    [
        {item:1, items: [{id:34,qty:1},{id:35, qty:1}]},
        {item:2, items: [{id:35,qty:1},{id:34,qty:1}]},
        {item:3, items: [{id:34,qty:1}]}]
*/

const checkId = (id, index, newData) => {
    let idIndex = -1;
    newData[index].items.forEach((data, index) => {
        if (data.id === id) idIndex = index
    });
    return idIndex;
};

const addItems = (index, data, newData) => {
    if (newData[index].items) {
        const idIndex = checkId(data.id, index, newData); // check wehter id present if present return index
        if (idIndex !== -1) { // update qty
            newData[index].items[idIndex].qty = newData[index].items[idIndex].qty + 1;
        }
        else { // push data into existing items
            newData[index] = { ...newData[index], items: [...newData[index].items, { id: data.id, qty: 1 }] }
        }
    }
    else { //  create newItems (inital time)
        newData[index] = { ...newData[index], items: [{ id: data.id, qty: 1 }] };
    }
}


const objectManipulate = (numberData, itemData) => {
    const newData = [...numberData]
    const iData = [...itemData];
    let newDataIndex = 0;
    let iDataIndex = 0;
    const sum = iData.reduce((acc, cv) => acc + cv.qty, 0)

    let i = 0;
    while (i < sum) {
        if (newDataIndex >= numberData.length) newDataIndex = 0

        if (iDataIndex >= iData.length) iDataIndex = 0

        if (iData[iDataIndex].qty <= 0) { // check whether quantity reach 0
            iData.splice(iDataIndex, 1);
            continue;
        }
        addItems(newDataIndex, iData[iDataIndex], newData); // send index and data
        // updation
        i++;
        iData[iDataIndex].qty = iData[iDataIndex].qty - 1;
        iDataIndex++;
        newDataIndex++;
    };
    return newData
}

const newData = objectManipulate(numberData, itemData)

newData.forEach((data) => console.log(data))