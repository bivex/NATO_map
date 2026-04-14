// ===== MECHANIZED PLATOON VISUALIZATION =====
// Механізований взвод — штурм укріпленої позиції противника
// Бойовий порядок, зони вогню, маневр, підтримка

function buildMechPlatoonViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._mechPlatoonAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.68, 36.55, '───── МЕХАНІЗОВАНИЙ ВЗВОД — ШТУРМ ПОЗИЦІЇ ─────', COLORS.GRN, 12);
    zoneLabel(49.65, 36.55, 'ВЗВОД У НАСТУПІ: 3 відділення + підтримка', COLORS.WHT, 9);

    // =========================================================
    // ENEMY DEFENSIVE POSITION (OBJECTIVE)
    // =========================================================
    zoneLabel(49.62, 36.55, 'ОБОРона ПРОТИВНИКА — УКРІПЛЕНА ПОЗИЦІЯ', COLORS.RED, 10);

    // Enemy trench line
    ar([
        [49.58, 36.60], [49.58, 36.75], [49.59, 36.90], [49.58, 37.05],
        [49.59, 37.20], [49.58, 37.35],
        [49.56, 37.35], [49.57, 37.20], [49.56, 37.05],
        [49.57, 36.90], [49.56, 36.75], [49.56, 36.60]
    ], COLORS.RED, COLORS.RED, 0.12);
    zoneLabel(49.57, 36.58, 'ТРАНШЕЯ ПРОТИВНИКА', COLORS.RED, 8);

    // Enemy squad positions along trench
    mk(49.575, 36.68, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ПД1</text>`, 'ПРОТИВ-ПД1', '1-е мотострілкове відділення\n6-8 бійців + АК-74 + РПК\nукріплена позиція в окопі', [75,75]);

    mk(49.575, 36.83, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ПД2</text>`, 'ПРОТИВ-ПД2', '2-е мотострілкове відділення\n6-8 бійців + РПК + РПГ-7\nпозиція з перекриттям', [75,75]);

    mk(49.575, 36.98, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ПД3</text>`, 'ПРОТИВ-ПД3', '3-є мотострілкове відділення\n6-8 бійців\nрезерв + контратака', [75,75]);

    // Enemy machine gun bunker
    mk(49.575, 37.13, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="4"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.RED}" stroke-width="4"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">ПК/ДШКМ</text>`, 'КУЛЕМЕТ-В', 'Кулеметна точка (ПКМ/ДШКМ)\nприкриває підступи до позиції\nсектор обстрілу 60°\nФПЛ — фінальна лінія вогню', [80,80]);

    // Enemy MG sector of fire (final protective line)
    ln([[49.575, 37.13], [49.50, 37.00]], COLORS.RED, 1.5, '4 3');
    ln([[49.575, 37.13], [49.50, 37.26]], COLORS.RED, 1.5, '4 3');
    ar([
        [49.575, 37.13], [49.52, 37.03], [49.50, 37.06],
        [49.50, 37.20], [49.52, 37.23]
    ], COLORS.RED, COLORS.RED, 0.06);

    // Enemy AGS/RPG position
    mk(49.575, 37.28, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АГС</text>`, 'АГС-В', 'Автоматичний гранатомет\nАГС-17 / АГС-30\nприкриває фланги позиції', [75,75]);

    // Enemy RPG ambush on flank
    mk(49.55, 37.38, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="17" x2="35" y2="17" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="26" r="3" fill="${COLORS.RED}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">РПГ</text>`, 'РПГ-ЗАСАДКА', 'РПГ-7 засідка на фланзі\nметить в БМП при підході\n DISTANCE: 150-300м', [70,70]);

    // Enemy command in rear
    mk(49.60, 37.00, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><polygon points="25,8 18,18 32,18" fill="${COLORS.RED}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КВ</text>`, 'КОМАНДИР-В', 'Командир взводу противника\nкерування обороною\nрадіостанція + бінокль', [70,70]);

    // =========================================================
    // PHASE LINES
    // =========================================================
    // Line of Departure (LD)
    ln([
        [49.50, 36.55], [49.50, 36.70], [49.50, 36.85], [49.50, 37.00],
        [49.50, 37.15], [49.50, 37.30], [49.50, 37.45]
    ], COLORS.YEL, 2, '8 4');
    zoneLabel(49.51, 36.57, '── ЛІНІЯ ВИХОДУ (LD) ──', COLORS.YEL, 9);

    // Intermediate phase line (PL GREEN)
    ln([
        [49.54, 36.55], [49.54, 36.70], [49.54, 36.85], [49.54, 37.00],
        [49.54, 37.15], [49.54, 37.30], [49.54, 37.45]
    ], COLORS.GRN, 1.5, '5 5');
    zoneLabel(49.545, 36.57, '── PL GREEN ──', COLORS.GRN, 8);

    // Phase line RED (assault position)
    ln([
        [49.56, 36.58], [49.56, 36.73], [49.56, 36.88], [49.56, 37.03],
        [49.56, 37.18], [49.56, 37.33]
    ], COLORS.RED, 1.5, '3 3');
    zoneLabel(49.565, 36.58, '── PL RED ──', COLORS.RED, 8);

    // Objective line
    zoneLabel(49.59, 36.58, '═══ ОБ&#x27;ЄКТ (OBJ) ═══', COLORS.ORG, 9);

    // =========================================================
    // PLATOON COMMAND POST + COMMANDER
    // =========================================================
    zoneLabel(49.46, 36.55, 'КОМАНДУВАННЯ ВЗВОДУ', COLORS.GRN, 10);

    mk(49.48, 36.65, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="4"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.GRN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КМВ</text>`, 'КОМВЗВОД', 'Командир механізованого взводу\nлейтенант — приймає рішення\nкерування 3 відділеннями\nрадіостанція + карта + БПЛА', [90,90]);

    mk(49.46, 36.68, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="12" y1="14" x2="38" y2="14" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,16 19,26 31,26" fill="${COLORS.GRN}"/><line x1="25" y1="26" x2="25" y2="32" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">СТВ</text>`, 'СТАРШИНА', 'Старшина взводу\nзабезпечення + підготовка\nамуніція + евакуація + зв\'язок', [70,70]);

    // Command line from commander to squads
    ln([[49.48, 36.65], [49.48, 36.80]], COLORS.GRN, 1.5, '2 2');
    ln([[49.48, 36.80], [49.46, 36.90]], COLORS.GRN, 1.5, '2 2');
    ln([[49.48, 36.80], [49.48, 37.00]], COLORS.GRN, 1.5, '2 2');
    ln([[49.48, 36.80], [49.50, 37.10]], COLORS.GRN, 1.5, '2 2');

    // =========================================================
    // 1ST SQUAD — MAIN EFFORT (center)
    // =========================================================
    zoneLabel(49.48, 36.85, '1-Е ВІДДІЛЕННЯ — ГОЛОВНИЙ УДАР', COLORS.BLU, 9);

    // BMP-2 (squad transport + fire support)
    mk(49.48, 36.95, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП-2</text>`, '1-ВІДД-БМП', 'БМП-2 — командира відділення\n30мм гармата + КОНКУРС\n7 десантників\nшвидкість 65 км/год', [85,85]);

    // Dismounted infantry squad
    mk(49.46, 36.95, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.BLU}" stroke-width="1.5"/><circle cx="15" cy="15" r="2" fill="${COLORS.BLU}"/><circle cx="25" cy="15" r="2" fill="${COLORS.BLU}"/><circle cx="35" cy="15" r="2" fill="${COLORS.BLU}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BLU}"/><circle cx="25" cy="35" r="2" fill="${COLORS.BLU}"/><circle cx="35" cy="35" r="2" fill="${COLORS.BLU}"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">ПД</text>`, '1-ПІХОТА', 'Десант 1-го відділення (спіш.)\nкомандир + кулеметник + гранатометник\n+ 4 стрільці\nозброєння: АК + РПК + РПГ', [75,75]);

    // Assault direction arrow
    ln([[49.48, 36.95], [49.52, 36.90], [49.55, 36.85]], COLORS.BLU, 2.5);
    zoneLabel(49.52, 36.82, 'НАПРЯМОК 1', COLORS.BLU, 8);

    // =========================================================
    // 2ND SQUAD — SUPPORTING EFFORT (left flank)
    // =========================================================
    zoneLabel(49.48, 37.05, '2-Е ВІДДІЛЕННЯ — ПІДТРИМУЮЧИЙ', COLORS.GRN, 9);

    mk(49.48, 37.10, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП-2</text>`, '2-ВІДД-БМП', 'БМП-2 — 2-е відділення\n30мм гармата + ПТРК\n7 десантників\nпідтримуючий зусиб з флангу', [85,85]);

    mk(49.46, 37.10, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.GRN}" stroke-width="1.5"/><circle cx="15" cy="15" r="2" fill="${COLORS.GRN}"/><circle cx="25" cy="15" r="2" fill="${COLORS.GRN}"/><circle cx="35" cy="15" r="2" fill="${COLORS.GRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.GRN}"/><circle cx="25" cy="35" r="2" fill="${COLORS.GRN}"/><circle cx="35" cy="35" r="2" fill="${COLORS.GRN}"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">ПД</text>`, '2-ПІХОТА', 'Десант 2-го відділення (спіш.)\nпідтримка вогнем зліва\nзахід флангу від контратаки', [75,75]);

    ln([[49.48, 37.10], [49.52, 37.08], [49.55, 37.05]], COLORS.GRN, 2.5);
    zoneLabel(49.52, 37.02, 'НАПРЯМОК 2', COLORS.GRN, 8);

    // =========================================================
    // 3RD SQUAD — RESERVE / FOLLOW-THROUGH
    // =========================================================
    zoneLabel(49.44, 36.93, '3-Е ВІДДІЛЕННЯ — РЕЗЕРВ', COLORS.ORG, 9);

    mk(49.44, 36.90, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП-1</text>`, '3-ВІДД-БМП', 'БМП-1 — 3-є відділення (резерв)\n73мм гармата\n7 десантників\nрезерв командира взводу', [85,85]);

    // =========================================================
    // PLATOON SUPPORT WEAPONS
    // =========================================================
    zoneLabel(49.45, 37.20, 'ВЗВОДНА ЗБРОЯ ПІДТРИМКИ', COLORS.ORG, 10);

    // ATGM team (Stugna-P / Javelin)
    mk(49.46, 37.22, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="18" x2="35" y2="18" stroke="${COLORS.RED}" stroke-width="3"/><line x1="35" y1="18" x2="30" y2="13" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="15" cy="28" r="2" fill="${COLORS.RED}"/><circle cx="20" cy="28" r="2" fill="${COLORS.RED}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ПТРК</text>`, 'ПТРК', 'Протитанковий розрахунок\nStugna-P / Javelin / NLAW\nнейтралізація броні противника\nдальність: 1000-2500м', [75,75]);

    // ATGM sector
    ln([[49.46, 37.22], [49.54, 37.15]], COLORS.RED, 1.5, '5 3');
    ln([[49.46, 37.22], [49.54, 37.30]], COLORS.RED, 1.5, '5 3');

    // Machine gun team (PKM)
    mk(49.44, 37.22, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="12" y1="20" x2="38" y2="20" stroke="${COLORS.ORG}" stroke-width="4"/><circle cx="15" cy="28" r="2" fill="${COLORS.ORG}"/><circle cx="22" cy="28" r="2" fill="${COLORS.ORG}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">ПКМ</text>`, 'КУЛЕМЕТ', 'Кулеметний розрахунок ПКМ\nприкриває маневр відділень\nФПЛ — фінальна лінія вогню\nдальність: 1000м', [75,75]);

    // PKM sector of fire
    ln([[49.44, 37.22], [49.54, 37.16]], COLORS.ORG, 1.5, '3 3');
    ln([[49.44, 37.22], [49.54, 37.28]], COLORS.ORG, 1.5, '3 3');
    ar([
        [49.44, 37.22], [49.52, 37.18], [49.54, 37.19],
        [49.54, 37.26], [49.52, 37.27]
    ], COLORS.ORG, COLORS.ORG, 0.06);

    // FPV drone operator
    mk(49.42, 36.70, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="30" r="2" fill="${COLORS.CYN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'FPV-ОПЕРАТОР', 'Оператор FPV-дрона\nрозвідка + ураження в реальному часі\nMavic + FPV-камікадзе\nрадіус: 3-10 км', [80,80]);

    // Drone recon arc
    circ(49.42, 36.70, 5000, COLORS.CYN, 0.03);

    // =========================================================
    // COMPANY MORTAR SUPPORT (attached)
    // =========================================================
    zoneLabel(49.40, 37.30, 'ПІДТРИМКА РОТИ (прикріплена)', COLORS.PUR, 10);

    mk(49.42, 37.35, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">Мін</text>`, '82ММ-МІН', 'Мінометний взвод роти\n82мм міномети (2-3 шт)\nдальність 3-4 км\nдим + осколкові міни', [75,75]);

    // Mortar fire zone on enemy trench
    ar([
        [49.56, 36.70], [49.56, 36.80], [49.575, 36.85], [49.56, 36.90],
        [49.575, 36.95], [49.56, 37.00], [49.575, 37.05], [49.56, 37.10],
        [49.55, 37.00], [49.55, 36.90], [49.55, 36.80], [49.55, 36.70]
    ], COLORS.PUR, COLORS.PUR, 0.08);
    zoneLabel(49.555, 36.62, 'ЗОНА ВИГІВАННЯ МІНОМЕТІВ', COLORS.PUR, 7);

    // Mortar fire line
    ln([[49.42, 37.35], [49.56, 36.90]], COLORS.PUR, 1.5, '6 4');

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. 1st squad BMP advancing to assault position
    const bmp1Assault = mkAnim(49.48, 36.95, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BLU}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.BLU}"/><circle cx="38" cy="32" r="3" fill="${COLORS.BLU}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">БМП-2</text>`, '1-ВІДД→', '', [85,85]);
    animations.push({
        marker: bmp1Assault,
        path: [
            [49.48, 36.95], [49.49, 36.93], [49.50, 36.91], [49.51, 36.89],
            [49.52, 36.87], [49.53, 36.85], [49.54, 36.84], [49.55, 36.83],
            [49.56, 36.82]
        ],
        step: 0,
        speed: 0.005,
    });

    // 2. 2nd squad BMP bounding forward
    const bmp2Bound = mkAnim(49.48, 37.10, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}55" stroke="${COLORS.GRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">БМП-2</text>`, '2-ВІДД→', '', [85,85]);
    animations.push({
        marker: bmp2Bound,
        path: [
            [49.48, 37.10], [49.49, 37.08], [49.50, 37.06], [49.51, 37.05],
            [49.52, 37.04], [49.53, 37.03], [49.54, 37.02], [49.55, 37.01]
        ],
        step: 0,
        speed: 0.004,
    });

    // 3. FPV drone flying toward enemy position
    const fpvDrone = mkAnim(49.42, 36.70, `<polygon points="25,10 18,25 22,25 22,38 28,38 28,25 32,25" fill="${COLORS.CYN}88" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="8" r="3" fill="${COLORS.CYN}"/>`, 'FPV→', '', [60,60]);
    animations.push({
        marker: fpvDrone,
        path: [
            [49.42, 36.70], [49.44, 36.72], [49.46, 36.75], [49.48, 36.78],
            [49.50, 36.82], [49.52, 36.86], [49.54, 36.90], [49.56, 36.93],
            [49.575, 36.98]
        ],
        step: 0,
        speed: 0.008,
    });

    // 4. Dismounted infantry advancing (1st squad, bounding overwatch)
    const infantry1 = mkAnim(49.46, 36.95, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BLU}"/><circle cx="25" cy="15" r="2" fill="${COLORS.BLU}"/><circle cx="35" cy="15" r="2" fill="${COLORS.BLU}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BLU}"/><circle cx="25" cy="35" r="2" fill="${COLORS.BLU}"/><circle cx="35" cy="35" r="2" fill="${COLORS.BLU}"/>`, 'ПІХОТА→', '', [60,60]);
    animations.push({
        marker: infantry1,
        path: [
            [49.46, 36.95], [49.47, 36.93], [49.48, 36.91], [49.49, 36.89],
            [49.50, 36.87], [49.51, 36.86], [49.52, 36.85], [49.53, 36.84],
            [49.54, 36.83]
        ],
        step: 0,
        speed: 0.004,
    });

    // 5. 3rd squad (reserve) following behind
    const bmp3Reserve = mkAnim(49.44, 36.90, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.ORG}55" stroke="${COLORS.ORG}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.ORG}" stroke-width="3"/><circle cx="12" cy="32" r="3" fill="${COLORS.ORG}"/><circle cx="38" cy="32" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БМП-1</text>`, '3-РЕЗЕРВ→', '', [85,85]);
    animations.push({
        marker: bmp3Reserve,
        path: [
            [49.44, 36.90], [49.45, 36.88], [49.46, 36.87], [49.47, 36.86],
            [49.48, 36.85], [49.49, 36.84], [49.50, 36.83]
        ],
        step: 0,
        speed: 0.003,
    });

    startAnimation(animations, '_mechPlatoonAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4caf50;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:290px;">
            <div style="color:#4caf50;font-weight:700;font-size:11px;margin-bottom:4px;">МЕХВЗВОД — ШТУРМ (25-30 бійців)</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">БОЙОВИЙ ПОРЯДОК:</div>
                <div>&#8226; <span style="color:#40c4ff;">1-е відділення</span> — головний удар (центр)</div>
                <div>&#8226; <span style="color:#4caf50;">2-е відділення</span> — підтримуючий (фланг)</div>
                <div>&#8226; <span style="color:#ff9800;">3-е відділення</span> — резерв командира</div>

                <div style="color:#ef5350;font-weight:700;margin-top:4px;">ЗАСОБИ ВИГІВАННЯ:</div>
                <div>&#8226; 3x БМП (30мм + 73мм + ПТРК)</div>
                <div>&#8226; ПТРК: Stugna-P / Javelin / NLAW</div>
                <div>&#8226; ПКМ — кулеметне прикриття</div>
                <div>&#8226; FPV-дрони — розвідка + ураження</div>
                <div>&#8226; 82мм міномети (прикріплені від роти)</div>

                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ТАКТИКА:</div>
                <div>&#8226; БПЛА розвідка → міномети подавляють</div>
                <div>&#8226; БМП вогонь на ходу → спішування за LD</div>
                <div>&#8226; Перебіжками до PL GREEN</div>
                <div>&#8226; Штурм з PL RED → траншея → зачищення</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                <span style="color:#ffeb3b;">--- LD</span> &nbsp;
                <span style="color:#4caf50;">--- PL GREEN</span> &nbsp;
                <span style="color:#ef5350;">--- PL RED</span><br>
                Тривалість штурму: 15-40 хвилин | Втрати: очікувані 15-25%
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.30, 36.55], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to show the full tactical layout
    map.flyTo([49.50, 36.95], 14, { duration: 1.5 });
}
