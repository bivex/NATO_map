// ===== DRONE PLATOON VISUALIZATION =====
// UAV platoon operations in Kupyansk sector

function buildDroneViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._droneAnimations = animations;

    // SVG helpers specific to drones
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

    // KUPYANSK AREA: 49.7064, 37.2664
    // Frontline ~5-10km east of Kupyansk

    // ---- FRONTLINE ----
    zoneLabel(49.68, 37.50, '───── ЛІНІЯ БОЮ ─────', COLORS.RED, 12);

    // Frontline zigzag
    ln([
        [49.82, 37.25], [49.78, 37.35], [49.75, 37.40],
        [49.72, 37.50], [49.68, 37.48], [49.65, 37.55],
        [49.60, 37.52], [49.55, 37.50], [49.52, 37.55]
    ], COLORS.RED, 3);

    // Enemy positions and targets
    zoneLabel(49.75, 37.70, 'РФ — ПОЗИЦІЇ', COLORS.RED, 10);
    mk(49.77, 37.60, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-1', 'Мотостр. рота', [70,70]);
    mk(49.70, 37.62, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ ТР-1', 'Танкова рота', [70,70]);
    mk(49.63, 37.60, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-2', 'Мотостр. рота', [70,70]);
    mk(49.72, 37.72, `<circle cx="25" cy="25" r="15" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/>`, 'РФ АРТ', '2С19 Гіацинт', [70,70]);
    mk(49.58, 37.62, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-3', 'Штурмова група', [70,70]);

    // Enemy EW and targets
    mk(49.74, 37.65, droneSVG('ew', COLORS.RED), 'РЕБ РФ-1', 'Сіліконт / Репелент');
    circ(49.74, 37.65, 5000, COLORS.RED, 0.03);
    mk(49.62, 37.68, droneSVG('ew', COLORS.RED), 'РЕБ РФ-2', 'Красуха-4');
    circ(49.62, 37.68, 8000, COLORS.RED, 0.03);

    mk(49.76, 37.55, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-1: Командний пункт', [50,50]);
    mk(49.68, 37.58, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-2: Склад БК', [50,50]);
    mk(49.64, 37.55, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-3: БТР колона', [50,50]);
    mk(49.71, 37.68, droneSVG('target', COLORS.RED), '', 'ЦІЛЬ-4: Арт. позиція', [50,50]);

    // ---- UKRAINIAN SIDE ----
    zoneLabel(49.60, 37.15, 'Р. ОСКІЛ', COLORS.CYN, 10);
    ln([
        [49.85, 37.18], [49.80, 37.20], [49.75, 37.22],
        [49.70, 37.20], [49.65, 37.18], [49.60, 37.15],
        [49.55, 37.18], [49.50, 37.20]
    ], COLORS.CYN, 3);

    mk(49.72, 37.30, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, '14 МЕХБР', '1-й ешелон', [70,70]);
    mk(49.65, 37.28, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'МЕХБАТ', '2-й ешелон', [70,70]);

    // UAV PLATOON BASE
    zoneLabel(49.72, 37.02, 'ПОЗИЦІЯ БпАК ВЗВОДУ', COLORS.PUR, 12);
    circ(49.71, 37.06, 300, COLORS.GRN, 0.15);
    mk(49.71, 37.06, droneSVG('operator', COLORS.GRN), 'КП ВЗВОДУ', 'Командир взводу\nРація + Starlink + Метар', [90,90]);
    mk(49.708, 37.055, droneSVG('operator', COLORS.YEL), 'ТЕХЗВЄНО', 'Зарядка 48в\nРемонт / Сборка\n10_FPV_готових', [80,80]);
    mk(49.715, 37.065, droneSVG('radio', COLORS.GRN), 'STARLINK', 'Starlink Mini\nТактичний інтернет', [60,60]);

    // TEAM 1: FPV STRIKE "ФЕНІКС"
    zoneLabel(49.745, 37.00, 'ВЗВОД FPV «ФЕНІКС»', COLORS.PNK, 10);
    mk(49.75, 37.02, droneSVG('operator', COLORS.PNK), 'FPV-1', 'Оператор 1\nRoyal_Racer_7_RP4');
    mk(49.745, 37.035, droneSVG('operator', COLORS.PNK), 'FPV-2', 'Оператор 2\nBumblebee_HD');
    mk(49.748, 37.05, droneSVG('operator', COLORS.PNK), 'FPV-3', 'Оператор 3\nQuad_7_RP4');
    mk(49.753, 37.065, droneSVG('operator', COLORS.PNK), 'FPV-4', 'Оператор 4\nAstra_8_RP4');
    mk(49.742, 37.005, droneSVG('operator', COLORS.PNK), 'FPV-5', 'Нічний FPV\nThermal_Caddx');
    mk(49.755, 37.08, droneSVG('operator', COLORS.PNK), 'FPV-6', 'Резерв / Заміна');

    circ(49.75, 37.04, 8000, COLORS.PNK, 0.04);
    circ(49.75, 37.04, 5000, COLORS.PNK, 0.02);
    zoneLabel(49.79, 37.03, 'Дальність FPV: 8км (макс), 5км (ефект.)', COLORS.PNK, 9);

    ln([[49.75, 37.02], [49.76, 37.30], [49.76, 37.55]], COLORS.PNK, 2, '4 4');
    ln([[49.745, 37.035], [49.70, 37.30], [49.68, 37.58]], COLORS.PNK, 2, '4 4');
    ln([[49.748, 37.05], [49.66, 37.30], [49.64, 37.55]], COLORS.PNK, 2, '4 4');

    mk(49.76, 37.55, droneSVG('explosion', COLORS.ORG), '', 'УДАР FPV-1\nРПГ-7Г «ФЕНІКС»', [50,50]);
    mk(49.68, 37.58, droneSVG('explosion', COLORS.ORG), '', 'УДАР FPV-2\nКумулятивний', [50,50]);
    mk(49.64, 37.55, droneSVG('explosion', COLORS.ORG), '', 'УДАР FPV-3\nРПГ-7ВЛ', [50,50]);

    // TEAM 2: RECON "ЯСТРІБ"
    zoneLabel(49.68, 36.98, 'РОЗВІДКА «ЯСТРІБ»', COLORS.CYN, 10);
    mk(49.68, 37.01, droneSVG('recon', COLORS.CYN), 'РОЗВ-1', 'Shark SC1\n35км дальність / 2год');
    mk(49.675, 37.03, droneSVG('recon', COLORS.CYN), 'РОЗВ-2', 'Лелека-3\n45км дальність / 2.5год');

    circ(49.68, 37.02, 12000, COLORS.CYN, 0.03);
    ln([[49.68, 37.01], [49.72, 37.20], [49.76, 37.40], [49.78, 37.55]], COLORS.CYN, 1.5, '8 4');
    ln([[49.675, 37.03], [49.64, 37.20], [49.60, 37.35], [49.56, 37.50]], COLORS.CYN, 1.5, '8 4');

    zoneLabel(49.72, 37.35, 'Зона розвідки Shark', COLORS.CYN, 9);
    zoneLabel(49.58, 37.35, 'Зона розвідки Лелека', COLORS.CYN, 9);

    mk(49.67, 37.00, droneSVG('radio', COLORS.CYN), 'ТАСКИ', 'Зв\'язок з артилерією\nКоригування вогню', [60,60]);
    mk(49.68, 37.10, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/>`, 'АРТ-1', 'M777 / CAESAR\nКориг. через БпАК', [80,80]);
    mk(49.66, 37.08, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/>`, 'АРТ-2', '2С3 Акація\nКориг. через БпАК', [80,80]);

    ln([[49.68, 37.10], [49.76, 37.55]], COLORS.ORG, 2, '6 3');
    ln([[49.66, 37.08], [49.71, 37.68]], COLORS.ORG, 2, '6 3');

    // TEAM 3: BOMBERS "БУРВІЙ"
    zoneLabel(49.77, 36.95, 'БОМБЕРИ «БУРВІЙ»', COLORS.YEL, 10);
    mk(49.77, 36.98, droneSVG('bomber', COLORS.YEL), 'БОМБ-1', 'Mavic_3_Thermal\nTM-62 / 2xРГД-5');
    mk(49.775, 37.00, droneSVG('bomber', COLORS.YEL), 'БОМБ-2', 'Custom_XL\n2x_ТМ-62_міни');
    mk(49.768, 37.015, droneSVG('bomber', COLORS.YEL), 'БОМБ-3', 'Mavic_3T_ніч\nVOG-17_x4');

    circ(49.77, 37.00, 4000, COLORS.YEL, 0.04);
    ln([[49.77, 36.98], [49.74, 37.30], [49.73, 37.42]], COLORS.YEL, 2, '3 3');
    ln([[49.775, 37.00], [49.70, 37.25], [49.68, 37.35]], COLORS.YEL, 2, '3 3');
    ln([[49.768, 37.015], [49.66, 37.20], [49.64, 37.30]], COLORS.YEL, 2, '3 3');

    mk(49.73, 37.42, droneSVG('explosion', COLORS.YEL), '', 'СКИД TM-62\nокоп/бліндаж', [45,45]);
    mk(49.68, 37.35, droneSVG('explosion', COLORS.YEL), '', 'СКИД 2xРГД\nпозиція_РФ', [45,45]);
    mk(49.64, 37.30, droneSVG('explosion', COLORS.YEL), '', 'СКИД VOG-17\nДОТ', [45,45]);

    zoneLabel(49.77, 37.03, 'Дальність бомберів: 3-4км', COLORS.YEL, 9);

    // TEAM 4: RELAY "МАРАПУЦЬ"
    zoneLabel(49.80, 37.15, 'РЕТРАНСЛЯТОР + ГЛИБОКИЙ УДАР', '#76ff03', 10);
    mk(49.80, 37.18, droneSVG('relay', '#76ff03'), 'РЕТРАНСЛ-1', 'Піднятий на 300м\nПодовжує FPV +10км');
    mk(49.78, 37.28, droneSVG('relay', '#76ff03'), 'РЕТРАНСЛ-2', 'Ланцюжок_2\nГлибокий_удар');

    ln([[49.75, 37.04], [49.80, 37.18], [49.78, 37.28]], '#76ff03', 2, '5 3');
    ln([[49.78, 37.28], [49.75, 37.45], [49.72, 37.72]], '#76ff03', 2.5, '6 4');

    mk(49.72, 37.72, droneSVG('target', '#76ff03'), '', 'ГЛИБОКИЙ УДАР\nчерез ретранслятор\nАРТ склад РФ', [50,50]);
    mk(49.72, 37.72, droneSVG('explosion', '#76ff03'), '', '', [40,40]);
    circ(49.80, 37.18, 3000, '#76ff03', 0.03);

    // TEAM 5: ANTI-DRONE "ОХОРОНЕЦЬ"
    zoneLabel(49.62, 37.05, 'АНТИДРОН «ОХОРОНЕЦЬ»', COLORS.ORG, 10);
    mk(49.62, 37.08, droneSVG('ew', COLORS.ORG), 'РЕБ-1', 'Буккель-AD\nГлушилка_2.4/5.8ГГц');
    circ(49.62, 37.08, 3000, COLORS.ORG, 0.05);
    mk(49.615, 37.10, droneSVG('ew', COLORS.ORG), 'РЕБ-2', 'Анти-FPV_щит\n433/868/915_МГц');
    circ(49.615, 37.10, 2500, COLORS.ORG, 0.04);
    mk(49.63, 37.06, droneSVG('operator', COLORS.ORG), 'ПЕРЕХОПЛ', 'Перехоплення_дронів\nОператор з сіткою');

    zoneLabel(49.58, 37.08, 'Зона РЕБ захисту', COLORS.ORG, 9);

    // KILL CHAIN VISUALIZATION
    zoneLabel(49.55, 37.55, 'ЛАНЦЮГ УРАЖЕННЯ (KILL CHAIN):', COLORS.WHT, 11);

    const steps = [
        { lat: 49.555, lng: 37.20, text: '① ВИЯВЛЕННЯ', desc: 'Розвідка Shark\nпатрулює передову', color: COLORS.CYN },
        { lat: 49.555, lng: 37.30, text: '② РОЗПІЗНАННЯ', desc: 'Координати цілі\nТип зброї, пріоритет', color: COLORS.YEL },
        { lat: 49.555, lng: 37.40, text: '③ ПЕРЕДАЧА', desc: 'Starlink → КП\n→ Оператор FPV', color: COLORS.GRN },
        { lat: 49.555, lng: 37.50, text: '④ УДАР', desc: 'FPV/Бомбер\nна ціль', color: COLORS.PNK },
        { lat: 49.555, lng: 37.60, text: '⑤ ОЦІНКА', desc: 'BDA — Розвідка\nоцінює результат', color: COLORS.ORG },
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

    ln([[49.56, 37.24], [49.56, 37.26]], COLORS.WHT, 1.5);
    ln([[49.56, 37.34], [49.56, 37.36]], COLORS.WHT, 1.5);
    ln([[49.56, 37.44], [49.56, 37.46]], COLORS.WHT, 1.5);
    ln([[49.56, 37.54], [49.56, 37.56]], COLORS.WHT, 1.5);

    // NIGHT OPERATIONS
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

    // SORTIE STATISTICS BOX
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

    // ANIMATED DRONES
    const fpv1 = mkAnim(49.75, 37.02, droneSVG('fpv', COLORS.PNK), 'FPV-1→', '', [40,40]);
    animations.push({
        marker: fpv1,
        path: [[49.75, 37.02], [49.755, 37.15], [49.758, 37.30], [49.76, 37.45], [49.76, 37.55]],
        step: 0,
        speed: 0.003,
    });

    const fpv2 = mkAnim(49.745, 37.035, droneSVG('fpv', COLORS.PNK), 'FPV-2→', '', [40,40]);
    animations.push({
        marker: fpv2,
        path: [[49.745, 37.035], [49.73, 37.15], [49.71, 37.35], [49.68, 37.50], [49.68, 37.58]],
        step: 0,
        speed: 0.003,
    });

    const recon1 = mkAnim(49.72, 37.30, droneSVG('recon', COLORS.CYN), 'Shark', '', [40,40]);
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

    const bomb1 = mkAnim(49.77, 36.98, droneSVG('bomber', COLORS.YEL), 'БОМБ→', '', [40,40]);
    animations.push({
        marker: bomb1,
        path: [[49.77, 36.98], [49.76, 37.10], [49.75, 37.25], [49.74, 37.35], [49.73, 37.42]],
        step: 0,
        speed: 0.002,
    });

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

    // Start animation
    startAnimation(animations, '_droneAnimFrame');

    // Fly to Kupyansk
    map.flyTo([49.68, 37.30], 12, { duration: 1.5 });
}