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

