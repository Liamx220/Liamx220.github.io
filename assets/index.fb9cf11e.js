import {
    S as n,
    P as o,
    W as e,
    G as t,
    a as i,
    A as s,
    T as a,
    M as d,
    B as r,
    b as w,
    c,
    d as p,
    e as l,
  } from "./vendor.35a77293.js";
  const g = new n(),
    m = new o(75, window.innerWidth / window.innerHeight, 0.1, 1e3),
    u = new e({ canvas: document.querySelector("#bg") });
  u.setPixelRatio(window.devicePixelRatio),
    u.setSize(window.innerWidth, window.innerHeight),
    m.position.setZ(30),
    m.position.setX(-3),
    u.render(g, m);
  let y;
  new t().load("Laptop_01.gltf", function (n) {
    (y = n.scene.children[0]),
      g.add(n.scene),
      y.scale.set(0.05, 0.05, 0.05),
      (y.position.z = 17),
      y.position.setX(-9),
      y.position.setY(-0.2);
  });
  const f = new i(16777215);
  f.position.set(5, 5, 5);
  const b = new s(16777215);
  g.add(f, b),
    Array(650)
      .fill()
      .forEach(function () {
        const n = new c(0.25, 24, 24),
          o = new p({ color: 16777215 }),
          e = new d(n, o),
          [t, i, s] = Array(3)
            .fill()
            .map(() => l.randFloatSpread(200));
        e.position.set(t, i, s), g.add(e);
      });
  const h = new a().load("space.jpg");
  g.background = h;
  const z = new a().load("astro.png"),
    j = new d(new r(3, 3, 3), new w({ map: z }));
  g.add(j);
  const x = new a().load("earth.jpeg"),
    A = new d(new c(3, 32, 32), new p({ map: x }));
  g.add(A), (A.position.z = 2), A.position.setX(-10);
  const S = new a().load("baseball.jpg"),
    X = new d(new c(3, 32, 32), new p({ map: S }));
  function v() {
    const n = document.body.getBoundingClientRect().top;
    (A.rotation.y += 0.01),
      (j.rotation.y += 0.01),
      (m.position.z = -0.01 * n),
      (m.position.x = -2e-4 * n),
      (m.rotation.y = -2e-4 * n);
  }
  g.add(X),
    (X.position.z = 28),
    X.position.setX(-10),
    (j.position.z = -5),
    (j.position.x = 2),
    (document.body.onscroll = v),
    v(),
    (function n() {
      requestAnimationFrame(n),
        (A.rotation.y += 0.005),
        (X.rotation.y += 0.005),
        //(y.rotation.y += 0.005),
        u.render(g, m);
    })();
  