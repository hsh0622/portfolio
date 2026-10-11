import { useState } from 'react'
import './App.css'

type Project = {
  id: string
  index: string
  category: string
  title: string
  team: string
  period: string
  overview: string[]
  tech: string[]
  features: string[]
  tasks: string[]
  images: string[]
  frameType: 'phone' | 'desktop'
  tone: 'blue' | 'charcoal' | 'purple'
}

const projects: Project[] = [
  {
    id: 'eolma', index: '01', category: '모임 기반 소비·정산 서비스', title: '얼마',
    team: 'Web 4명, Server 3명, AI 1명 (총 7명)', period: '2025.07 ~',
    overview: [
      '친구·모임에서 발생한 소비를 그룹 단위로 관리하고, 참여자별 정산부터 송금까지 연결하는 모바일 서비스입니다.',
      '일반 더치페이와 영수증 품목 정산을 지원하며, 계좌 연동·푸시 알림·AI 비서를 통해 정산 과정을 간편하게 만들었습니다.',
    ],
    tech: ['TypeScript', 'React Native', 'Expo SDK 57', 'Zustand', 'TanStack Query', 'MMKV', 'EAS Build'],
    features: ['그룹 생성·초대 및 그룹별 정산 내역 관리', '더치페이와 영수증 품목별 정산 지원', 'OCR 기반 영수증 정보 자동 인식 및 수정', '계좌 연결·소비 내역 조회·송금 안내', '정산 독촉 알림 및 AI 비서 제공'],
    tasks: ['FSD 구조와 공통 디자인 시스템 구축', '로그인·회원가입·계좌 연동 기능 구현', '영수증 촬영 및 OCR 정산 플로우 구현', '참여자별 정산 금액 계산 및 송금 안내 구현', '푸시 알림·딥링크·앱 잠금 기능 구현'],
    images: ['/assets/eolma-01.svg', '/assets/eolma-02.svg', '/assets/eolma-03.svg', '/assets/eolma-04.svg', '/assets/eolma-05.svg'], frameType: 'phone', tone: 'blue',
  },
  {
    id: 'clash', index: '02', category: '전공 공부 경쟁 서비스', title: 'Clash',
    team: 'Client 4명, Server 3명, Design 2명 (총 8명)', period: '2025.07 ~',
    overview: [
      'Clash는 전공이 정해지지 않은 학생들을 위해 전공 테스트를 통해 적합한 전공을 추천하고, 그에 맞는 학습형 로드맵을 제공하는 서비스입니다. 또한 실시간 학습 시간을 기록해 경쟁자와 비교할 수 있으며, 랭킹 시스템을 통해 학습 동기를 높일 수 있도록 설계되었습니다.',
    ],
    tech: ['Javascript', 'React', 'TypeScript', 'Zustand', 'React Query', 'Styled-Components', 'Electron'],
    features: ['전공 테스트를 통해 적합한 전공을 추천하고, 개인 맞춤형 학습 로드맵 제공', '실시간 개발 활동을 감지해 학습 시간을 자동 기록하고 시각화', '어제 대비 학습 시간 및 Contributions 비교 분석 기능 제공', '라이벌 추가 기능을 통해 실시간 학습 시간 경쟁 시스템 제공', '학교 내 랭킹 시스템을 통해 점수 기반 경쟁 및 동기부여 환경 조성', '월별 활동 변화 그래프 및 통계 데이터를 통한 자기 분석 기능 제공'],
    tasks: ['전공 테스트를 통해 사용자가 전공을 선택할 수 있는 기능 기획 및 구현', '선택한 전공에 맞춘 학습형 로드맵 전체 구조(섹션–챕터–미션) 설계 및 개발', '챕터 페이지 구성 및 단계별 미션 시스템 구현', '퀴즈 기반 통과 로직을 적용해 학습 단계별 진행 제어 기능 개발', '챕터 랭킹 시스템 구현을 통해 학습 경쟁 요소 강화'],
    images: ['/assets/clash-01.svg', '/assets/clash-02.svg'], frameType: 'desktop', tone: 'charcoal',
  },
  {
    id: 'devit', index: '03', category: '개발자와 의뢰인을 이어주는 서비스', title: 'Devit',
    team: 'Frontend 2명, Backend 4명, Design 2명', period: '2025.07 ~',
    overview: [
      'Devit은 숨고처럼 재능을 거래하는 플랫폼이지만, 개발자만을 위한 전문 서비스입니다.',
      '기존 플랫폼에서 거래가 잘 이루어지지 않는 문제를 해결하고, 개발자와 의뢰인 모두가 효율적으로 연결될 수 있는 공간을 만들고자 했습니다.',
    ],
    tech: ['Javascript', 'React', 'Styled-Components', 'Figma'],
    features: ['기획자가 개발자를 선택하여 협업하는 기능 제공', '채팅 중 바로 프로젝트를 생성하고 초대할 수 있는 협업 기능 제공', '프로젝트별 업무 제출 및 관리 기능으로 효율적인 진행 지원', '온도 시스템을 통해 상대의 신뢰도와 평판을 한눈에 확인 가능', '프로젝트와 관련된 정보를 확인하고 협업 진행 상황을 관리하는 기능 제공'],
    tasks: ['개발자와 의뢰인을 연결하는 Devit 서비스의 전체 기획 및 화면 구조 설계', 'React.js를 활용한 프론트엔드 개발 및 주요 기능 구현', '서비스에 어울리는 UI/UX 콘셉트 설정과 화면 시안 제작', '팀 내 기획–디자인–개발 간 협업을 통한 효율적인 서비스 제작 프로세스 구축', '주요 페이지의 컴포넌트를 구성하고 재사용 가능한 UI 설계', '사용자 흐름을 고려하여 페이지 간 이동 및 화면 구성을 설계'],
    images: ['/assets/devit-01.svg', '/assets/devit-02.svg'], frameType: 'desktop', tone: 'purple',
  },
]

