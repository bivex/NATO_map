// ===== MECHANIZED COMPANY VISUALIZATION =====
// Визуализация механизированной роты

function buildMechCompanyViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // --- Animated markers storage ---
    const animations = [];
    window._mechCompanyAnimations = animations;

    zoneLabel(49.5, 37.0, '───── МЕХАНИЗИРОВАННАЯ РОТА ─────', COLORS.GRN, 12);
    zoneLabel(49.3, 37.0, 'АКТУАЛЬНАЯ СТРУКТУРА УКРАИНСКИХ РОТ 2024', COLORS.GRN, 9);

    // =====================================================
    // COMPANY COMMAND POST
    // =====================================================

    zoneLabel(49.2, 36.8, 'КОМАНДОВАНИЕ РОТЫ — КП МЕХРОТЫ', COLORS.GRN, 10);

    // Company commander
    mk(49.2, 37.0, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="4"/><polygon points="25,8 18,18 32,18" fill="${COLORS.GRN}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.GRN}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КОМРОТЫ</text>`, 'КОМРОТЫ', 'Командир роти\nприймає рішення\n🎖️ ГЛАВА РОТИ', [85,85]);

    // Deputy commander
    mk(49.18, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.GRN}"/><line x1="25" y1="22" x2="25" y2="30" stroke="${COLORS.GRN}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ЗАМКОМ</text>`, 'ЗАМКОМ', 'Заступник командира\nпланування операцій\n📋 ЗАСТУПНИК', [70,70]);

    // Platoon commanders
    mk(49.22, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.GRN}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.GRN}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.GRN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">КОМВЗВОД</text>`, 'КОМВЗВОД', 'Командири взводів\nуправління підрозділами\n👥 КОМАНДИРИ', [70,70]);

    // =====================================================
    // MECHANIZED PLATOONS (ВЗВОДЫ)
    // =====================================================

    zoneLabel(49.0, 37.2, 'МЕХАНИЗИРОВАННЫЕ ВЗВОДЫ — ОСНОВА РОТЫ', COLORS.GRN, 10);

    // 1st Mechanized Platoon
    zoneLabel(49.4, 37.15, '1-Й МЕХАНИЗИРОВАННЫЙ ВЗВОД', COLORS.GRN, 9);
    mk(49.4, 37.2, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="16" r="4" fill="${COLORS.GRN}"/><circle cx="18" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="28" cy="32" r="4" fill="${COLORS.GRN}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">1-Й ВЗВОД</text>`, '1-Й-ВЗВОД', 'Механізований взвод\nБМП + піхота\n🚁 ПЕРЕДОВИЙ ВЗВОД', [90,90]);

    // BMP-1 squad in 1st platoon
    mk(49.38, 37.18, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">БМП-1</text>`, 'БМП-1-1', 'БМП-1 з десантом\nвідділення 1-го взводу\n🚗 БМП ВІДДІЛЕННЯ', [80,80]);

    // 2nd Mechanized Platoon
    zoneLabel(49.0, 37.35, '2-Й МЕХАНИЗИРОВАННЫЙ ВЗВОД', COLORS.YEL, 9);
    mk(49.05, 37.4, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.YEL}44" stroke="${COLORS.YEL}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.YEL}"/><circle cx="28" cy="16" r="4" fill="${COLORS.YEL}"/><circle cx="18" cy="32" r="4" fill="${COLORS.YEL}"/><circle cx="28" cy="32" r="4" fill="${COLORS.YEL}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">2-Й ВЗВОД</text>`, '2-Й-ВЗВОД', 'Механізований взвод\nБМП + піхота\n🚁 РЕЗЕРВНИЙ ВЗВОД', [90,90]);

    // BTR-4 squad in 2nd platoon
    mk(49.02, 37.38, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.YEL}33" stroke="${COLORS.YEL}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.YEL}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.YEL}"/><circle cx="25" cy="30" r="3" fill="${COLORS.YEL}"/><circle cx="35" cy="30" r="3" fill="${COLORS.YEL}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.YEL}" font-size="6" font-weight="bold">БТР-4</text>`, 'БТР-4-1', 'БТР-4 з десантом\nвідділення 2-го взводу\n🚐 БТР ВІДДІЛЕННЯ', [80,80]);

    // 3rd Mechanized Platoon
    zoneLabel(49.4, 36.85, '3-Й МЕХАНИЗИРОВАННЫЙ ВЗВОД', COLORS.PNK, 9);
    mk(49.4, 36.9, `<rect x="3" y="8" width="44" height="32" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="8" y1="24" x2="40" y2="24" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="16" r="4" fill="${COLORS.PNK}"/><circle cx="18" cy="32" r="4" fill="${COLORS.PNK}"/><circle cx="28" cy="32" r="4" fill="${COLORS.PNK}"/><text x="25" y="6" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">3-Й ВЗВОД</text>`, '3-Й-ВЗВОД', 'Механізований взвод\nБМП + піхота\n🚁 ЗАХИСНИЙ ВЗВОД', [90,90]);

    // =====================================================
    // SUPPORTING ELEMENTS
    // =====================================================

    zoneLabel(48.8, 37.5, 'ПОДДЕРЖИВАЮЩИЕ ЭЛЕМЕНТЫ РОТЫ', COLORS.ORG, 10);

    // Anti-tank squad
    mk(48.85, 37.55, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.RED}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.RED}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.RED}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ПТР</text>`, 'ПТР', 'Протитанковий підрозділ\nStugna-P + Javelin\n💥 ПРОТИТАНКОВИЙ', [70,70]);

    // Mortar squad
    mk(48.82, 37.52, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.ORG}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.ORG}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.ORG}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">МИНОМЕТ</text>`, 'МИНОМЕТ', 'Мінометний підрозділ\n120мм міномети\n💣 МІНОМЕТИ', [70,70]);

    // FPV drone team (company level)
    mk(48.79, 37.49, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="17.5" x2="35" y2="17.5" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="18" cy="22.5" r="2" fill="${COLORS.CYN}"/><circle cx="25" cy="22.5" r="2" fill="${COLORS.CYN}"/><circle cx="32" cy="22.5" r="2" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">FPV</text>`, 'FPV', 'FPV-дрони\nбойові дрони-камікадзе\n🛸 FPV-ДРОНИ', [70,70]);

    // =====================================================
    // COMPANY DETAILS
    // =====================================================

    const mechCompanyDetails = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;max-width:320px;">
            <div style="color:#4caf50;font-weight:700;font-size:12px;margin-bottom:6px;">🚗 МЕХАНИЗИРОВАННАЯ РОТА</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#4fc3f7;font-weight:700;margin-bottom:4px;">🏗️ СТРУКТУРА РОТЫ:</div>
                <div>• <span style="color:#4caf50;">Командир роты</span> — загальне керівництво</div>
                <div>• <span style="color:#ff9800;">Заступник командира</span> — планування + забезпечення</div>
                <div>• <span style="color:#4caf50;">3 механизированных взвода</span> — БМП/БТР + піхота</div>
                <div>• <span style="color:#f44336;">Протитанковый взвод</span> — Stugna-P + Javelin + NLAW</div>
                <div>• <span style="color:#ff9800;">Миномётный взвод</span> — 120мм міномети</div>
                <div>• <span style="color:#00bcd4;">FPV-взвод</span> — бойові дрони-камікадзе</div>

                <div style="color:#00e5ff;font-weight:700;margin:8px 0 4px 0;">⚔️ ОСНОВНЫЕ БОЕВЫЕ ЗАДАЧИ:</div>
                <div>• <span style="color:#81c784;">Наступление</span> — прорив оборони противника</div>
                <div>• <span style="color:#ffb74d;">Оборона</span> — утримання позицій</div>
                <div>• <span style="color:#e57373;">Разведка</span> — збір інформації</div>

                <div style="color:#ffc107;font-weight:700;margin:8px 0 4px 0;">🚛 ОСНОВНАЯ ТЕХНИКА (АКТУАЛЬНАЯ УКРАИНСКАЯ):</div>
                <div>• <span style="color:#4caf50;">БМП-1/БМП-2</span> — основні БМП (більшість)</div>
                <div>• <span style="color:#ff9800;">БТР-4/БТР-3</span> — бронетранспортери (деякі підрозділи)</div>
                <div>• <span style="color:#f44336;">Stugna-P + Javelin + NLAW</span> — протитанкові комплекси</div>
                <div>• <span style="color:#ff9800;">120мм міномети + FPV-дрони</span> — вогнева підтримка + дрони</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                <strong>Численность:</strong> 120-150 военнослужащих<br>
                <strong>Мобильность:</strong> Швидке переміщення + бойовий маневр<br>
                <strong>Огневая мощь:</strong> БМП + ПТРК + міномети + FPV-дрони<br>
                <strong>Тактика:</strong> Комбінований наступ + дронова підтримка<br>
                <strong>Реальность 2024:</strong> Інтеграція західної зброї + масове використання FPV
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([48.4, 36.8], { icon: mechCompanyDetails, interactive: false }).addTo(map));

    // =====================================================
    // ANIMATED MOVEMENT
    // =====================================================

    // Animated BMP advance
    const bmpAdvance = mkAnim(49.38, 37.18, `<rect x="5" y="12" width="40" height="26" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="10" y1="22" x2="35" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/>`, 'БМП→', '', [80,80]);
    animations.push({
        marker: bmpAdvance,
        path: [
            [49.38, 37.18], [49.34, 37.21], [49.30, 37.24], [49.26, 37.27],
            [49.22, 37.30], [49.18, 37.33], [49.14, 37.36]
        ],
        step: 0,
        speed: 0.008,
    });

    // Start animation
    startAnimation(animations, '_mechCompanyAnimFrame');

    // Fly to the company area
    map.flyTo([49.0, 37.0], 12, { duration: 1.5 });
}