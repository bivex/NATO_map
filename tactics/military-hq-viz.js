// ===== MILITARY UNIT HEADQUARTERS VISUALIZATION =====
// Штаб бригади — командний пункт, система управління, зв'язок, підлеглі частини

function buildMilitaryHQViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._militaryHQAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.75, 36.20, '───── ШТАБ БРИГАДИ — КОМАНДНИЙ ПУНКТ ─────', COLORS.BLU, 12);
    zoneLabel(49.72, 36.20, 'Система управління, зв\'язку та підлеглі частини', COLORS.WHT, 9);

    // =========================================================
    // BRIGADE AREA OF OPERATIONS (overview)
    // =========================================================

    // Forward edge / line of contact
    ln([
        [49.68, 36.25], [49.69, 36.40], [49.70, 36.58], [49.69, 36.75],
        [49.70, 36.92], [49.69, 37.08], [49.70, 37.25], [49.69, 37.42],
        [49.70, 37.58], [49.69, 37.72], [49.70, 37.85]
    ], COLORS.RED, 3, '8 4');
    zoneLabel(49.71, 36.25, '── ЛІНІЯ КОНТАКТУ ──', COLORS.RED, 9);

    // Enemy area marker
    ar([
        [49.72, 36.25], [49.75, 36.40], [49.76, 36.60], [49.75, 36.80],
        [49.76, 37.00], [49.75, 37.20], [49.76, 37.40], [49.75, 37.60],
        [49.76, 37.80], [49.73, 37.85], [49.72, 36.25]
    ], COLORS.RED, COLORS.RED, 0.06);
    zoneLabel(49.75, 37.80, 'ПРОТИВНИК', COLORS.RED, 8);

    // =========================================================
    // BRIGADE CP — MAIN COMMAND POST
    // =========================================================
    zoneLabel(49.54, 36.30, 'КОМАНДНИЙ ПУНКТ БРИГАДИ (КП)', COLORS.BLU, 10);

    // CP perimeter
    circ(49.56, 36.45, 1200, COLORS.BLU, 0.04);

    // Commander
    mk(49.56, 36.38, `<rect x="0" y="0" width="50" height="50" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="5"/><line x1="10" y1="5" x2="40" y2="5" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="2" x2="40" y2="2" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,7 17,20 33,20" fill="${COLORS.BLU}"/><line x1="25" y1="20" x2="25" y2="40" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="52" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КОМБРИГ</text>`, 'КОМБРИГ', 'Командир бригади\nполковник\nприймає рішення на бій\nкерує 4-5 батальйонами\nвідповідальність: 2500-4000 осіб', [100,100]);

    // Chief of staff / ops
    mk(49.54, 36.40, `<rect x="5" y="8" width="40" height="30" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="10" y1="12" x2="40" y2="12" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,14 19,24 31,24" fill="${COLORS.ORG}"/><line x1="25" y1="24" x2="25" y2="34" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">НШ</text>`, 'НАЧШТАБА', 'Начальник штабу\nорганізація роботи КП\nбойові накази + розпорядження\nкоординація всіх відділень', [80,80]);

    // Operations cell
    mk(49.58, 36.40, `<rect x="5" y="8" width="40" height="30" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="15" x2="40" y2="15" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="29" x2="40" y2="29" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ОПЕРАТИВНЕ</text>`, 'ОПЕРАТИВНЕ', 'Оперативне відділення\nпланування бойових дій\nкарта обстановки + Kropyva\nцілевказівки батальйонам', [80,80]);

    // Intelligence cell
    mk(49.54, 36.46, `<rect x="5" y="8" width="40" height="30" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="25" cy="18" r="8" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="19" y1="12" x2="31" y2="24" stroke="${COLORS.YEL}" stroke-width="1"/><line x1="31" y1="12" x2="19" y2="24" stroke="${COLORS.YEL}" stroke-width="1"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">РОЗВІДКА</text>`, 'РОЗВІДКА', 'Розвідувальне відділення\nаналіз противника + БПЛА\nкоординація розвідгруп\nсистема Delta', [80,80]);

    // Fires cell (artillery coordination)
    mk(49.58, 36.46, `<rect x="5" y="8" width="40" height="30" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="20" r="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="20" r="3" fill="${COLORS.RED}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ВОГОНЬ</text>`, 'ВОГНЯ', 'Відділення вогню\nкоординація артилерії\nGIS "Arta" — цілеваая система\nрозподіл вогневих завдань', [80,80]);

    // Signal / communications
    mk(49.56, 36.52, `<rect x="5" y="8" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><path d="M20,32 Q20,14 25,11 Q30,14 30,32" fill="none" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="15" cy="26" r="2" fill="${COLORS.CYN}"/><circle cx="35" cy="26" r="2" fill="${COLORS.CYN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ЗВ&#x27;ЯЗОК</text>`, 'ЗВЯЗОК', 'Відділення зв\'язку\nрадіомережі + Starlink\nASIST / Motorola / Harris\nрезервні канали + РЕБ захист', [80,80]);

    // CP internal lines
    ln([[49.56, 36.38], [49.54, 36.40]], COLORS.BLU, 1.5, '2 2');
    ln([[49.56, 36.38], [49.58, 36.40]], COLORS.BLU, 1.5, '2 2');
    ln([[49.56, 36.38], [49.54, 36.46]], COLORS.BLU, 1.5, '2 2');
    ln([[49.56, 36.38], [49.58, 36.46]], COLORS.BLU, 1.5, '2 2');
    ln([[49.56, 36.38], [49.56, 36.52]], COLORS.BLU, 1.5, '2 2');

    // =========================================================
    // COMMUNICATION ARCHITECTURE
    // =========================================================
    zoneLabel(49.48, 36.20, 'СИСТЕМА ЗВ&#x27;ЯЗКУ ТА УПРАВЛІННЯ', COLORS.CYN, 10);

    // Comm coverage circle
    circ(49.56, 36.45, 25000, COLORS.CYN, 0.02);

    // Link to higher HQ (division/corps)
    ln([[49.56, 36.38], [49.48, 36.30], [49.40, 36.25]], COLORS.PUR, 3, '6 3');
    zoneLabel(49.43, 36.25, '↑ ДО ВИЩОГО ШТАБУ (дивізія/корпус)', COLORS.PUR, 8);

    mk(49.40, 36.22, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="5" x2="40" y2="5" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="2" x2="40" y2="2" stroke="${COLORS.PUR}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.PUR}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="3"/><text x="25" y="48" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">КП ДИВ</text>`, 'КП-ДИВИЗІЯ', 'Командний пункт дивізії\nв найвищий штаб\nотримання наказів\nзвітність про виконання', [80,80]);

    // EW threat
    mk(49.64, 36.30, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><polygon points="25,8 15,20 35,20" fill="${COLORS.RED}"/><line x1="20" y1="20" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="2"/><line x1="30" y1="20" x2="25" y2="38" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">РЕБ</text>`, 'РЕБ-ЗАГРОЗА', 'Радіоелектронна боротьба противника\nглушіння радіоканалів\nпеленгація КП\nзахист: частотна перестройка + Starlink', [75,75]);

    // =========================================================
    // SUBORDINATE BATTALIONS (spread across the front)
    // =========================================================
    zoneLabel(49.62, 36.25, 'ПІДЛЕГЛІ БАТАЛЬЙОНИ', COLORS.GRN, 10);

    // 1st Mech Battalion (western sector)
    mk(49.64, 36.48, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,8 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="40" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">1-МЕХБАТ</text>`, '1-МЕХБАТ', '1-й механізований батальйон\n~450 бійців, 30x БМП\nзахідна ділянка відповідальності\nКП батальйону', [85,85]);

    // 2nd Mech Battalion (center sector)
    mk(49.64, 36.80, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,8 18,22 32,22" fill="${COLORS.GRN}"/><line x1="25" y1="22" x2="25" y2="40" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">2-МЕХБАТ</text>`, '2-МЕХБАТ', '2-й механізований батальйон\n~450 бійців, 30x БМП\nцентральна ділянка\nутримує ключові позиції', [85,85]);

    // 3rd Mech Battalion (eastern sector)
    mk(49.64, 37.12, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,8 18,22 32,22" fill="${COLORS.ORG}"/><line x1="25" y1="22" x2="25" y2="40" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">3-МЕХБАТ</text>`, '3-МЕХБАТ', '3-й механізований батальйон\n~450 бійців, 30x БМП\nсхідна ділянка\nрезерв + маневр', [85,85]);

    // Tank Battalion (in depth, ready to counterattack)
    mk(49.60, 37.55, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="3"/><line x1="10" y1="6" x2="40" y2="6" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="15" ry="8" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="50" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ТАНКБАТ</text>`, 'ТАНКБАТ', 'Танковий батальйон\n~30x Т-64БМ/Т-72АМТ\nу глибині — готовий до контратаки\nможе підсилювати будь-який напрямок', [85,85]);

    // Command lines from brigade HQ to battalions
    ln([[49.56, 36.45], [49.60, 36.47], [49.64, 36.48]], COLORS.BLU, 2, '4 3');
    ln([[49.56, 36.45], [49.60, 36.65], [49.64, 36.80]], COLORS.GRN, 2, '4 3');
    ln([[49.56, 36.45], [49.60, 36.90], [49.64, 37.12]], COLORS.ORG, 2, '4 3');
    ln([[49.56, 36.45], [49.58, 37.00], [49.60, 37.55]], COLORS.RED, 2, '4 3');

    // Battalion sectors of responsibility
    ar([
        [49.62, 36.30], [49.68, 36.32], [49.69, 36.45], [49.68, 36.58],
        [49.62, 36.60], [49.60, 36.50], [49.60, 36.40]
    ], COLORS.BLU, COLORS.BLU, 0.04);

    ar([
        [49.62, 36.62], [49.68, 36.65], [49.70, 36.75], [49.69, 36.88],
        [49.62, 36.90], [49.60, 36.80], [49.60, 36.70]
    ], COLORS.GRN, COLORS.GRN, 0.04);

    ar([
        [49.62, 36.92], [49.68, 36.95], [49.70, 37.08], [49.69, 37.22],
        [49.62, 37.24], [49.60, 37.14], [49.60, 37.04]
    ], COLORS.ORG, COLORS.ORG, 0.04);

    // =========================================================
    // ARTILLERY GROUP
    // =========================================================
    zoneLabel(49.52, 37.60, 'АРТИЛЕРІЙСЬКА ГРУПА БРИГАДИ', COLORS.PUR, 10);

    mk(49.54, 37.66, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">АРТ</text>`, 'АРТГРУПА', 'Артиллерійська група бригади\n2С3 + M777 + CAESAR\nкоординація через GIS "Arta"\nзапит вогню від батальйонів', [80,80]);

    mk(49.52, 37.70, `<circle cx="25" cy="25" r="15" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><circle cx="25" cy="25" r="4" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">РСЗВ</text>`, 'РСЗВ', 'Батарея РСЗВ\nHIMARS / BM-21 Град\nудари по цілях у глибині\nдальність 40-80 км', [70,70]);

    circ(49.54, 37.66, 18000, COLORS.PUR, 0.02);

    // Fire coordination line
    ln([[49.56, 36.46], [49.55, 37.00], [49.54, 37.66]], COLORS.RED, 1.5, '6 3');

    // =========================================================
    // AIR DEFENSE
    // =========================================================
    mk(49.52, 37.50, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="3"/><polygon points="25,10 15,30 35,30" fill="${COLORS.PUR}"/><line x1="25" y1="30" x2="25" y2="38" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">ППО</text>`, 'ППО-БРИГ', 'Зенітний ракетно-артилерійський взвод\nІгла / Grom / Starstreak\nзахист КП + районів зосередження\nпротидія БпАК та авіації', [75,75]);

    circ(49.52, 37.50, 6000, COLORS.PUR, 0.02);

    // =========================================================
    // BATTLE MANAGEMENT SYSTEMS
    // =========================================================
    zoneLabel(49.46, 36.55, 'СИСТЕМИ УПРАВЛІННЯ БОЄМ', COLORS.CYN, 10);

    mk(49.48, 36.60, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><rect x="10" y="10" width="30" height="20" fill="${COLORS.CYN}22" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="12" y1="15" x2="38" y2="15" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="12" y1="20" x2="38" y2="20" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="12" y1="25" x2="38" y2="25" stroke="${COLORS.CYN}" stroke-width="1"/><circle cx="16" cy="17" r="1.5" fill="${COLORS.RED}"/><circle cx="22" cy="22" r="1.5" fill="${COLORS.BLU}"/><circle cx="30" cy="18" r="1.5" fill="${COLORS.BLU}"/><circle cx="34" cy="24" r="1.5" fill="${COLORS.RED}"/><text x="25" y="45" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">DELTA</text>`, 'DELTA', 'Система боєвого управління Delta\nситуаційна обстановка в реальному часі\nсвої + чужі + цілі\nвсі підрозділи на одній карті', [85,85]);

    mk(49.48, 36.68, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><rect x="10" y="10" width="30" height="20" fill="${COLORS.BLU}22" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="12" x2="25" y2="28" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="12" y1="20" x2="38" y2="20" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">KROPYVA</text>`, 'KROPYVA', 'Система Kropyva (взривна)\nтактична карта рівня батальйон-рота\nпозиції + завдання + звіти\nмесенджер + координація', [85,85]);

    mk(49.48, 36.76, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="25" cy="20" r="10" fill="${COLORS.RED}22" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="20" r="4" fill="${COLORS.RED}"/><line x1="25" y1="10" x2="25" y2="30" stroke="${COLORS.RED}" stroke-width="1"/><text x="25" y="45" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">GIS ARTA</text>`, 'GIS-ARTA', 'GIS "Arta" — система вогню\nзапит артилерійського вогню\nкоординація вогневих засобів\n"від запиту до ураження за 1-2 хв"', [85,85]);

    // =========================================================
    // REAR AREA — LOGISTICS + MEDICAL
    // =========================================================
    zoneLabel(49.44, 37.70, 'ТИЛОВІ ПІДРОЗДІЛИ', COLORS.GRN, 10);

    mk(49.46, 37.74, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="16" x2="40" y2="16" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="32" x2="40" y2="32" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ТЛЗ-БРИГ</text>`, 'ТЛЗ', 'Тилове забезпечення бригади\nбойоприпаси + пальне + харчі\nпідвоз колонами 2-3 рази/добу\nремонт + евакуація техніки', [80,80]);

    mk(49.46, 37.82, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.PNK}" stroke-width="4"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.PNK}" stroke-width="4"/><text x="25" y="44" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДР-БРИГ</text>`, 'МЕДРОТА', 'Медична рота бригади\nхірургія + реанімація + триаж\nпольовий госпіталь\nевакуація вертольотами', [80,80]);

    mk(49.46, 37.90, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.BRN}44" stroke="${COLORS.BRN}" stroke-width="3"/><ellipse cx="25" cy="22" rx="14" ry="6" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="11" y1="22" x2="39" y2="22" stroke="${COLORS.BRN}" stroke-width="3"/><circle cx="15" cy="33" r="3" fill="${COLORS.BRN}"/><circle cx="25" cy="33" r="3" fill="${COLORS.BRN}"/><circle cx="35" cy="33" r="3" fill="${COLORS.BRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">РЕМРОТ</text>`, 'РЕМРОТ', 'Ремонтно-відновлювальна рота\nсередній + капітальний ремонт\nТ-64/Т-72 + БМП + БТР\nвідновлення пошкодженої техніки', [80,80]);

    // =========================================================
    // RECONNAISSANCE ASSETS
    // =========================================================
    zoneLabel(49.54, 36.60, 'РОЗВІДПІДРОЗДІЛИ', COLORS.YEL, 9);

    mk(49.56, 36.62, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.YEL}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.YEL}"/><circle cx="32" cy="30" r="2" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БПЛА</text>`, 'БПЛА-РОЗВ', 'Розвідувальний БпАК\nMavic + Leleka + Shark\nаеророзвідка переднього краю\nкоригування артилерії', [80,80]);

    circ(49.56, 36.62, 15000, COLORS.YEL, 0.02);

    mk(49.58, 36.60, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="25" y1="5" x2="25" y2="45" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">РРГ</text>`, 'РОЗВГРУПА', 'Розвідувальна група\nглибока розвідка в тилу противника\nспостереження + радіорозвідка\nрадіус: 15-30 км', [80,80]);

    // =========================================================
    // ENGINEER COMPANY
    // =========================================================
    mk(49.50, 37.58, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.BRN}44" stroke="${COLORS.BRN}" stroke-width="3"/><line x1="5" y1="5" x2="25" y2="45" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="45" y1="5" x2="25" y2="45" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">ІНЖРОТА</text>`, 'ІНЖЕНЕРИ', 'Інженерна рота\nмінні поля + розмінування\nукріплення + переправи\nобладнання маршрутів', [80,80]);

    // =========================================================
    // ANIMATIONS — information flow
    // =========================================================

    // Situation report from battalion to brigade
    const sitrep = mkAnim(49.64, 36.48, `<rect x="8" y="12" width="34" height="20" fill="${COLORS.CYN}55" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="26" text-anchor="middle" fill="${COLORS.WHT}" font-size="8" font-weight="bold">SITREP</text>`, 'SITREP→', '', [65,65]);
    animations.push({
        marker: sitrep,
        path: [
            [49.64, 36.48], [49.62, 36.47], [49.60, 36.46], [49.58, 36.46],
            [49.56, 36.45]
        ],
        step: 0,
        speed: 0.006,
    });

    // Fire mission request
    const fireReq = mkAnim(49.64, 36.80, `<circle cx="25" cy="25" r="12" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">FIRE</text>`, 'FIRE→', '', [55,55]);
    animations.push({
        marker: fireReq,
        path: [
            [49.64, 36.80], [49.62, 36.82], [49.60, 36.88], [49.58, 37.00],
            [49.56, 37.10], [49.55, 37.30], [49.54, 37.66]
        ],
        step: 0,
        speed: 0.004,
    });

    // Drone reconnaissance feed
    const droneFeed = mkAnim(49.56, 36.62, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.YEL}88" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.YEL}"/>`, 'DRONE→', '', [55,55]);
    animations.push({
        marker: droneFeed,
        path: [
            [49.56, 36.62], [49.58, 36.60], [49.60, 36.58], [49.62, 36.56],
            [49.64, 36.55], [49.66, 36.54], [49.68, 36.53]
        ],
        step: 0,
        speed: 0.008,
    });

    // Orders from brigade to battalions
    const orders = mkAnim(49.56, 36.45, `<rect x="8" y="12" width="34" height="20" fill="${COLORS.BLU}55" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="26" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ORDER</text>`, 'ORDER→', '', [65,65]);
    animations.push({
        marker: orders,
        path: [
            [49.56, 36.45], [49.58, 36.46], [49.60, 36.47], [49.62, 36.48],
            [49.64, 36.48]
        ],
        step: 0,
        speed: 0.005,
    });

    startAnimation(animations, '_militaryHQAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #40c4ff;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:290px;">
            <div style="color:#40c4ff;font-weight:700;font-size:11px;margin-bottom:4px;">ШТАБ БРИГАДИ — КП</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#40c4ff;font-weight:700;">ФУНКЦІОНАЛЬНІ ВІДДІЛЕННЯ:</div>
                <div>&#8226; <span style="color:#40c4ff;">Командир + НШ</span> — прийняття рішень</div>
                <div>&#8226; <span style="color:#40c4ff;">Оперативне</span> — планування бою</div>
                <div>&#8226; <span style="color:#ffeb3b;">Розвідка</span> — аналіз противника</div>
                <div>&#8226; <span style="color:#ef5350;">Вогонь</span> — координація артилерії</div>
                <div>&#8226; <span style="color:#00e5ff;">Зв&#x27;язок</span> — радіомережі + Starlink</div>

                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">СИСТЕМИ УПРАВЛІННЯ:</div>
                <div>&#8226; <span style="color:#00e5ff;">Delta</span> — загальна обстановка</div>
                <div>&#8226; <span style="color:#40c4ff;">Kropyva</span> — тактичний рівень</div>
                <div>&#8226; <span style="color:#ef5350;">GIS Arta</span> — запит вогню</div>

                <div style="color:#4caf50;font-weight:700;margin-top:4px;">ПІДЛЕГЛІ СИЛИ:</div>
                <div>&#8226; 3x мехбат + 1x танковий батальйон</div>
                <div>&#8226; Артгрупа (гармати + РСЗВ)</div>
                <div>&#8226; ППО + інженери + БПЛА</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                <span style="color:#00e5ff;">- - -</span> зв\'язок &nbsp;
                <span style="color:#ef5350;">- - -</span> запит вогню &nbsp;
                <span style="color:#ffeb3b;">- - -</span> розвіддані<br>
                Фронт бригади: 10-20 км | Глибина: 15-25 км | 2500-4000 осіб
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.36, 36.20], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to show the full brigade AO
    map.flyTo([49.56, 36.95], 11, { duration: 1.5 });
}
