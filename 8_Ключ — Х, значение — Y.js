let myMap = new Map ();
myMap.set('Batman', 'dog');
myMap.set('wood', 'tree');
myMap.set('coffee', 'cat');
myMap.set('rap', 'xiaomi');
myMap.set('sony', 'apple');



for (let name of myMap.keys()){
    console.log("Ключ - " + name)
}

for (let name of myMap.values()){
    console.log("Значение - " + name)
}