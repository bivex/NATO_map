// ===== ASSAULT FORCES VISUALIZATION =====
// Ground assault operations on enemy positions

function buildAssaultViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._assaultAnimations = animations;

    // ASSAULT ON ENEMY POSITION — KUPYANSK SECTOR
    // Demonstrates ground assault phases: Prep → Breakthrough → Exploitation

    // ---- ENEMY DEFENSIVE POSITION ----
    zoneLabel(49.68, 37.55, '───── ВОРОЖА ПОЗИЦІЯ ─────', COLORS.RED, 12);

    // Enemy trench system
    ln([
        [49.75, 37.40], [49.72, 37.45], [49.70, 37.50],
        [49.68, 37.55], [49.66, 37.50], [49.64, 37.45],
        [49.62, 37.40]
    ], COLORS.RED, 3);

    // Enemy positions in trenches
    mk(49.70, 37.50, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ Окоп-1', 'МСР + ПК', [70,70]);
    mk(49.68, 37.55, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ ДОТ', 'Танк в ДОТі', [70,70]);
    mk(49.66, 37.50, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ Окоп-2', 'МСР + АГС', [70,70]);

    // Enemy supporting elements
    mk(49.72, 37.60, `<circle cx="25" cy="25" r="15" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.RED}"/>`, 'РФ АРТ', '2С3 Акація', [80,80]);
    mk(49.64, 37.60, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.RED}" stroke-width="1.5"/>`, 'РФ Резерв', 'Мотостр. резерв', [70,70]);

    // ---- UKRAINIAN ASSAULT FORCES ----

    // Phase 1: PREPARATION (artillery barrage)
    zoneLabel(49.55, 37.30, 'ФАЗА 1: ПІДГОТОВКА — АРТИЛЕРІЙСЬКИЙ ОБСТРІЛ', COLORS.ORG, 11);

    // Artillery positions
    mk(49.60, 37.15, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/>`, 'АРТ-1', 'M777 / CAESAR', [80,80]);
    mk(49.58, 37.20, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="${COLORS.ORG}"/>`, 'АРТ-2', '2С3 Акація', [80,80]);

    // Artillery barrage zone (shaded area)
    ar([
        [49.62, 37.35], [49.65, 37.45], [49.68, 37.50],
        [49.71, 37.45], [49.74, 37.40], [49.72, 37.35]
    ], COLORS.ORG, COLORS.ORG, 0.15);

    // Artillery fire lines
    ln([[49.60, 37.15], [49.68, 37.45]], COLORS.ORG, 2, '4 4');
    ln([[49.58, 37.20], [49.66, 37.50]], COLORS.ORG, 2, '4 4');

    // Phase 2: BREAKTHROUGH (infantry assault)
    zoneLabel(49.55, 37.45, 'ФАЗА 2: ПРОРИВ — ШТУРМ ПІХОТИ', COLORS.PNK, 11);

    // Assault infantry positions (starting positions)
    mk(49.65, 37.25, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'Штурм-1', 'ДШВ взвод\nБМП-2 + пiхота', [70,70]);
    mk(49.63, 37.30, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'Штурм-2', 'Мехбат\nТ-72 + десант', [70,70]);

    // Assault routes (dashed lines showing planned movement)
    ln([[49.65, 37.25], [49.68, 37.35], [49.70, 37.45]], COLORS.PNK, 3, '6 3');
    ln([[49.63, 37.30], [49.65, 37.40], [49.66, 37.50]], COLORS.PNK, 3, '6 3');

    // Fire support (tank overwatch)
    mk(49.62, 37.35, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.BLU}" stroke-width="1.5"/>`, 'Танк-Підтримка', 'Т-72АМТ\nогнева підтримка', [70,70]);

    // Phase 3: EXPLOITATION (deep penetration)
    zoneLabel(49.55, 37.60, 'ФАЗА 3: РОЗВИТОК УСПІХУ — ПРОНИКНЕННЯ В ГЛИБИНУ', COLORS.GRN, 11);

    // Follow-on forces
    mk(49.58, 37.40, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/>`, 'Розвиток-1', '2-й ешелон\nмехпiхота', [70,70]);
    mk(49.56, 37.45, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><ellipse cx="25" cy="25" rx="10" ry="7" fill="none" stroke="${COLORS.GRN}" stroke-width="1.5"/>`, 'Розвиток-2', 'Танкова рота\nпрорив у глибину', [70,70]);

    // Exploitation routes
    ln([[49.58, 37.40], [49.62, 37.50], [49.64, 37.60]], COLORS.GRN, 3, '8 4');
    ln([[49.56, 37.45], [49.58, 37.55], [49.60, 37.65]], COLORS.GRN, 3, '8 4');

    // Objectives achieved
    mk(49.62, 37.50, `<circle cx="25" cy="25" r="15" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="25" cy="25" r="8" fill="${COLORS.GRN}"/>`, 'ЦІЛЬ-1', 'Знищено ДОТ', [60,60]);
    mk(49.64, 37.60, `<circle cx="25" cy="25" r="15" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="25" cy="25" r="8" fill="${COLORS.GRN}"/>`, 'ЦІЛЬ-2', 'Захоплено арт.', [60,60]);

    // ---- ANIMATED ASSAULT ELEMENTS ----

    // Animated infantry assault
    const assault1 = mkAnim(49.65, 37.25, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.PNK}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.PNK}" stroke-width="1.5"/>`, 'Штурм→', '', [50,50]);
    animations.push({
        marker: assault1,
        path: [[49.65, 37.25], [49.66, 37.30], [49.67, 37.35], [49.68, 37.40], [49.69, 37.45], [49.70, 37.50]],
        step: 0,
        speed: 0.005,
    });

    // Animated tank breakthrough
    const tank1 = mkAnim(49.63, 37.30, `<ellipse cx="25" cy="25" rx="12" ry="8" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/>`, 'Танк→', '', [50,50]);
    animations.push({
        marker: tank1,
        path: [[49.63, 37.30], [49.64, 37.35], [49.65, 37.40], [49.66, 37.45], [49.67, 37.50]],
        step: 0,
        speed: 0.004,
    });

    // Animated exploitation force
    const exploit1 = mkAnim(49.58, 37.40, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="8" y="8" x2="42" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/><line x1="42" y1="8" x2="8" y2="42" stroke="${COLORS.GRN}" stroke-width="1.5"/>`, 'Розвиток→', '', [50,50]);
    animations.push({
        marker: exploit1,
        path: [[49.58, 37.40], [49.59, 37.45], [49.60, 37.50], [49.61, 37.55], [49.62, 37.60]],
        step: 0,
        speed: 0.003,
    });

    // ---- ASSAULT STATISTICS BOX ----
    const statsIcon = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:240px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9876; ДШВ ШТУРМ — СТАТИСТИКА</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Фаза підготовки: <span style="color:#ff9800;font-weight:700;">10 хв</span> артобстріл</div>
                <div>Штурмові втрати: <span style="color:#ef5350;">5</span> поранених, <span style="color:#4caf50;">2</span> загиблих</div>
                <div>Знищено цілей: <span style="color:#ef5350;font-weight:700;">1</span> ДОТ + <span style="color:#ef5350;">8</span> особового складу</div>
                <div>Захоплено: <span style="color:#4caf50;font-weight:700;">2</span> позиції + <span style="color:#4caf50;">1</span> артсистема</div>
                <div>Час на прорив: <span style="color:#00e5ff;font-weight:700;">45 хв</span> від початку</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Тактика: вогнева підтримка → швидкий прорив → закріплення<br>
                Ефективність: координація артилерії + піхоти
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.52, 37.25], { icon: statsIcon, interactive: false }).addTo(map));

    // ---- KILL CHAIN FOR ASSAULT ----
    zoneLabel(49.55, 37.75, 'ЛАНЦЮГ ШТУРМУ (GROUND ASSAULT):', COLORS.WHT, 11);

    const phases = [
        { lat: 49.555, lng: 37.25, text: '① РОЗВІДКА', desc: 'Визначення позицій\nта слабких місць', color: COLORS.CYN },
        { lat: 49.555, lng: 37.35, text: '② ПІДГОТОВКА', desc: 'Артобстріл + планування\nатаки', color: COLORS.ORG },
        { lat: 49.555, lng: 37.45, text: '③ ПРОРИВ', desc: 'Швидкий наступ\nна слабку ділянку', color: COLORS.PNK },
        { lat: 49.555, lng: 37.55, text: '④ ЗАКРІПЛЕННЯ', desc: 'Утримання позиції +\nвідбиття контратак', color: COLORS.GRN },
        { lat: 49.555, lng: 37.65, text: '⑤ РОЗВИТОК', desc: 'Проникнення вглиб +\nзахоплення цілей', color: COLORS.YEL },
    ];

    phases.forEach(s => {
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

    // Arrows between phases
    ln([[49.56, 37.29], [49.56, 37.31]], COLORS.WHT, 1.5);
    ln([[49.56, 37.39], [49.56, 37.41]], COLORS.WHT, 1.5);
    ln([[49.56, 37.49], [49.56, 37.51]], COLORS.WHT, 1.5);
    ln([[49.56, 37.59], [49.56, 37.61]], COLORS.WHT, 1.5);

    // Start animation
    startAnimation(animations, '_assaultAnimFrame');

    // Fly to assault area
    map.flyTo([49.62, 37.40], 13, { duration: 1.5 });
}