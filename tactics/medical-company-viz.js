// ===== MEDICAL COMPANY VISUALIZATION =====
// Визуализация медицинской роты - организация медицинской службы

function buildMedicalCompanyViz() {
    // Use common utilities
    const { COLORS, mk, mkAnim, ln, ar, circ, zoneLabel, startAnimation, clearMap } = window.TACTICS_UTILS;

    // Clear existing
    clearMap();

    zoneLabel(49.5, 37.0, '───── МЕДИЦИНСКАЯ РОТА ─────', COLORS.PNK, 12);
    zoneLabel(49.3, 37.0, 'ОРГАНИЗАЦИЯ МЕДИЦИНСКОЙ СЛУЖБЫ ВОИНСКОЙ ЧАСТИ', COLORS.PNK, 9);

    // =====================================================
    // MEDICAL COMPANY CAMP LAYOUT
    // =====================================================

    zoneLabel(49.2, 36.8, 'МЕДИЦИНСКАЯ РОТА — ПОЛЕВАЯ СТРУКТУРА', COLORS.PNK, 10);

    // Main medical tent - surgery and intensive care
    mk(49.2, 37.0, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.PNK}44" stroke="${COLORS.PNK}" stroke-width="4"/><line x1="20" y1="8" x2="30" y2="8" stroke="${COLORS.PNK}" stroke-width="3"/><line x1="25" y1="8" x2="25" y2="35" stroke="${COLORS.PNK}" stroke-width="3"/><circle cx="18" cy="18" r="3" fill="${COLORS.PNK}"/><circle cx="32" cy="18" r="3" fill="${COLORS.PNK}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.PNK}" font-size="6" font-weight="bold">ХИРУРГИЧЕСКИЙ ПАЛАТКА</text>`, 'ХИРУРГИЯ', 'Операційна + реанімація\nекстрена хірургія\n🏥 ХІРУРГІЧНИЙ ЦЕНТР', [85,85]);

    // Triage and emergency tent
    mk(49.18, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><polygon points="15,15 15,30 35,30 35,15" fill="none" stroke="${COLORS.RED}" stroke-width="2"/><line x1="20" y1="15" x2="20" y2="30" stroke="${COLORS.RED}" stroke-width="1"/><line x1="30" y1="15" x2="30" y2="30" stroke="${COLORS.RED}" stroke-width="1"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ТРИАЖ</text>`, 'ТРИАЖ', 'Сортування поранених\nза тяжкістю\n⚕️ ТЕРМІНОВА ДОПОМОГА', [70,70]);

    // Therapy and stabilization tent
    mk(49.22, 37.05, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="18" cy="17.5" r="3" fill="${COLORS.BLU}"/><circle cx="25" cy="17.5" r="3" fill="${COLORS.BLU}"/><circle cx="32" cy="17.5" r="3" fill="${COLORS.BLU}"/><line x1="15" y1="22.5" x2="35" y2="22.5" stroke="${COLORS.BLU}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ТЕРАПИЯ</text>`, 'ТЕРАПИЯ', 'Стабілізація стану\nінфузії + медикаменти\n💊 ТЕРАПЕВТИЧНЕ ВІДДІЛЕННЯ', [70,70]);

    // Laboratory and diagnostics
    mk(49.18, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="25" cy="17.5" r="5" fill="none" stroke="${COLORS.GRN}" stroke-width="2"/><line x1="20" y1="12.5" x2="30" y2="22.5" stroke="${COLORS.GRN}" stroke-width="1"/><line x1="30" y1="12.5" x2="20" y2="22.5" stroke="${COLORS.GRN}" stroke-width="1"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ЛАБОРАТОРИЯ</text>`, 'ЛАБОРАТОРИЯ', 'Аналіз крові + діагностика\nмікроскоп + тест-системи\n🔬 ЛАБОРАТОРІЯ', [70,70]);

    // Pharmacy and medical supplies
    mk(49.22, 36.95, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><rect x="15" y="15" width="20" height="15" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="18" cy="20" r="1.5" fill="${COLORS.ORG}"/><circle cx="22" cy="20" r="1.5" fill="${COLORS.ORG}"/><circle cx="26" cy="20" r1.5" fill="${COLORS.ORG}"/><circle cx="30" cy="20" r="1.5" fill="${COLORS.ORG}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">АПТЕКА</text>`, 'АПТЕКА', 'Медикаменти + перев\'язувальні\nматеріали + обладнання\n💊 АПТЕКА', [70,70]);

    // =====================================================
    // MEDICAL EVACUATION SYSTEM
    // =====================================================

    zoneLabel(49.0, 37.2, 'СИСТЕМА МЕДИЦИНСКОЙ ЭВАКУАЦИИ', COLORS.CYN, 10);

    // Casualty collection point (CCP) - closest to front line
    mk(49.35, 37.15, `<circle cx="25" cy="25" r="18" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="3"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.CYN}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ППМ</text>`, 'ППМ', 'Пункт збору поранених\nполе бою (до 1км)\n🚑 ПЕРВИЧНА ДОПОМОГА', [75,75]);

    // Battalion aid station (BAS)
    mk(49.30, 37.10, `<rect x="5" y="10" width="40" height="25" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="20" y1="12" x2="30" y2="12" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="25" y1="12" x2="25" y2="30" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="20" cy="18" r="2" fill="${COLORS.CYN}"/><circle cx="30" cy="18" r="2" fill="${COLORS.CYN}"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">МПБ</text>`, 'МПБ', 'Медичний пункт батальйону\nстабілізація + підготовка\n🚑 БАТАЛЬЙОННА ДОПОМОГА', [80,80]);

    // Ambulance exchange point
    mk(49.25, 37.05, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.CYN}33" stroke="${COLORS.CYN}" stroke-width="2"/><circle cx="25" cy="25" r="10" fill="none" stroke="${COLORS.CYN}" stroke-width="2"/><line x1="15" y1="25" x2="35" y2="25" stroke="${COLORS.CYN}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ПМП</text>`, 'ПМП', 'Пункт медичної допомоги\nобмін санітарним транспортом\n🚑 ТРАНСПОРТНИЙ ВУЗОЛ', [70,70]);

    // Field hospital (main medical company facility)
    mk(49.20, 37.0, `<rect x="5" y="5" width="40" height="40" fill="${COLORS.CYN}44" stroke="${COLORS.CYN}" stroke-width="4"/><polygon points="25,8 18,18 32,18" fill="${COLORS.CYN}"/><line x1="25" y1="18" x2="25" y2="35" stroke="${COLORS.CYN}" stroke-width="3"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.CYN}" font-size="6" font-weight="bold">ПВП</text>`, 'ПВП', 'Полевий військовий госпіталь\nповна медична допомога\n🏥 ГОСПІТАЛЬ', [85,85]);

    // =====================================================
    // MEDICAL EVACUATION ROUTES
    // =====================================================

    zoneLabel(49.0, 36.5, 'МАРШРУТЫ МЕДИЦИНСКОЙ ЭВАКУАЦИИ', COLORS.RED, 10);

    // Evacuation route from front line to CCP
    ln([
        [49.4, 37.2], [49.38, 37.18], [49.35, 37.15]
    ], COLORS.RED, 2, '3 3');
    zoneLabel(49.38, 37.16, 'МАРШРУТ З ПОЛЯ БОЮ', COLORS.RED, 8);

    // Route from CCP to BAS
    ln([
        [49.35, 37.15], [49.32, 37.13], [49.30, 37.10]
    ], COLORS.RED, 2, '3 3');
    zoneLabel(49.32, 37.12, 'ТРАНСПОРТ ДО МПБ', COLORS.RED, 8);

    // Route from BAS to field hospital
    ln([
        [49.30, 37.10], [49.27, 37.08], [49.25, 37.05], [49.20, 37.0]
    ], COLORS.RED, 2, '3 3');
    zoneLabel(49.25, 37.02, 'ЕВАКУАЦІЯ ДО ГОСПІТАЛЮ', COLORS.RED, 8);

    // Route to rear hospital
    ln([
        [49.20, 37.0], [49.15, 36.9], [49.10, 36.8], [49.05, 36.7]
    ], COLORS.RED, 3, '4 4');
    zoneLabel(49.12, 36.82, 'МАРШРУТ ДО ТИЛОВОГО ГОСПІТАЛЮ', COLORS.RED, 8);

    // =====================================================
    // MEDICAL TRANSPORT
    // =====================================================

    zoneLabel(49.4, 37.3, 'МЕДИЦИНСКИЙ ТРАНСПОРТ', COLORS.GRN, 10);

    // Ground ambulance
    mk(49.32, 37.12, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/><line x1="10" y1="22.5" x2="40" y2="22.5" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="20" cy="20" r="2" fill="${COLORS.RED}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">АВТОСАН</text>`, 'АВТОСАН', 'Санітарний автомобіль\n2-4 ноші + медперсонал\n🚐 ГРУНТОВИЙ ТРАНСПОРТ', [80,80]);

    // Armored medical vehicle
    mk(49.28, 37.08, `<rect x="3" y="12" width="44" height="26" fill="${COLORS.GRN}44" stroke="${COLORS.GRN}" stroke-width="3"/><line x1="8" y1="22" x2="40" y2="22" stroke="${COLORS.GRN}" stroke-width="3"/><circle cx="12" cy="32" r="4" fill="${COLORS.GRN}"/><circle cx="38" cy="32" r="4" fill="${COLORS.GRN}"/><rect x="18" y="15" width="4" height="6" fill="${COLORS.RED}"/><rect x="26" y="15" width="4" height="6" fill="${COLORS.RED}"/><text x="25" y="8" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">БММ</text>`, 'БММ', 'Броньована медична машина\nпід захистом + ноші\n🚛 БРОНЬОВАНИЙ ТРАНСПОРТ', [90,90]);

    // Helicopter evacuation point (if available)
    mk(49.15, 36.85, `<polygon points="25,8 15,25 20,35 30,35 35,25" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="15" cy="30" r="2" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="2" fill="${COLORS.GRN}"/><circle cx="20" cy="35" r="2" fill="${COLORS.GRN}"/><circle cx="30" cy="35" r="2" fill="${COLORS.GRN}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.GRN}" font-size="6" font-weight="bold">ПЗ ВЕРТОЛІТА</text>`, 'ПЗ-ВЕРТОЛІТ', 'Площадка для вертолітів\nшвидка евакуація\n🚁 АЕРОМЕДИЧНА ЕВАКУАЦІЯ', [85,85]);

    // =====================================================
    // MEDICAL PERSONNEL AND SPECIALTIES
    // =====================================================

    zoneLabel(49.0, 37.5, 'МЕДИЦИНСКИЙ ПЕРСОНАЛ И СПЕЦИАЛИЗАЦИИ', COLORS.BLU, 10);

    // Surgeons and trauma specialists
    mk(49.05, 37.25, `<circle cx="25" cy="25" r="15" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="15" y1="15" x2="35" y2="35" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="35" y1="15" x2="15" y2="35" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="25" cy="25" r="5" fill="none" stroke="${COLORS.BLU}" stroke-width="1"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">ХІРУРГИ</text>`, 'ХІРУРГИ', 'Травматологи + хірурги\nекстрені операції\n🔪 ХІРУРГИЧНА КОМАНДА', [65,65]);

    // Paramedics and nurses
    mk(49.05, 37.15, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="20" y1="10" x2="30" y2="10" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="25" y1="10" x2="25" y2="35" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="20" cy="18" r="2" fill="${COLORS.BLU}"/><circle cx="30" cy="18" r="2" fill="${COLORS.BLU}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">МЕДСЕСТРИ</text>`, 'МЕДСЕСТРИ', 'Медсестри + парамедики\nінфузії + догляд\n👩‍⚕️ МЕДИЧНИЙ ПЕРСОНАЛ', [70,70]);

    // Combat medics (attached to combat units)
    mk(49.05, 37.05, `<rect x="8" y="12" width="34" height="26" fill="${COLORS.BLU}33" stroke="${COLORS.BLU}" stroke-width="2"/><circle cx="25" cy="20" r="6" fill="none" stroke="${COLORS.BLU}" stroke-width="2"/><line x1="19" y1="14" x2="31" y2="26" stroke="${COLORS.BLU}" stroke-width="1"/><line x1="31" y1="14" x2="19" y2="26" stroke="${COLORS.BLU}" stroke-width="1"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.BLU}" font-size="6" font-weight="bold">САНИНСТРУКТОРИ</text>`, 'САНИНСТРУКТОРИ', 'Саніструктори в підрозділах\nполева медицина\n🩹 БОЙОВІ МЕДИКИ', [70,70]);

    // =====================================================
    // MEDICAL SUPPLY CHAIN
    // =====================================================

    zoneLabel(49.4, 36.3, 'ЦЕПЬ МЕДИЦИНСКОГО ОБЕСПЕЧЕНИЯ', COLORS.ORG, 10);

    // Medical supply depot
    mk(49.35, 36.4, `<rect x="5" y="8" width="40" height="32" fill="${COLORS.ORG}33" stroke="${COLORS.ORG}" stroke-width="2"/><rect x="15" y="12" width="20" height="24" fill="none" stroke="${COLORS.ORG}" stroke-width="2"/><circle cx="18" cy="16" r="1.5" fill="${COLORS.ORG}"/><circle cx="22" cy="16" r="1.5" fill="${COLORS.ORG}"/><circle cx="26" cy="16" r="1.5" fill="${COLORS.ORG}"/><circle cx="30" cy="16" r="1.5" fill="${COLORS.ORG}"/><circle cx="18" cy="22" r="1.5" fill="${COLORS.ORG}"/><circle cx="22" cy="22" r="1.5" fill="${COLORS.ORG}"/><circle cx="26" cy="22" r="1.5" fill="${COLORS.ORG}"/><circle cx="30" cy="22" r="1.5" fill="${COLORS.ORG}"/><text x="25" y="40" text-anchor="middle" fill="${COLORS.ORG}" font-size="6" font-weight="bold">СКЛАД МЕДЗАСОБІВ</text>`, 'СКЛАД-МЕД', 'Склад медичних засобів\nмедикаменти + обладнання\n📦 МЕДИЧНІ ЗАПАСИ', [85,85]);

    // Blood bank and plasma storage
    mk(49.30, 36.35, `<rect x="8" y="10" width="34" height="25" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="18" cy="17.5" r="3" fill="${COLORS.RED}"/><circle cx="25" cy="17.5" r="3" fill="${COLORS.RED}"/><circle cx="32" cy="17.5" r="3" fill="${COLORS.RED}"/><line x1="15" y1="22.5" x2="35" y2="22.5" stroke="${COLORS.RED}" stroke-width="2"/><text x="25" y="35" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">КРОВ</text>`, 'КРОВ', 'Банк крові + плазма\nпереливання крові\n🩸 КРОВ\'ЯНИЙ БАНК', [70,70]);

    // =====================================================
    // MEDICAL EVACUATION PROCESS
    // =====================================================

    zoneLabel(48.8, 37.2, 'ПРОЦЕСС МЕДИЦИНСКОЙ ЭВАКУАЦИИ', COLORS.WHT, 11);

    const evacuationProcess = [
        { lat: 48.85, lng: 36.8, text: 'ПОРАНЕННЯ', desc: 'Поранений на полі бою\nсамопоміч + взаємодопомога', color: COLORS.RED },
        { lat: 48.85, lng: 37.0, text: 'САНИНСТРУКТОР', desc: 'Перша медична допомога\nзупинка кровотечі + ноші', color: COLORS.BLU },
        { lat: 48.85, lng: 37.2, text: 'ППМ', desc: 'Пункт збору поранених\nсортування + стабілізація', color: COLORS.CYN },
        { lat: 48.85, lng: 37.4, text: 'ТРАНСПОРТ', desc: 'Евакуація до МПБ\nавтосан або БММ', color: COLORS.GRN },
        { lat: 48.85, lng: 37.6, text: 'ГОСПІТАЛЬ', desc: 'Хірургія + лікування\nпідготовка до тилу', color: COLORS.PNK },
        { lat: 48.85, lng: 37.8, text: 'ВИЗДОРОВЛЕННЯ', desc: 'Реабілітація + повернення\nв стрій або відправка додому', color: COLORS.ORG },
    ];

    evacuationProcess.forEach(step => {
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
    // MEDICAL COMPANY DETAILS
    // =====================================================

    const medicalCompanyDetails = L.divIcon({
        className: 'nato-marker',
        html: `<div style="background:rgba(22,33,62,0.95);border:1px solid #4fc3f7;border-radius:8px;padding:12px 16px;color:#e0e0e0;font-size:10px;line-height:1.6;min-width:280px;max-width:320px;">
            <div style="color:#e040fb;font-weight:700;font-size:12px;margin-bottom:6px;">🩹 МЕДИЦИНСКАЯ РОТА</div>
            <div style="border-top:1px solid #0f3460;padding-top:6px;">
                <div style="color:#40c4ff;font-weight:700;margin-bottom:4px;">🏥 МЕДИЦИНСКИЕ ПОДРАЗДЕЛЕНИЯ:</div>
                <div>• <span style="color:#e040fb;">Хирургическое отделение</span> — экстренные операции</div>
                <div>• <span style="color:#ef5350;">Триаж</span> — сортировка по тяжести</div>
                <div>• <span style="color:#2196f3;">Терапевтическое отделение</span> — стабилизация</div>
                <div>• <span style="color:#4caf50;">Лаборатория</span> — анализы + диагностика</div>
                <div>• <span style="color:#ff9800;">Аптека</span> — медикаменты + расходники</div>

                <div style="color:#00e5ff;font-weight:700;margin:8px 0 4px 0;">🚑 ЭВАКУАЦИОННАЯ СИСТЕМА:</div>
                <div>• <span style="color:#00bcd4;">ППМ</span> — пункт сбора раненых (поле боя)</div>
                <div>• <span style="color:#00bcd4;">МПБ</span> — медицинский пункт батальона</div>
                <div>• <span style="color:#00bcd4;">ПМП</span> — пункт медицинской помощи (транспорт)</div>
                <div>• <span style="color:#00bcd4;">ПВП</span> — полевой военный госпиталь</div>

                <div style="color:#4caf50;font-weight:700;margin:8px 0 4px 0;">🚛 МЕДИЦИНСКИЙ ТРАНСПОРТ:</div>
                <div>• <span style="color:#4caf50;">Санитарные автомобили</span> — наземная эвакуация</div>
                <div>• <span style="color:#4caf50;">БММ (Бронированные мед.машины)</span> — защищенный транспорт</div>
                <div>• <span style="color:#4caf50;">Вертолеты</span> — аэромедицинская эвакуация</div>

                <div style="color:#ff9800;font-weight:700;margin:8px 0 4px 0;">👥 МЕДИЦИНСКИЙ ПЕРСОНАЛ:</div>
                <div>• <span style="color:#2196f3;">Хирурги + анестезиологи</span> — оперативное лечение</div>
                <div>• <span style="color:#2196f3;">Медсестры + парамедики</span> — уход + процедуры</div>
                <div>• <span style="color:#2196f3;">Санинструкторы</span> — полевая медицина в подразделениях</div>
                <div>• <span style="color:#2196f3;">Лаборанты + фармацевты</span> — диагностика + медикаменты</div>
            </div>
            <div style="border-top:1px solid #0f3460;margin-top:6px;padding-top:6px;color:#888;font-size:9px;">
                <strong>Принцип:</strong> "Золотой час" — эвакуация в первые 60 минут<br>
                <strong>Правило:</strong> "Жизнь важнее техники" — спасение раненых приоритет<br>
                <strong>Стандарт:</strong> Сортировка по тяжести (T1-T4) для оптимального лечения
            </div>
        </div>`,
        iconAnchor: [0, 0],
    });
    placedMarkers.push(L.marker([48.6, 36.8], { icon: medicalCompanyDetails, interactive: false }).addTo(map));

    // =====================================================
    // ANIMATED MEDICAL EVACUATION
    // =====================================================

    // Animated casualty evacuation
    const casualtyEvac = mkAnim(49.4, 37.2, `<rect x="8" y="8" width="34" height="34" fill="${COLORS.RED}33" stroke="${COLORS.RED}" stroke-width="2"/><circle cx="25" cy="25" r="8" fill="${COLORS.RED}"/><text x="25" y="42" text-anchor="middle" fill="${COLORS.RED}" font-size="6" font-weight="bold">ПОРАНЕНИЙ</text>`, 'ПОРАНЕНИЙ→', '', [70,70]);
    animations.push({
        marker: casualtyEvac,
        path: [
            [49.4, 37.2], [49.38, 37.18], [49.35, 37.15], [49.32, 37.13],
            [49.30, 37.10], [49.27, 37.08], [49.25, 37.05], [49.20, 37.0],
            [49.15, 36.9], [49.10, 36.8]
        ],
        step: 0,
        speed: 0.005,
    });

    // Animated medical transport
    const ambulance1 = mkAnim(49.32, 37.12, `<rect x="5" y="15" width="40" height="20" fill="${COLORS.GRN}33" stroke="${COLORS.GRN}" stroke-width="2"/><circle cx="15" cy="30" r="3" fill="${COLORS.GRN}"/><circle cx="35" cy="30" r="3" fill="${COLORS.GRN}"/>`, 'АВТОСАН→', '', [80,80]);
    animations.push({
        marker: ambulance1,
        path: [
            [49.32, 37.12], [49.30, 37.10], [49.27, 37.08], [49.25, 37.05], [49.20, 37.0]
        ],
        step: 0,
        speed: 0.004,
    });

    // Start animation
    startAnimation(animations, '_medicalEvacAnimFrame');

    // Fly to the medical company area
    map.flyTo([49.1, 37.0], 12, { duration: 1.5 });
}