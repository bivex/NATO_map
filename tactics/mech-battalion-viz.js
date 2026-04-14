// ===== MECHANIZED BATTALION VISUALIZATION =====
// Механізований батальйон — прорив укріпленої оборони противника
// 3 мехроти + танкова рота + артилерія + підтримка (400-500 осіб)

function buildMechBattalionViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._mechBattalionAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.80, 36.15, '───── МЕХАНІЗОВАНИЙ БАТАЛЬЙОН — ПРОРИВ ОБОРОНИ ─────', COLORS.BLU, 12);
    zoneLabel(49.77, 36.15, '3 мехроти + танкова рота + артбатарея | 400-500 бійців | Фронт: 3-5 км', COLORS.WHT, 9);

    // =========================================================
    // ENEMY DEFENSIVE ZONE — BATTALION STRONGPOINT
    // =========================================================
    zoneLabel(49.74, 36.15, 'ОБОРОНА ПРОТИВНИКА — БАТАЛЬЙОННАЯ ПОЛОСА', COLORS.RED, 10);

    // Enemy main defensive belt
    ar([
        [49.68, 36.25], [49.69, 36.38], [49.70, 36.52], [49.70, 36.68],
        [49.71, 36.82], [49.70, 36.98], [49.71, 37.12], [49.70, 37.28],
        [49.71, 37.42], [49.70, 37.58], [49.71, 37.72], [49.70, 37.85],
        [49.68, 37.85], [49.69, 37.72], [49.68, 37.58], [49.69, 37.42],
        [49.68, 37.28], [49.69, 37.12], [49.68, 36.98], [49.69, 36.82],
        [49.68, 36.68], [49.69, 36.52], [49.68, 36.38], [49.68, 36.25]
    ], COLORS.RED, COLORS.RED, 0.10);

    // Enemy forward trench line
    ln([
        [49.68, 36.25], [49.69, 36.38], [49.70, 36.52], [49.70, 36.68],
        [49.71, 36.82], [49.70, 36.98], [49.71, 37.12], [49.70, 37.28],
        [49.71, 37.42], [49.70, 37.58], [49.71, 37.72], [49.70, 37.85]
    ], COLORS.RED, 3);
    zoneLabel(49.705, 36.18, 'ПЕРЕДОВІ ТРАНШЕЇ ПРОТИВНИКА', COLORS.RED, 8);

    // Enemy second trench line
    ln([
        [49.72, 36.30], [49.72, 36.45], [49.73, 36.60], [49.72, 36.75],
        [49.73, 36.90], [49.72, 37.05], [49.73, 37.20], [49.72, 37.35],
        [49.73, 37.50], [49.72, 37.65], [49.72, 37.80]
    ], COLORS.RED, 2, '6 3');
    zoneLabel(49.735, 36.18, 'ДРУГА ЛІНІЯ ТРАНШЕЙ', COLORS.RED, 8);

    // Enemy company positions
    mk(49.695, 36.45, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСР-1</text>`, 'ПРОТИВ-Р1', '1-а мотострілкова рота\n~100-120 бійців\nзахідна ділянка оборони\n10x БМП-2 + укріплення', [80,80]);

    mk(49.695, 36.90, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСР-2</text>`, 'ПРОТИВ-Р2', '2-а мотострілкова рота\n~100-120 бійців\nцентральна ділянка\nкулемети + АГС на ДОТ', [80,80]);

    mk(49.695, 37.35, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСР-3</text>`, 'ПРОТИВ-Р3', '3-я мотострілкова рота\n~100-120 бійців\nсхідна ділянка\nрезерв + контратака', [80,80]);

    // Enemy armor reserve in depth
    mk(49.73, 37.00, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ТАНКВЗВ</text>`, 'ТАНКИ-РЕЗ', 'Танковий взвод резерву\n3-5x Т-72Б3\nконтратака в напрямку прориву', [80,80]);

    // Enemy artillery in depth
    mk(49.76, 36.70, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АРТ</text>`, 'АРТ-ПРОТИВ', 'Артилерійська батарея противника\n122мм Д-30 / 152мм 2С3\nконтрбатарейна боротьба', [75,75]);

    // Enemy BMP in strongpoints
    mk(49.695, 36.65, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">БМП-2</text>`, 'БМП-В-1', 'БМП-2 противника\nвогнева позиція в укріпленні', [70,70]);

    mk(49.695, 37.15, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">БМП-2</text>`, 'БМП-В-2', 'БМП-2 противника\nприкриває стик між ротами', [70,70]);

    // Enemy command
    mk(49.745, 36.90, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.RED}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КМБ-В</text>`, 'КП-ПРОТИВ', 'Командир батальйону противника\nкерування 3 ротами + резерви\nКП в глибині оборони', [80,80]);

    // Enemy fire sectors (covering approaches)
    ln([[49.695, 36.45], [49.62, 36.35]], COLORS.RED, 1, '4 3');
    ln([[49.695, 36.45], [49.62, 36.55]], COLORS.RED, 1, '4 3');
    ln([[49.695, 37.35], [49.62, 37.25]], COLORS.RED, 1, '4 3');
    ln([[49.695, 37.35], [49.62, 37.50]], COLORS.RED, 1, '4 3');

    // =========================================================
    // PHASE LINES
    // =========================================================
    ln([
        [49.62, 36.20], [49.62, 36.35], [49.62, 36.50], [49.62, 36.65],
        [49.62, 36.80], [49.62, 36.95], [49.62, 37.10], [49.62, 37.25],
        [49.62, 37.40], [49.62, 37.55], [49.62, 37.70], [49.62, 37.90]
    ], COLORS.YEL, 3, '12 6');
    zoneLabel(49.625, 36.18, '── ЛІНІЯ ВИХОДУ (LD) ──', COLORS.YEL, 9);

    ln([
        [49.66, 36.22], [49.66, 36.37], [49.66, 36.52], [49.66, 36.67],
        [49.66, 36.82], [49.66, 36.97], [49.66, 37.12], [49.66, 37.27],
        [49.66, 37.42], [49.66, 37.57], [49.66, 37.72], [49.66, 37.88]
    ], COLORS.GRN, 2.5, '8 4');
    zoneLabel(49.665, 36.18, '── PL GREEN ──', COLORS.GRN, 8);

    ln([
        [49.68, 36.24], [49.68, 36.39], [49.68, 36.54], [49.68, 36.69],
        [49.68, 36.84], [49.68, 36.99], [49.68, 37.14], [49.68, 37.29],
        [49.68, 37.44], [49.68, 37.59], [49.68, 37.74], [49.68, 37.87]
    ], COLORS.RED, 2.5, '5 3');
    zoneLabel(49.685, 36.18, '── PL RED ──', COLORS.RED, 8);

    zoneLabel(49.70, 36.18, '═══ OBJ ═══', COLORS.ORG, 9);

    // =========================================================
    // BATTALION COMMAND POST
    // =========================================================
    zoneLabel(49.52, 36.15, 'КП БАТАЛЬЙОНУ', COLORS.BLU, 10);

    mk(49.54, 36.28, `<rect x="0" y="0" width="50" height="50" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="5"/><line x1="10" y1="5" x2="40" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="2" x2="40" y2="2" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,7 17,22 33,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="42" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="52" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КОМБАТ</text>`, 'КОМБАТ', 'Командир механізованого батальйону\nпідполковник / майор\nкерування 3 мехротами + танкова рота\nпланування + координація з бригадою', [100,100]);

    mk(49.52, 36.30, `<rect x="5" y="8" width="40" height="30" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="10" y1="12" x2="40" y2="12" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,14 19,24 31,24" fill="${COLORS.ORG}"/><line x1="25" y1="24" x2="25" y2="34" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">НШ</text>`, 'НАЧШТАБА', 'Начальник штабу батальйону\nпланування + координація\nбойові накази + зв\'язок з ротами', [80,80]);

    mk(49.52, 36.25, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><path d="M20,30 Q20,15 25,12 Q30,15 30,30" fill="none" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="30" x2="35" y2="30" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ЗВ&#x27;ЯЗОК</text>`, 'ЗВЯЗОК', 'Вузол зв\'язку батальйону\nрадіостанції + супутник\nASIST / Kropyva / Delta\nзв\'язок з бригадою + ротами', [75,75]);

    // Command lines to companies
    ln([[49.54, 36.28], [49.56, 36.38]], COLORS.BLU, 2, '3 3');
    ln([[49.56, 36.38], [49.56, 36.55]], COLORS.BLU, 2, '3 3');
    ln([[49.56, 36.38], [49.56, 36.80]], COLORS.BLU, 2, '3 3');
    ln([[49.56, 36.38], [49.56, 37.10]], COLORS.BLU, 2, '3 3');
    ln([[49.56, 36.38], [49.58, 37.40]], COLORS.BLU, 2, '3 3');

    // =========================================================
    // 1ST MECH COMPANY — MAIN EFFORT (west)
    // =========================================================
    zoneLabel(49.57, 36.40, '1-А МЕХРОТА — ГОЛОВНИЙ НАПРЯМОК', COLORS.BLU, 9);

    mk(49.58, 36.50, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="4"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,8 18,20 32,20" fill="${COLORS.BLU}"/><line x1="25" y1="20" x2="25" y2="40" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КМР-1</text>`, '1-РОТА-КП', '1-а механізована рота\n~120-150 бійців, 9x БМП\nголовний удар — західна ділянка\nзавдання: прорив МСР-1 противника', [90,90]);

    // 1st company BMP group
    mk(49.58, 36.56, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="25" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП</text>`, '1-РОТА-БМП', 'Група БМП 1-ї роти\n3x взводи по 3x БМП-2/1\nвсього 9 бойових машин', [85,85]);

    ln([[49.58, 36.56], [49.60, 36.52], [49.62, 36.48], [49.64, 36.44]], COLORS.BLU, 2.5);
    zoneLabel(49.60, 36.42, 'НАПРЯМОК 1', COLORS.BLU, 8);

    // =========================================================
    // 2ND MECH COMPANY — SUPPORTING (center)
    // =========================================================
    zoneLabel(49.57, 36.65, '2-А МЕХРОТА — ПІДТРИМУЮЧИЙ', COLORS.GRN, 9);

    mk(49.58, 36.75, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="4"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,8 18,20 32,20" fill="${COLORS.GRN}"/><line x1="25" y1="20" x2="25" y2="40" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КМР-2</text>`, '2-РОТА-КП', '2-а механізована рота\n~120-150 бійців, 9x БМП\nпідтримуючий — центальна ділянка\nзв\'язує МСР-2 противника', [90,90]);

    mk(49.58, 36.81, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП</text>`, '2-РОТА-БМП', 'Група БМП 2-ї роти\n9x БМП-2/1', [85,85]);

    ln([[49.58, 36.81], [49.60, 36.79], [49.62, 36.77], [49.64, 36.75]], COLORS.GRN, 2.5);
    zoneLabel(49.60, 36.73, 'НАПРЯМОК 2', COLORS.GRN, 8);

    // =========================================================
    // 3RD MECH COMPANY — RESERVE
    // =========================================================
    zoneLabel(49.57, 36.90, '3-А МЕХРОТА — РЕЗЕРВ', COLORS.ORG, 9);

    mk(49.58, 37.00, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="4"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,8 18,20 32,20" fill="${COLORS.ORG}"/><line x1="25" y1="20" x2="25" y2="40" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">КМР-3</text>`, '3-РОТА-КП', '3-я механізована рота\n~120-150 бійців, 9x БМП\nрезерв комбата\nрозвиток успіху / відбиття контратаки', [90,90]);

    mk(49.58, 37.06, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="25" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП</text>`, '3-РОТА-БМП', 'Група БМП 3-ї роти (резерв)\n9x БМП-2/1', [85,85]);

    ln([[49.58, 37.06], [49.60, 37.00], [49.62, 36.95], [49.64, 36.90]], COLORS.ORG, 2, '5 3');
    zoneLabel(49.60, 36.92, 'НАПРЯМОК 3 (РЕЗЕРВ)', COLORS.ORG, 8);

    // =========================================================
    // TANK COMPANY — ATTACHED TO MAIN EFFORT
    // =========================================================
    zoneLabel(49.57, 37.20, 'ТАНКОВА РОТА — ПІДТРИМКА ГОЛОВНОГО', COLORS.RED, 9);

    mk(49.58, 37.28, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="4"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="8" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КМТР</text>`, 'ТАНКРОТА-КП', 'Танкова рота\n10x Т-64БМ / Т-72АМТ\nпідсилення головного напрямку\n3 взводи + КШМ', [95,95]);

    mk(49.58, 37.34, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">Т-72</text>`, 'Т-72-ГР1', 'Т-72АМТ — 1-й взвод\n3 танки + КШМ\nпряма підтримка 1-ї мехроти', [75,75]);

    mk(49.58, 37.40, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">Т-64</text>`, 'Т-64-ГР2', 'Т-64БМ — 2-й взвод\n3 танки\nпідтримка 2-ї мехроти', [75,75]);

    mk(49.58, 37.46, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">Т-72</text>`, 'Т-72-ГР3', 'Т-72АМТ — 3-й взвод\n3 танки (резерв)\nконтратака / добивання', [75,75]);

    // Tank assault directions (synchronized with mech)
    ln([[49.58, 37.34], [49.60, 37.28], [49.62, 37.20], [49.64, 36.50]], COLORS.RED, 2.5);
    ln([[49.58, 37.40], [49.60, 37.35], [49.62, 37.30], [49.64, 36.80]], COLORS.RED, 2.5);

    // =========================================================
    // ARTILLERY BATTERY — FIRE SUPPORT
    // =========================================================
    zoneLabel(49.48, 37.55, 'АРТИЛЕРІЙСЬКА БАТАРЕЯ', COLORS.PUR, 10);

    mk(49.50, 37.62, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">152</text>`, 'АРТБАТ-152', 'Артилерійська батарея\n152мм 2С3 Акація (6 гармат)\nдальність 17-24 км\nпідготовка рубежу атаки', [80,80]);

    mk(49.48, 37.58, `<circle cx="25" cy="25" r="15" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><circle cx="25" cy="25" r="4" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">120</text>`, 'МІНОМЕТ-120', 'Мінометна батарея\n120мм міномети (6 шт)\nдальність 7-8 км\nдим + осколкові', [70,70]);

    // Artillery fire plan — suppression zones
    ar([
        [49.66, 36.35], [49.68, 36.40], [49.70, 36.50], [49.70, 36.65],
        [49.71, 36.80], [49.70, 36.95], [49.71, 37.10], [49.70, 37.25],
        [49.71, 37.40], [49.70, 37.55], [49.70, 37.70],
        [49.68, 37.65], [49.68, 37.50], [49.69, 37.35], [49.68, 37.20],
        [49.69, 37.05], [49.68, 36.90], [49.69, 36.75], [49.68, 36.60],
        [49.68, 36.45], [49.66, 36.40]
    ], COLORS.PUR, COLORS.PUR, 0.06);

    // Fire lines from artillery to enemy
    ln([[49.50, 37.62], [49.69, 36.55]], COLORS.PUR, 1.5, '10 5');
    ln([[49.50, 37.62], [49.69, 36.90]], COLORS.PUR, 1.5, '10 5');
    ln([[49.48, 37.58], [49.69, 37.25]], COLORS.PUR, 1.5, '10 5');

    // Artillery coverage circle
    circ(49.50, 37.62, 20000, COLORS.PUR, 0.02);

    // =========================================================
    // AIR DEFENSE
    // =========================================================
    mk(49.50, 37.48, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><polygon points="25,10 15,30 35,30" fill="${COLORS.PUR}"/><line x1="25" y1="30" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">ППО</text>`, 'ППО-ВЗВОД', 'Зенітний взвод\nІгла / Стінгер / Старстрик\nзахист від авіації та БпАК\nрадіус: 3-5 км', [75,75]);

    circ(49.50, 37.48, 5000, COLORS.PUR, 0.02);

    // =========================================================
    // ENGINEER PLATOON — BREACHING
    // =========================================================
    zoneLabel(49.55, 37.68, 'ІНЖЕНЕРНИЙ ВЗВОД', COLORS.BRN, 9);

    mk(49.56, 37.72, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BRN}44" stroke="${COLORS.BRN}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.BRN}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.BRN}" stroke-width="3"/><circle cx="15" cy="33" r="3" fill="${COLORS.BRN}"/><circle cx="25" cy="33" r="3" fill="${COLORS.BRN}"/><circle cx="35" cy="33" r="3" fill="${COLORS.BRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">ІНЖ</text>`, 'ІНЖЕНЕРИ', 'Інженерний взвод\nрозмінування + обладнання переправ\nпророблення проходів у мінних полях\nМИНКЛИК + трал + вибухівка', [80,80]);

    // Breach point marker
    mk(49.62, 36.55, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BRN}55" stroke="${COLORS.BRN}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.WHT}" stroke-width="3"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.WHT}" stroke-width="3"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">ПРОХІД</text>`, 'ПРОХІД-1', 'Точка пророблення проходу\nінженери розміновують\nпозначений прохід для БМП + танків\nширина: 6-8 метрів', [80,80]);

    ln([[49.56, 37.72], [49.62, 36.55]], COLORS.BRN, 1.5, '4 3');

    // =========================================================
    // DRONE UNIT
    // =========================================================
    mk(49.52, 36.22, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="30" r="2" fill="${COLORS.CYN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'БПЛА-БАТ', 'Підрозділ БПЛА батальйону\nрозвідка + коригування + FPV-удари\nMavic + FPV + репітери\nрадіус: 10-15 км', [80,80]);

    circ(49.52, 36.22, 12000, COLORS.CYN, 0.02);

    // =========================================================
    // MEDICAL + LOGISTICS (rear)
    // =========================================================
    zoneLabel(49.45, 37.70, 'ТИЛ БАТАЛЬЙОНУ', COLORS.GRN, 10);

    mk(49.46, 37.72, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.PNK}" stroke-width="4"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.PNK}" stroke-width="4"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДР</text>`, 'МЕДРОТА', 'Медична рота батальйону\nхірургія + триаж + евакуація\nпольовий госпіталь\n"Золотий година"', [80,80]);

    mk(49.46, 37.80, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="16" x2="40" y2="16" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="32" x2="40" y2="32" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ТЛЗ</text>`, 'ТЛЗ', 'Тилове забезпечення\nбоєприпаси + пальне + харчі\nпідвоз колонами\nремонт + евакуація техніки', [80,80]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. 1st company assault (main effort)
    const co1assault = mkAnim(49.58, 36.56, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="25" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП</text>`, '1-РОТА→', '', [85,85]);
    animations.push({
        marker: co1assault,
        path: [
            [49.58, 36.56], [49.59, 36.54], [49.60, 36.52], [49.61, 36.50],
            [49.62, 36.48], [49.63, 36.46], [49.64, 36.44], [49.65, 36.42],
            [49.66, 36.40], [49.67, 36.38], [49.68, 36.36]
        ],
        step: 0,
        speed: 0.003,
    });

    // 2. 2nd company assault
    const co2assault = mkAnim(49.58, 36.81, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}55" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП</text>`, '2-РОТА→', '', [85,85]);
    animations.push({
        marker: co2assault,
        path: [
            [49.58, 36.81], [49.59, 36.80], [49.60, 36.79], [49.61, 36.78],
            [49.62, 36.77], [49.63, 36.76], [49.64, 36.75], [49.65, 36.74],
            [49.66, 36.73], [49.67, 36.72], [49.68, 36.71]
        ],
        step: 0,
        speed: 0.0025,
    });

    // 3. Tank company advancing with 1st company
    const tankAdvance = mkAnim(49.58, 37.34, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">Т-72</text>`, 'ТАНКИ→', '', [80,80]);
    animations.push({
        marker: tankAdvance,
        path: [
            [49.58, 37.34], [49.59, 37.28], [49.60, 37.22], [49.61, 37.16],
            [49.62, 37.10], [49.63, 37.04], [49.64, 36.98], [49.65, 36.92],
            [49.66, 36.86], [49.67, 36.80], [49.68, 36.74]
        ],
        step: 0,
        speed: 0.003,
    });

    // 4. 3rd company (reserve) following
    const co3reserve = mkAnim(49.58, 37.06, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="25" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП</text>`, '3-РЕЗ→', '', [85,85]);
    animations.push({
        marker: co3reserve,
        path: [
            [49.58, 37.06], [49.59, 37.02], [49.60, 36.98], [49.61, 36.95],
            [49.62, 36.92], [49.63, 36.89], [49.64, 36.86]
        ],
        step: 0,
        speed: 0.002,
    });

    // 5. FPV drone to enemy CP
    const fpvStrike = mkAnim(49.52, 36.22, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.CYN}88" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.CYN}"/>`, 'FPV→', '', [55,55]);
    animations.push({
        marker: fpvStrike,
        path: [
            [49.52, 36.22], [49.55, 36.30], [49.58, 36.40], [49.61, 36.50],
            [49.64, 36.60], [49.67, 36.70], [49.70, 36.80], [49.72, 36.85],
            [49.745, 36.90]
        ],
        step: 0,
        speed: 0.005,
    });

    // 6. Artillery spotter round
    const artyRound = mkAnim(49.50, 37.62, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАРЯД→', '', [50,50]);
    animations.push({
        marker: artyRound,
        path: [
            [49.50, 37.62], [49.54, 37.50], [49.58, 37.35], [49.62, 37.15],
            [49.65, 36.95], [49.67, 36.80], [49.695, 36.70]
        ],
        step: 0,
        speed: 0.004,
    });

    startAnimation(animations, '_mechBattalionAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #40c4ff;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:290px;">
            <div style="color:#40c4ff;font-weight:700;font-size:11px;margin-bottom:4px;">МЕХБАТАЛЬЙОН — ПРОРИВ (400-500 осіб)</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">БОЙОВИЙ СКЛАД:</div>
                <div>&#8226; <span style="color:#40c4ff;">1-а мехрота</span> — головний напрямок (захід)</div>
                <div>&#8226; <span style="color:#4caf50;">2-а мехрота</span> — підтримуючий (центр)</div>
                <div>&#8226; <span style="color:#ff9800;">3-я мехрота</span> — резерв (розвиток успіху)</div>
                <div>&#8226; <span style="color:#ef5350;">Танкова рота</span> — 10x Т-64БМ/Т-72АМТ</div>

                <div style="color:#e040fb;font-weight:700;margin-top:4px;">ВOGHEBA ПІДТРИМКА:</div>
                <div>&#8226; 152мм артбатарея — пригнічення оборони</div>
                <div>&#8226; 120мм міномети — дим + осколки</div>
                <div>&#8226; ППО — захист від авіації/БпАК</div>
                <div>&#8226; Інженери — розмінування + проходи</div>
                <div>&#8226; БПЛА — розвідка + FPV-удари</div>

                <div style="color:#ffeb3b;font-weight:700;margin-top:4px;">ЕТАПИ ПРОРИВУ:</div>
                <div>&#8226; Артпідготовка 15-30 хв → БПЛА коригування</div>
                <div>&#8226; Інженери проробляють проходи в мінних полях</div>
                <div>&#8226; 1+2 роти — подвійне охоплення</div>
                <div>&#8226; Танки — пряма підтримка атаки</div>
                <div>&#8226; 3-я рота — в розрив для розвитку успіху</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                Фронт: 3-5 км | Глибина: 2-4 км | Тривалість: 2-6 годин<br>
                Всього техніки: ~30x БМП + 10x танків + 6x гармат + 6x мінометів
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.38, 36.15], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to show the full battalion operation
    map.flyTo([49.58, 37.00], 12, { duration: 1.5 });
}
