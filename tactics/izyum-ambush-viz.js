// ===== IZYUM FOREST AMBUSH VISUALIZATION =====
// Засідка в лісі на Ізюмському напрямку
// Лісовий масив між Бражківкою та Сулигівкою (Харківська область)
// Сценарій: мінування дороги + засідка на логістичному маршруті + контрзасідка
// За мотивами реального бойового епізоду (літо 2022)

function buildIzyumAmbushViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._izyumAmbushAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.075, 37.17, '───── ЗАСІДКА В ЛІСІ — ІЗЮМСКИЙ НАПРЯМОК ─────', COLORS.GRN, 12);
    zoneLabel(49.07, 37.17, 'ЛІСОВИЙ МАСИВ БРАЖКІВКА-СУЛИГІВКА\nХарківська область — літо 2022', COLORS.WHT, 9);

    // =========================================================
    // TERRAIN — FOREST MASSIF
    // =========================================================
    ar([
        [49.025, 37.17], [49.03, 37.21], [49.035, 37.26], [49.045, 37.29],
        [49.06, 37.31], [49.07, 37.3], [49.08, 37.27], [49.085, 37.24],
        [49.083, 37.2], [49.075, 37.17], [49.06, 37.15], [49.045, 37.14],
        [49.035, 37.15]
    ], '#1b5e20', '#2e7d32', 0.18);
    zoneLabel(49.04, 37.16, 'ЛІСОВИЙ МАСИВ\n9×4 км, сосновий ліс', '#66bb6a', 8);

    // Dense vegetation zones
    ar([
        [49.05, 37.19], [49.06, 37.22], [49.065, 37.26],
        [49.06, 37.29], [49.05, 37.28], [49.045, 37.24]
    ], '#1b5e20', '#1b5e20', 0.12);
    zoneLabel(49.053, 37.245, 'ГУСТИЙ ЛІС\nвидимість 30-50м', '#a5d6a7', 7);

    // =========================================================
    // SUPPLY ROAD — ENEMY LOGISTICS ROUTE
    // =========================================================
    ln([
        [49.02, 37.09], [49.03, 37.13], [49.04, 37.17], [49.05, 37.21],
        [49.055, 37.25], [49.065, 37.29], [49.075, 37.33], [49.085, 37.37]
    ], COLORS.RED, 3);
    zoneLabel(49.015, 37.09, 'ЛОГІСТИЧНИЙ ШЛЯХ ПРОТИВНИКА', COLORS.RED, 9);

    // Crossroads — key terrain feature
    ln([
        [49.035, 37.19], [49.045, 37.21], [49.055, 37.23],
        [49.065, 37.25], [49.075, 37.27]
    ], COLORS.RED, 2, '5 3');
    zoneLabel(49.07, 37.28, 'ПЕРЕХРЕСТЯ ДОРОГ', COLORS.RED, 8);

    // =========================================================
    // REFERENCE POINTS
    // =========================================================
    zoneLabel(49.005, 37.19, '← м. ІЗЮМ (49.19°N, 37.28°E) ← Бражківка (49.04°N, 37.22°E)', COLORS.WHT, 8);
    zoneLabel(49.09, 37.31, 'НАПРЯМОК НА СВЯТОГІРСЬК →', COLORS.WHT, 7);
    zoneLabel(49.09, 37.19, 'ЛІНІЯ БОЙОВОГО ЗІСТРІЧЕННЯ (ЛБС)', COLORS.YEL, 9);

    // =========================================================
    // PHASE LINE — LBS
    // =========================================================
    ln([
        [49.085, 37.13], [49.087, 37.19], [49.085, 37.25],
        [49.083, 37.31], [49.085, 37.37]
    ], COLORS.YEL, 2, '8 4');
    zoneLabel(49.083, 37.125, 'ЛБС', COLORS.YEL, 10);

    // =========================================================
    // TM-62 MINE POSITIONS ON ROAD
    // =========================================================
    zoneLabel(49.055, 37.225, 'МІННЕ ПОЛЕ — ТМ-62 (2 шт)', COLORS.ORG, 9);

    mk(49.057, 37.235, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="25" cy="25" r="8" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ТМ</text>`, 'ТМ-62 #1', 'Протитанкова міна ТМ-62\nвстановлена на колії дороги\nнатискна дія\nприкриває північну смугу', [70,70]);

    mk(49.059, 37.245, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="25" cy="25" r="8" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ТМ</text>`, 'ТМ-62 #2', 'Протитанкова міна ТМ-62\nдруга колія\nнатискна дія\nприкриває південну смугу', [70,70]);

    // Mine zone highlight
    ar([
        [49.053, 37.228], [49.063, 37.232], [49.065, 37.25],
        [49.063, 37.255], [49.053, 37.25]
    ], COLORS.ORG, COLORS.ORG, 0.10);

    // =========================================================
    // DESTROYED MT-LB (motoliga) — AFTERMATH
    // =========================================================
    mk(49.061, 37.24, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">МТ-ЛБ</text>`, 'МТ-ЛБ ЗНИЩЕНИЙ', 'МТ-ЛБ противника — підірвався\nна двох мінах ТМ-62 одночасно\n2 загиблих, техніка згоріла\n~40м від позицій засідки', [85,85]);

    // =========================================================
    // FRIENDLY FORCES — AMBUSH GROUPS (3 groups, ~25 total)
    // =========================================================
    zoneLabel(49.04, 37.25, 'ГРУПИ СПЕЦПІДРОЗДІЛУ — ЗАСІДКА', COLORS.BLU, 10);

    // GROUP 1 — Northern flank
    mk(49.063, 37.228, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ГР-1</text>`, 'ГРУПА-1 (північ)', '1-а група — північний фланг\n~8-9 бійців + ПКМ + РПГ\nпозиція за деревами\nогляд: дорога + перехрестя', [80,80]);

    // Fire sectors Group 1
    ln([[49.063, 37.228], [49.065, 37.238]], COLORS.BLU, 1.5, '3 3');
    ln([[49.063, 37.228], [49.069, 37.24]], COLORS.BLU, 1.5, '3 3');

    // GROUP 2 — Center (main kill zone)
    mk(49.057, 37.232, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ГР-2</text>`, 'ГРУПА-2 (центр)', '2-а група — центр засідки\n~8-9 бійців + ПКМ + ГП-25\nосновна зона ураження\nогляд: дорога + зона підриву', [80,80]);

    ln([[49.057, 37.232], [49.061, 37.24]], COLORS.BLU, 1.5, '3 3');
    ln([[49.057, 37.232], [49.065, 37.242]], COLORS.BLU, 1.5, '3 3');

    // GROUP 3 — Southern flank
    mk(49.049, 37.238, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="32" r="2" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ГР-3</text>`, 'ГРУПА-3 (пд. фланг)', '3-я група — південний фланг\n~8-9 бійців + снайпер\nприкриває обхідний шлях\nогляд: перехрестя + дорога', [80,80]);

    ln([[49.049, 37.238], [49.055, 37.242]], COLORS.BLU, 1.5, '3 3');
    ln([[49.049, 37.238], [49.059, 37.248]], COLORS.BLU, 1.5, '3 3');

    // Connection lines between groups
    ln([[49.063, 37.228], [49.057, 37.232]], COLORS.BLU, 1, '2 2');
    ln([[49.057, 37.232], [49.049, 37.238]], COLORS.BLU, 1, '2 2');

    // =========================================================
    // GROUP COMMANDER
    // =========================================================
    mk(49.055, 37.225, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КГ</text>`, 'КОМАНДИР ГРУПИ', 'Командир групи — КП в окопі\nкерування 3 групами\nрадіостанція + планшет\n~100м від зони підриву', [80,80]);

    // =========================================================
    // KILL ZONE — CROSSFIRE
    // =========================================================
    ar([
        [49.053, 37.23], [49.057, 37.235], [49.063, 37.238],
        [49.067, 37.242], [49.069, 37.248], [49.065, 37.252],
        [49.059, 37.25], [49.055, 37.245], [49.051, 37.24]
    ], COLORS.RED, COLORS.RED, 0.08);
    zoneLabel(49.061, 37.242, 'ЗОНА\nУРАЖЕННЯ', COLORS.RED, 8);

    // =========================================================
    // VOUG-25 GRENADE LAUNCHER POSITIONS
    // =========================================================
    zoneLabel(49.053, 37.262, 'ГП-25 ПОЗИЦІЇ', COLORS.YEL, 9);

    mk(49.057, 37.258, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="20" r="6" fill="${COLORS.YEL}"/><line x1="25" y1="14" x2="25" y2="30" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ГП-25</text>`, 'ГП-25 #1', 'ГП-25 «Костер»\nперший постріл — в дерево над своїми\nкоригування → другий → третій в дорогу\n40мм осколкові гранати', [70,70]);

    ln([[49.057, 37.258], [49.061, 37.24]], COLORS.YEL, 1.5, '5 3');

    // =========================================================
    // ENEMY COUNTER-AMBUSH FORCE (Polish/reconnaissance)
    // =========================================================
    zoneLabel(49.075, 37.25, 'ПРОТИВНИК — КОНТРЗАСІДКА', COLORS.RED, 10);

    zoneLabel(49.073, 37.245, 'Розвідгрупа противника\n(професійна, організована)', COLORS.RED, 8);

    // Enemy recon — approaches from east
    ar([
        [49.067, 37.258], [49.075, 37.262], [49.081, 37.26],
        [49.083, 37.254], [49.079, 37.248], [49.073, 37.25]
    ], COLORS.RED, COLORS.RED, 0.06);

    // Enemy Group A — from east
    mk(49.077, 37.258, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">РГ-А</text>`, 'РОЗВІД-А (~20)', 'Група А — ~20 осіб\nвхід з північного сходу\nметалодетектори (Гарет)\n3x кулемети в головному дозорі\nмінігани — характерна ознака', [80,80]);

    // Enemy Group B — from south
    mk(49.069, 37.264, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">РГ-Б</text>`, 'РОЗВІД-Б (~15)', 'Група Б — ~15-20 осіб\nвхід з південного заходу\nбезшумний підхід\nформи буквою Г для оточення', [80,80]);

    // Enemy approach routes
    ln([[49.081, 37.27], [49.079, 37.264], [49.077, 37.258], [49.073, 37.252]], COLORS.RED, 2.5);
    ln([[49.073, 37.272], [49.071, 37.268], [49.069, 37.264], [49.065, 37.258]], COLORS.RED, 2.5);

    // Enemy infiltration path through friendly rear
    ln([
        [49.08, 37.25], [49.075, 37.248], [49.07, 37.246],
        [49.065, 37.244], [49.063, 37.24]
    ], COLORS.RED, 2, '4 3');

    // =========================================================
    // ENEMY BTRs — EVACUATION / FIRE SUPPORT
    // =========================================================
    mk(49.079, 37.266, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БТР</text>`, 'БТР-ЕВАК', 'БТР противника — евакуація\n2 одиниці прибули\nрозворот для вогню через ліс\n30мм гарматa + ПКТ', [85,85]);

    mk(49.075, 37.27, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БТР</text>`, 'БТР-2', 'Другий БТР — вогнева підтримка\nприкриває евакуацію груп\n30мм + кулемет', [85,85]);

    // =========================================================
    // FRIENDLY RPG OPERATOR (wanted to fire at BTR)
    // =========================================================
    mk(49.061, 37.236, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><polygon points="25,10 18,22 32,22" fill="${COLORS.YEL}"/><line x1="25" y1="22" x2="25" y2="35" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="25" cy="35" r="5" fill="${COLORS.YEL}"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.YEL}" font-size="5" font-weight="bold">РПГ</text>`, 'ГРАНАТОМЕТНИК', 'Оператор РПГ-7\n~30м до БТР — готовий стріляти\nкомандир заборонив (правильно):\n- група відходить\n- невідомі втрати противника\n- розкриття позицій', [75,75]);

    // =========================================================
    // MEDICAL + EVACUATION
    // =========================================================
    mk(49.045, 37.22, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДП</text>`, 'МЕДПУНКТ', 'Медичний пункт в окопі\n4 важкопоранених (300)\n2 загиблих (200)\nпромедол + джгути\nевакуація ношками 1.5 км під мінометним вогнем', [70,70]);

    // Evacuation route through forest
    ln([[49.045, 37.22], [49.04, 37.205], [49.035, 37.19]], COLORS.PNK, 2.5, '4 3');
    zoneLabel(49.039, 37.2, 'МЕДЕВАК →', COLORS.PNK, 8);

    // =========================================================
    // AMBUSH SEQUENCE PHASES
    // =========================================================
    zoneLabel(49.03, 37.25, 'ЕТАПИ БОЮ', COLORS.ORG, 10);

    mk(49.033, 37.254, `<circle cx="25" cy="25" r="18" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.GRN}" font-size="16" font-weight="bold">1</text>`, 'ЕТАП 1: МІНУВАННЯ', 'Встановлення ТМ-62 на дорозі\n2 міни на обох колеях\nнатискна дія\nгрупа займає засідку в лісі', [60,60]);

    mk(49.033, 37.264, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.ORG}" font-size="16" font-weight="bold">2</text>`, 'ЕТАП 2: ПІДРІВ', 'МТ-ЛБ противника наїхав на 2 міни\nзгорів, 2 загиблих\nдосмотровая група збирає документи\nшвидке відходження', [60,60]);

    mk(49.033, 37.274, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.RED}" font-size="16" font-weight="bold">3</text>`, 'ЕТАП 3: КОНТРЗАСІДКА', 'Розвідгрупа противника заходить з 2 боків\nлітера «Г» — оточення\n«Мама, папа є?» — вигук\nбойовик рахує до 3-х', [60,60]);

    mk(49.033, 37.284, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.BLU}" font-size="16" font-weight="bold">4</text>`, 'ЕТАП 4: БОЙ (1.5 ГОД)', 'Перехресний вогонь з 3 груп\nГП-25 + ПКМ + снайпер\nпротивник: 15+ загиблих, 10+ поранених\nнаші: 4 важких, 2 загиблих', [60,60]);

    mk(49.033, 37.294, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.PUR}" font-size="16" font-weight="bold">5</text>`, 'ЕТАП 5: ВІДХІД + АРТОБСТРІЛ', 'Евакуація поранених ношками 1.5 км\nБТР противника — не добивають, а евакують\nмасований артобстріл після відходу\nкомбат п&#39;є чай в Гусарі під снарядами', [60,60]);

    // Arrows between phases
    ln([[49.033, 37.257], [49.033, 37.261]], COLORS.WHT, 1.5);
    ln([[49.033, 37.267], [49.033, 37.271]], COLORS.WHT, 1.5);
    ln([[49.033, 37.277], [49.033, 37.281]], COLORS.WHT, 1.5);
    ln([[49.033, 37.287], [49.033, 37.291]], COLORS.WHT, 1.5);

    // =========================================================
    // ARTILLERY BOMBARDMENT ZONE (after withdrawal)
    // =========================================================
    ar([
        [49.045, 37.215], [49.055, 37.22], [49.065, 37.225],
        [49.07, 37.235], [49.067, 37.245], [49.06, 37.25],
        [49.053, 37.245], [49.047, 37.235]
    ], COLORS.PUR, COLORS.PUR, 0.06);
    zoneLabel(49.057, 37.234, 'ЗОНА АРТБОМБАРДУВАННЯ\nпісля відходу групи', COLORS.PUR, 7);

    // =========================================================
    // CASUALTY STATISTICS
    // =========================================================
    mk(49.025, 37.21, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.GRN}22" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="12" x2="42" y2="12" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="22" x2="42" y2="22" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="8" y1="32" x2="42" y2="32" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="10" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">ВТРАТИ ПРОТИВНИКА:</text><text x="25" y="19" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">200: 15+ загиблих</text><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">300: 10+ поранених</text><text x="25" y="37" text-anchor="middle" fill="${COLORS.WHT}" font-size="5">МТ-ЛБ знищений</text>`, 'ВТРАТИ-ПРОТ', 'Втрати противника:\n- 15+ загиблих (200)\n- 10+ поранених (300)\n- МТ-ЛБ знищений\n- 2 БТР евакуюють', [75,75]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. MT-LB driving into minefield
    const mtlbMove = mkAnim(49.045, 37.21, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="20" rx="12" ry="6" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="1"/><line x1="12" y1="20" x2="38" y2="20" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">МТ-ЛБ</text>`, 'МТ-ЛБ→', '', [55,55]);
    animations.push({
        marker: mtlbMove,
        path: [
            [49.045, 37.21], [49.049, 37.22], [49.053, 37.228],
            [49.057, 37.235], [49.059, 37.24]
        ],
        step: 0,
        speed: 0.004,
    });

    // 2. Enemy recon Group A approaching
    const reconA = mkAnim(49.083, 37.27, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">А</text>`, 'РГ-А→', '', [55,55]);
    animations.push({
        marker: reconA,
        path: [
            [49.083, 37.27], [49.081, 37.266], [49.079, 37.262],
            [49.077, 37.258], [49.073, 37.254], [49.069, 37.25],
            [49.065, 37.246]
        ],
        step: 0,
        speed: 0.003,
    });

    // 3. Enemy recon Group B approaching
    const reconB = mkAnim(49.077, 37.28, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">Б</text>`, 'РГ-Б→', '', [55,55]);
    animations.push({
        marker: reconB,
        path: [
            [49.077, 37.28], [49.075, 37.274], [49.073, 37.268],
            [49.071, 37.264], [49.067, 37.26], [49.063, 37.256]
        ],
        step: 0,
        speed: 0.003,
    });

    // 4. VOG grenade arc from launcher
    const vogArc = mkAnim(49.057, 37.258, `<circle cx="25" cy="25" r="8" fill="${COLORS.YEL}66" stroke="${COLORS.YEL}" stroke-width="2"/>`, 'ВОГ→', '', [40,40]);
    animations.push({
        marker: vogArc,
        path: [
            [49.057, 37.258], [49.059, 37.252], [49.061, 37.246],
            [49.062, 37.24], [49.063, 37.238]
        ],
        step: 0,
        speed: 0.008,
    });

    // 5. Evacuation route (medics carrying wounded)
    const medevac = mkAnim(49.045, 37.22, `<rect x="10" y="10" width="30" height="30" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.PNK}" stroke-width="1"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">+</text>`, 'МЕДЕВАК→', '', [45,45]);
    animations.push({
        marker: medevac,
        path: [
            [49.045, 37.22], [49.043, 37.215], [49.041, 37.208],
            [49.039, 37.2], [49.037, 37.194], [49.035, 37.19]
        ],
        step: 0,
        speed: 0.003,
    });

    startAnimation(animations, '_izyumAmbushAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4caf50;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:300px;">
            <div style="color:#4caf50;font-weight:700;font-size:11px;margin-bottom:4px;">ЗАСІДКА В ЛІСІ — ІЗЮМСЬКИЙ НАПРЯМОК</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Лісовий масив Бражківка-Сулигівка | Літо 2022</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">СКЛАД ГРУПИ (25-26 бійців, 3 групи):</div>
                <div>&#8226; <span style="color:#40c4ff;">Група 1</span> — північний фланг (8-9 + ПКМ + РПГ)</div>
                <div>&#8226; <span style="color:#40c4ff;">Група 2</span> — центр засідки (8-9 + ПКМ + ГП-25)</div>
                <div>&#8226; <span style="color:#40c4ff;">Група 3</span> — пд. фланг (8-9 + снайпер)</div>

                <div style="color:#ff9800;font-weight:700;margin-top:4px;">МІНИ ТА ПАСТКИ:</div>
                <div>&#8226; ТМ-62 ×2 — на дорозі (обидві колеї)</div>
                <div>&#8226; МТ-ЛБ противника — підірвався на обох</div>

                <div style="color:#ef5350;font-weight:700;margin-top:4px;">КОНТРЗАСІДКА ПРОТИВНИКА:</div>
                <div>&#8226; Група А (~20) — північний схід, 3×кулемети</div>
                <div>&#8226; Група Б (~15-20) — південний захід</div>
                <div>&#8226; Форма «Г» — спроба оточення</div>
                <div>&#8226; Безшумний підхід, професійна тактика</div>

                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">БІЙ (1.5 ГОДИНИ):</div>
                <div>&#8226; Перехресний вогонь 3 груп</div>
                <div>&#8226; ГП-25 гранати по дорозі</div>
                <div>&#8226; ВТРАТИ ПРОТИВНИКА: 15+ загинуло, 10+ поранено</div>
                <div>&#8226; ВТРАТИ НАШІ: 4 важкопоранених, 2 загиблих</div>
                <div>&#8226; Евакуація ношками 1.5 км під мінметами</div>
                <div>&#8226; БТР противника: евакуювали своїх, не добивали</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                Тривалість: 7 місяців командировки | 1-а бойова задача<br>
                Уроки: не базуватись там, де була засідка | комунікація з піхотою<br>
                Ключ: дисципліна + командир = виживання групи
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.015, 37.19], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to Izyum forest area
    map.flyTo([49.055, 37.24], 14, { duration: 1.5 });
}
