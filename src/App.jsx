import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Check, RotateCcw, X, BookOpen, Target, Menu } from 'lucide-react'
import { questions } from './data/questions'

const STORAGE_KEY = 'evidence-lab-progress-v1'
const defaultProgress = { index: 0, answers: {}, streak: 0, bestStreak: 0 }

function loadProgress() {
  try { return { ...defaultProgress, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) } }
  catch { return defaultProgress }
}

function App() {
  const [progress, setProgress] = useState(loadProgress)
  const [selected, setSelected] = useState(null)
  const [checked, setChecked] = useState(false)
  const [page, setPage] = useState('practice')
  const [menuOpen, setMenuOpen] = useState(false)
  const question = questions[progress.index]
  const answerRecord = progress.answers[question.id]

  useEffect(() => { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)) }, [progress])
  useEffect(() => {
    setSelected(answerRecord?.selected ?? null)
    setChecked(Boolean(answerRecord))
  }, [progress.index, answerRecord])

  const answered = Object.values(progress.answers)
  const correctCount = answered.filter((a) => a.correct).length
  const accuracy = answered.length ? Math.round(correctCount / answered.length * 100) : 0
  const skillStats = useMemo(() => {
    const stats = { 'Direct support': [0, 0], Relevance: [0, 0], Precision: [0, 0] }
    questions.forEach((q) => {
      const record = progress.answers[q.id]
      if (record) { stats[q.skill][1]++; if (record.correct) stats[q.skill][0]++ }
    })
    return stats
  }, [progress.answers])

  const choose = (index) => { if (!checked) setSelected(index) }
  const checkAnswer = () => {
    if (selected === null || checked) return
    const correct = selected === question.answer
    const nextStreak = correct ? progress.streak + 1 : 0
    setProgress((p) => ({
      ...p, streak: nextStreak, bestStreak: Math.max(p.bestStreak, nextStreak),
      answers: { ...p.answers, [question.id]: { selected, correct } }
    }))
    setChecked(true)
  }
  const goTo = (index) => setProgress((p) => ({ ...p, index: Math.max(0, Math.min(49, index)) }))
  const next = () => { if (progress.index < 49) goTo(progress.index + 1); else setPage('review') }
  const retry = () => { setChecked(false); setSelected(null); setProgress((p) => { const answers = { ...p.answers }; delete answers[question.id]; return { ...p, answers } }) }
  const reset = () => { if (window.confirm('Reset every answer and start again?')) { setProgress(defaultProgress); setSelected(null); setChecked(false); setPage('practice') } }

  useEffect(() => {
    const onKey = (event) => {
      if (page !== 'practice' || event.target.matches('button, a')) return
      if (/^[1-4]$/.test(event.key) && !checked) choose(Number(event.key) - 1)
      if (event.key === 'Enter') checked ? next() : checkAnswer()
      if (event.key === 'ArrowRight' && checked) next()
      if (event.key.toLowerCase() === 'r' && checked) retry()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="app-shell">
      <Header page={page} setPage={setPage} reset={reset} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {page === 'practice' && <>
        <ProgressBar index={progress.index} accuracy={accuracy} streak={progress.streak} />
        <main className="study-layout">
          <Passage question={question} reveal={checked} />
          <QuestionPanel question={question} selected={selected} checked={checked} choose={choose} checkAnswer={checkAnswer} next={next} retry={retry} />
          <SkillRail stats={skillStats} activeSkill={question.skill} checked={checked} bestStreak={progress.bestStreak} />
        </main>
        <KeyboardFooter />
      </>}
      {page === 'review' && <Review progress={progress} setPage={setPage} goTo={goTo} accuracy={accuracy} />}
      {page === 'how' && <HowItWorks setPage={setPage} />}
    </div>
  )
}

function Header({ page, setPage, reset, menuOpen, setMenuOpen }) {
  return <header className="site-header">
    <button className="brand" onClick={() => setPage('practice')} aria-label="Evidence Lab home"><span>Evidence</span> Lab</button>
    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu size={22}/></button>
    <nav className={menuOpen ? 'open' : ''} aria-label="Main navigation">
      {[['practice','Practice'], ['review','Review'], ['how','How it works']].map(([id,label]) =>
        <button key={id} className={page === id ? 'active' : ''} onClick={() => { setPage(id); setMenuOpen(false) }}>{label}</button>)}
    </nav>
    <button className="reset-button" onClick={reset}><RotateCcw size={17}/> Reset</button>
  </header>
}

function ProgressBar({ index, accuracy, streak }) {
  return <section className="progress-strip" aria-label="Session progress">
    <span>Question <strong>{String(index + 1).padStart(2,'0')} / 50</strong></span>
    <div className="progress-track"><span style={{ width: `${(index + 1) * 2}%` }}/></div>
    <div className="score-pair"><span>Accuracy <strong>{accuracy}%</strong></span><i/><span>Streak <strong>{streak}</strong></span></div>
  </section>
}

function Passage({ question, reveal }) {
  return <article className="passage-panel">
    <div className="section-label">Passage <span>{question.domain}</span></div>
    <h1>{question.title}</h1>
    <div className="passage-copy">
      {question.passage.map((line, index) => <p key={index} className={reveal && index === question.answerLine ? 'proof-line' : ''}>
        <span className="line-number">{index + 1}</span><span>{line}</span>
      </p>)}
    </div>
    <aside className="margin-note">Find the sentence that would make a skeptical reader say, “Yes—that proves it.”</aside>
  </article>
}

function QuestionPanel({ question, selected, checked, choose, checkAnswer, next, retry }) {
  const correct = selected === question.answer
  return <section className="question-panel">
    <div className="section-label">Command of Evidence <span>{question.skill}</span></div>
    <h2>Which quotation from the passage best supports the conclusion that {question.claim}?</h2>
    <div className="choices" role="radiogroup" aria-label="Answer choices">
      {question.choices.map((choice, index) => {
        const isSelected = selected === index
        const isCorrect = checked && index === question.answer
        const isWrong = checked && isSelected && !isCorrect
        return <button key={choice.letter} role="radio" aria-checked={isSelected} disabled={checked}
          className={`choice ${isSelected ? 'selected' : ''} ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''}`}
          onClick={() => choose(index)}>
          <span className="choice-letter">{isCorrect ? <Check size={18}/> : isWrong ? <X size={18}/> : choice.letter}</span>
          <span className="choice-text">“{choice.text}”</span>
          {isCorrect && <span className="state-label">Correct evidence</span>}
          {isWrong && <span className="state-label">Your answer</span>}
        </button>
      })}
    </div>
    {!checked ? <div className="action-row">
      <button className="primary-button" disabled={selected === null} onClick={checkAnswer}>Check answer <ArrowRight size={18}/></button>
      <button className="text-button" onClick={next}>Skip for now</button>
    </div> : <Feedback correct={correct} question={question} retry={retry} next={next} />}
  </section>
}

function Feedback({ correct, question, retry, next }) {
  return <div className={`feedback ${correct ? 'success' : 'needs-work'}`} aria-live="polite">
    <div className="feedback-title"><span>{correct ? <Check size={18}/> : <X size={18}/>}</span><h3>{correct ? 'Exactly. The text does the proving.' : 'Close, but the proof needs to be more direct.'}</h3></div>
    <p>{question.rationale}</p>
    <div className="evidence-move"><BookOpen size={19}/><div><strong>Evidence move</strong><span>{correct ? 'Name the relationship the evidence proves before moving on.' : question.trap}</span></div></div>
    <div className="feedback-actions"><button className="secondary-button" onClick={retry}>Try again</button><button className="primary-button" onClick={next}>Next question <ArrowRight size={18}/></button></div>
  </div>
}

function SkillRail({ stats, activeSkill, checked, bestStreak }) {
  const descriptions = { 'Direct support': 'Links claims to specific details.', Relevance: 'Stays focused on what the question asks.', Precision: 'Chooses the most exact evidence.' }
  return <aside className="skill-rail">
    <div className="section-label">Your evidence habits</div>
    <h2>Small steps.<br/>Stronger reading.</h2>
    <div className="skill-list">
      {Object.entries(stats).map(([name, [correct,total]]) => {
        const percent = total ? Math.round(correct / total * 100) : 0
        return <div className={`skill-row ${checked && name === activeSkill ? 'active' : ''}`} key={name}>
          <div><h3>{name}</h3><p>{descriptions[name]}</p></div>
          <div className="skill-meter" style={{ '--score': `${percent * 3.6}deg` }}><span>{total ? percent : '—'}{total ? '%' : ''}</span></div>
        </div>
      })}
    </div>
    <blockquote>“Better readers make a brighter you.”</blockquote>
    <p className="best-streak"><Target size={17}/> Best streak: <strong>{bestStreak}</strong></p>
  </aside>
}

function KeyboardFooter() {
  return <footer className="keyboard-footer"><span>Keyboard shortcuts:</span><span><kbd>1</kbd>–<kbd>4</kbd> Select</span><span><kbd>Enter</kbd> Check / Next</span><span><kbd>R</kbd> Retry</span><em>Read closely. Reason clearly. Get further.</em></footer>
}

function Review({ progress, setPage, goTo, accuracy }) {
  const answered = Object.keys(progress.answers).length
  const missed = questions.filter((q) => progress.answers[q.id] && !progress.answers[q.id].correct)
  return <main className="review-page">
    <div className="review-intro"><p className="section-label">Review desk</p><h1>Turn mistakes into evidence habits.</h1><p>Your answers stay on this device. Revisit missed questions or continue where you left off.</p></div>
    <section className="review-summary"><div><strong>{answered}</strong><span>answered</span></div><div><strong>{accuracy}%</strong><span>accuracy</span></div><div><strong>{50-answered}</strong><span>remaining</span></div></section>
    <section className="review-list">
      <div className="review-heading"><h2>{missed.length ? 'Questions to revisit' : 'No missed questions yet'}</h2><button className="primary-button" onClick={() => setPage('practice')}>Continue practice <ArrowRight size={18}/></button></div>
      {missed.length ? missed.map((q) => <button className="review-row" key={q.id} onClick={() => { goTo(q.id - 1); setPage('practice') }}>
        <span className="question-number">{String(q.id).padStart(2,'0')}</span><span><strong>{q.title}</strong><small>{q.skill} · {q.claim}</small></span><ArrowRight size={18}/>
      </button>) : <div className="empty-review"><Check size={28}/><p>Answer questions in Practice. Anything missed will appear here for a focused second pass.</p></div>}
    </section>
  </main>
}

function HowItWorks({ setPage }) {
  return <main className="how-page"><div><p className="section-label">Method</p><h1>Proof before possibility.</h1><p className="lede">Command of Evidence questions reward a repeatable habit: define the claim, predict the proof, and eliminate choices the text cannot fully support.</p></div>
    <ol><li><span>01</span><div><h2>Translate the conclusion</h2><p>Restate what must be proven in plain language. Keep every important qualifier.</p></div></li><li><span>02</span><div><h2>Predict the evidence</h2><p>Before reading the choices, decide what kind of fact, result, or quotation would prove it.</p></div></li><li><span>03</span><div><h2>Demand a complete match</h2><p>Reject answers that are true but irrelevant, too broad, or only support part of the conclusion.</p></div></li></ol>
    <button className="primary-button" onClick={() => setPage('practice')}>Start practicing <ArrowRight size={18}/></button>
  </main>
}

export default App
