var camera, scene, renderer, mesh1;

init();
animate();

function cube(x, y, z, color, wf) {
  var geometry = new THREE.CubeGeometry(x, y, z);
  var material = new THREE.MeshLambertMaterial( { color: color, wireframe: wf } );
  return new THREE.Mesh( geometry, material );
}

function sphere(r, color, wf) {
  var geometry = new THREE.SphereGeometry(r,59);
  var material = new THREE.MeshLambertMaterial( { color: color, wireframe: wf } );
  return new THREE.Mesh( geometry, material );
}

function init() {
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 500;

  scene = new THREE.Scene()

  mesh1 = cube(300, 400, 100, 0xf0f0, false);
  scene.add( mesh1 );
  mesh1.position.x = -300
  
  mesh2 = cube(100, 100, 100, 0x100, false);
  scene.add( mesh2 );
  mesh2.position.x = 300;
  
  mesh3 = sphere(200, 200, 200, 0x300, true);
  scene.add( mesh3 );
  mesh3.position.y = 300;
  
  
  renderer = new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  $("#container").append( renderer.domElement );
}

function animate() {
  requestAnimationFrame( animate );

  mesh1.rotation.x += 0.01;
  mesh1.rotation.y += 0.01;
  mesh1.rotation.z += 0.01;
  
  mesh2.rotation.x += 0.02;
  mesh2.rotation.y += 0.02;
  mesh2.rotation.z += 0.02;
  
  mesh3.rotation.x += 0.03;
  mesh3.rotation.y += 0.03;
  
  renderer.render( scene, camera ); 
}