// ===== MECHANIZED COMPANY VISUALIZATION =====
// Механізована рота — штурм укріпленого населеного пункту
// 3 взводи + вогнева підтримка + БПЛА + міномети

function buildMechCompanyViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._mechCompanyAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.72, 36.40, '───── МЕХАНІЗОВАНА РОТА — ШТУРМ НП ─────', COLORS.GRN, 12);
    zoneLabel(49.69, 36.40, '3 взводи + міномети + ПТРК + БПЛА | 120-150 бійців', COLORS.WHT, 9);

    // =========================================================
    // ENEMY DEFENSIVE AREA — COMPANY STRONGPOINT
    // =========================================================
    zoneLabel(49.66, 36.40, 'ОБОРОНА ПРОТИВНИКА — УКРІПЛЕНИЙ НАСЕЛЕНИЙ ПУНКТ', COLORS.RED, 10);

    // Built-up area (village)
    ar([
        [49.62, 36.52], [49.63, 36.58], [49.64, 36.68], [49.64, 36.78],
        [49.63, 36.88], [49.64, 36.98], [49.63, 37.08], [49.64, 37.18],
        [49.63, 37.28], [49.62, 37.32],
        [49.58, 37.32], [49.59, 37.28], [49.58, 37.18], [49.59, 37.08],
        [49.58, 36.98], [49.59, 36.88], [49.58, 36.78], [49.59, 36.68],
        [49.58, 36.58], [49.59, 36.52]
    ], COLORS.RED, COLORS.RED, 0.10);
    zoneLabel(49.605, 36.54, 'НП — НАСЕЛЕНИЙ ПУНКТ (укріплений)', COLORS.RED, 8);

    // Enemy platoon positions defending the village
    mk(49.615, 36.62, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСВ-1</text>`, 'ПРОТИВ-ВЗВ1', '1-й мотострілковий взвод\n~25-30 бійців\nзахідна частина НП\nАК + РПК + РПГ-7', [75,75]);

    mk(49.615, 36.85, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСВ-2</text>`, 'ПРОТИВ-ВЗВ2', '2-й мотострілковий взвод\n~25-30 бійців\nцентральна частина НП\nкулеметні точки в будинках', [75,75]);

    mk(49.615, 37.08, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСВ-3</text>`, 'ПРОТИВ-ВЗВ3', '3-й мотострілковий взвод\n~25-30 бійців\nсхідна частина НП\nрезерв + контратака', [75,75]);

    // Enemy heavy weapons in depth
    mk(49.635, 36.75, `<rect x="3" y="12" width="44" height="26" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="22" rx="15" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="22" x2="42" y2="22" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2В</text>`, 'БМП-ПРОТИВ', 'БМП-2 противника\n30мм гармата + ПТРК\nвогнева позиція на околиці', [80,80]);

    mk(49.635, 37.00, `<rect x="3" y="12" width="44" height="26" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="22" rx="15" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y1="22" x2="42" y2="22" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2В</text>`, 'БМП-ПРОТИВ2', 'БМП-2 противника\nприкриває східний фланг', [80,80]);

    // Enemy AGS covering approaches
    mk(49.635, 37.20, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АГС</text>`, 'АГС-ПРОТИВ', 'Автоматичний гранатомет\nАГС-17/30\nприкриває східні підступи', [75,75]);

    // Enemy company CP
    mk(49.645, 36.90, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.RED}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КМР-В</text>`, 'КП-ПРОТИВ', 'Командир роти противника\nкерування обороною НП\nрадіостанція + спостерігач', [75,75]);

    // Enemy anti-tank ambush on western approach
    mk(49.59, 36.48, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="17" x2="35" y2="17" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="25" r="3" fill="${COLORS.RED}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">РПГ</text>`, 'РПГ-ЗАСАДКА', 'РПГ засідка на дорозі\nметить в колону БМП\nвідстань 150-200м', [65,65]);

    // Enemy fire sectors
    ln([[49.615, 36.62], [49.54, 36.55]], COLORS.RED, 1, '4 3');
    ln([[49.615, 36.62], [49.54, 36.70]], COLORS.RED, 1, '4 3');
    ln([[49.615, 37.08], [49.54, 37.00]], COLORS.RED, 1, '4 3');
    ln([[49.615, 37.08], [49.54, 37.20]], COLORS.RED, 1, '4 3');

    // =========================================================
    // PHASE LINES
    // =========================================================
    ln([
        [49.54, 36.45], [49.54, 36.55], [49.54, 36.65], [49.54, 36.75],
        [49.54, 36.85], [49.54, 36.95], [49.54, 37.05], [49.54, 37.15],
        [49.54, 37.25], [49.54, 37.35]
    ], COLORS.YEL, 2.5, '10 5');
    zoneLabel(49.545, 36.46, '── ЛІНІЯ ВИХОДУ (LD) ──', COLORS.YEL, 9);

    ln([
        [49.57, 36.50], [49.57, 36.60], [49.57, 36.70], [49.57, 36.80],
        [49.57, 36.90], [49.57, 37.00], [49.57, 37.10], [49.57, 37.20],
        [49.57, 37.30]
    ], COLORS.GRN, 2, '6 4');
    zoneLabel(49.575, 36.46, '── PL GREEN ──', COLORS.GRN, 8);

    ln([
        [49.60, 36.52], [49.60, 36.62], [49.60, 36.72], [49.60, 36.82],
        [49.60, 36.92], [49.60, 37.02], [49.60, 37.12], [49.60, 37.22],
        [49.60, 37.32]
    ], COLORS.RED, 2, '4 3');
    zoneLabel(49.605, 36.46, '── PL RED ──', COLORS.RED, 8);

    zoneLabel(49.625, 36.46, '═══ ОБ&#x27;ЄКТ (НП) ═══', COLORS.ORG, 9);

    // =========================================================
    // COMPANY COMMAND POST
    // =========================================================
    zoneLabel(49.48, 36.40, 'КП МЕХРОТИ', COLORS.GRN, 10);

    mk(49.50, 36.52, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="4"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,8 17,22 33,22" fill="${COLORS.GRN}"/><line x1="25" y1="22" x2="25" y2="40" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КМР</text>`, 'КОМРОТЫ', 'Командир механізованої роти\nкапітан — керує 3 взводами\nрадіостанція + планшет + БПЛА\nотримує задачу від комбата', [95,95]);

    mk(49.48, 36.55, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="12" y1="14" x2="38" y2="14" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,16 19,26 31,26" fill="${COLORS.GRN}"/><line x1="25" y1="26" x2="25" y2="32" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ЗКМР</text>`, 'ЗАМКОМ', 'Заступник командира роти\nзабезпечення + евакуація\nлоєпостачання + зв\'язок з комбатом', [70,70]);

    // Command lines to platoons
    ln([[49.50, 36.52], [49.50, 36.65]], COLORS.GRN, 2, '3 3');
    ln([[49.50, 36.65], [49.48, 36.78]], COLORS.GRN, 2, '3 3');
    ln([[49.50, 36.65], [49.50, 36.90]], COLORS.GRN, 2, '3 3');
    ln([[49.50, 36.65], [49.52, 37.02]], COLORS.GRN, 2, '3 3');
    zoneLabel(49.495, 36.66, 'УПРАВЛІННЯ', COLORS.GRN, 7);

    // =========================================================
    // 1ST PLATOON — MAIN EFFORT (western approach)
    // =========================================================
    zoneLabel(49.49, 36.72, '1-Й ВЗВОД — ГОЛОВНИЙ УДАР (захід)', COLORS.BLU, 9);

    // Platoon commander
    mk(49.48, 36.78, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,10 18,20 32,20" fill="${COLORS.BLU}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="43" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КМВ-1</text>`, '1-ВЗВ-КОМ', 'Командир 1-го взводу\nлейтенант\nкерування 3 відділеннями\nголовний удар з заходу', [75,75]);

    // BMP-2 section (3 vehicles)
    mk(49.48, 36.82, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП-2</text>`, '1-ВЗВ-БМП1', 'БМП-2 #1 (1-е відділення)\n30мм + ПТРК Конкурс\n7 десантників', [80,80]);

    mk(49.48, 36.86, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП-2</text>`, '1-ВЗВ-БМП2', 'БМП-2 #2 (2-е відділення)\n30мм + ПТРК\n7 десантників', [80,80]);

    mk(49.48, 36.90, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП-1</text>`, '1-ВЗВ-БМП3', 'БМП-1 #3 (3-є відділення)\n73мм гармата\n7 десантників (резерв взводу)', [80,80]);

    // 1st platoon assault direction
    ln([[49.48, 36.82], [49.52, 36.78], [49.55, 36.74], [49.57, 36.70], [49.59, 36.66]], COLORS.BLU, 2.5);
    zoneLabel(49.53, 36.72, 'НАПРЯМОК 1', COLORS.BLU, 8);

    // =========================================================
    // 2ND PLATOON — SUPPORTING EFFORT (eastern approach)
    // =========================================================
    zoneLabel(49.49, 36.95, '2-Й ВЗВОД — ПІДТРИМУЮЧИЙ (схід)', COLORS.GRN, 9);

    mk(49.50, 36.98, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,10 18,20 32,20" fill="${COLORS.GRN}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="43" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КМВ-2</text>`, '2-ВЗВ-КОМ', 'Командир 2-го взводу\nпідтримуючий зусиб зі сходу\nзв\'язує МСВ-3 противника', [75,75]);

    mk(49.50, 37.02, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП-2</text>`, '2-ВЗВ-БМП1', 'БМП-2 #1\n2-й взвод, 1-е відділення', [80,80]);

    mk(49.50, 37.06, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП-2</text>`, '2-ВЗВ-БМП2', 'БМП-2 #2\n2-й взвод, 2-е відділення', [80,80]);

    mk(49.50, 37.10, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП-1</text>`, '2-ВЗВ-БМП3', 'БМП-1 #3\n2-й взвод, 3-є відділення', [80,80]);

    // 2nd platoon assault direction
    ln([[49.50, 37.02], [49.53, 37.00], [49.55, 36.98], [49.57, 36.96], [49.59, 36.94]], COLORS.GRN, 2.5);
    zoneLabel(49.53, 36.94, 'НАПРЯМОК 2', COLORS.GRN, 8);

    // =========================================================
    // 3RD PLATOON — RESERVE
    // =========================================================
    zoneLabel(49.47, 37.12, '3-Й ВЗВОД — РЕЗЕРВ', COLORS.ORG, 9);

    mk(49.48, 37.16, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,10 18,20 32,20" fill="${COLORS.ORG}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="43" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">КМВ-3</text>`, '3-ВЗВ-КОМ', 'Командир 3-го взводу\nрезерв командира роти\nзадача: розвиток успіху / контратака\nвводиться після прориву 1-м взводом', [75,75]);

    mk(49.48, 37.20, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП-2</text>`, '3-ВЗВ-БМП1', 'БМП-2 #1\n3-й взвод (резерв)', [80,80]);

    mk(49.48, 37.24, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП-2</text>`, '3-ВЗВ-БМП2', 'БМП-2 #2\n3-й взвод (резерв)', [80,80]);

    mk(49.48, 37.28, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП-1</text>`, '3-ВЗВ-БМП3', 'БМП-1 #3\n3-й взвод (резерв)', [80,80]);

    // Reserve follow-through direction (into the gap between 1st and 2nd)
    ln([[49.48, 37.22], [49.52, 37.15], [49.55, 37.10], [49.57, 37.05], [49.59, 36.95]], COLORS.ORG, 2, '5 3');
    zoneLabel(49.53, 37.08, 'НАПРЯМОК 3 (РЕЗЕРВ)', COLORS.ORG, 8);

    // =========================================================
    // COMPANY FIRE SUPPORT
    // =========================================================
    zoneLabel(49.44, 37.32, 'ВOGНЕВА ПІДТРИМКА РОТИ', COLORS.PUR, 10);

    // Mortar section (120mm)
    mk(49.46, 37.36, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">120</text>`, 'МІНОМЕТ-120', 'Мінометний взвод роти\n120мм міномети (2-3 шт)\nдальність 7-8 км\nдим + осколкові + запалювальні', [80,80]);

    // Mortar fire coverage on enemy position
    ar([
        [49.60, 36.58], [49.62, 36.65], [49.63, 36.75], [49.63, 36.85],
        [49.63, 36.95], [49.62, 37.05], [49.63, 37.15], [49.62, 37.25],
        [49.60, 37.28], [49.61, 37.15], [49.61, 37.05], [49.61, 36.95],
        [49.61, 36.85], [49.61, 36.75], [49.61, 36.65], [49.61, 36.58]
    ], COLORS.PUR, COLORS.PUR, 0.06);
    zoneLabel(49.615, 36.56, 'ЗОНА ВИГІГАHHЯ МІHОМЕТІВ', COLORS.PUR, 7);

    ln([[49.46, 37.36], [49.61, 36.90]], COLORS.PUR, 1.5, '8 4');

    // ATGM section (Stugna-P)
    mk(49.44, 37.34, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="18" x2="35" y2="18" stroke="${COLORS.RED}" stroke-width="3"/><line x1="35" y1="18" x2="30" y2="13" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="15" cy="28" r="2" fill="${COLORS.RED}"/><circle cx="22" cy="28" r="2" fill="${COLORS.RED}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ПТРК</text>`, 'ПТРК-ВІДД', 'Протитанкове відділення\nStugna-P (2 розрахунки)\nнейтралізація броні на околиці\nдальність: до 5000м', [75,75]);

    // ATGM sectors covering the village approaches
    ln([[49.44, 37.34], [49.57, 37.22]], COLORS.RED, 1.5, '5 3');
    ln([[49.44, 37.34], [49.57, 37.36]], COLORS.RED, 1.5, '5 3');

    // FPV drone team (company level)
    mk(49.46, 36.50, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="30" r="2" fill="${COLORS.CYN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'БПЛА-РОТА', 'Взвод БПЛА роти\nрозвідка + коригування + ураження\nMavic + FPV-камікадзе + репітери\nрадіус: 5-15 км', [80,80]);

    circ(49.46, 36.50, 8000, COLORS.CYN, 0.02);

    // Machine gun section covering the gap between platoons
    mk(49.49, 36.94, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="12" y1="20" x2="38" y2="20" stroke="${COLORS.ORG}" stroke-width="4"/><circle cx="15" cy="28" r="2" fill="${COLORS.ORG}"/><circle cx="22" cy="28" r="2" fill="${COLORS.ORG}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">ПКМ</text>`, 'ПКМ-ВІДД', 'Кулеметне відділення\n2x ПКМ — прикривають стик\nміж 1-м та 2-м взводами\nФПЛ — фінальна лінія вогню', [70,70]);

    // MG fire sector between platoons
    ln([[49.49, 36.94], [49.57, 36.88]], COLORS.ORG, 1.5, '3 3');
    ln([[49.49, 36.94], [49.57, 36.98]], COLORS.ORG, 1.5, '3 3');

    // =========================================================
    // BATTALION SUPPORT (available to company)
    // =========================================================
    zoneLabel(49.40, 37.40, 'ПІДТРИМКА БАТАЛЬЙОНУ', COLORS.BLU, 10);

    mk(49.42, 37.42, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.BLU}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АРТ</text>`, 'АРТБАТ', 'Артилерійська батарея батальйону\n122мм / 152мм гаубиці\nпідтримка штурму роти\nдальність: 10-20 км', [75,75]);

    ln([[49.42, 37.42], [49.61, 36.90]], COLORS.BLU, 1.5, '10 5');
    zoneLabel(49.50, 37.20, 'АРТ ПІДТРИМКА', COLORS.BLU, 7);

    // Medical evacuation point
    mk(49.44, 36.50, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДП</text>`, 'МЕДПУНКТ', 'Медичний пункт роти\nсаніструктори + носилки\nперша допомога + евакуація\n"Золотий година" — 60 хвилин', [70,70]);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. 1st platoon BMPs advancing (main effort)
    const bmp1Main = mkAnim(49.48, 36.82, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП-2</text>`, '1-ВЗВ→', '', [80,80]);
    animations.push({
        marker: bmp1Main,
        path: [
            [49.48, 36.82], [49.49, 36.80], [49.50, 36.78], [49.51, 36.76],
            [49.52, 36.74], [49.53, 36.72], [49.54, 36.70], [49.55, 36.68],
            [49.56, 36.66], [49.57, 36.64], [49.58, 36.62]
        ],
        step: 0,
        speed: 0.004,
    });

    // 2. 2nd platoon BMPs advancing (supporting)
    const bmp2Support = mkAnim(49.50, 37.02, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}55" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП-2</text>`, '2-ВЗВ→', '', [80,80]);
    animations.push({
        marker: bmp2Support,
        path: [
            [49.50, 37.02], [49.51, 37.00], [49.52, 36.99], [49.53, 36.98],
            [49.54, 36.97], [49.55, 36.96], [49.56, 36.95], [49.57, 36.94],
            [49.58, 36.93]
        ],
        step: 0,
        speed: 0.003,
    });

    // 3. 3rd platoon (reserve) following
    const bmp3Reserve = mkAnim(49.48, 37.20, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП-2</text>`, '3-РЕЗ→', '', [80,80]);
    animations.push({
        marker: bmp3Reserve,
        path: [
            [49.48, 37.20], [49.49, 37.17], [49.50, 37.15], [49.51, 37.13],
            [49.52, 37.11], [49.53, 37.09], [49.54, 37.07], [49.55, 37.05]
        ],
        step: 0,
        speed: 0.003,
    });

    // 4. FPV drone swarm toward enemy position
    const fpvSwarm = mkAnim(49.46, 36.50, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.CYN}88" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.CYN}"/>`, 'FPV→', '', [55,55]);
    animations.push({
        marker: fpvSwarm,
        path: [
            [49.46, 36.50], [49.48, 36.55], [49.50, 36.62], [49.52, 36.70],
            [49.54, 36.78], [49.56, 36.84], [49.58, 36.88], [49.60, 36.90],
            [49.615, 36.85]
        ],
        step: 0,
        speed: 0.007,
    });

    // 5. Mortar fire adjustment (spotter round)
    const mortarRound = mkAnim(49.46, 37.36, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="9" font-weight="bold">*</text>`, 'МІНА→', '', [50,50]);
    animations.push({
        marker: mortarRound,
        path: [
            [49.46, 37.36], [49.50, 37.30], [49.53, 37.20], [49.56, 37.10],
            [49.58, 37.00], [49.60, 36.92], [49.615, 36.88]
        ],
        step: 0,
        speed: 0.006,
    });

    startAnimation(animations, '_mechCompanyAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4caf50;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:290px;">
            <div style="color:#4caf50;font-weight:700;font-size:11px;margin-bottom:4px;">МЕХРОТА — ШТУРМ НП (120-150 бійців)</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">СИЛИ РОТИ:</div>
                <div>&#8226; <span style="color:#40c4ff;">1-й взвод</span> — головний удар (захід НП)</div>
                <div>&#8226; <span style="color:#4caf50;">2-й взвод</span> — підтримуючий (схід НП)</div>
                <div>&#8226; <span style="color:#ff9800;">3-й взвод</span> — резерв (розвиток успіху)</div>
                <div>&#8226; 9x БМП (БМП-2 + БМП-1)</div>

                <div style="color:#e040fb;font-weight:700;margin-top:4px;">ВOGHEBA ПІДТРИМКА:</div>
                <div>&#8226; 120мм міномети — пригнічення оборони</div>
                <div>&#8226; ПТРК Stugna-P — знищення броні</div>
                <div>&#8226; БПЛА — розвідка + FPV-удари</div>
                <div>&#8226; ПКМ — прикриття стиків</div>
                <div>&#8226; Артбатарея (від батальйону)</div>

                <div style="color:#ffeb3b;font-weight:700;margin-top:4px;">ЕТАПИ ШТУРМУ:</div>
                <div>&#8226; БПЛА розвідка → міномети + артилерія</div>
                <div>&#8226; 1+2 взводи — подвійний охоплення</div>
                <div>&#8226; 3-й взвод — в розрив між 1-м і 2-м</div>
                <div>&#8226; Заочищення НП — від будинку до будинку</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                <span style="color:#ffeb3b;">--- LD</span>
                <span style="color:#4caf50;"> --- PL GREEN</span>
                <span style="color:#ef5350;"> --- PL RED</span><br>
                Фронт роти: 800-1200м | Глибина: 1-2 км | Тривалість: 1-3 години
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.32, 36.40], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to show the full company battle
    map.flyTo([49.52, 36.90], 13, { duration: 1.5 });
}