const skills = {
  프론트엔드: ['Javascript', 'React', 'TypeScript', 'Styled Components', 'Electron', 'Zustand', 'Tailwind CSS', 'React Native'],
  백엔드: ['Python', 'Java', 'MySQL'],
  디자인: ['Figma'],
}

const courses = ['프로그래밍(파이썬, 웹 프로그래밍 기초, 자바, 웹 프로그래밍)', '인공지능 기초', '컴퓨터 시스템 일반', '자료구조', '데이터베이스', '시스템 관리 및 지원', '소프트웨어공학 실무']

const activities = [
  ['Louter 동아리 가입', '2025.04'], ['꿈 포트폴리오 대회(장려상)', '2025.05'], ['노벨 엔지니어링 교내 해커톤', '2025.07'],
  ['여름방학 전공역량 강화 캠프(리액트 기초)', '2025.07'], ['U/THON 25', '2025.07'], ['창업아이디어 경진대회', '2025.07 ~ 2025.08'],
  ['Inflab 기업탐방', '2025.12'], ['교내 나르샤 프로젝트', '2025.07 ~ 2026.01'], ['겨울방학 전공역량 강화 캠프(Clash 프로젝트)', '2026.01'],
  ['ALT 동아리 가입', '2025.04'], ['꿈 포트폴리오 대회(입상)', '2026.05'],
]

function ArrowIcon() { return <span aria-hidden="true" className="arrow-icon">↗</span> }

