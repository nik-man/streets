var streets = ["",
"1 Авангардная",
"1 Азовская",
"1 Кальчик",
"1 Крайняя",
"1 Яснополянский",
"130-й Таганрогской Дивизии",
"2 Авангардная",
"2 Азовская",
"2 Кальчик",
"2 Крайняя",
"2 Яснополянский",
"24 квартал",
"25 квартал",
"26 квартал",
"27 квартал",
"221 Стрелковой дивизии",
"3 Азовская",
"3 Яснополянский",
"4 Азовская",
"8 Марта",
"9 Авиадивизии",
"9 Мая",
"I Нежинский",
"I Озерная",
"I Приморский",
"I Терновый",
"II Зинцевый",
"II Нежинский",
"II Приморский",
"III Зинцевый",
"Абрикосовая",
"Авиаторов",
"Авиационная",
"Авиационный",
"Австрийская",
"Автотранспортная",
"Аграрная",
"Административная",
"Азовская",
"Азовский",
"Азовской военной флотилии",
"Азовстальская",
"Азовстальский",
"Азовье квартал",
"Айвазовского",
"Айвовая",
"Академика Амосова",
"Александровская",
"Алмазная",
"Алмазный",
"Алтайская",
"Алтайский",
"Амурская",
"Амурский",
"Ангарская",
"Ангарский",
"Аносова",
"Антоновская",
"Апрельская",
"Аральская",
"Аральский",
"Арктики",
"Арктики",
"Армейская",
"Армейский",
"Артиллерийский",
"Асфальтная",
"Атласная",
"Аэродромная",
"Аэродромный",
"Бабака",
"Багратиона",
"Бажана",
"Баженова",
"Бакинская",
"Бакинский",
"Балочный",
"Балтийская",
"Банный",
"Баркова",
"Баррикадная",
"Бассараб",
"Батумская",
"Батумский",
"Баха",
"Бахмутская",
"Бахмутский",
"Бахчиванджи",
"Безымянная",
"Белинского",
"Белорусская",
"Белорусский",
"Белосарайский",
"Белякова",
"Бердянский",
"Береговая",
"Березовая",
"Березовый",
"Бестужева",
"Биологическая",
"Биологический",
"Благовестная",
"Благовещенский",
"Блажевича",
"Блинова",
"Богдана",
"Богдана Хмельницкого",
"Богунская",
"Боевая",
"Больничный",
"Большая азовская",
"Большая морская",
"Бондарный",
"Бородина",
"Боткина",
"Братская",
"Брестская",
"Брестский",
"Брюллова",
"Брянская",
"Бульварная",
"Бывалова",
"Вавилова",
"Вакуленчука",
"Валдайская",
"Варшавская",
"Васильева",
"Васильковая",
"Васнецова",
"Ватутина",
"Вахтангова",
"Вербная",
"Верхние Аджахи",
"Веселая",
"Весенний",
"Весенняя",
"Ветеранов",
"Взлетная",
"Вильямса",
"Виноградная",
"Виноградный",
"Вишневая",
"Вишневый",
"Владимирская",
"Водопроводная",
"Водопроводный",
"Воздухофлотская",
"Воздухофлотский",
"Вознесенская",
"Воинов-интернационалистов",
"Воинов-освободителей",
"Воинов-освободителей",
"Воинский",
"Войнич",
"Вокзальная",
"Вокзальный",
"Волгоградская",
"Волгоградский",
"Волгодонская",
"Волжская",
"Волжский",
"Волнистая",
"Волнистый",
"Волновахская",
"Волновахский",
"Волонтеровская",
"Волонтеровский",
"Волочаевская",
"Волочаевский",
"Волошина",
"Волошинская",
"Волховская",
"Воронихина",
"Воскресенская",
"Восстания",
"Восточная",
"Восточный",
"Вторая Слободка",
"Вузовская",
"Высокий",
"Высоковольтная",
"Гаванная",
"Гагарина",
"Газовая",
"Гамперский",
"Гастелло",
"Гвардейская",
"Георгиевская",
"Героев-подпольщиков",
"Героическая",
"Герцена",
"Глинки",
"Гоголевская",
"Гоголя",
"Годовикова",
"Головина",
"Голубенко",
"Гонды",
"Гончарова",
"Гористый",
"Горловская",
"Горловский",
"Горная",
"Городок Охраны",
"Городской",
"Горостров",
"Горького",
"Готфейская",
"Грабовского",
"Граверная",
"Граверный",
"Гражданская",
"Гранатный",
"Гранитная",
"Граничная",
"Грачевая",
"Греческая",
"Греческий",
"Грибоедова",
"Гризодубовой",
"Громовой",
"Грушевая",
"Гурамишвили",
"Гурьевская",
"Дальневосточная",
"Дальний",
"Дарвина",
"Дачная",
"Дачный",
"Декабристов",
"Демократическая",
"Демократический",
"Депутатская",
"Депутатский",
"Деревянко",
"Десантная",
"Джамбула",
"Дзусова",
"Динамовская",
"Днепровская",
"Днепропетровская",
"Днепропетровский",
"Днестровская",
"Днестровский",
"Добровольцев",
"Довженко",
"Докучаева",
"Долгополова",
"Домахи",
"Доменная",
"Доменный",
"Донецкая",
"Донская",
"Донской",
"Дорожная",
"Достоевского",
"Дружбы",
"Дунайская",
"Дундича",
"Евпаторийская",
"Единства",
"Ейский",
"Енисейский",
"Ермака",
"Есенина",
"Жасминовая",
"Железнодорожная",
"Жемчужная",
"Жемчужный",
"Жердева",
"Живописная",
"Живописный",
"Жигулевская",
"Жигулевский",
"Житная",
"Житомирская",
"Жуковского",
"Журавлиная",
"Забайкальская",
"Заводская",
"Заводской",
"Загородный",
"Загородняя",
"Заозерная",
"Заозерный",
"Западная",
"Западный",
"Запорожская",
"Запорожский",
"Запорожское шоссе",
"Заречная",
"Заслонова",
"Защитников Украины",
"Звездная",
"Звездный",
"Звенигородская",
"Звенигородский",
"Звонкая",
"Зеленая",
"Зеленогорская",
"Зеленогорский",
"Зеленстрой",
"Зеленый",
"Зелинского",
"Земляничная",
"Земнухова",
"Земская",
"Земской",
"Зенитный",
"Зеркальная",
"Зинцевая Балка",
"Зинцевый",
"Знаменская",
"Знаменский",
"Зои Космодемьянской",
"Зоологическая",
"Зоологический",
"Зори",
"Зуевская",
"Зуевские бараки",
"Зуевский",
"Ивана Франко",
"Ивановская",
"Измайловская",
"Измайловский",
"Изотова",
"Изумрудный",
"Ильичевская",
"Индустриальная",
"Инжирная",
"Институтская",
"Институтский",
"Интернациональная",
"Иртышская",
"Иртышский",
"Истомина",
"Историческая",
"Итальянская",
"Кавказская",
"Кавказский",
"Казанцева",
"Казацкая",
"Казацкий",
"Калиновая",
"Калиновый",
"Калиновского",
"Калужская",
"Калужский",
"Кальмиусская",
"Кальмиусский",
"Кальчанская",
"Кальчанский",
"Каменный карьер",
"Каменская",
"Каменский",
"Камышовая",
"Каневский",
"Карасевская",
"Каретный",
"Кармалюка",
"Карпинского",
"Карпова",
"Карьерная",
"Касаткина",
"Каспийский",
"Каффайская",
"Каховского",
"Каштановый",
"Квартальная",
"Кедровая",
"Керченская",
"Кибальчича",
"Киевская",
"Киевский",
"Кизирова",
"Кирпичная",
"Кирпичный",
"Кирпичный Карьер",
"Кисса",
"Кишиневская",
"Кишиневский",
"Клары Цеткин",
"Кленовая",
"Кленовая Балка",
"Кленовый",
"Клименко",
"Клиновая",
"Клубная",
"Клубничная",
"Ключевая",
"Ключевой",
"Кобзаря",
"Коксохимиков",
"Колбасьева",
"Коллекторная",
"Колодезная",
"Колхозный",
"Кольцевая",
"Кондрашкина",
"Конечный",
"Консервная",
"Конституции",
"Контрольная",
"Кооперативная",
"Коперника",
"Корабельный",
"Короленко",
"Короткая",
"Короткий",
"Космическая",
"Космический",
"Косогорная",
"Котанова",
"Котельникова",
"Котляревского",
"Коцюбинского",
"Кравченко",
"Крайняя",
"Краматорская",
"Крановая",
"Крановый",
"Красная",
"Красномаякская",
"Красномаякский",
"Краснофлотский",
"Красные горки",
"Красный",
"Кренкеля",
"Крепостной",
"Кречетова",
"Криничная",
"Кристальная",
"Кронштадтская",
"Крылова",
"Крымская",
"Кубанский",
"Кузбасская",
"Кузбасский",
"Кузнечная",
"Кузнечный",
"Куинджи",
"Кулибина",
"Куликовский",
"Купоросная",
"Купоросный",
"Куприна",
"Курако",
"Курганная",
"Курортный",
"Курская",
"Курчатова",
"Кутузова",
"Кушнаренко генерала",
"Лавицкого",
"Лавровая",
"Ладыгина",
"Лазарева",
"Лазурная",
"Лазурный",
"Ландшафтная",
"Ландшафтный",
"Ласкова",
"Латышева",
"Леваневского",
"Левитана",
"Левицкого",
"Левобережная",
"Левобережный",
"Левченко",
"Ленская",
"Ленточный",
"Лепорского",
"Лермонтова",
"Леси Украинки",
"Лесная",
"Летная",
"Лечебный",
"Лизы Чайкиной",
"Линника",
"Литвиненко",
"Литейная",
"Литературная",
"Литературный",
"Лобачевского",
"Лодочный",
"Лозовая",
"Локомотивная",
"Ломизова",
"Ломоносова",
"Лоцманская",
"Лоцманский",
"Луганская",
"Луганский",
"Луговая",
"Луговой",
"Лунина площадь",
"Лунина",
"Лунная",
"Лунный",
"Лута",
"Лухманова",
"Лучевая",
"Лучевой",
"Лучистая",
"Лысенко",
"Льва Яруцкого",
"Львовская",
"Львовский",
"Магистральная",
"Майская",
"Макара Мазая",
"Макаренко",
"Макарова",
"Макеевская",
"Малиновая",
"Малоазовская",
"Малоазовский",
"Малофонтанная",
"Малофонтанный",
"Малоштурманский",
"Малый",
"Мамина-Сибиряка",
"Мариупольская",
"Маркелова",
"Мартеновская",
"Мартыненко Александра",
"Марьинская",
"Марьинская балка",
"Матросова",
"Матросская",
"Мацука",
"Мачнева",
"Машиностроителей",
"Машиностроительная",
"Маяковского",
"Международная",
"Междуреченская",
"Межевая",
"Межевой",
"Мелиоративная",
"Мелитопольская",
"Менделеева",
"Меотиды",
"Мерзляка",
"Металлургическая",
"Металлургический",
"Металлургов",
"Миклухо-Маклая",
"Минина",
"Минский",
"Мира",
"Миргородская",
"Миргородский",
"Митрополитская",
"Миусская",
"Михаила Грушевского",
"Мицкевича",
"Мичмана Павлова",
"Мичурина",
"Модельная",
"Можайского",
"Молодежная",
"Молонова",
"Монтажная",
"Морская",
"Морских Десантников",
"Морской",
"Московская",
"Московский",
"Моторная",
"Моторный",
"Моцарта",
"Мурманская",
"Мусоргского",
"МЮДа",
"Набережная",
"Нагорная",
"Надгорная",
"Надгорный",
"Надежды",
"Напорная",
"Напорный",
"Нарвский",
"Народная",
"Народный",
"Народовольческая",
"Нахимова",
"Невская",
"Нежинская",
"Нежинский",
"Независимости",
"Некрасова",
"Немировича-Данченко",
"Немченко",
"Нестерова",
"Нефедова",
"Нефтебаза",
"Нижние Аджахи",
"Нижняя",
"Нижняя Кольцевая",
"Никитина",
"Николаевская",
"Никольская",
"Никопольский",
"Никулина",
"Нильсена архитектора",
"Новака",
"Новая Жизнь",
"Новгородский",
"Новоблоковый",
"Нововосточная",
"Нововосточный",
"Новозеленая",
"Новороссийская",
"Новороссийский",
"Новоселов",
"Новосельская",
"Новосельский",
"Новосибирская",
"Новосибирский",
"Новостепная",
"Новостепной",
"Новотрубная",
"Новоукраинская",
"Новый",
"Облепиховая",
"Овальная",
"Овражная",
"Огородная",
"Одесская",
"Озера Хасан",
"Октябрьская",
"Олега Кошевого",
"Олимпийская",
"Олимпийский",
"Ольшанского",
"Опытный",
"Ореховая",
"Орловская",
"Орловский",
"Орсовская",
"Освобождения",
"Осипенко",
"Островского",
"Отечественная",
"Отечественный",
"Открытая",
"Отрадная",
"Отрадный",
"Охотничий",
"Охотничья",
"Очаковская",
"Очаковский",
"Павла Гражданского",
"Павлова",
"Павловская",
"Панаса Мирного",
"Панфилова",
"Параллельная",
"Параллельный",
"Парашютная",
"Парашютный",
"Парижской коммуны",
"Парковая",
"Парковый",
"Парниковый",
"Паровозная",
"Партизанская",
"Партизанский",
"Парусная",
"Парусный",
"Пархоменко",
"Пашковского",
"Пейзажная",
"Пейзажный",
"Первая Слободка",
"Первомайская",
"Первомайский",
"Первоцветная",
"Перекопская",
"Перекопский",
"Переходная",
"Персиковая",
"Пестеля",
"Песчаный",
"Пилотов",
"Пионера Балабухи",
"Писарева",
"Плановая",
"Плановый",
"Плеханова",
"Плотинная",
"Пляжный",
"Победная",
"Победы",
"Поворотный",
"Пограничная",
"Пограничный",
"Подгорная",
"Подгорный",
"Подлесная",
"Подольский",
"Подольская",
"Подснежная",
"Подснежный",
"Подъемный",
"Пожарского",
"Покровская",
"Покрышкина",
"Полевая",
"Полетаева",
"Ползунова",
"Полтавская",
"Полтавский",
"Полярная",
"Попова",
"Поповича",
"Почтовая",
"Почтовый",
"Правды",
"Правобережный",
"Правобережная",
"Правобережная",
"Правды",
"Праздничная",
"Преображенская",
"Преображенский",
"Пржевальского",
"Приазовская",
"Приазовский",
"Прибрежная",
"Привальный",
"Привольная",
"Привольный",
"Придорожная",
"Придорожный",
"Прилежная",
"Приморская",
"Приморский",
"Прогрессивная",
"Проектная",
"Проектный",
"Прожекторная",
"Производственный",
"Прокатный",
"Прокатчиков",
"Пролетарская",
"Промышленный",
"Просвещения",
"Просторная",
"Профсоюзная",
"Профсоюзная",
"Проходная",
"Прямой",
"Пугачева",
"Пузырева",
"Пулковская",
"Пулковский",
"Пушкина",
"Пшеничная",
"Пятая",
"Рабочая остановка",
"Равнинная",
"Радиаторная",
"Радиаторный",
"Радина",
"Радищева",
"Радужная",
"Раздольная",
"Разина",
"Ракетная",
"Ракетный",
"Резервуарная",
"Реконструктивная",
"Рельефная",
"Рельсовый",
"Ремесленная",
"Репина",
"Речная",
"Рижская",
"Рижский",
"Римского-Корсакова",
"Ровенская",
"Ровенский",
"Ровная",
"Ровный",
"Родниковая",
"Родниковый",
"Рождественская",
"Рождественский",
"Розовая",
"Рокадная",
"Рокадный",
"Ромашковая",
"Ростовская",
"Рубиновая",
"Рубиновый",
"Рулевая",
"Русанова",
"Ручейная",
"Рыбацкая",
"Рыбацкий",
"Рыбная",
"Рылеева",
"Рябиновая",
"Рябиновый",
"Саврасова",
"Савчука",
"Садковый",
"Садовая",
"Садовый",
"Саенко",
"Сакко и Ванцетти",
"Саксаганского",
"Салтыкова-Щедрина",
"Самарский",
"Самолетная",
"Санаторная",
"Сартанский",
"Сварщиков",
"Светлая",
"Светлый",
"Свободы",
"Святого Игнатия",
"Севастопольская",
"Северная",
"Северный",
"Седова",
"Сельская",
"Сельскохозяйственная",
"Сельстроевская",
"Семафорная",
"Семафорный",
"Семашко",
"Семейная",
"Семененко",
"Семенишина",
"Семеренко",
"Сенная",
"Сенявина",
"Серафимовича",
"Серова",
"Сечевых стрельцов",
"Сеченова",
"Сибирская",
"Сивашская",
"Симферопольская",
"Сиреневая",
"Славянская",
"Славянский",
"Слесарная",
"Сливовая",
"Сливовый",
"Слободской",
"Смородиновая",
"Соборная",
"Советская",
"Совхозная",
"Совхозный",
"Солдатская",
"Солдатский",
"Солидарности",
"Солнечная",
"Солнечный",
"Соловьиная",
"Соловьиный",
"Сормовская",
"Сорочинская",
"Сорочинский",
"Сосновая",
"Софьи Ковалевской",
"Софьи Перовской",
"Социальная",
"Социальный",
"Спартаковская",
"Спартаковский",
"Спасская",
"Спортивная",
"Спортивный",
"Стадионная",
"Стадионный",
"Сталеварная",
"Стальского",
"Станиславского",
"Станционная",
"Станционный",
"Станюковича",
"Старая пристань",
"Старокрымская",
"Старокрымское шоссе",
"Стахановская",
"Степная",
"Степной",
"Сторожевой",
"Страхова",
"Стрелковый",
"Строительный",
"Строителей",
"Строительная",
"Студенческий",
"Суворова",
"Сумская",
"Сумской",
"Сурикова",
"Сусанина",
"Счастливый",
"Сычева",
"Таврийская",
"Таганрогская",
"Таганрогский",
"Талалихина",
"Танковый",
"Тарасова",
"Татищева",
"Театральная",
"Тенистая",
"Тенистый",
"Теннисная",
"Теннисный",
"Тепличная",
"Тепличный",
"Террасная",
"Терновая",
"Терновый",
"Тесленко",
"Тимирязева",
"Титова",
"Тихий",
"Тищенко Богдана",
"Ткачева",
"Ткаченко-Петренко",
"Токарева",
"Токарная",
"Толстого",
"Тополиная",
"Торговая",
"Торговый",
"Тракторная",
"Трамвайная",
"Трамвайный",
"Транспортная",
"Транспортный",
"Трипольская",
"Трипольский",
"Троицкая",
"Трудовая",
"Трудовой",
"Тульская",
"Тульский",
"Туннельный",
"Тургенева",
"Тыквенная",
"Ударная",
"Узловой",
"Украинская",
"Украинский",
"Украинского казачества",
"Университетская",
"Уральская",
"Уральский",
"Урожайная",
"Урожайный",
"Успенская",
"Успешная",
"Успешный",
"Уссурийская",
"Ухтомского",
"Учебный",
"Ушакова",
"Уютная",
"Уютный",
"Февральская",
"Февральский",
"Федорова",
"Фиалковая",
"Филатова",
"Филиппа Орлика",
"Флотская",
"Фонтанная",
"Фруктовая",
"Фруктовый",
"Фурманова",
"Халхингольская",
"Харлампиевская",
"Харьковская",
"Химический",
"Хортицкий",
"Цветная",
"Цветной",
"Цветочная",
"Цветочный",
"Целинный",
"Центральная",
"Центральный",
"Циолковского",
"Цирковый",
"Цыбулько",
"Чайковского",
"Частная",
"Челюскинцев",
"Челябинская",
"Черепановых",
"Черешневая",
"Черненко",
"Черноморская",
"Черноморский",
"Чернышевского",
"Черняка",
"Черняховского",
"Чехова",
"Чигорина",
"Чкалова",
"Чукарина",
"Шалая",
"Шахтерская",
"Шевцовой",
"Шевченко",
"Шейко",
"Шекспира",
"Шепотиленко",
"Шепотинника",
"Шестакова",
"Шеховцова",
"Ширшова",
"Школьная",
"Школьный",
"Шлаковый",
"Шмидта Гавань",
"Шопена",
"Шота Руставели",
"Штурманская",
"Энергетическая",
"Энергетический",
"Юлаева",
"Южная",
"Южный",
"Юнговская",
"Юпитерская",
"Яблоневая",
"Ягодная",
"Якова Гугеля",
"Якорная",
"Ялтинская",
"Ялтинский",
"Январская",
"Январский",
"Янтарный",
"Ярослава Мудрого",
"Ярослава Галана",
"Ярославский",
"Яснополянская",
"Ясный"]