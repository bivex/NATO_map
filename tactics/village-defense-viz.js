// ===== SETTLEMENT DEFENSE VISUALIZATION =====
// Оборона населеного пункту — реальний сценарій (типове село на Донеччині)
// Підготовлена оборона: опорні пункти в будівлях, міни, ПТРК, дрони, артилерія

function buildVillageDefenseViz() {
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    clearMap();
    const animations = [];
    window._villageDefenseAnimations = animations;

    // =========================================================
    // HEADER
    // =========================================================
    zoneLabel(49.72, 36.30, '───── ОБОРОНА НАСЕЛЕНОГО ПУНКТУ ─────', COLORS.BLU, 12);
    zoneLabel(49.69, 36.30, 'С. НОВОСЕЛІВКА — ПІДГОТОВЛЕНА КРУГОВА ОБОРОНА', COLORS.WHT, 9);

    // =========================================================
    // SETTLEMENT OUTLINE
    // =========================================================
    ar([
        [49.62, 36.45], [49.63, 36.50], [49.64, 36.58], [49.65, 36.65],
        [49.66, 36.72], [49.67, 36.78], [49.68, 36.85], [49.69, 36.92],
        [49.68, 36.98], [49.67, 37.05], [49.66, 37.10], [49.65, 37.15],
        [49.64, 37.20], [49.63, 37.25], [49.62, 37.28],
        [49.60, 37.26], [49.59, 37.22], [49.58, 37.15], [49.57, 37.08],
        [49.56, 37.00], [49.55, 36.92], [49.56, 36.85], [49.57, 36.78],
        [49.58, 36.70], [49.59, 36.62], [49.60, 36.55], [49.61, 36.48]
    ], COLORS.BLU, COLORS.BLU, 0.06);
    zoneLabel(49.625, 36.42, 'НП — НОВОСЕЛІВКА', COLORS.BLU, 9);

    // Streets (main axes)
    ln([[49.58, 36.55], [49.60, 36.62], [49.62, 36.68], [49.63, 36.75]], COLORS.WHT, 1.5);
    zoneLabel(49.595, 36.56, 'ВУЛ. ШКІЛЬНА', COLORS.WHT, 7);

    ln([[49.60, 36.50], [49.62, 36.55], [49.64, 36.62], [49.65, 36.70]], COLORS.WHT, 1.5);
    zoneLabel(49.615, 36.50, 'ВУЛ. ЦЕНТРАЛЬНА', COLORS.WHT, 7);

    ln([[49.56, 36.75], [49.58, 36.80], [49.60, 36.85], [49.62, 36.90]], COLORS.WHT, 1.5);
    zoneLabel(49.575, 36.74, 'ВУЛ. ЗАХІДНА', COLORS.WHT, 7);

    ln([[49.56, 36.85], [49.58, 36.88], [49.60, 36.90], [49.62, 36.92]], COLORS.WHT, 1.5);
    zoneLabel(49.575, 36.84, 'ВУЛ. САДОВА', COLORS.WHT, 7);

    // =========================================================
    // ENEMY APPROACH — ATTACKING FROM THE EAST
    // =========================================================
    zoneLabel(49.72, 36.70, 'ПРОТИВНИК — НАСТУП ЗІ СХОДУ', COLORS.RED, 10);

    // Enemy assembly area
    ar([
        [49.70, 36.65], [49.72, 36.72], [49.73, 36.82], [49.72, 36.92],
        [49.73, 37.02], [49.72, 37.12], [49.73, 37.22],
        [49.71, 37.22], [49.70, 37.12], [49.71, 37.02], [49.70, 36.92],
        [49.71, 36.82], [49.70, 36.72]
    ], COLORS.RED, COLORS.RED, 0.06);

    // Enemy assault groups
    mk(49.715, 36.75, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСР</text>`, 'ПРОТИВ-ГР1', '1-а штурмова група\n~30-40 бійців + БМП\nнаступ по вул. Центральній\n"Мотивований" підрозділ', [80,80]);

    mk(49.715, 36.90, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСР</text>`, 'ПРОТИВ-ГР2', '2-а штурмова група\n~30-40 бійців\nнаступ через південну околицю\nза підтримки БМП', [80,80]);

    mk(49.715, 37.10, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">МСР</text>`, 'ПРОТИВ-ГР3', '3-я штурмова група (резерв)\nобхід з півдня\nпотенційна загроза оточення', [80,80]);

    // Enemy armor
    mk(49.725, 36.82, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БМП-2В</text>`, 'БМП-ШТУРМ', 'БМП-2 противника\nвогнева підтримка штурму\nза десантом', [80,80]);

    mk(49.735, 37.00, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Т-72Б3</text>`, 'ТАНК-ШТУРМ', 'Т-72Б3 противника\nпряма вогнева підтримка\nобстріл будівель з гармати', [80,80]);

    // Enemy assault directions
    ln([[49.715, 36.75], [49.68, 36.72], [49.65, 36.70]], COLORS.RED, 2.5);
    ln([[49.715, 36.90], [49.68, 36.88], [49.65, 36.85]], COLORS.RED, 2.5);
    ln([[49.715, 37.10], [49.68, 37.05], [49.63, 37.00]], COLORS.RED, 2, '5 3');

    // =========================================================
    // FORWARD DEFENSE LINE (500m-1km from village edge)
    // =========================================================
    zoneLabel(49.66, 36.35, 'ПЕРЕДОВІ ПОЗИЦІЇ (500м від НП)', COLORS.GRN, 9);

    // Forward positions — fighting retreat
    mk(49.65, 36.60, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.GRN}"/><circle cx="30" cy="32" r="2" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ОП-ПН</text>`, 'ОП-ПІВНІЧ', 'Опорний пункт (північ)\n6 бійців + ПКМ + РПГ\nспостереження + затримка\nпри відступі — мінують підхід', [75,75]);

    mk(49.67, 36.80, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.GRN}"/><circle cx="30" cy="32" r="2" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ОП-СХ</text>`, 'ОП-СХІД', 'Опорний пункт (схід)\n8 бійців + ПКМ + РПГ\nприкриває головний підхід\nбойове чергування', [75,75]);

    mk(49.63, 37.05, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="26" x2="40" y2="26" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="32" r="2" fill="${COLORS.GRN}"/><circle cx="30" cy="32" r="2" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ОП-ПД</text>`, 'ОП-ПІВДЕНЬ', 'Опорний пункт (південь)\n6 бійців + гранатомет\nприкриває обхідний шлях\nміни на дорозі', [75,75]);

    // Minefields on approaches
    ar([
        [49.66, 36.68], [49.68, 36.72], [49.69, 36.78], [49.68, 36.84],
        [49.67, 36.80], [49.66, 36.76]
    ], COLORS.BRN, COLORS.BRN, 0.08);
    zoneLabel(49.675, 36.72, 'МІННЕ ПОЛЕ', COLORS.BRN, 7);

    ar([
        [49.64, 36.98], [49.66, 37.02], [49.67, 37.08], [49.66, 37.12],
        [49.64, 37.08]
    ], COLORS.BRN, COLORS.BRN, 0.08);
    zoneLabel(49.655, 37.02, 'МІННЕ ПОЛЕ', COLORS.BRN, 7);

    // =========================================================
    // BUILDING STRONGPOINTS INSIDE THE VILLAGE
    // =========================================================
    zoneLabel(49.605, 36.48, 'ОПОРНІ ПУНКТИ В БУДІВЛЯХ', COLORS.YEL, 10);

    // School — main strongpoint (reinforced concrete)
    mk(49.61, 36.60, `<rect x="3" y="3" width="44" height="44" fill="${COLORS.YEL}55" stroke="${COLORS.YEL}" stroke-width="4"/><line x1="8" y1="15" x2="42" y2="15" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="8" y1="25" x2="42" y2="25" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="8" y1="35" x2="42" y2="35" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="15" cy="10" r="2" fill="${COLORS.YEL}"/><circle cx="35" cy="10" r="2" fill="${COLORS.YEL}"/><text x="25" y="52" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ШКОЛА</text>`, 'ШКОЛА-ОП', 'Школа — головний опорний пункт\n2-поверхова, залізобетон\nпідвал → укриття від артилерії\nвікна → вогневі позиції\n~12 бійців + 2 ПКМ', [90,90]);

    // House block — fortified
    mk(49.62, 36.68, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="28" x2="40" y2="28" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="15" cy="12" r="2" fill="${COLORS.YEL}"/><circle cx="35" cy="12" r="2" fill="${COLORS.YEL}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БЛОК-1</text>`, 'БУД-ОП1', 'Блок будинків — ОП №1\nцегляні стіни 50см\nвікна закриті мішками з піском\nвогонь по вулиці та підходах\n~8 бійців', [80,80]);

    mk(49.60, 36.72, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="10" y1="18" x2="40" y2="18" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="28" x2="40" y2="28" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="15" cy="12" r="2" fill="${COLORS.YEL}"/><circle cx="35" cy="12" r="2" fill="${COLORS.YEL}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БЛОК-2</text>`, 'БУД-ОП2', 'Блок будинків — ОП №2\nприкриває західну частину\nперекритий сектор вогню з ОП1\n~8 бійців', [80,80]);

    // Church — observation + sniper
    mk(49.58, 36.65, `<rect x="10" y="5" width="30" height="35" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,2 15,12 35,12" fill="${COLORS.CYN}"/><line x1="25" y1="12" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="45" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ЦЕРКВА</text>`, 'ЦЕРКВА-ОП', 'Дзвіниця — спостережний пункт\nогляд 360° + коригування\nснайпер + спостерігач\nрадіостанція + бінокль', [80,80]);

    // Admin building — CP
    mk(49.59, 36.78, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="8" x2="40" y2="8" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,10 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="46" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КП</text>`, 'КП-ОБОРОНИ', 'Командний пункт оборони НП\nкомандир роти + радіо\nкарта + Kropyva + Delta\nпідвал — захист від артилерії', [80,80]);

    // =========================================================
    // STREET BARRICADES AND KILLING ZONES
    // =========================================================
    zoneLabel(49.635, 36.68, 'БАР&#x27;ЄРИ ТА ЗОНИ УРАЖЕННЯ', COLORS.ORG, 9);

    // Barricades on eastern streets
    mk(49.64, 36.72, `<rect x="5" y="18" width="40" height="14" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="10" y1="28" x2="40" y2="28" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БАР</text>`, 'БАР&#x27;ЄР-1', 'Бар&#x27;єр на вул. Центральній\nбетонні блоки + мішки з піском\nзатор для броні противника\nмінновано підходи', [70,70]);

    mk(49.63, 36.80, `<rect x="5" y="18" width="40" height="14" fill="${COLORS.ORG}66" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="10" y1="22" x2="40" y2="22" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="10" y1="28" x2="40" y2="28" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">БАР</text>`, 'БАР&#x27;ЄР-2', 'Бар&#x27;єр на південному підході\nперекрита дорога\nзона ураження для ПТРК', [70,70]);

    // Killing zones (streets covered by fire)
    ar([
        [49.63, 36.65], [49.64, 36.68], [49.65, 36.72], [49.66, 36.76],
        [49.65, 36.78], [49.64, 36.75], [49.63, 36.70]
    ], COLORS.RED, COLORS.RED, 0.06);
    zoneLabel(49.645, 36.68, 'ЗОНА УРАЖЕННЯ', COLORS.RED, 7);

    ar([
        [49.62, 36.82], [49.63, 36.85], [49.64, 36.90], [49.63, 36.92],
        [49.62, 36.88]
    ], COLORS.RED, COLORS.RED, 0.06);
    zoneLabel(49.635, 36.82, 'ЗОНА УРАЖЕННЯ', COLORS.RED, 7);

    // =========================================================
    // ATGM AMBUSH POSITIONS (on outskirts)
    // =========================================================
    zoneLabel(49.575, 36.55, 'ПТРК — ЗАСАДКИ НА ОКОЛИЦІ', COLORS.RED, 9);

    mk(49.58, 36.60, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="18" x2="35" y2="18" stroke="${COLORS.RED}" stroke-width="3"/><line x1="35" y1="18" x2="30" y2="13" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="15" cy="28" r="2" fill="${COLORS.RED}"/><circle cx="22" cy="28" r="2" fill="${COLORS.RED}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Stugna</text>`, 'ПТРК-ПН', 'Stugna-P (північ)\nвогонь по броні на підході\nдальність до 5000м\nукритий у підвалі будинку', [75,75]);

    mk(49.63, 36.90, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="18" x2="35" y2="18" stroke="${COLORS.RED}" stroke-width="3"/><line x1="35" y1="18" x2="30" y2="13" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="15" cy="28" r="2" fill="${COLORS.RED}"/><circle cx="22" cy="28" r="2" fill="${COLORS.RED}"/><text x="25" y="36" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Javelin</text>`, 'ПТРК-ПД', 'Javelin (південь)\nвогонь по броні що обходитить\nатака зверху — важко захиститись\nдальність 2500м', [75,75]);

    // ATGM sectors
    ln([[49.58, 36.60], [49.65, 36.65]], COLORS.RED, 1.5, '4 3');
    ln([[49.58, 36.60], [49.66, 36.72]], COLORS.RED, 1.5, '4 3');
    ln([[49.63, 36.90], [49.68, 36.88]], COLORS.RED, 1.5, '4 3');
    ln([[49.63, 36.90], [49.69, 36.95]], COLORS.RED, 1.5, '4 3');

    // =========================================================
    // TANK IN HULL-DOWN POSITION
    // =========================================================
    mk(49.57, 36.82, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">Т-64БМ</text>`, 'ТАНК-ОП', 'Т-64БМ у окопі (hull-down)\nвидима тільки башта\nвогонь по броні на підходах\n3-5 пострілів → зміна позиції', [80,80]);

    // Tank fire sector
    ln([[49.57, 36.82], [49.64, 36.75]], COLORS.BLU, 2, '5 3');
    ln([[49.57, 36.82], [49.64, 36.88]], COLORS.BLU, 2, '5 3');

    // =========================================================
    // DRONE TEAM
    // =========================================================
    mk(49.58, 36.70, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="34" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="30" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="30" r="2" fill="${COLORS.CYN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">БПЛА</text>`, 'БПЛА-ГРУПА', 'Група БпАК\nMavic 3T — розвідка\nFPV-дрони — ураження броні\nкоригування артилерії\nрадіус: 5-10 км', [80,80]);

    circ(49.58, 36.70, 8000, COLORS.CYN, 0.02);

    // =========================================================
    // MORTAR POSITION (in the village, behind buildings)
    // =========================================================
    mk(49.58, 36.90, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">82</text>`, 'МІНОМЕТ-82', '82мм міномети (2 шт)\nу дворі між будівлями\nвогонь по скупченням штурмовиків\nдим + осколкові міни', [75,75]);

    // =========================================================
    // ARTILLERY SUPPORT (from rear, 5-8 km)
    // =========================================================
    zoneLabel(49.46, 36.80, 'АРТИЛЕРІЙСЬКА ПІДТРИМКА (тил)', COLORS.PUR, 10);

    mk(49.48, 36.85, `<circle cx="25" cy="25" r="18" fill="${COLORS.PUR}44" stroke="${COLORS.PUR}" stroke-width="3"/><circle cx="25" cy="25" r="5" fill="${COLORS.PUR}"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">155</text>`, 'М777', 'M777A2 — 155мм гаубиця\n3-4 гармати в батареї\nдальність 40км\nExcalibur — точність 5м\nвогонь за запитом через GIS Arta', [80,80]);

    circ(49.48, 36.85, 15000, COLORS.PUR, 0.02);

    ln([[49.48, 36.85], [49.64, 36.75]], COLORS.PUR, 1.5, '8 4');
    ln([[49.48, 36.85], [49.66, 36.85]], COLORS.PUR, 1.5, '8 4');
    zoneLabel(49.55, 36.78, 'АРТ ВОГІНЬ', COLORS.PUR, 7);

    // =========================================================
    // MEDICAL & EVACUATION
    // =========================================================
    mk(49.56, 36.88, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДП</text>`, 'МЕДПУНКТ', 'Медичний пункт\nу підвалі будинку\nстабілізація + евакуація\n"Золотий година" — 60 хвилин', [70,70]);

    // Evacuation route to rear
    ln([[49.56, 36.88], [49.52, 36.92], [49.48, 36.96]], COLORS.PNK, 2.5, '4 3');
    zoneLabel(49.50, 36.92, 'МЕДЕВАК → ТИЛ', COLORS.PNK, 7);

    // =========================================================
    // SUPPLY ROUTE FROM REAR
    // =========================================================
    mk(49.48, 37.00, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="10" y1="16" x2="40" y2="16" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="32" x2="40" y2="32" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">СКЛАД</text>`, 'СКЛАД-БОК', 'Склад боєкомплекту\nснаряди + патрони + міни\nпідвіз вночі (без світла)\nнебезпечно — під обстрілом', [80,80]);

    ln([[49.48, 37.00], [49.52, 36.95], [49.56, 36.90]], COLORS.GRN, 2.5);
    zoneLabel(49.50, 36.96, 'ПІДВІЗ БК (ночью)', COLORS.GRN, 7);

    // =========================================================
    // ANIMATIONS
    // =========================================================

    // 1. Enemy assault group advancing
    const enemyAssault = mkAnim(49.715, 36.75, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.RED}55" stroke="${COLORS.RED}" stroke-width="3"/><line x1="5" y1="5" x2="45" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><line x1="45" y1="5" x2="5" y2="45" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="27" text-anchor="middle" fill="${COLORS.WHT}" font-size="7" font-weight="bold">ШТ</text>`, 'ШТУРМ→', '', [70,70]);
    animations.push({
        marker: enemyAssault,
        path: [
            [49.715, 36.75], [49.70, 36.74], [49.68, 36.73], [49.66, 36.72],
            [49.64, 36.70], [49.63, 36.68]
        ],
        step: 0,
        speed: 0.003,
    });

    // 2. FPV drone from village toward enemy armor
    const fpvStrike = mkAnim(49.58, 36.70, `<polygon points="25,8 18,22 22,22 22,36 28,36 28,22 32,22" fill="${COLORS.CYN}88" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="6" r="3" fill="${COLORS.CYN}"/>`, 'FPV→', '', [55,55]);
    animations.push({
        marker: fpvStrike,
        path: [
            [49.58, 36.70], [49.60, 36.72], [49.62, 36.75], [49.64, 36.78],
            [49.66, 36.80], [49.68, 36.82], [49.70, 36.84], [49.72, 36.85],
            [49.735, 37.00]
        ],
        step: 0,
        speed: 0.007,
    });

    // 3. Artillery shell landing on enemy approach
    const artyShell = mkAnim(49.48, 36.85, `<circle cx="25" cy="25" r="12" fill="${COLORS.PUR}66" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.WHT}" font-size="10" font-weight="bold">*</text>`, 'СНАР→', '', [50,50]);
    animations.push({
        marker: artyShell,
        path: [
            [49.48, 36.85], [49.52, 36.84], [49.56, 36.83], [49.60, 36.82],
            [49.64, 36.81], [49.68, 36.80], [49.70, 36.80]
        ],
        step: 0,
        speed: 0.005,
    });

    // 4. ATGM missile toward enemy tank
    const atgmMissile = mkAnim(49.58, 36.60, `<line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="40" cy="25" r="4" fill="${COLORS.RED}"/>`, 'ПТРК→', '', [55,55]);
    animations.push({
        marker: atgmMissile,
        path: [
            [49.58, 36.60], [49.60, 36.62], [49.62, 36.65], [49.64, 36.68],
            [49.66, 36.71], [49.68, 36.74], [49.70, 36.77],
            [49.725, 36.82]
        ],
        step: 0,
        speed: 0.008,
    });

    startAnimation(animations, '_villageDefenseAnimFrame');

    // =========================================================
    // INFO PANEL
    // =========================================================
    const infoPanel = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4caf50;border-radius:8px;padding:10px 14px;color:#e0e0e0;font-size:10px;line-height:1.5;min-width:260px;max-width:290px;">
            <div style="color:#4caf50;font-weight:700;font-size:11px;margin-bottom:4px;">ОБОРОНА НП — НОВОСЕЛІВКА</div>
            <div style="border-top:1px solid #0f3460;padding-top:4px;">
                <div style="color:#ffeb3b;font-weight:700;">ОПОРНІ ПУНКТИ В БУДІВЛЯХ:</div>
                <div>&#8226; Школа — головний ОП (залізобетон)</div>
                <div>&#8226; Блоки будинків — вогневі позиції</div>
                <div>&#8226; Церква — спостережний пункт</div>
                <div>&#8226; Бар&#x27;єри на вулицях — зони ураження</div>

                <div style="color:#ef5350;font-weight:700;margin-top:4px;">ПРОТИТАНКОВА ОБОРОНА:</div>
                <div>&#8226; Stugna-P + Javelin — засідки на околиці</div>
                <div>&#8226; Т-64БМ у окопі (hull-down)</div>
                <div>&#8226; Мінні поля на головних підходах</div>

                <div style="color:#00e5ff;font-weight:700;margin-top:4px;">ПІДТРИМКА:</div>
                <div>&#8226; БПЛА — розвідка + FPV-удари</div>
                <div>&#8226; 82мм міномети — вогонь по штурмовикам</div>
                <div>&#8226; M777 — артилерія з тилу (5-8 км)</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:4px;padding-top:4px;color:#888;font-size:9px;">
                Гарнізон: 60-80 бійців | Тривалість оборони: 2-7 днів<br>
                Ключ: кожна будівля — фортеця, кожна вулиця — зона ураження
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([49.44, 36.40], { icon: infoPanel, interactive: false }).addTo(map));

    // Fly to show the village defense
    map.flyTo([49.60, 36.75], 13, { duration: 1.5 });
}