function App() {
  const [activeProject, setActiveProject] = useState('eolma')
  const selectedProject = projects.find((project) => project.id === activeProject) ?? projects[0]
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <main>
      <nav className="site-nav" aria-label="주요 메뉴">
        <a href="#top" className="brand" aria-label="한승환 포트폴리오 홈">HS<span className="brand-dot">.</span></a>
        <div className="nav-links"><button onClick={() => scrollTo('profile')}>프로필</button><button onClick={() => scrollTo('work')}>대표 프로젝트</button><button onClick={() => scrollTo('archive')}>수상 및 활동</button></div>
        <a className="nav-contact" href="mailto:8064hsh@gmail.com">Email <ArrowIcon /></a>
      </nav>

      <section className="hero-section" id="top">
        <div className="hero-copy"><p className="kicker">Frontend Developer</p><h1>메인에 머지되기 위해<br /><em>성장하는</em> 개발자</h1><div className="hero-contact"><strong>한승환</strong><span>Email&nbsp;&nbsp; 8064hsh@gmail.com</span><span>Github&nbsp;&nbsp; hsh0622</span><span>Tel&nbsp;&nbsp; 010-5787-8064</span></div><div className="hero-actions"><button className="button button-dark" onClick={() => scrollTo('work')}>대표 프로젝트 <ArrowIcon /></button><a className="text-link" href="mailto:8064hsh@gmail.com">Email <ArrowIcon /></a></div></div>
        <div className="hero-meta"><span>Frontend Developer</span><span>2025.03 —</span></div>
      </section>

      <section className="about-section section-shell" id="profile"><div className="section-label"><span>01</span><span>Frontend Developer</span></div><div className="about-grid"><div><h2>메인에 머지되기 위해<br /><span>성장하는 개발자</span></h2></div><div className="about-body"><p className="lead">팀원들과 부딪힘 없이 잘 어우러지며 함께 나아가고자 하는 프론트엔드 개발자입니다.</p><p>아이디어를 UI로 구현하고, 작은 디테일로 서비스의 완성도를 높입니다.</p><p>팀이라는 메인에 머지되듯이 팀에 긍정적인 에너지를 더하며 단단하게 성장하고 있습니다.</p></div></div></section>

      <section className="skills-section section-shell"><div className="section-label"><span>02</span><span>기술 스택</span></div><div className="skills-layout"><h2>기술<br /><span>스택</span></h2><div className="skill-groups">{Object.entries(skills).map(([group, items]) => <div className="skill-row" key={group}><h3>{group}</h3><div className="chip-list">{items.map((skill) => <span className={skill === 'React' || skill === 'TypeScript' ? 'chip chip-accent' : 'chip'} key={skill}>{skill}</span>)}</div></div>)}</div></div><div className="education-layout"><div><p className="eyebrow">학력</p><h3>대구소프트웨어마이스터고등학교 재학</h3><time>2025.03 ~</time></div><div><p className="eyebrow">이수 전공 과목</p><ul className="course-list">{courses.map((course) => <li key={course}>{course}</li>)}</ul></div></div></section>

      <section className="work-section section-shell" id="work"><div className="section-label"><span>03</span><span>대표 프로젝트</span></div><div className="work-heading"><h2>대표<br /><span>프로젝트</span></h2></div><div className="project-tabs" role="tablist" aria-label="대표 프로젝트 선택">{projects.map((project) => <button role="tab" aria-selected={activeProject === project.id} className={activeProject === project.id ? 'project-tab active' : 'project-tab'} onClick={() => setActiveProject(project.id)} key={project.id}><span>{project.index}</span>{project.title}</button>)}</div>
        <article className={`project-detail tone-${selectedProject.tone}`}><div className="project-topline"><span>{selectedProject.category}</span><span>{selectedProject.period}</span></div><div className="project-main"><div className="project-intro"><p className="project-number">{selectedProject.index} / 03</p><h3>{selectedProject.title}</h3><p className="project-team">{selectedProject.team}</p><div className="project-overview"><h4>개요</h4>{selectedProject.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="project-block"><h4>기술 스택</h4><div className="chip-list project-tags">{selectedProject.tech.map((tag) => <span className="chip" key={tag}>{tag}</span>)}</div></div></div><div className={`project-gallery ${selectedProject.frameType}`}>{selectedProject.images.map((image, index) => <div className="project-image-frame" key={image}><img src={image} alt={`${selectedProject.title} 서비스 화면 ${index + 1}`} onError={(event) => { event.currentTarget.style.display = 'none' }} /><div className="image-fallback"><p>프로젝트 이미지<br /><small>{image}</small></p></div></div>)}</div></div><div className="project-bottom"><div className="project-block"><h4>주요 기능</h4><ul>{selectedProject.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div><div className="project-block"><h4>주요 업무</h4><ul>{selectedProject.tasks.map((task) => <li key={task}>{task}</li>)}</ul></div></div></article>
      </section>

      <section className="archive-section section-shell" id="archive"><div className="section-label"><span>04</span><span>수상 및 활동</span></div><div className="archive-grid"><div><h2>수상 및<br /><span>활동</span></h2></div><div className="timeline">{activities.map(([activity, date]) => <div className="timeline-item" key={activity}><span>{activity}</span><time>{date}</time></div>)}</div></div><div className="certificate-row"><div><p className="eyebrow">자격증</p><h3>정보처리기능사 <small>필기</small></h3></div></div></section>

      <footer className="site-footer section-shell"><div className="footer-top"><p className="footer-kicker">Frontend Developer</p><h2>한승환<span>.</span></h2><div className="footer-contact"><span>Email&nbsp;&nbsp; 8064hsh@gmail.com</span><span>Github&nbsp;&nbsp; hsh0622</span><span>Tel&nbsp;&nbsp; 010-5787-8064</span></div><a className="button button-light" href="mailto:8064hsh@gmail.com">Email <ArrowIcon /></a></div><div className="footer-bottom"><span>Frontend Developer · 한승환</span><div><a href="mailto:8064hsh@gmail.com">8064hsh@gmail.com</a><a href="https://github.com/hsh0622" target="_blank" rel="noreferrer">hsh0622 ↗</a></div></div></footer>
    </main>
  )
}

export default App
