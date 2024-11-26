let x;
let d = new Date();

x = d.toString();

x = d.getTime();
x = d.valueOf();
x = d.getFullYear();
x = d.getDate();
x = d.getDay();
x = d.getMonth();
x = d.getMinutes();
x = d.getHours();
x = d.getSeconds();

x = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('default').format(d);

x = Intl.DateTimeFormat('default', {
  month: 'long',
}).format(d);

x = d.toLocaleString('default', { month: 'short' });

x = d.toLocaleString('default', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'America/new_York',
});

console.log(x);
