// ===== LOGISTICS & SUPPORT UNITS VISUALIZATION =====
// Визуализация тыловых подразделений обеспечения

function buildLogisticsViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._logisticsAnimations = animations;

    zoneLabel(49.5, 37.0, '───── ТЫЛОВЫЕ ПОДРАЗДЕЛЕНИЯ ОБЕСПЕЧЕНИЯ ─────', COLORS.GRN, 12);
    zoneLabel(49.3, 37.0, 'ОРГАНИЗАЦИЯ ЛОГИСТИЧЕСКОГО ОБЕСПЕЧЕНИЯ ВОЙСК', COLORS.GRN, 9);

    // =====================================================
    // SUPPLY DEPOTS AND DISTRIBUTION
    // =====================================================

    zoneLabel(49.2, 36.8, 'СКЛАДЫ И РАСПРЕДЕЛИТЕЛЬНЫЕ ПУНКТЫ', COLORS.GRN, 10);

    // Main supply depot
    mk(49.2, 37.0, `<rect x="3" y="5" width="44" height="35" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="4"/><line x1="8" y1="15" x2="40" y2="15" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="25" x2="40" y2="25" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="35" x2="40" y2="35" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ГЛАВСКЛАД</text>`, 'ГЛАВСКЛАД', 'Головний склад матеріального забезпечення\nбоєприпаси + паливо + провіант\n📦 ГЛАВНИЙ СКЛАД', [90,90]);

    // Fuel distribution point
    mk(49.15, 37.05, `<rect x="8" y="8" width="34" height="29" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="18" cy="18" r="4" fill="${COLORS.ORG}"/><circle cx="25" cy="18" r="4" fill="${COLORS.ORG}"/><circle cx="32" cy="18" r="4" fill="${COLORS.ORG}"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.ORG}" stroke-width="2"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">ТОПЛИВО</text>`, 'ТОПЛИВО', 'Паливний пункт\nдизель + бензин для техніки\n⛽ ЗАПРАВКА', [75,75]);

    // Ammunition depot
    mk(49.25, 37.05, `<rect x="8" y="8" width="34" height="29" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="15" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="22" x2="35" y2="22" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="29" x2="35" y2="29" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="38" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">БОЕПРИПАСЫ</text>`, 'БОЕПРИПАСЫ', 'Склад боєприпасів\nснаряди + патрони + міни\n💣 АМУНІЦІЯ', [75,75]);

    // Food supply point
    mk(49.15, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><circle cx="18" cy="17.5" r="3" fill="${COLORS.YEL}"/><circle cx="25" cy="17.5" r="3" fill="${COLORS.YEL}"/><circle cx="32" cy="17.5" r="3" fill="${COLORS.YEL}"/><line x1="15" y1="22.5" x2="35" y2="22.5" stroke="${COLORS.YEL}" stroke-width="2"/><text x="25" y="37" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">ПРОВИАНТ</text>`, 'ПРОВИАНТ', 'Харчовий пункт\nсухий пайок + гаряча їжа\n🍽️ ХАРЧУВАННЯ', [75,75]);

    // =====================================================
    // MAINTENANCE AND REPAIR FACILITIES
    // =====================================================

    zoneLabel(49.0, 37.2, 'РЕМОНТ И ТЕХНИЧЕСКОЕ ОБСЛУЖИВАНИЕ', COLORS.BLU, 10);

    // Tank repair shop
    mk(49.05, 37.25, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><ellipse cx="25" cy="20" rx="15" ry="8" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="10" y1="20" x2="40" y2="20" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ТАНКРЕМОНТ</text>`, 'ТАНКРЕМОНТ', 'Ремонт танків\nТ-64 + Т-72 + Leopard\n🔧 ТАНКОВИЙ РЕМОНТ', [90,90]);

    // IFV/BTR maintenance
    mk(48.95, 37.3, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">БМП-БТР</text>`, 'БМП-БТР', 'Ремонт БМП та БТР\nБМП-1/2 + БТР-4\n🚗 РЕМОНТ БРОНЕТЕХНІКИ', [80,80]);

    // Artillery maintenance
    mk(48.85, 37.25, `<circle cx="25" cy="25" r="18" fill="${COLORS.ORG}44" stroke="${COLORS.ORG}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.ORG}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">АРТИЛЕРИЯ</text>`, 'АРТИЛЕРИЯ', 'Ремонт артилерії\n2С3 + М777 + гаубиці\n💥 АРТИЛЕРІЙСЬКИЙ РЕМОНТ', [75,75]);

    // =====================================================
    // MEDICAL EVACUATION AND TREATMENT
    // =====================================================

    zoneLabel(48.8, 37.5, 'МЕДИЦИНСКАЯ ЭВАКУАЦИЯ И ЛЕЧЕНИЕ', COLORS.PNK, 10);

    // Field hospital
    mk(48.85, 37.55, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="12" y1="16" x2="38" y2="16" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="12" y1="24" x2="38" y2="24" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="12" y1="32" x2="38" y2="32" stroke="${COLORS.PNK}" stroke-width="2"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ПОЛЕВОЙ ГОСПИТАЛЬ</text>`, 'ПОЛЕВОЙ ГОСПИТАЛЬ', 'Польовий госпіталь\nхірургія + інтенсивна терапія\n🏥 ГОСПІТАЛЬ', [85,85]);

    // Medical evacuation route
    mk(48.8, 37.58, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.PNK}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.PNK}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.PNK}"/><text x="25" y="37" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">МЕДЭВАК</text>`, 'МЕДЭВАК', 'Медична евакуація\nносилки + машини швидкої допомоги\n🚑 ЕВАКУАЦІЯ', [75,75]);

    // =====================================================
    // COMMUNICATIONS AND COMMAND SUPPORT
    // =====================================================

    zoneLabel(49.0, 36.5, 'СВЯЗЬ И КОМАНДНАЯ ПОДДЕРЖКА', COLORS.CYN, 10);

    // Communications hub
    mk(49.05, 36.6, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><line x1="12" y1="18" x2="38" y2="18" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="25" r="3" fill="${COLORS.CYN}"/><circle cx="25" cy="25" r="3" fill="${COLORS.CYN}"/><circle cx="32" cy="25" r="3" fill="${COLORS.CYN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">СВЯЗЬ</text>`, 'СВЯЗЬ', 'Комунікаційний центр\nрадіостанції + супутниковий зв\'язок\n📻 КОМУНІКАЦІЇ', [85,85]);

    // Command support
    mk(48.95, 36.55, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.BLU}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="37" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">КОМПОДДЕРЖКА</text>`, 'КОМПОДДЕРЖКА', 'Командна підтримка\nкарти + розвідданих\n📊 АНАЛІТИКА', [75,75]);

    // =====================================================
    // LOGISTICS ROUTES AND SUPPLY LINES
    // =====================================================

    zoneLabel(48.6, 37.0, 'ЛОГИСТИЧЕСКИЕ МАРШРУТЫ И КОММУНИКАЦИИ', COLORS.WHT, 11);

    // Supply convoy route
    const supplyRoutes = [
        { lat: 48.65, lng: 37.05, text: 'МАРШРУТ ПОСТАЧАННЯ', desc: 'Колони з боєприпасами\nпаливом + провіантом\n🚛 КОЛОНИ ПОСТАЧАННЯ', color: COLORS.GRN },
        { lat: 48.65, lng: 37.25, text: 'МЕДИЧНА ЕВАКУАЦІЯ', desc: 'Евакуація поранених\nшвидка медична допомога\n🚑 МЕДТРАНСПОРТ', color: COLORS.PNK },
        { lat: 48.65, lng: 37.45, text: 'РЕМОНТНА ЕВАКУАЦІЯ', desc: 'Евакуація пошкодженої техніки\nдля ремонту в тилу\n🔧 ТЕХНІЧНА ЕВАКУАЦІЯ', color: COLORS.ORG },
    ];

    supplyRoutes.forEach(route => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${route.color};font-size:12px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:2px;">${route.text}</div>
                <div style="color:#bbb;font-size:9px;line-height:1.3;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${route.desc}</div>
            </div>`,
            iconAnchor: [50, 0],
        });
        window.placedMarkers.push(L.marker([route.lat, route.lng], { icon, interactive: false }).addTo(map));
    });

    // =====================================================
    // LOGISTICS DETAILS
    // =====================================================

    const logisticsDetails = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;max-width:320px;">
            <div style="color:#4caf50;font-weight:700;font-size:12px;margin-bottom:6px;">📦 ТЫЛОВОЕ ОБЕСПЕЧЕНИЕ</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#4fc3f7;font-weight:700;margin-bottom:4px;">🏗️ СТРУКТУРА ТЫЛА:</div>
                <div>• <span style="color:#4caf50;">Главный склад</span> — центральне постачання</div>
                <div>• <span style="color:#ff9800;">Топливный пункт</span> — паливо для техніки</div>
                <div>• <span style="color:#f44336;">Склад боеприпасов</span> — боєприпаси + снаряди</div>
                <div>• <span style="color:#ffeb3b;">Продовольственный пункт</span> — харчування військ</div>
                <div>• <span style="color:#f44336;">Танковый ремонт</span> — ремонт танків</div>
                <div>• <span style="color:#4caf50;">Ремонт БМП/БТР</span> — бронетехніка</div>
                <div>• <span style="color:#ff9800;">Артиллерийский ремонт</span> — гаубиці + САУ</div>
                <div>• <span style="color:#e91e63;">Полевой госпиталь</span> — лікування поранених</div>
                <div>• <span style="color:#e91e63;">Медэвакуация</span> — евакуація + транспортування</div>
                <div>• <span style="color:#00bcd4;">Связь</span> — комунікації + зв'язок</div>
                <div>• <span style="color:#2196f3;">Командная поддержка</span> — аналітика + планування</div>

                <div style="color:#00e5ff;font-weight:700;margin:8px 0 4px 0;">⚡ ОСНОВНЫЕ ФУНКЦИИ:</div>
                <div>• <span style="color:#81c784;">Материальное обеспечение</span> — постачання всього необхідного</div>
                <div>• <span style="color:#ffb74d;">Техническое обслуживание</span> — ремонт + обслуговування</div>
                <div>• <span style="color:#e57373;">Медицинская помощь</span> — лікування + евакуація</div>
                <div>• <span style="color:#ba68c8;">Коммуникации</span> — зв'язок + управління</div>

                <div style="color:#ffc107;font-weight:700;margin:8px 0 4px 0;">🚛 ЛОГИСТИЧЕСКИЕ ПОТОКИ:</div>
                <div>• <span style="color:#4caf50;">Продовольствие</span> — сухпайки + гаряча їжа</div>
                <div>• <span style="color:#ff9800;">Топливо</span> — дизель + бензин + мазут</div>
                <div>• <span style="color:#f44336;">Боеприпасы</span> — патрони + снаряди + міни</div>
                <div>• <span style="color:#2196f3;">Запчасти</span> — комплектуючі для ремонту</div>
                <div>• <span style="color:#e91e63;">Медикаменты</span> — ліки + медичні матеріали</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                <strong>Критическая роль:</strong> Без тылового обеспечения боевые действия невозможны<br>
                <strong>Уязвимость:</strong> Тыловые коммуникации - приоритетная цель противника<br>
                <strong>Принцип:</strong> "Армия двигается на своем животе"<br>
                <strong>Современность:</strong> Дроны + супутниковий зв'язок + швидка евакуація
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.4, 36.8], { icon: logisticsDetails, interactive: false }).addTo(map));

    // =====================================================
    // ANIMATED SUPPLY CONVOY
    // =====================================================

    // Animated supply convoy movement
    const supplyConvoy = mkAnim(49.15, 37.05, `<rect x="8" y="8" width="34" height="29" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="18" r="4" fill="${COLORS.GRN}"/><circle cx="25" cy="18" r="4" fill="${COLORS.GRN}"/><circle cx="32" cy="18" r="4" fill="${COLORS.GRN}"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.GRN}" stroke-width="2"/>`, 'КОЛОНА→', '', [75,75]);
    animations.push({
        marker: supplyConvoy,
        path: [
            [49.15, 37.05], [49.12, 37.08], [49.09, 37.11], [49.06, 37.14],
            [49.03, 37.17], [49.00, 37.20], [48.97, 37.23]
        ],
        step: 0,
        speed: 0.005,
    });

    // Animated medical evacuation
    const medEvac = mkAnim(48.8, 37.58, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.PNK}33" stroke="${COLORS.PNK}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.PNK}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.PNK}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.PNK}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.PNK}"/>`, 'МЕДЭВАК→', '', [75,75]);
    animations.push({
        marker: medEvac,
        path: [
            [48.8, 37.58], [48.78, 37.61], [48.76, 37.64], [48.74, 37.67],
            [48.72, 37.70], [48.70, 37.73], [48.68, 37.76]
        ],
        step: 0,
        speed: 0.007,
    });

    // Start animation
    startAnimation(animations, '_logisticsAnimFrame');

    // Fly to the logistics area
    map.flyTo([49.0, 37.0], 12, { duration: 1.5 });
}