// ===== NATO Tactical Map Application =====

// --- Symbol Definitions ---
const SYMBOLS = {
    // Friendly (blue)
    infantry:      { color: '#40c4ff', shape: 'rect', inner: 'cross' },
    mech_infantry: { color: '#40c4ff', shape: 'rect', inner: 'cross_oval' },
    armor:         { color: '#40c4ff', shape: 'rect', inner: 'oval' },
    recon:         { color: '#40c4ff', shape: 'rect', inner: 'cross_vline' },
    artillery:     { color: '#40c4ff', shape: 'circle', inner: 'dot' },
    air_defense:   { color: '#40c4ff', shape: 'rect', inner: 'arrow_up' },
    engineer:      { color: '#40c4ff', shape: 'rect', inner: 'chevron' },
    signal:        { color: '#40c4ff', shape: 'rect', inner: 'antenna' },
    medical:       { color: '#40c4ff', shape: 'rect', inner: 'cross_plus' },
    supply:        { color: '#40c4ff', shape: 'rect', inner: 'supply' },
    // Enemy (red)
    e_infantry:  { color: '#ef5350', shape: 'rect', inner: 'cross' },
    e_armor:     { color: '#ef5350', shape: 'rect', inner: 'oval' },
    e_artillery: { color: '#ef5350', shape: 'circle', inner: 'dot' },
    e_recon:     { color: '#ef5350', shape: 'rect', inner: 'cross_vline' },
    e_unknown:   { color: '#ff9800', shape: 'rect', inner: 'question' },
    // Control
    fup:       { color: '#4caf50', shape: 'custom', type: 'fup' },
    ld:        { color: '#ff9800', shape: 'custom', type: 'ld' },
    objective: { color: '#ff5722', shape: 'custom', type: 'objective' },
    direction: { color: '#ff5722', shape: 'custom', type: 'direction' },
    checkpoint:{ color: '#ffc107', shape: 'custom', type: 'checkpoint' },
    // Sizes
    team:     { color: '#4fc3f7', shape: 'size_frame', size: 1 },
    squad:    { color: '#4fc3f7', shape: 'size_frame', size: 2 },
    company:  { color: '#4fc3f7', shape: 'size_frame', size: 3 },
    battalion:{ color: '#4fc3f7', shape: 'size_frame', size: 4 },
    brigade:  { color: '#4fc3f7', shape: 'size_frame', size: 5 },
    division: { color: '#4fc3f7', shape: 'size_frame', size: 6 },
};

// --- SVG Generation ---
function generateNATOSVG(symbolKey, size = 50) {
    const sym = SYMBOLS[symbolKey];
    if (!sym) return '';

    const c = sym.color;
    const s = size;
    const fill = c + '4d'; // 30% opacity
    const sw = Math.max(2, s / 25);

    if (sym.shape === 'rect') {
        let inner = '';
        const pad = s * 0.1;
        switch (sym.inner) {
            case 'cross':
                inner = `<line x1="${pad}" y1="${pad}" x2="${s-pad}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${s-pad}" y1="${pad}" x2="${pad}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'cross_oval':
                inner = `<line x1="${pad}" y1="${pad}" x2="${s-pad}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${s-pad}" y1="${pad}" x2="${pad}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>
                         <ellipse cx="${s/2}" cy="${s/2}" rx="${s*0.3}" ry="${s*0.18}" fill="none" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'oval':
                inner = `<ellipse cx="${s/2}" cy="${s/2}" rx="${s*0.32}" ry="${s*0.2}" fill="none" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'cross_vline':
                inner = `<line x1="${pad}" y1="${pad}" x2="${s-pad}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${s-pad}" y1="${pad}" x2="${pad}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${s/2}" y1="${pad}" x2="${s/2}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'dot':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
                    <circle cx="${s/2}" cy="${s/2}" r="${s*0.38}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>
                    <circle cx="${s/2}" cy="${s/2}" r="${s*0.1}" fill="${c}"/>
                </svg>`;
            case 'arrow_up':
                inner = `<line x1="${s/2}" y1="${s-pad}" x2="${s/2}" y2="${s*0.24}" stroke="${c}" stroke-width="${sw*1.2}"/>
                         <polygon points="${s/2},${pad} ${s*0.36},${s*0.32} ${s*0.64},${s*0.32}" fill="${c}"/>`;
                break;
            case 'chevron':
                inner = `<line x1="${pad}" y1="${pad}" x2="${s/2}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${s-pad}" y1="${pad}" x2="${s/2}" y2="${s-pad}" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'antenna':
                inner = `<path d="M${s*0.3},${s*0.78} Q${s*0.3},${s*0.3} ${s/2},${s*0.24} Q${s*0.7},${s*0.3} ${s*0.7},${s*0.78}" fill="none" stroke="${c}" stroke-width="${sw*1.2}"/>
                         <line x1="${s*0.22}" y1="${s*0.78}" x2="${s*0.78}" y2="${s*0.78}" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'cross_plus':
                inner = `<line x1="${s/2}" y1="${s*0.24}" x2="${s/2}" y2="${s*0.76}" stroke="${c}" stroke-width="${sw*1.5}"/>
                         <line x1="${s*0.24}" y1="${s/2}" x2="${s*0.76}" y2="${s/2}" stroke="${c}" stroke-width="${sw*1.5}"/>`;
                break;
            case 'supply':
                inner = `<circle cx="${s/2}" cy="${s/2}" r="${s*0.1}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${pad}" y1="${s/2}" x2="${s*0.4}" y2="${s/2}" stroke="${c}" stroke-width="${sw}"/>
                         <line x1="${s*0.6}" y1="${s/2}" x2="${s-pad}" y2="${s/2}" stroke="${c}" stroke-width="${sw}"/>`;
                break;
            case 'question':
                inner = `<text x="${s/2}" y="${s*0.64}" text-anchor="middle" fill="${c}" font-size="${s*0.45}" font-weight="bold" font-family="sans-serif">?</text>`;
                break;
        }
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
            <rect x="${pad}" y="${pad}" width="${s-pad*2}" height="${s-pad*2}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>
            ${inner}
        </svg>`;
    }

    if (sym.shape === 'custom') {
        const pad = s * 0.1;
        switch (sym.type) {
            case 'fup':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s*0.7}" width="${s}" height="${s*0.7}">
                    <polygon points="${pad},${s*0.05} ${s-pad},${s*0.35} ${pad},${s*0.65}" fill="${fill}" stroke="${c}" stroke-width="${sw}"/>
                    <line x1="${pad}" y1="${s*0.05}" x2="${pad}" y2="${s*0.65}" stroke="${c}" stroke-width="${sw}"/>
                </svg>`;
            case 'ld':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s*0.5}" width="${s}" height="${s*0.5}">
                    <line x1="${pad}" y1="${s*0.08}" x2="${s-pad}" y2="${s*0.08}" stroke="${c}" stroke-width="${sw}"/>
                    <line x1="${pad}" y1="${s*0.25}" x2="${s-pad}" y2="${s*0.25}" stroke="${c}" stroke-width="${sw}"/>
                    <line x1="${pad}" y1="${s*0.42}" x2="${s-pad}" y2="${s*0.42}" stroke="${c}" stroke-width="${sw}"/>
                </svg>`;
            case 'objective':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
                    <circle cx="${s/2}" cy="${s/2}" r="${s*0.4}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                    <circle cx="${s/2}" cy="${s/2}" r="${s*0.27}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                    <circle cx="${s/2}" cy="${s/2}" r="${s*0.14}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                </svg>`;
            case 'direction':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s*0.5}" width="${s}" height="${s*0.5}">
                    <line x1="${pad}" y1="${s*0.25}" x2="${s*0.7}" y2="${s*0.25}" stroke="${c}" stroke-width="${sw*1.5}"/>
                    <polygon points="${s*0.72},${s*0.25} ${s*0.58},${s*0.12} ${s*0.58},${s*0.38}" fill="${c}"/>
                </svg>`;
            case 'checkpoint':
                return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${s}" width="${s}" height="${s}">
                    <circle cx="${s/2}" cy="${s/2}" r="${s*0.38}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                    <text x="${s/2}" y="${s*0.6}" text-anchor="middle" fill="${c}" font-size="${s*0.28}" font-weight="bold" font-family="sans-serif">КП</text>
                </svg>`;
        }
    }

    return '';
}

// --- Map Setup ---
const map = L.map('map', {
    center: [48.5, 32.0],
    zoom: 8,
    zoomControl: true,
    attributionControl: true,
});

// Dark tile layer (CartoDB dark matter)
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    maxZoom: 19
}).addTo(map);

// Alternative: topographic
// L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', { maxZoom: 17 }).addTo(map);

// --- State ---
let currentTool = 'select';
let selectedSymbol = null;
let placedMarkers = [];
let drawingPoints = [];
let drawingPolyline = null;
let gridVisible = false;

// --- Coordinates Display ---
const coordsDisplay = document.getElementById('coordsDisplay');
const scaleInfo = document.getElementById('scaleInfo');

map.on('mousemove', (e) => {
    const lat = e.latlng.lat.toFixed(4);
    const lng = e.latlng.lng.toFixed(4);
    coordsDisplay.textContent = `${lat}° N, ${lng}° E`;
});

map.on('zoomend', () => {
    const z = map.getZoom();
    const scales = { 6: '1:500 000', 7: '1:250 000', 8: '1:100 000', 9: '1:50 000', 10: '1:25 000', 11: '1:10 000', 12: '1:5 000' };
    scaleInfo.textContent = `М ${scales[z] || '1:' + Math.round(500000 / Math.pow(2, z))}`;
});

// --- Tool Buttons ---
const toolBtns = document.querySelectorAll('.tool-btn');
toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        toolBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTool = btn.dataset.tool;
        updateCursor();
    });
});

function updateCursor() {
    const wrapper = document.querySelector('.map-wrapper');
    wrapper.className = 'map-wrapper';
    if (currentTool === 'select' && selectedSymbol) wrapper.classList.add('cursor-crosshair');
    else if (currentTool === 'line' || currentTool === 'area' || currentTool === 'text') wrapper.classList.add('cursor-crosshair');
    else if (currentTool === 'eraser') wrapper.classList.add('cursor-eraser');
}

// --- Sidebar Category Toggle ---
document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
        header.classList.toggle('open');
        const items = header.nextElementSibling;
        items.classList.toggle('open');
    });
});

// Open first category by default
document.querySelector('.category-header').click();

// --- Symbol Selection ---
document.querySelectorAll('.symbol-item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('.symbol-item').forEach(i => i.classList.remove('selected'));
        item.classList.add('selected');
        selectedSymbol = item.dataset.symbol;

        // Auto-switch to select tool
        currentTool = 'select';
        toolBtns.forEach(b => b.classList.remove('active'));
        document.getElementById('btnSelect').classList.add('active');
        updateCursor();
    });
});

// --- Search ---
document.getElementById('symbolSearch').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    document.querySelectorAll('.symbol-item').forEach(item => {
        const name = item.querySelector('span').textContent.toLowerCase();
        const key = item.dataset.symbol.toLowerCase();
        item.style.display = (name.includes(q) || key.includes(q)) ? '' : 'none';
    });
});

// --- Sidebar Toggle ---
document.getElementById('sidebarToggle').addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('collapsed');
    const btn = document.getElementById('sidebarToggle');
    btn.textContent = sidebar.classList.contains('collapsed') ? '\u25B6' : '\u25C0';
    map.invalidateSize();
});

// --- Place Symbol on Map ---
map.on('click', (e) => {
    if (currentTool === 'select' && selectedSymbol) {
        showLabelModal(e.latlng);
    } else if (currentTool === 'line') {
        handleLineClick(e.latlng);
    } else if (currentTool === 'area') {
        handleAreaClick(e.latlng);
    } else if (currentTool === 'text') {
        handleTextClick(e.latlng);
    } else if (currentTool === 'eraser') {
        handleEraserClick(e.latlng);
    }
});

// --- Label Modal ---
const labelModal = document.getElementById('labelModal');
const labelName = document.getElementById('labelName');
const labelNote = document.getElementById('labelNote');
let pendingLatLng = null;

function showLabelModal(latlng) {
    pendingLatLng = latlng;
    labelName.value = '';
    labelNote.value = '';
    labelModal.classList.add('open');
    labelName.focus();
}

document.getElementById('labelOk').addEventListener('click', () => {
    if (pendingLatLng && selectedSymbol) {
        placeSymbol(pendingLatLng, selectedSymbol, labelName.value, labelNote.value);
    }
    labelModal.classList.remove('open');
    pendingLatLng = null;
});

document.getElementById('labelCancel').addEventListener('click', () => {
    labelModal.classList.remove('open');
    pendingLatLng = null;
});

labelName.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') document.getElementById('labelOk').click();
    if (e.key === 'Escape') document.getElementById('labelCancel').click();
});

