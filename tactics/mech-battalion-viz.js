// ===== MECHANIZED BATTALION VISUALIZATION =====
// Визуализация механизированного батальона

function buildMechBattalionViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._mechBattalionAnimations = animations;

    zoneLabel(49.5, 37.0, '───── МЕХАНИЗИРОВАННЫЙ БАТАЛЬОН ─────', COLORS.BLU, 12);
    zoneLabel(49.3, 37.0, 'ОРГАНИЗАЦИЯ И БОЕВЫЕ ПОРЯДКИ МЕХБАТА (АКТУАЛЬНАЯ УКРАИНСКАЯ СТРУКТУРА)', COLORS.BLU, 9);

    // =====================================================
    // BATTALION COMMAND POST
    // =====================================================

    zoneLabel(49.2, 36.8, 'КОМАНДОВАНИЕ БАТАЛЬОНА — КП МЕХБАТА', COLORS.BLU, 10);

    // Battalion commander position
    mk(49.2, 37.0, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="4"/><polygon points="25,8 18,18 32,18" fill="${COLORS.BLU}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КОМБАТ</text>`, 'КОМБАТ', 'Командир батальйону\nприймає рішення\n🎖️ ГЛАВА БАТАЛЬЙОНУ', [85,85]);

    // Chief of staff
    mk(49.18, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.ORG}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">НАЧШТАБА</text>`, 'НАЧШТАБА', 'Начальник штаба\nпланування операцій\n📋 ШТАБ БАТАЛЬЙОНУ', [70,70]);

    // Communications
    mk(49.22, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="15" r="2" fill="${COLORS.CYN}"/><circle cx="25" cy="15" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="15" r="2" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">СВЯЗЬ</text>`, 'СВЯЗЬ', 'Радіостанції + УКХ\nзв\'язок з ротами\n📻 КОМУНІКАЦІЇ', [70,70]);

    // Intelligence officer
    mk(49.18, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="25" cy="17.5" r="5" fill="none" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="20" y1="12.5" x2="30" y2="22.5" stroke="${COLORS.YEL}" stroke-width="1"/><line x1="30" y1="12.5" x2="20" y2="22.5" stroke="${COLORS.YEL}" stroke-width="1"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">РОЗВІДКА</text>`, 'РОЗВІДКА', 'Розвідувальний відділ\nінформація про ворога\n🔍 РОЗВІДКА БАТАЛЬЙОНУ', [70,70]);

    // Medical officer
    mk(49.22, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="18" r="2" fill="${COLORS.PNK}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДЧАСТЬ</text>`, 'МЕДЧАСТЬ', 'Медична служба\nевакуація поранених\n🏥 МЕДИЧНА ДОПОМОГА', [70,70]);

    // =====================================================
    // MECHANIZED COMPANIES (РОТЫ)
    // =====================================================

    zoneLabel(49.0, 37.2, 'МЕХАНИЗИРОВАННЫЕ РОТЫ — ОСНОВА БАТАЛЬОНА', COLORS.GRN, 10);

    // 1st Mechanized Company
    zoneLabel(49.4, 37.15, '1-ША МЕХАНИЗИРОВАННАЯ РОТА', COLORS.GRN, 9);
    mk(49.4, 37.2, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.GRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">1-ША РОТА</text>`, '1-ША-РОТА', 'Механізована рота\nБМП + піхота\n🚁 ПЕРЕДОВА РОТА', [90,90]);

    // Company command vehicle
    mk(49.38, 37.18, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.GRN}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КШМ</text>`, 'КШМ-1', 'Командно-штабна машина\nуправління ротою\n🚛 КОМАНДУВАННЯ РОТОЮ', [80,80]);

    // BMP platoon in 1st company
    mk(49.36, 37.22, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">БМП-2</text>`, 'БМП-2-1', 'БМП-2 з десантом\nпідрозділ 1-ї роти\n🚗 БМП ПІДРОЗДІЛ', [80,80]);

    // 2nd Mechanized Company
    zoneLabel(49.0, 37.35, '2-ГА МЕХАНИЗИРОВАННАЯ РОТА', COLORS.YEL, 9);
    mk(49.05, 37.4, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.YEL}"/><circle cx="28" cy="16" r="4" fill="${COLORS.YEL}"/><circle cx="18" cy="32" r="4" fill="${COLORS.YEL}"/><circle cx="28" cy="32" r="4" fill="${COLORS.YEL}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">2-ГА РОТА</text>`, '2-ГА-РОТА', 'Механізована рота\nБТР + піхота\n🚁 РЕЗЕРВНА РОТА', [90,90]);

    // BTR platoon in 2nd company
    mk(49.02, 37.38, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.YEL}"/><circle cx="25" cy="30" r="3" fill="${COLORS.YEL}"/><circle cx="35" cy="30" r="3" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БТР-4</text>`, 'БТР-4-1', 'БТР-4 з десантом\nпідрозділ 2-ї роти\n🚐 БТР ПІДРОЗДІЛ', [80,80]);

    // 3rd Mechanized Company
    zoneLabel(49.4, 36.85, '3-ТЯ МЕХАНИЗИРОВАННАЯ РОТА', COLORS.PNK, 9);
    mk(49.4, 36.9, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">3-ТЯ РОТА</text>`, '3-ТЯ-РОТА', 'Механізована рота\nБМП + піхота\n🚁 ЗАХИСНА РОТА', [90,90]);

    // =====================================================
    // TANK COMPANY
    // =====================================================

    zoneLabel(48.8, 37.5, 'ТАНКОВАЯ РОТА — УДАРНАЯ СИЛА БАТАЛЬОНА', COLORS.RED, 10);

    mk(48.85, 37.55, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ТАНКОВА РОТА</text>`, 'ТАНКОВА-РОТА', 'Танкова рота\nТ-72АМТ + Т-64\n💥 ТАНКОВИЙ УДАР', [90,90]);

    // Individual tanks
    mk(48.82, 37.52, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Т-72</text>`, 'Т-72-1', 'Т-72АМТ\nосновний бойовий танк\n💣 ТАНК', [75,75]);

    mk(48.88, 37.52, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">Т-64</text>`, 'Т-64-1', 'Т-64БМ Булат\nбойовий танк\n💣 ТАНК', [75,75]);

    // =====================================================
    // SUPPORTING UNITS
    // =====================================================

    zoneLabel(48.6, 37.0, 'ПОДДЕРЖИВАЮЩИЕ ПОДРАЗДЕЛЕНИЯ', COLORS.ORG, 10);

    // Artillery battery (attached)
    mk(48.65, 37.05, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.ORG}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">АРТИЛЕРИЯ</text>`, 'АРТИЛЕРИЯ', 'Самохідна артилерія\n2С3 Акація або M777\n💥 АРТИЛЕРІЙСЬКА ПІДТРИМКА', [75,75]);

    // Anti-aircraft platoon
    mk(48.62, 37.08, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.PUR}33" stroke="${COLORS.PUR}" stroke-width="2"/><polygon points="25,8 15,28 35,28" fill="${COLORS.PUR}"/><line x1="25" y1="28" x2="25" y2="35" stroke="${COLORS.PUR}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PUR}" font-size="6" font-weight="bold">ПВО</text>`, 'ПВО', 'Протиповітряна оборона\nІгла + Стріла + Bayraktar\n🚀 ЗАХИСТ ВІД АВІАЦІЇ', [70,70]);

    // Engineer platoon
    mk(48.58, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.BRN}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.BRN}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.BRN}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.BRN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">ІНЖЕНЕРИ</text>`, 'ІНЖЕНЕРИ', 'Інженерний підрозділ\nмінні поля + переправи\n⚒️ ІНЖЕНЕРНА ПІДТРИМКА', [70,70]);

    // Drone platoon (modern Ukrainian addition)
    mk(48.55, 37.08, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.CYN}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ДРОНИ</text>`, 'ДРОНИ', 'БпАК + розвідувальні дрони\nBayraktar + FPV\n🛸 ДРОНОВА РОЗВІДКА', [70,70]);

    // =====================================================
    // LOGISTICS AND SUPPLY
    // =====================================================

    zoneLabel(49.0, 36.5, 'ТЫЛОВОЕ ОБЕСПЕЧЕНИЕ БАТАЛЬОНА', COLORS.GRN, 10);

    // Fuel and ammunition supply point
    mk(49.05, 36.6, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="20" r="4" fill="${COLORS.GRN}"/><circle cx="25" cy="20" r="4" fill="${COLORS.GRN}"/><circle cx="32" cy="20" r="4" fill="${COLORS.GRN}"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">МАТЕРИАЛЬНОЕ</text><text x="25" y="40" text-anchor="middle" fill="${COLORS.GRN}" font-size="5" font-weight="bold">ЗАБЕСПЕЧЕНИЕ</text>`, 'МАТ-ЗАБЕСП', 'Матеріальне забезпечення\nпаливо + боєприпаси\n⛽ БК + ПАЛИВО', [85,85]);

    // Maintenance platoon
    mk(48.95, 36.55, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.GRN}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.GRN}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.GRN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">РЕМОНТ</text>`, 'РЕМОНТ', 'Ремонтна рота\nтехнічне обслуговування\n🔧 РЕМОНТ ТЕХНІКИ', [70,70]);

    // =====================================================
    // COMBAT FORMATIONS
    // =====================================================

    zoneLabel(48.8, 37.8, 'БОЕВЫЕ ПОРЯДКИ МЕХАНИЗИРОВАННОГО БАТАЛЬОНА', COLORS.WHT, 11);

    const combatFormations = [
        { lat: 48.85, lng: 37.3, text: 'МАРШЕВЫЙ ПОРЯДОК', desc: 'Колони техніки\nна марші до позицій\n🚛 КОЛОНИ ТЕХНІКИ', color: COLORS.GRN },
        { lat: 48.85, lng: 37.5, text: 'БОЕВОЙ ПОРЯДОК', desc: 'Розгорнутий для бою\nБМП + танки + піхота\n⚔️ БОЙОВИЙ ПОРЯДОК', color: COLORS.BLU },
        { lat: 48.85, lng: 37.7, text: 'ОБОРОНИТЕЛЬНЫЙ', desc: 'Траншеї + ДОТ\nмінні поля + укриття\n🛡️ ОБОРОННИЙ ПОРЯДОК', color: COLORS.YEL },
        { lat: 48.85, lng: 37.9, text: 'НАСТУПАТЕЛЬНЫЙ', desc: 'Танковий клин\nз артилерійською підтримкою\n💥 НАСТУПАЛЬНИЙ ПОРЯДОК', color: COLORS.RED },
    ];

    combatFormations.forEach(formation => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${formation.color};font-size:13px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:4px;">${formation.text}</div>
                <div style="color:#bbb;font-size:10px;line-height:1.4;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${formation.desc}</div>
            </div>`,
            iconAnchor: [60, 0],
        });
        placedMarkers.push(L.marker([formation.lat, formation.lng], { icon, interactive: false }).addTo(map));
    });

    // =====================================================
    // ANIMATED BATTLEFIELD MOVEMENT
    // =====================================================

    // Animated mechanized advance
    const bmpAdvance = mkAnim(49.36, 37.22, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/>`, 'БМП→', '', [80,80]);
    animations.push({
        marker: bmpAdvance,
        path: [
            [49.36, 37.22], [49.32, 37.25], [49.28, 37.28], [49.24, 37.31],
            [49.20, 37.34], [49.16, 37.37], [49.12, 37.40]
        ],
        step: 0,
        speed: 0.006,
    });

    // Animated tank movement
    const tankAdvance = mkAnim(48.82, 37.52, `<ellipse cx="25" cy="25" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.RED}" stroke-width="3"/>`, 'ТАНК→', '', [75,75]);
    animations.push({
        marker: tankAdvance,
        path: [
            [48.82, 37.52], [48.78, 37.55], [48.74, 37.58], [48.70, 37.61],
            [48.66, 37.64], [48.62, 37.67]
        ],
        step: 0,
        speed: 0.004,
    });

    // =====================================================
    // MECHANIZED BATTALION DETAILS
    // =====================================================

    const mechBattalionDetails = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;max-width:320px;">
            <div style="color:#2196f3;font-weight:700;font-size:12px;margin-bottom:6px;">🚗 МЕХАНИЗИРОВАННЫЙ БАТАЛЬОН</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#4fc3f7;font-weight:700;margin-bottom:4px;">🏗️ СТРУКТУРА БАТАЛЬОНА:</div>
                <div>• <span style="color:#ef5350;">Командир батальйону</span> — загальне керівництво</div>
                <div>• <span style="color:#ff9800;">Начальник штаба</span> — планування + координація</div>
                <div>• <span style="color:#4caf50;">3 механизированные роты</span> — БМП/БТР + піхота</div>
                <div>• <span style="color:#f44336;">Танковая рота</span> — Т-72/Т-64 + підтримка</div>
                <div>• <span style="color:#ff9800;">Артиллерийская батарея</span> — самохідна артилерія</div>
                <div>• <span style="color:#9c27b0;">ПВО взвод</span> — протиповітряний захист</div>
                <div>• <span style="color:#795548;">Инженерный взвод</span> — мінні поля + переправи</div>
                <div>• <span style="color:#00bcd4;">Дроновый взвод</span> — розвідка + ударні дрони</div>
                <div>• <span style="color:#4caf50;">Тыловые подразделения</span> — забезпечення + ремонт</div>

                <div style="color:#00e5ff;font-weight:700;margin:8px 0 4px 0;">⚔️ ОСНОВНЫЕ БОЕВЫЕ ЗАДАЧИ:</div>
                <div>• <span style="color:#81c784;">Наступление</span> — прорив оборони противника</div>
                <div>• <span style="color:#ffb74d;">Оборона</span> — утримання позицій + контратаки</div>
                <div>• <span style="color:#e57373;">Разведка</span> — збір інформації + бойове забезпечення</div>
                <div>• <span style="color:#ba68c8;">Маневр</span> — швидке переміщення + охоплення флангів</div>

                <div style="color:#ffc107;font-weight:700;margin:8px 0 4px 0;">🚛 ОСНОВНАЯ ТЕХНИКА:</div>
                <div>• <span style="color:#4caf50;">БМП-2/БМП-1</span> — бойові машини піхоти (3 роти)</div>
                <div>• <span style="color:#ff9800;">БТР-4/БТР-3</span> — бронетранспортери (резерв)</div>
                <div>• <span style="color:#f44336;">Т-72АМТ/Т-64БМ</span> — основні бойові танки</div>
                <div>• <span style="color:#ff9800;">2С3/М777</span> — самохідна артилерія</div>
                <div>• <span style="color:#9c27b0;">Игла/Стріла-10</span> — ПЗРК для ПВО</div>
                <div>• <span style="color:#00bcd4;">Stugna-P/Javelin</span> — протитанкові ракети</div>
                <div>• <span style="color:#00bcd4;">Bayraktar/FPV</span> — ударні дрони</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                <strong>Численность:</strong> 400-500 военнослужащих<br>
                <strong>Мобильность:</strong> Швидке переміщення + бойовий маневр<br>
                <strong>Огневая мощь:</strong> Комбінація танків + БМП + артилерії + дрони<br>
                <strong>Тактика:</strong> Швидкий наступ + глибокий прорив + дронова підтримка<br>
                <strong>Особенности:</strong> Інтеграція західної техніки + сучасні ПТРК + БпАК
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([48.4, 36.8], { icon: mechBattalionDetails, interactive: false }).addTo(map));

    // Start animation
    startAnimation(animations, '_mechBattalionAnimFrame');

    // Fly to the battalion area
    map.flyTo([49.0, 37.0], 12, { duration: 1.5 });
}