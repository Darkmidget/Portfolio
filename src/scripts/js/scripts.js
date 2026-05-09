function testing(){
  alert("Hello!")
}

function sortTable_year() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TH")[0];
      y = rows[i + 1].getElementsByTagName("TH")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

// --- 3D Globe & Interactive Portfolio Filter ---
async function initGlobe() {
  console.log("[Globe] Initialization started.");
  try {
    const container = document.getElementById("globe-container");
    if (!container) {
      console.warn("[Globe] 'globe-container' element not found on this page.");
      return; // Only execute if the globe container is on the page
    }
    console.log("[Globe] Container found:", container);

    // Stop previous animation loop if re-initializing (e.g., after data loads)
    if (container.dataset.animationId) {
      cancelAnimationFrame(Number(container.dataset.animationId));
    }
    container.innerHTML = ""; // Clear out existing globe content

    const currentPos = getComputedStyle(container).position;
    if (!currentPos || currentPos === 'static') {
      container.style.position = 'relative';
    }

    // Guarantee a minimum height for the container so it doesn't collapse.
    // Without this, the absolute positioned items will overflow a 0-height container, making it invisible.
    container.style.minHeight = "500px";
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";

    let QUOTES = [];
    
    try {
      const response = await fetch('src/data/quotes.json');
      if (response.ok) {
        const externalQuotes = await response.json();
        if (Array.isArray(externalQuotes)) {
          QUOTES = externalQuotes;
          console.log("[Globe] Successfully loaded quotes from quotes.json");
        }
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (e) {
      console.error("[Globe] Could not load quotes.json. No quotes will be rendered.", e);
    }

    if (QUOTES.length === 0) {
      console.warn("[Globe] No quotes found to render.");
      return;
    }

    // Pad tags to guarantee a 3D globe structure if your list is short (requires ~15 points for 3D)
    const uniqueTags = [...QUOTES];
    while (QUOTES.length < 15) {
      QUOTES.push(...uniqueTags);
    }
    console.log(`[Globe] Generating globe with ${QUOTES.length} items.`);

    // Configuration
    const RADIUS = 250;
    const BASE_SPEED = 0.003;
    const HOVER_DAMPING = 0.05;

    // Create ambient background glow dynamically
    const glow = document.createElement("div");
    glow.style.position = "absolute";
    glow.style.width = `${RADIUS * 2.5}px`;
    glow.style.height = `${RADIUS * 2.5}px`;
    glow.style.background = "radial-gradient(circle, rgba(0, 255, 204, 0.08) 0%, transparent 70%)";
    glow.style.borderRadius = "50%";
    glow.style.left = "50%";
    glow.style.top = "50%";
    glow.style.transform = "translate(-50%, -50%)";
    glow.style.pointerEvents = "none";
    container.appendChild(glow);

    let items = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetSpeedX = BASE_SPEED;
    let targetSpeedY = BASE_SPEED;
    let currentSpeedX = BASE_SPEED;
    let currentSpeedY = BASE_SPEED;
    let isHoveringGlobe = false;
    let isHoveringItem = false;

    // Distribute points using Fibonacci Sphere
    const phi = Math.PI * (3 - Math.sqrt(5));

    QUOTES.forEach((text, i) => {
      const y = 1 - (i / (QUOTES.length - 1)) * 2; 
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const el = document.createElement("div");
      el.className = "globe-quote";
      el.innerText = text;
      
      // Enforce positioning so 3D transforms work correctly
      el.style.position = "absolute";
      el.style.left = "50%";
      el.style.top = "50%";
      el.style.cursor = "pointer";
      el.style.whiteSpace = "nowrap"; // Keep tags on a single line
      
      container.appendChild(el);

      // Hover Interactions
      el.addEventListener("mouseenter", () => {
        isHoveringItem = true;
        el.classList.add("highlight");
      });
      
      el.addEventListener("mouseleave", () => {
        isHoveringItem = false;
        el.classList.remove("highlight");
      });

      // Click-to-Filter logic
      el.addEventListener("click", () => {
        const isReset = text === "All Projects";
        const filterText = text.toLowerCase();
        
        // Find all standard project elements on the page (adjust selector if needed)
        const projectCards = document.querySelectorAll('.project-card, .portfolio-item, [data-project-id]');
        let foundMatches = false;

        projectCards.forEach(card => {
          // Check the card's text content or custom data-tags attributes for matches
          const cardContent = (card.getAttribute('data-tags') || card.textContent || '').toLowerCase();
          
          if (isReset || cardContent.includes(filterText)) {
            card.style.display = '';           // Show matching elements
            card.classList.remove('hidden');
            foundMatches = true;
          } else {
            card.style.display = 'none';       // Hide non-matching elements
            card.classList.add('hidden');
          }
        });

        // Dispatch a custom event in case you're using a reactive framework/rendering pipeline
        window.dispatchEvent(new CustomEvent('portfolioFiltered', { detail: { tag: text } }));

        // Smooth scroll down to the portfolio section so the user sees the filtered results
        const portfolioSection = document.getElementById('projects') || document.getElementById('portfolio') || projectCards[0];
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });

      items.push({ el, ox: x * RADIUS, oy: y * RADIUS, oz: z * RADIUS });
    });

    // Mouse Tracking (Using properties to cleanly overwrite old closures on re-init)
    container.onmousemove = (e) => {
      const rect = container.getBoundingClientRect();
      const width = rect.width || 500;
      const height = rect.height || 500;
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2);
    };

    container.onmouseenter = () => (isHoveringGlobe = true);
    container.onmouseleave = () => {
      isHoveringGlobe = false;
      mouseX = 0;
      mouseY = 0;
    };

    let rotationX = 0;
    let rotationY = 0;

    // 3D Math Helpers
    const rotateX = (y, z, angle) => ({ y: y * Math.cos(angle) - z * Math.sin(angle), z: y * Math.sin(angle) + z * Math.cos(angle) });
    const rotateY = (x, z, angle) => ({ x: x * Math.cos(angle) + z * Math.sin(angle), z: -x * Math.sin(angle) + z * Math.cos(angle) });

    // Render Loop
    function animate() {
      if (isHoveringItem) {
        targetSpeedX = 0;
        targetSpeedY = 0;
      } else if (isHoveringGlobe) {
        targetSpeedX = mouseY * 0.02; 
        targetSpeedY = -mouseX * 0.02;
      } else {
        targetSpeedX = BASE_SPEED;
        targetSpeedY = BASE_SPEED;
      }

      currentSpeedX += (targetSpeedX - currentSpeedX) * HOVER_DAMPING;
      currentSpeedY += (targetSpeedY - currentSpeedY) * HOVER_DAMPING;

      rotationX += currentSpeedX;
      rotationY += currentSpeedY;

      items.forEach((item) => {
        // Always apply accumulated rotations mathematically starting from the original coordinates
        const rx = rotateY(item.ox, item.oz, rotationY);
        const ry = rotateX(item.oy, rx.z, rotationX);

        const finalX = rx.x;
        const finalY = ry.y;
        const finalZ = ry.z;

        const perspective = 600;
        const scale = perspective / (perspective + finalZ);
        const alpha = 1 - (finalZ + RADIUS) / (2 * RADIUS);

        item.el.style.transform = `translate(-50%, -50%) translate3d(${finalX * scale}px, ${finalY * scale}px, 0px) scale(${scale})`;
        item.el.style.opacity = Math.max(0.1, alpha);
        item.el.style.zIndex = Math.round(scale * 100);

        if (!isHoveringItem && finalZ < -RADIUS * 0.85) {
          item.el.classList.add('highlight');
        } else if (!isHoveringItem) {
          item.el.classList.remove('highlight');
        }
      });

      const animId = requestAnimationFrame(animate);
      container.dataset.animationId = animId;
    }

    animate();
    console.log("[Globe] Initialization complete and animation started.");
  } catch (error) {
    console.error("[Globe] Error during initialization:", error);
  }
}

// Initialize safely: checks if DOM is already ready (fixes cases where scripts load deferred)
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initGlobe);
} else {
  initGlobe();
}
window.addEventListener("projects-ready", initGlobe);
