// ===== FOREST BATTLE VISUALIZATION =====
// Бій у лісі / "зеленка" — реальний сценарій
// Ліс на північ від Кремінної (Сріблянський ліс, 49.07–49.15°N, 38.21–38.26°E)
// Координати на основі OpenStreetMap (Overpass API, 2026-04-14)
// Засідка + оборона лісового масиву + РЕБ + БПЛА + міни + контрснайпінг

function buildForestBattleViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._forestBattleAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.160, 38.17, '───── БІЙ У ЛІСІ / ЗЕЛЕНКА ─────', COLORS.GRN, 12);
    zoneLabel(49.145, 38.17, 'СРІБЛЯНСЬКИЙ ЛІС — ПІВНІЧ КРЕМІННОЇ\nКоординати: OpenStreetMap (2026-04-14)', COLORS.WHT, 9);

    // =========================================================
    // FOREST MASSIF OUTLINE (OSM Way #2: 9.0×3.5 km, спрощено з 158 точок)
    // =========================================================
    ar([
        [49.070, 38.215], [49.072, 38.235], [49.078, 38.252], [49.095, 38.264],
        [49.120, 38.260], [49.145, 38.250], [49.151, 38.235], [49.148, 38.222],
        [49.130, 38.215], [49.100, 38.214]
    ], '#1b5e20', '#2e7d32', 0.18);
    zoneLabel(49.075, 38.218, 'ЛІСОВИЙ МАСИВ (Сріблянський ліс)\nOSM: 9.0×3.5 км, сосновий', '#66bb6a', 8);

    // Inner forest trails / clearings (OSM tracks)
    ln([[49.075, 38.220], [49.090, 38.232], [49.105, 38.244], [49.120, 38.255]], '#4a2c1a', 2, '4 3');
    zoneLabel(49.078, 38.218, 'ЛИСОВА ДОРОГА\n(OSM track)', COLORS.BRN, 7);

    ln([[49.085, 38.222], [49.095, 38.240], [49.108, 38.258]], '#4a2c1a', 2, '4 3');
    zoneLabel(49.087, 38.220, 'ПРОСІКА', COLORS.BRN, 7);

    ln([[49.085, 38.230], [49.095, 38.248], [49.100, 38.255]], '#4a2c1a', 2, '4 3');
    zoneLabel(49.087, 38.228, 'СТЕЖКА', COLORS.BRN, 7);

    // Dense vegetation zones (limited visibility)
    ar([
        [49.100, 38.220], [49.110, 38.230], [49.120, 38.245],
        [49.115, 38.258], [49.100, 38.255], [49.095, 38.240]
    ], '#1b5e20', '#1b5e20', 0.12);
    zoneLabel(49.105, 38.237, 'ГУСТИЙ ЛІС\nвидимість 30-50м', '#a5d6a7', 7);

    ar([
        [49.080, 38.225], [49.090, 38.238], [49.095, 38.250],
        [49.088, 38.258], [49.078, 38.248], [49.075, 38.235]
    ], '#1b5e20', '#1b5e20', 0.12);
    zoneLabel(49.084, 38.240, 'ГУСТИЙ ПІДЛІСОК\nвидимість 15-30м', '#a5d6a7', 7);

    // =========================================================
    // REFERENCE POINTS (OSM settlements)
    // =========================================================
    zoneLabel(49.047, 38.218, 'м. КРЕМІННА (OSM: 49.0463, 38.2179)', COLORS.WHT, 8);
    zoneLabel(49.102, 38.191, 'с. Житлівка (OSM)', COLORS.WHT, 7);
    zoneLabel(49.003, 38.114, 'с. Діброва (OSM)', COLORS.WHT, 7);

    // Siverskyi Donets river reference
    zoneLabel(49.060, 38.400, 'р. Сіверський Донець →', COLORS.CYN, 8);

    // Krasna river
    zoneLabel(49.065, 38.150, '← р. Красна', COLORS.CYN, 7);

    // =========================================================
    // ENEMY — ASSAULT GROUP ENTERING FOREST FROM EAST
    // =========================================================
    zoneLabel(49.155, 38.22, 'ПРОТИВНИК — ШТУРМ ЛІСУ ЗІ СХОДУ', COLORS.RED, 10);

    // Enemy assembly area (eastern edge of OSM forest bounds)
    ar([
        [49.100, 38.262], [49.120, 38.265], [49.140, 38.263], [49.155, 38.258],
        [49.160, 38.245], [49.155, 38.235], [49.140, 38.230], [49.120, 38.232],
        [49.105, 38.240], [49.100, 38.250]
    ], COLORS.RED, COLORS.RED, 0.06);

    // Enemy assault groups
    mk(49.130, 38.255, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ-1</text>`, 'ШТУРМ-ГР1', '1-а штурмова група\n~20-25 бійців + 2x БМП\nвхід через просіку (північ)\nOSM: східний край лісу', [80,80]);

    mk(49.115, 38.260, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ-2</text>`, 'ШТУРМ-ГР2', '2-а штурмова група\n~20-25 бійців\nвхід через ліс дорогу (центр)\nкулемети + РПГ', [80,80]);

    mk(49.100, 38.258, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ-3</text>`, 'ШТУРМ-ГР3', '3-я штурмова група\n~15-20 бійців\nпівденний фланг — обхід\nпотенціальна загроза оточення', [80,80]);

    // Enemy BMPs on edge (won't enter deep forest)
    mk(49.135, 38.260, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2</text>`, 'БМП-КРАЙ', 'БМП-2 на околиці лісу\nOSM: східна межа лісу\n30мм + ПКТ\nне заходить глибоко — ризик FPV', [80,80]);

    mk(49.120, 38.262, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2</text>`, 'БМП-КРАЙ2', 'БМП-2 противника\nвогонь через просіку\nприкриває штурмову групу', [80,80]);

    // Enemy assault directions into forest
    ln([[49.130, 38.255], [49.120, 38.250], [49.110, 38.245], [49.103, 38.238]], COLORS.RED, 2.5);
    ln([[49.115, 38.260], [49.108, 38.252], [49.103, 38.244], [49.100, 38.238]], COLORS.RED, 2.5);
    ln([[49.100, 38.258], [49.098, 38.248], [49.096, 38.242], [49.093, 38.238]], COLORS.RED, 2, '5 3');

    // =========================================================
    // FRIENDLY — FOREST DEFENSE POSITIONS
    // =========================================================
    zoneLabel(49.065, 38.19, 'ОБОРОНА В ЛІСІ — ПОЗИЦІЇ', COLORS.BLU, 10);

    // Platoon CP (western edge of forest, near Zhutlivka)
    mk(49.098, 38.222, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КМВ</text>`, 'КП-ВЗВОДУ', 'Командир взводу — КП в гущавині\nпланшет + Kropyva + радіо\nкерування 3 відділеннями\nзахідний край лісу (OSM)', [80,80]);

    // 1st Squad — ambush position (northern trail)
    mk(49.103, 38.228, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ВІДД-1</text>`, 'ВІДДІЛЕННЯ-1', '1-е відділення — засідка\n8 бійців + ПКМ + РПГ\nпозиція за деревами на просіці\n~706м від КП | сектор: пн. стежка', [75,75]);

    // 1st squad fire sectors
    ln([[49.103, 38.228], [49.110, 38.234]], COLORS.BLU, 1.5, '3 3');
    ln([[49.103, 38.228], [49.108, 38.242]], COLORS.BLU, 1.5, '3 3');

    // 2nd Squad — center (main kill zone flank)
    mk(49.100, 38.230, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ВІДД-2</text>`, 'ВІДДІЛЕННЯ-2', '2-е відділення — центр засідки\n8 бійців + ПКМ + 2x РПГ\nосновна зона ураження\n~622м від КП | ~670м до зони', [75,75]);

    ln([[49.100, 38.230], [49.106, 38.236]], COLORS.BLU, 1.5, '3 3');
    ln([[49.100, 38.230], [49.104, 38.244]], COLORS.BLU, 1.5, '3 3');

    // 3rd Squad — southern flank
    mk(49.093, 38.232, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ВІДД-3</text>`, 'ВІДДІЛЕННЯ-3', '3-є відділення — південний фланг\n8 бійців + снайпер\nприкриває обхідний шлях\n~913м від КП | ~790м від ВІДД-2', [75,75]);

    ln([[49.093, 38.232], [49.100, 38.238]], COLORS.BLU, 1.5, '3 3');
    ln([[49.093, 38.232], [49.098, 38.248]], COLORS.BLU, 1.5, '3 3');

    // Internal connection lines (through forest)
    ln([[49.098, 38.222], [49.103, 38.228]], COLORS.BLU, 1, '2 2');
    ln([[49.098, 38.222], [49.100, 38.230]], COLORS.BLU, 1, '2 2');
    ln([[49.098, 38.222], [49.093, 38.232]], COLORS.BLU, 1, '2 2');

    // =========================================================
    // KILL ZONE — CROSSFIRE ON THE TRAIL
    // =========================================================
    zoneLabel(49.110, 38.225, 'ЗОНА УРАЖЕННЯ — ПЕРЕХРЕСТЯ СТЕЖОК', COLORS.RED, 9);

    ar([
        [49.098, 38.232], [49.100, 38.238], [49.103, 38.244], [49.108, 38.248],
        [49.110, 38.242], [49.108, 38.236], [49.105, 38.232], [49.100, 38.230]
    ], COLORS.RED, COLORS.RED, 0.08);
    zoneLabel(49.103, 38.240, 'ЗОНА\nУРАЖЕННЯ', COLORS.RED, 8);

    // Claymore / directional mine positions
    mk(49.101, 38.234, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><polygon points="25,15 15,35 35,35" fill="${COLORS.ORG}"/><line x1="25" y1="15" x2="25" y2="8" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">МОН</text>`, 'МОН-50', 'МОН-50 (направлена міна)\nвстановлена на стежці\nпідрив по проводу з КМВ\nсектор: 60° дальність 50м', [70,70]);

    mk(49.105, 38.242, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><polygon points="25,15 15,35 35,35" fill="${COLORS.ORG}"/><line x1="25" y1="15" x2="25" y2="8" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">МОН</text>`, 'МОН-100', 'МОН-100 (направлена міна)\nприкриває перехрестя\nсектор ураження 90°\n дальність до 100м', [70,70]);

    // Tripwire mines on approaches
    ar([
        [49.107, 38.244], [49.108, 38.248], [49.106, 38.250], [49.105, 38.246]
    ], COLORS.BRN, COLORS.BRN, 0.10);
    zoneLabel(49.107, 38.248, 'РОЗТЯЖКИ', COLORS.BRN, 7);

    ar([
        [49.093, 38.244], [49.095, 38.248], [49.094, 38.252], [49.092, 38.248]
    ], COLORS.BRN, COLORS.BRN, 0.10);
    zoneLabel(49.094, 38.250, 'ПМН-2', COLORS.BRN, 7);

    // =========================================================
    // SNIPER TEAM (western forest edge, overwatch)
    // =========================================================
    zoneLabel(49.085, 38.210, 'СНАЙПЕРСЬКА ПАРА', COLORS.YEL, 9);

    mk(49.090, 38.218, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="22" r="8" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="22" r="3" fill="${COLORS.YEL}"/><line x1="25" y1="14" x2="25" y2="30" stroke="${COLORS.YEL}" stroke-width="1"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">СНАЙП</text>`, 'СНАЙПЕР', 'Снайперська пара\nСВД / Barrett M82 + спостерігач\nтепловізійний приціл\n~1296м до зони ураження\nкоридор: просіка через ліс', [75,75]);

    // Sniper fire lane
    ln([[49.090, 38.218], [49.095, 38.225], [49.100, 38.232], [49.103, 38.238]], COLORS.YEL, 1.5, '6 3');
    zoneLabel(49.096, 38.224, 'СНАЙПЕРСЬКИЙ КОРИДОР (~1300м)', COLORS.YEL, 7);

    // =========================================================
    // DRONE TEAM — OVER FOREST CANOPY
    // =========================================================
    mk(49.098, 38.226, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="30" r="2" fill="${COLORS.CYN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'БПЛА-ГРУПА', 'Група БпАК (в лісі)\nMavic 3T — тепловізор крізь крони\nFPV-дрони — удар по штурмовикам\nкоригування + розвідка\nрадіус: 5-10 км', [80,80]);

    circ(49.098, 38.226, 8000, COLORS.CYN, 0.02);

    // =========================================================
    // EW / ANTI-DRONE (critical in forest)
    // =========================================================
    zoneLabel(49.080, 38.208, 'РЕБ — АНТИДРОН', COLORS.PUR, 9);

    mk(49.085, 38.212, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.PUR}"/><line x1="20" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="30" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">РЕБ</text>`, 'РЕБ-АНТИДРОН', 'Станція РЕБ (портативна)\nглушіння FPV-дронів противника\nрадіус: 500-1500м\n+ пеленгація частот\nзахист позицій від БпАК', [75,75]);

    circ(49.085, 38.212, 1000, COLORS.PUR, 0.03);

    // =========================================================
    // TANK AMBUSH (on forest edge, hull-down behind trees)
    // =========================================================
    zoneLabel(49.078, 38.198, 'ТАНК — ЗАСАДКА НА ОКОЛИЦІ', COLORS.BLU, 9);

    mk(49.082, 38.204, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">Т-64БМ</text>`, 'ТАНК-ЗАСАДКА', 'Т-64БМ у засідці на околиці\nзахідний край лісу (OSM)\nвогонь по броні на просіках\n~1851м до зони ураження\n3-4 постріли → зміна позиції', [85,85]);

    // Tank fire sectors through trails
    ln([[49.082, 38.204], [49.095, 38.228]], COLORS.BLU, 2, '4 3');
    ln([[49.082, 38.204], [49.098, 38.238]], COLORS.BLU, 2, '4 3');

    // =========================================================
    // MORTAR POSITION (hidden in forest clearing)
    // =========================================================
    mk(49.088, 38.210, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">82</text>`, 'МІНОМЕТ-82', '82мм міномети (2 шт)\nна галявині в глибині лісу\nОсколкові + димові міни\n~1896м до зони ураження\nдальність: 3-4 км', [75,75]);

    ln([[49.088, 38.210], [49.103, 38.238]], COLORS.PUR, 1.5, '5 3');
    zoneLabel(49.095, 38.222, 'МІНВOGНЬ', COLORS.PUR, 7);

    // =========================================================
    // ARTILLERY FROM REAR (outside forest, near Dibrova)
    // =========================================================
    zoneLabel(48.990, 38.160, 'АРТИЛЕРІЙСЬКА ПІДТРИМКА (тил)\nOSM: поблизу Діброви', COLORS.PUR, 10);

    mk(49.000, 38.180, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">122</text>`, 'Д-30', '122мм Д-30 гаубиця (3 шт)\nOSM: ~12.2 км від зони ураження\nпоблизу Діброви (49.0025, 38.1142)\nGIS Arta — запит через Kropyva\nдальність: 15.3 км', [80,80]);

    circ(49.000, 38.180, 12000, COLORS.PUR, 0.02);

    ln([[49.000, 38.180], [49.060, 38.210], [49.103, 38.238]], COLORS.PUR, 1.5, '8 4');

    // =========================================================
    // MEDICAL + EVACUATION POINT (in forest rear)
    // =========================================================
    mk(49.096, 38.220, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДП</text>`, 'МЕДПУНКТ', 'Медичний пункт (в укритті)\nсаніструктор взводу\nперша допомога + джгут\n~265м від КП\nевакуація через західний край → Житлівка', [70,70]);

    // Evac route through forest to Zhutlivka
    ln([[49.096, 38.220], [49.098, 38.200], [49.100, 38.191]], COLORS.PNK, 2.5, '4 3');
    zoneLabel(49.098, 38.196, 'МЕДЕВАК → Житлівка', COLORS.PNK, 7);

    // =========================================================
    // AMBUSH SEQUENCE MARKERS
    // =========================================================
    zoneLabel(49.118, 38.220, 'ЕТАПИ ЗАСАДКИ', COLORS.ORG, 9);

    mk(49.120, 38.224, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.ORG}" font-size="16" font-weight="bold">1</text>`, 'ЕТАП-1', 'Етап 1: ПРОПУСК\nПротивник входить у ліс\nне відкриваємо вогонь\nдаємо зайти у зону ураження', [60,60]);

    mk(49.120, 38.238, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.RED}" font-size="16" font-weight="bold">2</text>`, 'ЕТАП-2', 'Етап 2: ВІДКРИТТЯ ВOGНЮ\nМОН-50/100 + ПКМ одночасно\nперехресний вогонь з 3 боків\nснайпер — офіцери / радіо', [60,60]);

    mk(49.120, 38.252, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.BLU}" font-size="16" font-weight="bold">3</text>`, 'ЕТАП-3', 'Етап 3: ЗАЧИСТКА\nШтурмові групи відступають\n3-є відділення — фланговий удар\nміномети + FPV по відступаючих', [60,60]);

    // =========================================================
    // FOREST COMBAT NOTES (environmental factors)
    // =========================================================
    mk(49.070, 38.200, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.GRN}22" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="15" x2="42" y2="15" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="25" x2="42" y2="25" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="32" x2="42" y2="32" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.GRN}" font-size="5" font-weight="bold">ОСОБЛИВОСТІ ЛІСУ:</text><text x="25" y="22" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Радіо = 30-50% втрата</text><text x="25" y="29" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Видимість = 30-80м</text><text x="25" y="36" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">Шум кроків = 50-100м</text>`, 'УМОВИ', 'Особливості бою в лісі:\n- Радіозв&#x27;язок погіршений на 50%\n- Видимість 30-80 метрів\n- Кроки чутно за 50-100м\n- Дрони втрачають сигнал крізь крони\n- Орієнтування утруднене\n- Тепловізор — головна перевага', [75,75]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Enemy assault group advancing into forest
    const enemyMove = mkAnim(49.130, 38.255, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ</text>`, 'ШТУРМ→', '', [70,70]);
    animations.push({
        marker: enemyMove,
        path: [
            [49.130, 38.255], [49.120, 38.250], [49.115, 38.246], [49.110, 38.242],
            [49.108, 38.240], [49.105, 38.238], [49.103, 38.236]
        ],
        step: 0,
        speed: 0.003,
    });

    // 2. FPV drone strike from forest toward enemy
    const fpvStrike = mkAnim(49.098, 38.226, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.CYN}88" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.CYN}"/>`, 'FPV→', '', [55,55]);
    animations.push({
        marker: fpvStrike,
        path: [
            [49.098, 38.226], [49.105, 38.234], [49.112, 38.242], [49.118, 38.250],
            [49.125, 38.256], [49.130, 38.260]
        ],
        step: 0,
        speed: 0.007,
    });

    // 3. Mortar round landing on trail
    const mortarRound = mkAnim(49.088, 38.210, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'МІНА→', '', [50,50]);
    animations.push({
        marker: mortarRound,
        path: [
            [49.088, 38.210], [49.092, 38.218], [49.096, 38.226], [49.100, 38.234],
            [49.103, 38.238]
        ],
        step: 0,
        speed: 0.006,
    });

    // 4. Sniper shot (fast, small)
    const sniperShot = mkAnim(49.090, 38.218, `<line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="40" cy="25" r="4" fill="${COLORS.YEL}"/>`, 'СНАЙП→', '', [45,45]);
    animations.push({
        marker: sniperShot,
        path: [
            [49.090, 38.218], [49.093, 38.224], [49.096, 38.230], [49.099, 38.234],
            [49.101, 38.236], [49.103, 38.238]
        ],
        step: 0,
        speed: 0.01,
    });

    // 5. Artillery shell from rear
    const artyShell = mkAnim(49.000, 38.180, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАР→', '', [50,50]);
    animations.push({
        marker: artyShell,
        path: [
            [49.000, 38.180], [49.025, 38.195], [49.050, 38.210], [49.075, 38.225],
            [49.090, 38.233], [49.103, 38.238]
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
            <div style="color:#888;font-size:9px;margin-bottom:4px;">OSM: Сріблянський ліс, північ Кремінної</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">ОБОРОНА ВЗВОДУ (25-30 бійців):</div>
                <div>&#8226; <span style="color:#40c4ff;">1-е відділення</span> — засідка північ (~706м від КП)</div>
                <div>&#8226; <span style="color:#40c4ff;">2-е відділення</span> — центр зони (~622м від КП)</div>
                <div>&#8226; <span style="color:#40c4ff;">3-є відділення</span> — пд. фланг (~913м від КП)</div>

                <div style="color:#ff9800;font-weight:700;margin-top:4px;">ПАСТКИ ТА МІНИ:</div>
                <div>&#8226; МОН-50/100 — на стежках</div>
                <div>&#8226; ПМН-2 — на підступах</div>
                <div>&#8226; Розтяжки — на обхідних шляхах</div>

                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ПІДТРИМКА:</div>
                <div>&#8226; Снайпер — коридор ~1300м</div>
                <div>&#8226; Т-64БМ — засідка околиця (~1851м)</div>
                <div>&#8226; 82мм міномети — галявина (~1896м)</div>
                <div>&#8226; БПЛА Mavic 3T — тепловізор</div>
                <div>&#8226; РЕБ — антидрон захист</div>
                <div>&#8226; 122мм Д-30 — тил (~12.2 км)</div>

                <div style="color:#ef5350;font-weight:700;margin-top:4px;">ТАКТИКА ЗАСАДКИ:</div>
                <div>&#8226; 1) Пропуск — даємо зайти в зону</div>
                <div>&#8226; 2) Вогонь — МОН + ПКМ + снайпер</div>
                <div>&#8226; 3) Зачистка — фланговий удар + FPV</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                Видимість: 30-80м | Радіо: -50% | Шум: 50-100м<br>
                Ліс: 9.0×3.5 км (OSM) | Центр: 49.10°N, 38.24°E<br>
                Ключ: хто має тепловізор і засідку — панує в зеленці
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.940, 38.140], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to the real Serebryansky Forest area north of Kreminna
    map.flyTo([49.100, 38.240], 14, { duration: 1.5 });
}
