let scene, camera, renderer, controls

function init() {	
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 45, 30000)
  camera.position.set(-900,-200,-900)

  renderer = new THREE.WebGLRenderer({ antialias: false })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  controls = new THREE.OrbitControls(camera, renderer.domElement)
  controls.addEventListener('change', renderer)
  controls.minDistance = 500
  controls.maxDistance = 1500
  

  const materialArray = []
  const texture_ft = new THREE.TextureLoader().load('resources/arid2_ft.jpg')
  const texture_bk = new THREE.TextureLoader().load('resources/arid2_bk.jpg')
  const texture_up = new THREE.TextureLoader().load('resources/arid2_up.jpg')
  const texture_dn = new THREE.TextureLoader().load('resources/arid2_dn.jpg')
  const texture_rt = new THREE.TextureLoader().load('resources/arid2_rt.jpg')
  const texture_lf = new THREE.TextureLoader().load('resources/arid2_lf.jpg')

  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_ft }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_bk }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_up }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_dn }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_rt }))
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture_lf }))

  for(let i = 0; i < 6; i++)
      materialArray[i].side = THREE.BackSide
  let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000)
  let skybox = new THREE.Mesh(skyboxGeo, materialArray)
  scene.add(skybox)
  
  animate()
}

function animate () {
  renderer.render(scene, camera)
  window.requestAnimationFrame(animate)
}

init()