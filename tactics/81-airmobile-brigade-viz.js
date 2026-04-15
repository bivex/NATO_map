// ===== 81-ша окрема аеромобільна Слобожанська бригада =====
// 81 ОАеМБр — Десантно-штурмові війська ЗСУ — «Народжені перемагати»
// Mapbox verified: Краматорськ [48.738, 37.589] | Костянтинівка [48.533, 37.695]
// Дружківка [48.620, 37.525] | Лиман [48.980, 37.817] | Ізюм [49.191, 37.278]
// Авдіївка [48.136, 37.745] | Піски [48.066, 37.675] | Білогорівка [48.924, 38.247]
// Бахмут [48.585, 38.003] | Полтава [49.594, 34.548]
// Донецьк (аеропорт) [48.017, 37.803]
// Coordinate math at 48.7°N: 0.001° lat = 111m, 0.001° lng = 73.4m

function build81AEMBViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._81AEMBAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.100, 37.100, '───── 81-ша ОАеМБр «СЛОБОЖАНСЬКА» ─────', COLORS.BLU, 12);
    zoneLabel(49.070, 37.090, 'ДЕСАНТНО-ШТУРМОВІ ВІЙСЬКА ЗСУ | Народжені перемагати\n7 КДШВ | в/ч А2120 | Створена 07.10.2014', COLORS.WHT, 9);

    // =========================================================
    // REFERENCE SETTLEMENTS (Mapbox verified)
    // =========================================================
    zoneLabel(48.770, 37.560, '← м. Краматорськ (Mapbox: 48.738, 37.589) — ШТАБ', COLORS.WHT, 8);
    zoneLabel(48.510, 37.700, '← м. Костянтинівка (48.533, 37.695)', COLORS.WHT, 7);
    zoneLabel(48.590, 37.530, '← м. Дружківка (48.620, 37.525)', COLORS.WHT, 7);
    zoneLabel(49.000, 37.820, '← м. Лиман (48.980, 37.817)', COLORS.WHT, 7);
    zoneLabel(49.220, 37.270, '← м. Ізюм (49.191, 37.278)', COLORS.WHT, 7);
    zoneLabel(48.170, 37.740, '← м. Авдіївка (48.136, 37.745)', COLORS.RED, 7);
    zoneLabel(48.090, 37.670, '← с. Піски (48.066, 37.675)', COLORS.RED, 7);
    zoneLabel(48.940, 38.250, '← с. Білогорівка (48.924, 38.247)', COLORS.RED, 7);
    zoneLabel(48.040, 38.010, '← м. Бахмут (48.585, 38.003)', COLORS.RED, 7);
    zoneLabel(48.050, 37.810, '← м. Донецьк (48.017, 37.803)', COLORS.RED, 8);

    // =========================================================
    // DONETSK OBLAST TERRAIN
    // =========================================================
    ar([
        [49.200, 36.800], [49.200, 38.400],
        [48.000, 38.400], [48.000, 36.800]
    ], '#d4c5a0', '#d4c5a0', 0.06);
    zoneLabel(48.100, 37.100, 'ДОНЕЦЬКА ОБЛАСТЬ\nСтеп + промзони\nВідкрита місцевість', '#b8a57f', 8);

    // =========================================================
    // RIVERS
    // =========================================================
    // р. Кривий Торець (N-S through Kostiantynivka)
    ln([
        [48.800, 37.660], [48.700, 37.680], [48.600, 37.690],
        [48.533, 37.695], [48.450, 37.700]
    ], COLORS.CYN, 2.5);
    zoneLabel(48.450, 37.685, 'р. Кривий Торець', COLORS.CYN, 7);

    // р. Казенний Торець (near Kramatorsk)
    ln([
        [48.850, 37.550], [48.800, 37.560], [48.738, 37.589],
        [48.680, 37.600], [48.620, 37.525]
    ], COLORS.CYN, 2.5);
    zoneLabel(48.680, 37.585, 'р. Казенний Торець', COLORS.CYN, 7);

    // р. Сіверський Донець (north, near Lyman/Izyum)
    ln([
        [49.250, 37.200], [49.200, 37.300], [49.100, 37.500],
        [49.050, 37.650], [48.980, 37.817], [48.924, 38.000]
    ], COLORS.CYN, 3);
    zoneLabel(49.120, 37.400, 'р. Сіверський Донець', COLORS.CYN, 8);

    // =========================================================
    // MAJOR ROADS
    // =========================================================
    // Краматорськ — Костянтинівка (N-S corridor)
    ln([[48.738, 37.589], [48.650, 37.640], [48.533, 37.695]], '#666', 1.5, '8 4');
    zoneLabel(48.650, 37.630, 'Н-20', '#666', 7);

    // Краматорськ — Дружківка
    ln([[48.738, 37.589], [48.680, 37.560], [48.620, 37.525]], '#666', 1.5, '8 4');

    // Краматорськ — Лиман
    ln([[48.738, 37.589], [48.850, 37.700], [48.980, 37.817]], '#666', 1.5, '8 4');

    // =========================================================
    // FRONTLINE (approximate 2024, east of Kostiantynivka)
    // =========================================================
    ln([
        [49.050, 37.650], [48.980, 37.700], [48.900, 37.750],
        [48.800, 37.800], [48.700, 37.830], [48.600, 37.820],
        [48.500, 37.810], [48.400, 37.800], [48.300, 37.810],
        [48.200, 37.830], [48.136, 37.850], [48.066, 37.850]
    ], COLORS.ORG, 3, '8 4');
    zoneLabel(48.800, 37.810, '── ЛІНІЯ ФРОНТУ ──', COLORS.ORG, 10);

    // =========================================================
    // ENEMY POSITIONS (east of frontline)
    // =========================================================
    zoneLabel(48.700, 38.000, 'РФ — ВОЙСЬКА (Східний напрямок)', COLORS.RED, 10);

    // Enemy formation near Horlivka
    mk(48.350, 38.050, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСД</text>`, 'РФ МСД', 'Мотострілецька дивізія\nГорлівський напрямок\nТ-72Б3 + БМП-2 + 2С19\n~30 км від Краматорська', [80,80]);

    // Enemy formation near Donetsk
    mk(48.017, 38.100, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АК</text>`, 'РФ 1 АК', '1-й Армійський Корпус\nДонецьький напрямок\n~55 км від Краматорська', [80,80]);

    // Enemy artillery
    mk(48.500, 38.100, `<circle cx="25" cy="25" r="15" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">152</text>`, 'РФ АРТ', '152мм 2С19 Мста-С\nДальність: 25 км\nУдари по позиціях ЗСУ', [75,75]);
    circ(48.500, 38.100, 25000, COLORS.RED, 0.02);

    // Enemy aviation
    mk(48.800, 38.300, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">КАБ</text>`, 'РФ АВІАЦІЯ', 'Су-34 / Су-35\nКАБ-500 / ФАБ-1500\nУдари по позиціях', [70,70]);

    // Enemy attack directions
    ln([[48.500, 38.000], [48.533, 37.800], [48.600, 37.700]], COLORS.RED, 2.5, '8 4');
    ln([[48.350, 38.000], [48.400, 37.850], [48.450, 37.750]], COLORS.RED, 2.5, '8 4');
    zoneLabel(48.480, 37.920, 'НАПРЯМОК\nАТАКИ ←', COLORS.RED, 8);

    // =========================================================
    // BRIGADE HEADQUARTERS (Kramatorsk)
    // =========================================================
    mk(48.738, 37.589, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,10 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="36" x2="35" y2="36" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ШТАБ 81 ОАеМБр', 'Штаб бригади\nм. Краматорськ (Mapbox: 48.738, 37.589)\nStarlink + GIS Arta + Kropyva\nКомбриг: полковник Явкун О.І.\nв/ч А2120 | 7 КДШВ', [85,85]);

    // =========================================================
    // BRIGADE STRUCTURE — BATTALIONS
    // =========================================================
    zoneLabel(48.780, 37.550, 'ПІДРОЗДІЛИ БРИГАДИ:', COLORS.BLU, 10);

    // 1-й аеромобільний батальйон
    mk(48.760, 37.620, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">1 АеМ</text>`, '1-й АеМБ', '1-й аеромобільний батальйон\n~300 бійців\nБМП-2 + Puma 6x6\nКраматорськ — східний сектор', [80,80]);

    // 2-й аеромобільний батальйон
    mk(48.700, 37.550, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">2 АеМ</text>`, '2-й АеМБ', '2-й аеромобільний батальйон\n~300 бійців\nStryker + Козак-2М1\nКраматорськ — західний сектор', [80,80]);

    // 3-й аеромобільний батальйон (Дружківка)
    mk(48.620, 37.525, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">3 АеМ</text>`, '3-й АеМБ', '3-й аеромобільний батальйон\nм. Дружківка (Mapbox: 48.620, 37.525)\n~300 бійців\n~13.2 км від Краматорська', [80,80]);

    // 90-й окремий аеромобільний батальйон ім. Івана Зубкова (Костянтинівка)
    mk(48.533, 37.695, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="5" y1="45" x2="45" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">90 АеМ</text>`, '90-й ОАеМБ', '90-й окремий аеромобільний батальйон\nім. Героя України Івана Зубкова\nм. Костянтинівка (Mapbox: 48.533, 37.695)\n~400 бійців | найближчий до фронту\n~12.8 км від лінії фронту', [85,85]);

    // 238-й окремий стрілецький батальйон
    mk(48.660, 37.650, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">238</text>`, '238-й ОСБ', '238-й окремий стрілецький батальйон\n~250 бійців\nРезерв + охорона', [75,75]);

    // 5-та батальйонна тактична група (Полтава)
    mk(49.594, 34.548, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">5 БТГ</text>`, '5-та БТГр', '5-та батальйонна тактична група\nм. Полтава (Mapbox: 49.594, 34.548)\nТилова база + підготовка\n~180 км від Краматорська', [80,80]);

    // Connection lines from HQ to battalions
    ln([[48.738, 37.589], [48.760, 37.620]], COLORS.BLU, 1.5, '4 2');
    ln([[48.738, 37.589], [48.700, 37.550]], COLORS.BLU, 1.5, '4 2');
    ln([[48.738, 37.589], [48.620, 37.525]], COLORS.BLU, 1.5, '4 2');
    ln([[48.738, 37.589], [48.533, 37.695]], COLORS.BLU, 1.5, '4 2');
    ln([[48.738, 37.589], [48.660, 37.650]], COLORS.GRN, 1.5, '4 2');

    // =========================================================
    // BRIGADE ARTILLERY GROUP
    // =========================================================
    zoneLabel(48.790, 37.630, 'БРАГ (Бригадна артилерійська група)', COLORS.YEL, 9);

    // Self-propelled howitzer battalion
    mk(48.770, 37.650, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">155</text>`, 'САГаД', 'Самохідний гаубичний\nартилерійський дивізіон\n155мм / 152мм\nДальність: 18-30 км', [75,75]);

    // Self-propelled artillery battalion
    mk(48.780, 37.670, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">САД</text>`, 'САД', 'Самохідний артилерійський\nдивізіон\n2С3 Акація / M109\nДальність: 18-24 км', [75,75]);

    // Howitzer battalion
    mk(48.760, 37.670, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ГаД</text>`, 'ГаД', 'Гаубичний артилерійський\nдивізіон\nM777 / Д-30\nДальність: 15-24 км', [70,70]);

    // Rocket artillery battalion
    mk(48.750, 37.640, `<circle cx="25" cy="25" r="15" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.PNK}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">РАД</text>`, 'РАД', 'Реактивно-артилерійський\nдивізіон\nРСЗВ «Град» / BM-21\nДальність: 20-40 км', [70,70]);

    // Anti-tank battery
    mk(48.740, 37.610, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">ПТБ</text>`, 'ПТБ', 'Протитанкова батарея\nСтугна-П / Фагот / Метис\nДальність: 2-5 км\nПрикриває танконебезпечні напрямки', [70,70]);

    // Artillery fire to frontline
    ln([[48.770, 37.650], [48.600, 37.810]], COLORS.ORG, 1.5, '5 3');
    ln([[48.780, 37.670], [48.500, 37.820]], COLORS.ORG, 1.5, '5 3');
    circ(48.770, 37.650, 20000, COLORS.ORG, 0.02);

    // =========================================================
    // AIR DEFENSE (Зенітний ракетно-артилерійський дивізіон)
    // =========================================================
    mk(48.720, 37.560, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><line x1="25" y1="42" x2="25" y2="12" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 17,20 33,20" fill="${COLORS.CYN}"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.CYN}" font-size="5" font-weight="bold">ЗРАД</text>`, 'ЗРАД', 'Зенітний ракетно-артилерійський\nдивізіон\nІгла ПЗРК + ЗУ-23-2\nПрикриває штаб + позиції\nРадіус: 5-8 км', [75,75]);
    circ(48.720, 37.560, 5000, COLORS.CYN, 0.03);

    // =========================================================
    // RECONNAISSANCE & SNIPERS
    // =========================================================
    mk(48.600, 37.750, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="25" y1="5" x2="25" y2="45" stroke="${COLORS.CYN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">РР</text>`, 'Розвідрота', 'Розвідувальна рота\nБПЛА + ДРГ\nПередова: Костянтинівка\n~5 км від лінії фронту', [80,80]);

    mk(48.580, 37.770, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}66" stroke="${COLORS.RED}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="22" r="3" fill="${COLORS.RED}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">СНП</text>`, 'Рота снайперів', 'Рота снайперів\nСВД / Barrett M82\nКонтрснайпінг + ДРГ\nКостянтинівський напрямок', [75,75]);

    // =========================================================
    // EQUIPMENT MARKERS
    // =========================================================
    zoneLabel(48.830, 37.590, 'ОЗБРОЄННЯ:', COLORS.WHT, 9);

    mk(48.820, 37.610, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">БМП-2</text>`, 'БМП-2', 'БМП-2\n30мм гармата + ПТРК\nОсновна БМП бригади', [70,70]);

    mk(48.830, 37.630, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Stryker</text>`, 'Stryker', 'Stryker ICV\n8×8 колісна БТР\nШвидке перекидання\nДесант = 9 бійців', [70,70]);

    mk(48.840, 37.650, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Puma</text>`, 'Puma 6×6', 'Puma 6×6\nНімецька ББМ\nМобільність + захист\nРозвідка + патруль', [70,70]);

    mk(48.840, 37.610, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">Козак</text>`, 'Козак-2М1', 'Козак-2М1\nУкраїнська МРАП\n20 одиниць у бригаді\nМінний захист + кулемет', [70,70]);

    // =========================================================
    // HISTORICAL BATTLE LOCATIONS
    // =========================================================
    zoneLabel(48.070, 37.900, 'БОЙОВИЙ ШЛЯХ:', COLORS.WHT, 10);

    // Донецький аеропорт (2014-2015)
    mk(48.017, 37.803, `<polygon points="25,5 28,18 42,18 31,26 35,40 25,32 15,40 19,26 8,18 22,18" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="23" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ДАП</text>`, 'Донецький аеропорт', 'Донецький аеропорт\nЛистопад 2014 — січень 2015\nБойове хрещення бригади\n«Кіборги» — оборона терміналів\nГерой України: Іван Зубков\nГерой України: Ігор Зініч\nГерой України: Ігор Брановицький', [80,80]);

    // Авдіївка (2016)
    mk(48.136, 37.745, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">АВД</text>`, 'Авдіївка', 'Авдіївська промзона\n8 місяців безперервних боїв\n2016 рік\nОборона позицій', [70,70]);

    // Піски (2015)
    mk(48.066, 37.675, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ПСК</text>`, 'Піски', 'Оборона Пісків\n2015 рік\nПрилеглі райони аеропорту\nОпитне + Водяне', [70,70]);

    // Лиман (2022)
    mk(48.980, 37.817, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ЛИМ</text>`, 'Лиман 2022', 'Бої за Лиман\nВересень-жовтень 2022\nЗвільнення від РФ\nМасштабні бої', [75,75]);

    // Білогорівка (2022-2023)
    mk(48.924, 38.247, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">БІЛ</text>`, 'Білогорівка', 'Бої за Білогорівку\n2022-2023\nУтримання позицій\nСіверський Донець', [75,75]);

    // Ізюм (2022 — Слобожанський контрнаступ)
    mk(49.191, 37.278, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ІЗЮМ</text>`, 'Ізюм 2022', 'Бої за Ізюм\nВересень 2022\nСлобожанський контрнаступ\nЗвільнення міста', [80,80]);

    // Бахмут (2022-2023)
    mk(48.585, 38.003, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">БАХ</text>`, 'Бахмут 2022-23', 'Битва за Бахмут\n2022-2023\nНайтриваліший бій війни\nОборона + відступ', [80,80]);

    // Суми / Рубіжне (2022)
    mk(48.400, 38.200, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">РБЖ</text>`, 'Рубіжне 2022', 'Бої за Рубіжне\n2022 рік\nОборона міста\nРазом з іншими підрозділами', [70,70]);

    // Connection lines showing combat path
    ln([
        [48.017, 37.803], [48.066, 37.675], [48.136, 37.745],
        [48.400, 38.200], [48.585, 38.003], [48.924, 38.247],
        [48.980, 37.817], [49.191, 37.278]
    ], COLORS.ORG, 2, '10 5');

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Paratrooper drop (aeromobile insertion near Lyman)
    const paradrop = mkAnim(48.950, 37.780, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">81</text>`, '81→', '', [55,55]);
    animations.push({
        marker: paradrop,
        path: [
            [48.900, 37.700], [48.920, 37.740], [48.940, 37.780],
            [48.960, 37.810], [48.980, 37.830]
        ],
        step: 0,
        speed: 0.004,
    });

    // 2. Stryker column movement
    const stryker = mkAnim(48.738, 37.589, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">STR</text>`, 'Stryker→', '', [55,55]);
    animations.push({
        marker: stryker,
        path: [
            [48.738, 37.589], [48.700, 37.620], [48.660, 37.660],
            [48.620, 37.700], [48.580, 37.740]
        ],
        step: 0,
        speed: 0.003,
    });

    // 3. Artillery shell from BARG
    const artyShell = mkAnim(48.770, 37.650, `<circle cx="25" cy="25" r="12" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАР→', '', [50,50]);
    animations.push({
        marker: artyShell,
        path: [
            [48.770, 37.650], [48.720, 37.720], [48.670, 37.770],
            [48.620, 37.800], [48.580, 37.810]
        ],
        step: 0,
        speed: 0.006,
    });

    // 4. FPV drone patrol
    const fpv = mkAnim(48.600, 37.750, `<line x1="10" y1="10" x2="35" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><line x1="35" y1="10" x2="10" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="10" cy="35" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="35" r="3" fill="${COLORS.PUR}"/>`, 'FPV', '', [45,45]);
    animations.push({
        marker: fpv,
        path: [
            [48.580, 37.740], [48.590, 37.770], [48.600, 37.790],
            [48.610, 37.770], [48.620, 37.750], [48.610, 37.730],
            [48.600, 37.730], [48.580, 37.740]
        ],
        step: 0,
        speed: 0.006,
    });

    startAnimation(animations, '_81AEMBAnimFrame');

    // =========================================================
    // GRIFFIN SYMBOL (brigade emblem description)
    // =========================================================
    const griffinIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:260px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:12px;margin-bottom:6px;">&#9876; 81-ша ОАеМБр «СЛОБОЖАНСЬКА»</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Mapbox: Краматорськ (48.738, 37.589) | 7 КДШВ | в/ч А2120</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#40c4ff;font-weight:700;">СТРУКТУРА:</div>
                <div>&#8226; <span style="color:#40c4ff;">1, 2, 3-й АеМБ</span> — аеромобільні батальйони</div>
                <div>&#8226; <span style="color:#9c27b0;">90-й ОАеМБ</span> — ім. Героя України Івана Зубкова (Костянтинівка)</div>
                <div>&#8226; <span style="color:#4caf50;">238-й ОСБ</span> — стрілецький батальйон</div>
                <div>&#8226; <span style="color:#ff9800;">5-та БТГр</span> — тактична група (Полтава, 180 км)</div>
                <div style="color:#ffeb3b;font-weight:700;margin-top:4px;">БРАГ:</div>
                <div>&#8226; САГаД + САД + ГаД + РАД + ПТБ</div>
                <div>&#8226; ЗРАД (ПЗРК Ігла + ЗУ-23-2)</div>
                <div style="color:#ef5350;font-weight:700;margin-top:4px;">ОЗБРОЄННЯ:</div>
                <div>&#8226; БМП-2, Stryker, Puma 6×6, Козак-2М1 (20 од.)</div>
                <div>&#8226; РПГ-7Д, Фагот, Метис, АГС-17</div>
                <div>&#8226; 82-мм міномети, 2Б9</div>
                <div style="color:#ff9800;font-weight:700;margin-top:4px;">БОЙОВИЙ ШЛЯХ:</div>
                <div>&#8226; <span style="color:#ff9800;">2014-15</span> — Донецький аеропорт (бойове хрещення)</div>
                <div>&#8226; <span style="color:#ff9800;">2015</span> — Піски, Опитне, Водяне</div>
                <div>&#8226; <span style="color:#ff9800;">2016</span> — Авдіївка (8 місяців боїв)</div>
                <div>&#8226; <span style="color:#ff9800;">2016-17</span> — Світлодарська дуга, Мар'їнське</div>
                <div>&#8226; <span style="color:#4caf50;">2022</span> — Слобожанський контрнаступ (Ізюм, Лиман)</div>
                <div>&#8226; <span style="color:#ef5350;">2022-23</span> — Бахмут, Білогорівка, Рубіжне</div>
                <div style="color:#ff4081;font-weight:700;margin-top:4px;">НАГОРОДИ:</div>
                <div>&#8226; «За мужність та відвагу» (28.06.2022)</div>
                <div>&#8226; Почесне звання «Слобожанська» (20.11.2023)</div>
                <div>&#8226; 3 Герої України (Зубков, Зініч, Брановицький)</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                Створена: 07.10.2014 з бійців 95, 80 ОАеМБр та 25 ОПДБр<br>
                Гасло: «Народжені перемагати!» | Грифон = сила землі + панування в повітрі<br>
                Базування: Краматорськ, Костянтинівка, Дружківка, Полтава
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.870, 37.780], { icon: griffinIcon, interactive: false }).addTo(map));

    // Fly to Kramatorsk — brigade HQ area
    map.flyTo([48.680, 37.650], 10, { duration: 1.5 });
}

window.build81AEMBViz = build81AEMBViz;
