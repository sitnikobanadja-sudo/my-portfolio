import React, { useState } from 'react';
import './App.css';

function App() {
  // Состояния
  const [modalOpen, setModalOpen] = useState(false);
  const [currentJob, setCurrentJob] = useState(null);
  const [openSections, setOpenSections] = useState({});

 //Баннер
  const myData = {
    name: "Ситникова Надежда Геннадьевна",
    job: "Тестировщик / QA Engineer",
    about: "QA-инженер с опытом тестирования веб и мобильных приложений.Имею практический опыт работы в FinTech и GameDev проектах. Внимательна к деталям, ответственно подхожу к задачам, умею работать в команде. Готова к освоению новых инструментов и технологий.",
    details: [
      { title: "Возраст", value: "31 год" },
      { title: "Город", value: "Воронеж" },
      { title: "Формат работы", value: "Удалённо, гибрид" }

    ]
  };

  // Работа
  const workExperience = [
    {
      id: 1,
      company: "ЮНИСТРИМ БАНК",
      dates: "Июнь 2024 — Январь 2025 (8 месяцев)",
      position: "Инженер по тестированию ПО",
      short: "Тестирование платежных операций и сервисов СБП",
      long: `Основные обязанности и достижения:
• Тестирование банковской платежной экосистемы и операций СБП
• Валидация финансовых параметров: комиссии, лимиты, корректность расчетов
• Тестирование процессов по виртуальным картам Kwikpay
• Функциональное тестирование мобильных приложений iOS и Android
• Тестирование веб-интерфейсов: PWA и web версии
• Интеграционное тестирование с госсервисами: ЕПГУ, СМЭВ и DaData
• API-тестирование, работа с инструментами Kibana, Postman, SQL`,
      tools: ["Postman", "Swagger", "Kibana", "SQL", "Jira", "Redmine", "REST API", "iOS", "Android", "PWA"]
    },
    {
      id: 2,
      company: "DominiGames",
      dates: "Январь 2023 — Апрель 2024 (1 год 4 месяца)",
      position: "QA Middle",
      short: "Тестирование мобильных игр и приложений",
      long: `Основные обязанности и достижения:
• Обеспечила успешный выпуск в App Store и Google Play 14 мобильных игр и оболочки с играми
• Реализовала в Postman библиотеку GraphQL-запросов с автоматизированными скриптами валидации ответов
• Выстроила процесс проверки аналитических событий (events) через Firebase, минимизировав потери данных при релизах
• Проводила тестирование Mobile (iOS/Android): функциональное, регрессионное и интеграционное тестирование игр и приложений`,
      tools: ["Postman", "GraphQL", "Firebase", "ADB", "Android Studio", "Bitrix24", "Trello", "iOS", "Android"]
    }
  ];

  // Образование
  const educationList = [
    {
      id: 1,
      name: "ВИВТ.Воронежский институт высоких технологий.",
      info: "Информационные системы и технологии, Бакалавр, Заочная, В процессе обучения"
    },
    {
      id: 2,
      name: "ГОБПОУ 'Усманский промышленно-технологический колледж'",
      info: "Право и организация социального обеспечения, Юрист, Очная, 2015"
    }
  ];

  const coursesList = [
    {
      id: 1,
      name: "Ручное тестирование - GeekBrains",
      info: "GeekBrains, 2023"
    },
    {
    id: 2,
    name: "Автоматизация тестирования на Java",
    info: "RedRover.school, 2025"
    }
  ];

  // Контакты
  const contactList = [
    { id: 1, type: "Телефон", value: "+7 (930) 425-17-58", link: "tel:+79304251758", icon: "📱" },
    { id: 2, type: "Telegram", value: "@Hope_vrn_94", link: "https://t.me/Hope_vrn_94", icon: "✈️" },
    { id: 3, type: "Email", value: "nadezhda.sitnikova94@yandex.ru", link: "mailto:nadezhda.sitnikova94@yandex.ru", icon: "📧" }
  ];

  // Обработчики
  const showJobDetails = (job) => {
    setCurrentJob(job);
    setModalOpen(true);
      // скролл
    document.body.style.overflow = 'hidden';
  };

  const hideModal = () => {
    setModalOpen(false);
    setCurrentJob(null);
    document.body.style.overflow = 'auto';
  };

  // Переключатель для образования/курсов
  const toggleSection = (type, id) => {
    const key = `${type}-${id}`;
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  // Рендер инструментов
  const renderTools = (tools, limit) => {
    const showTools = limit ? tools.slice(0, limit) : tools;
    return showTools.map((tool, i) => (
      <span key={i} className="tool-tag">{tool}</span>
    ));
  };

  // Главный рендер
  return (
    <div className="app">
      {/* Шапка сайта */}
      <header className="header">
        <div className="header-content">
          <div className="logo">НС</div>
          <div className="nav">
            <a href="#experience">Опыт работы</a>
            <a href="#education">Образование</a>
            <a href="#contacts">Контакты</a>
          </div>
        </div>
      </header>

      {/* Основная часть */}
      <main className="main-content">

        {/* Обо мне секция */}
        <section className="hero-section">
          <div className="hero-container">
            {/* Фото */}
            <div className="hero-photo">
              <div className="photo-frame">
                <img
                  src="/images/myPhoto.jpg"
                  alt="Фото"
                  className="photo"
                  onError={(e) => {
                    // Простая обработка ошибки загрузки фото
                    e.target.style.display = 'none';
                    const parent = e.target.parentElement;
                    parent.innerHTML = '<div class="photo-placeholder">Фото</div>';
                  }}
                />
              </div>
            </div>

            {/* Информация */}
            <div className="hero-info">
              <h1 className="hero-name">{myData.name}</h1>
              <h2 className="hero-position">{myData.job}</h2>
              <p className="hero-description">{myData.about}</p>

              {/* Детали */}
              <div className="hero-details">
                {myData.details.map((item, index) => (
                  <div key={index} className="detail-item">
                    <span className="detail-label">{item.title}:</span>
                    <span className="detail-value">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Опыт работы */}
        <section id="experience" className="experience-section">
          <div className="section-title">
            <h2>Опыт работы</h2>
            <p>Нажмите на карточку для подробной информации</p>
          </div>

          <div className="experience-grid">
            {workExperience.map((job) => (
              <div
                key={job.id}
                className="experience-card"
                onClick={() => showJobDetails(job)}
              >
                <div className="card-header">
                  <h3 className="company-name">{job.company}</h3>
                  <span className="work-period">{job.dates}</span>
                </div>

                <div className="card-body">
                  <h4 className="job-title">{job.position}</h4>
                  <p className="job-short">{job.short}</p>

                  <div className="tools-section">
                    <h5>Основные инструменты:</h5>
                    <div className="tools-grid">
                      {renderTools(job.tools, 6)}
                      {job.tools.length > 6 && (
                        <span className="more-tools">+{job.tools.length - 6} ещё</span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <button className="details-btn">
                    Подробнее →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Образование и курсы */}
        <section id="education" className="education-section">
          <div className="section-title">
            <h2>Образование и курсы</h2>
          </div>

          <div className="accordion-container">
            {/* Образование */}
            <div className="accordion-section">
              <h3>Образование</h3>
              {educationList.map((edu) => {
                const isOpen = openSections[`edu-${edu.id}`];
                return (
                  <div key={edu.id} className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleSection('edu', edu.id)}
                    >
                      <h4>{edu.name}</h4>
                      <span className="accordion-icon">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="accordion-content">
                        <div className="accordion-details">
                          {edu.info.split(', ').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Курсы */}
            <div className="accordion-section">
              <h3>Курсы</h3>
              {coursesList.map((course) => {
                const isOpen = openSections[`course-${course.id}`];
                return (
                  <div key={course.id} className="accordion-item">
                    <div
                      className="accordion-header"
                      onClick={() => toggleSection('course', course.id)}
                    >
                      <h4>{course.name}</h4>
                      <span className="accordion-icon">
                        {isOpen ? '−' : '+'}
                      </span>
                    </div>
                    {isOpen && (
                      <div className="accordion-content">
                        <div className="accordion-details">
                          {course.info.split(', ').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Контакты */}
        <section id="contacts" className="contacts-section">
          <div className="contacts-strip">
            {contactList.map((contact) => (
              <a
                key={contact.id}
                href={contact.link}
                className="contact-item"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-icon">{contact.icon}</span>
                <div className="contact-text">
                  <span className="contact-type">{contact.type}</span>
                  <span className="contact-value">{contact.value}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

      </main>

      {/* Подвал */}
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Надежда Ситникова. Сайт-резюме</p>
        </div>
      </footer>

      {/* Модальное окно для деталей работы */}
      {modalOpen && currentJob && (
        <div className="modal-overlay" onClick={hideModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={hideModal}>×</button>

            <div className="modal-header">
              <h3>{currentJob.position}</h3>
              <div className="modal-subtitle">
                <span className="modal-company">{currentJob.company}</span>
                <span className="modal-period">{currentJob.dates}</span>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-description">
                {currentJob.long.split('\n').map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="modal-tools">
                <h4>Используемые технологии и инструменты:</h4>
                <div className="tools-list">
                  {renderTools(currentJob.tools)}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="modal-button" onClick={hideModal}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;