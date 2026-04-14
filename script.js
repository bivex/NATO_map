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
window.placedMarkers = [];
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
// Now handled by the tacticSelect dropdown

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

// Tactic selection dropdown handler
document.getElementById('tacticSelect').addEventListener('change', (e) => {
    const value = e.target.value;
    if (value === 'drone') {
        buildDroneViz();
    } else if (value === 'kyiv') {
        buildKyivDefense();
    } else if (value === 'kharkiv') {
        buildKharkivDefense();
    } else if (value === 'assault') {
        buildAssaultViz();
    } else if (value === 'trench') {
        buildTrenchDefenseViz();
    } else if (value === 'artillery') {
        buildArtilleryWar();
    } else if (value === 'specialops') {
        buildSpecialOpsViz();
    } else if (value === 'frontline') {
        buildGeneralFrontlineViz();
    } else if (value === 'military-hq') {
        buildMilitaryHQViz();
    } else if (value === 'medical-company') {
        buildMedicalCompanyViz();
    } else if (value === 'mech-battalion') {
        buildMechBattalionViz();
    } else if (value === 'mech-company') {
        buildMechCompanyViz();
    } else if (value === 'mech-platoon') {
        buildMechPlatoonViz();
    } else if (value === 'logistics') {
        buildLogisticsViz();
    } else if (value === 'export') {
        // Handle PNG export
        alert('Експорт PNG: використовуйте скріншот браузера (Ctrl+Shift+S або Cmd+Shift+4)');
        // Reset select to default
        e.target.value = '';
    }
    // Reset select to default after selection (except for export)
    if (value !== 'export') {
        e.target.value = '';
    }
});

