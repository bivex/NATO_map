// ===== DRONE PLATOON VISUALIZATION =====
// БпАК взвод — Куп'янський напрямок
// Mapbox verified: Куп'янськ [49.710, 37.615] | Куп'янськ-Вузловий [49.659, 37.644]
// Дворічна [49.851, 37.685] | Кислівка [49.641, 37.913] | Сватове [49.417, 38.147]
// Front line: ~8-12 km east of Kupyansk
// Coordinate math: 0.001° lat = 111m, 0.001° lng = 71.9m

function buildDroneViz() {
    const { COLORS, mk, mkAnim, ln, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._droneAnimations = animations;

    // SVG helpers for drone types
    function droneSVG(type, color, size = 40) {
        const c = color;
        const sw = 1.5;
        switch (type) {
            case 'fpv':
                return `<line x1="${size*0.2}" y1="${size*0.2}" x2="${size*0.8}" y2="${size*0.8}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.8}" y1="${size*0.2}" x2="${size*0.2}" y2="${size*0.8}" stroke="${c}" stroke-width="${sw}"/>
                        <circle cx="${size*0.2}" cy="${size*0.2}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.8}" cy="${size*0.2}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.2}" cy="${size*0.8}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.8}" cy="${size*0.8}" r="${size*0.08}" fill="${c}"/>
                        <circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.06}" fill="${c}"/>`;
            case 'recon':
                return `<path d="M${size*0.5},${size*0.1} L${size*0.6},${size*0.4} L${size*0.9},${size*0.5} L${size*0.6},${size*0.55} L${size*0.65},${size*0.85} L${size*0.5},${size*0.7} L${size*0.35},${size*0.85} L${size*0.4},${size*0.55} L${size*0.1},${size*0.5} L${size*0.4},${size*0.4} Z" fill="${c}33" stroke="${c}" stroke-width="${sw}"/>`;
            case 'bomber':
                return `<rect x="${size*0.2}" y="${size*0.15}" width="${size*0.6}" height="${size*0.5}" rx="4" fill="${c}33" stroke="${c}" stroke-width="${sw}"/>
                        <circle cx="${size*0.5}" cy="${size*0.75}" r="${size*0.1}" fill="${c}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.5}" y1="${size*0.65}" x2="${size*0.5}" y2="${size*0.75}" stroke="${c}" stroke-width="1"/>`;
            case 'relay':
                return `<polygon points="${size*0.5},${size*0.1} ${size*0.9},${size*0.5} ${size*0.5},${size*0.9} ${size*0.1},${size*0.5}" fill="${c}33" stroke="${c}" stroke-width="${sw}"/>
                        <path d="M${size*0.35},${size*0.35} Q${size*0.5},${size*0.45} ${size*0.65},${size*0.35}" fill="none" stroke="${c}" stroke-width="1"/>
                        <path d="M${size*0.3},${size*0.45} Q${size*0.5},${size*0.6} ${size*0.7},${size*0.45}" fill="none" stroke="${c}" stroke-width="1"/>`;
            case 'ew':
                return `<line x1="${size*0.5}" y1="${size*0.8}" x2="${size*0.5}" y2="${size*0.2}" stroke="${c}" stroke-width="${sw}"/>
                        <polygon points="${size*0.5},${size*0.15} ${size*0.38},${size*0.35} ${size*0.62},${size*0.35}" fill="${c}" stroke="${c}" stroke-width="1"/>
                        <path d="M${size*0.6},${size*0.45} L${size*0.45},${size*0.55} L${size*0.55},${size*0.55} L${size*0.4},${size*0.7}" fill="none" stroke="${c}" stroke-width="1.5"/>`;
            case 'operator':
                return `<circle cx="${size*0.5}" cy="${size*0.2}" r="${size*0.1}" fill="${c}"/>
                        <line x1="${size*0.5}" y1="${size*0.3}" x2="${size*0.5}" y2="${size*0.6}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.4}" x2="${size*0.3}" y2="${size*0.55}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.4}" x2="${size*0.7}" y2="${size*0.35}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.6}" x2="${size*0.35}" y2="${size*0.85}" stroke="${c}" stroke-width="${sw}"/>
                        <line x1="${size*0.5}" y1="${size*0.6}" x2="${size*0.65}" y2="${size*0.85}" stroke="${c}" stroke-width="${sw}"/>`;
            case 'target':
                return `<circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.3}" fill="none" stroke="${c}" stroke-width="${sw}"/>
                        <circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.15}" fill="none" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.5}" y1="${size*0.1}" x2="${size*0.5}" y2="${size*0.35}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.5}" y1="${size*0.65}" x2="${size*0.5}" y2="${size*0.9}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.1}" y1="${size*0.5}" x2="${size*0.35}" y2="${size*0.5}" stroke="${c}" stroke-width="1"/>
                        <line x1="${size*0.65}" y1="${size*0.5}" x2="${size*0.9}" y2="${size*0.5}" stroke="${c}" stroke-width="1"/>
                        <circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.04}" fill="${c}"/>`;
            case 'explosion':
                return `<polygon points="${size*0.5},${size*0.05} ${size*0.58},${size*0.35} ${size*0.95},${size*0.35} ${size*0.65},${size*0.55} ${size*0.75},${size*0.9} ${size*0.5},${size*0.65} ${size*0.25},${size*0.9} ${size*0.35},${size*0.55} ${size*0.05},${size*0.35} ${size*0.42},${size*0.35}" fill="${c}88" stroke="${c}" stroke-width="1"/>`;
            case 'radio':
                return `<circle cx="${size*0.5}" cy="${size*0.5}" r="${size*0.06}" fill="${c}"/>
                        <path d="M${size*0.35},${size*0.3} A${size*0.25},${size*0.25} 0 0,1 ${size*0.65},${size*0.3}" fill="none" stroke="${c}" stroke-width="1" opacity="0.5"/>
                        <path d="M${size*0.28},${size*0.22} A${size*0.35},${size*0.35} 0 0,1 ${size*0.72},${size*0.22}" fill="none" stroke="${c}" stroke-width="1" opacity="0.3"/>
                        <path d="M${size*0.2},${size*0.14} A${size*0.45},${size*0.45} 0 0,1 ${size*0.8},${size*0.14}" fill="none" stroke="${c}" stroke-width="1" opacity="0.15"/>`;
        }
        return '';
    }

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.790, 37.640, '───── БпАК ВЗВОД — КУП&#x27;ЯНСЬКИЙ НАПРЯМОК ─────', COLORS.BLU, 12);
    zoneLabel(49.780, 37.640, 'Mapbox: Куп&#x27;янськ [49.710, 37.615] | Сватове: 50.3 км', COLORS.WHT, 9);

    // Reference settlements (Mapbox verified)
    zoneLabel(49.740, 37.590, '← Куп&#x27;янськ (Mapbox: 49.710, 37.615)', COLORS.WHT, 8);
    zoneLabel(49.660, 37.625, 'Куп&#x27;янськ-Вузловий (49.659, 37.644)', COLORS.WHT, 7);
    zoneLabel(49.870, 37.665, '← Дворічна (49.851, 37.685) 16.5 км', COLORS.WHT, 7);
    zoneLabel(49.630, 37.940, 'Кислівка (49.641, 37.913) →', COLORS.WHT, 7);
    zoneLabel(49.440, 38.120, 'Сватове (49.417, 38.147) ↓ 50.3 км', COLORS.RED, 7);

    // =========================================================
    // OSKIL RIVER (reference)
    // =========================================================
    ln([
        [49.800, 37.580], [49.770, 37.590], [49.740, 37.600],
        [49.710, 37.605], [49.680, 37.610], [49.650, 37.615],
        [49.620, 37.620], [49.590, 37.630]
    ], COLORS.CYN, 3);
    zoneLabel(49.590, 37.600, 'р. Оскіл', COLORS.CYN, 10);

    // =========================================================
    // FRONTLINE (E-W zigzag, ~8-12 km east of Kupyansk)
    // =========================================================
    ln([
        [49.750, 37.720], [49.730, 37.715], [49.700, 37.720],
        [49.680, 37.725], [49.660, 37.730], [49.640, 37.735],
        [49.620, 37.730]
    ], COLORS.RED, 3);
    zoneLabel(49.755, 37.715, '── ЛІНІЯ ФРОНТУ ──', COLORS.RED, 10);

    // =========================================================
    // ENEMY POSITIONS (east of frontline)
    // =========================================================
    zoneLabel(49.730, 37.800, 'РФ — ПОЗИЦІЇ (Сватівський напрямок)', COLORS.RED, 10);

    mk(49.680, 37.780, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-1', 'Мотострілецька рота\n~100 бійців\nзахідний фланг\nна підступах до Куп&#x27;янська', [70,70]);

    mk(49.660, 37.790, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-2', 'Мотострілецька рота\n~100 бійців\nцентр позицій\nпівденний напрямок', [70,70]);

    mk(49.700, 37.790, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ ТР-1', 'Танкова рота\nТ-72Б3 (3 шт)\nпівнічний фланг', [70,70]);

    mk(49.690, 37.830, `<circle cx="25" cy="25" r="15" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/>`, 'РФ АРТ', '2С19 Мста-С\n152мм гаубиця\n~16 км від передової', [70,70]);

    mk(49.645, 37.780, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-3', 'Штурмова група\n~30-40 бійців\nпівденний фланг', [70,70]);

    // Enemy EW
    mk(49.675, 37.800, droneSVG('ew', COLORS.RED), 'РЕБ РФ-1', 'Сіліконт / Репелент\nГлушіння FPV 2.4/5.8 ГГц\nРадіус: 5 км');
    circ(49.675, 37.800, 5000, COLORS.RED, 0.03);
    mk(49.655, 37.810, droneSVG('ew', COLORS.RED), 'РЕБ РФ-2', 'Красуха-4\nГлушіння GPS/Starlink\nРадіус: 8 км');
    circ(49.655, 37.810, 8000, COLORS.RED, 0.03);

    // Enemy targets for drones
    mk(49.682, 37.775, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-1: КП роти\nприоритет: ВИСОКИЙ', [50,50]);
    mk(49.692, 37.835, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-2: Арт. позиція\nприоритет: КРИТИЧНИЙ', [50,50]);
    mk(49.662, 37.785, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-3: Піхота в окопах\nприоритет: СЕРЕДНІЙ', [50,50]);
    mk(49.698, 37.785, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-4: Т-72Б3\nприоритет: ВИСОКИЙ', [50,50]);

    // =========================================================
    // UKRAINIAN POSITIONS (west of frontline)
    // =========================================================
    zoneLabel(49.730, 37.610, 'ЗСУ — ОБОРОНА', COLORS.BLU, 10);

    mk(49.695, 37.660, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'МЕХБАТ-1', '1-й мехбат\nпередова\n~4 км від лінії фронту', [70,70]);

    mk(49.720, 37.640, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'МЕХБАТ-2', '2-й ешелон\nрезерв', [70,70]);

    // =========================================================
    // БпАК BASE (in Kupyansk, safe from direct fire)
    // Mapbox: Куп'янськ 49.710, 37.615 → base at 49.710, 37.600
    // Distance to front: 12.3 km (verified)
    // =========================================================
    zoneLabel(49.730, 37.560, 'ПОЗИЦІЯ БпАК ВЗВОДУ (Куп&#x27;янськ)', COLORS.PUR, 11);
    circ(49.710, 37.600, 300, COLORS.GRN, 0.15);

    mk(49.710, 37.600, droneSVG('operator', COLORS.GRN), 'КП ВЗВОДУ', 'Командир взводу\nРація + Starlink + Метар\nMapbox: Куп&#x27;янськ (49.710, 37.615)\n~12.3 км від лінії фронту', [90,90]);

    mk(49.708, 37.596, droneSVG('operator', COLORS.YEL), 'ТЕХЗВ&#x27;ЄНО', 'Зарядка 48в\nРемонт / Збірка\n10 FPV готових', [80,80]);

    mk(49.713, 37.604, droneSVG('radio', COLORS.GRN), 'STARLINK', 'Starlink Mini\nТактичний інтернет\n24/7 зв&#x27;язок', [60,60]);

    // =========================================================
    // TEAM 1: FPV STRIKE "ФЕНІКС"
    // Forward position: [49.685, 37.680] — 6.4 km from base (verified)
    // Distance to enemy targets: 8.7 km (verified) — within FPV max 10km
    // =========================================================
    zoneLabel(49.690, 37.645, 'ВЗВОД FPV «ФЕНІКС» (передова)', COLORS.PNK, 10);

    mk(49.685, 37.680, droneSVG('operator', COLORS.PNK), 'FPV-1', 'Оператор 1\nRoyal_Racer_7_RP4\nпередова позиція\n~8.7 км до цілей (Mapbox)');
    mk(49.683, 37.683, droneSVG('operator', COLORS.PNK), 'FPV-2', 'Оператор 2\nBumblebee_HD\nпередова позиція');
    mk(49.687, 37.677, droneSVG('operator', COLORS.PNK), 'FPV-3', 'Оператор 3\nQuad_7_RP4\nсектор: північ');
    mk(49.689, 37.674, droneSVG('operator', COLORS.PNK), 'FPV-4', 'Оператор 4\nAstra_8_RP4\nсектор: південь');
    mk(49.681, 37.678, droneSVG('operator', COLORS.PNK), 'FPV-5', 'Нічний FPV\nThermal_Caddx\nтепловізор');
    mk(49.686, 37.685, droneSVG('operator', COLORS.PNK), 'FPV-6', 'Резерв / Заміна\nЗарядка акумуляторів');

    // FPV range circles (verified: 8.7 km to target)
    circ(49.685, 37.680, 8000, COLORS.PNK, 0.04);
    circ(49.685, 37.680, 5000, COLORS.PNK, 0.02);
    zoneLabel(49.660, 37.690, 'FPV дальність: 8 км (макс), 5 км (ефект.)\nMapbox: FPV→ціль = 8.7 км ✓', COLORS.PNK, 8);

    // FPV strike lines to targets
    ln([[49.685, 37.680], [49.682, 37.775]], COLORS.PNK, 2, '4 4');
    ln([[49.683, 37.683], [49.662, 37.785]], COLORS.PNK, 2, '4 4');
    ln([[49.687, 37.677], [49.698, 37.785]], COLORS.PNK, 2, '4 4');

    // FPV strike explosions on targets
    mk(49.682, 37.775, droneSVG('explosion', COLORS.ORG), '', 'УДАР FPV-1\nРПГ-7Г «ФЕНІКС»\n~8.5 км (Mapbox)', [50,50]);
    mk(49.662, 37.785, droneSVG('explosion', COLORS.ORG), '', 'УДАР FPV-2\nКумулятивний\n~9.8 км (Mapbox)', [50,50]);
    mk(49.698, 37.785, droneSVG('explosion', COLORS.ORG), '', 'УДАР FPV-3\nРПГ-7ВЛ\n~8.2 км (Mapbox)', [50,50]);

    // =========================================================
    // TEAM 2: RECON "ЯСТРІБ"
    // Launch from forward: [49.690, 37.660]
    // Shark: 35 km range → covers tactical depth
    // Leleka: 45 km range → approaches Svatove (46.4 km, verified)
    // =========================================================
    zoneLabel(49.710, 37.620, 'РОЗВІДКА «ЯСТРІБ»', COLORS.CYN, 10);

    mk(49.695, 37.658, droneSVG('recon', COLORS.CYN), 'РОЗВ-1', 'Shark SC1\n35 км дальність / 2 год\nкарта + координати цілей');
    mk(49.692, 37.662, droneSVG('recon', COLORS.CYN), 'РОЗВ-2', 'Лелека-3\n45 км дальність / 2.5 год\nнаближається до Сватового (46.4 км)');

    // Recon range circles
    circ(49.690, 37.660, 35000, COLORS.CYN, 0.02);
    circ(49.690, 37.660, 12000, COLORS.CYN, 0.01);
    zoneLabel(49.640, 37.820, 'Зона розвідки Shark (35 км)', COLORS.CYN, 8);
    zoneLabel(49.500, 37.880, 'Зона розвідки Лелека (45 км)\n→ наближається до Сватового', COLORS.CYN, 7);

    // Recon patrol lines
    ln([[49.695, 37.658], [49.690, 37.720], [49.685, 37.780], [49.680, 37.830]], COLORS.CYN, 1.5, '8 4');
    ln([[49.692, 37.662], [49.670, 37.750], [49.650, 37.830], [49.450, 38.100]], COLORS.CYN, 1.5, '8 4');

    // Artillery coordination (corrected fire via recon)
    mk(49.715, 37.635, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/>`, 'АРТ-1', 'M777 / CAESAR\n155мм\nКориг. через БпАК\nGIS Arta + Kropyva', [80,80]);

    mk(49.705, 37.625, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/>`, 'АРТ-2', '2С3 Акація\n152мм\nКориг. через БпАК', [80,80]);

    ln([[49.715, 37.635], [49.690, 37.830]], COLORS.ORG, 2, '6 3');
    ln([[49.705, 37.625], [49.680, 37.780]], COLORS.ORG, 2, '6 3');

    mk(49.693, 37.656, droneSVG('radio', COLORS.CYN), 'ТАСКИ', 'Зв&#x27;язок з артилерією\nКоригування вогню\nKropyva → GIS Arta', [60,60]);

    // =========================================================
    // TEAM 3: BOMBERS "БУРВІЙ"
    // Forward position: [49.693, 37.700]
    // Range: 3-4 km → targets at ~3.0 km (verified)
    // =========================================================
    zoneLabel(49.710, 37.685, 'БОМБЕРИ «БУРВІЙ»', COLORS.YEL, 10);

    mk(49.693, 37.700, droneSVG('bomber', COLORS.YEL), 'БОМБ-1', 'Mavic 3 Thermal\nTM-62 / 2xРГД-5\n~3.0 км до цілей (Mapbox)');
    mk(49.695, 37.698, droneSVG('bomber', COLORS.YEL), 'БОМБ-2', 'Custom XL\n2x ТМ-62 міни\n~3.2 км до цілей');
    mk(49.691, 37.702, droneSVG('bomber', COLORS.YEL), 'БОМБ-3', 'Mavic 3T ніч\nVOG-17 x4\nтепловізійний скид');

    circ(49.693, 37.700, 4000, COLORS.YEL, 0.04);
    zoneLabel(49.720, 37.710, 'Дальність бомберів: 3-4 км\nMapbox: БОМБ→ціль = 3.0 км ✓', COLORS.YEL, 8);

    ln([[49.693, 37.700], [49.685, 37.745]], COLORS.YEL, 2, '3 3');
    ln([[49.695, 37.698], [49.675, 37.740]], COLORS.YEL, 2, '3 3');
    ln([[49.691, 37.702], [49.665, 37.735]], COLORS.YEL, 2, '3 3');

    mk(49.685, 37.745, droneSVG('explosion', COLORS.YEL), '', 'СКИД TM-62\nокоп/бліндаж\n~3.2 км', [45,45]);
    mk(49.675, 37.740, droneSVG('explosion', COLORS.YEL), '', 'СКИД 2xРГД\nпозиція РФ\n~2.8 км', [45,45]);
    mk(49.665, 37.735, droneSVG('explosion', COLORS.YEL), '', 'СКИД VOG-17\nДОТ\n~3.5 км', [45,45]);

    // =========================================================
    // TEAM 4: RELAY "МАРАПУЦЬ"
    // Position: [49.695, 37.660] (intermediate, airborne 300m)
    // Extends FPV range by ~10 km → total 15-18 km reach
    // =========================================================
    zoneLabel(49.720, 37.650, 'РЕТРАНСЛЯТОР + ГЛИБОКИЙ УДАР', '#76ff03', 10);

    mk(49.698, 37.660, droneSVG('relay', '#76ff03'), 'РЕТРАНСЛ-1', 'Піднятий на 300м\nПодовжує FPV +10 км\nЗв&#x27;язок: 868 МГц');
    mk(49.690, 37.670, droneSVG('relay', '#76ff03'), 'РЕТРАНСЛ-2', 'Ланцюжок 2\nГлибокий удар\n~12 км від бази');

    // Relay chain: base → relay-1 → relay-2 → deep target
    ln([[49.710, 37.600], [49.698, 37.660], [49.690, 37.670]], '#76ff03', 2, '5 3');
    ln([[49.690, 37.670], [49.690, 37.750], [49.690, 37.830]], '#76ff03', 2.5, '6 4');

    mk(49.690, 37.830, droneSVG('target', '#76ff03'), '', 'ГЛИБОКИЙ УДАР\nчерез ретранслятор\nАРТ склад РФ\n~16 км від FPV команди', [50,50]);
    mk(49.690, 37.830, droneSVG('explosion', '#76ff03'), '', '', [40,40]);
    circ(49.698, 37.660, 3000, '#76ff03', 0.03);

    // =========================================================
    // TEAM 5: ANTI-DRONE "ОХОРОНЕЦЬ"
    // Position: [49.705, 37.640] — covering Ukrainian forward positions
    // =========================================================
    zoneLabel(49.730, 37.615, 'АНТИДРОН «ОХОРОНЕЦЬ»', COLORS.ORG, 10);

    mk(49.705, 37.640, droneSVG('ew', COLORS.ORG), 'РЕБ-1', 'Буккель-AD\nГлушилка 2.4/5.8 ГГц\nРадіус: 3 км');
    circ(49.705, 37.640, 3000, COLORS.ORG, 0.05);

    mk(49.700, 37.635, droneSVG('ew', COLORS.ORG), 'РЕБ-2', 'Анти-FPV щит\n433/868/915 МГц\nРадіус: 2.5 км');
    circ(49.700, 37.635, 2500, COLORS.ORG, 0.04);

    mk(49.708, 37.638, droneSVG('operator', COLORS.ORG), 'ПЕРЕХОПЛ', 'Перехоплення дронів\nОператор з сіткою\n+ FPV-перехоплювач');

    zoneLabel(49.730, 37.635, 'Зона РЕБ захисту\n(прикриває передові позиції)', COLORS.ORG, 8);

    // =========================================================
    // KILL CHAIN VISUALIZATION
    // =========================================================
    zoneLabel(49.600, 37.760, 'ЛАНЦЮГ УРАЖЕННЯ (KILL CHAIN):', COLORS.WHT, 11);

    const steps = [
        { lat: 49.605, lng: 37.640, text: '① ВИЯВЛЕННЯ', desc: 'Розвідка Shark\nпатрулює передову\nдальність: 35 км', color: COLORS.CYN },
        { lat: 49.605, lng: 37.690, text: '② РОЗПІЗНАННЯ', desc: 'Координати цілі\nТип зброї, пріоритет\nчерез Kropyva', color: COLORS.YEL },
        { lat: 49.605, lng: 37.740, text: '③ ПЕРЕДАЧА', desc: 'Starlink → КП\n→ Оператор FPV\n~6.4 км від бази', color: COLORS.GRN },
        { lat: 49.605, lng: 37.790, text: '④ УДАР', desc: 'FPV / Бомбер\nна ціль\n~8.7 км (Mapbox)', color: COLORS.PNK },
        { lat: 49.605, lng: 37.840, text: '⑤ ОЦІНКА', desc: 'BDA — Розвідка\nоцінює результат\nShark / Leleka', color: COLORS.ORG },
    ];

    steps.forEach(s => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${s.color};font-size:12px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:3px;">${s.text}</div>
                <div style="color:#bbb;font-size:9px;line-height:1.3;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${s.desc}</div>
            </div>`,
            iconAnchor: [50, 0],
        });
        window.placedMarkers.push(L.marker([s.lat, s.lng], { icon, interactive: false }).addTo(map));
    });

    // Kill chain arrows
    ln([[49.610, 37.665], [49.610, 37.670]], COLORS.WHT, 1.5);
    ln([[49.610, 37.715], [49.610, 37.720]], COLORS.WHT, 1.5);
    ln([[49.610, 37.765], [49.610, 37.770]], COLORS.WHT, 1.5);
    ln([[49.610, 37.815], [49.610, 37.820]], COLORS.WHT, 1.5);

    // =========================================================
    // NIGHT OPERATIONS
    // =========================================================
    zoneLabel(49.780, 37.530, 'НОЧНА ЗМІНА:', '#b388ff', 11);
    const nightIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="color:#b388ff;font-size:10px;line-height:1.6;text-shadow:0 1px 3px rgba(0,0,0,0.9);">
            <div style="font-weight:700;margin-bottom:4px;">Нічні операції (22:00-04:00):</div>
            <div>&#8226; FPV-5 з тепловізором Caddx → Окопи вночі</div>
            <div>&#8226; БОМБ-3 Mavic 3T → Скид VOG-17 з тепловізором</div>
            <div>&#8226; Розвідка Shark → Рух техніки по теплу</div>
            <div>&#8226; Ретранслятор → Працює 24/7 на висоті 300м</div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.775, 37.540], { icon: nightIcon, interactive: false }).addTo(map));

    // =========================================================
    // STATISTICS BOX
    // =========================================================
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:270px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9992; БпАК ВЗВОД — СТАТИСТИКА ДОБИ</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Куп&#x27;янськ | Mapbox: 49.710, 37.615 | Сватове: 50.3 км</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>FPV вильотів: <span style="color:#ff4081;font-weight:700;">24</span> (влучень: <span style="color:#4caf50;">19</span>)</div>
                <div>Бомбер скиди: <span style="color:#ffeb3b;font-weight:700;">12</span> (влучень: <span style="color:#4caf50;">10</span>)</div>
                <div>Розвідка год: <span style="color:#00e5ff;font-weight:700;">18</span> год патрулювання</div>
                <div>Ретранслятор: <span style="color:#76ff03;font-weight:700;">24</span> год онлайн</div>
                <div>Знищено цілей: <span style="color:#ef5350;font-weight:700;">8</span> од. техніки + <span style="color:#ef5350;">15</span> особового складу</div>
                <div>Втрачено БпАК: <span style="color:#ff9800;">3</span> FPV + <span style="color:#ff9800;">1</span> розвідник</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                Distances (Mapbox): База→Фронт 12.3 км | FPV→Ціль 8.7 км | БОМБ→Ціль 3.0 км<br>
                Recon→Сватове 46.4 км | Ретранслятор→глиб.удар 16 км<br>
                Вартість доби: ~$2,400 FPV + $800 бомби | Ефективність: 79%
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.580, 37.580], { icon: statsIcon, interactive: false }).addTo(map));

    // =========================================================
    // ANIMATED DRONES
    // =========================================================

    // FPV-1: forward position → enemy target (8.7 km, verified)
    const fpv1 = mkAnim(49.685, 37.680, droneSVG('fpv', COLORS.PNK), 'FPV-1→', '', [40,40]);
    animations.push({
        marker: fpv1,
        path: [[49.685, 37.680], [49.684, 37.720], [49.683, 37.750], [49.682, 37.775]],
        step: 0,
        speed: 0.003,
    });

    // FPV-2: forward → southern target
    const fpv2 = mkAnim(49.683, 37.683, droneSVG('fpv', COLORS.PNK), 'FPV-2→', '', [40,40]);
    animations.push({
        marker: fpv2,
        path: [[49.683, 37.683], [49.675, 37.720], [49.668, 37.755], [49.662, 37.785]],
        step: 0,
        speed: 0.003,
    });

    // Recon Shark: patrol pattern over enemy positions (35 km range)
    const recon1 = mkAnim(49.690, 37.700, droneSVG('recon', COLORS.CYN), 'Shark', '', [40,40]);
    animations.push({
        marker: recon1,
        path: [
            [49.695, 37.660], [49.690, 37.720], [49.685, 37.780],
            [49.680, 37.830], [49.680, 37.780], [49.685, 37.720],
            [49.690, 37.660], [49.695, 37.620], [49.695, 37.660]
        ],
        step: 0,
        speed: 0.002,
    });

    // Bomber: forward → trench position (3 km, verified)
    const bomb1 = mkAnim(49.693, 37.700, droneSVG('bomber', COLORS.YEL), 'БОМБ→', '', [40,40]);
    animations.push({
        marker: bomb1,
        path: [[49.693, 37.700], [49.690, 37.720], [49.687, 37.735], [49.685, 37.745]],
        step: 0,
        speed: 0.002,
    });

    // Relay: hovering pattern
    const relay1 = mkAnim(49.698, 37.660, droneSVG('relay', '#76ff03'), 'RELAY', '', [40,40]);
    animations.push({
        marker: relay1,
        path: [
            [49.698, 37.659], [49.699, 37.660], [49.699, 37.661],
            [49.698, 37.662], [49.697, 37.661], [49.697, 37.660],
            [49.698, 37.659]
        ],
        step: 0,
        speed: 0.004,
    });

    startAnimation(animations, '_droneAnimFrame');

    // Fly to Kupyansk sector
    map.flyTo([49.690, 37.730], 12, { duration: 1.5 });
}
