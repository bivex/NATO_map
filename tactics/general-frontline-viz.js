// ===== GENERAL FRONTLINE VISUALIZATION =====
// Общая линия фронта (упрощённо) - strategic overview of the entire front

function buildGeneralFrontlineViz() {
    // Use common utilities
    const { COLORS, mk, ln, ar, circ, zoneLabel, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    zoneLabel(51.0, 35.0, '───── ОБЩАЯ ЛИНИЯ ФРОНТА ─────', COLORS.BLU, 14);
    zoneLabel(50.8, 35.0, 'СТРАТЕГИЧЕСКИЙ ОБЗОР — СЕВЕР ↔ ЮГ', COLORS.BLU, 10);

    // =====================================================
    // NORTHERN BORDER WITH RUSSIA
    // =====================================================

    zoneLabel(52.2, 34.5, 'СЕВЕР — ГРАНИЦА РФ', COLORS.RED, 11);

    // Russian border line
    ln([
        [52.0, 32.0], [52.0, 34.0], [52.0, 36.0], [52.0, 38.0],
        [52.0, 40.0], [52.0, 42.0]
    ], COLORS.RED, 4);

    zoneLabel(52.1, 35.0, 'РОССИЙСКАЯ ФЕДЕРАЦИЯ', COLORS.RED, 9);

    // Sumy oblast sector - Sumy coordinates: 50.9077° N, 34.7981° E
    zoneLabel(50.9, 34.8, 'СУМСКАЯ ОБЛ.', COLORS.YEL, 10);
    mk(50.91, 34.80, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.YEL}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="7" font-weight="bold">СУМЫ</text>`, 'СУМЫ', 'Суми\nобласний центр\nактивні бойові дії', [80,80]);

    // =====================================================
    // KHARKIV OBLAST SECTOR
    // =====================================================

    zoneLabel(49.8, 36.5, 'ХАРЬКОВСКАЯ ОБЛ.', COLORS.ORG, 10);
    // Kharkiv coordinates: 49.9935° N, 36.2304° E
    mk(49.99, 36.23, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.ORG}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">ХАРЬКОВ</text>`, 'ХАРЬКОВ', 'Харків\nвелике місто + аеропорт\nпід контролем України', [80,80]);

    // =====================================================
    // KUPYANSK-LYMAN SECTOR
    // =====================================================

    zoneLabel(49.5, 37.5, 'КУПЯНСК — ЛИМАН', COLORS.PNK, 10);
    // Kupiansk coordinates: 49.7077° N, 37.6167° E
    mk(49.71, 37.62, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.PNK}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="7" font-weight="bold">КУПЯНСК</text>`, 'КУПЯНСК', 'Куп\'янськ\nважливий залізничний вузол\nпід контролем України', [80,80]);

    // Lyman coordinates: 48.9881° N, 37.8028° E
    mk(48.99, 37.80, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.PNK}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="7" font-weight="bold">ЛИМАН</text>`, 'ЛИМАН', 'Лиман\nстратегічне місто\nпід контролем України', [80,80]);

    // =====================================================
    // DONBASS SECTOR - MOST DIFFICULT
    // =====================================================

    zoneLabel(48.2, 38.0, 'ДОНБАСС — САМЫЙ СЛОЖНЫЙ УЧАСТОК', COLORS.RED, 11);
    zoneLabel(48.0, 38.0, 'ПОСТОЯННЫЕ БОИ, ВЫСОКИЕ ПОТЕРИ', COLORS.RED, 9);

    // Sviatohirsk coordinates: 49.0381° N, 37.5781° E
    mk(49.04, 37.58, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="18" cy="32" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="32" r="4" fill="${COLORS.RED}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">СВЯТОГОРСК</text>`, 'СВЯТОГОРСК', 'Святогірськ\nмонастир + стратегічна висота\nпід контролем України', [90,90]);

    // Kramatorsk coordinates: 48.7392° N, 37.5836° E
    mk(48.74, 37.58, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="18" cy="32" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="32" r="4" fill="${COLORS.RED}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КРАМАТОРСК</text>`, 'КРАМАТОРСК', 'Краматорськ\nпромисловий центр\nпід контролем України', [90,90]);

    // =====================================================
    // POKROVSK-AVDIIVKA-KOSTIANTYNIVKA SECTOR
    // =====================================================

    zoneLabel(48.0, 37.0, 'ПОКРОВСК — АВДЕЕВКА — КОНСТАНТИНОВКА', COLORS.PNK, 10);

    // Pokrovsk coordinates: 48.2828° N, 37.1758° E
    mk(48.28, 37.18, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ПОКРОВСК</text>`, 'ПОКРОВСК', 'Покровськ\nтранспортний вузол\nпід контролем України', [90,90]);

    // Avdiivka coordinates: 48.1372° N, 37.7428° E
    mk(48.14, 37.74, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">АВДЕЕВКА</text>`, 'АВДЕЕВКА', 'Авдіївка\nпромзона + форт\nпід контролем України', [90,90]);

    // Kostiantynivka coordinates: 48.5277° N, 37.7069° E
    mk(48.53, 37.71, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">КОНСТАНТИНОВКА</text>`, 'КОНСТАНТИНОВКА', 'Костянтинівка\nпромислове місто\nпід контролем України', [90,90]);

    // =====================================================
    // ZAPORIZHZHIA SECTOR
    // =====================================================

    zoneLabel(47.5, 35.5, 'ЗАПОРОЖЬЕ — ОРЕХОВ, ГУЛЯЙПОЛЕ', COLORS.GRN, 10);

    // Zaporizhzhia coordinates: 47.8388° N, 35.1396° E
    mk(47.84, 35.14, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.GRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ЗАПОРОЖЬЕ</text>`, 'ЗАПОРОЖЬЕ', 'Запоріжжя\nвелике місто + ЗАЕС\nпід контролем України', [90,90]);

    // Orikhiv coordinates: 47.5673° N, 35.7851° E
    mk(47.57, 35.79, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">ОРЕХОВ</text>`, 'ОРЕХОВ', 'Оріхів\nважливий населений пункт\nпід контролем України', [80,80]);

    // Huliaipole coordinates: 47.6639° N, 36.2563° E
    mk(47.66, 36.26, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">ГУЛЯЙПОЛЕ</text>`, 'ГУЛЯЙПОЛЕ', 'Гуляйполе\nстратегічне місто\nпід контролем України', [80,80]);

    // =====================================================
    // KHERSON SECTOR - DNIPRO RIVER
    // =====================================================

    zoneLabel(46.8, 33.0, 'ХЕРСОН — РЕКА ДНЕПР', COLORS.CYN, 10);

    // Dnipro River - more accurate representation
    ln([
        [50.0, 34.0], [49.5, 34.5], [49.0, 35.0], [48.5, 35.5],
        [48.0, 36.0], [47.5, 36.5], [47.0, 37.0], [46.5, 37.5],
        [46.0, 38.0], [45.5, 38.5]
    ], COLORS.CYN, 5);

    zoneLabel(47.0, 35.0, 'РЕКА ДНЕПР — ЕСТЕСТВЕННАЯ ПРЕПЯТСТВИЕ', COLORS.CYN, 8);

    // Kherson coordinates: 46.6354° N, 32.6169° E
    mk(46.64, 32.62, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.CYN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.CYN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.CYN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.CYN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.CYN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ХЕРСОН</text>`, 'ХЕРСОН', 'Херсон\nобласний центр\nпід контролем РФ', [90,90]);

    // =====================================================
    // THE FRONTLINE ARC - ACCURATE COORDINATES
    // =====================================================

    zoneLabel(47.0, 36.5, 'ЛИНИЯ ФРОНТА — РЕАЛЬНАЯ СИТУАЦИЯ 2024', COLORS.WHT, 11);

    // Main frontline arc from north to south - accurate to current situation
    ln([
        // Northern sector - near Russian border
        [51.0, 34.0], [50.8, 34.5], [50.6, 35.0],
        // Kharkiv oblast frontline
        [50.2, 36.0], [49.8, 36.5], [49.5, 37.0],
        // Kupiansk area
        [49.4, 37.3], [49.2, 37.5], [49.0, 37.7],
        // Lyman-Sviatohirsk area
        [48.8, 37.8], [48.6, 37.9], [48.4, 38.0],
        // Northern Donbass - around Avdiivka
        [48.2, 37.8], [48.0, 37.7], [47.9, 37.6],
        // Southern Donbass - near Vuhledar
        [47.8, 37.4], [47.7, 37.2], [47.6, 37.0],
        // Zaporizhzhia sector - Orikhiv area
        [47.5, 36.5], [47.4, 36.0], [47.3, 35.5],
        // Kherson sector - west of Dnipro
        [47.0, 34.5], [46.8, 34.0], [46.6, 33.5]
    ], COLORS.BLU, 5);

    // Frontline zigzag details in most active areas
    // Avdiivka sector - most heavily contested
    ln([
        [48.15, 37.75], [48.12, 37.78], [48.10, 37.80], [48.08, 37.82],
        [48.06, 37.84], [48.04, 37.82], [48.02, 37.80]
    ], COLORS.RED, 3, '2 2');

    // Kupiansk-Lyman sector
    ln([
        [49.3, 37.4], [49.25, 37.45], [49.2, 37.5], [49.15, 37.55],
        [49.1, 37.5], [49.05, 37.45], [49.0, 37.4]
    ], COLORS.PNK, 3, '2 2');

    // Zaporizhzhia sector - Orikhiv area
    ln([
        [47.5, 35.8], [47.45, 35.75], [47.4, 35.7], [47.35, 35.65],
        [47.3, 35.7], [47.25, 35.75], [47.2, 35.8]
    ], COLORS.GRN, 3, '2 2');

    // =====================================================
    // FRONTLINE STATISTICS
    // =====================================================

    const frontlineStats = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:260px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#128279; ОБЩАЯ ЛИНИЯ ФРОНТА</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Протяжённость: <span style="color:#4fc3f7;font-weight:700;">~1,200 км</span></div>
                <div>Секторов: <span style="color:#4fc3f7;font-weight:700;">6</span> основных</div>
                <div>Самый сложный: <span style="color:#ef5350;font-weight:700;">Донбасс</span> (~400 км)</div>
                <div>Наименее активный: <span style="color:#00e5ff;font-weight:700;">Херсон</span> (река)</div>
                <div>Средний темп: <span style="color:#ffeb3b;font-weight:700;">1-2 км/месяц</span></div>
                <div>Ключевые города: <span style="color:#4caf50;font-weight:700;">Харків, Куп'янськ, Лиман</span> під контролем України</div>
                <div>Ключевые города: <span style="color:#ef5350;font-weight:700;">Херсон</span> під контролем РФ</div>
                <div>Потери: <span style="color:#ef5350;font-weight:700;">высокие</span> с обеих сторон</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Фронт: дуга от Сум до Херсона. Донбасс — эпицентр боёв<br>
                Решающие факторы: артиллерия, дроны, логистика<br>
                Стратегия: истощение противника, локальные прорывы
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.2, 39.0], { icon: frontlineStats, interactive: false }).addTo(map));

    // =====================================================
    // TERRITORY CONTROL INDICATORS - ACCURATE
    // =====================================================

    // Ukrainian controlled areas (west of frontline) - more accurate shape
    ar([
        [51.5, 32.0], [51.5, 35.0], [50.0, 35.0], [49.0, 35.5],
        [48.0, 34.0], [47.0, 33.0], [46.5, 32.0], [46.5, 31.0],
        [47.0, 31.0], [48.0, 31.5], [49.0, 32.0], [50.0, 32.5]
    ], COLORS.BLU, COLORS.BLU, 0.03);

    zoneLabel(49.0, 33.0, 'КОНТРОЛЬ УКРАЇНИ', COLORS.BLU, 9);

    // Russian controlled areas (east of frontline) - accurate to current lines
    ar([
        [51.0, 35.0], [51.0, 40.0], [50.5, 40.0], [50.0, 39.0],
        [49.5, 38.5], [49.0, 38.0], [48.5, 37.5], [48.0, 37.0],
        [47.5, 36.5], [47.0, 36.0], [46.5, 35.5], [46.0, 35.0],
        [45.5, 34.5], [45.5, 33.0], [46.0, 32.5], [46.5, 32.0]
    ], COLORS.RED, COLORS.RED, 0.03);

    zoneLabel(48.5, 38.5, 'КОНТРОЛЬ РФ', COLORS.RED, 9);

    // Disputed/Gray zone areas - narrow strip along frontline
    ar([
        [50.8, 35.5], [50.8, 36.5], [50.2, 36.5], [49.8, 37.0],
        [49.3, 37.5], [48.8, 37.8], [48.3, 38.0], [47.8, 37.5],
        [47.3, 36.5], [47.3, 35.5], [47.8, 35.0], [48.3, 34.5],
        [48.8, 34.0], [49.3, 34.5], [49.8, 35.0], [50.2, 35.5]
    ], COLORS.YEL, COLORS.YEL, 0.05);

    zoneLabel(48.5, 36.5, 'СПОРНА ЗОНА — АКТИВНІ БОЇ', COLORS.YEL, 8);

    // Fly to show the entire frontline arc
    map.flyTo([48.5, 36.0], 8, { duration: 2.0 });
}