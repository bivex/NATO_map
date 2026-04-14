// ===== MECHANIZED PLATOON VISUALIZATION =====
// Визуализация механизированного взвода

function buildMechPlatoonViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._mechPlatoonAnimations = animations;

    zoneLabel(49.5, 37.0, '───── МЕХАНИЗИРОВАННЫЙ ВЗВОД ─────', COLORS.GRN, 12);
    zoneLabel(49.3, 37.0, 'АКТУАЛЬНАЯ СТРУКТУРА УКРАИНСКИХ ВЗВОДОВ 2024', COLORS.GRN, 9);

    // =====================================================
    // PLATOON COMMAND POST
    // =====================================================

    zoneLabel(49.2, 36.8, 'КОМАНДОВАНИЕ ВЗВОДА — КП МЕХВЗВОДА', COLORS.GRN, 10);

    // Platoon commander
    mk(49.2, 37.0, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="4"/><polygon points="25,8 18,18 32,18" fill="${COLORS.GRN}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КОМВЗВОД</text>`, 'КОМВЗВОД', 'Командир взводу\nприймає рішення\n🎖️ ГЛАВА ВЗВОДУ', [85,85]);

    // Platoon sergeant
    mk(49.18, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.GRN}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">СТВЗВОД</text>`, 'СТВЗВОД', 'Старшина взводу\nзабезпечення + дисципліна\n📋 СТАРШИНА', [70,70]);

    // Squad leaders
    mk(49.22, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.GRN}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.GRN}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.GRN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КОМВІДД</text>`, 'КОМВІДД', 'Командири відділень\nуправління відділеннями\n👥 КОМАНДИРИ', [70,70]);

    // =====================================================
    // MECHANIZED SQUADS (ВІДДІЛЕННЯ)
    // =====================================================

    zoneLabel(49.0, 37.2, 'МЕХАНИЗИРОВАННЫЕ ВІДДІЛЕННЯ — ОСНОВА ВЗВОДА', COLORS.GRN, 10);

    // 1st Mechanized Squad
    zoneLabel(49.4, 37.15, '1-Е МЕХАНИЗИРОВАННОЕ ВІДДІЛЕННЯ', COLORS.GRN, 9);
    mk(49.4, 37.2, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.GRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">1-Е ВІДД</text>`, '1-Е-ВІДД', 'Механізоване відділення\nБМП + піхота\n🚁 ПЕРЕДОВЕ ВІДДІЛЕННЯ', [90,90]);

    // BMP-1 with infantry (more common in Ukrainian forces)
    mk(49.38, 37.18, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">БМП-1</text>`, 'БМП-1-1', 'БМП-1 з десантом\nбойове відділення\n🚗 БМП З ПІХОТОЮ', [80,80]);

    // 2nd Mechanized Squad
    zoneLabel(49.0, 37.35, '2-Е МЕХАНИЗИРОВАННОЕ ВІДДІЛЕННЯ', COLORS.YEL, 9);
    mk(49.05, 37.4, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.YEL}"/><circle cx="28" cy="16" r="4" fill="${COLORS.YEL}"/><circle cx="18" cy="32" r="4" fill="${COLORS.YEL}"/><circle cx="28" cy="32" r="4" fill="${COLORS.YEL}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">2-Е ВІДД</text>`, '2-Е-ВІДД', 'Механізоване відділення\nБМП + піхота\n🚁 РЕЗЕРВНЕ ВІДДІЛЕННЯ', [90,90]);

    // BTR-4 with infantry
    mk(49.02, 37.38, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.YEL}"/><circle cx="25" cy="30" r="3" fill="${COLORS.YEL}"/><circle cx="35" cy="30" r="3" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БТР-4</text>`, 'БТР-4-1', 'БТР-4 з десантом\nбойове відділення\n🚐 БТР З ПІХОТОЮ', [80,80]);

    // 3rd Mechanized Squad
    zoneLabel(49.4, 36.85, '3-Е МЕХАНИЗИРОВАННОЕ ВІДДІЛЕННЯ', COLORS.PNK, 9);
    mk(49.4, 36.9, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">3-Е ВІДД</text>`, '3-Е-ВІДД', 'Механізоване відділення\nБМП + піхота\n🚁 ЗАХИСНЕ ВІДДІЛЕННЯ', [90,90]);

    // =====================================================
    // PLATOON SUPPORT ELEMENTS
    // =====================================================

    zoneLabel(48.8, 37.5, 'ПОДДЕРЖИВАЮЩИЕ ЭЛЕМЕНТЫ ВЗВОДА', COLORS.ORG, 10);

    // Anti-tank team with modern weapons
    mk(48.85, 37.55, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.RED}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.RED}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.RED}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ПТР</text>`, 'ПТР', 'Протитанковий розрахунок\nStugna-P + Javelin + NLAW\n💥 ПРОТИТАНКОВИЙ', [70,70]);

    // Machine gun team + FPV drone operator
    mk(48.82, 37.52, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.ORG}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.ORG}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.ORG}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">ПК+FPV</text>`, 'ПК+FPV', 'Кулемет + FPV-дрон\nПКМ + дрон з боєприпасами\n🔫 + 🛸 КУЛЕМЕТ + ДРОН', [70,70]);

    // =====================================================
    // PLATOON DETAILS
    // =====================================================

    const mechPlatoonDetails = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;max-width:320px;">
            <div style="color:#4caf50;font-weight:700;font-size:12px;margin-bottom:6px;">🚗 МЕХАНИЗИРОВАННЫЙ ВЗВОД</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#4fc3f7;font-weight:700;margin-bottom:4px;">🏗️ СТРУКТУРА ВЗВОДА:</div>
                <div>• <span style="color:#4caf50;">Командир взвода</span> — загальне керівництво</div>
                <div>• <span style="color:#ff9800;">Старшина взвода</span> — забезпечення + дисципліна</div>
                <div>• <span style="color:#4caf50;">3 механизированных отделения</span> — БМП/БТР + піхота</div>
                <div>• <span style="color:#f44336;">Протитанковый расчет</span> — Stugna-P + Javelin</div>
                <div>• <span style="color:#ff9800;">Кулемётный расчет</span> — ПКМ + вогнева підтримка</div>

                <div style="color:#00e5ff;font-weight:700;margin:8px 0 4px 0;">⚔️ ОСНОВНЫЕ БОЕВЫЕ ЗАДАЧИ:</div>
                <div>• <span style="color:#81c784;">Наступление</span> — атака позицій противника</div>
                <div>• <span style="color:#ffb74d;">Оборона</span> — утримання рубежів</div>
                <div>• <span style="color:#e57373;">Разведка</span> — збір інформації</div>
                <div>• <span style="color:#ba68c8;">Охрана</span> — забезпечення безпеки</div>

                <div style="color:#ffc107;font-weight:700;margin:8px 0 4px 0;">🚛 ОСНОВНАЯ ТЕХНИКА (АКТУАЛЬНАЯ УКРАИНСКАЯ):</div>
                <div>• <span style="color:#4caf50;">БМП-1/БМП-2</span> — основні БМП (більшість)</div>
                <div>• <span style="color:#ff9800;">БТР-4/БТР-3</span> — бронетранспортери (деякі підрозділи)</div>
                <div>• <span style="color:#f44336;">Stugna-P + Javelin + NLAW</span> — протитанкові комплекси</div>
                <div>• <span style="color:#ff9800;">ПКМ + FPV-дрони</span> — кулемети + дрони-камікадзе</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                <strong>Численность:</strong> 25-35 военнослужащих<br>
                <strong>Мобильность:</strong> Швидке переміщення + маневр<br>
                <strong>Огневая мощь:</strong> БМП + ПТРК + дрони + кулемети<br>
                <strong>Тактика:</strong> Комбінований наступ + дронова розвідка<br>
                <strong>Реальность 2024:</strong> Інтеграція західної зброї + FPV-дрони
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    window.placedMarkers.push(L.marker([48.4, 36.8], { icon: mechPlatoonDetails, interactive: false }).addTo(map));

    // =====================================================
    // ANIMATED MOVEMENT
    // =====================================================

    // Animated squad advance
    const squadAdvance = mkAnim(49.38, 37.18, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="25" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/>`, 'ВІДДІЛЕННЯ→', '', [80,80]);
    animations.push({
        marker: squadAdvance,
        path: [
            [49.38, 37.18], [49.34, 37.21], [49.30, 37.24], [49.26, 37.27],
            [49.22, 37.30], [49.18, 37.33], [49.14, 37.36]
        ],
        step: 0,
        speed: 0.01,
    });

    // Start animation
    startAnimation(animations, '_mechPlatoonAnimFrame');

    // Fly to the platoon area
    map.flyTo([49.0, 37.0], 12, { duration: 1.5 });
}