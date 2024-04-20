console.time();

for (let i = 0; i < 1000; i++) {
  fetch('localhost:8080').then(x => console.log(x))
}

console.timeEnd();