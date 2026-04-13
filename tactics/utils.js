// ===== TACTICAL MAP UTILITIES =====
// Common colors and helper functions used across all visualizations

// Color constants
const COLORS = {
    BLU: '#40c4ff',
    RED: '#ef5350',
    YEL: '#ffeb3b',
    GRN: '#4caf50',
    ORG: '#ff9800',
    PUR: '#e040fb',
    CYN: '#00e5ff',
    WHT: '#ffffff',
    PNK: '#ff4081',
    BRN: '#8d6e63'
};

// Common helper functions
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

function mkAnim(lat, lng, svgBody, label, note, is = [60,60]) {
    const icon = L.divIcon({
        className: 'nato-marker',
        html: `<div class="marker-box">
            ${label ? `<div class="marker-label" style="font-size:10px;">${label}</div>` : ''}
            <div class="marker-svg"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40" height="40">${svgBody}</svg></div>
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

function ar(coords, stroke, fill, fo = 0.1) {
    const l = L.polygon(coords, { color: stroke, fillColor: fill||stroke, fillOpacity: fo, weight: 1.5, opacity: 0.5, interactive: false }).addTo(map);
    gridLines.push(l); return l;
}

function circ(lat, lng, r, c, fo = 0.05) {
    const x = L.circle([lat,lng], { radius: r, color: c, fillColor: c, fillOpacity: fo, weight: 1.5, interactive: false }).addTo(map);
    gridLines.push(x); return x;
}

function zoneLabel(lat, lng, text, color = COLORS.WHT, fs = 12) {
    const icon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="color:${color};font-size:${fs}px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);white-space:nowrap;letter-spacing:1px;">${text}</div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([lat, lng], { icon, interactive: false }).addTo(map));
}

// Global animation management
function startAnimation(animations, callbackName) {
    if (window[callbackName]) cancelAnimationFrame(window[callbackName]);
    function animate() {
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
        window[callbackName] = requestAnimationFrame(animate);
    }
    animate();
}

// Clear function for all visualizations
function clearMap() {
    placedMarkers.forEach(m => map.removeLayer(m));
    placedMarkers = [];
    if (drawingPolyline) { map.removeLayer(drawingPolyline); drawingPolyline = null; }
    drawingPoints = [];
    gridLines.forEach(l => map.removeLayer(l));
    gridLines = [];
}

// Export for use in other files
window.TACTICS_UTILS = {
    COLORS,
    mk,
    mkAnim,
    ln,
    ar,
    circ,
    zoneLabel,
    startAnimation,
    clearMap
};