// --- Place Symbol ---
function placeSymbol(latlng, symbolKey, name, note) {
    const svgHTML = generateNATOSVG(symbolKey, 50);
    if (!svgHTML) return;

    const sym = SYMBOLS[symbolKey];
    let iconW = 50, iconH = 50;
    if (sym.shape === 'custom') {
        if (['fup', 'ld', 'direction'].includes(sym.type)) iconH = 35;
    }

    const icon = L.divIcon({
        className: 'nato-marker',
        html: `<div class="marker-box">
            ${name ? `<div class="marker-label">${name}</div>` : ''}
            <div class="marker-svg">${svgHTML}</div>
            ${note ? `<div class="marker-note">${note}</div>` : ''}
        </div>`,
        iconSize: [iconW + 20, iconH + 40],
        iconAnchor: [iconW / 2 + 10, iconH / 2 + 20],
    });

    const marker = L.marker(latlng, { icon, draggable: true }).addTo(map);
    marker._natoSymbol = symbolKey;
    placedMarkers.push(marker);
}

// --- Line Drawing ---
function handleLineClick(latlng) {
    drawingPoints.push(latlng);
    if (drawingPoints.length === 1) {
        drawingPolyline = L.polyline([latlng], {
            color: '#ffeb3b',
            weight: 3,
            dashArray: '10, 5',
        }).addTo(map);
    } else {
        drawingPolyline.addLatLng(latlng);
    }
}

// --- Area Drawing ---
function handleAreaClick(latlng) {
    drawingPoints.push(latlng);
    if (drawingPoints.length === 1) {
        drawingPolyline = L.polygon([latlng], {
            color: '#ffeb3b',
            fillColor: '#ffeb3b',
            fillOpacity: 0.15,
            weight: 2,
            dashArray: '8, 4',
        }).addTo(map);
    } else {
        drawingPolyline.addLatLng(latlng);
    }
}

