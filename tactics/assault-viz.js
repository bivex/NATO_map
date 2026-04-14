// ===== ДШВ HELICOPTER ASSAULT RAID VISUALIZATION =====
// 95 ОДШБр — Вертолітний рейд — Куп'янський напрямок
// Mapbox verified: Куп'янськ [49.710, 37.615] | Петропавлівка [49.717, 37.720]
// Кислівка [49.641, 37.913] | Табаївка [49.596, 37.876] | Берестове [49.540, 37.893]
// Staging → LZ: 14.4 km | LZ → Objective: 2.9 km | Insertion depth: 3.6 km
// Coordinate math: 0.001° lat = 111m, 0.001° lng = 71.9m

function buildAssaultViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._assaultAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.770, 37.680, '───── 95 ОДШБр — ВЕРТОЛІТНИЙ РЕЙД ─────', COLORS.BLU, 12);
    zoneLabel(49.760, 37.680, 'КУП&#x27;ЯНСЬКИЙ НАПРЯМОК | Mapbox verified\nМісія: наліт на склад БК РФ (45-60 хв)', COLORS.WHT, 9);

    // Reference settlements (Mapbox verified)
    zoneLabel(49.740, 37.570, '← Куп&#x27;янськ (Mapbox: 49.710, 37.615) 3.9 км', COLORS.WHT, 8);
    zoneLabel(49.725, 37.720, 'Петропавлівка (49.717, 37.720) ↓', COLORS.WHT, 7);
    zoneLabel(49.630, 37.930, 'Кислівка (49.641, 37.913) → 12.3 км від LZ', COLORS.RED, 7);
    zoneLabel(49.585, 37.890, 'Табаївка (49.596, 37.876)', COLORS.WHT, 7);
    zoneLabel(49.530, 37.900, 'Берестове (49.540, 37.893)', COLORS.WHT, 7);

    // =========================================================
    // OSKIL RIVER (terrain masking for helicopter approach)
    // =========================================================
    ln([
        [49.780, 37.580], [49.750, 37.595], [49.720, 37.610],
        [49.700, 37.615], [49.680, 37.620], [49.650, 37.625],
        [49.620, 37.635], [49.590, 37.645]
    ], COLORS.CYN, 3);
    zoneLabel(49.595, 37.615, 'р. Оскіл (маскування маршруту)', COLORS.CYN, 9);

    // =========================================================
    // FRONTLINE (E-W zigzag, ~37.720°E)
    // =========================================================
    ln([
        [49.750, 37.720], [49.730, 37.718], [49.710, 37.722],
        [49.690, 37.725], [49.670, 37.730], [49.650, 37.728]
    ], COLORS.ORG, 3, '8 4');
    zoneLabel(49.755, 37.718, '── ЛІНІЯ ФРОНТУ ──', COLORS.ORG, 10);

    // =========================================================
    // ENEMY POSITIONS (east of frontline)
    // =========================================================
    zoneLabel(49.730, 37.790, 'РФ — ПОЗИЦІЇ (Сватівський напрямок)', COLORS.RED, 10);

    // Enemy front line platoon
    mk(49.710, 37.740, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ МСР-1', 'Мотострілецька рота\n~100 бійців\nзахідний фланг\nна лінії фронту', [70,70]);

    // Enemy ZU-23-2 (anti-aircraft — THREAT to helicopters)
    mk(49.705, 37.770, `<circle cx="25" cy="30" r="12" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="30" x2="35" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="18" x2="25" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="15" r="5" fill="none" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="20" y1="15" x2="30" y2="15" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ ЗУ-23-2', 'ЗУ-23-2 зенітна\n23мм × 2 стволи\nрадіус: 2.5 км\n** ЗАГРОЗА ВЕРТОЛЬОТАМ **', [75,75]);
    circ(49.705, 37.770, 2500, COLORS.RED, 0.04);

    // Enemy EW station
    mk(49.700, 37.780, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.RED}"/><line x1="20" y1="20" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="2"/><line x1="30" y1="20" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="2"/>`, 'РФ РЕБ', 'Сіліконт / Репелент\nГлушіння FPV 2.4/5.8 ГГц\nРадіус: 5 км', [70,70]);
    circ(49.700, 37.780, 5000, COLORS.RED, 0.03);

    // ===== PRIMARY OBJECTIVE: Russian supply depot / artillery =====
    mk(49.695, 37.790, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="25" r="10" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">152</text>`, 'ЦІЛЬ-1: АРТ', '2С19 Мста-С\n152мм гаубиця\n** ОСНОВНА ЦІЛЬ **\n~16 км від передової\nLZ→ціль: 2.9 км (Mapbox)', [80,80]);

    // ===== SECONDARY OBJECTIVE: Command post =====
    mk(49.685, 37.800, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.RED}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КП</text>`, 'ЦІЛЬ-2: КП', 'Командний пункт роти\n~5 офіцерів + радіо\n** ДРУГАСНА ЦІЛЬ **\nLZ→КП: 3.8 км (Mapbox)', [80,80]);

    // Enemy tank reserve
    mk(49.690, 37.810, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Т-72</text>`, 'РФ ТАНК', 'Т-72Б3 резерв\n~4 км від LZ\nможна не атакувати\n(уникаємо контакту)', [70,70]);

    // Enemy patrol route
    ln([[49.710, 37.740], [49.700, 37.760], [49.695, 37.780]], COLORS.RED, 1.5, '3 3');
    zoneLabel(49.705, 37.755, 'патруль РФ', COLORS.RED, 7);

    // =========================================================
    // HELICOPTER STAGING AREA (west of Oskil, near Kupyansk)
    // =========================================================
    zoneLabel(49.745, 37.545, 'БАЗА ВИЛІТУ (Куп&#x27;янськ, західний берег)', COLORS.BLU, 11);

    // Staging area circle
    circ(49.730, 37.570, 400, COLORS.BLU, 0.08);

    // Mi-8MSB #1
    mk(49.732, 37.568, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="18" x2="5" y2="32" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Mi-8</text>`, 'Mi-8MSB #1', 'Мі-8МСБ\n12 десантників\nкулемет + флари\nстарт: база Куп&#x27;янськ', [80,80]);

    // Mi-8MSB #2
    mk(49.728, 37.572, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="18" x2="5" y2="32" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Mi-8</text>`, 'Mi-8MSB #2', 'Мі-8МСБ\n12 десантників\n+ ПТРК Стугна-П\nрезерв: евакуація', [80,80]);

    // Mi-24P escort
    mk(49.735, 37.565, `<rect x="8" y="15" width="35" height="18" rx="2" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="43" y1="24" x2="25" y2="24" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="24" x2="12" y2="18" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="24" x2="12" y2="30" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="8" y1="18" x2="8" y2="30" stroke="${COLORS.ORG}" stroke-width="1.5"/><circle cx="8" cy="15" r="4" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.ORG}" font-size="5" font-weight="bold">Mi-24</text>`, 'Mi-24P', 'Мі-24П «Крокодил»\n30мм гармата + НАР С-8\nсупровід + вогнева підтримка\nприкриває десантування', [80,80]);

    // Command post at staging
    mk(49.730, 37.575, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'КП ОПЕРАЦІЇ', 'Командний пункт\nStarlink + радіо + GIS Arta\nкерування рейдом\nMapbox: Куп&#x27;янськ (3.9 км)', [75,75]);

    // =========================================================
    // ARTILLERY SUPPORT (friendly, fires smoke + HE)
    // =========================================================
    zoneLabel(49.740, 37.530, 'АРТИЛЕРІЙСЬКА ПІДТРИМКА', COLORS.ORG, 10);

    mk(49.725, 37.545, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">155</text>`, 'M777', '155мм M777\nДимові + ОФ\nприкриває маршрут\nдальність: 15 км', [80,80]);

    mk(49.720, 37.540, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">2С3</text>`, '2С3 Акація', '152мм 2С3\nОсколково-фугасні\nGIS Arta — коригування\ndistance: 15.2 км', [80,80]);

    // Artillery fire to target zone (dashed)
    ln([[49.725, 37.545], [49.695, 37.790]], COLORS.ORG, 2, '5 3');
    ln([[49.720, 37.540], [49.685, 37.800]], COLORS.ORG, 2, '5 3');

    // Smoke screen zone (over front line crossing point)
    ar([
        [49.715, 37.710], [49.715, 37.730],
        [49.700, 37.730], [49.700, 37.710]
    ], COLORS.WHT, COLORS.WHT, 0.06);
    zoneLabel(49.708, 37.718, 'ДИМОВА\nЗАВІСА', COLORS.WHT, 7);

    // =========================================================
    // DRONE RECON (pre-mission intel)
    // =========================================================
    mk(49.715, 37.555, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'SHARK РОЗВ', 'Shark SC1 розвідка\n35 км дальність\nкарта ППО + позицій\nпрацює до та під час рейду', [75,75]);

    circ(49.715, 37.555, 35000, COLORS.CYN, 0.01);

    // =========================================================
    // HELICOPTER APPROACH ROUTE (NOE along Oskil River)
    // Route: staging → south along river → east over front → LZ
    // Mapbox: 14.4 km total
    // =========================================================
    zoneLabel(49.740, 37.610, 'МАРШРУТ ПІДХОДУ (NOE, 10-30м)', COLORS.CYN, 10);

    // Approach route (dashed cyan)
    ln([
        [49.730, 37.570], [49.720, 37.610], [49.710, 37.640],
        [49.700, 37.690], [49.690, 37.760]
    ], COLORS.CYN, 2.5, '8 4');

    // Route labels
    zoneLabel(49.720, 37.605, '← вздовж Оскілу\n(маскування)', COLORS.CYN, 7);
    zoneLabel(49.700, 37.670, 'переліт лінії\nфронту ←', COLORS.ORG, 7);

    // =========================================================
    // LANDING ZONE (LZ)
    // Mapbox: 3.6 km behind enemy front line
    // =========================================================
    zoneLabel(49.695, 37.745, 'ЗОНА ПОСАДКИ (LZ)', COLORS.GRN, 10);

    // LZ circle
    circ(49.690, 37.760, 300, COLORS.GRN, 0.10);

    // LZ marker
    mk(49.690, 37.760, `<polygon points="25,5 28,20 45,20 30,30 36,45 25,35 14,45 20,30 5,20 22,20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">LZ</text>`, 'LZ «ОСКІЛ»', 'Зона посадки вертольотів\nвідкрите поле\n3.6 км за лінією фронту (Mapbox)\nвисадка: 90 сек\n~25 десантників', [80,80]);

    // Dismount point
    mk(49.688, 37.762, `<circle cx="25" cy="15" r="5" fill="${COLORS.BLU}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="25" y1="25" x2="17" y2="30" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="25" y1="25" x2="33" y2="22" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="25" y1="35" x2="20" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="25" y1="35" x2="30" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'ВИСАДКА', 'Точка висадки\nдесант покидає вертольоти\nза 90 секунд\n2× Mi-8 → 24 бійці', [65,65]);

    // =========================================================
    // GROUND ASSAULT FROM LZ TO OBJECTIVES
    // LZ → objectives: 2.9 km (Mapbox verified)
    // =========================================================
    zoneLabel(49.690, 37.775, 'ШТУРМОВА ГРУПА (підхід до цілей)', COLORS.PNK, 10);

    // Assault approach route (dashed pink)
    ln([[49.690, 37.760], [49.692, 37.775], [49.694, 37.785]], COLORS.PNK, 2.5, '4 3');
    ln([[49.690, 37.760], [49.688, 37.775], [49.686, 37.790]], COLORS.PNK, 2.5, '4 3');

    // Squad positions (assault formation)
    mk(49.692, 37.775, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.PNK}"/><circle cx="30" cy="32" r="2" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">В-1</text>`, 'ВІДДІЛЕННЯ-1', '1-е відділення — штурм\n8 бійців + ПКМ\nціль: 2С19 Мста-С (ЦІЛЬ-1)\n~1.5 км від LZ', [70,70]);

    mk(49.688, 37.775, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.PNK}"/><circle cx="30" cy="32" r="2" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">В-2</text>`, 'ВІДДІЛЕННЯ-2', '2-е відділення — штурм\n8 бійців + РПГ-7\nціль: КП роти (ЦІЛЬ-2)\n~2.2 км від LZ', [70,70]);

    mk(49.690, 37.778, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.PNK}"/><circle cx="30" cy="32" r="2" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">В-3</text>`, 'ВІДДІЛЕННЯ-3', '3-е відділення — блокування\n8 бійців + ПТРК Стугна\nприкриває фланг + шлях відходу\nконтроляє підступи', [70,70]);

    // Fire sectors from assault squads
    ln([[49.692, 37.775], [49.694, 37.790]], COLORS.PNK, 1.5, '3 3');
    ln([[49.688, 37.775], [49.686, 37.798]], COLORS.PNK, 1.5, '3 3');

    // FPV drone overhead (covering assault)
    mk(49.692, 37.780, `<line x1="8" y1="8" x2="32" y2="32" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="32" y1="8" x2="8" y2="32" stroke="${COLORS.CYN}" stroke-width="1.5"/><circle cx="8" cy="8" r="3" fill="${COLORS.CYN}"/><circle cx="32" cy="8" r="3" fill="${COLORS.CYN}"/><circle cx="8" cy="32" r="3" fill="${COLORS.CYN}"/><circle cx="32" cy="32" r="3" fill="${COLORS.CYN}"/><circle cx="20" cy="20" r="2" fill="${COLORS.CYN}"/>`, 'FPV-НАБЛЮД', 'FPV-дрон над штурмом\nреальний огляд згори\nкорегування вогню\nпошук загроз', [50,50]);

    // =========================================================
    // OBJECTIVE DESTRUCTION MARKERS
    // =========================================================
    // ЦІЛЬ-1: destroyed artillery
    mk(49.695, 37.790, `<polygon points="25,2 28,16 42,16 31,24 35,38 25,30 15,38 19,24 8,16 22,16" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="1.5"/>`, '', 'УРАЖЕНО: 2С19\nкумулятивний РПГ\n~1.5 км від LZ (Mapbox)', [45,45]);

    // ЦІЛЬ-2: destroyed CP
    mk(49.685, 37.800, `<polygon points="25,2 28,16 42,16 31,24 35,38 25,30 15,38 19,24 8,16 22,16" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="1.5"/>`, '', 'УРАЖЕНО: КП\nштурм + гранати\n~2.2 км від LZ (Mapbox)', [45,45]);

    // =========================================================
    // EXTRACTION ROUTE (different from approach)
    // LZ → north → west along different corridor → staging
    // =========================================================
    zoneLabel(49.720, 37.735, 'МАРШРУТ ЕВАКУАЦІЇ (інший маршрут)', COLORS.GRN, 10);

    ln([
        [49.690, 37.760], [49.710, 37.740], [49.720, 37.710],
        [49.725, 37.680], [49.730, 37.640], [49.730, 37.570]
    ], COLORS.GRN, 2.5, '6 4');

    zoneLabel(49.720, 37.700, '↑ повернення\nпівнічніший маршрут', COLORS.GRN, 7);
    zoneLabel(49.728, 37.620, '→ база', COLORS.GRN, 7);

    // =========================================================
    // ASSAULT PHASES (KILL CHAIN)
    // =========================================================
    zoneLabel(49.600, 37.620, 'ЕТАПИ РЕЙДУ (HELICOPTER RAID):', COLORS.WHT, 11);

    const phases = [
        { lat: 49.605, lng: 37.545, text: '① РОЗВІДКА', desc: 'Shark / FPV\nкарта ППО + цілей\nза 24 год до рейду', color: COLORS.CYN },
        { lat: 49.605, lng: 37.610, text: '② ПІДГОТОВКА', desc: 'Арт. вогонь + дим\nпригнічення ППО\nGIS Arta координація', color: COLORS.ORG },
        { lat: 49.605, lng: 37.680, text: '③ ДЕСАНТУВАННЯ', desc: 'Mi-8 NOE політ\nвздовж Оскілу → LZ\n14.4 км / 8 хв', color: COLORS.BLU },
        { lat: 49.605, lng: 37.750, text: '④ ШТУРМ', desc: 'Підхід 2.9 км\nштурм цілей\nгранати + РПГ + ПКМ', color: COLORS.PNK },
        { lat: 49.605, lng: 37.820, text: '⑤ ЕВАКУАЦІЯ', desc: 'Поверх іншого маршруту\nMi-8 забирає групу\n45-60 хв загалом', color: COLORS.GRN },
    ];

    phases.forEach(s => {
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

    // Phase arrows
    ln([[49.610, 37.575], [49.610, 37.580]], COLORS.WHT, 1.5);
    ln([[49.610, 37.645], [49.610, 37.650]], COLORS.WHT, 1.5);
    ln([[49.610, 37.715], [49.610, 37.720]], COLORS.WHT, 1.5);
    ln([[49.610, 37.785], [49.610, 37.790]], COLORS.WHT, 1.5);

    // =========================================================
    // THREAT ASSESSMENT BOX
    // =========================================================
    const threatIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #ef5350;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:240px;">
            <div style="color:#ef5350;font-weight:700;font-size:11px;margin-bottom:4px;">&#9888; ЗАГРОЗИ ВЕРТОЛЬОТАМ</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div>&#8226; <span style="color:#ef5350;">ЗУ-23-2</span> — 2.5 км радіус (23мм)</div>
                <div>&#8226; <span style="color:#ef5350;">Стрілецькі ЗЗ</span> — на всіх позиціях</div>
                <div>&#8226; <span style="color:#ef5350;">Тор-М2</span> — можливий за 15 км (Сватове)</div>
                <div>&#8226; <span style="color:#ef5350;">Панцир-С1</span> — можливий за 20 км</div>
                <div style="color:#4caf50;margin-top:4px;font-weight:700;">КОМПЕНСАЦІЯ:</div>
                <div>&#8226; NOE політ 10-30м (маскування рельєфом)</div>
                <div>&#8226; Маршрут вздовж р. Оскіл (долина)</div>
                <div>&#8226; Димова завіса при перетині фронту</div>
                <div>&#8226; Тривалість: 8 хв у зоні ризику</div>
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.760, 37.540], { icon: threatIcon, interactive: false }).addTo(map));

    // =========================================================
    // MISSION PARAMETERS BOX
    // =========================================================
    const missionIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:270px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#128747; 95 ОДШБр — ВЕРТОЛІТНИЙ РЕЙД</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Куп&#x27;янськ | Mapbox: 49.710, 37.615 | Сvatове: 50.3 км</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Тип місії: <span style="color:#ff4081;font-weight:700;">НАЛІТ (рейд)</span></div>
                <div>Підрозділ: <span style="color:#40c4ff;font-weight:700;">1 взвод 95 ОДШБр</span> (~25 бійців)</div>
                <div>Вертольоти: <span style="color:#40c4ff;">2× Mi-8MSB</span> + <span style="color:#ff9800;">1× Mi-24P</span></div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;">
                <div style="color:#ff9800;font-weight:700;">ТИМІНГ:</div>
                <div>&#8226; Політ: <span style="color:#00e5ff;font-weight:700;">8 хв</span> (14.4 км, Mapbox)</div>
                <div>&#8226; Висадка: <span style="color:#00e5ff;">90 сек</span></div>
                <div>&#8226; Підхід: <span style="color:#00e5ff;">25 хв</span> (2.9 км пішки, Mapbox)</div>
                <div>&#8226; Штурм: <span style="color:#ff4081;">20 хв</span> (гранати + РПГ)</div>
                <div>&#8226; Евакуація: <span style="color:#4caf50;">6 хв</span> (зворотний політ)</div>
                <div>&#8226; <span style="font-weight:700;">ЗАГАЛОМ: 45-60 хв</span></div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;">
                <div style="color:#4caf50;font-weight:700;">ЦІЛІ:</div>
                <div>&#8226; ЦІЛЬ-1: 2С19 Мста-С — <span style="color:#ef5350;">ЗНИЩИТИ</span></div>
                <div>&#8226; ЦІЛЬ-2: КП роти — <span style="color:#ef5350;">ЗНИЩИТИ</span></div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;">
                <div style="color:#00e5ff;font-weight:700;">ПІДТРИМКА:</div>
                <div>&#8226; 155мм M777 — дим + ОФ</div>
                <div>&#8226; 152мм 2С3 — вогонь на пригнічення</div>
                <div>&#8226; Shark БПЛА — розвідка 35 км</div>
                <div>&#8226; FPV-дрон — спостереження над штурмом</div>
                <div>&#8226; GIS Arta — координація вогню</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                Distances (Mapbox): База→LZ 14.4 км | LZ→Ціль 2.9 км | Глибина 3.6 км<br>
                NOE маршрут: вздовж Оскілу → через фронт → LZ<br>
                Евакуація: інший маршрут (північніше) → база<br>
                Ризик: ЗУ-23-2 (2.5 км) + Стрілецьке ЗЗ | Компенсація: NOE + дим + швидкість
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.580, 37.580], { icon: missionIcon, interactive: false }).addTo(map));

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Mi-8MSB #1: staging → along river → LZ (14.4 km, 8 min)
    const mi8_1 = mkAnim(49.730, 37.570, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Mi-8</text>`, 'Mi-8 #1→', '', [55,55]);
    animations.push({
        marker: mi8_1,
        path: [
            [49.730, 37.570], [49.725, 37.590], [49.720, 37.610],
            [49.715, 37.625], [49.710, 37.640], [49.705, 37.660],
            [49.700, 37.690], [49.695, 37.720], [49.690, 37.745],
            [49.690, 37.760]
        ],
        step: 0,
        speed: 0.006,
    });

    // 2. Mi-8MSB #2: same route, slight offset (follows #1)
    const mi8_2 = mkAnim(49.732, 37.572, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Mi-8</text>`, 'Mi-8 #2→', '', [55,55]);
    animations.push({
        marker: mi8_2,
        path: [
            [49.732, 37.572], [49.727, 37.592], [49.722, 37.612],
            [49.717, 37.627], [49.712, 37.642], [49.707, 37.662],
            [49.702, 37.692], [49.697, 37.722], [49.692, 37.747],
            [49.691, 37.761]
        ],
        step: 0,
        speed: 0.005,
    });

    // 3. Mi-24P escort: staging → overwatch near LZ (faster, goes ahead)
    const mi24 = mkAnim(49.735, 37.565, `<rect x="8" y="15" width="35" height="18" rx="2" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="43" y1="24" x2="25" y2="24" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="24" x2="12" y2="18" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="24" x2="12" y2="30" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="8" cy="15" r="4" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.ORG}" font-size="5" font-weight="bold">Mi-24</text>`, 'Mi-24→', '', [55,55]);
    animations.push({
        marker: mi24,
        path: [
            [49.735, 37.565], [49.725, 37.590], [49.715, 37.615],
            [49.710, 37.640], [49.700, 37.680], [49.695, 37.730],
            [49.693, 37.750]
        ],
        step: 0,
        speed: 0.007,
    });

    // 4. Assault squad: LZ → objective (2.9 km ground movement)
    const assault = mkAnim(49.690, 37.760, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.PNK}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.PNK}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ</text>`, 'ШТУРМ→', '', [55,55]);
    animations.push({
        marker: assault,
        path: [
            [49.690, 37.760], [49.691, 37.770], [49.692, 37.780],
            [49.693, 37.790], [49.694, 37.795], [49.695, 37.800],
            [49.693, 37.805]
        ],
        step: 0,
        speed: 0.004,
    });

    // 5. FPV drone: circling above assault area
    const fpv = mkAnim(49.692, 37.780, `<line x1="8" y1="8" x2="32" y2="32" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="32" y1="8" x2="8" y2="32" stroke="${COLORS.CYN}" stroke-width="1.5"/><circle cx="8" cy="8" r="3" fill="${COLORS.CYN}"/><circle cx="32" cy="8" r="3" fill="${COLORS.CYN}"/><circle cx="8" cy="32" r="3" fill="${COLORS.CYN}"/><circle cx="32" cy="32" r="3" fill="${COLORS.CYN}"/>`, 'FPV', '', [45,45]);
    animations.push({
        marker: fpv,
        path: [
            [49.692, 37.778], [49.695, 37.782], [49.697, 37.788],
            [49.694, 37.794], [49.690, 37.792], [49.688, 37.786],
            [49.689, 37.780], [49.692, 37.778]
        ],
        step: 0,
        speed: 0.008,
    });

    startAnimation(animations, '_assaultAnimFrame');

    // Fly to Kupyansk sector
    map.flyTo([49.690, 37.700], 12, { duration: 1.5 });
}
