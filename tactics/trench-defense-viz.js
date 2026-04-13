// ===== TRENCH DEFENSE VISUALIZATION =====
// Defensive trench position setup

function buildTrenchDefenseViz() {
    // Use common utilities
    const { COLORS, mk, ln, ar, circ, zoneLabel, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    zoneLabel(49.70, 37.25, '───── ОБОРОННА ПОЗИЦІЯ — ОКОПНА СИСТЕМА ─────', COLORS.BLU, 12);

    // ---- MAIN TRENCH LINE ----
    zoneLabel(49.68, 37.35, 'ОСНОВНА ТРАНШЕЯ', COLORS.BLU, 10);
    // Main trench (continuous line) - ~300 meters
    ln([
        [49.68, 37.30], [49.675, 37.32], [49.67, 37.34],
        [49.665, 37.36], [49.66, 37.38], [49.655, 37.40]
    ], COLORS.BLU, 4);

    // ---- COMMUNICATION TRENCHES ----
    zoneLabel(49.72, 37.15, 'КОМУНІКАЦІЙНІ ТРАНШЕЇ', COLORS.GRN, 10);
    // Connecting trenches to rear - ~50-100 meters
    ln([[49.68, 37.30], [49.685, 37.28]], COLORS.GRN, 2, '4 2'); // Traverse
    ln([[49.675, 37.32], [49.68, 37.30]], COLORS.GRN, 2); // Main to traverse
    ln([[49.67, 37.34], [49.675, 37.32]], COLORS.GRN, 2); // Position to main
    ln([[49.665, 37.36], [49.67, 37.34]], COLORS.GRN, 2); // Position to main
    ln([[49.66, 37.38], [49.665, 37.36]], COLORS.GRN, 2); // Position to main
    ln([[49.655, 37.40], [49.66, 37.38]], COLORS.GRN, 2); // Position to main

    // ---- FIRE POSITIONS ----
    zoneLabel(49.65, 37.20, 'ВОГНЕВІ ПОЗИЦІЇ', COLORS.ORG, 10);

    // Infantry fighting positions (rifle pits) - every ~30-50 meters, 2 soldiers per position
    mk(49.677, 37.305, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'Стр. №1', '2 стрільці\nАК-74 + ПК\n(змінюються)', [70,70]);
    mk(49.672, 37.325, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'Стр. №2', '2 стрільці\nАК-74\n(змінюються)', [70,70]);
    mk(49.667, 37.345, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'Стр. №3', '2 стрільці\nРПГ-7 + АК-74\n(змінюються)', [70,70]);
    mk(49.662, 37.365, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'Стр. №4', '2 стрільці\nСВД + АК-74\n(змінюються)', [70,70]);
    mk(49.657, 37.385, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'Стр. №5', '2 стрільці\nАК-74\n(змінюються)', [70,70]);
    mk(49.652, 37.405, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="19" x2="42" y2="19" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="8" y1="31" x2="42" y2="31" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="15" cy="15" r="2" fill="${COLORS.BRN}"/><circle cx="15" cy="35" r="2" fill="${COLORS.BRN}"/>`, 'Стр. №6', 'Командир + стр.\nАК-74 + радіо\n(змінюються)', [70,70]);

    // ---- BUNKERS AND FORTIFIED POSITIONS ----
    zoneLabel(49.62, 37.30, 'БЛІНДАЖІ ТА УКРІПЛЕНІ ПОЗИЦІЇ', COLORS.YEL, 10);

    // Reinforced bunker
    mk(49.665, 37.355, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="5" y1="25" x2="45" y2="25" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="15" y1="10" x2="15" y2="40" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="35" y1="10" x2="35" y2="40" stroke="${COLORS.YEL}" stroke-width="2"/>`, 'БЛІНДАЖ-1', 'ДОТ для ПК\nбетон + дерево', [80,80]);

    // Machine gun position
    mk(49.655, 37.395, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.YEL}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.YEL}" stroke-width="1"/>`, 'ПК ПОЗИЦІЯ', 'НСВ «Утьос»\nна сошці', [70,70]);

    // ---- ANTI-TANK POSITIONS ----
    zoneLabel(49.60, 37.20, 'ПРОТИТАНКОВІ ПОЗИЦІЇ', COLORS.RED, 10);

    // ATGM positions (hidden in trenches)
    mk(49.66, 37.375, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ПТРК-1', 'Stugna-P\nв окопі', [70,70]);
    mk(49.65, 37.405, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="25,10 20,20 30,20" fill="${COLORS.RED}"/><line x1="25" y1="20" x2="25" y2="35" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ПТРК-2', 'Javelin\nпозиція', [70,70]);

    // Tank defensive position
    mk(49.64, 37.385, `<ellipse cx="25" cy="30" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><rect x="18" y="15" width="14" height="10" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="15" stroke="${COLORS.RED}" stroke-width="2"/>`, 'ТАНКОВА ПОЗИЦІЯ', 'Т-72 в окопі\nамбразура', [80,80]);

    // ---- DEFENSIVE DEPTH ----
    zoneLabel(49.58, 37.10, 'ГЛИБИНА ОБОРОНИ', COLORS.PUR, 10);

    // Second line positions (fallback) - ~150 meters behind
    ln([
        [49.66, 37.26], [49.655, 37.28], [49.65, 37.30],
        [49.645, 37.32], [49.64, 37.34]
    ], COLORS.PUR, 3, '6 3');

    mk(49.658, 37.275, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="2"/>`, '2-й ЕШЕЛОН-1', 'Резервна позиція', [60,60]);
    mk(49.648, 37.305, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.PUR}" stroke-width="2"/>`, '2-й ЕШЕЛОН-2', 'Резервна позиція', [60,60]);

    // ---- OBSERVATION AND COMMAND ----
    zoneLabel(49.75, 37.30, 'СПОСТЕРЕЖЕННЯ ТА УПРАВЛІННЯ', COLORS.CYN, 10);

    // Observation post
    mk(49.67, 37.325, `<circle cx="25" cy="25" r="15" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'ОП-1', 'Спостережний пункт\nбинокль + радіо', [70,70]);

    // Command post
    mk(49.675, 37.285, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="28" x2="35" y2="28" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="15" y1="32" x2="35" y2="32" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'КП ВЗВОДУ', 'Командний пункт\nкарта + радіостанція', [80,80]);

    // ---- OBSTACLES AND MINES ----
    zoneLabel(49.55, 37.35, 'ЗАГОРОДЖЕННЯ ТА МІННІ ПОЛЯ', COLORS.BRN, 10);

    // Individual mines - scattered pattern, LARGER and more visible
    // Anti-personnel mines (POM-2 or similar) - bigger and brighter
    mk(49.672, 37.315, `<circle cx="30" cy="30" r="12" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="18" y1="18" x2="42" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="42" y1="18" x2="18" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><text x="30" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="10" font-weight="bold">П</text>`, 'МІНА-1', 'Піхотна міна\nПФМ-1 "Лепесток"', [60,60]);
    mk(49.673, 37.32, `<circle cx="30" cy="30" r="12" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="18" y1="18" x2="42" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="42" y1="18" x2="18" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><text x="30" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="10" font-weight="bold">П</text>`, 'МІНА-2', 'Піхотна міна\nОЗМ-72', [60,60]);
    mk(49.671, 37.325, `<circle cx="30" cy="30" r="12" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="18" y1="18" x2="42" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="42" y1="18" x2="18" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><text x="30" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="10" font-weight="bold">П</text>`, 'МІНА-3', 'Піхотна міна\nМОН-50', [60,60]);
    mk(49.674, 37.33, `<circle cx="30" cy="30" r="12" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="18" y1="18" x2="42" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="42" y1="18" x2="18" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><text x="30" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="10" font-weight="bold">П</text>`, 'МІНА-4', 'Піхотна міна\nПМН-2', [60,60]);
    mk(49.669, 37.328, `<circle cx="30" cy="30" r="12" fill="${COLORS.BRN}AA" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="18" y1="18" x2="42" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="42" y1="18" x2="18" y2="42" stroke="${COLORS.BRN}" stroke-width="2"/><text x="30" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="10" font-weight="bold">П</text>`, 'МІНА-5', 'Піхотна міна\nПМН-4', [60,60]);

    // Anti-tank mines (TM-62 or similar) - even bigger for visibility
    mk(49.676, 37.318, `<circle cx="30" cy="30" r="15" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="15" y="15" width="30" height="30" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="30" y="38" text-anchor="middle" fill="${COLORS.RED}" font-size="12" font-weight="bold">Т</text>`, 'МІНА-Т1', 'Протитанкова\nТМ-62М', [70,70]);
    mk(49.677, 37.325, `<circle cx="30" cy="30" r="15" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="15" y="15" width="30" height="30" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="30" y="38" text-anchor="middle" fill="${COLORS.RED}" font-size="12" font-weight="bold">Т</text>`, 'МІНА-Т2', 'Протитанкова\nТМ-62', [70,70]);
    mk(49.668, 37.322, `<circle cx="30" cy="30" r="15" fill="${COLORS.RED}AA" stroke="${COLORS.RED}" stroke-width="3"/><rect x="15" y="15" width="30" height="30" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><text x="30" y="38" text-anchor="middle" fill="${COLORS.RED}" font-size="12" font-weight="bold">Т</text>`, 'МІНА-Т3', 'Протитанкова\nТМ-62П3', [70,70]);

    // Danger zone around mines - semi-transparent warning area
    ar([
        [49.667, 37.31], [49.68, 37.315], [49.682, 37.33], [49.675, 37.335],
        [49.665, 37.332], [49.662, 37.32]
    ], COLORS.BRN, COLORS.BRN, 0.15);

    zoneLabel(49.672, 37.325, 'МІННЕ ПОЛЕ — НЕБЕЗПЕЧНА ЗОНА!', COLORS.BRN, 9);

    // Wire obstacles - 2-3 rows, ~100 meters
    ln([[49.675, 37.32], [49.678, 37.33]], COLORS.BRN, 1, '2 2');
    ln([[49.678, 37.33], [49.681, 37.34]], COLORS.BRN, 1, '2 2');
    zoneLabel(49.68, 37.335, 'КОЛЮЧИЙ ДРІТ', COLORS.BRN, 8);

    // Anti-personnel obstacles
    mk(49.673, 37.33, `<polygon points="25,15 15,35 35,35" fill="${COLORS.BRN}66" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="20" y1="25" x2="30" y2="25" stroke="${COLORS.BRN}" stroke-width="1"/><line x1="25" y1="20" x2="25" y2="30" stroke="${COLORS.BRN}" stroke-width="1"/>`, 'ВОЛЧІ ЯМИ', 'Протипіхотні\nперешкоди', [60,60]);

    // ---- SUPPORTING ELEMENTS ----
    zoneLabel(49.62, 37.05, 'ЕЛЕМЕНТИ ПІДТРИМКИ', COLORS.GRN, 10);

    // Medical post
    mk(49.655, 37.265, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="20" r="3" fill="${COLORS.GRN}"/>`, 'МЕДПУНКТ', 'Медичний пункт\nаптечки + носилки', [70,70]);

    // Ammunition point
    mk(49.66, 37.255, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="25" y1="15" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="1"/>`, 'БОЄКОМПЛЕКТ', 'Склад БК\nнабої + гранати', [70,70]);

    // ---- DEFENSIVE SECTORS ----
    zoneLabel(49.55, 37.50, 'СЕКТОРИ ОБОРОНИ:', COLORS.WHT, 11);

    const sectors = [
        { lat: 49.555, lng: 37.25, text: 'ПРАВИЙ ФЛАНГ', desc: 'Сектор №1\nТ-72 + ПТРК\n(позиції парні)', color: COLORS.BLU },
        { lat: 49.555, lng: 37.35, text: 'ЦЕНТР', desc: 'Сектор №2\nПК + піхота\n(зміни по 2)', color: COLORS.ORG },
        { lat: 49.555, lng: 37.45, text: 'ЛІВИЙ ФЛАНГ', desc: 'Сектор №3\nБліндаж + стрілецькі\n(пари стрільців)', color: COLORS.YEL },
    ];

    sectors.forEach(s => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${s.color};font-size:13px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:4px;">${s.text}</div>
                <div style="color:#bbb;font-size:10px;line-height:1.4;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${s.desc}</div>
            </div>`,
            iconAnchor: [50, 0],
        });
        placedMarkers.push(L.marker([s.lat, s.lng], { icon, interactive: false }).addTo(map));
    });

    // ---- DEFENSE STATISTICS ----
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:240px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9876; ОКОПНА ОБОРОНА — ХАРАКТЕРИСТИКИ</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Довжина траншеї: <span style="color:#4fc3f7;font-weight:700;">300 м</span></div>
                <div>Вогневі позиції: <span style="color:#ff9800;font-weight:700;">6</span> стрілецьких + <span style="color:#ffeb3b;">2</span> ПК</div>
                <div>Укріплені позиції: <span style="color:#ffeb3b;font-weight:700;">1</span> блідаж + <span style="color:#ffeb3b;">1</span> ДОТ</div>
                <div>Протитанкові засоби: <span style="color:#ef5350;font-weight:700;">3</span> ПТРК + <span style="color:#ef5350;">1</span> танк</div>
                <div>Мінні поля: <span style="color:#8d6e63;font-weight:700;">8</span> мін (5 Піх. + 3 Танк.) + <span style="color:#8d6e63;">2</span> додаткових</div>
                <div>Штат: <span style="color:#4caf50;font-weight:700;">45</span> осіб (12 в траншеї по 2 + підрозділи)</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Принципи: глибина оборони, вогнева взаємодія, укриття, пари стрільців<br>
                Час на обладнання: 48 годин при наявності техніки
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.52, 37.10], { icon: statsIcon, interactive: false }).addTo(map));

    // ---- DEFENSE ZONES VISUALIZATION ----
    // Main defense zone
    ar([
        [49.76, 37.15], [49.78, 37.20], [49.76, 37.30], [49.72, 37.35],
        [49.68, 37.40], [49.64, 37.45], [49.60, 37.50], [49.58, 37.45],
        [49.60, 37.35], [49.64, 37.30], [49.68, 37.25], [49.72, 37.20]
    ], COLORS.BLU, COLORS.BLU, 0.05);

    // Killing zone (no-man's land)
    ar([
        [49.74, 37.25], [49.72, 37.30], [49.70, 37.35], [49.68, 37.40],
        [49.66, 37.45], [49.64, 37.50], [49.62, 37.45], [49.64, 37.40],
        [49.66, 37.35], [49.68, 37.30], [49.70, 37.25], [49.72, 37.20]
    ], COLORS.RED, COLORS.RED, 0.08);

    zoneLabel(49.68, 37.32, 'ЗОНА УРАЖЕННЯ', COLORS.RED, 9);

    // Fly to trench defense area
    map.flyTo([49.66, 37.35], 14, { duration: 1.5 });
}