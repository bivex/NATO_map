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
// ===== KYIV STRATEGIC DEFENSE PLAN ============
// =========================================================

