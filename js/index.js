
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x122122)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
const renderer = new THREE.WebGLRenderer({antialias: true, canvas: document.getElementById("logo")})

const ratio = window.location.pathname === "/" ? 2 : 4

renderer.setSize(window.innerWidth/ratio, window.innerHeight/ratio)

let geometry = randomGeom()
// const geometry = new THREE.DodecahedronGeometry(1.5, 0)
const material = new THREE.MeshLambertMaterial({
  color: 0xffffff,
  wireframe: true,
  wireframeLinewidth: 3
})

const l1 = new THREE.AmbientLight(0x404040, 0.3)

const l2 = new THREE.PointLight(0xf4428f, 1, 0)
l2.position.x = 6000
l2.position.y = 0
l2.position.z = -500

const l3 = new THREE.PointLight(0xf49b42, 1, 0)
l3.position.x = -3000
l3.position.y = 0
l3.position.z = 2000

const l4 = new THREE.PointLight(0xff0000, 1, 0)
l4.position.x = 1000
l4.position.y = 0
l4.position.z = 3000

const l5 = new THREE.PointLight(0xff0000, 1, 0)
l5.position.x = 0
l5.position.y = -1000
l5.position.z = -3000


const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh, l1, l2, l3, l4, l5)

camera.position.z = 4

function randomGeom() {
  let geometries = [new THREE.OctahedronGeometry(1.5, 1), new THREE.IcosahedronGeometry(1.5, 0), new THREE.DodecahedronGeometry(1.5, 0), new THREE.OctahedronGeometry(1.5, 0)]
  return geometries[Math.round(Math.random() * (geometries.length - 1))]
}

function animate() {
  requestAnimationFrame( animate );
	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
}


function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth/ratio, window.innerHeight/ratio );
}

animate()

window.addEventListener( 'resize', onWindowResize, false );
