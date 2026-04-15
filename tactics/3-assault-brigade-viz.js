// ===== 3-тя окрема штурмова бригада =====
// 3 ОШБр — Сухопутні війська ЗСУ — На базі ОЗСП «Азов»
// Комбриг: полковник Андрій Білецький | 3-й армійський корпус (з 03.2025)
// Mapbox verified: Клещіївка [48.528, 37.958] | Сватове [49.417, 38.147]
// Скибин [50.580, 30.831] | Мощун [50.604, 30.308]
// Гуляйполе [47.666, 36.256] | Ворзель [50.541, 30.160]
// Відомі координати: Київ [50.450, 30.523] | Бахмут [48.585, 38.003]
// Авдіївка [48.136, 37.745] | Буча [50.549, 30.217]
// Ірпінь [50.522, 30.250] | Гостомель [50.570, 30.260]
// Васильків [50.100, 30.340] | Бровари [50.510, 30.800]
// Маріуполь [47.095, 37.540] | Херсон [46.635, 32.610]
// Запоріжжя [47.838, 35.139]
// Coordinate math at 48.5°N: 0.001° lat = 111m, 0.001° lng = 73.7m

function build3AssaultBrigadeViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._3AssaultAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.000, 37.700, '───── 3-тя ОШБр — ШТУРМОВА БРИГАДА ─────', COLORS.BLU, 12);
    zoneLabel(48.970, 37.690, 'СУХОПУТНІ ВІЙСЬКА ЗСУ | На базі ОЗСП «Азов»\nКомбриг: полковник Андрій Білецький | 3-й АК (з 03.2025)\nСтворена: 26.01.2023 | Дислокация: м. Київ', COLORS.WHT, 9);

    // =========================================================
    // DONETSK OBLAST TERRAIN
    // =========================================================
    ar([
        [49.300, 37.200], [49.300, 38.500],
        [47.800, 38.500], [47.800, 37.200]
    ], '#d4c5a0', '#d4c5a0', 0.05);
    zoneLabel(48.050, 37.400, 'ДОНЕЦЬКА ОБЛАСТЬ\nСтеп + промзони\nШахтарські міста', '#b8a57f', 8);

    // =========================================================
    // RIVERS
    // =========================================================
    // р. Сіверський Донець
    ln([
        [49.300, 37.500], [49.200, 37.700], [49.100, 37.900],
        [49.000, 38.100], [48.924, 38.300], [48.800, 38.500]
    ], COLORS.CYN, 3);
    zoneLabel(49.150, 37.750, 'р. Сіверський Донець', COLORS.CYN, 8);

    // р. Бахмутка (through Bakhmut)
    ln([
        [48.700, 37.950], [48.650, 37.980], [48.585, 38.003],
        [48.528, 37.958], [48.480, 37.920]
    ], COLORS.CYN, 2);
    zoneLabel(48.480, 37.905, 'р. Бахмутка', COLORS.CYN, 7);

    // =========================================================
    // MAJOR ROADS
    // =========================================================
    // Бахмут — Клещіївка (assault axis)
    ln([[48.585, 38.003], [48.560, 37.980], [48.528, 37.958]], '#666', 1.5, '8 4');
    zoneLabel(48.555, 37.965, 'Т-05-13', '#666', 7);

    // Бахмут — Авдіївка (via Donetske)
    ln([[48.585, 38.003], [48.400, 37.900], [48.200, 37.800], [48.136, 37.745]], '#666', 1.5, '8 4');

    // Бахмут — Сватове
    ln([[48.585, 38.003], [48.800, 38.200], [49.000, 38.300], [49.417, 38.147]], '#666', 1.5, '8 4');
    zoneLabel(49.000, 38.250, '→Сватове', '#666', 7);

    // =========================================================
    // FRONTLINE (approximate 2024, Donbas)
    // =========================================================
    ln([
        [49.300, 37.700], [49.200, 37.800], [49.100, 37.900],
        [49.000, 38.000], [48.900, 38.100], [48.800, 38.150],
        [48.700, 38.100], [48.600, 38.050], [48.528, 38.030],
        [48.450, 38.000], [48.350, 37.950], [48.250, 37.900],
        [48.200, 37.850], [48.136, 37.830]
    ], COLORS.ORG, 3, '8 4');
    zoneLabel(48.750, 38.130, '── ЛІНІЯ ФРОНТУ ──', COLORS.ORG, 10);

    // =========================================================
    // ENEMY POSITIONS (Donbas)
    // =========================================================
    zoneLabel(48.800, 38.350, 'РФ — ВОЙСЬКА (Донбас)', COLORS.RED, 10);

    // Enemy near Bakhmut (ПВК Вагнер / регулярні війська)
    mk(48.600, 38.200, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ПВК</text>`, 'РФ ПВК/МСБ', 'ПВК + мотострілецькі батальйони\nБахмутський напрямок\nШтурмові групи + арт\nПозиції на схід/південь Бахмута', [80,80]);

    // Enemy 72nd OMBR (defeated by 3rd Assault)
    mk(48.480, 38.100, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2" stroke-dasharray="4"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">72</text>`, 'РФ 72 ОМБР ✗', '72-га окрема мотострілецька бригада РФ\nРОЗБИТА 3 ОШБр (травень 2023)\nВтрати: значна кількість бійців + техніка\nВідступ від Клещіївки', [80,80]);

    // Enemy artillery positions
    mk(48.700, 38.250, `<circle cx="25" cy="25" r="15" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">152</text>`, 'РФ АРТ', '152мм 2С19 Мста-С\nКАБ + ФАБ\nУдари по Бахмуту + позиціях', [75,75]);
    circ(48.700, 38.250, 25000, COLORS.RED, 0.02);

    // Enemy aviation (Su-34 with KAB)
    mk(48.500, 38.350, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">КАБ</text>`, 'РФ АВІАЦІЯ', 'Су-34 / Су-35\nКАБ-500 / ФАБ-1500\nУдари по Бахмуту та Авдіївці', [70,70]);

    // Enemy attack direction toward Bakhmut
    ln([[48.600, 38.200], [48.585, 38.100], [48.585, 38.003]], COLORS.RED, 2.5, '6 3');
    zoneLabel(48.600, 38.120, 'НАПРЯМОК\nАТАКИ ←', COLORS.RED, 8);

    // =========================================================
    // BRIGADE HQ & COMMAND
    // =========================================================
    mk(48.560, 37.940, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,10 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="36" x2="35" y2="36" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ШТАБ 3 ОШБр', 'Штаб бригади\nПолковник Андрій Білецький\nStarlink + GIS Arta + Kropyva\nБахмутський напрямок\n3-й армійський корпус (з 03.2025)', [85,85]);

    // =========================================================
    // BRIGADE STRUCTURE
    // =========================================================
    zoneLabel(48.620, 37.900, 'ПІДРОЗДІЛИ БРИГАДИ:', COLORS.BLU, 10);

    // --- 1-й штурмовий батальйон ---
    mk(48.580, 37.970, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">1 ШБ</text>`, '1-й Штурмовий Б', '1-й штурмовий батальйон\n3-тя штурмова рота\n2-га штурмова рота\nРДГ «Hatred» | Вузол зв\'язку «S6»\nБахмут — північний сектор', [80,80]);

    // --- 2-й штурмовий батальйон ---
    mk(48.540, 37.990, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">2 ШБ</text>`, '2-й Штурмовий Б', '2-й штурмовий батальйон\n1-ша штурмова рота\nГалицький взвод | «Полоскуни»\nБахмут — південний сектор', [80,80]);

    // --- Батальон спецназу «Шквал» ---
    mk(48.610, 37.960, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="25" y1="5" x2="25" y2="45" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ШКВАЛ</text>`, 'БСП «Шквал»', 'Батальйон спеціального призначення\n«Шквал»\nДРГ + спецоперації\nТил противника + диверсії\nНайелітніший підрозділ бригади', [80,80]);

    // --- 1-й і 2-й механізовані батальйони ---
    mk(48.600, 37.920, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">1+2 МБ</text>`, '1-й + 2-й МехБ', '1-й та 2-й механізовані батальйони\nБМП-2 + YPR-765 + M113\nОсновна ударна сила\nБахмутський напрямок', [80,80]);

    // --- 1-й та 2-й стрілецькі батальйони ---
    mk(48.530, 37.940, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">1+2 СБ</text>`, '1-й + 2-й СтрБ', '1-й та 2-й стрілецькі батальйони\nПіхота + міномети\nУтримання позицій\nРезерв + підтримка', [75,75]);

    // --- Танковий батальйон ---
    mk(48.650, 37.950, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="25" y1="15" x2="25" y2="8" stroke="${COLORS.ORG}" stroke-width="2.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ТБ</text>`, 'Танковий батальйон', 'Танковий батальйон\nТрофейні Т-90, Т-72ЕА, Т-72М1\n2-га рота | «Стальні вовкулаки»\nБронегрупа штурму', [80,80]);

    // --- 1-й стрілецький інтернаціональний батальйон ---
    mk(48.520, 37.970, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.YEL}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.YEL}" stroke-width="1.5"/><text x="25" y="22" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ІНТ</text><text x="25" y="32" text-anchor="middle" fill="${COLORS.WHT}" font-size="4">БАТ</text>`, 'Інтербатальйон', '1-й стрілецький інтернаціональний батальйон\nРота «Іспанський Шторм»\nРота «Змії»\nРозвідка: «Терра», «Крила», «Москітос», «Фатум»', [80,80]);

    // --- Мінометна батарея ---
    mk(48.630, 37.930, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">МВ</text>`, 'Міномети «Mortars»', '1-ша мінометна батарея «Mortars»\n82-мм + 120-мм міномети\nНепосредня підтримка штурму\nДальність: 3-7 км', [70,70]);

    // Connection lines from HQ
    ln([[48.560, 37.940], [48.580, 37.970]], COLORS.BLU, 1.5, '4 2');
    ln([[48.560, 37.940], [48.540, 37.990]], COLORS.BLU, 1.5, '4 2');
    ln([[48.560, 37.940], [48.610, 37.960]], COLORS.PUR, 1.5, '4 2');
    ln([[48.560, 37.940], [48.600, 37.920]], COLORS.BLU, 1.5, '4 2');
    ln([[48.560, 37.940], [48.530, 37.940]], COLORS.GRN, 1.5, '4 2');
    ln([[48.560, 37.940], [48.650, 37.950]], COLORS.ORG, 1.5, '4 2');
    ln([[48.560, 37.940], [48.520, 37.970]], COLORS.YEL, 1.5, '4 2');
    ln([[48.560, 37.940], [48.630, 37.930]], COLORS.ORG, 1, '4 2');

    // =========================================================
    // ARTILLERY GROUP
    // =========================================================
    zoneLabel(48.690, 37.900, 'АРТИЛЕРІЙСЬКА ГРУПА:', COLORS.YEL, 9);

    // Self-propelled div «Команда Вистріл»
    mk(48.680, 37.920, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">КВ</text>`, 'САД «Команда Вистріл»', 'Самохідний артилерійський дивізіон\n«Команда Вистріл»\n2А65 Мста-Б / 2С19 Мста-С / AS-90\nДальність: 18-30 км', [75,75]);

    // Howitzer div
    mk(48.680, 37.950, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ГАД</text>`, 'Гаубичний дивізіон', 'Гаубичний артилерійський дивізіон\nM119 (США) / Д-30\nДальність: 14-19 км\nТочна підтримка штурму', [70,70]);

    // MLRS div (Bastion)
    mk(48.700, 37.930, `<circle cx="25" cy="25" r="15" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.PNK}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">РАД</text>`, 'РСЗВ «Бастіон»', 'Реактивний артилерійський дивізіон\n«Бастіон-01» + «Бастіон-02»\nУдарні БПЛА + РСЗВ «Град»\nДальність: 20-40 км', [70,70]);

    // Anti-tank div
    mk(48.670, 37.960, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">ПТА</text>`, 'ПТАД', 'Протитанковий артилерійський дивізіон\nСПГ-9 / Д-44\nДальність: 1-5 км\nПрикриває танконебезпечні напрямки', [70,70]);

    // Artillery fire arcs
    ln([[48.680, 37.920], [48.528, 38.000]], COLORS.ORG, 1.5, '5 3');
    ln([[48.680, 37.950], [48.528, 37.958]], COLORS.ORG, 1.5, '5 3');
    circ(48.680, 37.920, 20000, COLORS.ORG, 0.02);

    // =========================================================
    // AIR DEFENSE (Зенітний ракетний дивізіон)
    // =========================================================
    mk(48.580, 37.910, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><line x1="25" y1="42" x2="25" y2="12" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 17,20 33,20" fill="${COLORS.CYN}"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ЗРД</text>`, 'ЗРД ППО', 'Зенітний ракетний дивізіон\n9К35 «Стріла-10»\nHMMWV + Р-73\nПрикриває позиції бригади', [75,75]);
    circ(48.580, 37.910, 5000, COLORS.CYN, 0.03);

    // =========================================================
    // RECONNAISSANCE UNITS
    // =========================================================
    zoneLabel(48.490, 37.980, 'РОЗВІДКА:', COLORS.CYN, 9);

    mk(48.500, 37.995, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.CYN}" stroke-width="1.5"/><line x1="25" y1="5" x2="25" y2="45" stroke="${COLORS.CYN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">РБ</text>`, 'Розвідбат', 'Розвідувальний батальйон\nРГ «Буря» | Рота снайперів\n«Люміер» | РЕБ | РХБЗ\nРадіолокаційна рота', [80,80]);

    // =========================================================
    // EQUIPMENT MARKERS
    // =========================================================
    zoneLabel(48.700, 37.980, 'ОЗБРОЄННЯ:', COLORS.WHT, 9);

    mk(48.700, 38.000, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><ellipse cx="25" cy="22" rx="15" ry="10" fill="none" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="25" y1="12" x2="25" y2="5" stroke="${COLORS.ORG}" stroke-width="2.5"/><text x="25" y="25" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">Т-90</text>`, 'Т-90 (трофейний)', 'Трофейний Т-90\n125мм гармата\nДинамічний захист «Контакт-5»\nЗахоплений у РФ', [70,70]);

    mk(48.710, 38.020, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><rect x="10" y="15" width="30" height="16" rx="3" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.BLU}" font-size="4" font-weight="bold">YPR-765</text>`, 'YPR-765', 'YPR-765 (Нідерланди)\nГолландська БМП\n25мм гармата\nДесант = 7 бійців', [70,70]);

    mk(48.720, 38.000, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="10" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="5" font-weight="bold">БМП-2</text>`, 'БМП-2', 'БМП-2\n30мм гармата 2А42 + ПТРК\nОсновна БМП\nШтурмові дії', [70,70]);

    mk(48.720, 38.030, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><rect x="12" y="20" width="26" height="12" rx="2" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.BLU}" font-size="4" font-weight="bold">Новатор</text>`, 'Новатор', 'Новатор (Україна)\nMRAP 4×4\nМінний захист\nРозвідка + патруль', [70,70]);

    mk(48.730, 38.015, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><rect x="12" y="20" width="26" height="12" rx="2" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.BLU}" font-size="4" font-weight="bold">AS-90</text>`, 'AS-90', 'AS-90 (Великобританія)\n155мм САУ\nДальність: 24-30 км\n«Команда Вистріл»', [70,70]);

    // =========================================================
    // BAHKMUT BATTLE ZONE
    // =========================================================
    zoneLabel(48.590, 37.980, 'БОЇ ЗА БАХМУТ:', COLORS.WHT, 10);

    // Bakhmut city marker
    mk(48.585, 38.003, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">БАХ</text>`, 'Бахмут', 'Битва за Бахмут\n2022-2023\nНайдовша битва війни\nОборона + контратаки 3 ОШБр\nМісто зруйноване', [80,80]);

    // Klishchiivka — key counterattack
    mk(48.528, 37.958, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">КЛЩ</text>`, 'Клещіївка ✦', 'Контратака 9 травня 2023\nБронегрупа 3 ОШБр\nПрорив оборони РФ\n1730 м вперед, 700 м вглиб\nРозгром 72 ОМБр РФ\nТанки + БМП + артилерія + дрони\nMapbox: 48.528, 37.958', [85,85]);

    // Counterattack arrow (Klishchiivka direction)
    ln([
        [48.560, 37.940], [48.548, 37.950], [48.535, 37.955], [48.528, 37.958]
    ], COLORS.GRN, 3);
    zoneLabel(48.545, 37.942, 'ШТурм →\n3 ОШБр', COLORS.GRN, 8);

    // =========================================================
    // AVDIIVKA BATTLE (February 2024)
    // =========================================================
    mk(48.136, 37.745, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">АВД</text>`, 'Авдіївка 02.2024', 'Бої за Авдіївку\n4 лютого 2024 — прорив РФ\n3 ОШБр перекинута для прикриття\nЗабезпечення відступу гарнізону\nПрикриття флангів\nЕвакуація + ар\'єргард', [80,80]);

    // Avdiivka arrow (brigade movement)
    ln([
        [48.560, 37.940], [48.400, 37.900], [48.250, 37.850],
        [48.136, 37.745]
    ], COLORS.BLU, 2, '10 5');
    zoneLabel(48.350, 37.870, 'Перекидання 3 ОШБр\n→ Авдіївка', COLORS.BLU, 7);

    // =========================================================
    // SVATOVO DIRECTION
    // =========================================================
    mk(49.417, 38.147, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">СВТ</text>`, 'Сватове', 'Бої за Сватове\n2024-2025\nЛуганський напрямок\nMapbox: 49.417, 38.147', [75,75]);

    // =========================================================
    // KYIV DEFENSE (February-March 2022)
    // =========================================================
    zoneLabel(50.650, 30.450, 'ОБОРОНА КИЄВА (02-03.2022):', COLORS.WHT, 9);

    // Kyiv
    mk(50.450, 30.523, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="32" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">КИЇВ</text>`, 'м. Київ', 'м. Київ\nДислокация штабу бригади\nБойове хрещення — оборона Києва\n24.02.2022 — створення загону ТрО «Азов»\nВетерани ОЗСП «Азов» НГУ', [80,80]);

    // Bucha
    mk(50.549, 30.217, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">БЧ</text>`, 'Буча', 'Звільнення Бучі\nБерезень 2022\nРазом з іншими підрозділами', [65,65]);

    // Irpin
    mk(50.522, 30.250, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ІРП</text>`, 'Ірпінь', 'Звільнення Ірпеня\nБерезень 2022\nВуличні бої', [65,65]);

    // Hostomel
    mk(50.570, 30.260, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ГСТ</text>`, 'Гостомель', 'Звільнення Гостомеля\nБерезень 2022\nАеродром + селище', [65,65]);

    // Moshchun
    mk(50.604, 30.308, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="4" font-weight="bold">МОЩ</text>`, 'Мощун', 'Мощун (Mapbox: 50.604, 30.308)\nБої за переправу\nКлючова точка оборони Києва', [65,65]);

    // Vorzel
    mk(50.541, 30.160, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="4" font-weight="bold">ВРЗ</text>`, 'Ворзель', 'Ворзель (Mapbox: 50.541, 30.160)\nЗвільнення селища\nБерезень 2022', [65,65]);

    // Vasylkiv
    mk(50.100, 30.340, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="4" font-weight="bold">ВСК</text>`, 'Васильків', 'Звільнення Василькова\n24-25 лютого 2022\nПерші бої загону «Азов»', [65,65]);

    // Brovary ambush (Skybyn) — destroyed 6th Tank Regiment
    mk(50.580, 30.831, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}22" stroke="${COLORS.RED}" stroke-width="2" stroke-dasharray="4"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="1"/><line x1="15" y1="18" x2="35" y2="32" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="35" y1="18" x2="15" y2="32" stroke="${COLORS.RED}" stroke-width="1.5"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="4" font-weight="bold">ЗНИЩ.</text>`, 'Засада під Скибином ✦', 'ЗАСАДА 10.03.2022\nСпільно з 72 ОТМБр\nСкибин (Mapbox: 50.580, 30.831)\nРозгром колони 6-го танкового полку\n90-та танкова дивізія РФ\nЗнищено: 5 танків + БТР\nВбитий: полковник Андрій Захаров\nЗахоплено документи + списки\nБТГр 6 + 239 ТП відступили!', [85,85]);

    // Kyiv defense zone
    circ(50.450, 30.523, 25000, COLORS.GRN, 0.03);

    // =========================================================
    // ZAPORIZHZHIA DIRECTION (April 2022)
    // =========================================================
    mk(47.666, 36.256, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="4" font-weight="bold">ГУЛ</text>`, 'Гуляйполе', 'Гуляйполе (Mapbox: 47.666, 36.256)\nКвітень 2022 — Запорізький напрямок\nЗнищено: БТР, танк\nВзято в полон солдатів ДНР\n16.06.2022 — збито Мі-24 (Stinger)\n01.08.2022 — знищено 2 БМП-3', [80,80]);

    // Kherson
    mk(46.635, 32.610, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="4" font-weight="bold">ХЕР</text>`, 'Херсон', 'Звільнення Херсона\nЛистопад 2022\nРазом з іншими підрозділами', [70,70]);

    // Mariupol (helicopter operation)
    mk(47.095, 37.540, `<polygon points="25,5 28,18 42,18 31,26 35,40 25,32 15,40 19,26 8,18 22,18" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="1.5"/><text x="25" y="23" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">МАР</text>`, 'Маріуполь (авіапрорив)', 'Операція авіапрориву блокади\nБерезень 2022\nПід керівництвом ГУР МО\nВертольотами доставлено:\n72 бійці «Азову» + зброя + ліки\nЕвакуація важкопоранених\nСпроба деблокади з Гуляйполя', [80,80]);

    // Combat path line (Kyiv → Zaporizhzhia → Bakhmut → Avdiivka)
    ln([
        [50.580, 30.831], [50.450, 30.523], [50.100, 30.340],
        [47.666, 36.256], [47.095, 37.540],
        [48.585, 38.003], [48.528, 37.958],
        [48.136, 37.745], [49.417, 38.147]
    ], COLORS.ORG, 2, '10 5');

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Assault group advancing on Klishchiivka
    const assault = mkAnim(48.555, 37.955, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">3</text>`, 'Штурм→', '', [55,55]);
    animations.push({
        marker: assault,
        path: [
            [48.560, 37.940], [48.550, 37.948], [48.542, 37.953],
            [48.534, 37.956], [48.528, 37.958]
        ],
        step: 0,
        speed: 0.004,
    });

    // 2. Tank column movement
    const tanks = mkAnim(48.650, 37.950, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="25" y1="18" x2="25" y2="10" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">Т-90</text>`, 'Танки→', '', [55,55]);
    animations.push({
        marker: tanks,
        path: [
            [48.650, 37.950], [48.620, 37.960], [48.590, 37.970],
            [48.570, 37.980], [48.550, 37.990]
        ],
        step: 0,
        speed: 0.003,
    });

    // 3. Artillery shell trajectory
    const shell = mkAnim(48.680, 37.920, `<circle cx="25" cy="25" r="12" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАР→', '', [50,50]);
    animations.push({
        marker: shell,
        path: [
            [48.680, 37.920], [48.650, 37.940], [48.620, 37.960],
            [48.590, 37.980], [48.560, 37.990]
        ],
        step: 0,
        speed: 0.006,
    });

    // 4. FPV drone (recon/strike)
    const fpv = mkAnim(48.528, 37.958, `<line x1="10" y1="10" x2="35" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><line x1="35" y1="10" x2="10" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="10" cy="35" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="35" r="3" fill="${COLORS.PUR}"/>`, 'БПЛА', '', [45,45]);
    animations.push({
        marker: fpv,
        path: [
            [48.540, 37.950], [48.535, 37.965], [48.525, 37.975],
            [48.515, 37.965], [48.510, 37.950], [48.520, 37.940],
            [48.530, 37.942], [48.540, 37.950]
        ],
        step: 0,
        speed: 0.006,
    });

    startAnimation(animations, '_3AssaultAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:300px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:12px;margin-bottom:6px;">&#9876; 3-тя ОШБр — ШТУРМОВА БРИГАДА</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">На базі ОЗСП «Азов» | Комбриг: полковник Андрій Білецький | 3-й АК (з 03.2025)</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#40c4ff;font-weight:700;">ШТУРМОВІ ПІДРОЗДІЛИ:</div>
                <div>&#8226; <span style="color:#40c4ff;">1-й ШБ</span> — 3-та + 2-га штурмові роти, РДГ «Hatred», «S6»</div>
                <div>&#8226; <span style="color:#40c4ff;">2-й ШБ</span> — 1-ша штурмова рота, Галицький взвод, «Полоскуни»</div>
                <div>&#8226; <span style="color:#9c27b0;">БСП «Шквал»</span> — спеціального призначення (ДРГ + спецоперації)</div>
                <div style="color:#4caf50;font-weight:700;margin-top:4px;">МЕХАНІЗОВАНІ + СТРІЛЕЦЬКІ:</div>
                <div>&#8226; <span style="color:#40c4ff;">1-й + 2-й МехБ</span> — БМП-2 + YPR-765 + M113</div>
                <div>&#8226; <span style="color:#4caf50;">1-й + 2-й СтрБ</span> — піхота + міномети</div>
                <div>&#8226; <span style="color:#ffeb3b;">1-й Інтербатальйон</span> — «Іспанський Шторм», «Змії», «Терра», «Крила», «Москітос», «Фатум»</div>
                <div style="color:#ff9800;font-weight:700;margin-top:4px;">ТАНКОВИЙ БАТАЛЬЙОН:</div>
                <div>&#8226; Трофейні <span style="color:#ff9800;">Т-90</span>, Т-72ЕА, Т-72М1</div>
                <div>&#8226; 2-га рота | «Стальні вовкулаки»</div>
                <div style="color:#ff4081;font-weight:700;margin-top:4px;">АРТИЛЕРІЙСЬКА ГРУПА:</div>
                <div>&#8226; <span style="color:#ff9800;">САД «Команда Вистріл»</span> — Мста-Б, Мста-С, AS-90</div>
                <div>&#8226; <span style="color:#ff9800;">ГАД</span> — M119, Д-30</div>
                <div>&#8226; <span style="color:#ff4081;">РАД</span> — «Бастіон-01» + «Бастіон-02» + Град</div>
                <div>&#8226; <span style="color:#ef5350;">ПТАД</span> — СПГ-9, Д-44</div>
                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ОЗБРОЄННЯ:</div>
                <div>&#8226; Танки: Т-90 (трофейний), Т-72ЕА, Т-72М1</div>
                <div>&#8226; БМП: БМП-2, БМП-1ТС, БМП-1</div>
                <div>&#8226; БТР: YPR-765, M113, FV432, Patria AMV</div>
                <div>&#8226; MRAP: Новатор, HMMWV, MaxxPro</div>
                <div>&#8226; ППО: 9К35 Стріла-10, HMMWV + Р-73</div>
                <div style="color:#ff9800;font-weight:700;margin-top:4px;">БОЙОВИЙ ШЛЯХ:</div>
                <div>&#8226; <span style="color:#4caf50;">02.2022</span> — Оборона Києва (Васильків, Буча, Ірпінь, Гостомель, Мощун)</div>
                <div>&#8226; <span style="color:#ff4081;">10.03.2022</span> — Засада під Скибином: розгром 6 ТП 90 ТД РФ</div>
                <div>&#8226; <span style="color:#ffeb3b;">03.2022</span> — Авіапрорив блокади Маріуполя (72 бійці)</div>
                <div>&#8226; <span style="color:#4caf50;">04.2022</span> — Запорізький напрямок (Гуляйполе)</div>
                <div>&#8226; <span style="color:#4caf50;">11.2022</span> — Звільнення Херсона</div>
                <div>&#8226; <span style="color:#ff9800;">05.2023</span> — Бахмут: контратака Клещіївки (1730м × 700м)</div>
                <div>&#8226; <span style="color:#ff9800;">05.2023</span> — Розгром 72 ОМБр РФ під Бахмутом</div>
                <div>&#8226; <span style="color:#ef5350;">02.2024</span> — Авдіївка: прикриття відступу гарнізону</div>
                <div>&#8226; <span style="color:#ff9800;">2024-25</span> — Сватове, Луганський напрямок</div>
                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">РОЗВІДКА:</div>
                <div>&#8226; Розвідбат (РГ «Буря») | «Люміер» | Рота снайперів</div>
                <div>&#8226; Рота РЕБ | Технічний центр «Nova»</div>
                <div>&#8226; Радіолокаційна рота | Рота РХБЗ</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                Створена: 26.01.2023 з ветеранів ОЗСП «Азов» НГУ та Азовського руху<br>
                3-й армійський корпус (з 14.03.2025) | Дислокация: м. Київ<br>
                Раніше жив у Одесі Юрій Глодан, родина якого загинула при обстрілі — воював у 3 ОШБр
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.440, 37.860], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to Bakhmut area — main combat zone
    map.flyTo([48.550, 37.950], 11, { duration: 1.5 });
}

window.build3AssaultBrigadeViz = build3AssaultBrigadeViz;
