var scene, camera, renderer, mesh

scene = new THREE.Scene()
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000)
renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

let geometry = new THREE.BoxGeometry(1,1,1)
let material = new THREE.MeshBasicMaterial({color: 0x00ff00})
mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

camera.position.z = 5

function animate() {
  requestAnimationFrame( animate );
	mesh.rotation.x += 0.005;
	mesh.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate()