// --- Text on map ---
function handleTextClick(latlng) {
    const text = prompt('Введіть текст:');
    if (text) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="color:#ffeb3b;font-size:14px;font-weight:700;text-shadow:0 1px 3px rgba(0,0,0,0.8);white-space:nowrap;">${text}</div>`,
            iconAnchor: [0, 0],
        });
        const marker = L.marker(latlng, { icon, draggable: true }).addTo(map);
        placedMarkers.push(marker);
    }
}

// --- Eraser ---
function handleEraserClick(latlng) {
    let closest = null;
    let minDist = 30; // px threshold

    placedMarkers.forEach(m => {
        const pt = map.latLngToContainerPoint(m.getLatLng());
        const click = map.latLngToContainerPoint(latlng);
        const d = pt.distanceTo(click);
        if (d < minDist) {
            minDist = d;
            closest = m;
        }
    });

    if (closest) {
        map.removeLayer(closest);
        placedMarkers = placedMarkers.filter(m => m !== closest);
    }
}

// --- Undo ---
document.getElementById('btnUndo').addEventListener('click', () => {
    if (drawingPolyline && drawingPoints.length > 0) {
        drawingPoints.pop();
        if (drawingPoints.length === 0) {
            map.removeLayer(drawingPolyline);
            drawingPolyline = null;
        } else {
            drawingPolyline.setLatLngs(drawingPoints);
        }
    } else if (placedMarkers.length > 0) {
        const last = placedMarkers.pop();
        map.removeLayer(last);
    }
});

// --- Clear All ---
document.getElementById('btnClear').addEventListener('click', () => {
    if (!confirm('Очистити всі позначення?')) return;
    placedMarkers.forEach(m => map.removeLayer(m));
    placedMarkers = [];
    if (drawingPolyline) {
        map.removeLayer(drawingPolyline);
        drawingPolyline = null;
    }
    drawingPoints = [];
});

// --- Grid Toggle ---
let gridLines = [];

document.getElementById('btnGrid').addEventListener('click', () => {
    gridVisible = !gridVisible;
    const btn = document.getElementById('btnGrid');
    if (gridVisible) {
        btn.style.borderColor = '#4fc3f7';
        btn.style.color = '#4fc3f7';
        drawGrid();
    } else {
        btn.style.borderColor = '';
        btn.style.color = '';
        clearGrid();
    }
});

function clearGrid() {
    gridLines.forEach(l => map.removeLayer(l));
    gridLines = [];
}

function drawGrid() {
    clearGrid();
    if (!gridVisible) return;

    const bounds = map.getBounds();
    const center = map.getCenter();

    // Target square cell size in pixels on screen
    const targetPx = 80;

    // Convert pixel step to lat/lng at map center
    const pointA = map.containerPointToLatLng([0, 0]);
    const pointB = map.containerPointToLatLng([targetPx, 0]);
    const pointC = map.containerPointToLatLng([0, targetPx]);
    const stepLng = Math.abs(pointB.lng - pointA.lng);
    const stepLat = Math.abs(pointC.lat - pointA.lat);

    // Round to nice values
    function niceStep(raw) {
        const mag = Math.pow(10, Math.floor(Math.log10(raw)));
        const norm = raw / mag;
        if (norm < 1.5) return mag;
        if (norm < 3.5) return 2 * mag;
        if (norm < 7.5) return 5 * mag;
        return 10 * mag;
    }
    const sLng = niceStep(stepLng);
    const sLat = niceStep(stepLat);

    const style = {
        color: '#4fc3f7',
        weight: 0.7,
        opacity: 0.25,
        interactive: false,
    };

    const west = Math.floor(bounds.getWest() / sLng) * sLng;
    const east = Math.ceil(bounds.getEast() / sLng) * sLng;
    const south = Math.floor(bounds.getSouth() / sLat) * sLat;
    const north = Math.ceil(bounds.getNorth() / sLat) * sLat;

    // Vertical lines
    for (let lng = west; lng <= east; lng += sLng) {
        const line = L.polyline([[south, lng], [north, lng]], style).addTo(map);
        gridLines.push(line);
    }

    // Horizontal lines
    for (let lat = south; lat <= north; lat += sLat) {
        const line = L.polyline([[lat, west], [lat, east]], style).addTo(map);
        gridLines.push(line);
    }
}

map.on('moveend zoomend', () => {
    if (gridVisible) drawGrid();
});

// --- Double-click to finish line/area ---
map.on('dblclick', (e) => {
    if (drawingPolyline) {
        drawingPoints = [];
        drawingPolyline = null;
    }
});

// --- Keyboard Shortcuts ---
document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;

    switch (e.key.toLowerCase()) {
        case 'v':
            document.getElementById('btnSelect').click();
            break;
        case 'h':
            document.getElementById('btnPan').click();
            break;
        case 'l':
            document.getElementById('btnLine').click();
            break;
        case 'a':
            document.getElementById('btnArea').click();
            break;
        case 't':
            document.getElementById('btnText').click();
            break;
        case 'e':
            document.getElementById('btnEraser').click();
            break;
        case 'z':
            if (e.ctrlKey || e.metaKey) document.getElementById('btnUndo').click();
            break;
        case 'escape':
            document.getElementById('labelCancel').click();
            if (drawingPolyline) {
                map.removeLayer(drawingPolyline);
                drawingPolyline = null;
                drawingPoints = [];
            }
            break;
    }
});

// --- Export PNG ---
document.getElementById('btnExport').addEventListener('click', () => {
    // Simple export using html2canvas approach via canvas
    alert('Експорт PNG: використовуйте скріншот браузера (Ctrl+Shift+S або Cmd+Shift+4)');
});

// --- Disable map dragging when in select+symbol mode ---
map.on('click', () => {
    if (currentTool === 'select' && selectedSymbol) {
        // Re-enable dragging after placing
    }
});

// Right-click to cancel current drawing
map.on('contextmenu', (e) => {
    e.originalEvent.preventDefault();
    if (drawingPolyline) {
        // Finish current drawing
        drawingPoints = [];
        drawingPolyline = null;
    }
    // Deselect symbol
    selectedSymbol = null;
    document.querySelectorAll('.symbol-item').forEach(i => i.classList.remove('selected'));
});

console.log('Тактична карта НАТО завантажена. Виберіть знак з панелі та натисніть на карту.');

// =========================================================
// ===== UAV PLATOON VISUALIZATION — KUPYANSK ==============
// =========================================================

document.getElementById('btnDrone').addEventListener('click', buildDroneViz);

function buildDroneViz() {
    placedMarkers.forEach(m => map.removeLayer(m));
    placedMarkers = [];
    if (drawingPolyline) { map.removeLayer(drawingPolyline); drawingPolyline = null; }
    drawingPoints = [];
    gridLines.forEach(l => map.removeLayer(l));
    gridLines = [];

    const BLU = '#40c4ff';
    const RED = '#ef5350';
    const GRN = '#4caf50';
    const YEL = '#ffeb3b';
    const ORG = '#ff9800';
    const PUR = '#e040fb';
    const CYN = '#00e5ff';
    const WHT = '#ffffff';
    const PNK = '#ff4081';

    // --- Animated markers storage ---
    const animations = [];
    window._droneAnimations = animations;

    // SVG helpers
    function droneSVG(type, color, size = 40) {
        const c = color;
        const sw = 1.5;
        switch (type) {
            case 'fpv': // quadcopter X shape
                return `<line x1="${size*0.2}" y1="${size*0.2}" x2="${size*0.8}" y2="${size*0.8}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.8}" y1="${size*0.2}" x2="${size*0.2}" y2="${size*0.8}" stroke="${c}" stroke-width="${sw}"/>
                        <circle cx="${size*0.2}" cy="${size*0.2}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.8}" cy="${size*0.2}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.2}" cy="${size*0.8}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.8}" cy="${size*0.8}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.06}" fill="${c}"/>`;
            case 'recon': // airplane shape
                return `<path d="M${size*0.5},${size*0.1} L${size*0.6},${size*0.4} L${size*0.9},${size*0.5} L${size*0.6},${size*0.55} L${size*0.65},${size*0.85} L${size*0.5},${size*0.7} L${size*0.35},${size*0.85} L${size*0.4},${size*0.55} L${size*0.1},${size*0.5} L${size*0.4},${size*0.4} Z" fill="${c}33" stroke="${c}" stroke-width="${sw}"/>`;
            case 'bomber': // heavy quad with bomb
                return `<rect x="${size*0.2}" y="${size*0.15}" width="${size*0.6}" height="${size*0.5}" rx="4" fill="${c}33" stroke="${c}" stroke-width="${sw}"/>
                        <circle cx="${size*0.5}" cy="${size*0.75}" r="${size*0.1}" fill="${c}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.5}" y1="${size*0.65}" x2="${size*0.5}" y2="${size*0.75}" stroke="${c}" stroke-width="1"/>`;
            case 'relay': // diamond with waves
                return `<polygon points="${size*0.5},${size*0.1} ${size*0.9},${size*0.5} ${size*0.5},${size*0.9} ${size*0.1},${size*0.5}" fill="${c}33" stroke="${c}" stroke-width="${sw}"/>
                        <path d="M${size*0.35},${size*0.35} Q${size*0.5},${size*0.45} ${size*0.65},${size*0.35}" fill="none" stroke="${c}" stroke-width="1"/>
                        <path d="M${size*0.3},${size*0.45} Q${size*0.5},${size*0.6} ${size*0.7},${size*0.45}" fill="none" stroke="${c}" stroke-width="1"/>`;
            case 'ew': // antenna with lightning
                return `<line x1="${size*0.5}" y1="${size*0.8}" x2="${size*0.5}" y2="${size*0.2}" stroke="${c}" stroke-width="${sw}"/>
                        <polygon points="${size*0.5},${size*0.15} ${size*0.38},${size*0.35} ${size*0.62},${size*0.35}" fill="${c}" stroke="${c}" stroke-width="1"/>
                        <path d="M${size*0.6},${size*0.45} L${size*0.45},${size*0.55} L${size*0.55},${size*0.55} L${size*0.4},${size*0.7}" fill="none" stroke="${c}" stroke-width="1.5"/>`;
            case 'operator': // person with antenna
                return `<circle cx="${size*0.5}" cy="${size*0.2}" r="${size*0.1}" fill="${c}"/>
                        <line x1="${size*0.5}" y1="${size*0.3}" x2="${size*0.5}" y2="${size*0.6}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.4}" x2="${size*0.3}" y2="${size*0.55}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.4}" x2="${size*0.7}" y2="${size*0.35}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.6}" x2="${size*0.35}" y2="${size*0.85}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.6}" x2="${size*0.65}" y2="${size*0.85}" stroke="${c}" stroke-width="${sw}"/>`;
            case 'target': // crosshair
                return `<circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.3}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                        <circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.15}" fill="none" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.5}" y1="${size*0.1}" x2="${size*0.5}" y2="${size*0.35}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.5}" y1="${size*0.65}" x2="${size*0.5}" y2="${size*0.9}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.1}" y1="${size*0.5}" x2="${size*0.35}" y2="${size*0.5}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.65}" y1="${size*0.5}" x2="${size*0.9}" y2="${size*0.5}" stroke="${c}" stroke-width="1"/>
                        <circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.04}" fill="${c}"/>`;
            case 'explosion':
                return `<polygon points="${size*0.5},${size*0.05} ${size*0.58},${size*0.35} ${size*0.95},${size*0.35} ${size*0.65},${size*0.55} ${size*0.75},${size*0.9} ${size*0.5},${size*0.65} ${size*0.25},${size*0.9} ${size*0.35},${size*0.55} ${size*0.05},${size*0.35} ${size*0.42},${size*0.35}" fill="${c}88" stroke="${c}" stroke-width="1"/>`;
            case 'radio': // waves from point
                return `<circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.06}" fill="${c}"/>
                        <path d="M${size*0.35},${size*0.3} A${size*0.25},${size*0.25} 0 0,1 ${size*0.65},${size*0.3}" fill="none" stroke="${c}" stroke-width="1" opacity="0.5"/>
                        <path d="M${size*0.28},${size*0.22} A${size*0.35},${size*0.35} 0 0,1 ${size*0.72},${size*0.22}" fill="none" stroke="${c}" stroke-width="1" opacity="0.3"/>
                        <path d="M${size*0.2},${size*0.14} A${size*0.45},${size*0.45} 0 0,1 ${size*0.8},${size*0.14}" fill="none" stroke="${c}" stroke-width="1" opacity="0.15"/>`;
        }
        return '';
    }

    function mk(lat, lng, svgBody, label, note, is = [80,80]) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div class="marker-box">
                ${label ? `<div class="marker-label">${label}</div>` : ''}
                <div class="marker-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40">${svgBody}</svg></div>
                ${note ? `<div class="marker-note">${note}</div>` : ''}
            </div>`,
            iconSize: is, iconAnchor: [is[0]/2, is[1]/2],
        });
        const m = L.marker([lat, lng], { icon, draggable: true }).addTo(map);
        placedMarkers.push(m); return m;
    }

    function mkAnim(lat, lng, svgBody, label, note, is = [60,60]) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div class="marker-box drone-anim">
                ${label ? `<div class="marker-label" style="font-size:10px;">${label}</div>` : ''}
                <div class="marker-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="30" height="30">${svgBody}</svg></div>
                ${note ? `<div class="marker-note" style="font-size:9px;">${note}</div>` : ''}
            </div>`,
            iconSize: is, iconAnchor: [is[0]/2, is[1]/2],
        });
        const m = L.marker([lat, lng], { icon, draggable: false }).addTo(map);
        placedMarkers.push(m);
        return m;
    }

    function ln(coords, color, w = 2, dash = null) {
        const o = { color, weight: w, opacity: 0.7, interactive: false };
        if (dash) o.dashArray = dash;
        const l = L.polyline(coords, o).addTo(map); gridLines.push(l); return l;
    }

    function circ(lat, lng, r, c, fo = 0.05) {
        const x = L.circle([lat,lng], { radius: r, color: c, fillColor: c, fillOpacity: fo, weight: 1.5, interactive: false }).addTo(map);
        gridLines.push(x); return x;
    }

    function zoneLabel(lat, lng, text, color = WHT, fs = 12) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="color:${color};font-size:${fs}px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);white-space:nowrap;letter-spacing:1px;">${text}</div>`,
            iconAnchor: [0, 0],
        });
        placedMarkers.push(L.marker([lat, lng], { icon, interactive: false }).addTo(map));
    }

    // =========================================================
    //  KUPYANSK AREA: 49.7064, 37.2664
    //  Oskil River runs N-S east of the city
    //  Frontline ~5-10km east of Kupyansk
    // =========================================================

    // ---- FRONTLINE ----
    zoneLabel(49.68, 37.50, '───── ЛІНІЯ БОЮ ─────', RED, 12);

    // Frontline zigzag
    ln([
        [49.82, 37.25], [49.78, 37.35], [49.75, 37.40],
        [49.72, 37.50], [49.68, 37.48], [49.65, 37.55],
        [49.60, 37.52], [49.55, 37.50], [49.52, 37.55]
    ], RED, 3);

    // Enemy positions behind frontline
    zoneLabel(49.75, 37.70, 'РФ — ПОЗИЦІЇ', RED, 10);
    mk(49.77, 37.60, `<rect x="8" y="8" width="34" height="34" fill="${RED}33" stroke="${RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${RED}" stroke-width="1.5"/>`, 'РФ МСР-1', 'Мотостр. рота', [70,70]);
    mk(49.70, 37.62, `<rect x="8" y="8" width="34" height="34" fill="${RED}33" stroke="${RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${RED}" stroke-width="1.5"/>`, 'РФ ТР-1', 'Танкова рота', [70,70]);
    mk(49.63, 37.60, `<rect x="8" y="8" width="34" height="34" fill="${RED}33" stroke="${RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${RED}" stroke-width="1.5"/>`, 'РФ МСР-2', 'Мотостр. рота', [70,70]);
    mk(49.72, 37.72, `<circle cx="25" cy="25" r="15" fill="${RED}33" stroke="${RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${RED}"/>`, 'РФ АРТ', '2С19 Гіацинт', [70,70]);
    mk(49.58, 37.62, `<rect x="8" y="8" width="34" height="34" fill="${RED}33" stroke="${RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${RED}" stroke-width="1.5"/>`, 'РФ МСР-3', 'Штурмова група', [70,70]);

    // Enemy EW
    mk(49.74, 37.65, droneSVG('ew', RED), 'РЕБ РФ-1', 'Сіліконт / Репелент');
    circ(49.74, 37.65, 5000, RED, 0.03);
    mk(49.62, 37.68, droneSVG('ew', RED), 'РЕБ РФ-2', 'Красуха-4');
    circ(49.62, 37.68, 8000, RED, 0.03);

    // Enemy targets that will be struck
    mk(49.76, 37.55, droneSVG('target', RED), '', 'ЦІЛЬ-1: Командний пункт', [50,50]);
    mk(49.68, 37.58, droneSVG('target', RED), '', 'ЦІЛЬ-2: Склад БК', [50,50]);
    mk(49.64, 37.55, droneSVG('target', RED), '', 'ЦІЛЬ-3: БТР колона', [50,50]);
    mk(49.71, 37.68, droneSVG('target', RED), '', 'ЦІЛЬ-4: Арт. позиція', [50,50]);

    // ---- UKRAINIAN SIDE ----

    // Oskil River
    zoneLabel(49.60, 37.15, 'Р. ОСКІЛ', CYN, 10);
    ln([
        [49.85, 37.18], [49.80, 37.20], [49.75, 37.22],
        [49.70, 37.20], [49.65, 37.18], [49.60, 37.15],
        [49.55, 37.18], [49.50, 37.20]
    ], CYN, 3);

    // Ukrainian defensive positions
    mk(49.72, 37.30, `<rect x="8" y="8" width="34" height="34" fill="${BLU}33" stroke="${BLU}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${BLU}" stroke-width="1.5"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${BLU}" stroke-width="1.5"/>`, '14 МЕХБР', '1-й ешелон', [70,70]);
    mk(49.65, 37.28, `<rect x="8" y="8" width="34" height="34" fill="${BLU}33" stroke="${BLU}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${BLU}" stroke-width="1.5"/>`, 'МЕХБАТ', '2-й ешелон', [70,70]);

    // ==========================================================
    //  UAV PLATOON BASE — hidden in tree line 8km from front
    // ==========================================================
    zoneLabel(49.72, 37.02, 'ПОЗИЦІЯ БпАК ВЗВОДУ', PUR, 12);

    // Base camp
    circ(49.71, 37.06, 300, GRN, 0.15);
    mk(49.71, 37.06, droneSVG('operator', GRN), 'КП ВЗВОДУ', 'Командир взводу\nРація + Starlink + Метар', [90,90]);

    // Technical / charging station
    mk(49.708, 37.055, droneSVG('operator', YEL), 'ТЕХЗВЄНО', 'Зарядка 48в\nРемонт / Сборка\n10_FPV_готових', [80,80]);

    mk(49.715, 37.065, droneSVG('radio', GRN), 'STARLINK', 'Starlink Mini\nТактичний інтернет', [60,60]);

    // ==========================================================
    //  TEAM 1: FPV STRIKE — "ФЕНІКС" (6 operators)
    //  Range: 3-10km, speed 120km/h, payload: RPG-7 warhead
    // ==========================================================
    zoneLabel(49.745, 37.00, 'ВЗВОД FPV «ФЕНІКС»', PNK, 10);

    // FPV operator positions (spread along tree line)
    mk(49.75, 37.02, droneSVG('operator', PNK), 'FPV-1', 'Оператор 1\nRoyal_Racer_7_RP4');
    mk(49.745, 37.035, droneSVG('operator', PNK), 'FPV-2', 'Оператор 2\nBumblebee_HD');
    mk(49.748, 37.05, droneSVG('operator', PNK), 'FPV-3', 'Оператор 3\nQuad_7_RP4');
    mk(49.753, 37.065, droneSVG('operator', PNK), 'FPV-4', 'Оператор 4\nAstra_8_RP4');
    mk(49.742, 37.005, droneSVG('operator', PNK), 'FPV-5', 'Нічний FPV\nThermal_Caddx');
    mk(49.755, 37.08, droneSVG('operator', PNK), 'FPV-6', 'Резерв / Заміна');

    // FPV range circles
    circ(49.75, 37.04, 8000, PNK, 0.04);  // max range
    circ(49.75, 37.04, 5000, PNK, 0.02);  // effective range

    zoneLabel(49.79, 37.03, 'Дальність FPV: 8км (макс), 5км (ефект.)', PNK, 9);

    // FPV strike paths (animated feel — dashed lines)
    ln([[49.75, 37.02], [49.76, 37.30], [49.76, 37.55]], PNK, 2, '4 4');  // → Target 1
    ln([[49.745, 37.035], [49.70, 37.30], [49.68, 37.58]], PNK, 2, '4 4'); // → Target 2
    ln([[49.748, 37.05], [49.66, 37.30], [49.64, 37.55]], PNK, 2, '4 4');  // → Target 3

    // Explosion markers on targets
    mk(49.76, 37.55, droneSVG('explosion', ORG), '', 'УДАР FPV-1\nРПГ-7Г «ФЕНІКС»', [50,50]);
    mk(49.68, 37.58, droneSVG('explosion', ORG), '', 'УДАР FPV-2\nКумулятивний', [50,50]);
    mk(49.64, 37.55, droneSVG('explosion', ORG), '', 'УДАР FPV-3\nРПГ-7ВЛ', [50,50]);

    // ==========================================================
    //  TEAM 2: RECON UAV — "ЯСТРІБ" (2 operators)
    //  Shark / Leleka — fixed wing, 40km range, 2h endurance
    // ==========================================================
    zoneLabel(49.68, 36.98, 'РОЗВІДКА «ЯСТРІБ»', CYN, 10);

    mk(49.68, 37.01, droneSVG('recon', CYN), 'РОЗВ-1', 'Shark SC1\n35км дальність / 2год');
    mk(49.675, 37.03, droneSVG('recon', CYN), 'РОЗВ-2', 'Лелека-3\n45км дальність / 2.5год');

    // Recon patrol orbits (elliptical paths)
    circ(49.68, 37.02, 12000, CYN, 0.03);

    // Recon flight path (wide sweeping pattern)
    ln([[49.68, 37.01], [49.72, 37.20], [49.76, 37.40], [49.78, 37.55]], CYN, 1.5, '8 4');
    ln([[49.675, 37.03], [49.64, 37.20], [49.60, 37.35], [49.56, 37.50]], CYN, 1.5, '8 4');

    // Recon coverage zone
    zoneLabel(49.72, 37.35, 'Зона розвідки Shark', CYN, 9);
    zoneLabel(49.58, 37.35, 'Зона розвідки Лелека', CYN, 9);

    // Recon → Artillery correction link
    mk(49.67, 37.00, droneSVG('radio', CYN), 'ТАСКИ', 'Зв\'язок з артилерією\nКоригування вогню', [60,60]);

    // Ukrainian artillery (receiving corrections from recon)
    mk(49.68, 37.10, `<circle cx="25" cy="25" r="15" fill="${ORG}33" stroke="${ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${ORG}"/>`, 'АРТ-1', 'M777 / CAESAR\nКориг. через БпАК', [80,80]);
    mk(49.66, 37.08, `<circle cx="25" cy="25" r="15" fill="${ORG}33" stroke="${ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${ORG}"/>`, 'АРТ-2', '2С3 Акація\nКориг. через БпАК', [80,80]);

    // Artillery → targets (corrected by recon)
    ln([[49.68, 37.10], [49.76, 37.55]], ORG, 2, '6 3');
    ln([[49.66, 37.08], [49.71, 37.68]], ORG, 2, '6 3');

    // ==========================================================
    //  TEAM 3: BOMBER DRONES — "БУРВІЙ" (3 operators)
    //  Heavy lift: Mavic 3 / Custom — drops TM-62, RGD-5
    // ==========================================================
    zoneLabel(49.77, 36.95, 'БОМБЕРИ «БУРВІЙ»', YEL, 10);

    mk(49.77, 36.98, droneSVG('bomber', YEL), 'БОМБ-1', 'Mavic_3_Thermal\nTM-62 / 2xРГД-5');
    mk(49.775, 37.00, droneSVG('bomber', YEL), 'БОМБ-2', 'Custom_XL\n2x_ТМ-62_міни');
    mk(49.768, 37.015, droneSVG('bomber', YEL), 'БОМБ-3', 'Mavic_3T_ніч\nVOG-17_x4');

    // Bomber range (shorter, ~3-5km)
    circ(49.77, 37.00, 4000, YEL, 0.04);

    // Bomber flight paths — drop zones
    ln([[49.77, 36.98], [49.74, 37.30], [49.73, 37.42]], YEL, 2, '3 3');
    ln([[49.775, 37.00], [49.70, 37.25], [49.68, 37.35]], YEL, 2, '3 3');
    ln([[49.768, 37.015], [49.66, 37.20], [49.64, 37.30]], YEL, 2, '3 3');

    // Drop zones on enemy trenches
    mk(49.73, 37.42, droneSVG('explosion', YEL), '', 'СКИД TM-62\nокоп/бліндаж', [45,45]);
    mk(49.68, 37.35, droneSVG('explosion', YEL), '', 'СКИД 2xРГД\nпозиція_РФ', [45,45]);
    mk(49.64, 37.30, droneSVG('explosion', YEL), '', 'СКИД VOG-17\nДОТ', [45,45]);

    zoneLabel(49.77, 37.03, 'Дальність бомберів: 3-4км', YEL, 9);

    // ==========================================================
    //  TEAM 4: RELAY / DEEP STRIKE — "МАРАПУЦЬ" (2 operators)
    //  Relay FPV signal to extend range to 15-20km
    // ==========================================================
    zoneLabel(49.80, 37.15, 'РЕТРАНСЛЯТОР + ГЛИБОКИЙ УДАР', '#76ff03', 10);

    mk(49.80, 37.18, droneSVG('relay', '#76ff03'), 'РЕТРАНСЛ-1', 'Піднятий на 300м\nПодовжує FPV +10км');
    mk(49.78, 37.28, droneSVG('relay', '#76ff03'), 'РЕТРАНСЛ-2', 'Ланцюжок_2\nГлибокий_удар');

    // Relay chain visualization
    ln([[49.75, 37.04], [49.80, 37.18], [49.78, 37.28]], '#76ff03', 2, '5 3');

    // Deep strike through relay (to enemy rear)
    ln([[49.78, 37.28], [49.75, 37.45], [49.72, 37.72]], '#76ff03', 2.5, '6 4');

    // Deep strike target
    mk(49.72, 37.72, droneSVG('target', '#76ff03'), '', 'ГЛИБОКИЙ УДАР\nчерез ретранслятор\nАРТ склад РФ', [50,50]);
    mk(49.72, 37.72, droneSVG('explosion', '#76ff03'), '', '', [40,40]);

    // Extended range through relay
    circ(49.80, 37.18, 3000, '#76ff03', 0.03);

    // ==========================================================
    //  TEAM 5: ANTI-DRONE / COUNTER-UAS — "ОХОРОНЕЦЬ"
    // ==========================================================
    zoneLabel(49.62, 37.05, 'АНТИДРОН «ОХОРОНЕЦЬ»', ORG, 10);

    mk(49.62, 37.08, droneSVG('ew', ORG), 'РЕБ-1', 'Буккель-AD\nГлушилка_2.4/5.8ГГц');
    circ(49.62, 37.08, 3000, ORG, 0.05);
    mk(49.615, 37.10, droneSVG('ew', ORG), 'РЕБ-2', 'Анти-FPV_щит\n433/868/915_МГц');
    circ(49.615, 37.10, 2500, ORG, 0.04);
    mk(49.63, 37.06, droneSVG('operator', ORG), 'ПЕРЕХОПЛ', 'Перехоплення_дронів\nОператор з сіткою');

    // EW coverage zone
    zoneLabel(49.58, 37.08, 'Зона РЕБ захисту', ORG, 9);

    // ==========================================================
    //  KILL CHAIN VISUALIZATION: Detect → ID → Track → Strike → BDA
    // ==========================================================
    zoneLabel(49.55, 37.55, 'ЛАНЦЮГ УРАЖЕННЯ (KILL CHAIN):', WHT, 11);

    // Step labels along the bottom
    const steps = [
        { lat: 49.555, lng: 37.20, text: '① ВИЯВЛЕННЯ', desc: 'Розвідка Shark\nпатрулює передову', color: CYN },
        { lat: 49.555, lng: 37.30, text: '② РОЗПІЗНАННЯ', desc: 'Координати цілі\nТип зброї, пріоритет', color: YEL },
        { lat: 49.555, lng: 37.40, text: '③ ПЕРЕДАЧА', desc: 'Starlink → КП\n→ Оператор FPV', color: GRN },
        { lat: 49.555, lng: 37.50, text: '④ УДАР', desc: 'FPV/Бомбер\nна ціль', color: PNK },
        { lat: 49.555, lng: 37.60, text: '⑤ ОЦІНКА', desc: 'BDA — Розвідка\nоцінює результат', color: ORG },
    ];

    steps.forEach(s => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${s.color};font-size:13px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:4px;">${s.text}</div>
                <div style="color:#bbb;font-size:10px;line-height:1.4;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${s.desc}</div>
            </div>`,
            iconAnchor: [50, 0],
        });
        placedMarkers.push(L.marker([s.lat, s.lng], { icon, interactive: false }).addTo(map));
    });

    // Arrow between steps
    ln([[49.56, 37.24], [49.56, 37.26]], WHT, 1.5);
    ln([[49.56, 37.34], [49.56, 37.36]], WHT, 1.5);
    ln([[49.56, 37.44], [49.56, 37.46]], WHT, 1.5);
    ln([[49.56, 37.54], [49.56, 37.56]], WHT, 1.5);

    // ==========================================================
    //  NIGHT OPERATIONS overlay
    // ==========================================================
    zoneLabel(49.82, 36.90, 'НОЧНА ЗМІНА:', '#b388ff', 11);
    const nightIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="color:#b388ff;font-size:10px;line-height:1.6;text-shadow:0 1px 3px rgba(0,0,0,0.9);">
            <div style="font-weight:700;margin-bottom:4px;">Нічні операції (22:00-04:00):</div>
            <div>• FPV-5 з тепловізором Caddx → Окопи вночі</div>
            <div>• БОМБ-3 Mavic 3T → Скид VOg-17 з тепловізором</div>
            <div>• Розвідка Shark → Рух техніки по теплу</div>
            <div>• Ретранслятор → Працює 24/7 на висоті 300м</div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.81, 36.92], { icon: nightIcon, interactive: false }).addTo(map));

    // ==========================================================
    //  SORTIE STATISTICS BOX
    // ==========================================================
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:220px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9992; БпАК ВЗВОД — СТАТИСТИКА ДОБИ</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>FPV вильотів: <span style="color:#ff4081;font-weight:700;">24</span> (влучень: <span style="color:#4caf50;">19</span>)</div>
                <div>Бомбер скиди: <span style="color:#ffeb3b;font-weight:700;">12</span> (влучень: <span style="color:#4caf50;">10</span>)</div>
                <div>Розвідка год: <span style="color:#00e5ff;font-weight:700;">18</span> год патрулювання</div>
                <div>Ретранслятор: <span style="color:#76ff03;font-weight:700;">24</span> год онлайн</div>
                <div>Знищено цілей: <span style="color:#ef5350;font-weight:700;">8</span> од. техніки + <span style="color:#ef5350;">15</span> особового складу</div>
                <div>Втрачено БпАК: <span style="color:#ff9800;">3</span> FPV + <span style="color:#ff9800;">1</span> розвідник</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Вартість доби: ~$2,400 FPV + $800 бомби<br>
                Ефективність: 79% влучень
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.52, 36.98], { icon: statsIcon, interactive: false }).addTo(map));

    // ==========================================================
    //  ANIMATED DRONES — moving markers
    // ==========================================================

    // Animated FPV drone 1 (flying toward target)
    const fpv1 = mkAnim(49.75, 37.02, droneSVG('fpv', PNK), 'FPV-1→', '', [40,40]);
    animations.push({
        marker: fpv1,
        path: [[49.75, 37.02], [49.755, 37.15], [49.758, 37.30], [49.76, 37.45], [49.76, 37.55]],
        step: 0,
        speed: 0.003,
    });

    // Animated FPV drone 2
    const fpv2 = mkAnim(49.745, 37.035, droneSVG('fpv', PNK), 'FPV-2→', '', [40,40]);
    animations.push({
        marker: fpv2,
        path: [[49.745, 37.035], [49.73, 37.15], [49.71, 37.35], [49.68, 37.50], [49.68, 37.58]],
        step: 0,
        speed: 0.003,
    });

    // Animated recon drone (orbiting)
    const recon1 = mkAnim(49.72, 37.30, droneSVG('recon', CYN), 'Shark', '', [40,40]);
    animations.push({
        marker: recon1,
        path: [
            [49.72, 37.20], [49.74, 37.30], [49.76, 37.40],
            [49.78, 37.50], [49.76, 37.55], [49.74, 37.50],
            [49.72, 37.40], [49.70, 37.30], [49.68, 37.20],
            [49.70, 37.15], [49.72, 37.20]
        ],
        step: 0,
        speed: 0.002,
    });

    // Animated bomber
    const bomb1 = mkAnim(49.77, 36.98, droneSVG('bomber', YEL), 'БОМБ→', '', [40,40]);
    animations.push({
        marker: bomb1,
        path: [[49.77, 36.98], [49.76, 37.10], [49.75, 37.25], [49.74, 37.35], [49.73, 37.42]],
        step: 0,
        speed: 0.002,
    });

    // Animated relay drone (hovering)
    const relay1 = mkAnim(49.80, 37.18, droneSVG('relay', '#76ff03'), 'RELAY', '', [40,40]);
    animations.push({
        marker: relay1,
        path: [
            [49.80, 37.17], [49.801, 37.18], [49.802, 37.19],
            [49.801, 37.20], [49.80, 37.21], [49.799, 37.20],
            [49.798, 37.19], [49.799, 37.18], [49.80, 37.17]
        ],
        step: 0,
        speed: 0.004,
    });

    // Start animation loop
    if (window._droneAnimFrame) cancelAnimationFrame(window._droneAnimFrame);
    function animateDrones() {
        animations.forEach(a => {
            if (a.path.length < 2) return;
            a.step += a.speed;
            if (a.step >= a.path.length - 1) a.step = 0;

            const idx = Math.floor(a.step);
            const frac = a.step - idx;
            const from = a.path[idx];
            const to = a.path[Math.min(idx + 1, a.path.length - 1)];

            const lat = from[0] + (to[0] - from[0]) * frac;
            const lng = from[1] + (to[1] - from[1]) * frac;
            a.marker.setLatLng([lat, lng]);
        });
        window._droneAnimFrame = requestAnimationFrame(animateDrones);
    }
    animateDrones();

    // Fly to Kupyansk
    map.flyTo([49.68, 37.30], 12, { duration: 1.5 });
}

// =========================================================
// ===== KYIV STRATEGIC DEFENSE PLAN =======================
// =========================================================

document.getElementById('btnKyiv').addEventListener('click', buildKyivDefense);

function buildKyivDefense() {
    // Clear existing
    placedMarkers.forEach(m => map.removeLayer(m));
    placedMarkers = [];
    if (drawingPolyline) { map.removeLayer(drawingPolyline); drawingPolyline = null; }
    drawingPoints = [];
    gridLines.forEach(l => map.removeLayer(l));
    gridLines = [];

    const BLU = '#40c4ff';
    const RED = '#ef5350';
    const YEL = '#ffeb3b';
    const GRN = '#4caf50';
    const ORG = '#ff9800';
    const PUR = '#e040fb';
    const WHT = '#ffffff';

    // --- SVG helpers (same as Kharkiv) ---
    function coloredSVG(inner, color, size = 50) {
        const pad = size * 0.1; const sw = 2; const fill = color + '4d';
        let s = '';
        switch (inner) {
            case 'cross': s=`<line x1="${pad}" y1="${pad}" x2="${size-pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/><line x1="${size-pad}" y1="${pad}" x2="${pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'oval': s=`<ellipse cx="${size/2}" cy="${size/2}" rx="${size*0.3}" ry="${size*0.18}" fill="none" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'cross_oval': s=`<line x1="${pad}" y1="${pad}" x2="${size-pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/><line x1="${size-pad}" y1="${pad}" x2="${pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/><ellipse cx="${size/2}" cy="${size/2}" rx="${size*0.3}" ry="${size*0.18}" fill="none" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'cross_vline': s=`<line x1="${pad}" y1="${pad}" x2="${size-pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/><line x1="${size-pad}" y1="${pad}" x2="${pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/><line x1="${size/2}" y1="${pad}" x2="${size/2}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'dot': return `<circle cx="${size/2}" cy="${size/2}" r="${size*0.38}" fill="${fill}" stroke="${color}" stroke-width="${sw}"/><circle cx="${size/2}" cy="${size/2}" r="${size*0.1}" fill="${color}"/>`;
            case 'arrow_up': s=`<line x1="${size/2}" y1="${size-pad}" x2="${size/2}" y2="${size*0.24}" stroke="${color}" stroke-width="${sw*1.2}"/><polygon points="${size/2},${pad} ${size*0.36},${size*0.32} ${size*0.64},${size*0.32}" fill="${color}"/>`;break;
            case 'chevron': s=`<line x1="${pad}" y1="${pad}" x2="${size/2}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/><line x1="${size-pad}" y1="${pad}" x2="${size/2}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'antenna': s=`<path d="M${size*0.3},${size*0.78} Q${size*0.3},${size*0.3} ${size/2},${size*0.24} Q${size*0.7},${size*0.3} ${size*0.7},${size*0.78}" fill="none" stroke="${color}" stroke-width="${sw*1.2}"/><line x1="${size*0.22}" y1="${size*0.78}" x2="${size*0.78}" y2="${size*0.78}" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'cross_plus': s=`<line x1="${size/2}" y1="${size*0.24}" x2="${size/2}" y2="${size*0.76}" stroke="${color}" stroke-width="${sw*1.5}"/><line x1="${size*0.24}" y1="${size/2}" x2="${size*0.76}" y2="${size/2}" stroke="${color}" stroke-width="${sw*1.5}"/>`;break;
            case 'supply': s=`<circle cx="${size/2}" cy="${size/2}" r="${size*0.1}" fill="none" stroke="${color}" stroke-width="${sw}"/><line x1="${pad}" y1="${size/2}" x2="${size*0.4}" y2="${size/2}" stroke="${color}" stroke-width="${sw}"/><line x1="${size*0.6}" y1="${size/2}" x2="${size-pad}" y2="${size/2}" stroke="${color}" stroke-width="${sw}"/>`;break;
            case 'question': s=`<text x="${size/2}" y="${size*0.64}" text-anchor="middle" fill="${color}" font-size="${size*0.45}" font-weight="bold" font-family="sans-serif">?</text>`;break;
        }
        return `<rect x="${pad}" y="${pad}" width="${size-pad*2}" height="${size-pad*2}" fill="${fill}" stroke="${color}" stroke-width="${sw}"/>${s}`;
    }

    function sizedSVG(inner, color, sizeIdx, size = 50) {
        const base = coloredSVG(inner, color, size);
        let dots = ''; const cx = size/2;
        switch(sizeIdx) {
            case 3: dots=`<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/>`;break;
            case 4: dots=`<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/><line x1="${size*0.12}" y1="${size*0.06}" x2="${size*0.88}" y2="${size*0.06}" stroke="${color}" stroke-width="2"/>`;break;
            case 5: dots=`<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/><line x1="${size*0.12}" y1="${size*0.06}" x2="${size*0.88}" y2="${size*0.06}" stroke="${color}" stroke-width="2"/><line x1="${size*0.12}" y1="${size*0.96}" x2="${size*0.88}" y2="${size*0.96}" stroke="${color}" stroke-width="2"/>`;break;
            case 6: dots=`<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/><line x1="${size*0.12}" y1="${size*0.06}" x2="${size*0.88}" y2="${size*0.06}" stroke="${color}" stroke-width="2"/><line x1="${size*0.12}" y1="${size*0.96}" x2="${size*0.88}" y2="${size*0.96}" stroke="${color}" stroke-width="2"/><line x1="${size*0.16}" y1="${size*1.0}" x2="${size*0.84}" y2="${size*1.0}" stroke="${color}" stroke-width="2"/>`;break;
        }
        return base + dots;
    }

    function mk(lat, lng, svgBody, label, note, is = [80,80]) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div class="marker-box">
                ${label ? `<div class="marker-label">${label}</div>` : ''}
                <div class="marker-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">${svgBody}</svg></div>
                ${note ? `<div class="marker-note">${note}</div>` : ''}
            </div>`,
            iconSize: is, iconAnchor: [is[0]/2, is[1]/2],
        });
        const m = L.marker([lat, lng], { icon, draggable: true }).addTo(map);
        placedMarkers.push(m); return m;
    }

    function ln(coords, color, w = 2, dash = null) {
        const o = { color, weight: w, opacity: 0.7, interactive: false };
        if (dash) o.dashArray = dash;
        const l = L.polyline(coords, o).addTo(map); gridLines.push(l); return l;
    }

    function ar(coords, stroke, fill, fo = 0.1) {
        const l = L.polygon(coords, { color: stroke, fillColor: fill||stroke, fillOpacity: fo, weight: 1.5, opacity: 0.5, interactive: false }).addTo(map);
        gridLines.push(l); return l;
    }

    function circ(lat, lng, r, c, fo = 0.05) {
        const x = L.circle([lat,lng], { radius: r, color: c, fillColor: c, fillOpacity: fo, weight: 1.5, interactive: false }).addTo(map);
        gridLines.push(x); return x;
    }

    function zoneLabel(lat, lng, text, color = WHT, fs = 12) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="color:${color};font-size:${fs}px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);white-space:nowrap;letter-spacing:1px;">${text}</div>`,
            iconAnchor: [0, 0],
        });
        placedMarkers.push(L.marker([lat, lng], { icon, interactive: false }).addTo(map));
    }

    // ==========================================================
    //  KYIV: 50.4501, 30.5234
    //
    //  GEOGRAPHIC ANALYSIS:
    //  - Dnipro river splits city N-S (right bank = high ground)
    //  - Irpin River W of city = natural anti-tank barrier
    //  - Key lessons from 2022:
    //    * Hostomel airport was #1 target (VDV air assault)
    //    * Irpin/Bucha/Hostomel were the decisive sector
    //    * Bridge demolitions stopped the northern column
    //    * Right bank = defendable high ground
    //    * Left bank (Darnytsia) = vulnerable flat terrain
    // ==========================================================

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ECHELON 0: STRATEGIC DEEP RECONNAISSANCE (70-120km N)
    //  Covering: Belarus border & Chernihiv/Sumy axes
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(51.30, 29.80, 'ДЕЛЬТА-РОВИДКА — КОРДОН БІЛОРУСЬ', YEL, 10);
    zoneLabel(51.30, 31.20, 'ДЕЛЬТА-РОВИДКА — ЧЕРНІГІВСЬКИЙ НАПРЯМОК', YEL, 10);

    // Western axis (Belarus → Zhytomyr → Kyiv)
    mk(51.50, 29.40, coloredSVG('cross_vline', BLU), 'ДРГ-1', 'Радіорозвідка', [80,80]);
    mk(51.40, 29.90, coloredSVG('cross_vline', BLU), 'ДРГ-2', 'Маршрут М-01');
    mk(51.20, 29.30, coloredSVG('cross_vline', BLU), 'ДРГ-3', 'Коростень напр.');

    // Northern axis (Belarus → Chernihiv → Kyiv)
    mk(51.60, 30.50, coloredSVG('cross_vline', BLU), 'ДРГ-4', 'Чернігів напр.');
    mk(51.45, 31.00, coloredSVG('cross_vline', BLU), 'ДРГ-5', 'Ніжин напр.');
    mk(51.50, 31.60, coloredSVG('cross_vline', BLU), 'ДРГ-6', 'Сумський напр.');

    // Deep UAV pickets
    mk(51.35, 30.10, coloredSVG('cross_vline', PUR), 'БпАК-Д1', 'Bayraktar патруль');
    mk(51.55, 31.20, coloredSVG('cross_vline', PUR), 'БпАК-Д2', 'Shark розвідка');

    // SIGINT stations
    mk(51.25, 30.60, coloredSVG('antenna', ORG), 'СРР-1', 'Радіоперехоплення');
    mk(51.30, 29.50, coloredSVG('antenna', ORG), 'СРР-2', 'Пеленгація');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ECHELON 1: FORWARD SECURITY ZONE (35-55km)
    //  Engineer obstacles + demolitions + observation
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.95, 29.50, 'ПОЛОСА ЗАБЕЗПЕЧЕННЯ — ЗАХІД', ORG, 10);
    zoneLabel(50.95, 31.00, 'ПОЛОСА ЗАБЕЗПЕЧЕННЯ — ПІВНІЧ/СХІД', ORG, 10);

    // Western approach (M-06 Zhytomyr highway)
    mk(50.90, 29.30, sizedSVG('chevron', BLU, 4), 'ІЗ-1', 'Мінні поля / М-06');
    mk(50.85, 29.70, sizedSVG('chevron', BLU, 4), 'ІЗ-2', 'Протианк. рів');
    mk(50.95, 29.10, sizedSVG('chevron', BLU, 4), 'ІЗ-3', 'Загородження');
    mk(50.80, 29.50, sizedSVG('chevron', BLU, 3), 'ІЗ-4', 'ОП на дорозі');

    // Northwestern (M-07 Hostomel direction — THE 2022 DECISIVE AXIS)
    mk(50.95, 30.10, sizedSVG('chevron', BLU, 4), 'ІЗ-5', 'Мін. поля М-07');
    mk(51.00, 30.40, sizedSVG('chevron', BLU, 4), 'ІЗ-6', 'Протианк. загор.');
    mk(50.88, 30.25, sizedSVG('chevron', BLU, 3), 'ІЗ-7', 'Фугаси на шляхах');

    // Northern (Chernihiv → Kyiv M-01)
    mk(51.00, 30.70, sizedSVG('chevron', BLU, 4), 'ІЗ-8', 'Демост preparations');
    mk(50.95, 31.00, sizedSVG('chevron', BLU, 4), 'ІЗ-9', 'Мости підірвані');
    mk(50.90, 30.90, sizedSVG('chevron', BLU, 3), 'ІЗ-10', 'ОП міст');

    // Northeastern (Brovary direction)
    mk(50.95, 31.30, sizedSVG('chevron', BLU, 4), 'ІЗ-11', 'Загородження Сх');
    mk(50.90, 31.50, sizedSVG('chevron', BLU, 3), 'ІЗ-12', 'Мінні поля');

    // Bridge demolition sites (critical 2022 lesson)
    mk(51.05, 30.65, `<rect x="10" y="15" width="30" height="20" fill="none" stroke="${RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${RED}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${RED}" font-size="10">ПД</text>`, 'МІСТ-1', 'Підготовлений до підриву');
    mk(50.98, 30.45, `<rect x="10" y="15" width="30" height="20" fill="none" stroke="${RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${RED}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${RED}" font-size="10">ПД</text>`, 'МІСТ-2', 'Підготовлений до підриву');
    mk(50.88, 31.40, `<rect x="10" y="15" width="30" height="20" fill="none" stroke="${RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${RED}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${RED}" font-size="10">ПД</text>`, 'МІСТ-3', 'Десна — підірваний');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ECHELON 2: MAIN DEFENSE LINE (15-30km)
    //  THE CRITICAL RING — 5 SECTORS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.68, 29.50, '1-й ЕШЕЛОН ОБОРОНИ — ЗАХІДНИЙ СЕКТОР', GRN, 11);
    zoneLabel(50.75, 30.85, '1-й ЕШЕЛОН — ПІВНІЧНИЙ СЕКТОР', GRN, 11);
    zoneLabel(50.55, 31.60, '1-й ЕШЕЛОН — СХІДНИЙ СЕКТОР', GRN, 11);
    zoneLabel(50.22, 30.30, '1-й ЕШЕЛОН — ПІВДЕННИЙ СЕКТОР', GRN, 11);

    // === WESTERN SECTOR: IRPIN RIVER LINE ===
    // This was THE decisive position in 2022
    // High ground on right bank of Irpin

    // Makariv area (far west approach)
    mk(50.65, 29.55, sizedSVG('cross_oval', BLU, 5), '14-та МЕХБР', 'БМП-2 + Т-72АМТ');
    mk(50.62, 29.40, sizedSVG('oval', BLU, 3), 'ТК-1', 'T-64БВ');

    // Bucha / Irpin / Hostomel (THE fortified triangle)
    mk(50.62, 30.10, sizedSVG('cross_oval', BLU, 5), '72-га МЕХБР', 'Ірпінська лінія');
    mk(50.58, 30.22, sizedSVG('oval', BLU, 3), 'ТК-2', 'Т-72 + Bradley');

    // Hostomel airport — FORTIFIED (2022 lesson)
    mk(50.57, 30.22, sizedSVG('chevron', BLU, 4), 'КРЕПІСТЬ-1', 'Аеродром Гостомель\n(Укріплений!)');
    circ(50.567, 30.227, 3000, BLU, 0.08);

    // Irpin river line — anti-tank ditch
    ln([
        [50.72, 29.60], [50.68, 29.80], [50.65, 30.00],
        [50.62, 30.15], [50.58, 30.28], [50.55, 30.40]
    ], GRN, 3);

    // === NORTHWESTERN SECTOR: HOSTOMEL → DYMER ===
    mk(50.70, 30.30, sizedSVG('cross_oval', BLU, 5), '61-ша МЕХБР', 'Димерський напр.');
    mk(50.75, 30.15, sizedSVG('oval', BLU, 3), 'ТК-3', 'Leopard 2A6');

    // === NORTHERN SECTOR: along Dnipro west bank ===
    mk(50.72, 30.55, sizedSVG('cross', BLU, 5), 'АЕМБР-1', 'Десантно-штурмова');
    mk(50.70, 30.70, sizedSVG('cross_oval', BLU, 4), '1-й МЕХБАТ', 'Вишгород напр.');

    // Dnipro river — natural barrier, bridges controlled
    ln([
        [50.75, 30.35], [50.70, 30.45], [50.65, 30.55],
        [50.55, 30.55], [50.45, 30.55], [50.35, 30.55],
        [50.25, 30.55], [50.15, 30.55]
    ], '#4fc3f7', 3);
    zoneLabel(50.60, 30.42, 'ДНІПРО — ПРОТИТАНКОВИЙ РУБІЖ', '#4fc3f7', 10);

    // === EASTERN SECTOR: Left bank (Darnytsia/Brovary/Boryspil) ===
    // Flat terrain — harder to defend, needs depth
    mk(50.55, 30.85, sizedSVG('cross_oval', BLU, 5), 'АЕМБР-2', 'Броварський напр.');
    mk(50.50, 31.00, sizedSVG('cross', BLU, 4), '2-й МЕХБАТ', 'Північне ЛБ');
    mk(50.45, 31.20, sizedSVG('cross_oval', BLU, 4), '3-й МЕХБАТ', 'Бориспіль напр.');
    mk(50.40, 31.45, sizedSVG('cross', BLU, 3), 'Рота ТрО', 'Бориспіль аеропорт');
    mk(50.55, 31.50, sizedSVG('oval', BLU, 3), 'ТК-4', 'T-72АМТ Сх');

    // Left bank defense line
    ln([
        [50.60, 30.75], [50.55, 30.90], [50.50, 31.10],
        [50.45, 31.30], [50.40, 31.50]
    ], '#4fc3f7', 2.5);

    // === SOUTHERN SECTOR: Vasylkiv / Obukhiv ===
    mk(50.25, 30.30, sizedSVG('cross_oval', BLU, 5), 'АЕМБР-3', 'Васильків напр.');
    mk(50.20, 30.50, sizedSVG('cross', BLU, 4), '4-й МЕХБАТ', 'Обухів напр.');
    mk(50.22, 30.10, sizedSVG('oval', BLU, 3), 'ТК-5', 'Т-64БВ');
    mk(50.15, 30.25, sizedSVG('cross', BLU, 3), 'Рота ТрО', 'Фастів напр.');

    // Southern defense line
    ln([
        [50.30, 30.00], [50.25, 30.15], [50.22, 30.35],
        [50.20, 30.55], [50.22, 30.75]
    ], GRN, 2.5);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ECHELON 3: ARTILLERY KILL ZONES (8-15km)
    //  Overlapping rings of fire — 3 artillery groups
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.55, 29.90, 'АРТИЛЕРІЙСЬКІ ПОЛОСИ УРАГОННЯ', ORG, 10);

    // Western artillery group (covering Irpin line)
    mk(50.55, 30.00, sizedSVG('dot', BLU, 5), 'АРТГР «ЗАХІД»', 'M777 / CAESAR / FH70');
    circ(50.55, 30.00, 18000, ORG, 0.04);

    // Northern artillery group (covering Dnipro crossing)
    mk(50.58, 30.50, sizedSVG('dot', BLU, 5), 'АРТГР «ПІВНІЧ»', '2С3 / 2С19 / M109');
    circ(50.58, 30.50, 18000, ORG, 0.04);

    // Eastern artillery group (left bank)
    mk(50.48, 30.95, sizedSVG('dot', BLU, 5), 'АРТГР «СХІД»', 'Bohdana / Krab');
    circ(50.48, 30.95, 15000, ORG, 0.04);

    // Southern artillery group
    mk(50.35, 30.40, sizedSVG('dot', BLU, 4), 'АРТГР «ПІВДЕНЬ»', 'Dana-M / 2С3');

    // MLRS — deep strike capability
    mk(50.48, 29.80, sizedSVG('dot', ORG, 5), 'РСЗВ «ЗАХІД»', 'HIMARS / ATACMS');
    circ(50.48, 29.80, 60000, '#ff5722', 0.02);
    mk(50.38, 30.55, sizedSVG('dot', ORG, 4), 'РСЗВ «ЦЕНТР»', 'Vilkha / RM-70');
    mk(50.50, 31.20, sizedSVG('dot', ORG, 4), 'РСЗВ «СХІД»', 'HIMARS / GMLRS');

    // Pre-registered fire zones
    ar([
        [50.75, 29.90], [50.80, 30.10], [50.78, 30.40], [50.72, 30.30], [50.70, 30.00]
    ], ORG, ORG, 0.06);
    ar([
        [50.60, 30.60], [50.65, 30.90], [50.60, 31.10], [50.55, 30.90], [50.55, 30.70]
    ], ORG, ORG, 0.06);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  AIR DEFENSE — 3-LAYER UMBRELLA
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.48, 30.00, 'ПРОТИПОВІТРЯНА ОБОРОНА', YEL, 10);

    // OUTER RING: S-300 / Patriot (long range — 70-150km)
    mk(50.58, 29.70, sizedSVG('arrow_up', BLU, 5), 'ППО-L1 «ЗАХІД»', 'Patriot PAC-3');
    circ(50.58, 29.70, 70000, YEL, 0.02);
    mk(50.70, 30.80, sizedSVG('arrow_up', BLU, 5), 'ППО-L1 «ПІВНІЧ»', 'S-300PS');
    circ(50.70, 30.80, 80000, YEL, 0.02);
    mk(50.35, 31.00, sizedSVG('arrow_up', BLU, 5), 'ППО-L1 «СХІД»', 'S-300V');
    circ(50.35, 31.00, 70000, YEL, 0.02);
    mk(50.25, 30.10, sizedSVG('arrow_up', BLU, 5), 'ППО-L1 «ПІВДЕНЬ»', 'Patriot / IRIS-T SLM');
    circ(50.25, 30.10, 65000, YEL, 0.02);

    // MIDDLE RING: NASAMS / IRIS-T (medium range — 25-40km)
    mk(50.52, 30.10, sizedSVG('arrow_up', BLU, 4), 'ППО-M1', 'NASAMS');
    mk(50.55, 30.65, sizedSVG('arrow_up', BLU, 4), 'ППО-M2', 'IRIS-T SLS');
    mk(50.42, 30.20, sizedSVG('arrow_up', BLU, 4), 'ППО-M3', 'NASAMS');
    mk(50.40, 30.70, sizedSVG('arrow_up', BLU, 4), 'ППО-M4', 'Buk-M1');

    // INNER RING: Point defense — critical infrastructure
    mk(50.48, 30.45, sizedSVG('arrow_up', BLU, 3), 'ППО-P1', 'Gepard — Центр');
    mk(50.45, 30.38, sizedSVG('arrow_up', BLU, 3), 'ППО-P2', 'Stormer — Захід');
    mk(50.46, 30.60, sizedSVG('arrow_up', BLU, 3), 'ППО-P3', 'Gepard — Лівий берег');
    mk(50.50, 30.52, sizedSVG('arrow_up', BLU, 3), 'ППО-P4', 'С-60 — Північ');

    // MANPADS in urban
    mk(50.45, 30.50, coloredSVG('arrow_up', '#ffc107'), 'ПЗРК-1', 'Igla/Stinger моб.');
    mk(50.43, 30.45, coloredSVG('arrow_up', '#ffc107'), 'ПЗРК-2', 'Mistral мобільн.');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  URBAN DEFENSE — KYIV CITY FORTRESS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.46, 30.48, 'МІСЬКА ОБОРОНА — ФОРТЕЦЯ КИЇВ', WHT, 11);

    // Sector HQ
    mk(50.45, 30.52, sizedSVG('antenna', YEL, 5), 'ШТАБ ОБОРОНИ КИЄВА', 'Генеральний КП');

    // Urban strongpoints (8 sectors)
    mk(50.49, 30.45, sizedSVG('cross', BLU, 3), 'УО-1', 'Оболонь — північ');
    mk(50.48, 30.35, sizedSVG('cross', BLU, 3), 'УО-2', 'Святошин — захід');
    mk(50.46, 30.35, sizedSVG('cross', BLU, 3), 'УО-3', 'Солом\'янка — пд-зх');
    mk(50.44, 30.40, sizedSVG('cross', BLU, 3), 'УО-4', 'Голосіїво — південь');
    mk(50.44, 30.58, sizedSVG('cross', BLU, 3), 'УО-5', 'Дарниця — ЛБ північ');
    mk(50.43, 30.62, sizedSVG('cross', BLU, 3), 'УО-6', 'Дніпровський — ЛБ');
    mk(50.46, 30.56, sizedSVG('cross', BLU, 3), 'УО-7', 'Печерськ — центр');
    mk(50.47, 30.50, sizedSVG('chevron', BLU, 3), 'УО-8', 'Барикади/блокпости');

    // Key bridge defense (Dnipro crossings)
    mk(50.455, 30.535, `<rect x="10" y="15" width="30" height="20" fill="none" stroke="${YEL}" stroke-width="2.5"/><line x1="10" y1="25" x2="40" y2="25" stroke="${YEL}" stroke-width="2"/>`, 'МІСТ-А', 'Міст Метро — оборон.');
    mk(50.458, 30.525, `<rect x="10" y="15" width="30" height="20" fill="none" stroke="${YEL}" stroke-width="2.5"/><line x1="10" y1="25" x2="40" y2="25" stroke="${YEL}" stroke-width="2"/>`, 'МІСТ-Б', 'Міст Патона — оборон.');
    mk(50.448, 30.500, `<rect x="10" y="15" width="30" height="20" fill="none" stroke="${YEL}" stroke-width="2.5"/><line x1="10" y1="25" x2="40" y2="25" stroke="${YEL}" stroke-width="2"/>`, 'МІСТ-В', 'Південний міст');

    // Tank hunting teams
    mk(50.48, 30.42, coloredSVG('oval', '#ffc107'), 'ПТГР-1', 'Javelin/NLAW');
    mk(50.44, 30.55, coloredSVG('oval', '#ffc107'), 'ПТГР-2', 'Stugna-P / NLAW');
    mk(50.46, 30.65, coloredSVG('oval', '#ffc107'), 'ПТГР-3', 'Javelin Сх');

    // Sniper/observation on high-rises
    mk(50.45, 30.48, coloredSVG('cross_vline', '#ffc107'), 'СП-1', 'Спостереження');
    mk(50.43, 30.52, coloredSVG('cross_vline', '#ffc107'), 'СП-2', 'Коригувальники');

    // Urban defense perimeter line
    ln([
        [50.51, 30.40], [50.50, 30.50], [50.49, 30.60],
        [50.47, 30.68], [50.44, 30.68], [50.42, 30.60],
        [50.42, 30.45], [50.43, 30.35], [50.46, 30.30],
        [50.49, 30.32], [50.51, 30.40]
    ], WHT, 2, '6 3');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  EW / CYBER / COUNTER-DRONE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.38, 30.15, 'ЕЛЕКТРОННА БОРОТЬБА', PUR, 10);

    mk(50.50, 30.20, sizedSVG('antenna', ORG, 5), 'РЕБ-ЦЕНТР', 'Комунар / РЕБ');
    circ(50.50, 30.20, 25000, PUR, 0.04);
    mk(50.60, 30.50, sizedSVG('antenna', ORG, 4), 'РЕБ-1', 'Бортьовик дрони');
    mk(50.40, 30.75, sizedSVG('antenna', ORG, 4), 'РЕБ-2', 'Глушилка GNSS');
    mk(50.35, 30.25, sizedSVG('antenna', ORG, 3), 'РЕБ-3', 'Анти-FPV щит');
    mk(50.45, 30.25, coloredSVG('antenna', ORG), 'РЕБ-4', 'Перешкода зв\'язку');

    // Counter-drone teams
    mk(50.48, 30.40, coloredSVG('cross_vline', PUR), 'АБД-1', 'FPV перехоплення');
    mk(50.42, 30.58, coloredSVG('cross_vline', PUR), 'АБД-2', 'Shahed hunter');
    mk(50.52, 30.55, coloredSVG('cross_vline', PUR), 'АБД-3', 'Yaksterek/Bukovel');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  UAV STRIKE CORRIDORS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    mk(50.55, 29.80, coloredSVG('cross_vline', PUR), 'БпАК-1', 'Магура / FPV-удар');
    mk(50.60, 30.90, coloredSVG('cross_vline', PUR), 'БпАК-2', 'Shark розвідка');
    mk(50.35, 30.80, coloredSVG('cross_vline', PUR), 'БпАК-3', 'LongRecon RQ');
    mk(50.30, 30.00, coloredSVG('cross_vline', PUR), 'БпАК-4', 'FPV-штурм група');

    // UAV strike directions
    ln([[50.55, 29.80], [50.80, 29.50], [51.10, 29.40]], PUR, 2, '8 4');
    ln([[50.60, 30.90], [50.80, 31.00], [51.00, 31.20]], PUR, 2, '8 4');
    ln([[50.30, 30.00], [50.50, 29.70]], PUR, 1.5, '4 4');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  MOBILE RESERVE / COUNTER-ATTACK FORCE
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(50.15, 30.55, 'РЕЗЕРВ КОНТРУДАРУ', '#ff5722', 11);

    mk(50.18, 30.50, sizedSVG('oval', BLU, 5), '1-ша ТАНКБР', 'Leopard 2A6 + T-64');
    mk(50.15, 30.70, sizedSVG('oval', BLU, 5), '4-та ТАНКБР', 'T-72АМТ + Challenger');
    mk(50.12, 30.35, sizedSVG('cross_oval', BLU, 5), 'РезМЕХБР', 'БМП-3 + Bradley');

    // Air assault reserve
    mk(50.20, 30.90, sizedSVG('cross', '#ffc107', 5), '95-та АеШБр', 'Десантно-штурмова');

    // Counter-attack axes (3 directions)
    ln([[50.18, 30.50], [50.45, 30.25], [50.70, 30.10]], '#ff5722', 3, '12 6');
    ln([[50.15, 30.70], [50.40, 30.65], [50.60, 30.80]], '#ff5722', 3, '12 6');
    ln([[50.12, 30.35], [50.30, 30.20], [50.55, 30.00]], '#ff5722', 3, '12 6');

    // Arrowheads on counter-attack
    zoneLabel(50.62, 30.05, '→ КОНТРУДАР-1', '#ff5722', 10);
    zoneLabel(50.55, 30.78, '→ КОНТРУДАР-2', '#ff5722', 10);
    zoneLabel(50.48, 29.95, '→ КОНТРУДАР-3', '#ff5722', 10);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  LOGISTICS & MEDICAL
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    mk(50.30, 29.90, sizedSVG('supply', BLU, 5), 'ТИЛОВА БАЗА-1', 'БК + ПММ + Запч.');
    mk(50.25, 30.75, sizedSVG('supply', BLU, 4), 'ТИЛОВА БАЗА-2', 'Ремонт + Евакуація');
    mk(50.10, 30.45, sizedSVG('supply', BLU, 4), 'ТИЛОВА БАЗА-3', 'Резерв БК');

    mk(50.32, 30.05, sizedSVG('cross_plus', '#ffc107', 5), 'ГОСПІТАЛЬ-1', 'Головний військовий');
    mk(50.20, 30.60, sizedSVG('cross_plus', '#ffc107', 4), 'МЕДЕвак-1', 'Санітарна авіація');
    mk(50.38, 30.85, sizedSVG('cross_plus', '#ffc107', 3), 'МЕДЕвак-2', 'Польовий шпиталь');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  COMMUNICATIONS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    mk(50.46, 30.54, sizedSVG('antenna', BLU, 4), 'ЗВ\'ЯЗОК-1', 'Starlink + Київстар');
    mk(50.43, 30.42, sizedSVG('antenna', BLU, 3), 'ЗВ\'ЯЗОК-2', 'Тактичний радіозв\'язок');
    mk(50.48, 30.48, sizedSVG('antenna', BLU, 3), 'ЗВ\'ЯЗОК-3', 'Супутниковий КП');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  ENEMY FORCES (HYPOTHETICAL)
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    zoneLabel(51.70, 29.80, 'УМОВНИЙ ПРОТИВНИК — БІЛОРУСЬКИЙ НАПРЯМОК', RED, 10);
    zoneLabel(51.65, 31.50, 'УМОВНИЙ ПРОТИВНИК — ЧЕРНІГІВСЬКИЙ НАПРЯМОК', RED, 10);

    // Belarus axis (western approach — M-01 / P-28)
    mk(51.80, 29.30, sizedSVG('cross_oval', RED, 6), '35-та ЗАГРОЗОВА АРМІЯ', '~25 БН + 150 танк');
    mk(51.75, 29.80, sizedSVG('oval', RED, 5), 'ТГ «ЗАХІД-1»', '~40 БТР + 25 Т-72Б3');
    mk(51.70, 29.40, sizedSVG('oval', RED, 5), 'ТГ «ЗАХІД-2»', '~35 БМП + 20 танк');

    // Northern axis (Chernihiv)
    mk(51.70, 30.60, sizedSVG('cross_oval', RED, 5), 'ТГ «ПІВНІЧ-1»', '~30 БМП + 15 танк');
    mk(51.75, 31.20, sizedSVG('oval', RED, 5), 'ТГ «ПІВНІЧ-2»', '~25 БТР + 20 танк');

    // VDV — Hostomel 2.0 attempt
    mk(51.65, 30.30, sizedSVG('cross', RED, 4), 'ВДВ-загроза', 'Повітряний десант');

    // Enemy artillery
    mk(51.60, 29.60, sizedSVG('dot', RED, 5), 'АРТ противн.', '2С19 / Ураган');
    mk(51.55, 30.90, sizedSVG('dot', RED, 4), 'АРТ-2', 'Град / Смерч');

    // Enemy recon
    mk(51.50, 29.90, sizedSVG('cross_vline', RED, 4), 'Спецназ', 'Розвідгрупа');
    mk(51.45, 30.40, sizedSVG('cross_vline', RED, 4), 'ГРУ', 'Військ. розвідка');

    // Enemy attack axes
    ln([[51.75, 29.80], [50.95, 29.70], [50.65, 29.60]], RED, 3, '10 5');
    ln([[51.70, 30.60], [50.95, 30.50], [50.70, 30.45]], RED, 3, '10 5');
    ln([[51.65, 30.30], [50.65, 30.25], [50.57, 30.23]], RED, 3, '10 5');
    ln([[51.75, 31.20], [50.90, 31.30], [50.55, 30.90]], RED, 3, '10 5');

    // Enemy objectives (circles)
    circ(50.57, 30.23, 3000, RED, 0.08);
    circ(50.45, 30.52, 4000, RED, 0.06);
    circ(50.40, 31.45, 2500, RED, 0.05);

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  CHECKPOINTS
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    const cpSVG = (t) => `<circle cx="25" cy="25" r="16" fill="none" stroke="${YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${YEL}" font-size="11" font-weight="bold">${t}</text>`;

    mk(50.60, 30.10, cpSVG('КП'), 'КП-1', 'Тр-са М-07');
    mk(50.55, 29.60, cpSVG('КП'), 'КП-2', 'Тр-са М-06');
    mk(50.68, 30.50, cpSVG('КП'), 'КП-3', 'Вишгород напр.');
    mk(50.50, 31.10, cpSVG('КП'), 'КП-4', 'Бровари напр.');
    mk(50.28, 30.35, cpSVG('КП'), 'КП-5', 'Васильків напр.');
    mk(50.42, 31.40, cpSVG('КП'), 'КП-6', 'Бориспіль напр.');

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    //  INFRASTRUCTURE PROTECTION
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    mk(50.47, 30.53, coloredSVG('cross_plus', '#ffc107'), 'ЕНЕРГО', 'Електростанція охор.');
    mk(50.38, 30.55, coloredSVG('chevron', '#ffc107'), 'ГАЕС', 'Канівська ГЕС охор.');
    mk(50.50, 30.50, coloredSVG('arrow_up', '#ffc107'), 'ІНФРА', 'Водопостачання');

    // FLY TO KYIV
    map.flyTo([50.45, 30.52], 9, { duration: 1.5 });
}

// =========================================================
// ===== KHARKIV ADVANCED TACTICAL DEFENSE PLAN ============
// =========================================================

document.getElementById('btnDefense').addEventListener('click', buildKharkivDefense);

function buildKharkivDefense() {
    // Clear existing
    placedMarkers.forEach(m => map.removeLayer(m));
    placedMarkers = [];
    if (drawingPolyline) { map.removeLayer(drawingPolyline); drawingPolyline = null; }
    drawingPoints = [];
    gridLines.forEach(l => map.removeLayer(l));
    gridLines = [];

    // === COLORS ===
    const BLU = '#40c4ff';
    const RED = '#ef5350';
    const YEL = '#ffeb3b';
    const GRN = '#4caf50';
    const ORG = '#ff9800';

    // Helper: colored rect with inner modifier
    function coloredSVG(inner, color, size = 50) {
        const pad = size * 0.1;
        const sw = 2;
        const fill = color + '4d';
        let innerSvg = '';
        switch (inner) {
            case 'cross':
                innerSvg = `<line x1="${pad}" y1="${pad}" x2="${size-pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${size-pad}" y1="${pad}" x2="${pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'oval':
                innerSvg = `<ellipse cx="${size/2}" cy="${size/2}" rx="${size*0.3}" ry="${size*0.18}" fill="none" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'cross_oval':
                innerSvg = `<line x1="${pad}" y1="${pad}" x2="${size-pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${size-pad}" y1="${pad}" x2="${pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>
                            <ellipse cx="${size/2}" cy="${size/2}" rx="${size*0.3}" ry="${size*0.18}" fill="none" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'cross_vline':
                innerSvg = `<line x1="${pad}" y1="${pad}" x2="${size-pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${size-pad}" y1="${pad}" x2="${pad}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${size/2}" y1="${pad}" x2="${size/2}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'dot':
                return `<circle cx="${size/2}" cy="${size/2}" r="${size*0.38}" fill="${fill}" stroke="${color}" stroke-width="${sw}"/><circle cx="${size/2}" cy="${size/2}" r="${size*0.1}" fill="${color}"/>`;
            case 'arrow_up':
                innerSvg = `<line x1="${size/2}" y1="${size-pad}" x2="${size/2}" y2="${size*0.24}" stroke="${color}" stroke-width="${sw*1.2}"/>
                            <polygon points="${size/2},${pad} ${size*0.36},${size*0.32} ${size*0.64},${size*0.32}" fill="${color}"/>`;
                break;
            case 'chevron':
                innerSvg = `<line x1="${pad}" y1="${pad}" x2="${size/2}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${size-pad}" y1="${pad}" x2="${size/2}" y2="${size-pad}" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'antenna':
                innerSvg = `<path d="M${size*0.3},${size*0.78} Q${size*0.3},${size*0.3} ${size/2},${size*0.24} Q${size*0.7},${size*0.3} ${size*0.7},${size*0.78}" fill="none" stroke="${color}" stroke-width="${sw*1.2}"/>
                            <line x1="${size*0.22}" y1="${size*0.78}" x2="${size*0.78}" y2="${size*0.78}" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'cross_plus':
                innerSvg = `<line x1="${size/2}" y1="${size*0.24}" x2="${size/2}" y2="${size*0.76}" stroke="${color}" stroke-width="${sw*1.5}"/>
                            <line x1="${size*0.24}" y1="${size/2}" x2="${size*0.76}" y2="${size/2}" stroke="${color}" stroke-width="${sw*1.5}"/>`;
                break;
            case 'supply':
                innerSvg = `<circle cx="${size/2}" cy="${size/2}" r="${size*0.1}" fill="none" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${pad}" y1="${size/2}" x2="${size*0.4}" y2="${size/2}" stroke="${color}" stroke-width="${sw}"/>
                            <line x1="${size*0.6}" y1="${size/2}" x2="${size-pad}" y2="${size/2}" stroke="${color}" stroke-width="${sw}"/>`;
                break;
            case 'question':
                innerSvg = `<text x="${size/2}" y="${size*0.64}" text-anchor="middle" fill="${color}" font-size="${size*0.45}" font-weight="bold" font-family="sans-serif">?</text>`;
                break;
        }
        return `<rect x="${pad}" y="${pad}" width="${size-pad*2}" height="${size-pad*2}" fill="${fill}" stroke="${color}" stroke-width="${sw}"/>${innerSvg}`;
    }

    // Frame for unit size (dots above/below)
    function sizedSVG(inner, color, sizeIdx, size = 50) {
        const base = coloredSVG(inner, color, size);
        let dots = '';
        const cx = size / 2;
        switch (sizeIdx) {
            case 1: // team
                dots = `<circle cx="${cx}" cy="${size*0.02}" r="2.5" fill="${color}"/>`;
                break;
            case 2: // platoon
                dots = `<circle cx="${cx-5}" cy="${size*0.02}" r="2.5" fill="${color}"/><circle cx="${cx+5}" cy="${size*0.02}" r="2.5" fill="${color}"/>`;
                break;
            case 3: // company
                dots = `<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/>`;
                break;
            case 4: // battalion
                dots = `<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/>
                        <line x1="${size*0.12}" y1="${size*0.06}" x2="${size*0.88}" y2="${size*0.06}" stroke="${color}" stroke-width="2"/>`;
                break;
            case 5: // brigade
                dots = `<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/>
                        <line x1="${size*0.12}" y1="${size*0.06}" x2="${size*0.88}" y2="${size*0.06}" stroke="${color}" stroke-width="2"/>
                        <line x1="${size*0.12}" y1="${size*0.96}" x2="${size*0.88}" y2="${size*0.96}" stroke="${color}" stroke-width="2"/>`;
                break;
            case 6: // division
                dots = `<line x1="${size*0.12}" y1="${size*0.02}" x2="${size*0.88}" y2="${size*0.02}" stroke="${color}" stroke-width="2"/>
                        <line x1="${size*0.12}" y1="${size*0.06}" x2="${size*0.88}" y2="${size*0.06}" stroke="${color}" stroke-width="2"/>
                        <line x1="${size*0.12}" y1="${size*0.96}" x2="${size*0.88}" y2="${size*0.96}" stroke="${color}" stroke-width="2"/>
                        <line x1="${size*0.16}" y1="${size*1.0}" x2="${size*0.84}" y2="${size*1.0}" stroke="${color}" stroke-width="2"/>`;
                break;
        }
        return base + dots;
    }

    // Place marker helper
    function marker(lat, lng, svgContent, label, note, iconSize = [70, 70]) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div class="marker-box">
                ${label ? `<div class="marker-label">${label}</div>` : ''}
                <div class="marker-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50" height="50">${svgContent}</svg></div>
                ${note ? `<div class="marker-note">${note}</div>` : ''}
            </div>`,
            iconSize: iconSize,
            iconAnchor: [iconSize[0]/2, iconSize[1]/2],
        });
        const m = L.marker([lat, lng], { icon, draggable: true }).addTo(map);
        placedMarkers.push(m);
        return m;
    }

    // Polyline helper
    function line(coords, color, weight = 2, dash = null) {
        const opts = { color, weight, opacity: 0.7, interactive: false };
        if (dash) opts.dashArray = dash;
        const l = L.polyline(coords, opts).addTo(map);
        gridLines.push(l);
        return l;
    }

    // Area helper
    function area(coords, strokeColor, fillColor, fillOpacity = 0.1) {
        const l = L.polygon(coords, {
            color: strokeColor, fillColor: fillColor || strokeColor,
            fillOpacity, weight: 1.5, opacity: 0.5, interactive: false,
        }).addTo(map);
        gridLines.push(l);
        return l;
    }

    // Circle helper
    function circle(lat, lng, radius, color, fillOp = 0.06) {
        const c = L.circle([lat, lng], { radius, color, fillColor: color, fillOpacity: fillOp, weight: 1.5, interactive: false }).addTo(map);
        gridLines.push(c);
        return c;
    }

    // =========================================================
    //  KHARKIV: 49.9935, 36.2304
    // =========================================================

    // ---- ZONE LABELS (invisible markers with text) ----
    function zoneLabel(lat, lng, text, color = '#ffffff', fontSize = 13) {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="color:${color};font-size:${fontSize}px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);white-space:nowrap;letter-spacing:1px;">${text}</div>`,
            iconAnchor: [0, 0],
        });
        const m = L.marker([lat, lng], { icon, interactive: false }).addTo(map);
        placedMarkers.push(m);
    }

    // ---- DEFENSE ZONES ----

    // 1) DEEP RECONNAISSANCE SCREEN (~40-50km north)
    zoneLabel(50.35, 36.00, 'ПОЛОСУ РОЗВІДКИ', '#ffc107', 11);
    marker(50.38, 35.80, coloredSVG('cross_vline', BLU), 'РР-1', 'ДРГ-1');
    marker(50.32, 36.10, coloredSVG('cross_vline', BLU), 'РР-2', 'ДРГ-2');
    marker(50.40, 36.40, coloredSVG('cross_vline', BLU), 'РР-3', 'ДРГ-3');
    marker(50.28, 36.55, coloredSVG('cross_vline', BLU), 'РР-4', 'БПЛА розвідка');
    marker(50.42, 36.00, coloredSVG('cross_vline', BLU), 'РР-5', 'Радіорозвідка');
    marker(50.20, 35.75, coloredSVG('cross_vline', BLU), 'РР-6', 'ДРГ-4');

    // 2) FORWARD SECURITY ZONE / ENGINEER OBSTACLES (~25-30km)
    zoneLabel(50.18, 36.00, 'ПОЛОСА ЗАБЕЗПЕЧЕННЯ', '#ff9800', 11);

    // Minefields / engineer obstacles (triangular markers)
    marker(50.18, 35.75, sizedSVG('chevron', BLU, 4), 'ІБ-1', 'Мінні поля');
    marker(50.15, 36.05, sizedSVG('chevron', BLU, 4), 'ІБ-2', 'Протианк. рів');
    marker(50.20, 36.30, sizedSVG('chevron', BLU, 4), 'ІБ-3', 'Мінні поля');
    marker(50.12, 36.55, sizedSVG('chevron', BLU, 4), 'ІБ-4', 'Загородження');

    // 3) MAIN DEFENSE LINE (~15-20km from center) — 3 defensive belts
    zoneLabel(50.08, 35.65, '1-й ЕШЕЛОН ОБОРОНИ', GRN, 11);
    zoneLabel(50.02, 36.55, '1-й ЕШЕЛОН ОБОРОНИ', GRN, 11);

    // Northern front — 3 mech infantry brigades
    marker(50.08, 35.75, sizedSVG('cross_oval', BLU, 5), '3-я МЕХБР', 'БМП-2 + Т-64');
    marker(50.12, 36.05, sizedSVG('cross_oval', BLU, 5), '5-я МЕХБР', 'БТР-4 + Т-72');
    marker(50.10, 36.35, sizedSVG('cross_oval', BLU, 5), '92-га МЕХБР', 'БМП-1 + Т-64');

    // Flank coverage
    marker(50.05, 35.55, sizedSVG('cross', BLU, 4), '1-й МЕХБАТ', 'Охоплення Зх');
    marker(50.15, 36.55, sizedSVG('cross', BLU, 4), '2-й МЕХБАТ', 'Охоплення Сх');

    // Tank companies embedded
    marker(50.10, 35.90, sizedSVG('oval', BLU, 3), 'ТК-1', 'Т-64БВ');
    marker(50.14, 36.20, sizedSVG('oval', BLU, 3), 'ТК-2', 'Т-72АМТ');

    // 4) SECOND ECHELON / ARTILLERY KILL ZONE (~10km)
    zoneLabel(50.02, 35.60, '2-й ЕШЕЛОН', '#4fc3f7', 11);

    // Artillery groups — M777, Caesar, M109
    marker(50.05, 35.70, sizedSVG('dot', BLU, 5), 'АРТГР-1', 'M777 / CAESAR');
    marker(50.02, 36.05, sizedSVG('dot', BLU, 5), 'АРТГР-2', 'M109 / 2С3');
    marker(50.06, 36.40, sizedSVG('dot', BLU, 5), 'АРТГР-3', '2С19 / Bohdana');

    // MLRS
    marker(50.00, 35.80, sizedSVG('dot', '#ff9800', 4), 'РСЗВ-1', 'HIMARS');
    marker(49.98, 36.25, sizedSVG('dot', '#ff9800', 4), 'РСЗВ-2', 'Vilkha / RM-70');

    // 5) AIR DEFENSE UMBRELLA — layered
    marker(50.00, 35.90, sizedSVG('arrow_up', BLU, 5), 'ППО-1', 'Patriot / IRIS-T');
    marker(50.08, 36.15, sizedSVG('arrow_up', BLU, 4), 'ППО-2', 'NASAMS');
    marker(49.95, 36.45, sizedSVG('arrow_up', BLU, 4), 'ППО-3', 'S-300 / Buk-M1');
    marker(49.92, 35.65, sizedSVG('arrow_up', BLU, 3), 'ППО-4', 'Gepard / С-60');
    marker(50.15, 35.85, sizedSVG('arrow_up', BLU, 3), 'ППО-5', 'Stormer / Starstreak');
    marker(50.00, 36.60, sizedSVG('arrow_up', BLU, 3), 'ППО-6', 'ZU-23 / Shilka');

    // AD circles
    circle(50.00, 35.90, 25000, '#40c4ff', 0.04);
    circle(50.08, 36.15, 15000, '#40c4ff', 0.04);
    circle(49.95, 36.45, 30000, '#40c4ff', 0.04);

    // 6) URBAN DEFENSE BELT (city edges)
    zoneLabel(49.96, 36.10, 'МІСЬКА ОБОРОНА', '#ffffff', 10);

    marker(50.02, 36.15, sizedSVG('cross', BLU, 4), 'МО-1', 'Північний р-н');
    marker(49.97, 36.08, sizedSVG('cross', BLU, 3), 'МО-2', 'Західний р-н');
    marker(49.97, 36.30, sizedSVG('cross', BLU, 3), 'МО-3', 'Східний р-н');
    marker(49.93, 36.20, sizedSVG('cross', BLU, 3), 'МО-4', 'Південний р-н');
    marker(50.00, 36.25, sizedSVG('chevron', BLU, 3), 'МО-5', 'Барикади/блокпости');

    // 7) CITY CENTER — HQ & COMMAND
    marker(49.99, 36.23, sizedSVG('antenna', '#ffc107', 5), 'ШТАБ ОБОРОНИ', 'КП м. Харків');
    marker(49.98, 36.20, sizedSVG('antenna', BLU, 4), 'ЗВ\'ЯЗОК', 'Точка управління');
    marker(49.97, 36.26, sizedSVG('antenna', '#ff9800', 3), 'РЕБ', 'Електронна боротьба');

    // 8) MOBILE RESERVE / COUNTER-ATTACK (south of city)
    zoneLabel(49.82, 36.05, 'РЕЗЕРВ / КОНТРУДАР', '#ff5722', 11);

    marker(49.85, 36.00, sizedSVG('oval', BLU, 5), '1-ша ТАНКБР', 'Т-64БВ + Leopard');
    marker(49.82, 36.30, sizedSVG('oval', BLU, 5), '3-тя ТАНКБР', 'Т-72 + Challenger');
    marker(49.80, 36.15, sizedSVG('cross_oval', BLU, 5), 'РезМЕХБР', 'БМП-3 + Т-90');

    // Counter-attack directions
    line([[49.85, 36.00], [50.05, 36.00]], '#ff5722', 3, '12 6');
    line([[49.82, 36.30], [50.05, 36.20]], '#ff5722', 3, '12 6');
    line([[49.80, 36.15], [50.10, 36.10]], '#ff5722', 3, '12 6');

    // 9) LOGISTICS & SUPPORT (south-southwest)
    marker(49.88, 35.90, sizedSVG('supply', BLU, 5), 'Тилова база-1', 'БК + ПММ');
    marker(49.85, 36.45, sizedSVG('supply', BLU, 4), 'Тилова база-2', 'Ремонт + Евакуація');

    marker(49.90, 35.85, sizedSVG('cross_plus', '#ffc107', 4), 'Госпіталь', 'Польовий шпиталь');
    marker(49.83, 36.10, sizedSVG('cross_plus', '#ffc107', 3), 'МЕДЕвак', 'Санітарна рота');

    // 10) ENEMY FORCES — north/northeast (direction of Russia)
    marker(50.48, 36.10, sizedSVG('cross_oval', RED, 5), '20-ГА ЗАГРОЗОВО', 'Підстанційний');
    marker(50.50, 36.50, sizedSVG('oval', RED, 5), 'ТГ-1', '~40 БТР + 20 Танк');
    marker(50.45, 35.80, sizedSVG('oval', RED, 4), 'ТГ-2', '~25 БМП');
    marker(50.52, 36.30, sizedSVG('dot', RED, 4), 'АРТ противн.', '2С19 / Град');
    marker(50.40, 36.70, sizedSVG('cross_vline', RED, 4), 'Розвідка', 'Спецназ');

    // Enemy direction of attack arrows
    line([[50.48, 36.10], [50.12, 36.10]], RED, 3, '8 4');
    line([[50.50, 36.50], [50.10, 36.35]], RED, 3, '8 4');
    line([[50.45, 35.80], [50.10, 35.80]], RED, 3, '8 4');

    // 11) LIKELY ENEMY OBJECTIVES (circles)
    circle(49.99, 36.23, 3000, RED, 0.08);
    circle(50.00, 36.40, 2000, RED, 0.06);

    // 12) DEFENSIVE LINES (polygons — defense zones)
    // Forward defense line
    line([
        [50.15, 35.50], [50.12, 35.70], [50.10, 36.00],
        [50.14, 36.30], [50.12, 36.50], [50.08, 36.65]
    ], GRN, 3);

    // Second defense line
    line([
        [50.02, 35.55], [50.00, 35.80], [49.98, 36.05],
        [50.02, 36.35], [50.00, 36.55], [49.96, 36.65]
    ], '#4fc3f7', 2.5);

    // Urban defense perimeter
    line([
        [50.04, 36.10], [50.03, 36.20], [50.00, 36.30],
        [49.96, 36.32], [49.93, 36.25], [49.92, 36.15],
        [49.93, 36.05], [49.97, 36.00], [50.02, 36.02], [50.04, 36.10]
    ], '#ffffff', 2, '6 3');

    // 13) CHECKPOINTS on major roads
    marker(50.06, 36.05, `<circle cx="25" cy="25" r="16" fill="none" stroke="${YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${YEL}" font-size="11" font-weight="bold">КП</text>`, 'КП-1', 'Тр-са М-20');
    marker(49.95, 35.75, `<circle cx="25" cy="25" r="16" fill="none" stroke="${YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${YEL}" font-size="11" font-weight="bold">КП</text>`, 'КП-2', 'Тр-са М-03');
    marker(49.90, 36.30, `<circle cx="25" cy="25" r="16" fill="none" stroke="${YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${YEL}" font-size="11" font-weight="bold">КП</text>`, 'КП-3', 'Напр. Мерефа');
    marker(50.10, 36.50, `<circle cx="25" cy="25" r="16" fill="none" stroke="${YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${YEL}" font-size="11" font-weight="bold">КП</text>`, 'КП-4', 'Напр. Чугуїв');

    // 14) UAV / FPV drone zones
    marker(49.95, 36.15, coloredSVG('cross_vline', '#e040fb'), 'БПЛА-1', 'FPV / REACH');
    marker(50.02, 35.85, coloredSVG('cross_vline', '#e040fb'), 'БПЛА-2', 'Shahed hunter');
    marker(50.05, 36.45, coloredSVG('cross_vline', '#e040fb'), 'БПЛА-3', 'Розвідка БпАК');

    // 15) EW zones
    circle(49.97, 36.26, 12000, '#ff9800', 0.04);
    marker(50.00, 36.50, coloredSVG('antenna', '#ff9800'), 'РЕБ-2', 'Бортьовик');
    marker(49.88, 35.95, coloredSVG('antenna', '#ff9800'), 'РЕБ-3', 'РЕБ Перешкода');

    // Fly to Kharkiv
    map.flyTo([50.02, 36.10], 10, { duration: 1.5 });
}

