// ===== MILITARY UNIT HEADQUARTERS VISUALIZATION =====
// Штаб военной части - организация и функционирование командного пункта

function buildMilitaryHQViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    zoneLabel(49.5, 37.0, '───── ШТАБ ВОЕННОЙ ЧАСТИ ─────', COLORS.BLU, 12);
    zoneLabel(49.3, 37.0, 'ОРГАНИЗАЦИЯ КОМАНДНОГО ПУНКТА И УПРАВЛЕНИЯ', COLORS.BLU, 9);

    // =====================================================
    // HEADQUARTERS CAMP LAYOUT
    // =====================================================

    zoneLabel(49.2, 36.8, 'ПОЛЕВОЙ ШТАБ БРИГАДЫ — ТИПОВАЯ СТРУКТУРА', COLORS.BLU, 10);

    // Main HQ building/command center
    mk(49.2, 37.0, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="4"/><polygon points="25,8 18,18 32,18" fill="${COLORS.BLU}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КОМАНДНЫЙ ПУНКТ</text>`, 'КОМ-ПУНКТ', 'Центр управління\nкарти + радіостанції\n📻 КОМАНДИР + НАЧШТАБА', [85,85]);

    // Communications tent/section
    mk(49.18, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="20" x2="35" y2="20" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="15" r="2" fill="${COLORS.CYN}"/><circle cx="25" cy="15" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="15" r="2" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">СВЯЗЬ</text>`, 'СВЯЗЬ', 'Радіозв\'язок\nStarlink + радіостанції\n📡 ЗВ\'ЯЗОК З ВИЩИМ', [70,70]);

    // Intelligence/Operations tent
    mk(49.22, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><rect x="15" y="15" width="20" height="15" fill="none" stroke="${COLORS.YEL}" stroke-width="1"/><circle cx="20" cy="20" r="1.5" fill="${COLORS.YEL}"/><circle cx="25" cy="20" r="1.5" fill="${COLORS.YEL}"/><circle cx="30" cy="20" r="1.5" fill="${COLORS.YEL}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">РАЗВЕДКА</text>`, 'РАЗВЕДКА', 'Розвідувальний відділ\nкарти + БпАК дані\n🛰️ АНАЛІЗ СИТУАЦІЇ', [70,70]);

    // Logistics/supply tent
    mk(49.18, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="32" cy="17.5" r="3" fill="${COLORS.GRN}"/><line x="15" y="22.5" x2="35" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ТЫЛ</text>`, 'ТЫЛ', 'Тилове забезпечення\nБК + харчування\n📦 ЛОГІСТИКА', [70,70]);

    // Medical station
    mk(49.22, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="18" r="2" fill="${COLORS.PNK}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДПУНКТ</text>`, 'МЕДПУНКТ', 'Медичний пункт\nаптечки + лікарі\n🏥 МЕДИЧНА ДОПОМОГА', [70,70]);

    // =====================================================
    // STAFF STRUCTURE AND ROLES
    // =====================================================

    zoneLabel(49.0, 37.2, 'ШТАТНАЯ СТРУКТУРА ШТАБА БРИГАДЫ', COLORS.ORG, 10);

    // Commander position
    mk(49.05, 37.25, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><polygon points="25,10 15,25 35,25" fill="${COLORS.RED}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КОМАНДИР</text>`, 'КОМАНДИР', 'Командир бригади\nприймає рішення\n🎖️ ГЛАВНИЙ КОМАНДУВАЧ', [75,75]);

    // Chief of Staff
    mk(49.05, 37.15, `<circle cx="25" cy="25" r="15" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.ORG}"/><line x1="25" y1="22" x2="25" y2="35" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">НАЧШТАБА</text>`, 'НАЧШТАБА', 'Начальник штаба\nорганізація роботи\n📋 КООРДИНАТОР', [70,70]);

    // Operations officer
    mk(49.08, 37.20, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.BLU}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">НАЧОПЕР</text>`, 'НАЧОПЕР', 'Начальник оперативного\nвідділу — бойові дії\n🎯 ОПЕРАТИВНЕ ПЛАНУВАННЯ', [70,70]);

    // Intelligence officer
    mk(49.02, 37.20, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.CYN}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.CYN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">НАЧРАЗВЕДКИ</text>`, 'НАЧРАЗВЕДКИ', 'Начальник розвідки\nінформація про противника\n🔍 РОЗВІДКА', [70,70]);

    // Logistics officer
    mk(49.05, 37.10, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="18" r="4" fill="${COLORS.GRN}"/><circle cx="32" cy="18" r="4" fill="${COLORS.GRN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="32" cy="32" r="4" fill="${COLORS.GRN}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">НАЧТЫЛА</text>`, 'НАЧТЫЛА', 'Начальник тилу\nзабезпечення військ\n📦 ЗАБЕЗПЕЧЕННЯ', [70,70]);

    // =====================================================
    // COMMUNICATIONS NETWORK
    // =====================================================

    zoneLabel(49.0, 36.5, 'СИСТЕМА СВЯЗИ И УПРАВЛЕНИЯ', COLORS.PUR, 10);

    // Radio communication lines
    ln([[49.2, 37.0], [49.18, 37.05]], COLORS.PUR, 2, '3 3'); // HQ to Communications
    ln([[49.2, 37.0], [49.22, 37.05]], COLORS.PUR, 2, '3 3'); // HQ to Intelligence
    ln([[49.2, 37.0], [49.18, 36.95]], COLORS.PUR, 2, '3 3'); // HQ to Logistics
    ln([[49.2, 37.0], [49.22, 36.95]], COLORS.PUR, 2, '3 3'); // HQ to Medical

    // External communications
    ln([[49.18, 37.05], [49.0, 37.0]], COLORS.PUR, 3, '4 4'); // To higher command
    zoneLabel(49.08, 37.02, 'СВЯЗЬ С ВЫШЕСТОЯЩИМ КОМАНДОВАНИЕМ', COLORS.PUR, 8);

    ln([[49.18, 37.05], [49.4, 37.2]], COLORS.PUR, 2, '3 3'); // To subordinate units
    zoneLabel(49.32, 37.18, 'СВЯЗЬ С ПОДЧИНЕННЫМИ ЧАСТЯМИ', COLORS.PUR, 8);

    // =====================================================
    // SUBORDINATE UNITS CONNECTIONS
    // =====================================================

    zoneLabel(49.4, 37.3, 'ВЗАИМОДЕЙСТВИЕ С ПОДЧИНЕННЫМИ ПОДРАЗДЕЛЕНИЯМИ', COLORS.BRN, 10);

    // Battalion HQs (3 battalions in a brigade)
    mk(49.35, 37.15, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.BRN}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">БАТАЛЬОН-1</text>`, 'БАТАЛЬОН-1', '1-й батальйон\nмеханізований\n🚁 ПЕРЕДОВА ЛІНІЯ', [80,80]);

    mk(49.40, 37.25, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.BRN}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">БАТАЛЬОН-2</text>`, 'БАТАЛЬОН-2', '2-й батальйон\nтанковий\n🚗 РЕЗЕРВ', [80,80]);

    mk(49.45, 37.35, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.BRN}33" stroke="${COLORS.BRN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.BRN}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.BRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.BRN}" font-size="6" font-weight="bold">БАТАЛЬОН-3</text>`, 'БАТАЛЬОН-3', '3-й батальйон\nартилерійський\n💥 АРТИЛЕРІЯ', [80,80]);

    // Support units
    mk(49.35, 37.45, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="17.5" r="3" fill="${COLORS.GRN}"/><circle cx="30" cy="17.5" r="3" fill="${COLORS.GRN}"/><line x1="15" y1="22.5" x2="35" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ТЫЛОВЫЕ ЧАСТИ</text>`, 'ТЫЛОВЫЕ-ЧАСТИ', 'Тилові підрозділи\nзабезпечення + ремонт\n🔧 ЛОГІСТИКА', [80,80]);

    mk(49.40, 37.05, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="25" cy="18" r="2" fill="${COLORS.PNK}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДИЦИНСКАЯ РОТА</text>`, 'МЕД-РОТА', 'Медична рота\nевакуація + лікування\n🚑 МЕДИЧНА ДОПОМОГА', [80,80]);

    // Communication lines to subordinate units
    ln([[49.2, 37.0], [49.35, 37.15]], COLORS.PUR, 2, '3 3'); // To Battalion 1
    ln([[49.2, 37.0], [49.40, 37.25]], COLORS.PUR, 2, '3 3'); // To Battalion 2
    ln([[49.2, 37.0], [49.45, 37.35]], COLORS.PUR, 2, '3 3'); // To Battalion 3
    ln([[49.2, 37.0], [49.35, 37.45]], COLORS.PUR, 2, '3 3'); // To Support units

    // =====================================================
    // SECURITY AND PERIMETER DEFENSE
    // =====================================================

    zoneLabel(49.2, 36.3, 'ОХРАНА И ОБОРОНА ШТАБА', COLORS.RED, 10);

    // Security perimeter
    circ(49.2, 37.0, 800, COLORS.RED, 0.05); // 800m security zone
    zoneLabel(49.25, 36.95, 'ЗОНА ОХРАНЫ — 800М', COLORS.RED, 8);

    // Guard posts
    mk(49.15, 37.08, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.RED}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КАРАУЛ-1</text>`, 'КАРАУЛ-1', 'Караульний пост\nохорона периметра\n👀 СПОСТЕРЕЖЕННЯ', [70,70]);

    mk(49.25, 37.08, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.RED}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КАРАУЛ-2</text>`, 'КАРАУЛ-2', 'Караульний пост\nпатрулювання\n🚶 ПАТРУЛЮВАННЯ', [70,70]);

    mk(49.20, 36.85, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.RED}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КАРАУЛ-3</text>`, 'КАРАУЛ-3', 'Караульний пост\nконтроль доступу\n🚫 КОНТРОЛЬ ДОСТУПУ', [70,70]);

    // =====================================================
    // DAILY OPERATIONS CYCLE
    // =====================================================

    zoneLabel(48.8, 37.2, 'ЦИКЛ РАБОТЫ ШТАБА — СУТОЧНЫЙ РИТМ', COLORS.WHT, 11);

    const dailyCycle = [
        { lat: 48.85, lng: 36.8, text: '06:00-08:00', desc: 'Ранкова нарада\nплан на день\n📋 ПЛАНУВАННЯ', color: COLORS.ORG },
        { lat: 48.85, lng: 37.0, text: '08:00-12:00', desc: 'Координація дій\nзв\'язок з частинами\n📞 КООРДИНАЦІЯ', color: COLORS.BLU },
        { lat: 48.85, lng: 37.2, text: '12:00-18:00', desc: 'Моніторинг бою\nприйняття рішень\n🎯 УПРАВЛІННЯ', color: COLORS.YEL },
        { lat: 48.85, lng: 37.4, text: '18:00-22:00', desc: 'Аналіз результатів\nпланування на завтра\n📊 АНАЛІЗ', color: COLORS.GRN },
        { lat: 48.85, lng: 37.6, text: '22:00-06:00', desc: 'Черговий склад\nреагування на зміни\n🚨 ЧЕРГУВАННЯ', color: COLORS.PNK },
    ];

    dailyCycle.forEach(step => {
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

    // =====================================================
    // HEADQUARTERS ORGANIZATION DETAILS
    // =====================================================

    const hqDetails = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;max-width:320px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:12px;margin-bottom:6px;">&#127978; ШТАБ ВОЕННОЙ ЧАСТИ</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#4fc3f7;font-weight:700;margin-bottom:4px;">🏗️ СТРУКТУРА ШТАБА:</div>
                <div>• <span style="color:#ef5350;">Командир бригади</span> — приймає рішення</div>
                <div>• <span style="color:#ff9800;">Начальник штаба</span> — координує роботу</div>
                <div>• <span style="color:#40c4ff;">Начальник оперативного</span> — бойові дії</div>
                <div>• <span style="color:#00e5ff;">Начальник розвідки</span> — інформація</div>
                <div>• <span style="color:#4caf50;">Начальник тилу</span> — забезпечення</div>
                <div>• <span style="color:#ff4081;">Медична служба</span> — лікування</div>

                <div style="color:#76ff03;font-weight:700;margin:8px 0 4px 0;">📡 КОММУНИКАЦИИ:</div>
                <div>• <span style="color:#9c27b0;">Радиосвязь</span> — УКХ/VHF радіостанції</div>
                <div>• <span style="color:#9c27b0;">Starlink</span> — супутниковий інтернет</div>
                <div>• <span style="color:#9c27b0;">Кодированные каналы</span> — безпечна передача</div>
                <div>• <span style="color:#9c27b0;">Резервные системы</span> — на випадок відмови</div>

                <div style="color:#ffc107;font-weight:700;margin:8px 0 4px 0;">🛡️ ЗАЩИТА ШТАБА:</div>
                <div>• <span style="color:#ef5350;">Периметр охраны</span> — 800м зона</div>
                <div>• <span style="color:#ef5350;">Караульные посты</span> — кругова охрана</div>
                <div>• <span style="color:#ef5350;">Патрулирование</span> — рухома охорона</div>
                <div>• <span style="color:#ef5350;">Маскировка</span> — схованість від ворога</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                <strong>Роль штаба:</strong> Мозок військової частини<br>
                <strong>Ключевые функции:</strong> Планування + координація + управління<br>
                <strong>Принцип:</strong> Швидке прийняття рішень + ефективна комунікація
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([48.6, 36.8], { icon: hqDetails, interactive: false }).addTo(map));

    // =====================================================
    // EMERGENCY PROCEDURES
    // =====================================================

    zoneLabel(48.6, 37.5, 'АВАРИЙНЫЕ ПРОЦЕДУРЫ ШТАБА', COLORS.RED, 10);

    // Emergency evacuation routes
    ln([
        [49.2, 37.0], [49.0, 36.8], [48.8, 36.6], [48.6, 36.4]
    ], COLORS.RED, 3, '2 2');
    zoneLabel(48.8, 36.65, 'ЭВАКУАЦИОННЫЙ МАРШРУТ', COLORS.RED, 8);

    // Emergency communication backup
    mk(49.15, 36.90, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="17" y1="17" x2="33" y2="33" stroke="${COLORS.ORG}" stroke-width="1"/><line x1="33" y1="17" x2="17" y2="33" stroke="${COLORS.ORG}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">РЕЗЕРВНА СВЯЗЬ</text>`, 'РЕЗЕРВ-СВЯЗЬ', 'Резервна радіостанція\nна випадок пошкодження\n📻 БЕКАП КОМУНІКАЦІЙ', [70,70]);

    // Fly to the HQ area
    map.flyTo([49.1, 37.0], 12, { duration: 1.5 });
}