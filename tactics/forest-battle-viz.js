// ===== FOREST BATTLE VISUALIZATION =====
// Бій у лісі / "зеленка" — реальний сценарій (типовий ліс під Кремінною)
// Засідка + оборона лісового масиву + РЕБ + БПЛА + міни + контрснайпінг

function buildForestBattleViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._forestBattleAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.72, 36.20, '───── БІЙ У ЛІСІ / ЗЕЛЕНКА ─────', COLORS.GRN, 12);
    zoneLabel(49.69, 36.20, 'ЛІСОВИЙ МАСИВ — ЗАСАДКА ТА ОБОРОНА В УМОВАХ ОБМЕЖЕНОЇ ВИДИМОСТІ', COLORS.WHT, 9);

    // =========================================================
    // FOREST MASSIF OUTLINE
    // =========================================================
    ar([
        [49.68, 36.30], [49.69, 36.40], [49.70, 36.52], [49.71, 36.65],
        [49.72, 36.78], [49.73, 36.90], [49.74, 37.02], [49.75, 37.15],
        [49.74, 37.28], [49.73, 37.38], [49.72, 37.48],
        [49.70, 37.45], [49.68, 37.38], [49.66, 37.28], [49.65, 37.15],
        [49.64, 37.00], [49.63, 36.85], [49.62, 36.70], [49.61, 36.55],
        [49.62, 36.40], [49.63, 36.32], [49.65, 36.28]
    ], '#1b5e20', '#2e7d32', 0.18);
    zoneLabel(49.68, 36.34, 'ЛІСОВИЙ МАСИВ (зеленка)', '#66bb6a', 9);

    // Inner forest trails / clearings
    ln([[49.64, 36.55], [49.66, 36.62], [49.68, 36.70], [49.70, 36.78], [49.72, 36.85]], '#4a2c1a', 2, '4 3');
    zoneLabel(49.65, 36.53, 'ЛИСОВА ДОРОГА', COLORS.BRN, 7);

    ln([[49.66, 36.45], [49.67, 36.55], [49.69, 36.65], [49.71, 36.72]], '#4a2c1a', 2, '4 3');
    zoneLabel(49.665, 36.44, 'ПРОСІКА', COLORS.BRN, 7);

    ln([[49.70, 36.60], [49.71, 36.72], [49.72, 36.85], [49.73, 36.95]], '#4a2c1a', 2, '4 3');
    zoneLabel(49.705, 36.58, 'СТЕЖКА', COLORS.BRN, 7);

    // Dense vegetation zones (limited visibility)
    ar([
        [49.67, 36.55], [49.68, 36.62], [49.69, 36.70], [49.68, 36.75],
        [49.66, 36.68], [49.65, 36.60]
    ], '#1b5e20', '#1b5e20', 0.12);
    zoneLabel(49.675, 36.62, 'ГУСТИЙ ЛІС\nвидимість 30-50м', '#a5d6a7', 7);

    ar([
        [49.70, 36.75], [49.71, 36.82], [49.72, 36.90], [49.71, 36.95],
        [49.70, 36.88], [49.69, 36.80]
    ], '#1b5e20', '#1b5e20', 0.12);
    zoneLabel(49.705, 36.82, 'ГУСТИЙ ПІДЛІСОК\nвидимість 15-30м', '#a5d6a7', 7);

    // =========================================================
    // ENEMY — ASSAULT GROUP ENTERING FOREST FROM EAST
    // =========================================================
    zoneLabel(49.76, 36.35, 'ПРОТИВНИК — ШТУРМ ЛІСУ ЗІ СХОДУ', COLORS.RED, 10);

    // Enemy assembly area (edge of forest)
    ar([
        [49.74, 36.35], [49.76, 36.45], [49.77, 36.60], [49.76, 36.75],
        [49.77, 36.90], [49.76, 37.05], [49.77, 37.20], [49.75, 37.20],
        [49.74, 37.05], [49.75, 36.90], [49.74, 36.75], [49.75, 36.60],
        [49.74, 36.45]
    ], COLORS.RED, COLORS.RED, 0.06);

    // Enemy assault groups
    mk(49.755, 36.50, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ-1</text>`, 'ШТУРМ-ГР1', '1-а штурмова група\n~20-25 бійців + 2x БМП\nвхід через просіку (північ)\n"Мотивовані" — штурмовики', [80,80]);

    mk(49.755, 36.72, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ-2</text>`, 'ШТУРМ-ГР2', '2-а штурмова група\n~20-25 бійців\nвхід через ліс дорогу (центр)\nкулемети + РПГ', [80,80]);

    mk(49.755, 37.00, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ-3</text>`, 'ШТУРМ-ГР3', '3-я штурмова група\n~15-20 бійців\nпівденний фланг — обхід\nпотенційна загроза оточення', [80,80]);

    // Enemy BMPs on edge (won't enter deep forest)
    mk(49.765, 36.55, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2</text>`, 'БМП-КРАЙ', 'БМП-2 на околиці лісу\nне заходить глибоко — ризик FPV\nвогонь по позиціях на краю\n30мм + ПКТ', [80,80]);

    mk(49.765, 36.80, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2</text>`, 'БМП-КРАЙ2', 'БМП-2 противника\nвогонь через просіку\nприкриває штурмову групу', [80,80]);

    // Enemy assault directions into forest
    ln([[49.755, 36.50], [49.73, 36.48], [49.70, 36.46], [49.68, 36.45]], COLORS.RED, 2.5);
    ln([[49.755, 36.72], [49.73, 36.70], [49.71, 36.68], [49.69, 36.65]], COLORS.RED, 2.5);
    ln([[49.755, 37.00], [49.73, 36.98], [49.71, 36.95], [49.69, 36.92]], COLORS.RED, 2, '5 3');

    // =========================================================
    // FRIENDLY — FOREST DEFENSE POSITIONS
    // =========================================================
    zoneLabel(49.65, 36.38, 'ОБОРОНА В ЛІСІ — ПОЗИЦІЇ', COLORS.BLU, 10);

    // Platoon CP (hidden in thicket)
    mk(49.66, 36.50, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КМВ</text>`, 'КП-ВЗВОДУ', 'Командир взводу — КП в гущавині\nпланшет + Kropyva + радіо\nкерування 3 відділеннями\nмаскування: гілки + сітка', [80,80]);

    // 1st Squad — ambush position (northern trail)
    mk(49.68, 36.55, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ВІДД-1</text>`, 'ВІДДІЛЕННЯ-1', '1-е відділення — засідка\n8 бійців + ПКМ + РПГ\nпозиція за деревами на просіці\nсектор: північна стежка', [75,75]);

    // 1st squad fire sectors (covering trail)
    ln([[49.68, 36.55], [49.70, 36.52]], COLORS.BLU, 1.5, '3 3');
    ln([[49.68, 36.55], [49.70, 36.58]], COLORS.BLU, 1.5, '3 3');

    // 2nd Squad — center (main kill zone)
    mk(49.69, 36.68, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ВІДД-2</text>`, 'ВІДДІЛЕННЯ-2', '2-е відділення — центр засідки\n8 бійців + ПКМ + 2x РПГ\nосновна зона ураження\nфланговий вогонь по просіці', [75,75]);

    ln([[49.69, 36.68], [49.71, 36.65]], COLORS.BLU, 1.5, '3 3');
    ln([[49.69, 36.68], [49.71, 36.72]], COLORS.BLU, 1.5, '3 3');

    // 3rd Squad — southern flank
    mk(49.68, 36.85, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ВІДД-3</text>`, 'ВІДДІЛЕННЯ-3', '3-є відділення — південний фланг\n8 бійців + снайпер\nприкриває обхідний шлях\nрадіозв&#x27;язок з КМВ', [75,75]);

    ln([[49.68, 36.85], [49.70, 36.82]], COLORS.BLU, 1.5, '3 3');
    ln([[49.68, 36.85], [49.70, 36.90]], COLORS.BLU, 1.5, '3 3');

    // Internal connection lines (through forest)
    ln([[49.66, 36.50], [49.68, 36.55]], COLORS.BLU, 1, '2 2');
    ln([[49.66, 36.50], [49.69, 36.68]], COLORS.BLU, 1, '2 2');
    ln([[49.66, 36.50], [49.68, 36.85]], COLORS.BLU, 1, '2 2');

    // =========================================================
    // KILL ZONE — CROSSFIRE ON THE TRAIL
    // =========================================================
    zoneLabel(49.715, 36.58, 'ЗОНА УРАЖЕННЯ — ПЕРЕХРЕСТЯ СТЕЖОК', COLORS.RED, 9);

    ar([
        [49.70, 36.55], [49.72, 36.60], [49.73, 36.68], [49.72, 36.75],
        [49.71, 36.72], [49.70, 36.65], [49.69, 36.58]
    ], COLORS.RED, COLORS.RED, 0.08);
    zoneLabel(49.715, 36.64, 'ЗОНА\nУРАЖЕННЯ', COLORS.RED, 8);

    // Claymore / directional mine positions
    mk(49.70, 36.62, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><polygon points="25,15 15,35 35,35" fill="${COLORS.ORG}"/><line x1="25" y1="15" x2="25" y2="8" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">МОН</text>`, 'МОН-50', 'МОН-50 (направлена міна)\nвстановлена на стежці\nпідрив по проводу з КМВ\nсектор: 60° дальність 50м', [70,70]);

    mk(49.71, 36.70, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><polygon points="25,15 15,35 35,35" fill="${COLORS.ORG}"/><line x1="25" y1="15" x2="25" y2="8" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">МОН</text>`, 'МОН-100', 'МОН-100 (направлена міна)\nприкриває перехрестя\nсектор ураження 90°\n дальність до 100м', [70,70]);

    // Tripwire mines on approaches
    ar([
        [49.71, 36.50], [49.72, 36.55], [49.73, 36.58], [49.72, 36.53]
    ], COLORS.BRN, COLORS.BRN, 0.10);
    zoneLabel(49.72, 36.52, 'РОЗТЯЖКИ', COLORS.BRN, 7);

    ar([
        [49.72, 36.80], [49.73, 36.85], [49.73, 36.90], [49.72, 36.86]
    ], COLORS.BRN, COLORS.BRN, 0.10);
    zoneLabel(49.725, 36.83, 'ПМН-2', COLORS.BRN, 7);

    // =========================================================
    // SNIPER TEAM (deep in forest, overwatch)
    // =========================================================
    zoneLabel(49.635, 36.48, 'СНАЙПЕРСЬКА ПАРА', COLORS.YEL, 9);

    mk(49.64, 36.52, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="22" r="8" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="22" r="3" fill="${COLORS.YEL}"/><line x1="25" y1="14" x2="25" y2="30" stroke="${COLORS.YEL}" stroke-width="1"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">СНАЙП</text>`, 'СНАЙПЕР', 'Снайперська пара\nСВД / Barrett M82 + спостерігач\nтепловізійний приціл\nпозиція за 200м від засідки\nкоридор: просіка 400м', [75,75]);

    // Sniper fire lane (long axis through forest)
    ln([[49.64, 36.52], [49.66, 36.55], [49.68, 36.58], [49.70, 36.60], [49.72, 36.62]], COLORS.YEL, 1.5, '6 3');
    zoneLabel(49.68, 36.55, 'СНАЙПЕРСЬКИЙ КОРИДОР (400м)', COLORS.YEL, 7);

    // =========================================================
    // DRONE TEAM — OVER FOREST CANOPY
    // =========================================================
    mk(49.66, 36.72, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="30" r="2" fill="${COLORS.CYN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'БПЛА-ГРУПА', 'Група БпАК (в лісі)\nMavic 3T — тепловізор крізь крони\nFPV-дрони — удар по штурмовикам\nкоригування + розвідка\nрадіус: 5-10 км', [80,80]);

    circ(49.66, 36.72, 8000, COLORS.CYN, 0.02);

    // =========================================================
    // EW / ANTI-DRONE (critical in forest)
    // =========================================================
    zoneLabel(49.62, 36.62, 'РЕБ — АНТИДРОН', COLORS.PUR, 9);

    mk(49.63, 36.66, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.PUR}"/><line x1="20" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="30" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">РЕБ</text>`, 'РЕБ-АНТИДРОН', 'Станція РЕБ (портативна)\nглушіння FPV-дронів противника\nрадіус: 500-1500м\n+ пеленгація частот\nзахист позицій від БпАК', [75,75]);

    circ(49.63, 36.66, 1000, COLORS.PUR, 0.03);

    // =========================================================
    // TANK AMBUSH (on forest edge, hull-down behind trees)
    // =========================================================
    zoneLabel(49.625, 36.80, 'ТАНК — ЗАСАДКА НА ОКОЛИЦІ', COLORS.BLU, 9);

    mk(49.63, 36.82, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">Т-64БМ</text>`, 'ТАНК-ЗАСАДКА', 'Т-64БМ у засідці на околиці\nмаскування гілками + сіткою\nвогонь по броні на просіках\n3-4 постріли → зміна позиції\nне заходить у глиб лісу', [85,85]);

    // Tank fire sectors through trails
    ln([[49.63, 36.82], [49.68, 36.78]], COLORS.BLU, 2, '4 3');
    ln([[49.63, 36.82], [49.68, 36.85]], COLORS.BLU, 2, '4 3');

    // =========================================================
    // MORTAR POSITION (hidden in forest clearing)
    // =========================================================
    mk(49.65, 36.92, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">82</text>`, 'МІНОМЕТ-82', '82мм міномети (2 шт)\nна галявині в глибині лісу\nОсколкові + димові міни\nвогонь по штурмовикам на стежках\nдальність: 3-4 км', [75,75]);

    ln([[49.65, 36.92], [49.70, 36.72]], COLORS.PUR, 1.5, '5 3');
    zoneLabel(49.675, 36.80, 'МІНВOGНЬ', COLORS.PUR, 7);

    // =========================================================
    // ARTILLERY FROM REAR (outside forest)
    // =========================================================
    zoneLabel(49.48, 36.60, 'АРТИЛЕРІЙСЬКА ПІДТРИМКА (тил)', COLORS.PUR, 10);

    mk(49.50, 36.65, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">122</text>`, 'Д-30', '122мм Д-30 гаубиця (3 шт)\nпозиція за лісом — 3-5 км\nосколки по скупченням\nGIS Arta — запит через Kropyva', [80,80]);

    circ(49.50, 36.65, 12000, COLORS.PUR, 0.02);

    ln([[49.50, 36.65], [49.68, 36.60]], COLORS.PUR, 1.5, '8 4');
    ln([[49.50, 36.65], [49.71, 36.72]], COLORS.PUR, 1.5, '8 4');

    // =========================================================
    // MEDICAL + EVACUATION POINT (in forest rear)
    // =========================================================
    mk(49.62, 36.72, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДП</text>`, 'МЕДПУНКТ', 'Медичний пункт (в укритті)\nсаніструктор взводу\nперша допомога + джгут\nевакуація ношами через ліс', [70,70]);

    // Evac route through forest
    ln([[49.62, 36.72], [49.60, 36.70], [49.58, 36.68]], COLORS.PNK, 2.5, '4 3');
    zoneLabel(49.59, 36.69, 'МЕДЕВАК → ТИЛ', COLORS.PNK, 7);

    // =========================================================
    // AMBUSH SEQUENCE MARKERS
    // =========================================================
    zoneLabel(49.715, 36.45, 'ЕТАПИ ЗАСАДКИ', COLORS.ORG, 9);

    mk(49.72, 36.48, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.ORG}" font-size="16" font-weight="bold">1</text>`, 'ЕТАП-1', 'Етап 1: ПРОПУСК\nПротивник входить у ліс\nне відкриваємо вогонь\nдаємо зайти у зону ураження', [60,60]);

    mk(49.72, 36.58, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.RED}" font-size="16" font-weight="bold">2</text>`, 'ЕТАП-2', 'Етап 2: ВІДКРИТТЯ ВOGНЮ\nМОН-50/100 + ПКМ одночасно\nперехресний вогонь з 3 боків\nснайпер — офіцери / радіо', [60,60]);

    mk(49.72, 36.68, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.BLU}" font-size="16" font-weight="bold">3</text>`, 'ЕТАП-3', 'Етап 3: ЗАЧИСТКА\nШтурмові групи відступають\n3-є відділення — фланговий удар\nміномети + FPV по відступаючих', [60,60]);

    // =========================================================
    // FOREST COMBAT NOTES (environmental factors)
    // =========================================================
    mk(49.64, 36.40, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.GRN}22" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="15" x2="42" y2="15" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="25" x2="42" y2="25" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="32" x2="42" y2="32" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.GRN}" font-size="5" font-weight="bold">ОСОБЛИВОСТІ ЛІСУ:</text><text x="25" y="22" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Радіо = 30-50% втрата</text><text x="25" y="29" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Видимість = 30-80м</text><text x="25" y="36" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Шум кроків = 50-100м</text>`, 'УМОВИ', 'Особливості бою в лісі:\n- Радиозв&#x27;язок погіршений на 50%\n- Видимість 30-80 метрів\n- Кроки чутно за 50-100м\n- Дрони втрачають сигнал крізь крони\n- Орієнтування утруднене\n- Тепловізор — головна перевага', [75,75]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Enemy assault group advancing into forest
    const enemyMove = mkAnim(49.755, 36.50, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ</text>`, 'ШТУРМ→', '', [70,70]);
    animations.push({
        marker: enemyMove,
        path: [
            [49.755, 36.50], [49.74, 36.49], [49.73, 36.48], [49.72, 36.47],
            [49.71, 36.46], [49.70, 36.46], [49.69, 36.46], [49.68, 36.47]
        ],
        step: 0,
        speed: 0.003,
    });

    // 2. FPV drone strike from forest toward enemy
    const fpvStrike = mkAnim(49.66, 36.72, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.CYN}88" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.CYN}"/>`, 'FPV→', '', [55,55]);
    animations.push({
        marker: fpvStrike,
        path: [
            [49.66, 36.72], [49.68, 36.74], [49.70, 36.76], [49.72, 36.78],
            [49.74, 36.80], [49.755, 36.82]
        ],
        step: 0,
        speed: 0.007,
    });

    // 3. Mortar round landing on trail
    const mortarRound = mkAnim(49.65, 36.92, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'МІНА→', '', [50,50]);
    animations.push({
        marker: mortarRound,
        path: [
            [49.65, 36.92], [49.66, 36.88], [49.67, 36.84], [49.68, 36.80],
            [49.69, 36.76], [49.70, 36.72]
        ],
        step: 0,
        speed: 0.006,
    });

    // 4. Sniper shot (fast, small)
    const sniperShot = mkAnim(49.64, 36.52, `<line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="40" cy="25" r="4" fill="${COLORS.YEL}"/>`, 'СНАЙП→', '', [45,45]);
    animations.push({
        marker: sniperShot,
        path: [
            [49.64, 36.52], [49.65, 36.54], [49.66, 36.56], [49.67, 36.58],
            [49.68, 36.59], [49.69, 36.60], [49.70, 36.61]
        ],
        step: 0,
        speed: 0.01,
    });

    // 5. Artillery shell from rear
    const artyShell = mkAnim(49.50, 36.65, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАР→', '', [50,50]);
    animations.push({
        marker: artyShell,
        path: [
            [49.50, 36.65], [49.54, 36.64], [49.58, 36.63], [49.62, 36.62],
            [49.66, 36.61], [49.70, 36.60]
        ],
        step: 0,
        speed: 0.005,
    });

    startAnimation(animations, '_forestBattleAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4caf50;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:290px;">
            <div style="color:#4caf50;font-weight:700;font-size:11px;margin-bottom:4px;">БІЙ У ЛІСІ / ЗЕЛЕНКА</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">ОБОРОНА ВЗВОДУ (25-30 бійців):</div>
                <div>&#8226; <span style="color:#40c4ff;">1-е відділення</span> — засідка північ</div>
                <div>&#8226; <span style="color:#40c4ff;">2-е відділення</span> — центр зони ураження</div>
                <div>&#8226; <span style="color:#40c4ff;">3-є відділення</span> — південний фланг</div>

                <div style="color:#ff9800;font-weight:700;margin-top:4px;">ПАСТКИ ТА МІНИ:</div>
                <div>&#8226; МОН-50/100 — на стежках</div>
                <div>&#8226; ПМН-2 — на підступах</div>
                <div>&#8226; Розтяжки — на обхідних шляхах</div>

                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ПІДТРИМКА:</div>
                <div>&#8226; Снайперська пара — коридор 400м</div>
                <div>&#8226; Т-64БМ — засідка на околиці</div>
                <div>&#8226; 82мм міномети — галявина в лісі</div>
                <div>&#8226; БПЛА Mavic 3T — тепловізор</div>
                <div>&#8226; РЕБ — антидрон захист</div>
                <div>&#8226; 122мм Д-30 — артилерія з тилу</div>

                <div style="color:#ef5350;font-weight:700;margin-top:4px;">ТАКТИКА ЗАСАДКИ:</div>
                <div>&#8226; 1) Пропуск — даємо зайти в зону</div>
                <div>&#8226; 2) Вогонь — МОН + ПКМ + снайпер</div>
                <div>&#8226; 3) Зачистка — фланговий удар + FPV</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                Видимість: 30-80м | Радіо: -50% | Шум: 50-100м<br>
                Ключ: хто має тепловізор і засідку — той панує в зеленці
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.44, 36.30], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to show the forest battle
    map.flyTo([49.66, 36.68], 13, { duration: 1.5 });
}
