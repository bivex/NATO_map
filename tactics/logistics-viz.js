// ===== LOGISTICS & SUPPORT UNITS VISUALIZATION =====
// Визуализация тыловых подразделений обеспечения
// Переработано: иерархия эшелонов, MSR, зоны, угрозы, анимированные потоки

function buildLogisticsViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._logisticsAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.60, 36.70, '───── ТЫЛОВОЕ ОБЕСПЕЧЕНИЕ — ЭШЕЛОНИРОВАННАЯ СИСТЕМА ─────', COLORS.GRN, 12);
    zoneLabel(49.57, 36.70, 'ГЛУБИНА ТЫЛА: ОТ ПЕРЕДОВЫХ ПОДРАЗДЕЛЕНИЙ ДО АРМЕЙСКИХ БАЗ', COLORS.WHT, 9);

    // =========================================================
    // LINE OF CONTACT (FLET)
    // =========================================================
    ln([
        [49.52, 36.40], [49.53, 36.60], [49.54, 36.80], [49.53, 37.00],
        [49.54, 37.20], [49.53, 37.40], [49.52, 37.60]
    ], COLORS.RED, 3, '8 4');
    zoneLabel(49.55, 36.40, '── ЛИНИЯ БОЕВОГО СНАБЖЕНИЯ (FLET) ──', COLORS.RED, 10);

    // Forward combat units (consumers of logistics)
    mk(49.48, 36.55, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="26" text-anchor="middle" fill="${COLORS.BLU}" font-size="8" font-weight="bold">1 МБ</text>`, '1-Й МЕХБАТ', '1-й механізований батальйон\nспоживач логістики\n consumables: боеприпаси + пальне + харчі', [85,85]);

    mk(49.48, 36.80, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="26" text-anchor="middle" fill="${COLORS.BLU}" font-size="8" font-weight="bold">2 МБ</text>`, '2-Й МЕХБАТ', '2-й механізований батальйон\nспоживач логістики', [85,85]);

    mk(49.48, 37.05, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="26" text-anchor="middle" fill="${COLORS.BLU}" font-size="8" font-weight="bold">3 МБ</text>`, '3-Й МЕХБАТ', '3-й механізований батальйон\nспоживач логістики', [85,85]);

    mk(49.48, 37.30, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">ТР</text>`, 'ТАНКОВА РОТА', 'Танкова рота\nпотреба: пальне + снаряди\nвисокий расход ГСМ', [85,85]);

    mk(49.48, 37.50, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.BLU}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АРТ</text>`, 'АРТДИВІЗІОН', 'Артилерійський дивізіон\nосновний споживач боєприпасів\n≈150 снарядів/добу', [85,85]);

    // =========================================================
    // ECHELON 1 — BATTALION LEVEL (5-15 km from FLET)
    // =========================================================
    zoneLabel(49.38, 36.40, '── I ЭШЕЛОН: БАТАЛЬОННЫЙ ТЫЛ (5-15 км от передовой) ──', COLORS.YEL, 10);

    // Forward ammunition point (БоП)
    mk(49.40, 36.55, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="14" y1="15" x2="36" y2="15" stroke="${COLORS.RED}" stroke-width="3"/><line x1="14" y1="22" x2="36" y2="22" stroke="${COLORS.RED}" stroke-width="3"/><line x1="14" y1="29" x2="36" y2="29" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БоП</text>`, 'БОЕПРИПАСЫ-I', 'Батальйонний пункт боєприпасів\nбезпосереднє постачання взводів\n≈2 бойові комплекта на ротy', [80,80]);

    // Forward fuel point
    mk(49.40, 36.80, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="18" cy="18" r="4" fill="${COLORS.ORG}"/><circle cx="25" cy="18" r="4" fill="${COLORS.ORG}"/><circle cx="32" cy="18" r="4" fill="${COLORS.ORG}"/><line x1="14" y1="25" x2="36" y2="25" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">ПГСМ</text>`, 'ТОПЛИВО-I', 'Передовий пункт ГСМ\nзаправка техніки перед боєм\nдизель + бензин', [80,80]);

    // Battalion aid station
    mk(49.40, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МПБ</text>`, 'МЕДПУНКТ-I', 'Медичний пункт батальйону\nперша лікарська допомога\nстабілізація + евакуація', [80,80]);

    // Forward repair/evacuation
    mk(49.40, 37.30, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BRN}44" stroke="${COLORS.BRN}" stroke-width="3"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.BRN}" stroke-width="3"/><circle cx="15" cy="32" r="3" fill="${COLORS.BRN}"/><circle cx="25" cy="32" r="3" fill="${COLORS.BRN}"/><circle cx="35" cy="32" r="3" fill="${COLORS.BRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">РЕМВІД</text>`, 'РЕМОНТ-I', 'Ремонтно-евакуаційний взвод\nдрібний ремонт на місці\nбуксирування пошкодженої техніки', [80,80]);

    // Food / hot meals
    mk(49.40, 37.50, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="18" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="18" r="3" fill="${COLORS.GRN}"/><circle cx="32" cy="18" r="3" fill="${COLORS.GRN}"/><line x1="14" y1="24" x2="36" y2="24" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ХАРЧ</text>`, 'ХАРЧУВАННЯ-I', 'Польова кухня\nгаряча їжа 2 рази/добу\nсухпайок на випадок бою', [75,75]);

    // Distribution lines: battalion → front units
    [[49.40, 36.55, 49.48, 36.55], [49.40, 36.80, 49.48, 36.80],
     [49.40, 37.05, 49.48, 37.05], [49.40, 37.30, 49.48, 37.30],
     [49.40, 37.50, 49.48, 37.50]].forEach(p => {
        ln([[p[0], p[1]], [p[2], p[3]]], COLORS.GRN, 1.5, '3 3');
    });

    // =========================================================
    // ECHELON 2 — BRIGADE LEVEL (30-50 km from FLET)
    // =========================================================
    zoneLabel(49.18, 36.40, '── II ЭШЕЛОН: БРИГАДНЫЙ ТЫЛ (30-50 км) ──', COLORS.GRN, 10);

    // Brigade supply base — ammunition
    mk(49.20, 36.55, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="4"/><line x1="8" y1="13" x2="42" y2="13" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="21" x2="42" y2="21" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="29" x2="42" y2="29" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БРИГСКЛАД-БП</text>`, 'БОЕПРИПАСЫ-II', 'Бригадний склад боєприпасів\n155мм + 152мм + 122мм + 120мм\n≈3000 снарядів в наявності\nпоповнення 1 раз/добу', [90,90]);

    // Brigade fuel depot
    mk(49.20, 36.80, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="4"/><circle cx="15" cy="18" r="5" fill="${COLORS.ORG}"/><circle cx="25" cy="18" r="5" fill="${COLORS.ORG}"/><circle cx="35" cy="18" r="5" fill="${COLORS.ORG}"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.ORG}" stroke-width="3"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">БРИГСКЛАД-ГСМ</text>`, 'ТОПЛИВО-II', 'Бригадний склад ПГСМ\nдизель + бензин + мастила\n≈50 тис. літрів в наявності\nцистерни + польові ємності', [90,90]);

    // Brigade field hospital
    mk(49.20, 37.05, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="4"/><line x1="20" y1="8" x2="30" y2="8" stroke="${COLORS.PNK}" stroke-width="4"/><line x1="25" y1="8" x2="25" y2="40" stroke="${COLORS.PNK}" stroke-width="4"/><text x="25" y="48" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДР-БРИГ</text>`, 'ГОСПІТАЛЬ-II', 'Медична рота бригади\nхірургія + реанімація + триаж\nстабілізація + підготовка до евакуації\n"Золотий година" — 60 хвилин', [90,90]);

    // Brigade maintenance battalion
    mk(49.20, 37.30, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.BRN}55" stroke="${COLORS.BRN}" stroke-width="4"/><ellipse cx="25" cy="18" rx="15" ry="8" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.BRN}"/><circle cx="25" cy="30" r="3" fill="${COLORS.BRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.BRN}"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">РЕМБАТ</text>`, 'РЕМОНТ-II', 'Ремонтно-відновлювальний батальйон\nсередній ремонт техніки\nТ-64/Т-72 + БМП + БТР + МТЛБ\nзаміна вузлів + агрегатів', [95,95]);

    // Brigade supply — food, water, misc
    mk(49.20, 37.50, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.GRN}55" stroke="${COLORS.GRN}" stroke-width="4"/><line x1="10" y1="15" x2="40" y2="15" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ТОВБРИГ</text>`, 'ТОВАРНО-II', 'Товарна база бригади\nхарчі + вода + амуніція + ЗІЗ\nречове + інженерне постачання', [90,90]);

    // Coverage circles for brigade depots
    circ(49.20, 36.55, 25000, COLORS.RED, 0.04);
    circ(49.20, 36.80, 25000, COLORS.ORG, 0.04);
    circ(49.20, 37.05, 25000, COLORS.PNK, 0.03);
    circ(49.20, 37.30, 25000, COLORS.BRN, 0.03);

    // =========================================================
    // ECHELON 3 — ARMY / CORPS LEVEL (100-200 km)
    // =========================================================
    zoneLabel(48.90, 36.40, '── III ЭШЕЛОН: АРМЕЙСКИЙ ТЫЛ (100-200 км) ──', COLORS.BLU, 10);

    // Army supply base — main depot
    mk(48.92, 36.60, `<rect x="0" y="3" width="50" height="40" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="5"/><rect x="6" y="8" width="38" height="30" fill="${COLORS.BLU}22" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="15" x2="40" y2="15" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="29" x2="40" y2="29" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="48" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">АРМБАЗА</text>`, 'АРМЕЙБАЗА-III', 'Армійська база матеріального забезпечення\nцентральне постачання всім бригадам\nбоєприпаси + пальне + техніка\nзалізнична гілка + автоколони', [95,95]);

    // Army tank repair plant
    mk(48.92, 37.00, `<rect x="0" y="3" width="50" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="4"/><rect x="8" y="8" width="34" height="28" fill="${COLORS.RED}22" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="18" rx="12" ry="6" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="13" y1="28" x2="37" y2="28" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="48" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ТАНКОРЕМЗАВОД</text>`, 'КАПРЕМОНТ-III', 'Армійський ремонтний завод\nкапітальний ремонт танків + БМП\nвідновлення з китайців + трофеїв\nLeopard + Abrams + Т-72', [95,95]);

    // Army evacuation hospital
    mk(48.92, 37.40, `<rect x="0" y="3" width="50" height="40" fill="${COLORS.PNK}55" stroke="${COLORS.PNK}" stroke-width="4"/><rect x="8" y="8" width="34" height="28" fill="${COLORS.PNK}22" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="10" x2="25" y2="32" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="48" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ГОСПІТАЛЬ-III</text>`, 'ГОСПІТАЛЬ-III', 'Евакуаційний госпіталь\nповне лікування + операції\nреабілітація + відновлення\nаеромедична евакуація', [95,95]);

    // Army-level coverage
    circ(48.92, 36.60, 50000, COLORS.BLU, 0.03);

    // =========================================================
    // MAIN SUPPLY ROUTES (MSR)
    // =========================================================
    zoneLabel(49.08, 36.40, 'МАРШРУТЫ ПОДВОЗА (MSR)', COLORS.WHT, 10);

    // MSR MAIN — Brigade → Battalion (primary)
    const msrMain1 = [[49.20, 36.55], [49.18, 36.58], [49.16, 36.62], [49.14, 36.66],
                       [49.12, 36.72], [49.10, 36.78], [49.12, 36.84], [49.15, 36.88],
                       [49.18, 36.92], [49.22, 36.94], [49.28, 36.96], [49.32, 36.98],
                       [49.35, 37.00], [49.38, 37.02], [49.40, 36.55]];
    ln(msrMain1, COLORS.GRN, 3);
    zoneLabel(49.14, 36.66, 'MSR-1 ГЛАВНЫЙ', COLORS.GRN, 8);

    const msrMain2 = [[49.20, 36.80], [49.18, 36.84], [49.16, 36.88], [49.14, 36.92],
                       [49.16, 36.96], [49.20, 36.98], [49.25, 37.00], [49.30, 37.02],
                       [49.35, 37.04], [49.38, 37.06], [49.40, 36.80]];
    ln(msrMain2, COLORS.GRN, 3);
    zoneLabel(49.14, 36.94, 'MSR-2 ЗАПАСНОЙ', COLORS.GRN, 8);

    const msrMain3 = [[49.20, 37.30], [49.22, 37.26], [49.24, 37.22], [49.28, 37.18],
                       [49.32, 37.16], [49.35, 37.18], [49.38, 37.20], [49.40, 37.30]];
    ln(msrMain3, COLORS.BRN, 2.5);
    zoneLabel(49.30, 37.14, 'MSR-3 РЕМОНТ', COLORS.BRN, 8);

    // MSR Army → Brigade (long haul)
    const msrArmy1 = [[48.92, 36.60], [48.96, 36.62], [49.00, 36.65], [49.04, 36.70],
                       [49.08, 36.74], [49.12, 36.78], [49.16, 36.82], [49.20, 36.55]];
    ln(msrArmy1, COLORS.GRN, 4, '10 5');
    zoneLabel(49.02, 36.68, 'ASR-1 АРМЕЙСКИЙ', COLORS.GRN, 9);

    const msrArmy2 = [[48.92, 37.00], [48.96, 36.98], [49.00, 36.96], [49.04, 36.98],
                       [49.08, 37.02], [49.12, 37.06], [49.16, 37.10], [49.20, 37.30]];
    ln(msrArmy2, COLORS.BRN, 3, '10 5');
    zoneLabel(49.04, 37.00, 'ASR-2 ЭВАКУАЦИЯ', COLORS.BRN, 9);

    // MEDEVAC route (reverse flow)
    const medevacRoute = [[49.40, 37.05], [49.36, 37.03], [49.32, 37.01], [49.28, 37.00],
                          [49.24, 36.98], [49.22, 37.02], [49.20, 37.05]];
    ln(medevacRoute, COLORS.PNK, 3, '6 3');
    zoneLabel(49.30, 36.97, 'МЕДЕВАК → ТЫЛ', COLORS.PNK, 8);

    const medevacArmy = [[49.20, 37.05], [49.16, 37.10], [49.12, 37.18], [49.08, 37.26],
                         [49.04, 37.34], [49.00, 37.38], [48.96, 37.40], [48.92, 37.40]];
    ln(medevacArmy, COLORS.PNK, 3, '6 3');
    zoneLabel(49.06, 37.30, 'МЕДЕВАК → АРМИЯ', COLORS.PNK, 8);

    // Checkpoints on MSR
    mk(49.10, 36.74, `<circle cx="25" cy="25" r="15" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.YEL}" font-size="9" font-weight="bold">КП</text>`, 'КП-1', 'Контрольно-диспетчерський пункт\nрегулювання руху колон\nдокумент перевірка + пріоритет', [65,65]);

    mk(49.08, 37.04, `<circle cx="25" cy="25" r="15" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.YEL}" font-size="9" font-weight="bold">КП</text>`, 'КП-2', 'Контрольно-диспетчерський пункт\nрегулювання зустрічного руху\nпропускна здатність ≈30 авт/год', [65,65]);

    // =========================================================
    // ENEMY THREAT ZONES (logistics interdiction)
    // =========================================================
    zoneLabel(49.52, 37.75, 'УГРОЗЫ ЛОГИСТИКЕ СО СТОРОНЫ ПРОТИВНИКА', COLORS.RED, 10);

    // Enemy artillery range — can reach MSR between battalion and front
    ar([
        [49.42, 36.40], [49.46, 36.55], [49.48, 36.80], [49.46, 37.05],
        [49.48, 37.30], [49.46, 37.55], [49.50, 37.65],
        [49.52, 37.55], [49.50, 37.30], [49.52, 37.05],
        [49.50, 36.80], [49.52, 36.55], [49.50, 36.40]
    ], COLORS.RED, COLORS.RED, 0.08);
    zoneLabel(49.44, 36.45, 'ЗОНА ДОСЯЖНОСТІ АРТИЛЕРІЇ ПРОТИВНИКА (30 км)', COLORS.RED, 8);

    // Enemy drone reconnaissance zone
    ar([
        [49.25, 36.40], [49.30, 36.60], [49.32, 36.85], [49.30, 37.10],
        [49.32, 37.35], [49.30, 37.60],
        [49.35, 37.60], [49.38, 37.35], [49.36, 37.10],
        [49.38, 36.85], [49.36, 36.60], [49.35, 36.40]
    ], COLORS.RED, COLORS.PUR, 0.05);
    zoneLabel(49.27, 36.45, 'ЗОНА РОЗВІДКИ БпАК ПРОТИВНИКА', COLORS.PUR, 8);

    // Enemy strike on MSR (illustrative)
    mk(49.35, 36.70, `<polygon points="25,5 18,20 32,20" fill="${COLORS.RED}88" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="20" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="48" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">УДАР</text>`, 'УГРОЗА MSR', 'Удар по маршруту постачання\nпротивник цілить в колону\nвтрати: 2 грузовики + пальне\nнеобхідно: змінити маршрут!', [70,70]);

    // =========================================================
    // COMMUNICATIONS NODE
    // =========================================================
    mk(49.20, 37.70, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><path d="M20,36 Q20,15 25,12 Q30,15 30,36" fill="none" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="36" x2="35" y2="36" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ВУЗОЛ ЗВ`ЯЗКУ</text>`, 'СВЯЗЬ', 'Вузол зв\'язку бригади\nрадіо + супутник + дротовий\nкоординація постачання\nASIST / Kropyva системи', [85,85]);

    circ(49.20, 37.70, 15000, COLORS.CYN, 0.03);

    // =========================================================
    // ANIMATED SUPPLY FLOWS
    // =========================================================

    // 1. Ammo convoy forward (army → brigade → battalion)
    const ammoConvoy = mkAnim(48.92, 36.60, `<rect x="5" y="15" width="40" height="18" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="14" cy="30" r="3" fill="${COLORS.RED}"/><circle cx="25" cy="30" r="3" fill="${COLORS.RED}"/><circle cx="36" cy="30" r="3" fill="${COLORS.RED}"/><text x="25" y="24" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">БП</text>`, 'БОЕПРИПАСЫ→', '', [80,80]);
    animations.push({
        marker: ammoConvoy,
        path: [
            [48.92, 36.60], [48.96, 36.62], [49.00, 36.65], [49.04, 36.70],
            [49.08, 36.74], [49.12, 36.78], [49.16, 36.82], [49.20, 36.55],
            [49.18, 36.58], [49.15, 36.62], [49.12, 36.68], [49.10, 36.74],
            [49.08, 36.80], [49.10, 36.86], [49.15, 36.90], [49.20, 36.93],
            [49.28, 36.96], [49.35, 36.98], [49.40, 36.55]
        ],
        step: 0,
        speed: 0.006,
    });

    // 2. Fuel convoy forward (brigade → battalion)
    const fuelConvoy = mkAnim(49.20, 36.80, `<rect x="5" y="15" width="40" height="18" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="14" cy="30" r="3" fill="${COLORS.ORG}"/><circle cx="25" cy="30" r="3" fill="${COLORS.ORG}"/><circle cx="36" cy="30" r="3" fill="${COLORS.ORG}"/><text x="25" y="24" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ГСМ</text>`, 'ГСМ→', '', [80,80]);
    animations.push({
        marker: fuelConvoy,
        path: [
            [49.20, 36.80], [49.18, 36.84], [49.16, 36.88], [49.14, 36.92],
            [49.16, 36.96], [49.20, 36.98], [49.25, 37.00], [49.30, 37.02],
            [49.35, 37.04], [49.38, 37.06], [49.40, 36.80]
        ],
        step: 0,
        speed: 0.005,
    });

    // 3. Medical evacuation (front → brigade hospital → army hospital)
    const medEvac = mkAnim(49.40, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}55" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕД</text>`, 'МЕДЕВАК→', '', [75,75]);
    animations.push({
        marker: medEvac,
        path: [
            [49.40, 37.05], [49.36, 37.03], [49.32, 37.01], [49.28, 37.00],
            [49.24, 36.98], [49.22, 37.02], [49.20, 37.05],
            [49.16, 37.10], [49.12, 37.18], [49.08, 37.26],
            [49.04, 37.34], [49.00, 37.38], [48.96, 37.40], [48.92, 37.40]
        ],
        step: 0,
        speed: 0.004,
    });

    // 4. Equipment evacuation (front → brigade repair → army repair)
    const eqEvac = mkAnim(49.40, 37.30, `<rect x="5" y="12" width="40" height="24" fill="${COLORS.BRN}55" stroke="${COLORS.BRN}" stroke-width="3"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.BRN}" stroke-width="3"/><circle cx="14" cy="32" r="3" fill="${COLORS.BRN}"/><circle cx="25" cy="32" r="3" fill="${COLORS.BRN}"/><circle cx="36" cy="32" r="3" fill="${COLORS.BRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">ТЕНТА</text>`, 'ТЕХНИКА→', '', [85,85]);
    animations.push({
        marker: eqEvac,
        path: [
            [49.40, 37.30], [49.38, 37.28], [49.35, 37.26], [49.32, 37.22],
            [49.28, 37.18], [49.24, 37.22], [49.22, 37.26], [49.20, 37.30],
            [49.16, 37.28], [49.12, 37.22], [49.08, 37.14],
            [49.04, 37.08], [49.00, 37.04], [48.96, 37.02], [48.92, 37.00]
        ],
        step: 0,
        speed: 0.003,
    });

    // 5. Empty trucks returning (battalion → brigade, reverse flow)
    const emptyReturn = mkAnim(49.40, 36.55, `<rect x="10" y="18" width="30" height="14" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2" stroke-dasharray="3 2"/><circle cx="16" cy="30" r="2" fill="${COLORS.GRN}"/><circle cx="25" cy="30" r="2" fill="${COLORS.GRN}"/><circle cx="34" cy="30" r="2" fill="${COLORS.GRN}"/><text x="25" y="26" text-anchor="middle" fill="${COLORS.GRN}" font-size="6">ПОРОЖ.</text>`, '←ПОРОЖНИЙ', '', [70,70]);
    animations.push({
        marker: emptyReturn,
        path: [
            [49.40, 36.55], [49.38, 36.58], [49.35, 36.62], [49.32, 36.68],
            [49.28, 36.72], [49.24, 36.76], [49.20, 36.80]
        ],
        step: 0,
        speed: 0.007,
    });

    // Start all animations
    startAnimation(animations, '_logisticsAnimFrame');

    // =========================================================
    // INFO PANEL (compact)
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4caf50;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:300px;">
            <div style="color:#4caf50;font-weight:700;font-size:12px;margin-bottom:4px;">СИСТЕМА ТЫЛОВОГО ОБЕСПЕЧЕНИЯ</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#ffeb3b;font-weight:700;">I ЭШЕЛОН (батальйон):</div>
                <div>• БоП — боєприпаси → взводи &nbsp;• ПГСМ — заправка техніки</div>
                <div>• МПБ — перша допомога &nbsp;• РЕМВІД — буксирування</div>

                <div style="color:#4caf50;font-weight:700;margin-top:4px;">II ЭШЕЛОН (бригада, 30-50 км):</div>
                <div>• Склади: БП + ГСМ + харчі + амуніція</div>
                <div>• Медична рота: хірургія + триаж</div>
                <div>• РЕМБАТ: середній ремонт техніки</div>

                <div style="color:#40c4ff;font-weight:700;margin-top:4px;">III ЭШЕЛОН (армия, 100-200 км):</div>
                <div>• Армійська база МТЗ + капремонт</div>
                <div>• Евакуаційний госпіталь</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                <span style="color:#4caf50;">──</span> MSR підвіз &nbsp;
                <span style="color:#ff4081;">- -</span> медевак &nbsp;
                <span style="color:#8d6e63;">- -</span> евакуація техніки<br>
                <span style="color:#ef5350;">▓</span> зона вогню &nbsp;
                <span style="color:#e040fb;">▓</span> розвідка БпАК &nbsp;
                КП — диспетчерський пункт
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.65, 36.50], { icon: infoPanel, interactive: false }).addTo(map));

    // =========================================================
    // SUPPLY FLOW STATISTICS
    // =========================================================
    const statsPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:230px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:11px;margin-bottom:4px;">РАСХОД НА 1 БРИГАДУ / СУТКИ</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div><span style="color:#ef5350;">Боеприпасы:</span> ≈3 000 снарядов + 50 000 патронов</div>
                <div><span style="color:#ff9800;">Топливо:</span> ≈50 000 л дизель + 10 000 л бензин</div>
                <div><span style="color:#4caf50;">Продовольствие:</span> ≈4 000 рационов + вода</div>
                <div><span style="color:#8d6e63;">Запчасти:</span> ≈2-3 тонны комплектующих</div>
                <div><span style="color:#ff4081;">Медикаменты:</span> ≈200 кг перевязочных + лекарства</div>
                <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                    Колонна: 20-40 машин &nbsp;|&nbsp; Скорость: 25-40 км/ч<br>
                    Цикл підвозу: 8-12 годин &nbsp;|&nbsp; Ночью — з вимкненим світлом
                </div>
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.65, 37.60], { icon: statsPanel, interactive: false }).addTo(map));

    // Fly to show the full logistics depth
    map.flyTo([49.10, 36.90], 11, { duration: 1.5 });
}
