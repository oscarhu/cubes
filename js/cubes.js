var camera, scene, renderer, mesh1;
var angle = 0 ;

init();
animate();

function cube(x, y, z, color, wf) {
  var geometry = new THREE.CubeGeometry(x, y, z);
  var material = new THREE.MeshLambertMaterial( { color: color, wireframe: wf } );
  return new THREE.Mesh( geometry, material );
}

function sphere(r, color, wf) {
  var geometry = new THREE.SphereGeometry(r,10);
  var material = new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'oscarphoto' ) } ) ; 
  return new THREE.Mesh( geometry, material );
}


function orbit(satellite, body, distance, speed) {
  if (satellite.angle === undefined) {
    satellite.angle = 0;
  }
  
  satellite.position.z = body.position.z + distance * Math.sin(satellite.angle);
  satellite.position.x = body.position.x + distance * Math.cos(satellite.angle);
  satellite.position.y = body.position.y;

  satellite.angle += Math.PI / speed;
  if (satellite.angle > (Math.PI * 2)) {
    satellite.angle = 0;
  }
}

function init() {
  camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10050 );
  camera.position.z = 1500;

  scene = new THREE.Scene()
  
  mesh3 = sphere(200, 0x300, true);
  scene.add( mesh3 );
  mesh3.position.y = 150;
  mesh3.position.x = -300;

  mesh4 = sphere(50,  0x601, false)
  scene.add( mesh4 );
  mesh4.position.y = -200
  mesh4.position.x = -300
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  $("#container").append( renderer.domElement );
}

function animate() {
  requestAnimationFrame( animate );
  
  //mesh3.rotation.x += 0.03;
  mesh3.rotation.y += 0.03;

  mesh4.rotation.x += 0.04;
  mesh4.rotation.y += 0.04;

  orbit(mesh4,mesh3,700,100);
  
  renderer.render( scene, camera ); 
}