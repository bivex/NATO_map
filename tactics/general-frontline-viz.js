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

    // Sumy oblast sector
    zoneLabel(51.5, 34.0, 'СУМСКАЯ ОБЛ.', COLORS.YEL, 10);
    mk(51.2, 34.5, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.YEL}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="7" font-weight="bold">СУМЫ</text>`, 'СУМЫ', 'Сумська область\nактивні бойові дії', [80,80]);

    // =====================================================
    // KHARKIV OBLAST SECTOR
    // =====================================================

    zoneLabel(50.2, 36.5, 'ХАРЬКОВСКАЯ ОБЛ.', COLORS.ORG, 10);
    mk(50.0, 36.2, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.ORG}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.ORG}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.ORG}" font-size="7" font-weight="bold">ХАРЬКОВ</text>`, 'ХАРЬКОВ', 'Харківська область\nвелике місто + аеропорт', [80,80]);

    // =====================================================
    // KUPYANSK-LYMAN SECTOR
    // =====================================================

    zoneLabel(49.5, 37.5, 'КУПЯНСК — ЛИМАН', COLORS.PNK, 10);
    mk(49.7, 37.7, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.PNK}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="7" font-weight="bold">КУПЯНСК</text>`, 'КУПЯНСК', 'Куп\'янськ\nважливий залізничний вузол', [80,80]);

    mk(48.9, 37.8, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.PNK}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.PNK}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.PNK}" font-size="7" font-weight="bold">ЛИМАН</text>`, 'ЛИМАН', 'Лиман\nстратегічне місто', [80,80]);

    // =====================================================
    // DONBASS SECTOR - MOST DIFFICULT
    // =====================================================

    zoneLabel(48.2, 38.0, 'ДОНБАСС — САМЫЙ СЛОЖНЫЙ УЧАСТОК', COLORS.RED, 11);
    zoneLabel(48.0, 38.0, 'ПОСТОЯННЫЕ БОИ, ВЫСОКИЕ ПОТЕРИ', COLORS.RED, 9);

    mk(48.2, 37.8, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="18" cy="32" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="32" r="4" fill="${COLORS.RED}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">СВЯТОГОРСК</text>`, 'СВЯТОГОРСК', 'Сватове-Святохірськ\nважкі бої', [90,90]);

    mk(47.9, 37.7, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.RED}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="16" r="4" fill="${COLORS.RED}"/><circle cx="18" cy="32" r="4" fill="${COLORS.RED}"/><circle cx="28" cy="32" r="4" fill="${COLORS.RED}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КРАМАТОРСК</text>`, 'КРАМАТОРСК', 'Краматорськ\nпромисловий центр', [90,90]);

    // =====================================================
    // POKROVSK-AVDIIVKA-KOSTIANTYNIVKA SECTOR
    // =====================================================

    zoneLabel(48.0, 37.0, 'ПОКРОВСК — АВДЕЕВКА — КОНСТАНТИНОВКА', COLORS.PNK, 10);

    mk(48.3, 36.8, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ПОКРОВСК</text>`, 'ПОКРОВСК', 'Покровськ\nтранспортний вузол', [90,90]);

    mk(48.1, 37.7, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">АВДЕЕВКА</text>`, 'АВДЕЕВКА', 'Авдіївка\nпромзона + форт', [90,90]);

    mk(48.5, 37.7, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">КОНСТАНТИНОВКА</text>`, 'КОНСТАНТИНОВКА', 'Костянтинівка\nпромислове місто', [90,90]);

    // =====================================================
    // ZAPORIZHZHIA SECTOR
    // =====================================================

    zoneLabel(47.5, 35.5, 'ЗАПОРОЖЬЕ — ОРЕХОВ, ГУЛЯЙПОЛЕ', COLORS.GRN, 10);

    mk(47.8, 35.2, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.GRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ЗАПОРОЖЬЕ</text>`, 'ЗАПОРОЖЬЕ', 'Запоріжжя\nвелике місто + ЗАЕС', [90,90]);

    mk(47.6, 35.8, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">ОРЕХОВ</text>`, 'ОРЕХОВ', 'Оріхів\nважливий населений пункт', [80,80]);

    mk(47.7, 36.3, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="7" font-weight="bold">ГУЛЯЙПОЛЕ</text>`, 'ГУЛЯЙПОЛЕ', 'Гуляйполе\nстратегічне місто', [80,80]);

    // =====================================================
    // KHERSON SECTOR - DNIPRO RIVER
    // =====================================================

    zoneLabel(46.8, 33.0, 'ХЕРСОН — РЕКА ДНЕПР', COLORS.CYN, 10);

    // Dnipro River
    ln([
        [49.0, 34.0], [48.5, 34.5], [48.0, 35.0], [47.5, 35.5],
        [47.0, 35.8], [46.5, 36.0], [46.0, 36.2], [45.5, 36.5]
    ], COLORS.CYN, 5);

    zoneLabel(47.0, 35.0, 'РЕКА ДНЕПР — ЕСТЕСТВЕННАЯ ПРЕПЯТСТВИЕ', COLORS.CYN, 8);

    mk(46.6, 32.6, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.CYN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.CYN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.CYN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.CYN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.CYN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ХЕРСОН</text>`, 'ХЕРСОН', 'Херсон\nобласний центр', [90,90]);

    // =====================================================
    // THE FRONTLINE ARC - SIMPLIFIED
    // =====================================================

    zoneLabel(47.0, 36.5, 'ЛИНИЯ ФРОНТА — УПРОЩЁННАЯ ДУГА СЕВЕР-ЮГ', COLORS.WHT, 11);

    // Main frontline arc from north to south
    ln([
        // Northern border areas
        [51.8, 34.2], [51.5, 34.8], [51.2, 35.5],
        // Kharkiv oblast
        [50.5, 36.0], [50.2, 36.5], [49.8, 37.0],
        // Kupiansk-Lyman
        [49.5, 37.3], [49.2, 37.6], [48.9, 37.9],
        // Donbass
        [48.5, 37.8], [48.3, 37.9], [48.1, 38.0], [47.9, 38.1],
        // Pokrovsk-Avdiivka area
        [48.0, 37.5], [47.8, 37.2], [47.6, 36.8],
        // Zaporizhzhia
        [47.5, 36.2], [47.3, 35.8], [47.1, 35.4],
        // Kherson (west of Dnipro)
        [46.8, 34.5], [46.6, 34.0], [46.4, 33.5]
    ], COLORS.BLU, 5);

    // Frontline zigzag details in most active areas
    ln([
        [48.2, 37.7], [48.15, 37.75], [48.1, 37.8], [48.05, 37.85],
        [48.0, 37.9], [47.95, 37.85], [47.9, 37.8]
    ], COLORS.RED, 3, '2 2'); // Donbass sector - most contested

    ln([
        [47.9, 36.8], [47.85, 36.75], [47.8, 36.7], [47.75, 36.65],
        [47.7, 36.7], [47.65, 36.75], [47.6, 36.8]
    ], COLORS.PNK, 3, '2 2'); // Zaporizhzhia sector

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
                <div>Ключевые города: <span style="color:#4caf50;font-weight:700;">8</span> под контролем РФ</div>
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
    // TERRITORY CONTROL INDICATORS
    // =====================================================

    // Ukrainian controlled areas (west of frontline)
    ar([
        [50.5, 33.0], [50.5, 35.0], [49.0, 35.0], [49.0, 33.0]
    ], COLORS.BLU, COLORS.BLU, 0.03);

    zoneLabel(49.8, 33.5, 'КОНТРОЛЬ УКРАЇНИ', COLORS.BLU, 9);

    // Russian controlled areas (east of frontline)
    ar([
        [50.5, 38.0], [50.5, 42.0], [47.0, 42.0], [47.0, 38.0]
    ], COLORS.RED, COLORS.RED, 0.03);

    zoneLabel(48.8, 40.0, 'КОНТРОЛЬ РФ', COLORS.RED, 9);

    // Disputed/Gray zone areas
    ar([
        [48.5, 37.0], [48.5, 38.5], [47.5, 38.5], [47.5, 37.0]
    ], COLORS.YEL, COLORS.YEL, 0.05);

    zoneLabel(48.0, 37.8, 'СПОРНА ЗОНА — СЕРИЙ', COLORS.YEL, 8);

    // Fly to show the entire frontline arc
    map.flyTo([48.5, 36.5], 8, { duration: 2.0 });
}