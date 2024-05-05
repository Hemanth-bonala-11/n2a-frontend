import "./CourseContent.scss";

export const CourseContent = () => {
  return (
    <div className="verso-dark-mode">
      <header className="navbardesktop">
        <div className="content">
          <div className="leading-content">
            <img className="logo-icon" loading="lazy" alt="" src="/logo.svg" />
          </div>
          <div className="links">
            <div className="navbarslink">
              <h3 className="text">Início</h3>
            </div>
            <button className="navbarslink1">
              <div className="link-label">Cursos</div>
            </button>
            <div className="navbarslink2">
              <h2 className="text1">Contato</h2>
            </div>
          </div>
          <div className="trailing-content">
            <div className="navbarsavatar-menu-button">
              <img className="avatar-icon" alt="" src="/avatar.svg" />
            </div>
          </div>
        </div>
      </header>
      <section className="main-content">
        <div className="page-header-parent">
          <div className="page-header">
            <div className="page-title">
              <img className="page-title-child" alt="" src="/rectangle-4.svg" />
              <h2 className="aprenda-a-programar">Aprenda a programar</h2>
            </div>
            <div className="simple-with-slashesdesktop">
              <div className="breadcrumblink">
                <div className="home">
                  <img className="icon" loading="lazy" alt="" src="/icon.svg" />
                </div>
              </div>
              <img
                className="breadcrumbseparator-icon"
                loading="lazy"
                alt=""
                src="/breadcrumbseparator.svg"
              />
              <div className="breadcrumblink1">
                <div className="text2">Cursos</div>
              </div>
              <img
                className="breadcrumbseparator-icon1"
                loading="lazy"
                alt=""
                src="/breadcrumbseparator-1.svg"
              />
              <div className="breadcrumblink2">
                <div className="text3">Aprenda a programar</div>
              </div>
            </div>
          </div>
          <div className="content-body">
            <div className="body">
              <div className="player">
                <img className="bg-icon" alt="" src="/bg.svg" />
                <div className="player-controls">
                  <div className="progress-area">
                    <div className="progress-bar">
                      <img
                        className="progress-track-icon"
                        loading="lazy"
                        alt=""
                        src="/vector.svg"
                      />
                      <img
                        className="progress-indicator-icon"
                        loading="lazy"
                        alt=""
                        src="/vector-1.svg"
                      />
                      <img
                        className="progress-track-icon1"
                        loading="lazy"
                        alt=""
                        src="/vector-2.svg"
                      />
                      <div className="time-display">
                        <div className="timestamp">01:05</div>
                      </div>
                    </div>
                  </div>
                  <div className="range-slider">
                    <div className="slider-touch-area">
                      <div className="active-bar" />
                      <div className="right-touch-area" />
                    </div>
                    <div className="default-bar">
                      <div className="default-bar1" />
                    </div>
                  </div>
                  <div className="volume-control">
                    <div className="volume-label">01:23</div>
                  </div>
                </div>
                <div className="playback-speed">
                  <div className="speed-control">
                    <div className="speed-icon">
                      <img
                        className="speed-symbol-icon"
                        loading="lazy"
                        alt=""
                        src="/vector-3.svg"
                      />
                    </div>
                    <div className="range-slider1">
                      <div className="speed-bar">
                        <div className="default-bar2" />
                        <div className="right-touch-area1" />
                      </div>
                    </div>
                  </div>
                  <div className="video-details">
                    <div className="badges">
                      <div className="badge-element">
                        <img
                          className="badge-icon"
                          loading="lazy"
                          alt=""
                          src="/vector-4.svg"
                        />
                        <div className="badge">
                          <div className="text4">HD</div>
                        </div>
                      </div>
                      <div className="detail-icon">
                        <img
                          className="detail-symbol-icon"
                          loading="lazy"
                          alt=""
                          src="/vector-5.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aulas">
                <div className="header">
                  <div className="title">
                    <div className="circle-xs">
                      <div className="progress" />
                      <div className="content1">
                        <div className="title1">25%</div>
                      </div>
                    </div>
                    <div className="time-indicator">
                      <div className="title2">Aprenda a programar</div>
                      <div className="time-display1">
                        <div className="time-elapsed">
                          <div className="elapsed-time">{`1 / 4 `}</div>
                          <div className="timer-icon">
                            <img
                              className="timer-symbol-icon"
                              loading="lazy"
                              alt=""
                              src="/vector-6.svg"
                            />
                          </div>
                        </div>
                        <div className="min">27 min</div>
                      </div>
                    </div>
                  </div>
                  <div className="collapse-icon">
                    <img
                      className="collapse-symbol-icon"
                      loading="lazy"
                      alt=""
                      src="/vector-7.svg"
                    />
                  </div>
                </div>
                <div className="content2">
                  <div className="class">
                    <img
                      className="form-fieldscheckbox-input"
                      loading="lazy"
                      alt=""
                      src="/form-fieldscheckbox-input.svg"
                    />
                    <div className="label">
                      <div className="label-parent">
                        <div className="label1">
                          <ol className="viso-geral-do-curso-desenvolv">
                            <li>Visão Geral do Curso Desenvolvimento Web</li>
                          </ol>
                        </div>
                        <div className="label2">14min</div>
                      </div>
                    </div>
                  </div>
                  <div className="class1">
                    <input className="option-input" type="checkbox" />
                    <div className="label3">
                      <ol className="repositrio-do-curso">
                        <li>Repositório do curso</li>
                      </ol>
                    </div>
                    <div className="label4">1min</div>
                  </div>
                  <div className="checkbox-options">
                    <div className="checkbox-pair">
                      <div className="input-elements">
                        <div className="form-fieldscheckbox-input1" />
                      </div>
                      <div className="label5">
                        <ol className="boas-prticas-do-suporte">
                          <li>Boas práticas do suporte</li>
                        </ol>
                      </div>
                      <div className="label6">4min</div>
                    </div>
                  </div>
                  <div className="checkbox-options1">
                    <div className="frame-parent">
                      <div className="form-fieldscheckbox-input-wrapper">
                        <div className="form-fieldscheckbox-input2" />
                      </div>
                      <div className="label7">
                        <ol className="terminais">
                          <li>Terminais</li>
                        </ol>
                      </div>
                      <div className="label8">8min</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="navstabs">
              <div className="nav-active-link">
                <input
                  className="tab-label"
                  placeholder="Descrição"
                  type="text"
                />
                <img className="house-icon" alt="" src="/house.svg" />
                <div className="badge1">
                  <div className="badge-and-tag-small">
                    <img
                      className="avatar-icon1"
                      alt=""
                      src="/avatar1@2x.png"
                    />
                    <img className="stars-icon" alt="" src="/stars.svg" />
                    <div className="placeholder">
                      <div className="status" />
                      <div className="placeholder1">9+</div>
                    </div>
                    <img
                      className="chevron-right-icon"
                      alt=""
                      src="/chevronright.svg"
                    />
                    <div className="close-icon">
                      <img className="x-lg-icon" alt="" src="/xlg.svg" />
                    </div>
                  </div>
                </div>
                <div className="border-bottom" />
              </div>
              <div className="nav-link">
                <div className="tab-content">
                  <div className="content3">
                    <div className="inline">
                      <img className="house-icon1" alt="" src="/house1.svg" />
                      <div className="placeholder2">Teams</div>
                      <div className="badge2">
                        <div className="badge-and-tag-small1">
                          <img
                            className="avatar-icon2"
                            alt=""
                            src="/avatar2@2x.png"
                          />
                          <img
                            className="stars-icon1"
                            alt=""
                            src="/stars.svg"
                          />
                          <div className="placeholder3">
                            <div className="status1" />
                            <div className="placeholder4">9+</div>
                          </div>
                          <img
                            className="chevron-right-icon1"
                            alt=""
                            src="/chevronright.svg"
                          />
                          <div className="close-icon1">
                            <img className="x-lg-icon1" alt="" src="/xlg.svg" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className="border-bottom1" />
              </div>
              <div className="nav-link-hover">
                <div className="content4">
                  <div className="inline1">
                    <img className="house-icon2" alt="" src="/house.svg" />
                    <div className="placeholder5">Projects</div>
                    <div className="badge3">
                      <div className="badge-and-tag-small2">
                        <img
                          className="avatar-icon3"
                          alt=""
                          src="/avatar1@2x.png"
                        />
                        <img className="stars-icon2" alt="" src="/stars.svg" />
                        <div className="placeholder6">
                          <div className="status2" />
                          <div className="placeholder7">3</div>
                        </div>
                        <img
                          className="chevron-right-icon2"
                          alt=""
                          src="/chevronright.svg"
                        />
                        <div className="close-icon2">
                          <img className="x-lg-icon2" alt="" src="/xlg.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="chevron-down-icon1"
                    alt=""
                    src="/chevrondown1.svg"
                  />
                </div>
                <div className="border-bottom2" />
              </div>
              <div className="nav-disabled-link">
                <div className="content5">
                  <div className="inline2">
                    <img className="house-icon3" alt="" src="/house2.svg" />
                    <div className="placeholder8">Connections</div>
                    <div className="badge4">
                      <div className="badge-and-tag-small3">
                        <img
                          className="avatar-icon4"
                          alt=""
                          src="/avatar3@2x.png"
                        />
                        <img className="stars-icon3" alt="" src="/stars.svg" />
                        <div className="placeholder9">
                          <div className="status3" />
                          <div className="placeholder10">9+</div>
                        </div>
                        <img
                          className="chevron-right-icon3"
                          alt=""
                          src="/chevronright.svg"
                        />
                        <div className="close-icon3">
                          <img className="x-lg-icon3" alt="" src="/xlg.svg" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className="chevron-down-icon2"
                    alt=""
                    src="/chevrondown2.svg"
                  />
                </div>
                <div className="border-bottom3" />
              </div>
            </div>
            <footer className="esse-curso-tem">
              Esse curso tem como objetivo de te dar os fundamentos da
              programação e entender um pouco mais sobre o web, precisamos desse
              conhecimento para então nos tornarmos aptos a estudar as diversas
              linguagens e tecnologias que vamos encontrar como desenvolvedores
              e desenvolvedoras web. Muito bem vamos diretos entender os
              fundamentos.
            </footer>
          </div>
        </div>
      </section>
    </div>
  );
};

