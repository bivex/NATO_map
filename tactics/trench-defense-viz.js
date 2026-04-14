// ===== POSITIONAL WARFARE — SHELTERBELT (ЛІСОПОСАДКА) VISUALIZATION =====
// Позиційна війна на лесопосадках — Роботине, Запорізька область
// Tree strips (shelterbelts) based on OpenStreetMap (2026-04-14)
// Mapbox: Robotyne [47.443°N, 35.826°E] | Novoprokopivka [47.421°N, 35.832°E] = 2.5 км
// Оріхів [47.577°N, 35.785°E] = 15.2 км на північ
// Лінія фронту: E-W через ~47.432°N між лесопосадками

function buildTrenchDefenseViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._trenchDefenseAnimations = animations;

    // LAT 47.43°N: 0.001° lat = 111m, 0.001° lng = 75m

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(47.465, 35.820, '───── ПОЗИЦІЙНА ВІЙНА НА ЛІСОПОСАДКАХ ─────', COLORS.BLU, 12);
    zoneLabel(47.460, 35.815, 'РОБОТИНЕ — ЗАПОРІЗЬКИЙ НАПРЯМОК\nOSM: лесопосадки | Mapbox: 47.443°N, 35.826°E', COLORS.WHT, 9);

    // Reference settlements (Mapbox verified)
    zoneLabel(47.452, 35.822, '← м. Роботине (47.443, 35.826)', COLORS.WHT, 8);
    zoneLabel(47.412, 35.835, 'с. Новопрокопівка (47.421, 35.832) ↓ 2.5 км', COLORS.RED, 7);
    zoneLabel(47.465, 35.785, '← м. Оріхів (47.577, 35.785) 15.2 км', COLORS.WHT, 7);
    zoneLabel(47.440, 35.870, 'с. Вербове (47.428, 35.989) →', COLORS.WHT, 7);

    // =========================================================
    // AGRICULTURAL FIELDS — steppe terrain (open, no cover)
    // =========================================================
    ar([
        [47.412, 35.818], [47.412, 35.865],
        [47.460, 35.865], [47.460, 35.818]
    ], '#c8b560', '#c8b560', 0.08);
    zoneLabel(47.415, 35.855, 'СТЕП — ВІДКРИТЕ ПОЛЕ\nпшениця / соняшник\nукриття = лише лесопосадки', '#a89040', 8);

    // =========================================================
    // TREE STRIPS (ЛІСОПОСАДКИ) — OSM VERIFIED
    // Shelterbelts: narrow N-S tree strips, 100-200m wide, 500-1100m long
    // =========================================================

    // --- ENEMY TREE STRIPS (south of front line) ---

    // Enemy treeline 1: Long N-S strip
    // OSM way 802433724: 47.422-47.433°N, 35.842-35.844°E (1125m × 192m)
    ar([
        [47.422, 35.842], [47.433, 35.842], [47.433, 35.844], [47.422, 35.844]
    ], '#1b5e20', '#2e7d32', 0.45);
    zoneLabel(47.422, 35.842, 'ЛІСОПОСАДКА\nOSM way 802433724\n1125м × 192м', '#4caf50', 6);

    // Enemy treeline 2: Block
    // OSM way 802433719: 47.427-47.433°N, 35.845-35.852°E (610m × 550m)
    ar([
        [47.427, 35.845], [47.433, 35.845], [47.433, 35.852], [47.427, 35.852]
    ], '#1b5e20', '#2e7d32', 0.45);

    // Enemy treeline 3: Southern block
    // OSM way 802433720: 47.424-47.427°N, 35.846-35.852°E (420m × 479m)
    ar([
        [47.424, 35.846], [47.427, 35.846], [47.427, 35.852], [47.424, 35.852]
    ], '#1b5e20', '#2e7d32', 0.45);

    // --- UKRAINIAN TREE STRIPS (north of front line) ---

    // UA treeline 1-West (forward): Short strip
    // OSM way 802433726: 47.433-47.437°N, 35.841-35.842°E (468m × 120m)
    ar([
        [47.433, 35.841], [47.437, 35.841], [47.437, 35.842], [47.433, 35.842]
    ], '#1b5e20', '#2e7d32', 0.45);
    zoneLabel(47.437, 35.840, 'ЛІСОПОСАДКА\nOSM way 802433726\n468м × 120м', '#4caf50', 6);

    // UA treeline 1-East (forward): Long strip
    // OSM way 802433723: 47.435-47.443°N, 35.849-35.851°E (871m × 141m)
    ar([
        [47.435, 35.849], [47.443, 35.849], [47.443, 35.851], [47.435, 35.851]
    ], '#1b5e20', '#2e7d32', 0.45);
    zoneLabel(47.443, 35.848, 'ЛІСОПОСАДКА\nOSM way 802433723\n871м × 141м', '#4caf50', 6);

    // UA treeline 2 (reserve): realistic shelterbelt pattern
    // 47.444-47.447°N, 35.838-35.846°E (~333m × 600m)
    ar([
        [47.444, 35.838], [47.447, 35.838], [47.447, 35.846], [47.444, 35.846]
    ], '#1b5e20', '#2e7d32', 0.40);
    zoneLabel(47.447, 35.836, 'РЕЗЕРВНА\nЛІСОПОСАДКА', '#4caf50', 6);

    // UA treeline 3 (rear): near Robotyne
    // 47.449-47.452°N, 35.828-35.836°E (~333m × 600m)
    ar([
        [47.449, 35.828], [47.452, 35.828], [47.452, 35.836], [47.449, 35.836]
    ], '#1b5e20', '#2e7d32', 0.35);

    // =========================================================
    // FRONT LINE (dashed E-W line through the area)
    // =========================================================
    ln([
        [47.432, 35.825], [47.432, 35.858]
    ], COLORS.ORG, 3, '8 4');
    zoneLabel(47.432, 35.822, '── ЛІНІЯ ФРОНТУ ──', COLORS.ORG, 9);

    // =========================================================
    // NO-MAN'S LAND (open fields between opposing strips)
    // Gap: 35.844 (enemy east) → 35.849 (UA west) = ~375m of open field
    // Also: open field directly south of UA strip 1-west
    // =========================================================
    zoneLabel(47.430, 35.846, 'НІЧИЯ ЗЕМЛЯ\nвідкрите поле\n300-500м без укриття', COLORS.BRN, 8);

    // No-man's land shading (between opposing strips)
    ar([
        [47.428, 35.844], [47.435, 35.844],
        [47.436, 35.849], [47.428, 35.849]
    ], COLORS.BRN, COLORS.BRN, 0.06);

    // Open field south of UA strip 1-west
    ar([
        [47.428, 35.840], [47.433, 35.840],
        [47.433, 35.841], [47.428, 35.841]
    ], COLORS.BRN, COLORS.BRN, 0.06);

    // Barbed wire in no-man's land
    ln([[47.430, 35.844], [47.430, 35.849]], COLORS.BRN, 1.5, '1 1');
    ln([[47.431, 35.844], [47.431, 35.849]], COLORS.BRN, 1.5, '1 1');
    ln([[47.429, 35.844], [47.429, 35.849]], COLORS.BRN, 1.5, '1 1');
    zoneLabel(47.430, 35.844, 'КОЛЮЧИЙ ДРІТ', COLORS.BRN, 6);

    // Minefields in open field
    mk(47.430, 35.846, `<circle cx="25" cy="25" r="10" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BRN}" font-size="8" font-weight="bold">П</text>`, 'МІНА-ПП', 'ПФМ-1 "Лепесток"\nрозкиданий дистанційно\nвідкрите поле між посадками', [50,50]);

    mk(47.431, 35.847, `<circle cx="25" cy="25" r="12" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="13" y="13" width="24" height="24" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="10" font-weight="bold">Т</text>`, 'МІНА-ПТ', 'ТМ-62М протитанкова\nна шляху підступу\nряд 3×100м', [55,55]);

    mk(47.430, 35.845, `<rect x="10" y="25" width="30" height="15" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><polygon points="15,25 25,15 35,25" fill="${COLORS.BRN}"/><polygon points="17,25 27,15 37,25" fill="${COLORS.BRN}"/>`, 'ДРАКОН ЗУБИ', 'Бетонні пірамідки\nпротитанкові\nна підступах', [60,60]);

    // =========================================================
    // ENEMY POSITIONS (in southern tree strips)
    // =========================================================
    zoneLabel(47.418, 35.835, 'ПРОТИВНИК — ПОЗИЦІЇ В ЛІСОПОСАДКАХ (південь)', COLORS.RED, 10);

    // Enemy company in treeline 1 (long strip)
    mk(47.428, 35.843, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">РТ</text>`, 'РОТА-ПРОТ-1', 'Рота противника ~100 бійців\nу лесопосадці (OSM way 802433724)\n1125м довжина позиції\nРПГ + ПКМ + міномет', [80,80]);

    mk(47.425, 35.843, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ВЗВ</text>`, 'ВЗВОД-ПРОТ', 'Взвод противника ~30 бійців\nпівденний край посадки\nштурмова група', [80,80]);

    // Enemy in block treeline 2
    mk(47.430, 35.848, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">РТ</text>`, 'РОТА-ПРОТ-2', 'Рота противника\nу блоці лесопосадок (OSM way 802433719)\n610м × 550м\n2БМП + міномети + АГС', [80,80]);

    // Enemy southern block
    mk(47.425, 35.849, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ</text>`, 'ШТУРМ-ГР', 'Штурмова група ~20 бійців\nу південному блоці (OSM way 802433720)\nготова до атаки через поле', [80,80]);

    // Enemy armor behind treelines (in open terrain)
    mk(47.420, 35.840, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Т-72</text>`, 'ТАНК-ПРОТ', 'Т-72Б3 (2 шт)\nза лесопосадкою\n~1.3 км від нашої 1-ї лінії\nу відкритому полі (укрито посадкою)', [80,80]);

    mk(47.419, 35.846, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">120</text>`, 'МІНОМЕТ-120', '120мм міномети (4 шт)\nза посадкою у полі\n~1.4 км від нашої лінії\nосколково-фугасні', [75,75]);

    // Enemy assault directions (north through open fields)
    ln([[47.428, 35.843], [47.432, 35.843]], COLORS.RED, 2.5);
    ln([[47.430, 35.848], [47.432, 35.848]], COLORS.RED, 2.5);
    ln([[47.425, 35.849], [47.429, 35.849], [47.432, 35.848]], COLORS.RED, 2, '5 3');
    zoneLabel(47.427, 35.848, 'НАПРЯМОК ШТУРМУ ↑', COLORS.RED, 7);

    // =========================================================
    // UKRAINIAN 1st SHELTERBELT — FORWARD DEFENSE
    // Two tree strips: west (47.433-47.437, 35.841-35.842) and east (47.435-47.443, 35.849-35.851)
    // =========================================================
    zoneLabel(47.438, 35.832, '1-ША ЛІНІЯ — ЛІСОПОСАДКИ (передова)', COLORS.BLU, 10);

    // Trench line along UA treeline 1-west (inside the strip)
    ln([
        [47.433, 35.8415], [47.435, 35.8415], [47.437, 35.8415]
    ], COLORS.BLU, 3);

    // Trench line along UA treeline 1-east (inside the strip)
    ln([
        [47.435, 35.8500], [47.438, 35.8500], [47.441, 35.8500], [47.443, 35.8500]
    ], COLORS.BLU, 3);

    // --- Positions in treeline 1-West ---

    mk(47.435, 35.8415, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}66" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="20" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="2" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ПК</text>`, 'ПК-ЗАХІД', 'НСВ "Утьос" кулеметне гніздо\nу лесопосадці (OSM way 802433726)\nприкриває поле на південь\n3 стрільці + боєкомплект', [85,85]);

    mk(47.434, 35.8415, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/>`, 'СТРІЛЕЦЬКА-ЗХ', '2 стрільці АК-74 + РПГ-7\nзахідна ділянка посадки\nукрито деревами', [70,70]);

    // Fire sectors from western strip
    ln([[47.435, 35.8415], [47.430, 35.842]], COLORS.BLU, 1.5, '3 3');
    ln([[47.435, 35.8415], [47.430, 35.845]], COLORS.BLU, 1.5, '3 3');

    // --- Positions in treeline 1-East ---

    mk(47.437, 35.8500, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}66" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="20" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="2" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ПК</text>`, 'ПК-ЦЕНТР', 'ПКМ кулемет\nцентр посадки (OSM way 802433723)\nприкриває прогалину між посадками\n2 стрільці + 3000 набоїв', [85,85]);

    mk(47.440, 35.8500, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}66" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="20" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="2" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ПК</text>`, 'ПК-СХІД', 'ПКМ кулемет\nпівнічна частина посадки\nприкриває східний фланг\n2 стрільці', [85,85]);

    mk(47.438, 35.8500, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/>`, 'СТРІЛЕЦЬКА-Ц', '2 стрільці + ПК\nцентральна ділянка\nміж кулеметними гніздами', [70,70]);

    mk(47.442, 35.8500, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/>`, 'СТРІЛЕЦЬКА-СХ', '2 стрільці РПГ-7\nпівнічний край посадки\nрезервна позиція', [70,70]);

    // ATGM on edge of eastern strip (fires across open field)
    mk(47.436, 35.8495, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ПТРК-1', 'Stugna-P ПТРК\nна краю посадки\nвогонь через поле на броню\nефект. дальність 3000м', [70,70]);

    mk(47.442, 35.8495, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ПТРК-2', 'Javelin ПТРК\nпівнічний край посадки\nприкриває східний підступ', [70,70]);

    // AGS in eastern strip
    mk(47.439, 35.8500, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}66" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.PNK}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.PNK}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">АГС</text>`, 'АГС-17', 'АГС-17 автоматичний гранатомет\n30мм осколкові\nу посадці — вогонь на південь', [70,70]);

    // Sniper in eastern strip
    mk(47.441, 35.8505, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}66" stroke="${COLORS.RED}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="22" r="3" fill="${COLORS.RED}"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">СВД</text>`, 'СНАЙПЕР-1', 'СВД + тепловізор\nу гущавині посадки\nконтрснайпінг + офіцери', [70,70]);

    // Artillery OP on eastern strip edge
    mk(47.436, 35.8505, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.ORG}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">АРТ ОП</text>`, 'АРТ ОП-1', 'Коректувальник артилерії\nна краю посадки\nKropyva + радіо\nпряма видимість поля', [70,70]);

    // Observation post on western strip
    mk(47.436, 35.8415, `<circle cx="25" cy="25" r="15" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ОП-1', 'Спостережний пункт\nбіноклі + тепловізор\nкрай посадки — огляд поля', [70,70]);

    // Fire sectors from eastern strip
    ln([[47.437, 35.8500], [47.430, 35.844]], COLORS.BLU, 1.5, '3 3');
    ln([[47.437, 35.8500], [47.430, 35.848]], COLORS.BLU, 1.5, '3 3');
    ln([[47.440, 35.8500], [47.432, 35.852]], COLORS.BLU, 1.5, '3 3');

    // =========================================================
    // 2nd SHELTERBELT — RESERVE (~300m behind 1st)
    // 47.444-47.447°N, 35.838-35.846°E
    // =========================================================
    zoneLabel(47.448, 35.832, '2-ГА ЛІНІЯ — РЕЗЕРВНА ПОСАДКА', COLORS.GRN, 9);

    // Trench inside reserve strip
    ln([
        [47.445, 35.839], [47.445, 35.842], [47.445, 35.845]
    ], COLORS.GRN, 2.5, '3 3');

    mk(47.445, 35.840, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="15" y1="15" x2="15" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="35" y1="15" x2="35" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БЛІНДАЖ</text>`, 'БЛІНДАЖ-1', 'Бліндаж на відділення\n8 стрільців + ПК\nрезервна позиція\n~300м за передовою', [80,80]);

    mk(47.446, 35.844, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="15" y1="15" x2="15" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="35" y1="15" x2="35" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БЛІНДАЖ</text>`, 'БЛІНДАЖ-2', 'Бліндаж резерва\nбоєкомплект + вода\nпозиція очікування', [80,80]);

    // =========================================================
    // 3rd SHELTERBELT — DEEP DEFENSE
    // 47.449-47.452°N, 35.828-35.836°E
    // =========================================================
    zoneLabel(47.453, 35.823, '3-ТЯ ЛІНІЯ — ГЛИБОКА ОБОРОНА', COLORS.PUR, 9);

    ln([
        [47.450, 35.829], [47.450, 35.833], [47.450, 35.836]
    ], COLORS.PUR, 2.5, '5 3');

    mk(47.450, 35.831, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="2"/>`, '3-Й ЕШЕЛОН-1', 'Резервна позиція\nконтратака', [60,60]);

    mk(47.451, 35.835, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="2"/>`, '3-Й ЕШЕЛОН-2', 'Резервна позиція\nприкриття тилу', [60,60]);

    // =========================================================
    // COMMUNICATION ROUTES (hidden paths through open fields)
    // =========================================================
    zoneLabel(47.443, 35.830, 'КОМУНІКАЦІЇ (вночі)', COLORS.GRN, 8);

    // 1st west strip → 2nd strip
    ln([[47.436, 35.8415], [47.440, 35.841], [47.445, 35.840]], COLORS.GRN, 1.5, '4 2');
    // 1st east strip → 2nd strip
    ln([[47.439, 35.8500], [47.443, 35.846], [47.445, 35.844]], COLORS.GRN, 1.5, '4 2');
    // 2nd strip → 3rd strip
    ln([[47.445, 35.840], [47.448, 35.836], [47.450, 35.833]], COLORS.GRN, 1.5, '4 2');
    ln([[47.446, 35.844], [47.448, 35.840], [47.450, 35.836]], COLORS.GRN, 1.5, '4 2');

    // =========================================================
    // COMMAND POST (in 2nd shelterbelt)
    // =========================================================
    mk(47.445, 35.842, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'КП РОТИ', 'Командний пункт роти\nу посадці: карта + Kropyva + радіо\n~350м від 1-ї лінії\nGPS: 47.445, 35.842', [80,80]);

    // =========================================================
    // TANK POSITION (hull-down near treeline)
    // =========================================================
    mk(47.451, 35.834, `<ellipse cx="25" cy="30" rx="15" ry="8" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><rect x="18" y="15" width="14" height="10" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="15" stroke="${COLORS.BLU}" stroke-width="2"/>`, 'ТАНК-ОКОП', 'Т-72 в окопі біля посадки\n~1.2 км від 1-ї лінії\nпротитанкова резерв', [80,80]);

    // =========================================================
    // SUPPORT ELEMENTS (behind 3rd line, near Robotyne)
    // =========================================================
    zoneLabel(47.455, 35.820, 'ТИЛОВІ ЕЛЕМЕНТИ (Роботине)', COLORS.GRN, 9);

    mk(47.455, 35.830, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДП</text>`, 'МЕДПУНКТ', 'Медичний пункт\nперша допомога + джгут\n~1.3 км від 1-ї лінії\nевакуація → Роботине', [70,70]);

    mk(47.456, 35.836, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="25" y1="15" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="1"/>`, 'БОЄКОМПЛЕКТ', 'Склад БК\nнабої + гранати\nв укритті\nвинос вночі', [70,70]);

    // =========================================================
    // ARTILLERY (from Orikhiv direction, ~15 km north)
    // Mapbox: Оріхів 47.577, 35.785
    // =========================================================
    zoneLabel(47.468, 35.780, 'АРТИЛЕРІЯ (Оріхів)', COLORS.PUR, 10);

    mk(47.468, 35.790, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">155</text>`, 'М777', '155мм M777 (2 шт)\nпоблизу Оріхова (15.2 км північ)\n~3.9 км від Роботиного\nExcalibur GPS + Kropyva', [80,80]);

    circ(47.468, 35.790, 15000, COLORS.PUR, 0.02);
    ln([[47.468, 35.790], [47.435, 35.843]], COLORS.PUR, 1.5, '8 4');

    mk(47.458, 35.840, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">120</text>`, 'МІНОМЕТ-120', '120мм міномети (3 шт)\nза 3-ю посадкою\n~2 км від 1-ї лінії\nосколкові + дим + Кассетні', [75,75]);

    // =========================================================
    // EW / ANTI-DRONE (critical on open terrain)
    // =========================================================
    mk(47.448, 35.838, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.PUR}"/><line x1="20" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="30" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">РЕБ</text>`, 'РЕБ-АНТИДРОН', 'Станція РЕБ\nглушіння FPV-дронів\nрадіус 1000м\nВІДКРИТИЙ СТЕП = дрони літають вільно', [75,75]);

    circ(47.448, 35.838, 1000, COLORS.PUR, 0.03);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Enemy assault group moving north through open field
    const enemyProbe = mkAnim(47.428, 35.846, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ</text>`, 'ШТУРМ→', '', [70,70]);
    animations.push({
        marker: enemyProbe,
        path: [
            [47.428, 35.846], [47.430, 35.847], [47.432, 35.848],
            [47.434, 35.849], [47.435, 35.850]
        ],
        step: 0,
        speed: 0.003,
    });

    // 2. Artillery shell from rear
    const artyShell = mkAnim(47.458, 35.840, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАР→', '', [50,50]);
    animations.push({
        marker: artyShell,
        path: [
            [47.458, 35.840], [47.450, 35.841], [47.442, 35.842],
            [47.435, 35.844], [47.428, 35.843]
        ],
        step: 0,
        speed: 0.005,
    });

    // 3. FPV drone strike from enemy
    const fpvDrone = mkAnim(47.425, 35.849, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.RED}88" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.RED}"/>`, 'FPV→', '', [55,55]);
    animations.push({
        marker: fpvDrone,
        path: [
            [47.425, 35.849], [47.430, 35.849], [47.434, 35.850],
            [47.437, 35.850], [47.439, 35.850]
        ],
        step: 0,
        speed: 0.008,
    });

    startAnimation(animations, '_trenchDefenseAnimFrame');

    // =========================================================
    // DEFENSE SECTORS
    // =========================================================
    zoneLabel(47.458, 35.810, 'СЕКТОРИ ОБОРОНИ:', COLORS.WHT, 11);

    const sectors = [
        { lat: 47.458, lng: 35.832, text: 'ЗАХІДНИЙ ФЛАНГ', desc: 'Сектор №1\nПосадка OSM 802433726\nПТРК + ПК + стрільці\n~470м фронту', color: COLORS.BLU },
        { lat: 47.458, lng: 35.848, text: 'ЦЕНТР (ПРОГАЛИНА)', desc: 'Сектор №2\nВідкрите поле між посадками\nМінне поле + дріт\n~450м прогалина', color: COLORS.ORG },
        { lat: 47.458, lng: 35.860, text: 'СХІДНИЙ ФЛАНГ', desc: 'Сектор №3\nПосадка OSM 802433723\nПК + АГС + ПТРК + снайпер\n~870м фронту', color: COLORS.YEL },
    ];

    sectors.forEach(s => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${s.color};font-size:13px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:4px;">${s.text}</div>
                <div style="color:#bbb;font-size:10px;line-height:1.4;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${s.desc}</div>
            </div>`,
            iconAnchor: [50, 0],
        });
        window.placedMarkers.push(L.marker([s.lat, s.lng], { icon, interactive: false }).addTo(map));
    });

    // =========================================================
    // SHELTERBELT WARFARE NOTES
    // =========================================================
    mk(47.455, 35.860, `<rect x="3" y="5" width="44" height="40" fill="${COLORS.GRN}22" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="14" x2="42" y2="14" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="22" x2="42" y2="22" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="30" x2="42" y2="30" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="37" x2="42" y2="37" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.GRN}" font-size="5" font-weight="bold">ОСОБЛИВОСТІ СТЕПУ:</text><text x="25" y="20" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Видимість = 2-5 км</text><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Укриття = лише посадка</text><text x="25" y="35" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">FPV дрони = головна загроза</text><text x="25" y="42" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Рух вночі або під димом</text>`, 'УМОВИ', 'Особливості степової війни:\n- Видимість 2-5 км (відкритий степ)\n- Укриття = ТІЛЬКИ в лесопосадках\n- FPV дрони = головна загроза (літають вільно)\n- Рух між посадками = тільки вночі\n- Артилерія + дрон = панує над полем\n- Перехід через поле = 3-5 хвилин під вогнем', [75,75]);

    // =========================================================
    // INFO PANEL
    // =========================================================
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:270px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9876; ПОЗИЦІЙНА ВІЙНА НА ЛІСОПОСАДКАХ</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Зона: Роботине (47.443, 35.826) | Оріхів: 15.2 км</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Тип місцевості: <span style="color:#c8b560;font-weight:700;">Степ + лесопосадки</span></div>
                <div>Лесопосадок у зоні: <span style="color:#4caf50;font-weight:700;">6</span> (OSM verified)</div>
                <div>Ширина посадок: <span style="color:#4caf50;font-weight:700;">100-200м</span></div>
                <div>Відстань між посадками: <span style="color:#8d6e63;font-weight:700;">300-600м</span> відкрите поле</div>
                <div>Нічия земля: <span style="color:#8d6e63;font-weight:700;">300-500м</span> (прогалина)</div>
                <div>Мінних полів: <span style="color:#8d6e63;font-weight:700;">3</span> (ПТ + ПП)</div>
                <div>Кулеметних гнізд: <span style="color:#ffeb3b;font-weight:700;">3</span> у посадках</div>
                <div>Штат оборони: <span style="color:#4caf50;font-weight:700;">~120</span> осіб (рота)</div>
                <div>Артилерія: <span style="color:#9c27b0;font-weight:700;">155мм M777 (Оріхів) + 120мм</span></div>
                <div>Головна загроза: <span style="color:#ef5350;font-weight:700;">FPV дрони</span> (відкритий степ)</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                Роботине 2023: контрнаступ через лесопосадки на південь<br>
                Посадка = єдине укриття в степу | Поле = зона смерті<br>
                FPV + арт = хто панує в повітрі — той панує на полі
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([47.408, 35.825], { icon: statsIcon, interactive: false }).addTo(map));

    // Fly to Robotyne shelterbelt area
    map.flyTo([47.435, 35.843], 14, { duration: 1.5 });
}
