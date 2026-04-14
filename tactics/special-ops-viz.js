// ===== SPECIAL OPERATIONS & SABOTAGE VISUALIZATION =====
// 7. Спецоперации и диверсии - действия малых групп в тылу

function buildSpecialOpsViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._specialOpsAnimations = animations;

    zoneLabel(49.70, 37.55, '───── 7. СПЕЦОПЕРАЦІЇ І ДИВЕРСІЇ ─────', COLORS.PNK, 12);

    // =====================================================
    // SPECIAL OPERATIONS THEATER - ENEMY REAR AREA
    // =====================================================

    zoneLabel(49.68, 37.50, 'ТИЛОВИЙ РАЙОН ПРОТИВНИКА', COLORS.RED, 10);

    // Enemy rear infrastructure targets
    zoneLabel(49.65, 37.45, 'ЦІЛІ ДИВЕРСІЙ: ІНФРАСТРУКТУРА + ЛОГІСТИКА', COLORS.RED, 9);

    // Railway targets (critical for supply disruption)
    ln([
        [49.78, 37.35], [49.75, 37.40], [49.72, 37.45],
        [49.70, 37.50], [49.68, 37.55], [49.65, 37.60]
    ], COLORS.RED, 3);

    mk(49.75, 37.40, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="20" x2="15" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="20" x2="25" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><line x1="35" y1="20" x2="35" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ЗАЛІЗНИЦЯ</text>`, 'ЗАЛІЗНИЦЯ-1', 'Залізнична лінія\nпостачання військ', [80,80]);

    mk(49.70, 37.50, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="20" x2="15" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><line x1="25" y1="20" x2="25" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><line x1="35" y1="20" x2="35" y2="30" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ЗАЛІЗНИЦЯ</text>`, 'ЗАЛІЗНИЦЯ-2', 'Вузол постачання\nважлива ціль', [80,80]);

    // Road supply routes
    ln([
        [49.72, 37.38], [49.70, 37.42], [49.68, 37.46],
        [49.66, 37.50], [49.64, 37.54]
    ], COLORS.RED, 2, '4 2');

    mk(49.68, 37.46, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="4"/><text x="25" y="10" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ШОСЕ</text>`, 'ШОСЕ-1', 'Шосе постачання\nколони БК', [70,70]);

    // Fuel depots and ammunition dumps
    mk(49.74, 37.48, `<rect x="5" y="10" width="40" height="30" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="15" cy="20" r="4" fill="${COLORS.ORG}"/><circle cx="25" cy="20" r="4" fill="${COLORS.ORG}"/><circle cx="35" cy="20" r="4" fill="${COLORS.ORG}"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">ПАЛИВО</text>`, 'ПАЛИВО-1', 'Склад пального\nкритична ціль', [80,80]);

    mk(49.66, 37.52, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><polygon points="15,15 15,25 25,25 25,35 35,35 35,25 45,25 45,15" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="20" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="2" fill="${COLORS.YEL}"/><circle cx="40" cy="20" r="2" fill="${COLORS.YEL}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БОЄКОМПЛЕКТ</text>`, 'БОЄКОМПЛЕКТ-1', 'Склад боєприпасів\nціль диверсії', [85,85]);

    // =====================================================
    // UKRAINIAN SPECIAL OPERATIONS FORCES
    // =====================================================

    zoneLabel(49.55, 37.20, 'СПЕЦПІДРОЗДІЛИ УКРАЇНИ — ДІЇ В ТИЛУ', COLORS.BLU, 11);

    // Reconnaissance teams (small 2-4 man teams)
    zoneLabel(49.58, 37.25, 'РОЗВІДУВАЛЬНІ ГРУПИ — 2-4 ОСОБИ', COLORS.CYN, 9);

    mk(49.65, 37.35, `<circle cx="25" cy="25" r="15" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">РОЗВІД</text>`, 'РОЗВІД-1', 'Група розвідки\nфіксація цілей', [65,65]);

    mk(49.68, 37.40, `<circle cx="25" cy="25" r="15" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">РОЗВІД</text>`, 'РОЗВІД-2', 'Спостереження\nза рухом військ', [65,65]);

    // Sabotage teams (4-6 man teams with explosives)
    zoneLabel(49.60, 37.30, 'ДИВЕРСІЙНІ ГРУПИ — 4-6 ОСІБ З ВИБУХІВКОЮ', COLORS.PNK, 9);

    mk(49.72, 37.42, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="20" r="4" fill="${COLORS.PNK}"/><circle cx="30" cy="20" r="4" fill="${COLORS.PNK}"/><polygon points="25,25 20,35 30,35" fill="${COLORS.PNK}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ДИВЕРСІЯ</text>`, 'ДИВЕРСІЯ-1', 'Міна залізниці\nпереривання постачання', [70,70]);

    mk(49.70, 37.48, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="20" r="4" fill="${COLORS.PNK}"/><circle cx="30" cy="20" r="4" fill="${COLORS.PNK}"/><polygon points="25,25 20,35 30,35" fill="${COLORS.PNK}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ДИВЕРСІЯ</text>`, 'ДИВЕРСІЯ-2', 'Підрив складу\nбоєприпасів', [70,70]);

    mk(49.66, 37.46, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="20" r="4" fill="${COLORS.PNK}"/><circle cx="30" cy="20" r="4" fill="${COLORS.PNK}"/><polygon points="25,25 20,35 30,35" fill="${COLORS.PNK}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ДИВЕРСІЯ</text>`, 'ДИВЕРСІЯ-3', 'Міна шосе\nблокування колон', [70,70]);

    // Special forces sniper/hit teams
    zoneLabel(49.62, 37.35, 'СНАЙПЕРСЬКІ/УДАРНІ ГРУПИ — 2-3 ОСОБИ', COLORS.GRN, 9);

    mk(49.69, 37.44, `<rect x="10" y="15" width="30" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="22" cy="22" r="2" fill="${COLORS.GRN}"/><circle cx="28" cy="22" r="2" fill="${COLORS.GRN}"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">СНАЙПЕР</text>`, 'СНАЙПЕР-1', 'Снайпер + спостерігач\nліквідація офіцерів', [70,70]);

    // =====================================================
    // INSERTION AND EXTRACTION ROUTES
    // =====================================================

    zoneLabel(49.55, 37.45, 'МАРШРУТИ ВХОДУ/ВИХОДУ З ТИЛУ', COLORS.PUR, 10);

    // Insertion routes (crossing lines, forest paths)
    ln([
        [49.58, 37.20], [49.62, 37.25], [49.66, 37.30],
        [49.70, 37.35], [49.72, 37.40]
    ], COLORS.PUR, 2, '3 3');

    ln([
        [49.60, 37.18], [49.64, 37.22], [49.68, 37.26],
        [49.70, 37.32], [49.72, 37.38]
    ], COLORS.PUR, 2, '3 3');

    // Extraction routes (different path for safety)
    ln([
        [49.72, 37.42], [49.68, 37.38], [49.64, 37.34],
        [49.60, 37.30], [49.58, 37.25]
    ], COLORS.PUR, 2, '5 3');

    zoneLabel(49.65, 37.28, 'МАРШРУТ ВХОДУ', COLORS.PUR, 8);
    zoneLabel(49.65, 37.38, 'МАРШРУТ ВИХОДУ', COLORS.PUR, 8);

    // Safe houses and caches
    zoneLabel(49.58, 37.40, 'БЕЗПЕЧНІ БУДИНКИ + СХОВИЩА', COLORS.BRN, 9);

    mk(49.62, 37.42, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><polygon points="15,18 15,32 35,32 35,18" fill="none" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="20" y1="18" x2="20" y2="32" stroke="${COLORS.BRN}" stroke-width="1"/><line x1="30" y1="18" x2="30" y2="32" stroke="${COLORS.BRN}" stroke-width="1"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">БУДИНОК</text>`, 'БУДИНОК-1', 'Схрон + радіостанція\nевакуація поранених', [70,70]);

    mk(49.66, 37.38, `<circle cx="25" cy="25" r="15" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><rect x="15" y="15" width="20" height="20" fill="none" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="20" y1="20" x2="30" y2="30" stroke="${COLORS.BRN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">СКЛАД</text>`, 'СКЛАД-1', 'Сховок зброї\n+ боєприпасів', [65,65]);

    // =====================================================
    // SPECIAL OPERATIONS MISSION CYCLE
    // =====================================================

    zoneLabel(49.55, 37.75, 'ЦИКЛ СПЕЦОПЕРАЦІЇ:', COLORS.WHT, 11);

    const missionCycle = [
        { lat: 49.555, lng: 37.15, text: '① ПІДГОТОВКА', desc: 'Розвідка + планування\nмаршрутів входу', color: COLORS.CYN },
        { lat: 49.555, lng: 37.25, text: '② ВХІД', desc: 'Перетин лінії фронту\nніч/погана погода', color: COLORS.PUR },
        { lat: 49.555, lng: 37.35, text: '③ РОЗВІДКА', desc: 'Збір інформації\nфіксація цілей', color: COLORS.YEL },
        { lat: 49.555, lng: 37.45, text: '④ ДІЯ', desc: 'Диверсія/ліквідація\nзавдання виконано', color: COLORS.PNK },
        { lat: 49.555, lng: 37.55, text: '⑤ ВИХІД', desc: 'Евакуація іншим\nмаршрутом', color: COLORS.GRN },
        { lat: 49.555, lng: 37.65, text: '⑥ ЗВІТ', desc: 'Передача даних\nпідготовка нової', color: COLORS.ORG },
    ];

    missionCycle.forEach(step => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${step.color};font-size:13px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:4px;">${step.text}</div>
                <div style="color:#bbb;font-size:10px;line-height:1.4;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${step.desc}</div>
            </div>`,
            iconAnchor: [60, 0],
        });
        placedMarkers.push(L.marker([step.lat, step.lng], { icon, interactive: false }).addTo(map));
    });

    // Arrows between steps
    for (let i = 0; i < missionCycle.length - 1; i++) {
        ln([[missionCycle[i].lat + 0.001, missionCycle[i].lng + 0.05],
            [missionCycle[i+1].lat + 0.001, missionCycle[i+1].lng - 0.05]], COLORS.WHT, 1.5);
    }

    // =====================================================
    // ANIMATED OPERATIONS
    // =====================================================

    // Animated reconnaissance team movement
    const recon1 = mkAnim(49.58, 37.20, `<circle cx="25" cy="25" r="12" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.CYN}" stroke-width="1"/>`, 'РОЗВІД→', '', [50,50]);
    animations.push({
        marker: recon1,
        path: [
            [49.58, 37.20], [49.60, 37.22], [49.62, 37.24], [49.64, 37.26],
            [49.66, 37.28], [49.68, 37.30], [49.68, 37.32], [49.66, 37.34],
            [49.64, 37.36], [49.62, 37.38]
        ],
        step: 0,
        speed: 0.008,
    });

    // Animated sabotage team insertion
    const sabotage1 = mkAnim(49.60, 37.18, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="20" cy="20" r="3" fill="${COLORS.PNK}"/><circle cx="30" cy="20" r="3" fill="${COLORS.PNK}"/>`, 'ДИВЕРСІЯ→', '', [50,50]);
    animations.push({
        marker: sabotage1,
        path: [
            [49.60, 37.18], [49.62, 37.20], [49.64, 37.22], [49.66, 37.24],
            [49.68, 37.26], [49.70, 37.28], [49.72, 37.30], [49.72, 37.32],
            [49.72, 37.34], [49.72, 37.36], [49.72, 37.38], [49.72, 37.40]
        ],
        step: 0,
        speed: 0.006,
    });

    // =====================================================
    // SPECIAL OPERATIONS STATISTICS
    // =====================================================

    const opsStats = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:250px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9872; СПЕЦОПЕРАЦІЇ І ДИВЕРСІЇ</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Груп розвідки: <span style="color:#00e5ff;font-weight:700;">15-20</span> малих груп</div>
                <div>Диверсійних груп: <span style="color:#ff4081;font-weight:700;">8-12</span> з вибухівкою</div>
                <div>Снайперських команд: <span style="color:#4caf50;font-weight:700;">5-7</span> ударних груп</div>
                <div>Цілей уражених: <span style="color:#ef5350;font-weight:700;">200+</span> інфраструктури</div>
                <div>Залізниці: <span style="color:#ef5350;font-weight:700;">15</span> підривів</div>
                <div>Склади пального: <span style="color:#ef5350;font-weight:700;">8</span> знищених</div>
                <div>Шосе заблоковані: <span style="color:#ef5350;font-weight:700;">25</span> ділянок</div>
                <div>Втрати серед груп: <span style="color:#ff9800;font-weight:700;">низькі</span> (професійна підготовка)</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Тактика: малих груп, нічна робота, швидкий удар-відхід<br>
                Вплив: переривання логістики, деморалізація, збір розвідки<br>
                Підрозділи: ГУР, ССО, розвідка
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.52, 37.20], { icon: opsStats, interactive: false }).addTo(map));

    // =====================================================
    // DANGER ZONES AND PATROL AREAS
    // =====================================================

    // Enemy patrol zones (avoid these)
    circ(49.75, 37.45, 2000, COLORS.RED, 0.03);
    zoneLabel(49.77, 37.48, 'ЗОНА ПАТРУЛЮВАННЯ РФ', COLORS.RED, 8);

    // Safe corridors (use these for movement)
    ar([
        [49.62, 37.22], [49.65, 37.24], [49.68, 37.26],
        [49.68, 37.30], [49.65, 37.32], [49.62, 37.30]
    ], COLORS.GRN, COLORS.GRN, 0.05);

    zoneLabel(49.65, 37.28, 'БЕЗПЕЧНИЙ КОРІДОР', COLORS.GRN, 8);

    // Start animation
    startAnimation(animations, '_specialOpsAnimFrame');

    // Fly to special operations area
    map.flyTo([49.65, 37.35], 13, { duration: 1.5 });
}