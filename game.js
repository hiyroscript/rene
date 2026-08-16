const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 800;
canvas.height = 400;

// Game objects
const player = {
    x: 200,
    y: 300,
    radius: 20,
    rotation: 0,
    rotationSpeed: 0.05
};

const floor = {
    y: 340,
    height: 10
};

// Game loop
function gameLoop() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw floor (white with thin black outline)
    ctx.fillStyle = 'white';
    ctx.fillRect(0, floor.y, canvas.width, floor.height);
    
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 1;
    ctx.strokeRect(0, floor.y, canvas.width, floor.height);
    
    // Update player rotation
    player.rotation += player.rotationSpeed;
    
    // Draw player (white circle with thin black outline)
    ctx.save();
    ctx.translate(player.x, player.y);
    ctx.rotate(player.rotation);
    
    // Draw white circle
    ctx.beginPath();
    ctx.arc(0, 0, player.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    
    // Draw black outline
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    ctx.restore();
    
    // Continue animation
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();
