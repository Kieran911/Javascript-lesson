let d;

d = new Date();
d = d.toString();

d = new Date(2021, 3, 18, 12, 24, 20);

d = new Date('2021-04-21');
d = new Date('2021-05-21T21:30:10');
d = new Date('2022-04-21');
d = new Date('04-21-2022');

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();
//d = Math.floor(d.getTime() / 1000); to get the seconds from the milliseconds(its the default)

d = new Date(1726559741745); //To get the date from the time stamp
console.log(d);
