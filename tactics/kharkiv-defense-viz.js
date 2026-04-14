// ===== KHARKIV DEFENSE VISUALIZATION =====
// Оборона Харкова — Реальна схема 2024
// Mapbox verified: Харків [49.993, 36.232] | Вовчанськ [50.290, 36.938]
// Липці [50.209, 36.421] | Дергачі [50.108, 36.121] | Мерефа [49.818, 36.063]
// Чугуїв [49.838, 36.689] | Люботин [49.945, 35.926] | Циркуни [50.080, 36.383]
// Бєлгород (РФ) [50.597, 36.593] — 71.9 км від Харкова
// Coordinate math at 50.0°N: 0.001° lat = 111m, 0.001° lng = 71.7m

function buildKharkivDefense() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._kharkivDefenseAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(50.380, 35.950, '───── ОБОРОНА ХАРКОВА — РЕАЛЬНА СХЕМА 2024 ─────', COLORS.BLU, 12);
    zoneLabel(50.365, 35.945, 'Mapbox: Харків [49.993, 36.232] | Бєлгород (РФ): 71.9 км\nНапрямки: Липці 27.7 км | Вовчанськ 60.2 км | Дергачі 15.0 км', COLORS.WHT, 8);

    // =========================================================
    // REFERENCE SETTLEMENTS (Mapbox verified)
    // =========================================================
    zoneLabel(50.005, 36.200, '← м. Харків (Mapbox: 49.993, 36.232)', COLORS.WHT, 8);
    zoneLabel(50.280, 36.970, 'Вовчанськ (50.290, 36.938) — 60.2 км →', COLORS.RED, 7);
    zoneLabel(50.200, 36.455, 'Липці (50.209, 36.421) — 27.7 км →', COLORS.RED, 7);
    zoneLabel(50.100, 36.130, 'Дергачі (50.108, 36.121) — 15.0 км ↑', COLORS.WHT, 7);
    zoneLabel(50.070, 36.405, 'Циркуни (50.080, 36.383)', COLORS.WHT, 7);
    zoneLabel(49.830, 36.660, 'Чугуїв (49.838, 36.689) →', COLORS.WHT, 7);
    zoneLabel(49.810, 36.035, 'Мерефа (49.818, 36.063)', COLORS.WHT, 7);
    zoneLabel(49.930, 35.900, 'Люботин (49.945, 35.926)', COLORS.WHT, 7);
    zoneLabel(50.590, 36.625, 'Бєлгород (РФ) (50.597, 36.593) — 71.9 км ↓', COLORS.RED, 8);

    // =========================================================
    // RIVERS (terrain features)
    // =========================================================
    // р. Лопань (through western Kharkiv, N-S)
    ln([
        [50.200, 36.100], [50.150, 36.130], [50.100, 36.150],
        [50.050, 36.170], [50.000, 36.190], [49.950, 36.200],
        [49.900, 36.210]
    ], COLORS.CYN, 2.5);
    zoneLabel(49.905, 36.200, 'р. Лопань', COLORS.CYN, 8);

    // р. Харків (through eastern Kharkiv, N-S)
    ln([
        [50.150, 36.250], [50.100, 36.260], [50.050, 36.270],
        [50.000, 36.280], [49.950, 36.290], [49.900, 36.300]
    ], COLORS.CYN, 2.5);
    zoneLabel(49.905, 36.285, 'р. Харків', COLORS.CYN, 8);

    // р. Уди (south of Kharkiv, E-W)
    ln([
        [49.900, 36.000], [49.910, 36.050], [49.920, 36.100],
        [49.930, 36.150], [49.940, 36.200], [49.950, 36.250],
        [49.960, 36.300], [49.970, 36.350], [49.980, 36.400]
    ], COLORS.CYN, 2.5);
    zoneLabel(49.920, 36.040, 'р. Уди', COLORS.CYN, 8);

    // Харківське водосховище (north of city)
    ar([
        [50.080, 36.160], [50.090, 36.170], [50.095, 36.190],
        [50.090, 36.210], [50.080, 36.215], [50.070, 36.210],
        [50.065, 36.190], [50.070, 36.170]
    ], COLORS.CYN, COLORS.CYN, 0.08);
    zoneLabel(50.085, 36.185, 'Харківське\nводосховище', COLORS.CYN, 7);

    // =========================================================
    // MAJOR ROADS (reference)
    // =========================================================
    // M-20 Харків — Бєлгород (north)
    ln([[50.350, 36.350], [50.200, 36.300], [50.050, 36.250], [49.993, 36.232]], '#666', 1.5, '8 4');
    zoneLabel(50.220, 36.290, 'М-20 → Бєлгород', '#666', 7);

    // M-03 Харків — Київ (west)
    ln([[49.993, 36.232], [49.960, 36.180], [49.940, 36.100]], '#666', 1.5, '8 4');
    zoneLabel(49.950, 36.130, 'М-03 → Київ', '#666', 7);

    // T-21-01 Харків — Чугуїв (east)
    ln([[49.993, 36.232], [49.960, 36.350], [49.840, 36.680]], '#666', 1.5, '8 4');

    // =========================================================
    // ENEMY FORCES — СГВ «ПІВНІЧ» (Russian Northern Grouping)
    // Based out of Belgorod, Russia — 71.9 km north (Mapbox)
    // =========================================================
    zoneLabel(50.540, 36.500, 'РФ — СГВ «ПІВНІЧ» (Бєлгород, 71.9 км)', COLORS.RED, 11);

    // Enemy 6th Combined Arms Army
    mk(50.550, 36.500, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.RED}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">6ОА</text>`, 'РФ 6-та АРМІЯ', '6-та загальновійськова армія\nСГВ «Північ»\nБєлгород (Mapbox: 50.597, 36.593)\n71.9 км від Харкова (Mapbox)', [80,80]);

    // Enemy task force — Lyptsi direction
    mk(50.400, 36.550, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ТГ</text>`, 'РФ ТГ «Липці»', 'Тактична група\nнапрямок: Липці → Харків\n~5 000 бійців\nБМП + Т-72Б3 + артилерія\nВідстань: ~40 км до Харкова', [80,80]);

    // Enemy task force — Vovchansk direction
    mk(50.350, 36.900, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">ТГ</text>`, 'РФ ТГ «Вовчанськ»', 'Тактична група\nнапрямок: Вовчанськ\n~3 000 бійців\nШтурмові групи + БТР\nВовчанськ (50.290, 36.938) Mapbox', [80,80]);

    // Enemy artillery (Belgorod area)
    mk(50.570, 36.650, `<circle cx="25" cy="25" r="15" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ГР</text>`, 'РФ АРТ ГРУПА', 'РСЗВ «Град» / «Ураган»\n152мм 2С19 Мста-С\nБєлгород — укрито за кордоном\nДальність: 20-40 км', [80,80]);

    // Enemy aviation threat
    mk(50.600, 36.400, `<rect x="5" y="15" width="40" height="20" rx="3" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="25" x2="25" y2="25" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="18" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="25" x2="10" y2="32" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.RED}" font-size="5" font-weight="bold">КАБ</text>`, 'РФ АВІАЦІЯ', 'Су-34 / Су-35\nКАБ-500 / ФАБ-1500\nУдари по позиціях ЗСУ\nАеродром: Бєлгород', [70,70]);

    // Enemy FAB/Glide bomb range
    circ(50.590, 36.590, 70000, COLORS.RED, 0.02);

    // Enemy attack directions
    ln([[50.400, 36.550], [50.209, 36.421], [50.100, 36.300]], COLORS.RED, 3, '8 4');
    ln([[50.350, 36.900], [50.290, 36.938], [50.150, 36.700]], COLORS.RED, 3, '8 4');
    ln([[50.400, 36.550], [50.300, 36.400], [50.200, 36.300]], COLORS.RED, 2, '6 3');
    zoneLabel(50.350, 36.520, 'НАПРЯМОК\nАТАКИ ↓', COLORS.RED, 8);

    // Enemy front line (contact line — 2024)
    ln([
        [50.250, 36.300], [50.230, 36.350], [50.210, 36.400],
        [50.200, 36.450], [50.220, 36.550], [50.250, 36.650],
        [50.280, 36.750], [50.290, 36.850], [50.280, 36.950]
    ], COLORS.RED, 3);
    zoneLabel(50.260, 36.350, '── ЛІНІЯ КОНТАКТУ ──', COLORS.RED, 9);

    // =========================================================
    // FORWARD DEFENSE ZONE — Contact line positions
    // ~25-30 km from Kharkiv (Lyptsi, Vovchansk directions)
    // =========================================================
    zoneLabel(50.250, 36.350, 'ПОЛОСА ЗАБЕЗПЕЧЕННЯ (~25-30 км)', COLORS.ORG, 10);

    // Border guard / forward positions
    mk(50.220, 36.430, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.ORG}" stroke-width="1.5"/>`, 'ПРИКОРД-1', 'Прикордонна застава\nнапрямок Липці\n~22 км від Харкова (Mapbox)', [70,70]);

    mk(50.250, 36.600, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.ORG}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.ORG}" stroke-width="1.5"/>`, 'ПРИКОРД-2', 'Прикордонна застава\nнапрямок Вовчанськ', [70,70]);

    // Minefields / engineer obstacles
    mk(50.180, 36.380, `<circle cx="25" cy="25" r="12" fill="${COLORS.BRN}88" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/>`, 'МІННЕ ПОЛЕ-1', 'Протитанкові + протипіхотні\nна напрямку Липці\nТМ-62 + ПФМ-1', [60,60]);

    mk(50.200, 36.500, `<circle cx="25" cy="25" r="12" fill="${COLORS.BRN}88" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BRN}" stroke-width="2"/>`, 'МІННЕ ПОЛЕ-2', 'Протитанкові міни\nДраконові зуби + рів\nна шляху до Дергачів', [60,60]);

    // Dragon teeth line
    ln([
        [50.170, 36.300], [50.180, 36.350], [50.190, 36.400],
        [50.200, 36.450], [50.190, 36.500], [50.180, 36.550]
    ], COLORS.BRN, 2, '2 2');
    zoneLabel(50.185, 36.430, 'ДРАКОНОВІ ЗУБИ + РІВ', COLORS.BRN, 7);

    // =========================================================
    // 1st ECHELON — MAIN DEFENSE LINE (~12-18 km from center)
    // =========================================================
    zoneLabel(50.155, 36.050, '1-й ЕШЕЛОН ОБОРОНИ (12-18 км)', COLORS.GRN, 11);

    // 92nd Assault Brigade (formerly Mech) — Lyptsi/Дергачі direction
    mk(50.140, 36.200, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="45" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">92</text>`, '92-га ОШБр', '92-га Окрема Штурмова Бригада\n(колишня 92-га Мехбр)\nДергачівський напрямок\n~15.0 км від Харкова (Mapbox)\nБМП-2 + Т-64БВ + FPV-дрони', [85,85]);

    // 3rd Assault Brigade — Northern sector
    mk(50.120, 36.350, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="45" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">3</text>`, '3-тя ОШБр', '3-тя Окрема Штурмова Бригада\n(Азов)\nЦиркунівський напрямок\n~14.5 км від Харкова\nШтурмові групи + БПЛА', [85,85]);

    // 57th Motorized Brigade — Eastern sector
    mk(50.090, 36.450, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">57</text>`, '57-ма ОМПБр', '57-ма Окрема Мотопіхотна\nСхідний напрямок (Вовчанськ)\n~16 км від Харкова\nМотопіхота + ПТРК', [80,80]);

    // Tank companies in defense
    mk(50.150, 36.150, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">ТК</text>`, 'ТАНКОВИЙ КОМПАНІЙ', 'Т-64БВ (10 шт)\nДергачівський напрямок\nВогневі позиції за укриттям', [70,70]);

    mk(50.130, 36.400, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">ТК</text>`, 'ТАНКОВИЙ КОМПАНІЙ-2', 'Leopard 1A5 (10 шт)\nЦиркунівський напрямок\nКонтратака / Вогнева підтримка', [70,70]);

    // 1st defense line polyline
    ln([
        [50.160, 35.950], [50.150, 36.050], [50.140, 36.150],
        [50.130, 36.250], [50.120, 36.350], [50.110, 36.450],
        [50.120, 36.550]
    ], COLORS.GRN, 3);

    // =========================================================
    // 2nd ECHELON — ARTILLERY KILL ZONE (~8-10 km)
    // =========================================================
    zoneLabel(50.090, 36.000, '2-й ЕШЕЛОН — АРТИЛЕРІЙСЬКА ЗОНА (8-10 км)', COLORS.YEL, 10);

    // Artillery groups
    mk(50.080, 36.100, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">155</text>`, 'АРТГР-1', 'M777 / CAESAR (155мм)\nПівнічний напрямок\nGIS Arta + Kropyva\n~10 км від центру', [75,75]);

    mk(50.060, 36.300, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">152</text>`, 'АРТГР-2', '2С3 Акація / M109 (152/155мм)\nПівнічно-східний напрямок\n~9 км від центру', [75,75]);

    mk(50.050, 36.200, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">БГ</text>`, 'БОГДАНА', '2С22 «Богдана» (155мм)\nСамохідна гаубиця\nGPS-кориговані снаряди\nДальність: 40 км', [75,75]);

    // MLRS
    mk(50.040, 36.150, `<circle cx="25" cy="25" r="15" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.PNK}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">HIM</text>`, 'HIMARS', 'M142 HIMARS\nGMLRS / ATACMS\nДальність: 70-300 км\nУдари по скупченнях РФ', [75,75]);

    mk(50.070, 36.350, `<circle cx="25" cy="25" r="15" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.PNK}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ВЛ</text>`, 'ВИЛЬХА', 'РСЗВ «Вільха»\nУкраїнська РСЗВ\nДальність: 70-130 км\nКасетні + ОФ', [75,75]);

    // 2nd defense line
    ln([
        [50.070, 35.900], [50.060, 36.000], [50.050, 36.100],
        [50.040, 36.200], [50.050, 36.300], [50.060, 36.400],
        [50.070, 36.500]
    ], COLORS.YEL, 2.5);

    // =========================================================
    // AIR DEFENSE UMBRELLA — Layered
    // =========================================================
    zoneLabel(50.040, 35.830, 'ПРО — ЗАГРОДА ПОВІТРЯНОГО ПРОСТОРУ', COLORS.CYN, 10);

    // Patriot / IRIS-T (long range — covers city + northern approaches)
    mk(50.030, 36.100, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.CYN}"/><line x1="25" y1="20" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">PAT</text>`, 'PATRIOT', 'MIM-104 Patriot\nДальність: 70-160 км\nВисота: 24 км\nПрикриває Харків + північ\nРакети: PAC-2 / PAC-3', [75,75]);
    circ(50.030, 36.100, 70000, COLORS.CYN, 0.02);

    // NASAMS (medium range)
    mk(50.070, 36.250, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 15,20 35,20" fill="${COLORS.CYN}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.CYN}" font-size="5" font-weight="bold">NAS</text>`, 'NASAMS', 'NASAMS-2\nДальність: 25-50 км\nAMRAAM ракети\nСередня дальність\nПрикриває місто + околиці', [70,70]);
    circ(50.070, 36.250, 30000, COLORS.CYN, 0.02);

    // IRIS-T SLM
    mk(50.010, 36.300, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 15,20 35,20" fill="${COLORS.CYN}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.CYN}" font-size="5" font-weight="bold">IRIS</text>`, 'IRIS-T', 'IRIS-T SLM\nДальність: 40 км\nНімецька система\nПрикриває східний сектор', [70,70]);
    circ(50.010, 36.300, 40000, COLORS.CYN, 0.02);

    // Gepard / SHORAD (short range)
    mk(50.050, 36.180, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 15,20 35,20" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="5" font-weight="bold">GEP</text>`, 'GEPARD', 'Gepard 35мм\nДальність: 5.5 км\nПроти Шахед / КАБ\nМіський сектор', [65,65]);
    circ(50.050, 36.180, 5500, COLORS.CYN, 0.03);

    mk(50.020, 36.350, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 15,20 35,20" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="5" font-weight="bold">STR</text>`, 'STORMER', 'Stormer HVM / Starstreak\nЛазерне наведення\nMach 4\nПроти гелікоптерів + літаків', [65,65]);

    // =========================================================
    // URBAN DEFENSE PERIMETER (city edges)
    // =========================================================
    zoneLabel(50.030, 36.130, 'МІСЬКА ОБОРОНА — ПЕРИМЕТР', COLORS.WHT, 10);

    ln([
        [50.050, 36.150], [50.040, 36.200], [50.030, 36.250],
        [50.010, 36.290], [49.990, 36.300], [49.970, 36.280],
        [49.960, 36.240], [49.955, 36.190], [49.960, 36.150],
        [49.975, 36.120], [50.000, 36.110], [50.030, 36.120],
        [50.050, 36.150]
    ], COLORS.WHT, 2.5, '6 3');

    // Territorial Defense battalions
    mk(50.040, 36.180, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ТрО</text>`, 'ТрО-1 ПІВНІЧ', 'Північний район\n113 ОБр ТРО\nБлокпости + барикади\nОлексіївка / Салтівка', [70,70]);

    mk(50.000, 36.120, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ТрО</text>`, 'ТрО-2 ЗАХІД', 'Західний район\nБлокпости + КПП\nНапрямок Дергачі', [70,70]);

    mk(49.980, 36.270, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ТрО</text>`, 'ТрО-3 СХІД', 'Східний район\nБлокпости\nНапрямок Чугуїв', [70,70]);

    mk(49.960, 36.200, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">НГ</text>`, 'НАЦГВАРДІЯ', 'Національна гвардія\n13 ОМБр\nОхорона критичної інфраструктури\n+ антитерор', [70,70]);

    // Checkpoints on major roads
    mk(50.055, 36.140, `<circle cx="25" cy="25" r="15" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.YEL}" font-size="10" font-weight="bold">КП</text>`, 'КП-1', 'Контрольний пункт\nДергачівське шосе\nМ-20 на Бєлгород', [60,60]);

    mk(49.960, 36.160, `<circle cx="25" cy="25" r="15" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.YEL}" font-size="10" font-weight="bold">КП</text>`, 'КП-2', 'Контрольний пункт\nЛюботінське шосе\nМ-03 на Київ', [60,60]);

    mk(49.980, 36.300, `<circle cx="25" cy="25" r="15" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="30" text-anchor="middle" fill="${COLORS.YEL}" font-size="10" font-weight="bold">КП</text>`, 'КП-3', 'Контрольний пункт\nЧугуївське шосе\nТ-21-01 на схід', [60,60]);

    // =========================================================
    // CITY CENTER — HQ & COMMAND
    // =========================================================
    mk(49.993, 36.232, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,10 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="36" x2="35" y2="36" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ШТАБ ОБОРОНИ', 'Командний пункт оборони Харкова\nMapbox: 49.993, 36.232\nStarlink + радіо + GIS Arta\nКоординація всіх підрозділів', [80,80]);

    // EW in city
    mk(49.985, 36.260, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.PUR}"/><line x1="20" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="30" y1="20" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">РЕБ</text>`, 'РЕБ-ЦЕНТР', 'Радіоелектронна боротьба\nАнтидрон + бортьовик\nГлушіння FPV + Шахед\nРадіус: 10 км', [70,70]);
    circ(49.985, 36.260, 10000, COLORS.PUR, 0.03);

    // =========================================================
    // COUNTER-ATTACK RESERVE (south/southwest)
    // =========================================================
    zoneLabel(49.830, 36.100, 'РЕЗЕРВ / КОНТРУДАР', COLORS.PNK, 11);

    mk(49.850, 36.080, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="5" y1="45" x2="45" y2="45" stroke="${COLORS.PNK}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">3ТБр</text>`, '3-тя ТАНКОВА БР', '3-тя Окрема Танкова Бригада\nТ-72АМТ + Leopard 2A4\nКонтратака на північ\nМерефа (49.818, 36.063) Mapbox', [80,80]);

    mk(49.830, 36.200, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.PNK}" stroke-width="2"/><ellipse cx="25" cy="25" rx="12" ry="7" fill="none" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="5" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="5" y1="5" x2="5" y2="45" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="5" y1="45" x2="45" y2="45" stroke="${COLORS.PNK}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="5" font-weight="bold">МБр</text>`, 'РЕЗЕРВНА МЕХБР', 'Резервна механізована бригада\nКонтратака: східний напрямок\n~18 км від центру Харкова', [80,80]);

    // Counter-attack directions
    ln([[49.850, 36.080], [50.050, 36.150]], COLORS.PNK, 3, '12 6');
    ln([[49.830, 36.200], [50.070, 36.300]], COLORS.PNK, 3, '12 6');
    zoneLabel(49.930, 36.110, '↑ КОНТРУДАР', COLORS.PNK, 8);

    // =========================================================
    // LOGISTICS & SUPPORT
    // =========================================================
    zoneLabel(49.880, 35.850, 'ТИЛОВЕ ЗАБЕЗПЕЧЕННЯ', COLORS.GRN, 10);

    mk(49.890, 35.900, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="25" x2="17" y2="25" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="33" y1="25" x2="40" y2="25" stroke="${COLORS.GRN}" stroke-width="2"/>`, 'БАЗА БК', 'Склад боєкомплекту\nЛюботінський напрямок\nНабої + Гранати + Міни', [65,65]);

    mk(49.870, 36.150, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="25" x2="17" y2="25" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="33" y1="25" x2="40" y2="25" stroke="${COLORS.GRN}" stroke-width="2"/>`, 'ПММ БАЗА', 'Пальне + Мастила\nПід Мерефою\n~16 км від центру', [65,65]);

    mk(49.880, 36.000, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">МЕД</text>`, 'МЕДПУНКТ', 'Польовий шпиталь\nХірургія + евакуація\n~15 км від передової', [65,65]);

    // =========================================================
    // FPV / DRONE ZONES
    // =========================================================
    mk(50.010, 36.200, `<line x1="10" y1="10" x2="40" y2="40" stroke="${COLORS.PUR}" stroke-width="1.5"/><line x1="40" y1="10" x2="10" y2="40" stroke="${COLORS.PUR}" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="40" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="10" cy="40" r="3" fill="${COLORS.PUR}"/><circle cx="40" cy="40" r="3" fill="${COLORS.PUR}"/>`, 'БПЛА-ЦЕНТР', 'Центр управління БпАК\nFPV + Розвідка + Shark\nКоординація через Kropyva\nРадіус: 15-35 км', [70,70]);
    circ(50.010, 36.200, 20000, COLORS.PUR, 0.02);

    mk(50.080, 36.320, `<line x1="10" y1="10" x2="40" y2="40" stroke="${COLORS.PUR}" stroke-width="1.5"/><line x1="40" y1="10" x2="10" y2="40" stroke="${COLORS.PUR}" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="40" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="10" cy="40" r="3" fill="${COLORS.PUR}"/><circle cx="40" cy="40" r="3" fill="${COLORS.PUR}"/>`, 'FPV-ЗОНА', 'FPV-оператори\nУдари по колонам РФ\nна підступах до міста\nДальність: 8-10 км', [60,60]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Russian advance toward Lyptsi
    const ruAdvance = mkAnim(50.380, 36.500, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">РФ</text>`, 'РФ→', '', [55,55]);
    animations.push({
        marker: ruAdvance,
        path: [
            [50.380, 36.500], [50.320, 36.470], [50.260, 36.440],
            [50.210, 36.420], [50.180, 36.400]
        ],
        step: 0,
        speed: 0.003,
    });

    // 2. Ukrainian counter-attack (from reserve north)
    const uaCounter = mkAnim(49.850, 36.080, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}55" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="8" y1="8" x2="42" y2="42" stroke="${COLORS.PNK}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.PNK}" stroke-width="1.5"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="6" font-weight="bold">ЗСУ</text>`, 'ЗСУ→', '', [55,55]);
    animations.push({
        marker: uaCounter,
        path: [
            [49.850, 36.080], [49.900, 36.120], [49.950, 36.150],
            [50.000, 36.180], [50.050, 36.200]
        ],
        step: 0,
        speed: 0.004,
    });

    // 3. Artillery shell from rear area
    const artyShell = mkAnim(50.080, 36.100, `<circle cx="25" cy="25" r="10" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="8" font-weight="bold">*</text>`, 'СНАР→', '', [45,45]);
    animations.push({
        marker: artyShell,
        path: [
            [50.080, 36.100], [50.120, 36.200], [50.160, 36.300],
            [50.190, 36.380]
        ],
        step: 0,
        speed: 0.006,
    });

    // 4. FPV drone patrol over northern approaches
    const fpvPatrol = mkAnim(50.100, 36.300, `<line x1="10" y1="10" x2="35" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><line x1="35" y1="10" x2="10" y2="35" stroke="${COLORS.PUR}" stroke-width="1.5"/><circle cx="10" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="10" r="3" fill="${COLORS.PUR}"/><circle cx="10" cy="35" r="3" fill="${COLORS.PUR}"/><circle cx="35" cy="35" r="3" fill="${COLORS.PUR}"/>`, 'FPV', '', [45,45]);
    animations.push({
        marker: fpvPatrol,
        path: [
            [50.100, 36.280], [50.130, 36.350], [50.150, 36.420],
            [50.130, 36.480], [50.100, 36.450], [50.080, 36.380],
            [50.090, 36.320], [50.100, 36.280]
        ],
        step: 0,
        speed: 0.005,
    });

    startAnimation(animations, '_kharkivDefenseAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:260px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:12px;margin-bottom:6px;">&#9733; ОБОРОНА ХАРКОВА — РЕАЛЬНА СХЕМА</div>
            <div style="color:#888;font-size:9px;margin-bottom:4px;">Mapbox: 49.993, 36.232 | Бєлгород (РФ): 71.9 км</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">ОБОРОНА В ГЛИБИНУ:</div>
                <div>&#8226; <span style="color:#ff9800;">25-30 км</span> — Полоса забезпечення (Липці/Вовчанськ)</div>
                <div>&#8226; <span style="color:#4caf50;">12-18 км</span> — 1-й ешелон (92 ОШБр, 3 ОШБр, 57 ОМПБр)</div>
                <div>&#8226; <span style="color:#ffeb3b;">8-10 км</span> — 2-й ешелон (Артилерія + РСЗВ)</div>
                <div>&#8226; <span style="color:#ffffff;">0-5 км</span> — Міська оборона (ТрО + НГ)</div>
                <div style="color:#ff4081;font-weight:700;margin-top:4px;">РЕЗЕРВ КОНТРУДАРУ:</div>
                <div>&#8226; 3-тя Танкова Бр (Мерефа, 18 км південь)</div>
                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ППО (ШАРУВАТА):</div>
                <div>&#8226; Patriot (70-160 км) — дальній рубіж</div>
                <div>&#8226; NASAMS (25-50 км) — середній рубіж</div>
                <div>&#8226; IRIS-T (40 км) — східний сектор</div>
                <div>&#8226; Gepard (5.5 км) — проти Шахед/КАБ</div>
                <div style="color:#ef5350;font-weight:700;margin-top:4px;">ЗАГРОЗИ (РФ СГВ «ПІВНІЧ»):</div>
                <div>&#8226; 6-та Армія (Бєлгород, 71.9 км)</div>
                <div>&#8226; ТГ «Липці» — головний напрямок</div>
                <div>&#8226; ТГ «Вовчанськ» — другий напрямок</div>
                <div>&#8226; КАБ / ФАБ — авіаудари з 70+ км</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                Distances (Mapbox): Бєлгород 71.9 | Вовчанськ 60.2 | Липці 27.7 | Дергачі 15.0 | Мерефа 18.2<br>
                Ріки: Лопань, Харків, Уди | Водосховище на півночі<br>
                2024: РФ наступ через Липці + Вовчанськ → зупинено на 5-10 км
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.780, 35.900], { icon: statsIcon, interactive: false }).addTo(map));

    // Fly to Kharkiv
    map.flyTo([50.050, 36.250], 10, { duration: 1.5 });
}
