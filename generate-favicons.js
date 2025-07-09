const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateFavicons() {
  try {
    const svgPath = path.join(__dirname, "src/app/favicon.svg");
    const icoOutputPath = path.join(__dirname, "src/app/favicon.ico");
    const appleOutputPath = path.join(
      __dirname,
      "src/app/apple-touch-icon.png"
    );

    // Read the SVG file
    const svgBuffer = fs.readFileSync(svgPath);

    // Generate favicon.ico (32x32 PNG)
    const icoBuffer = await sharp(svgBuffer).resize(32, 32).png().toBuffer();

    fs.writeFileSync(icoOutputPath, icoBuffer);

    // Generate Apple touch icon (180x180 PNG)
    const appleBuffer = await sharp(svgBuffer)
      .resize(180, 180)
      .png()
      .toBuffer();

    fs.writeFileSync(appleOutputPath, appleBuffer);

    console.log("✅ Favicons generated successfully!");
    console.log("📁 favicon.ico - Updated");
    console.log("📁 apple-touch-icon.png - Updated");
  } catch (error) {
    console.error("❌ Error generating favicons:", error);
  }
}

generateFavicons();
