function make_car(manufacturer: string, model: string, ...options: any[]): Object {
    let car = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "black"], ["year", 2020]));
console.log(make_car("Suzuki", "Cultus", ["color", "red"], ["year", 2016]));
