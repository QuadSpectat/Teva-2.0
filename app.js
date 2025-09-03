// Part 1: Your custom configuration
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmYTNlODhkNC0zOTNlLTRkMmEtODU2MS04ZGQ3NDFkNGU4NmQiLCJpZCI6MTE5NjI3LCJpYXQiOjE2NzIxNjg2MjN9.iQ-WY4qZZoK8NCgheHh1m0gM4GBWsaMl7UTMcufyl7Q';
const modelUrl = 'https://quadspectat-models.fra1.cdn.digitaloceanspaces.com/Production_3/Scene/Production_3.json';

// Create a main async function to run the application
async function main() {
  try {
    // Part 2: The viewer setup with the corrected terrain provider
    // The 'await' keyword is now correctly used inside an 'async' function
    const viewer = new Cesium.Viewer('cesiumContainer', {
      terrainProvider: await Cesium.Terrain.fromWorldTerrain(),
    });
    viewer.scene.globe.enableLighting = true;

    // Part 3: Load the model using await
    const tileset = await Cesium.Cesium3DTileset.fromUrl(modelUrl);
    viewer.scene.primitives.add(tileset);

    // Zoom to the model
    await viewer.zoomTo(tileset);
    
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}

// Run the main function
main();