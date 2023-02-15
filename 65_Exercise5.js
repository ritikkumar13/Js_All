let container = document.getElementById("container");
container.innerHTML = "";

let HackerMan = async () => {

  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Initializing Hack Program......");
      container.innerHTML = `<h1>Initializing Hack Program......<h1><br>`;
    }, 2000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hacking Lokeshwar userName........");
      container.innerHTML += `<h1>Hacking Lokeshwar userName........<h1><br>`;

    }, 5000);
  });
  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Username found lokeshwarprasad1.....");
      container.innerHTML += `<h1>Username found : lokeshwarprasad1<h1><br>`;

    }, 8000);
  });
  let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Connecting to instagram......");
      container.innerHTML += `<h1>Connecting to instagram......<h1><br>`;

    }, 12000);
  })
  let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("instagram Connected......");
      container.innerHTML += `<h1>instagram Connected......<h1><br>`;

    }, 14000);
  })
  let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("YOU HACKED.......");
      container.innerHTML += `<h1>YOU HACKED.......👩‍💻<h1><br>`;
    }, 17000);
  })

  let a = await p1;
  console.log(a);

  let b = await p2;
  console.log(b);

  let c = await p3;
  console.log(c);

  let d = await p4;
  console.log(d);

  let e = await p5;
  console.log(e);

  let f = await p6;
  console.log(f);

  return [a, b, c, d, e, f];
}

let x = HackerMan();
