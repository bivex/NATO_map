// ===== POSITIONAL TRENCH WARFARE VISUALIZATION =====
// 1. Позиционная (окопная) война - trench warfare reminiscent of WWI late stages

function buildTrenchDefenseViz() {
    // Use common utilities
    const { COLORS, mk, ln, ar, circ, zoneLabel, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    zoneLabel(49.70, 37.25, '───── 1. ПОЗИЦІЙНА (ОКОПНА) ВІЙНА ─────', COLORS.BLU, 12);
    zoneLabel(49.68, 37.20, 'ПОДІБНО ДО ПІЗНІХ ЕТАПІВ ПЕРШОЇ СВІТОВОЇ:', COLORS.BLU, 9);
    zoneLabel(49.66, 37.18, 'ТРАНШЕЇ + МІНИ + ДРІТ = ПОВІЛЬНЕ ПРОСУВАННЯ', COLORS.BLU, 8);

    // ---- MAIN TRENCH LINE ----
    // =====================================================
    // MULTI-LAYER TRENCH SYSTEM - WWI STYLE
    // =====================================================

    zoneLabel(49.68, 37.35, '1-ША ЛІНІЯ — ОСНОВНА ТРАНШЕЯ', COLORS.BLU, 10);

    // Main trench line (continuous, well-fortified)
    ln([
        [49.68, 37.30], [49.675, 37.32], [49.67, 37.34],
        [49.665, 37.36], [49.66, 37.38], [49.655, 37.40]
    ], COLORS.BLU, 4);

    // Second trench line (fallback positions)
    zoneLabel(49.66, 37.26, '2-ГА ЛІНІЯ — РЕЗЕРВНА ТРАНШЕЯ', COLORS.GRN, 9);
    ln([
        [49.66, 37.26], [49.655, 37.28], [49.65, 37.30],
        [49.645, 37.32], [49.64, 37.34]
    ], COLORS.GRN, 3, '3 3');

    // Third trench line (deep defense)
    zoneLabel(49.64, 37.22, '3-ТЯ ЛІНІЯ — ГЛИБОКА ОБОРОНА', COLORS.PUR, 9);
    ln([
        [49.64, 37.22], [49.635, 37.24], [49.63, 37.26],
        [49.625, 37.28], [49.62, 37.30]
    ], COLORS.PUR, 3, '5 3');

    // NO-MAN'S LAND between trench lines
    zoneLabel(49.67, 37.28, 'НІЧИЯ ЗЕМЛЯ — 50-200 МЕТРІВ', COLORS.BRN, 8);
    ar([
        [49.69, 37.24], [49.685, 37.28], [49.675, 37.32],
        [49.665, 37.36], [49.655, 37.40], [49.645, 37.36],
        [49.65, 37.32], [49.655, 37.28], [49.66, 37.24]
    ], COLORS.BRN, COLORS.BRN, 0.08);

    // ---- COMMUNICATION TRENCHES NETWORK ----
    zoneLabel(49.72, 37.15, 'МЕРЕЖА КОМУНІКАЦІЙНИХ ТРАНШЕЙ', COLORS.GRN, 10);

    // Extensive communication trench network connecting all lines
    ln([[49.68, 37.30], [49.685, 37.28]], COLORS.GRN, 2, '4 2'); // To 2nd line
    ln([[49.685, 37.28], [49.66, 37.26]], COLORS.GRN, 2); // Between lines
    ln([[49.66, 37.26], [49.675, 37.24]], COLORS.GRN, 2); // To 3rd line
    ln([[49.675, 37.24], [49.64, 37.22]], COLORS.GRN, 2); // Deep connection

    // Lateral communication trenches (parallel to front)
    ln([[49.68, 37.30], [49.685, 37.32]], COLORS.GRN, 2, '2 2'); // Traverse trench
    ln([[49.66, 37.26], [49.665, 37.28]], COLORS.GRN, 2, '2 2'); // 2nd line traverse
    ln([[49.64, 37.22], [49.645, 37.24]], COLORS.GRN, 2, '2 2'); // 3rd line traverse

    // ---- COMPREHENSIVE FIRE POSITIONS - WWI STYLE ----
    zoneLabel(49.65, 37.20, 'ВОГНЕВІ ПОЗИЦІЇ — УКРІПЛЕНА ОБОРОНА', COLORS.ORG, 10);

    // Machine gun positions (key defensive element)
    mk(49.668, 37.335, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}66" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="20" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="2" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ПК</text>`, 'ПК ПОЗИЦІЯ-1', 'НСВ «Утьос»\nкулеметний гніздо\n3 стрільці', [85,85]);

    mk(49.663, 37.355, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}66" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="20" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="2" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ПК</text>`, 'ПК ПОЗИЦІЯ-2', 'ПКМ кулемет\nукритий ДОТ\n2 стрільці', [85,85]);

    // Infantry fighting positions (rifle pits) - every ~30-50 meters, 2 soldiers per position
    mk(49.677, 37.305, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'СТРІЛЕЦЬКА-1', '2 стрільці АК-74\n+ гранатомет\n(змінюються)', [70,70]);

    mk(49.672, 37.325, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'СТРІЛЕЦЬКА-2', '2 стрільці АК-74\n+ ПК\n(змінюються)', [70,70]);

    mk(49.667, 37.345, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'СТРІЛЕЦЬКА-3', '2 стрільці\nРПГ-7 + АК-74\n(змінюються)', [70,70]);

    // Sniper positions (elevated, camouflaged)
    mk(49.662, 37.365, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}66" stroke="${COLORS.RED}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="22" r="3" fill="${COLORS.RED}"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">СВД</text>`, 'СНАЙПЕР-1', 'СВД + АК-74\nприкриття\n2 стрільці', [70,70]);

    // Artillery observation post
    mk(49.657, 37.385, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.ORG}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">АРТ ОП</text>`, 'АРТ ОП-1', 'Коректувальник\nартилерії\n+ радіостанція', [70,70]);

    // Grenade launcher position
    mk(49.652, 37.405, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}66" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.PNK}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.PNK}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">АГС</text>`, 'АГС ПОЗИЦІЯ', 'АГС-17\nавтоматичний\nгранатомет', [70,70]);

    // ---- FORTIFIED POSITIONS & BUNKERS ----
    zoneLabel(49.62, 37.30, 'БЛІНДАЖІ ТА ФОРТИФІКАЦІЇ', COLORS.YEL, 10);

    // Reinforced concrete bunker (main strongpoint)
    mk(49.665, 37.355, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="4"/><line x1="5" y1="24" x2="45" y2="24" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="15" y1="8" x2="15" y2="40" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="35" y1="8" x2="35" y2="40" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="20" cy="20" r="3" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="3" fill="${COLORS.YEL}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ДОТ</text>`, 'ДОТ-1', 'Бетонний ДОТ\n2 ПК + 6 стрільців\nвидає 50м вперед', [90,90]);

    // Dugout bunker (troop shelter)
    mk(49.658, 37.275, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="15" y1="15" x2="15" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="35" y1="15" x2="35" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БЛІНДАЖ</text>`, 'БЛІНДАЖ-1', 'Бліндаж на відділення\n8 стрільців + ПК\nукриття від арт.', [80,80]);

    // Artillery dugout
    mk(49.648, 37.305, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="10" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.ORG}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">АРТ УКРИТТЯ</text>`, 'АРТ УКРИТТЯ', 'Укриття для\nартилеристів\n+ боєкомплект', [70,70]);

    // ---- ANTI-TANK POSITIONS ----
    zoneLabel(49.60, 37.20, 'ПРОТИТАНКОВІ ПОЗИЦІЇ', COLORS.RED, 10);

    // ATGM positions (hidden in trenches)
    mk(49.66, 37.375, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ПТРК-1', 'Stugna-P\nв окопі', [70,70]);
    mk(49.65, 37.405, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ПТРК-2', 'Javelin\nпозиція', [70,70]);

    // Tank defensive position
    mk(49.64, 37.385, `<ellipse cx="25" cy="30" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><rect x="18" y="15" width="14" height="10" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="15" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ТАНКОВА ПОЗИЦІЯ', 'Т-72 в окопі\nамбразура', [80,80]);

    // ---- DEFENSIVE DEPTH ----
    zoneLabel(49.58, 37.10, 'ГЛИБИНА ОБОРОНИ', COLORS.PUR, 10);

    // Second line positions (fallback) - ~150 meters behind
    ln([
        [49.66, 37.26], [49.655, 37.28], [49.65, 37.30],
        [49.645, 37.32], [49.64, 37.34]
    ], COLORS.PUR, 3, '6 3');

    mk(49.658, 37.275, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="2"/>`, '2-й ЕШЕЛОН-1', 'Резервна позиція', [60,60]);
    mk(49.648, 37.305, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="2"/>`, '2-й ЕШЕЛОН-2', 'Резервна позиція', [60,60]);

    // ---- OBSERVATION AND COMMAND ----
    zoneLabel(49.75, 37.30, 'СПОСТЕРЕЖЕННЯ ТА УПРАВЛІННЯ', COLORS.CYN, 10);

    // Observation post
    mk(49.67, 37.325, `<circle cx="25" cy="25" r="15" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ОП-1', 'Спостережний пункт\nбинокль + радіо', [70,70]);

    // Command post
    mk(49.675, 37.285, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'КП ВЗВОДУ', 'Командний пункт\nкарта + радіостанція', [80,80]);

    // ---- EXTENSIVE OBSTACLE SYSTEM - WWI STYLE ----
    zoneLabel(49.55, 37.35, 'РОЗГОРНУТА СИСТЕМА ЗАГОРОДЖЕНЬ', COLORS.BRN, 10);

    // MULTIPLE LAYERS OF BARBED WIRE - characteristic of WWI positional warfare
    zoneLabel(49.67, 37.30, 'КОЛЮЧИЙ ДРІТ — 5-7 РЯДІВ', COLORS.BRN, 8);

    // First wire line (closest to enemy)
    ln([[49.69, 37.25], [49.685, 37.27], [49.68, 37.29], [49.675, 37.31]], COLORS.BRN, 2, '1 1');
    ln([[49.685, 37.27], [49.68, 37.29]], COLORS.BRN, 2, '1 1'); // Cross braces

    // Second wire line (intermediate)
    ln([[49.688, 37.26], [49.683, 37.28], [49.678, 37.30], [49.673, 37.32]], COLORS.BRN, 2, '1 1');

    // Third wire line (main defensive barrier)
    ln([[49.686, 37.27], [49.681, 37.29], [49.676, 37.31], [49.671, 37.33]], COLORS.BRN, 2, '1 1');

    // Fourth wire line (behind main trench)
    ln([[49.675, 37.28], [49.67, 37.30], [49.665, 37.32], [49.66, 37.34]], COLORS.BRN, 2, '1 1');

    // Fifth wire line (reserve line protection)
    ln([[49.663, 37.29], [49.658, 37.31], [49.653, 37.33], [49.648, 37.35]], COLORS.BRN, 2, '1 1');

    // EXTENSIVE MINEFIELDS - scattered pattern covering no-man's land
    zoneLabel(49.67, 37.28, 'МІННІ ПОЛЯ — РОЗКИДАНІ НА НІЧИЙ ЗЕМЛІ', COLORS.BRN, 8);

    // Anti-personnel mines scattered across no-man's land
    mk(49.685, 37.27, `<circle cx="25" cy="25" r="10" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BRN}" font-size="8" font-weight="bold">П</text>`, 'МІНА-1', 'ПФМ-1\n"Лепесток"', [50,50]);
    mk(49.68, 37.29, `<circle cx="25" cy="25" r="10" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BRN}" font-size="8" font-weight="bold">П</text>`, 'МІНА-2', 'ОЗМ-72\nпротипіхотна', [50,50]);
    mk(49.675, 37.31, `<circle cx="25" cy="25" r="10" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BRN}" font-size="8" font-weight="bold">П</text>`, 'МІНА-3', 'МОН-50\nнапрямлена', [50,50]);
    mk(49.67, 37.33, `<circle cx="25" cy="25" r="10" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BRN}" font-size="8" font-weight="bold">П</text>`, 'МІНА-4', 'ПМН-2\nпідошовна', [50,50]);

    // Anti-tank mines protecting approaches
    mk(49.678, 37.275, `<circle cx="25" cy="25" r="12" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="13" y="13" width="24" height="24" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="10" font-weight="bold">Т</text>`, 'МІНА-Т1', 'ТМ-62М\nпротитанкова', [55,55]);
    mk(49.672, 37.295, `<circle cx="25" cy="25" r="12" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="13" y="13" width="24" height="24" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="10" font-weight="bold">Т</text>`, 'МІНА-Т2', 'ТМ-62\nпротитанкова', [55,55]);
    mk(49.666, 37.315, `<circle cx="25" cy="25" r="12" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="13" y="13" width="24" height="24" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="10" font-weight="bold">Т</text>`, 'МІНА-Т3', 'ТМ-62П3\nпротитанкова', [55,55]);

    // Additional obstacles - stake traps, dragon's teeth
    mk(49.682, 37.265, `<polygon points="25,10 15,30 35,30" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="20" y1="20" x2="30" y2="20" stroke="${COLORS.BRN}" stroke-width="1"/><line x1="25" y1="15" x2="25" y2="25" stroke="${COLORS.BRN}" stroke-width="1"/>`, 'ПАСТКИ', 'Кілки + ями\nпротипіхотні', [50,50]);

    mk(49.677, 37.285, `<rect x="10" y="25" width="30" height="15" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><polygon points="15,25 25,15 35,25" fill="${COLORS.BRN}"/><polygon points="17,25 27,15 37,25" fill="${COLORS.BRN}"/><polygon points="19,25 29,15 39,25" fill="${COLORS.BRN}"/>`, 'ДРАКОН ЗУБИ', 'Бетонні\nпірамідки\nпротитанкові', [60,60]);

    // ---- SUPPORTING ELEMENTS ----
    zoneLabel(49.62, 37.05, 'ЕЛЕМЕНТИ ПІДТРИМКИ', COLORS.GRN, 10);

    // Medical post
    mk(49.655, 37.265, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="20" r="3" fill="${COLORS.GRN}"/>`, 'МЕДПУНКТ', 'Медичний пункт\nаптечки + носилки', [70,70]);

    // Ammunition point
    mk(49.66, 37.255, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="25" y1="15" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="1"/>`, 'БОЄКОМПЛЕКТ', 'Склад БК\nнабої + гранати', [70,70]);

    // ---- DEFENSIVE SECTORS ----
    zoneLabel(49.55, 37.50, 'СЕКТОРИ ОБОРОНИ:', COLORS.WHT, 11);

    const sectors = [
        { lat: 49.555, lng: 37.25, text: 'ПРАВИЙ ФЛАНГ', desc: 'Сектор №1\nТ-72 + ПТРК\n(позиції парні)', color: COLORS.BLU },
        { lat: 49.555, lng: 37.35, text: 'ЦЕНТР', desc: 'Сектор №2\nПК + піхота\n(зміни по 2)', color: COLORS.ORG },
        { lat: 49.555, lng: 37.45, text: 'ЛІВИЙ ФЛАНГ', desc: 'Сектор №3\nБліндаж + стрілецькі\n(пари стрільців)', color: COLORS.YEL },
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
        placedMarkers.push(L.marker([s.lat, s.lng], { icon, interactive: false }).addTo(map));
    });

    // ---- POSITIONAL WARFARE STATISTICS - WWI STYLE ----
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:260px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9876; ПОЗИЦІЙНА (ОКОПНА) ВІЙНА</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Довжина фронту: <span style="color:#4fc3f7;font-weight:700;">1,200 км</span> (схід + південь)</div>
                <div>Траншейні лінії: <span style="color:#4fc3f7;font-weight:700;">3</span> ешелони + комунікації</div>
                <div>Колючого дроту: <span style="color:#8d6e63;font-weight:700;">5-7</span> рядів по 50-100м</div>
                <div>Мінних полів: <span style="color:#8d6e63;font-weight:700;">8</span> мін + пастки</div>
                <div>ДОТ/бліндажі: <span style="color:#ffeb3b;font-weight:700;">3</span> укріплені позиції</div>
                <div>Кулеметних гнізд: <span style="color:#ffeb3b;font-weight:700;">2</span> ПК + АГС</div>
                <div>Штат оборони: <span style="color:#4caf50;font-weight:700;">45</span> осіб на ділянці</div>
                <div>Просування: <span style="color:#ef5350;font-weight:700;">1-2 км</span> за місяць</div>
                <div>Втрати: <span style="color:#ef5350;font-weight:700;">високі</span> з обох сторін</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Подібно до пізніх етапів Першої світової: траншеї, міни, дріт<br>
                Повільне просування з великими втратами. Артилерія = ключ<br>
                Східний фронт особливо: Авдіївка, Мар'їнка, Вугледар
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.52, 37.10], { icon: statsIcon, interactive: false }).addTo(map));

    // ---- DEFENSE ZONES VISUALIZATION ----
    // Main defense zone
    ar([
        [49.76, 37.15], [49.78, 37.20], [49.76, 37.30], [49.72, 37.35],
        [49.68, 37.40], [49.64, 37.45], [49.60, 37.50], [49.58, 37.45],
        [49.60, 37.35], [49.64, 37.30], [49.68, 37.25], [49.72, 37.20]
    ], COLORS.BLU, COLORS.BLU, 0.05);

    // Killing zone (no-man's land)
    ar([
        [49.74, 37.25], [49.72, 37.30], [49.70, 37.35], [49.68, 37.40],
        [49.66, 37.45], [49.64, 37.50], [49.62, 37.45], [49.64, 37.40],
        [49.66, 37.35], [49.68, 37.30], [49.70, 37.25], [49.72, 37.20]
    ], COLORS.RED, COLORS.RED, 0.08);

    zoneLabel(49.68, 37.32, 'ЗОНА УРАЖЕННЯ', COLORS.RED, 9);

    // Fly to trench defense area
    map.flyTo([49.66, 37.35], 14, { duration: 1.5 });
}