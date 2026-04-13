// ===== ARTILLERY WARFARE VISUALIZATION =====
// 2. Артиллерийская война - artillery remains the main means of destruction

function buildArtilleryWar() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    // Artillery warfare visualization
    zoneLabel(49.68, 37.55, '───── АРТИЛЕРІЙСЬКА ВІЙНА — ГЛАВНИЙ ЗАСІБ УРАЖЕННЯ ─────', COLORS.RED, 12);

    // =====================================================
    // UKRAINIAN ARTILLERY FORCES
    // =====================================================

    zoneLabel(49.55, 37.15, 'АРТИЛЕРІЯ УКРАЇНИ — СТВОЛЬНА + РЕАКТИВНА', COLORS.BLU, 11);

    // Barrel artillery - towed and self-propelled
    mk(49.62, 37.08, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="8" font-weight="bold">M777</text>`, 'АРТ-Д1', 'M777A2\n155мм гаубиця\nдальність 40км', [85,85]);

    mk(49.60, 37.12, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="8" font-weight="bold">CAESAR</text>`, 'АРТ-Д2', 'CAESAR\n155мм самохідна\nдальність 42км', [85,85]);

    mk(49.58, 37.16, `<circle cx="25" cy="25" r="18" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.BLU}" stroke-width="3"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.BLU}" font-size="8" font-weight="bold">2С3</text>`, 'АРТ-Д3', '2С3 Акація\n152мм самохідна\nдальність 24км', [85,85]);

    // Rocket artillery - HIMARS and Grad
    mk(49.64, 37.06, `<rect x="5" y="15" width="40" height="15" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="12" cy="22.5" r="1.5" fill="${COLORS.BLU}"/><circle cx="17" cy="22.5" r="1.5" fill="${COLORS.BLU}"/><circle cx="22" cy="22.5" r="1.5" fill="${COLORS.BLU}"/><circle cx="27" cy="22.5" r="1.5" fill="${COLORS.BLU}"/><circle cx="32" cy="22.5" r="1.5" fill="${COLORS.BLU}"/><circle cx="37" cy="22.5" r="1.5" fill="${COLORS.BLU}"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">HIMARS</text>`, 'РСЗВ-1', 'HIMARS M142\n227мм 6x ракети\nдальність 80км', [90,90]);

    mk(49.66, 37.04, `<rect x="5" y="15" width="40" height="15" fill="${COLORS.BLU}44" stroke="${COLORS.BLU}" stroke-width="3"/><line x1="8" y1="22.5" x2="42" y2="22.5" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="10" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="14" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="18" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="22" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="26" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="30" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="34" cy="22.5" r="1" fill="${COLORS.BLU}"/><circle cx="38" cy="22.5" r="1" fill="${COLORS.BLU}"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.BLU}" font-size="7" font-weight="bold">GRAD</text>`, 'РСЗВ-2', 'БМ-21 Град\n122мм 40x снаряди\nдальность 40км', [90,90]);

    // Counter-battery warfare - radars and spotters
    zoneLabel(49.68, 37.10, 'КОНТРБАТАРЕЙНА БОРЬБА — ПОШУК I ЗНИЩЕННЯ', COLORS.CYN, 10);

    mk(49.68, 37.08, `<circle cx="25" cy="25" r="20" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,8 18,18 32,18" fill="${COLORS.CYN}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.CYN}" stroke-width="1"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">РАДАР</text>`, 'КОНТРБАТ-1', 'AN/TPQ-36\nрадар контрбат\nдальність 24км', [80,80]);

    mk(49.70, 37.06, `<circle cx="25" cy="25" r="15" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="10" y1="25" x2="40" y2="25" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="40" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ОП</text>`, 'КОНТРБАТ-2', 'Спостережний пункт\nкоригування вогню', [70,70]);

    mk(49.72, 37.04, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><polygon points="25,12 18,22 32,22" fill="${COLORS.CYN}"/><line x1="25" y1="22" x2="25" y2="38" stroke="${COLORS.CYN}" stroke-width="2"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">КОМ</text>`, 'КОНТРБАТ-3', 'КП артилерії\nкоординація', [70,70]);

    // =====================================================
    // RUSSIAN ARTILLERY FORCES
    // =====================================================

    zoneLabel(49.75, 37.65, 'АРТИЛЕРІЯ РОСІЇ — СТВОЛЬНА + РЕАКТИВНА', COLORS.RED, 11);

    // Russian barrel artillery
    mk(49.78, 37.58, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.RED}" font-size="8" font-weight="bold">2С19</text>`, 'АРТ-Р1', '2С19 Мста-С\n152мм самохідна\nдальність 29км', [85,85]);

    mk(49.80, 37.56, `<circle cx="25" cy="25" r="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="15" y1="35" x2="35" y2="35" stroke="${COLORS.RED}" stroke-width="3"/><text x="25" y="28" text-anchor="middle" fill="${COLORS.RED}" font-size="8" font-weight="bold">2С3</text>`, 'АРТ-Р2', '2С3 Акація\n152мм самохідна\nдальність 24км', [85,85]);

    // Russian rocket artillery
    mk(49.76, 37.60, `<rect x="5" y="15" width="40" height="15" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="8" y1="22.5" x2="42" y2="22.5" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="10" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="14" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="18" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="22" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="26" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="30" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="34" cy="22.5" r="1" fill="${COLORS.RED}"/><circle cx="38" cy="22.5" r="1" fill="${COLORS.RED}"/><text x="25" y="12" text-anchor="middle" fill="${COLORS.RED}" font-size="7" font-weight="bold">GRAD</text>`, 'РСЗВ-Р1', 'БМ-21 Град\n122мм 40x снаряди\nдальность 40км', [90,90]);

    mk(49.74, 37.62, `<rect x="3" y="12" width="44" height="18" fill="${COLORS.RED}44" stroke="${COLORS.RED}" stroke-width="3"/><line x1="6" y1="21" x2="44" y2="21" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="8" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="12" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="16" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="20" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="24" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="28" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="32" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="36" cy="21" r="1.2" fill="${COLORS.RED}"/><circle cx="40" cy="21" r="1.2" fill="${COLORS.RED}"/><text x="25" y="10" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">SMERCH</text>`, 'РСЗВ-Р2', '9К58 Смерч\n300мм 12x ракети\nдальность 90км', [95,95]);

    // =====================================================
    // ARTILLERY DUEL - FIRE AND COUNTER-FIRE
    // =====================================================

    zoneLabel(49.62, 37.35, 'АРТИЛЕРІЙСЬКА ДУЕЛЬ — ВОГОНЬ I КОНТРВОГОНЬ', COLORS.ORG, 10);

    // Artillery fire lines - Ukrainian to Russian targets
    ln([[49.62, 37.08], [49.78, 37.58]], COLORS.BLU, 2, '4 4'); // M777 to 2S19
    ln([[49.60, 37.12], [49.80, 37.56]], COLORS.BLU, 2, '4 4'); // CAESAR to 2S3
    ln([[49.64, 37.06], [49.76, 37.60]], COLORS.BLU, 2, '4 4'); // HIMARS to Grad

    // Russian counter-fire
    ln([[49.78, 37.58], [49.62, 37.08]], COLORS.RED, 2, '4 4'); // Russian artillery counter-fire
    ln([[49.76, 37.60], [49.64, 37.06]], COLORS.RED, 2, '4 4'); // Grad counter-fire

    // Explosion markers on targets
    mk(49.78, 37.58, `<polygon points="25,8 15,28 35,28" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="18" r="4" fill="${COLORS.ORG}"/><text x="25" y="32" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">УРАЖ</text>`, '', 'Ураження 2С19\nукраїнською артилерією', [50,50]);

    mk(49.62, 37.08, `<polygon points="25,8 15,28 35,28" fill="${COLORS.ORG}88" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="25" cy="18" r="4" fill="${COLORS.ORG}"/><text x="25" y="32" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">УРАЖ</text>`, '', 'Контрбатарейний вогонь\nросійської артилерії', [50,50]);

    // =====================================================
    // COUNTER-BATTERY WARFARE IN ACTION
    // =====================================================

    // Radar detection zones
    circ(49.68, 37.08, 24000, COLORS.CYN, 0.02); // 24km radar range
    zoneLabel(49.72, 37.12, 'Зона виявлення радару AN/TPQ-36', COLORS.CYN, 8);

    // Counter-battery targeting
    ln([[49.68, 37.08], [49.78, 37.58]], COLORS.CYN, 1.5, '6 3'); // Radar to Russian artillery
    ln([[49.70, 37.06], [49.78, 37.58]], COLORS.CYN, 1.5, '6 3'); // Spotter coordination

    // Intelligence, Surveillance, Reconnaissance (ISR) chain
    zoneLabel(49.55, 37.75, 'ЦИКЛ КОНТРБАТАРЕЙНОЇ БОРЬБИ:', COLORS.WHT, 11);

    const counterBatterySteps = [
        { lat: 49.555, lng: 37.15, text: '① РОЗВІДКА', desc: 'Виявлення позицій\nартилерії противника', color: COLORS.CYN },
        { lat: 49.555, lng: 37.25, text: '② РАДАР', desc: 'AN/TPQ-36 фіксує\nпостріли і координати', color: COLORS.YEL },
        { lat: 49.555, lng: 37.35, text: '③ КООРДИНАЦІЯ', desc: 'Передача даних\nартилерійським підрозділам', color: COLORS.GRN },
        { lat: 49.555, lng: 37.45, text: '④ КОНТРВОГОНЬ', desc: 'Швидкий удар по\nвиявленим позиціям', color: COLORS.PNK },
        { lat: 49.555, lng: 37.55, text: '⑤ ПЕРЕМІЩЕННЯ', desc: 'Артилерія змінює\nпозиції після пострілів', color: COLORS.ORG },
        { lat: 49.555, lng: 37.65, text: '⑥ БДА', desc: 'Оцінка результатів\nі повторення циклу', color: COLORS.RED },
    ];

    counterBatterySteps.forEach(s => {
        const icon = L.divIcon({
            className: 'nato-marker',
            html: `<div style="text-align:center;">
                <div style="color:${s.color};font-size:13px;font-weight:800;text-shadow:0 1px 4px rgba(0,0,0,0.9);margin-bottom:4px;">${s.text}</div>
                <div style="color:#bbb;font-size:10px;line-height:1.4;white-space:pre-line;text-shadow:0 1px 3px rgba(0,0,0,0.9);">${s.desc}</div>
            </div>`,
            iconAnchor: [60, 0],
        });
        placedMarkers.push(L.marker([s.lat, s.lng], { icon, interactive: false }).addTo(map));
    });

    // Arrows between steps
    for (let i = 0; i < counterBatterySteps.length - 1; i++) {
        ln([[counterBatterySteps[i].lat + 0.001, counterBatterySteps[i].lng + 0.04],
            [counterBatterySteps[i+1].lat + 0.001, counterBatterySteps[i+1].lng - 0.04]], COLORS.WHT, 1.5);
    }

    // =====================================================
    // ARTILLERY STATISTICS
    // =====================================================

    const artilleryStats = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.92);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:11px;line-height:1.8;min-width:250px;">
            <div style="color:#4fc3f7;font-weight:700;font-size:13px;margin-bottom:6px;">&#9876; АРТИЛЕРІЙСЬКА ВІЙНА — СТАТИСТИКА</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div>Ствольна артилерія: <span style="color:#40c4ff;font-weight:700;">85%</span> від всіх втрат противника</div>
                <div>РСЗВ (HIMARS): <span style="color:#40c4ff;font-weight:700;">12%</span> від всіх втрат</div>
                <div>Контрбат. боротьба: <span style="color:#00e5ff;font-weight:700;">500+</span> знищених систем</div>
                <div>Співвідношення: <span style="color:#4caf50;font-weight:700;">1:7</span> на користь України</div>
                <div>Боєкомплект: <span style="color:#ffeb3b;font-weight:700;">2,400</span> снарядів/доба</div>
                <div>Точність: <span style="color:#00e5ff;font-weight:700;">CEP 5-10м</span> з корекцією</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;">
                Артилерія = король війни. Контрбатарейна боротьба = ключ до перемоги<br>
                HIMARS + M777 + CAESAR + радари = перелом у війні
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([49.52, 37.20], { icon: artilleryStats, interactive: false }).addTo(map));

    // =====================================================
    // SAFETY ZONES AND DANGER AREAS
    // =====================================================

    // Artillery danger zones (don't place troops here)
    ar([
        [49.55, 37.05], [49.58, 37.08], [49.61, 37.11], [49.64, 37.14],
        [49.67, 37.11], [49.70, 37.08], [49.67, 37.05], [49.64, 37.02],
        [49.61, 37.02], [49.58, 37.05]
    ], COLORS.RED, COLORS.RED, 0.1);

    zoneLabel(49.62, 37.08, 'ЗОНА НЕБЕЗПЕКИ — АРТИЛЕРІЙСЬКИЙ ВОГОНЬ', COLORS.RED, 9);

    // Safe artillery positions (camouflaged and dispersed)
    ar([
        [49.59, 37.04], [49.61, 37.06], [49.63, 37.08], [49.65, 37.06],
        [49.63, 37.04], [49.61, 37.04]
    ], COLORS.GRN, COLORS.GRN, 0.08);

    zoneLabel(49.62, 37.06, 'БЕЗПЕЧНІ ПОЗИЦІЇ — МАСКУВАННЯ + ДИСПЕРСІЯ', COLORS.GRN, 8);

    // Fly to artillery battle area
    map.flyTo([49.65, 37.35], 13, { duration: 1.5 });
}