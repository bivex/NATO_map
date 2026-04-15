// ===== 91-ша окрема Охтирська бригада підтримки =====
// 91 ОБрП — Інженерні війська ЗСУ — «Попереду перших»
// Mapbox verified: Охтирка [50.312, 34.887] | Суми [50.910, 34.799]
// Тростянець [50.480, 34.965] | Балаклія [49.451, 36.842]
// Дебальцеве [48.341, 38.400] | Іловайськ [47.926, 38.198]
// Курахове [47.987, 37.273] | Лебедин [50.360, 34.710]
// Конотоп [51.230, 33.210] | Шостка [51.860, 33.490]
// Харків [49.993, 36.230]
// Coordinate math at 50.3°N: 0.001° lat = 111m, 0.001° lng = 71.1m

function build91SupportBrigadeViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._91SupportAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(50.850, 34.900, '───── 91-ша ОБрП «ОХТИРСЬКА» ─────', COLORS.BLU, 12);
    zoneLabel(50.820, 34.890, 'БРИГАДА ПІДТРИМКИ | ІНЖЕНЕРНІ ВІЙСЬКА ЗСУ\n«Попереду перших» | в/ч A0560 | ОК «Схід»', COLORS.WHT, 9);

    // =========================================================
    // REGION TERRAIN
    // =========================================================
    // Сумська область
    ar([
        [51.400, 33.500], [51.400, 36.500],
        [50.000, 36.500], [50.000, 33.500]
    ], '#2e4a1e', '#2e4a1e', 0.06);
    zoneLabel(50.200, 35.000, 'СУМСЬКА ОБЛАСТЬ\nЛіси + річки\nПолісся', '#5a8a3a', 8);

    // Харківська область (southern part)
    ar([
        [50.000, 35.500], [50.000, 37.500],
        [49.000, 37.500], [49.000, 35.500]
    ], '#3a2e1e', '#3a2e1e', 0.04);
    zoneLabel(49.500, 36.400, 'ХАРКІВСЬКА\nОБЛАСТЬ', '#7a6a4a', 8);

    // =========================================================
    // RIVERS
    // =========================================================
    // р. Ворскла (through Okhtyrka)
    ln([
        [50.700, 34.800], [50.600, 34.850], [50.480, 34.900],
        [50.312, 34.887], [50.200, 34.900], [50.100, 34.920]
    ], COLORS.CYN, 2.5);
    zoneLabel(50.150, 34.905, 'р. Ворскла', COLORS.CYN, 7);

    // р. Псел (west of Sumy)
    ln([
        [51.100, 33.600], [51.000, 33.700], [50.910, 34.100],
        [50.800, 34.400], [50.700, 34.600]
    ], COLORS.CYN, 2);
    zoneLabel(50.950, 33.800, 'р. Псел', COLORS.CYN, 7);

    // р. Сіверський Донець (far south)
    ln([
        [50.200, 36.000], [50.100, 36.200], [50.000, 36.400],
        [49.900, 36.600], [49.800, 36.800]
    ], COLORS.CYN, 2.5);
    zoneLabel(50.050, 36.100, 'р. Сів. Донець', COLORS.CYN, 7);

    // =========================================================
    // MAJOR ROADS
    // =========================================================
    // Суми — Охтирка (M01 / H-12)
    ln([[50.910, 34.799], [50.700, 34.850], [50.500, 34.880], [50.312, 34.887]], '#666', 1.5, '8 4');
    zoneLabel(50.610, 34.835, 'H-12', '#666', 7);

    // Охтирка — Тростянець
    ln([[50.312, 34.887], [50.400, 34.920], [50.480, 34.965]], '#666', 1.5, '8 4');

    // Охтирка — Полтава
    ln([[50.312, 34.887], [50.250, 34.950], [50.100, 35.200]], '#666', 1.5, '8 4');
    zoneLabel(50.200, 35.050, 'Н-12→Полтава', '#666', 6);

    // Суми — Конотоп
    ln([[50.910, 34.799], [51.050, 34.300], [51.230, 33.210]], '#666', 1.5, '8 4');

    // =========================================================
    // RUSSIAN BORDER & THREAT AXIS (north-east)
    // =========================================================
    ln([
        [51.800, 35.200], [51.600, 35.400], [51.400, 35.500],
        [51.200, 35.600], [51.000, 35.600], [50.800, 35.500]
    ], COLORS.RED, 3, '8 4');
    zoneLabel(51.300, 35.650, '── КОРДОН РФ ──', COLORS.RED, 9);

    // Russian threat direction (Sumy axis)
    ln([
        [51.400, 35.400], [51.200, 35.200], [51.000, 35.000],
        [50.910, 34.799]
    ], COLORS.RED, 2, '6 3');
    zoneLabel(51.150, 35.100, 'НАПРЯМОК\nЗАГРОЗИ ←', COLORS.RED, 8);

    // Enemy forces near border
    mk(51.500, 35.800, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСД</text>`, 'РФ МСД', 'Мотострілецька дивізія\nКурський напрямок\nТ-72Б3 + БМП-3 + 2С19\nЗагроза Сумщині', [80,80]);

    mk(51.600, 36.200, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ТАК</text>`, 'РФ ТАК', 'Тактична група\nБєлгородський напрямок\nПонад 20 км від кордону', [75,75]);

    // Enemy MLRS range circle
    circ(51.500, 35.800, 40000, COLORS.RED, 0.02);

    // =========================================================
    // BRIGADE HEADQUARTERS (Okhtyrka)
    // =========================================================
    mk(50.312, 34.887, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,10 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="36" x2="35" y2="36" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ШТАБ 91 ОБрП', 'Штаб бригади\nм. Охтирка (Mapbox: 50.312, 34.887)\nin/ч A0560 | ОК «Схід»\nДислокация з 1992 року\nГасло: «Попереду перших»', [85,85]);

    // HQ protection circle
    circ(50.312, 34.887, 3000, COLORS.CYN, 0.03);

    // =========================================================
    // BRIGADE STRUCTURE — ENGINEER/ENGINEER BATTALIONS
    // =========================================================
    zoneLabel(50.380, 34.850, 'ПІДРОЗДІЛИ БРИГАДИ:', COLORS.BLU, 10);

    // 1-й інженерний батальйон (Okhtyrka)
    mk(50.330, 34.920, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="30" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="20" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">1 ІНЖ</text>`, '1-й ІНЖБ', '1-й інженерний батальйон\nФортифікаційні роботи\nОкопи + бліндажі + укриття\nIMR-2 + МДК-3', [80,80]);

    // 2-й інженерний батальйон (Lebedyn)
    mk(50.360, 34.710, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="30" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="20" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">2 ІНЖ</text>`, '2-й ІНЖБ', '2-й інженерний батальйон\nм. Лебедин (Mapbox: 50.360, 34.710)\nМінування + розмінування\nMINSTAFFLAR + МОН-50/100', [80,80]);

    // 3-й інженерний батальйон (Trostianets)
    mk(50.480, 34.965, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="30" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="20" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">3 ІНЖ</text>`, '3-й ІНЖБ', '3-й інженерний батальйон\nм. Тростянець (Mapbox: 50.480, 34.965)\nМістобудування + переправи\nПонтонні мости + МТУ', [80,80]);

    // 91-й окремий батальйон розмінування
    mk(50.280, 34.800, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="25" r="10" fill="none" stroke="${COLORS.YEL}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">РОЗМ</text>`, 'Батальйон розмінування', 'Батальйон розмінування\nBOZENA + MINSTAFFLAR\nГуманітарне + бойове розмінування\nДЕМИНГ територій', [80,80]);

    // Понтонно-мостова рота
    mk(50.350, 34.950, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><rect x="12" y="20" width="26" height="8" rx="2" fill="none" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="15" y1="15" x2="35" y2="15" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="15" y1="33" x2="35" y2="33" stroke="${COLORS.CYN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ПМР</text>`, 'Понтонно-мостова рота', 'Понтонно-мостова рота\nПП-91 / ПМП\nОрганізація переправ\nНаведення мостів через річки', [80,80]);

    // Рота матеріального забезпечення
    mk(50.290, 34.920, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BRN}44" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="25" cy="25" r="6" fill="none" stroke="${COLORS.BRN}" stroke-width="1.5"/><line x1="5" y1="25" x2="19" y2="25" stroke="${COLORS.BRN}" stroke-width="1.5"/><line x1="31" y1="25" x2="45" y2="25" stroke="${COLORS.BRN}" stroke-width="1.5"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">РМЗ</text>`, 'Рота МЗ', 'Рота матеріального забезпечення\nПостачання інженерних матеріалів\nМіни, вибухівка, кільтки\nБульдозери, екскаватори', [75,75]);

    // Connection lines from HQ
    ln([[50.312, 34.887], [50.330, 34.920]], COLORS.GRN, 1.5, '4 2');
    ln([[50.312, 34.887], [50.360, 34.710]], COLORS.GRN, 1.5, '4 2');
    ln([[50.312, 34.887], [50.480, 34.965]], COLORS.GRN, 1.5, '4 2');
    ln([[50.312, 34.887], [50.280, 34.800]], COLORS.YEL, 1.5, '4 2');
    ln([[50.312, 34.887], [50.350, 34.950]], COLORS.CYN, 1.5, '4 2');
    ln([[50.312, 34.887], [50.290, 34.920]], COLORS.BRN, 1.5, '4 2');

    // =========================================================
    // EQUIPMENT MARKERS
    // =========================================================
    zoneLabel(50.430, 34.800, 'ІНЖЕНЕРНА ТЕХНІКА:', COLORS.WHT, 9);

    // IMR-2
    mk(50.410, 34.820, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><ellipse cx="25" cy="22" rx="14" ry="10" fill="none" stroke="${COLORS.GRN}" stroke-width="1.5"/><rect x="15" y="30" width="20" height="6" rx="1" fill="${COLORS.GRN}88" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="5" font-weight="bold">ІМР-2</text>`, 'ІМР-2', 'Інженерна машина розгородження\nНа базі Т-72\nКліщі + бульдозерний ніж\nРозмінування + розгородження', [70,70]);

    // MDK-3
    mk(50.420, 34.840, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><rect x="10" y="12" width="30" height="16" rx="2" fill="none" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="25" y1="12" x2="25" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="23" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">МДК</text><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="5" font-weight="bold">МДК-3</text>`, 'МДК-3', 'Котляна машина\nМДК-3 на базі АТ-Т\nЗведення окопів + ровів\nПродуктивність: 300 м/год', [70,70]);

    // Excavator
    mk(50.430, 34.860, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><rect x="12" y="25" width="16" height="10" rx="2" fill="none" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="28" y1="25" x2="38" y2="10" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="36,8 40,10 38,14" fill="${COLORS.GRN}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="4" font-weight="bold">ЕКСКАВАТОР</text>`, 'Екскаватор', 'ЕО-2621 / ЕО-33211\nЗведення укриттів\nКопання окопів\nТраншеї для зв\'язку', [70,70]);

    // Bulldozer
    mk(50.440, 34.820, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><rect x="8" y="18" width="34" height="12" rx="2" fill="none" stroke="${COLORS.GRN}" stroke-width="1.5"/><rect x="5" y="22" width="40" height="6" rx="1" fill="${COLORS.GRN}66" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="4" font-weight="bold">БУЛЬДОЗЕР</text>`, 'Бульдозер', 'ДЕТ-250 / Т-130\nРозчищення шляхів\nЗведення валів\nГрунтові роботи', [70,70]);

    // BTR (protection/transport)
    mk(50.440, 34.860, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">БТР</text>`, 'БТР-80', 'БТР-80\nЗахист інженерів\nТранспортування\n14.5мм КПВТ', [70,70]);

    // MT-LB (multi-purpose)
    mk(50.450, 34.840, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><rect x="10" y="18" width="30" height="14" rx="3" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">МТ-ЛБ</text>`, 'МТ-ЛБ', 'МТ-ЛБ\nБроньований тягач\nТранспортування інженерів\nТиха хода: 5-7 км/год', [70,70]);

    // =========================================================
    // FORTIFICATION LINES (defensive works around Okhtyrka)
    // =========================================================
    zoneLabel(50.250, 34.920, 'ФОРТИФІКАЦІЙНІ РОБОТИ:', COLORS.YEL, 9);

    // Northern defense line
    ln([
        [50.400, 34.750], [50.380, 34.820], [50.370, 34.900],
        [50.380, 34.980], [50.400, 35.050]
    ], COLORS.YEL, 3);
    zoneLabel(50.395, 34.990, 'Рубіж укріплення №1\nОкопи + ДЗОТ + мінні поля', COLORS.YEL, 7);

    // Southern defense line
    ln([
        [50.220, 34.800], [50.230, 34.870], [50.240, 34.950],
        [50.230, 35.030], [50.220, 35.100]
    ], COLORS.YEL, 3);
    zoneLabel(50.225, 35.040, 'Рубіж укріплення №2\nБетонні укриття + «їжаки»', COLORS.YEL, 7);

    // Anti-tank ditches (represented as thicker dashed lines)
    ln([
        [50.370, 34.820], [50.360, 34.880], [50.350, 34.940]
    ], COLORS.ORG, 4, '6 2');
    zoneLabel(50.355, 34.875, 'ПТО рів\nПротитанковий рів', COLORS.ORG, 6);

    // Minefield zones
    ar([
        [50.350, 34.820], [50.370, 34.820],
        [50.370, 34.870], [50.350, 34.870]
    ], COLORS.PNK, COLORS.PNK, 0.08);
    zoneLabel(50.360, 34.840, 'МП-1\nМінне поле', COLORS.PNK, 6);

    ar([
        [50.350, 34.910], [50.370, 34.910],
        [50.370, 34.960], [50.350, 34.960]
    ], COLORS.PNK, COLORS.PNK, 0.08);
    zoneLabel(50.360, 34.930, 'МП-2\nМінне поле', COLORS.PNK, 6);

    ar([
        [50.250, 34.850], [50.270, 34.850],
        [50.270, 34.900], [50.250, 34.900]
    ], COLORS.PNK, COLORS.PNK, 0.08);
    zoneLabel(50.260, 34.870, 'МП-3\nМінне поле', COLORS.PNK, 6);

    // =========================================================
    // BRIDGE CROSSING POINTS (rivers)
    // =========================================================
    zoneLabel(50.470, 34.970, 'ПЕРЕПРАВИ:', COLORS.CYN, 9);

    // Bridge at Trostianets over Vorskla
    mk(50.480, 34.960, `<rect x="10" y="18" width="30" height="14" rx="2" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="18" x2="10" y2="32" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="40" y1="18" x2="40" y2="32" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">МІСТ</text>`, 'Переправа №1', 'Понтонний міст\nр. Ворскла біля Тростянця\nПП-91 «Каліна»\nВантажність: 60 т\nЧас наведення: 30 хв', [75,75]);

    // Bridge near Okhtyrka
    mk(50.310, 34.910, `<rect x="10" y="18" width="30" height="14" rx="2" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="18" x2="10" y2="32" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="40" y1="18" x2="40" y2="32" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">МІСТ</text>`, 'Переправа №2', 'Капітальний міст\nм. Охтирка через р. Ворскла\nЗахищений + підсилений\nОсновний шлях постачання', [75,75]);

    // =========================================================
    // OKHTYRKA DEFENSE (February 2022)
    // =========================================================
    zoneLabel(50.220, 34.860, 'ОБОРОНА ОХТИРКИ — ЛЮТИЙ 2022:', COLORS.RED, 10);

    // Memorial marker for Feb 26 airstrike
    mk(50.305, 34.860, `<polygon points="25,3 28,16 42,16 31,24 35,38 25,30 15,38 19,24 8,16 22,16" fill="${COLORS.RED}88" stroke="${COLORS.RED}" stroke-width="1.5"/><text x="25" y="20" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">26.02</text>`, 'Авиаудар 26.02.2022', 'АВИАУДАР ПО КАЗАРМАМ\n26 лютого 2022 року\nРакетний удар по військовій частині\n70+ загиблих солдат\nВеролітний удар у перші дні війни\nВключено до списку воєнних злочинів РФ', [80,80]);

    // Defense positions around Okhtyrka (Feb 2022)
    mk(50.340, 34.850, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ОБР</text>`, 'Оборона пн.', 'Північна оборона\nОбхід Охтирки з півночі\nКонтратака + утримання\nЛютий 2022', [70,70]);

    mk(50.280, 34.870, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ОБР</text>`, 'Оборона пд.', 'Південна оборона\nБлокування просування РФ\nЗнищення колон\nЛютий-березень 2022', [70,70]);

    // Enemy approach direction (Feb 2022)
    ln([
        [50.700, 35.200], [50.550, 35.000], [50.400, 34.950],
        [50.312, 34.887]
    ], COLORS.RED, 2.5, '6 3');
    zoneLabel(50.550, 35.050, 'НАПРЯМОК АТАКИ\nРФ → Охтирка\nЛютий 2022', COLORS.RED, 7);

    // Destroyed Russian column
    mk(50.500, 35.000, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}22" stroke="${COLORS.RED}" stroke-width="1.5" stroke-dasharray="3"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="1"/><line x1="15" y1="18" x2="35" y2="32" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="35" y1="18" x2="15" y2="32" stroke="${COLORS.RED}" stroke-width="1.5"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">ЗНИЩ.</text>`, 'Знищена колона', 'Знищена колона РФ\nБлизько Тростянця\nБерезень 2022\nЗусиллями 91 ОБрП + 93 ОМБр', [70,70]);

    // =========================================================
    // HISTORICAL BATTLE LOCATIONS
    // =========================================================
    zoneLabel(48.200, 37.800, 'БОЙОВИЙ ШЛЯХ (2014-2022):', COLORS.WHT, 10);

    // Іловайськ (2014)
    mk(47.926, 38.198, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ІЛВ</text>`, 'Іловайськ 2014', 'Бої за Іловайськ\nСерпень 2014\nІнженерне забезпечення\nОборона позицій\n«Іловайський котел»', [80,80]);

    // Дебальцеве (2015)
    mk(48.341, 38.400, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ДЕБ</text>`, 'Дебальцеве 2015', 'Бої за Дебальцеве\nСічень-лютий 2015\nФортифікаційні роботи\nМінні загородження\nЕвакуація поранених', [80,80]);

    // Донецький аеропорт (2014-2015)
    mk(48.017, 37.803, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,5 28,18 42,18 31,26 35,40 25,32 15,40 19,26 8,18 22,18" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="23" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ДАП</text>`, 'Донецький аеропорт', 'Донецький аеропорт\n2014-2015\nРемонт укріплень\nПідтримка позицій\nІнженерна розвідка', [75,75]);

    // Курахове (2022-2024)
    mk(47.987, 37.273, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="30" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="20" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">КУР</text>`, 'Курахове 2022-24', 'Бої за Курахове\n2022-2024\nФортіфікаційні роботи\nОборона + укріплення', [75,75]);

    // Балаклія (2022 — Kharkiv counteroffensive)
    mk(49.451, 36.842, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">БЛК</text>`, 'Балаклія 2022', 'Звільнення Балаклії\nВересень 2022\nХарківський контрнаступ\nРозмінування міста\nІнженерна розвідка', [80,80]);

    // Combat path line
    ln([
        [47.926, 38.198], [48.017, 37.803], [48.341, 38.400],
        [47.987, 37.273], [49.451, 36.842]
    ], COLORS.ORG, 2, '10 5');

    // Connection from combat zone back to base
    ln([
        [49.451, 36.842], [49.800, 36.200], [50.100, 35.500],
        [50.312, 34.887]
    ], COLORS.GRN, 1.5, '10 5');
    zoneLabel(49.880, 36.000, 'ШЛЯХ ПІДТРИМКИ', COLORS.GRN, 7);

    // =========================================================
    // PEACEKEEPING MISSIONS
    // =========================================================
    zoneLabel(51.000, 34.200, 'МИРОТВОРЧІ МІСІЇ:', COLORS.WHT, 8);

    // Reference labels for peacekeeping countries (not on map, just info)
    mk(50.910, 34.799, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}22" stroke="${COLORS.BLU}" stroke-width="1.5"/><polygon points="25,8 30,20 42,20 32,28 36,40 25,33 14,40 18,28 8,20 20,20" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="1"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.BLU}" font-size="4" font-weight="bold">СУМИ</text>`, 'м. Суми (база)', 'Суми (Mapbox: 50.910, 34.799)\nТилова база бригади\nПідготовка + склади\n~55 км від Охтирки', [70,70]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Demining team movement (sweeping pattern)
    const demining = mkAnim(50.360, 34.840, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.YEL}55" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="25" r="10" fill="none" stroke="${COLORS.YEL}" stroke-width="1.5"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="25" y1="15" x2="25" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.YEL}" font-size="4" font-weight="bold">ДЕМ</text>`, 'Розмінування→', '', [50,50]);
    animations.push({
        marker: demining,
        path: [
            [50.360, 34.840], [50.360, 34.860], [50.350, 34.870],
            [50.350, 34.850], [50.340, 34.840], [50.340, 34.860],
            [50.360, 34.840]
        ],
        step: 0,
        speed: 0.005,
    });

    // 2. Engineer convoy (IMR-2 heading south to front)
    const convoy = mkAnim(50.400, 34.900, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}55" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="8" x2="25" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="25" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="25" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">91</text>`, 'Конвой→', '', [55,55]);
    animations.push({
        marker: convoy,
        path: [
            [50.312, 34.887], [50.200, 35.000], [50.100, 35.200],
            [49.900, 35.600], [49.700, 36.000]
        ],
        step: 0,
        speed: 0.004,
    });

    // 3. Pontoon bridge deployment
    const pontoon = mkAnim(50.470, 34.950, `<rect x="10" y="18" width="30" height="14" rx="2" fill="${COLORS.CYN}55" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="18" x2="10" y2="32" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="40" y1="18" x2="40" y2="32" stroke="${COLORS.CYN}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ПМП</text>`, 'Понтон→', '', [50,50]);
    animations.push({
        marker: pontoon,
        path: [
            [50.480, 34.940], [50.480, 34.950], [50.480, 34.960],
            [50.480, 34.970], [50.480, 34.980]
        ],
        step: 0,
        speed: 0.008,
    });

    // 4. FPV drone recon (support)
    const drone = mkAnim(50.350, 34.900, `<line x1="10" y1="10" x2="35" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><line x1="35" y1="10" x2="10" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="10" cy="35" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="35" r="3" fill="${COLORS.PUR}"/>`, 'БПЛА', '', [45,45]);
    animations.push({
        marker: drone,
        path: [
            [50.340, 34.880], [50.350, 34.900], [50.360, 34.920],
            [50.370, 34.900], [50.360, 34.880], [50.350, 34.870],
            [50.340, 34.880]
        ],
        step: 0,
        speed: 0.006,
    });

    startAnimation(animations, '_91SupportAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:12px;margin-bottom:6px;">&#9876; 91-ша ОБрП «ОХТИРСЬКА»</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Mapbox: Охтирка (50.312, 34.887) | в/ч A0560 | ОК «Схід»</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#4caf50;font-weight:700;">СТРУКТУРА (ІНЖЕНЕРНА):</div>
                <div>&#8226; <span style="color:#4caf50;">1, 2, 3-й ІНЖБ</span> — інженерні батальйони</div>
                <div>&#8226; <span style="color:#ffeb3b;">Батальйон розмінування</span> — BOZENA + MINSTAFFLAR</div>
                <div>&#8226; <span style="color:#00e5ff;">Понтонно-мостова рота</span> — ПП-91 / ПМП</div>
                <div>&#8226; <span style="color:#8d6e63;">Рота матеріального забезпечення</span></div>
                <div style="color:#ff9800;font-weight:700;margin-top:4px;">ТЕХНІКА:</div>
                <div>&#8226; ІМР-2 (на базі Т-72) — розгородження</div>
                <div>&#8226; МДК-3 — зведення окопів</div>
                <div>&#8226; Екскаватори ЕО-2621 / ЕО-33211</div>
                <div>&#8226; Бульдозери ДЕТ-250 / Т-130</div>
                <div>&#8226; БТР-80, МТ-ЛБ — захист + транспорт</div>
                <div style="color:#ef5350;font-weight:700;margin-top:4px;">БОЙОВИЙ ШЛЯХ:</div>
                <div>&#8226; <span style="color:#ef5350;">2014</span> — Іловайськ (інженерне забезпечення)</div>
                <div>&#8226; <span style="color:#ef5350;">2014-15</span> — Донецький аеропорт (ремонт укріплень)</div>
                <div>&#8226; <span style="color:#ef5350;">2015</span> — Дебальцеве (фортифікація + мінування)</div>
                <div>&#8226; <span style="color:#ff4081;">26.02.2022</span> — Авиаудар по казармах Охтирки (70+ загиблих)</div>
                <div>&#8226; <span style="color:#4caf50;">02-03.2022</span> — Оборона Охтирки + знищення колон РФ</div>
                <div>&#8226; <span style="color:#4caf50;">09.2022</span> — Балаклія (розмінування, Харківський контрнаступ)</div>
                <div>&#8226; <span style="color:#ff9800;">2022-24</span> — Курахове (фортифікаційні роботи)</div>
                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ЗАВДАННЯ:</div>
                <div>&#8226; Фортифікаційне обладнання позицій</div>
                <div>&#8226; Мінування та розмінування</div>
                <div>&#8226; Наведення переправ та понтонних мостів</div>
                <div>&#8226; Водопостачання військ</div>
                <div>&#8226; Інженерна розвідка</div>
                <div style="color:#ffeb3b;font-weight:700;margin-top:4px;">МИРОТВОРЧІ МІСІЇ:</div>
                <div>&#8226; Ірак (2003-2005) — 61-й окремий інженерний батальйон</div>
                <div>&#8226; Ліван (2006) — розмінування</div>
                <div>&#8226; Косово (2000-і) — інженерне забезпечення</div>
                <div style="color:#ff4081;font-weight:700;margin-top:4px;">ВТРАТИ:</div>
                <div>&#8226; 26.02.2022 — 70+ військових (авиаудар по казармах)</div>
                <div>&#8226; Загинули в боях: Іловайськ, Дебальцеве, Охтирка</div>
                <div style="color:#ffeb3b;font-weight:700;margin-top:4px;">НАГОРОДИ:</div>
                <div>&#8226; «За мужність та відвагу» (2022)</div>
                <div>&#8226; Почесне звання «Охтирська» (2023)</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                Створена: 1992 рік на базі інженерних підрозділів Сумського армійського корпусу<br>
                Гасло: «Попереду перших!» — інженери завжди йдуть першими<br>
                Базування: Охтирка, Лебедин, Тростянець
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([50.570, 34.780], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to Okhtyrka — brigade HQ area
    map.flyTo([50.350, 34.900], 10, { duration: 1.5 });
}

window.build91SupportBrigadeViz = build91SupportBrigadeViz;
