import { useMemo, useState, type ReactNode } from "react";

type Role = "delivery" | "recruiter" | "client";
type IconName =
  | "activity"
  | "arrow"
  | "briefcase"
  | "calendar"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "document"
  | "filter"
  | "grid"
  | "lock"
  | "menu"
  | "people"
  | "plus"
  | "search"
  | "shield"
  | "spark"
  | "upload";

const iconPaths: Record<IconName, ReactNode> = {
  activity: (
    <>
      <path d="M4 12h3l2-6 4 12 2-6h5" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M14 7l5 5-5 5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  check: (
    <>
      <path d="m5 12 4 4L19 6" />
    </>
  ),
  chevron: (
    <>
      <path d="m9 18 6-6-6-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  document: (
    <>
      <path d="M6 3h8l4 4v14H6zM14 3v5h5M9 13h6M9 17h6" />
    </>
  ),
  filter: (
    <>
      <path d="M4 6h16M7 12h10M10 18h4" />
    </>
  ),
  grid: (
    <>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="10" width="14" height="11" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  people: (
    <>
      <path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 20v-2a4 4 0 0 0-3-3.87M16 2.13a4 4 0 0 1 0 7.75" />
    </>
  ),
  plus: (
    <>
      <path d="M12 5v14M5 12h14" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 1.4 4.6L18 9l-4.6 1.4L12 15l-1.4-4.6L6 9l4.6-1.4L12 3ZM19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7L19 15Z" />
    </>
  ),
  upload: (
    <>
      <path d="M12 16V4M7 9l5-5 5 5M4 17v3h16v-3" />
    </>
  ),
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

const requisitions = [
  {
    id: "RQ-2026-042",
    title: "Senior Backend Engineer",
    client: "Northstar Labs",
    recruiter: "Maya Patel",
    time: "06h 18m",
    status: "Review shortlist",
    tone: "urgent",
    count: 8,
  },
  {
    id: "RQ-2026-038",
    title: "Product Design Lead",
    client: "Kite & Co.",
    recruiter: "Kabir Shah",
    time: "18h 42m",
    status: "Evaluating",
    tone: "watch",
    count: 24,
  },
  {
    id: "RQ-2026-047",
    title: "Enterprise Account Executive",
    client: "Meridian",
    recruiter: "Unassigned",
    time: "42h 05m",
    status: "Needs owner",
    tone: "risk",
    count: 0,
  },
  {
    id: "RQ-2026-035",
    title: "Data Platform Architect",
    client: "Halcyon Systems",
    recruiter: "Noor Ahmed",
    time: "1d 08h",
    status: "With client",
    tone: "calm",
    count: 6,
  },
];

const candidates = [
  {
    id: "CND-8042",
    name: "Aarav Mehta",
    score: 92,
    exp: "8.4 years",
    notice: "30 days",
    ctc: "Within limit",
    state: "Verified",
    skills: ["Python", "FastAPI", "AWS"],
    evidence:
      "“Led the migration of 14 services to Python and FastAPI, reducing median latency by 38%.”",
  },
  {
    id: "CND-7961",
    name: "Ishita Rao",
    score: 87,
    exp: "7.1 years",
    notice: "60 days",
    ctc: "Within limit",
    state: "Review",
    skills: ["Python", "Django", "PostgreSQL"],
    evidence:
      "“Designed PostgreSQL data architecture serving 12M monthly transactions across 6 markets.”",
  },
  {
    id: "CND-8108",
    name: "Dev Nair",
    score: 83,
    exp: "9.2 years",
    notice: "Unknown",
    ctc: "Over limit",
    state: "Review",
    skills: ["Python", "AWS", "Kafka"],
    evidence: "“Owned event-driven services on AWS, processing 45,000 messages per minute.”",
  },
  {
    id: "CND-8029",
    name: "Rhea Kapoor",
    score: 78,
    exp: "6.8 years",
    notice: "30 days",
    ctc: "Within limit",
    state: "Review",
    skills: ["Python", "FastAPI", "GCP"],
    evidence:
      "“Built internal APIs with FastAPI and introduced contract testing across 9 services.”",
  },
];

function Logo() {
  return (
    <div className="logo" aria-label="HireFlow">
      <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
        <rect className="brand-mark-bg" width="40" height="40" rx="11" />
        <path className="brand-mark-h" d="M9 9h6v8h10V9h6v22h-6v-8H15v8H9V9Z" />
        <path className="brand-mark-flow" d="M14 17h11l6 3-6 3H14l4-3-4-3Z" />
      </svg>
      <strong>
        Hire<span>Flow</span>
      </strong>
    </div>
  );
}

function ClientMark({ name, size = 34 }: { name: string; size?: number }) {
  const slug = name.toLowerCase().split(" ")[0].replace("&", "kite");
  return (
    <span
      className={`client-mark mark-${slug}`}
      style={{ "--mark-size": `${size}px` } as React.CSSProperties}
      aria-label={`${name} logo`}
    >
      {name === "Northstar Labs" ? (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="m16 5 2.6 8.4L27 16l-8.4 2.6L16 27l-2.6-8.4L5 16l8.4-2.6L16 5Z" />
        </svg>
      ) : name === "Kite & Co." ? (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="m16 5 10 11-10 11L6 16 16 5Z" />
          <path d="M16 5v22M6 16h20" />
        </svg>
      ) : name === "Meridian" ? (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M6 21c3-7 6-10 10-10s7 3 10 10M7 22h18" />
          <circle cx="16" cy="11" r="2.5" />
        </svg>
      ) : (
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M8 7v18M24 7v18M8 16h16" />
          <circle cx="16" cy="16" r="3" />
        </svg>
      )}
    </span>
  );
}

function Topbar({
  role,
  setRole,
  mobileMenu,
  setMobileMenu,
}: {
  role: Role;
  setRole: (r: Role) => void;
  mobileMenu: boolean;
  setMobileMenu: (v: boolean) => void;
}) {
  const labels = { delivery: "Delivery head", recruiter: "Recruiter", client: "Client portal" };
  return (
    <header className="topbar">
      <button
        className="mobile-menu"
        onClick={() => setMobileMenu(!mobileMenu)}
        aria-label="Open navigation"
      >
        <Icon name={mobileMenu ? "close" : "menu"} />
      </button>
      <Logo />
      <div className="role-switch" aria-label="Preview role">
        {(Object.keys(labels) as Role[]).map((item) => (
          <button
            key={item}
            className={role === item ? "active" : ""}
            onClick={() => setRole(item)}
          >
            {labels[item]}
          </button>
        ))}
      </div>
      <div className="user-chip">
        <span>KP</span>
        <div>
          <strong>Keerthana</strong>
          <small>{labels[role]}</small>
        </div>
      </div>
    </header>
  );
}

function Sidebar({ role, open }: { role: Role; open: boolean }) {
  const nav =
    role === "delivery"
      ? [
          ["grid", "Requisitions"],
          ["people", "People"],
          ["activity", "Audit trail"],
        ]
      : role === "recruiter"
        ? [
            ["briefcase", "My work"],
            ["people", "Candidates"],
            ["upload", "Uploads"],
          ]
        : [
            ["grid", "Open roles"],
            ["calendar", "Interviews"],
          ];
  return (
    <aside className={`sidebar ${open ? "open" : ""}`}>
      <div>
        <p className="side-label">Workspace</p>
        <nav>
          {nav.map(([icon, text], index) => (
            <button className={index === 0 ? "active" : ""} key={text}>
              <Icon name={icon as IconName} />
              <span>{text}</span>
              {index === 0 && <i />}
            </button>
          ))}
        </nav>
      </div>
      <div className="privacy-note">
        <Icon name="shield" />
        <p>
          <strong>Evidence, not guesswork</strong>
          <span>Every AI signal stays traceable to its source.</span>
        </p>
      </div>
    </aside>
  );
}

function PageTitle({
  eyebrow,
  title,
  copy,
  action,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  action?: ReactNode;
}) {
  return (
    <div className="page-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{copy}</p>
      </div>
      {action}
    </div>
  );
}

function DeliveryView() {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(requisitions[0]);
  const [filter, setFilter] = useState<"all" | "attention">("all");
  const [panelOpen, setPanelOpen] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [notice, setNotice] = useState("");
  const filtered = requisitions.filter(
    (r) =>
      `${r.id} ${r.title} ${r.client}`.toLowerCase().includes(query.toLowerCase()) &&
      (filter === "all" || r.tone !== "calm"),
  );
  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };
  return (
    <main className="page">
      <PageTitle
        eyebrow="Delivery control / Apr 24"
        title="Today’s hiring pulse"
        copy="Resolve the work closest to its service commitment, then clear the next handoff."
        action={
          <button className="primary" onClick={() => setShowCreate(true)}>
            <Icon name="plus" />
            New requisition
          </button>
        }
      />
      <section className="tempo" aria-label="Delivery status">
        <div className="tempo-statement">
          <span>08</span>
          <p>active requisitions need attention today</p>
        </div>
        <div className="tempo-line">
          <div className="done" />
          <div className="warn" />
          <div className="risk" />
        </div>
        <div className="tempo-legend">
          <span>
            <i className="green" />
            21 on track
          </span>
          <span>
            <i className="amber" />5 under 12h
          </span>
          <span>
            <i className="red" />3 at risk
          </span>
        </div>
      </section>
      <div className={`split-layout ${panelOpen ? "" : "panel-closed"}`}>
        <section className="work-list">
          <div className="list-tools">
            <label>
              <Icon name="search" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search ID, role, or client"
              />
            </label>
            <button
              className={filter === "attention" ? "filter-active" : ""}
              onClick={() => setFilter(filter === "all" ? "attention" : "all")}
              aria-pressed={filter === "attention"}
            >
              <Icon name="filter" />
              {filter === "attention" ? "Needs attention" : "All work"}
            </button>
          </div>
          <div className="list-header">
            <span>Requisition</span>
            <span>Owner</span>
            <span>Time left</span>
          </div>
          {filtered.map((item) => (
            <button
              key={item.id}
              className={`req-row ${selected.id === item.id ? "selected" : ""}`}
              onClick={() => {
                setSelected(item);
                setPanelOpen(true);
              }}
            >
              <span className="req-main">
                <ClientMark name={item.client} size={36} />
                <span>
                  <small>
                    {item.id} · {item.client}
                  </small>
                  <strong>{item.title}</strong>
                  <em className={item.tone}>{item.status}</em>
                </span>
              </span>
              <span className="owner">
                {item.recruiter === "Unassigned" ? (
                  <i>!</i>
                ) : (
                  <b>
                    {item.recruiter
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </b>
                )}
                {item.recruiter}
              </span>
              <span className={`timer ${item.tone}`}>
                <Icon name="clock" />
                {item.time}
              </span>
              <Icon name="chevron" />
            </button>
          ))}
          {filtered.length === 0 && (
            <div className="empty-state">
              <Icon name="search" />
              <strong>No requisitions found</strong>
              <p>Try another search or show all work.</p>
              <button
                className="outline"
                onClick={() => {
                  setQuery("");
                  setFilter("all");
                }}
              >
                Clear search and filters
              </button>
            </div>
          )}
        </section>
        {panelOpen && (
          <aside className="focus-panel">
            <div className="focus-top">
              <span className={`status-dot ${selected.tone}`} /> <span>{selected.id}</span>
              <button aria-label="Close details panel" onClick={() => setPanelOpen(false)}>
                <Icon name="close" />
              </button>
            </div>
            <p className="eyebrow">Next best action</p>
            <h2>
              {selected.status === "Needs owner"
                ? "Assign a recruiter"
                : "Unblock the next handoff"}
            </h2>
            <p>
              {selected.title} is at <strong>{selected.status.toLowerCase()}</strong>. Keep the
              evidence review moving before the timer expires.
            </p>
            <button
              className="primary wide"
              onClick={() =>
                notify(
                  selected.status === "Needs owner"
                    ? "Recruiter assignment opened"
                    : `${selected.id} workspace opened`,
                )
              }
            >
              {selected.status === "Needs owner" ? "Choose recruiter" : "Open requisition"}
              <Icon name="arrow" />
            </button>
            <div className="focus-facts">
              <div>
                <small>Client</small>
                <strong>{selected.client}</strong>
              </div>
              <div>
                <small>Headcount</small>
                <strong>3 positions</strong>
              </div>
              <div>
                <small>Candidates</small>
                <strong>{selected.count || "None yet"}</strong>
              </div>
            </div>
            <div className="trail">
              <p>
                <Icon name="activity" />
                Latest activity
              </p>
              <span>
                <i />
                AI evaluation completed for 8 candidates<small>18 minutes ago</small>
              </span>
              <span>
                <i />
                Maya approved scorecard v2<small>Yesterday, 4:42 PM</small>
              </span>
            </div>
          </aside>
        )}
      </div>
      {showCreate && (
        <div className="modal-backdrop" onClick={() => setShowCreate(false)}>
          <form
            className="decision-modal create-modal"
            onClick={(e) => e.stopPropagation()}
            onSubmit={(e) => {
              e.preventDefault();
              setShowCreate(false);
              notify("Draft requisition created");
            }}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowCreate(false)}
              aria-label="Close"
            >
              <Icon name="close" />
            </button>
            <p className="eyebrow">New requisition</p>
            <h2>Start with the hiring need</h2>
            <p>You can assign a recruiter now or save the requisition as a draft.</p>
            <div className="create-form">
              <label>
                <span>Role title</span>
                <input required placeholder="Ex: Senior backend engineer" />
              </label>
              <label>
                <span>Client organisation</span>
                <input required placeholder="Search or add a client" />
              </label>
              <label>
                <span>Target headcount</span>
                <input required type="number" min="1" defaultValue="1" />
              </label>
            </div>
            <button className="primary wide" type="submit">
              Save draft <Icon name="arrow" />
            </button>
          </form>
        </div>
      )}
      {notice && (
        <div className="toast">
          <Icon name="check" />
          {notice}
        </div>
      )}
    </main>
  );
}

function ScoreRing({ value }: { value: number }) {
  return (
    <div className="score-ring" style={{ "--score": `${value * 3.6}deg` } as React.CSSProperties}>
      <span>
        {value}
        <small>%</small>
      </span>
    </div>
  );
}

function RecruiterView() {
  const [activeId, setActiveId] = useState(candidates[0].id);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [reviewOnly, setReviewOnly] = useState(false);
  const [showContext, setShowContext] = useState(false);
  const [notice, setNotice] = useState("");
  const active = candidates.find((c) => c.id === activeId) ?? candidates[0];
  const visibleCandidates = reviewOnly
    ? candidates.filter((candidate) => candidate.state === "Review")
    : candidates;
  const notify = (message: string) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2600);
  };
  const toggle = (id: string) =>
    setSelectedIds((current) =>
      current.includes(id) ? current.filter((x) => x !== id) : [...current, id],
    );
  return (
    <main className="page recruiter-page">
      <PageTitle
        eyebrow="Evidence review / RQ-2026-042"
        title="Verify candidate evidence"
        copy="Senior Backend Engineer · Northstar Labs · 24 candidates evaluated"
        action={
          <div className="heading-client">
            <ClientMark name="Northstar Labs" size={38} />
            <button className="outline" onClick={() => setShowContext(true)}>
              <Icon name="document" />
              View job context
            </button>
          </div>
        }
      />
      <div className="review-progress">
        <span>
          <Icon name="check" />
          Parsed <b>24</b>
        </span>
        <i />
        <span>
          <Icon name="check" />
          Evaluated <b>24</b>
        </span>
        <i />
        <span className="current">
          Verify evidence <b>8</b>
        </span>
        <i />
        <span>
          Submit <b>{selectedIds.length}/10</b>
        </span>
      </div>
      <div className="candidate-workspace">
        <section className="candidate-list">
          <div className="candidate-tools">
            <strong>Ranked candidates</strong>
            <button
              className={reviewOnly ? "filter-active" : ""}
              onClick={() => setReviewOnly(!reviewOnly)}
              aria-label={reviewOnly ? "Show all candidates" : "Show candidates needing review"}
              aria-pressed={reviewOnly}
            >
              <Icon name="filter" />
            </button>
          </div>
          {visibleCandidates.map((candidate) => {
            const index = candidates.findIndex((item) => item.id === candidate.id);
            return (
              <button
                className={`candidate-row ${candidate.id === activeId ? "active" : ""}`}
                onClick={() => setActiveId(candidate.id)}
                key={candidate.id}
              >
                <label onClick={(e) => e.stopPropagation()}>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(candidate.id)}
                    onChange={() => toggle(candidate.id)}
                  />
                  <span />
                </label>
                <em>{String(index + 1).padStart(2, "0")}</em>
                <div>
                  <small>{candidate.id}</small>
                  <strong>{candidate.name}</strong>
                  <p>
                    {candidate.exp} · {candidate.notice}
                  </p>
                </div>
                <b className="mini-score">{candidate.score}</b>
              </button>
            );
          })}
          <button className="load-more">Show 20 more candidates</button>
        </section>
        <section className="evidence-view">
          <header>
            <div>
              <span className="verified">
                <Icon name="shield" />
                Identity excluded from scoring
              </span>
              <h2>{active.name}</h2>
              <p>{active.id} · Bengaluru, India</p>
            </div>
            <ScoreRing value={active.score} />
          </header>
          <div className="checks">
            <span>
              <small>Experience</small>
              <strong>{active.exp}</strong>
            </span>
            <span>
              <small>Notice period</small>
              <strong>{active.notice}</strong>
            </span>
            <span>
              <small>CTC check</small>
              <strong className={active.ctc === "Over limit" ? "bad" : ""}>{active.ctc}</strong>
            </span>
          </div>
          <div className="criteria-head">
            <div>
              <p className="eyebrow">Criterion evidence</p>
              <h3>Why this score</h3>
            </div>
            <span>3 of 4 must-haves met</span>
          </div>
          <article className="evidence-block">
            <div className="criterion">
              <span>
                <Icon name="check" />
              </span>
              <div>
                <strong>Python backend development</strong>
                <p>Must-have · 30% weight</p>
              </div>
              <b>Full match</b>
            </div>
            <blockquote>{active.evidence}</blockquote>
            <p className="source">
              <Icon name="document" />
              Work experience · Page 2{" "}
              <button>
                View in CV <Icon name="arrow" />
              </button>
            </p>
          </article>
          <article className="evidence-block compact">
            <div className="criterion">
              <span>
                <Icon name="check" />
              </span>
              <div>
                <strong>Cloud architecture</strong>
                <p>Must-have · 20% weight</p>
              </div>
              <b>Full match</b>
            </div>
          </article>
          <div className="review-actions">
            <button className="outline" onClick={() => notify("Issue added for manual review")}>
              Flag an issue
            </button>
            <button
              className="primary"
              onClick={() => !selectedIds.includes(active.id) && toggle(active.id)}
              disabled={selectedIds.includes(active.id)}
            >
              <Icon name="check" />
              {selectedIds.includes(active.id) ? "Selected" : "Verify and select"}
            </button>
          </div>
        </section>
        <aside className="document-preview">
          <div className="doc-toolbar">
            <span>
              <Icon name="document" />
              Original CV
            </span>
            <small>2 / 3</small>
          </div>
          <div className="paper">
            <h4>{active.name}</h4>
            <p>Senior software engineer</p>
            <hr />
            <h5>Experience</h5>
            <p>
              Platform engineering lead
              <br />
              Aurora Systems · 2021–present
            </p>
            <mark>{active.evidence.replace(/[“”]/g, "")}</mark>
            <p>Established service ownership standards and coached a team of 7 engineers.</p>
            <h5>Skills</h5>
            <p>{active.skills.join(" · ")} · PostgreSQL · Docker · Kubernetes</p>
          </div>
        </aside>
      </div>
      {selectedIds.length > 0 && (
        <div className="selection-bar">
          <p>
            <strong>
              {selectedIds.length} candidate{selectedIds.length > 1 ? "s" : ""} selected
            </strong>
            <span>Only verified profiles can be sent</span>
          </p>
          <button className="primary" onClick={() => notify("Submission review opened")}>
            Review submission <Icon name="arrow" />
          </button>
        </div>
      )}
      {showContext && (
        <div className="modal-backdrop" onClick={() => setShowContext(false)}>
          <div className="decision-modal context-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setShowContext(false)}
              aria-label="Close job context"
            >
              <Icon name="close" />
            </button>
            <p className="eyebrow">Scorecard v2</p>
            <h2>Senior Backend Engineer</h2>
            <p>Northstar Labs · 3 positions · Bengaluru hybrid</p>
            <div className="context-criteria">
              <span>
                <strong>Python and FastAPI</strong>
                <small>Must-have · 30%</small>
              </span>
              <span>
                <strong>Cloud architecture</strong>
                <small>Must-have · 20%</small>
              </span>
              <span>
                <strong>Distributed systems</strong>
                <small>Must-have · 20%</small>
              </span>
            </div>
            <button className="primary wide" onClick={() => setShowContext(false)}>
              Return to candidate review <Icon name="arrow" />
            </button>
          </div>
        </div>
      )}
      {notice && (
        <div className="toast">
          <Icon name="check" />
          {notice}
        </div>
      )}
    </main>
  );
}

function ClientView() {
  const [active, setActive] = useState(0);
  const [decision, setDecision] = useState<"shortlist" | "reject" | "interview" | null>(null);
  const [toast, setToast] = useState("");
  const person = candidates[active];
  const commitDecision = () => {
    setToast(
      decision === "shortlist"
        ? "Candidate shortlisted"
        : decision === "reject"
          ? "Feedback sent to recruiter"
          : "Interview times sent",
    );
    setDecision(null);
    setActive((current) => Math.min(current + 1, candidates.length - 1));
    window.setTimeout(() => setToast(""), 2600);
  };
  return (
    <main className="client-page">
      <div className="client-context">
        <div className="client-brand">
          <ClientMark name="Northstar Labs" size={42} />
          <p>
            <strong>Northstar Labs</strong>
            <span>Hiring review</span>
          </p>
        </div>
        <div>
          <button className="back">
            <Icon name="arrow" />
            Open roles
          </button>
          <span>Batch 02 · Received 2 hours ago</span>
        </div>
        <h1>
          Senior Backend
          <br />
          Engineer
        </h1>
        <p>Review the evidence behind each profile, then choose the next step.</p>
        <div className="client-count">
          <strong>{active + 1}</strong>
          <span>
            of {candidates.length}
            <small>profiles reviewed</small>
          </span>
        </div>
        <div className="candidate-tabs">
          {candidates.map((c, index) => (
            <button
              key={c.id}
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{index + 1}</span>
              <p>
                <strong>{c.id}</strong>
                <small>{c.score}% match</small>
              </p>
              {active === index && <Icon name="chevron" />}
            </button>
          ))}
        </div>
        <p className="masked">
          <Icon name="lock" />
          Candidate identity is masked during initial review
        </p>
      </div>
      <div className="client-profile">
        <header>
          <div>
            <span className="match-tag">
              <Icon name="spark" />
              Strong match
            </span>
            <h2>{person.id}</h2>
            <p>{person.exp} experience · Bengaluru</p>
          </div>
          <ScoreRing value={person.score} />
        </header>
        <section className="client-checks">
          <div>
            <small>Notice period</small>
            <strong>{person.notice}</strong>
            <span className="good">Within requirement</span>
          </div>
          <div>
            <small>Compensation</small>
            <strong>{person.ctc}</strong>
            <span className={person.ctc === "Over limit" ? "bad" : "good"}>Recruiter verified</span>
          </div>
        </section>
        <section className="skill-section">
          <p className="eyebrow">Selection criteria</p>
          <h3>What the profile proves</h3>
          {person.skills.map((skill, i) => (
            <article key={skill}>
              <div>
                <span>{i + 1}</span>
                <p>
                  <strong>{skill}</strong>
                  <small>{i < 2 ? "Required criterion" : "Preferred criterion"}</small>
                </p>
                <b>
                  <Icon name="check" />
                  {i < 2 ? "Meets" : "Strong"}
                </b>
              </div>
              <blockquote>
                {i === 0
                  ? person.evidence
                  : i === 1
                    ? "“Designed resilient cloud services with clear operational ownership and measurable SLOs.”"
                    : "“Mentored engineers and led architecture reviews across multiple delivery teams.”"}
              </blockquote>
              <small className="source-note">Verified against candidate CV</small>
            </article>
          ))}
        </section>
        <div className="mobile-decision-spacer" />
        <footer className="decision-footer">
          <p>
            <strong>Your decision</strong>
            <span>The recruiter is notified immediately</span>
          </p>
          <div>
            <button className="reject" onClick={() => setDecision("reject")}>
              Decline
            </button>
            <button className="outline" onClick={() => setDecision("interview")}>
              <Icon name="calendar" />
              Interview
            </button>
            <button className="primary" onClick={() => setDecision("shortlist")}>
              <Icon name="check" />
              Shortlist
            </button>
          </div>
        </footer>
      </div>
      {decision && (
        <div className="modal-backdrop" onClick={() => setDecision(null)}>
          <div className="decision-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setDecision(null)}>
              <Icon name="close" />
            </button>
            <p className="eyebrow">{person.id}</p>
            <h2>
              {decision === "shortlist"
                ? "Shortlist this candidate?"
                : decision === "reject"
                  ? "Why isn’t this profile a fit?"
                  : "Propose interview times"}
            </h2>
            <p>
              {decision === "shortlist"
                ? "This marks the candidate as a person you’d like to consider further. It doesn’t schedule an interview."
                : decision === "reject"
                  ? "Your feedback helps the recruiter improve the next shortlist."
                  : "Choose up to 3 options. The recruiter will confirm with the candidate."}
            </p>
            {decision === "reject" && (
              <div className="reason-grid">
                {[
                  "Skills mismatch",
                  "Experience mismatch",
                  "Compensation",
                  "Notice period",
                  "Location",
                  "Other",
                ].map((r, i) => (
                  <label key={r}>
                    <input type="radio" name="reason" defaultChecked={i === 0} />
                    <span>{r}</span>
                  </label>
                ))}
              </div>
            )}
            {decision === "interview" && (
              <div className="slot-list">
                {["Apr 28 · 11:30 AM", "Apr 29 · 2 PM", "Apr 30 · 4:30 PM"].map((s, i) => (
                  <label key={s}>
                    <input type="checkbox" defaultChecked={i === 0} />
                    <span>{s}</span>
                  </label>
                ))}
              </div>
            )}
            <button className="primary wide" onClick={commitDecision}>
              {decision === "shortlist"
                ? "Confirm shortlist"
                : decision === "reject"
                  ? "Send feedback"
                  : "Send proposed times"}
              <Icon name="arrow" />
            </button>
          </div>
        </div>
      )}
      {toast && (
        <div className="toast">
          <Icon name="check" />
          {toast}
        </div>
      )}
    </main>
  );
}

function DeliveryExperience() {
  const [selected, setSelected] = useState(requisitions[0]);
  const [query, setQuery] = useState("");
  const [attentionOnly, setAttentionOnly] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const visible = requisitions.filter(
    (item) =>
      `${item.title} ${item.client} ${item.id}`.toLowerCase().includes(query.toLowerCase()) &&
      (!attentionOnly || item.tone !== "calm"),
  );
  return (
    <main className="experience delivery-experience">
      <header className="experience-header">
        <div>
          <p className="eyebrow">Delivery control · Apr 24</p>
          <h1>Start with what needs a decision</h1>
          <p>3 requisitions need intervention before today’s service window closes.</p>
        </div>
        <button className="primary" onClick={() => setShowCreate(true)}>
          <Icon name="plus" /> New requisition
        </button>
      </header>

      <section className="service-pulse" aria-label="Service level overview">
        <div className="service-score">
          <strong>80%</strong>
          <span>shortlists shared within 48 hours</span>
        </div>
        <div className="pulse-metrics">
          <span>
            <i className="good-dot" />
            <strong>21</strong>
            <small>On track</small>
          </span>
          <span>
            <i className="watch-dot" />
            <strong>5</strong>
            <small>Due today</small>
          </span>
          <span>
            <i className="risk-dot" />
            <strong>3</strong>
            <small>Need action</small>
          </span>
        </div>
        <div className="pulse-message">
          <Icon name="activity" />
          <p>
            <strong>6h 18m</strong>
            <span>until the next commitment</span>
          </p>
        </div>
      </section>

      <section className="delivery-board">
        <div className="action-queue">
          <div className="queue-toolbar">
            <div className="queue-tabs">
              <button
                className={attentionOnly ? "active" : ""}
                onClick={() => setAttentionOnly(true)}
              >
                Needs action
              </button>
              <button
                className={!attentionOnly ? "active" : ""}
                onClick={() => setAttentionOnly(false)}
              >
                All requisitions
              </button>
            </div>
            <label>
              <Icon name="search" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search requisitions"
              />
            </label>
          </div>
          <div className="queue-labels">
            <span>Role and client</span>
            <span>Owner</span>
            <span>Commitment</span>
          </div>
          <div className="queue-items">
            {visible.map((item) => (
              <button
                key={item.id}
                className={`queue-item ${selected.id === item.id ? "active" : ""}`}
                onClick={() => setSelected(item)}
              >
                <ClientMark name={item.client} size={38} />
                <span className="queue-role">
                  <small>{item.id}</small>
                  <strong>{item.title}</strong>
                  <em>{item.client}</em>
                </span>
                <span className="queue-owner">
                  <b>{item.recruiter === "Unassigned" ? "!" : item.recruiter.slice(0, 1)}</b>
                  {item.recruiter}
                </span>
                <span className={`queue-time ${item.tone}`}>
                  <small>{item.status}</small>
                  <strong>{item.time}</strong>
                </span>
                <Icon name="chevron" size={16} />
              </button>
            ))}
            {visible.length === 0 && (
              <div className="queue-empty">
                <Icon name="search" />
                <strong>No matching work</strong>
                <button
                  onClick={() => {
                    setQuery("");
                    setAttentionOnly(false);
                  }}
                >
                  Reset queue
                </button>
              </div>
            )}
          </div>
        </div>

        <aside className="decision-panel">
          <div className="decision-panel-top">
            <span className={`status-dot ${selected.tone}`} />
            <small>{selected.id}</small>
            <span className={`queue-time ${selected.tone}`}>{selected.time}</span>
          </div>
          <p className="eyebrow">Recommended next step</p>
          <h2>{selected.status === "Needs owner" ? "Assign an owner" : "Review the shortlist"}</h2>
          <p>
            {selected.status === "Needs owner"
              ? "This requisition cannot progress until an active recruiter is assigned."
              : `${selected.recruiter} has completed the first evaluation pass. Review the evidence before client handoff.`}
          </p>
          <dl className="decision-facts">
            <div>
              <dt>Client</dt>
              <dd>{selected.client}</dd>
            </div>
            <div>
              <dt>Headcount</dt>
              <dd>3 positions</dd>
            </div>
            <div>
              <dt>Candidates ready</dt>
              <dd>{selected.count || "None"}</dd>
            </div>
          </dl>
          <button className="primary wide">
            {selected.status === "Needs owner" ? "Assign recruiter" : "Review shortlist"}
            <Icon name="arrow" />
          </button>
          <div className="decision-history">
            <strong>Recent movement</strong>
            <span>
              <i />
              Evaluation completed <small>18 minutes ago</small>
            </span>
            <span>
              <i />
              Scorecard v2 approved <small>Yesterday, 4:42 PM</small>
            </span>
          </div>
        </aside>
      </section>
      {showCreate && (
        <div className="modal-backdrop" onClick={() => setShowCreate(false)}>
          <form
            className="decision-modal"
            onClick={(event) => event.stopPropagation()}
            onSubmit={(event) => {
              event.preventDefault();
              setShowCreate(false);
            }}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setShowCreate(false)}
              aria-label="Close"
            >
              <Icon name="close" />
            </button>
            <p className="eyebrow">New requisition</p>
            <h2>Define the hiring need</h2>
            <div className="create-form">
              <label>
                <span>Role title</span>
                <input required placeholder="Ex: Senior backend engineer" />
              </label>
              <label>
                <span>Client organisation</span>
                <input required placeholder="Search clients" />
              </label>
              <label>
                <span>Headcount</span>
                <input type="number" min="1" defaultValue="1" />
              </label>
            </div>
            <button className="primary wide">
              Save as draft <Icon name="arrow" />
            </button>
          </form>
        </div>
      )}
    </main>
  );
}

function RecruiterExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tab, setTab] = useState<"evidence" | "profile" | "consent">("evidence");
  const [verified, setVerified] = useState<string[]>([]);
  const active = candidates[activeIndex];
  const verifyNext = () => {
    setVerified((current) => (current.includes(active.id) ? current : [...current, active.id]));
    setActiveIndex((current) => Math.min(current + 1, candidates.length - 1));
  };
  return (
    <main className="experience recruiter-experience">
      <header className="experience-header recruiter-header">
        <div>
          <p className="eyebrow">RQ-2026-042 · Northstar Labs</p>
          <h1>Verify candidate evidence</h1>
          <p>Senior Backend Engineer · Scorecard v2 · {verified.length} of 24 verified</p>
        </div>
        <button className="outline">
          <Icon name="document" /> Job context
        </button>
      </header>

      <nav className="candidate-navigator" aria-label="Candidate review queue">
        <button
          className="navigator-arrow"
          disabled={activeIndex === 0}
          onClick={() => setActiveIndex((current) => Math.max(0, current - 1))}
          aria-label="Previous candidate"
        >
          <Icon name="chevron" />
        </button>
        <div className="candidate-strip">
          {candidates.map((candidate, index) => (
            <button
              key={candidate.id}
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>
                <strong>{candidate.id}</strong>
                <small>{candidate.score}% match</small>
              </p>
              {verified.includes(candidate.id) && <Icon name="check" size={14} />}
            </button>
          ))}
        </div>
        <button
          className="navigator-arrow next"
          disabled={activeIndex === candidates.length - 1}
          onClick={() => setActiveIndex((current) => Math.min(candidates.length - 1, current + 1))}
          aria-label="Next candidate"
        >
          <Icon name="chevron" />
        </button>
      </nav>

      <section className="guided-review">
        <div className="candidate-proof">
          <header className="proof-header">
            <div>
              <span className="verified">
                <Icon name="shield" /> Identity excluded from scoring
              </span>
              <h2>{active.name}</h2>
              <p>
                {active.id} · {active.exp} experience · Bengaluru
              </p>
            </div>
            <ScoreRing value={active.score} />
          </header>
          <div className="proof-tabs">
            {(["evidence", "profile", "consent"] as const).map((item) => (
              <button
                className={tab === item ? "active" : ""}
                onClick={() => setTab(item)}
                key={item}
              >
                {item === "evidence"
                  ? "Score evidence"
                  : item === "profile"
                    ? "Profile checks"
                    : "Consent"}
              </button>
            ))}
          </div>
          <div className="proof-content">
            {tab === "evidence" && (
              <>
                <div className="proof-summary">
                  <strong>3 of 4 must-haves met</strong>
                  <span>Evidence coverage is sufficient for human review</span>
                </div>
                {active.skills.map((skill, index) => (
                  <article className="proof-criterion" key={skill}>
                    <span>
                      <Icon name="check" />
                    </span>
                    <div>
                      <header>
                        <p>
                          <strong>{skill}</strong>
                          <small>Must-have · {30 - index * 5}% weight</small>
                        </p>
                        <b>{index === 2 ? "Partial" : "Full match"}</b>
                      </header>
                      <blockquote>
                        {index === 0
                          ? active.evidence
                          : `“Applied ${skill} in production systems with measurable delivery ownership.”`}
                      </blockquote>
                      <button>
                        Open source passage <Icon name="arrow" size={14} />
                      </button>
                    </div>
                  </article>
                ))}
              </>
            )}
            {tab === "profile" && (
              <div className="profile-check-grid">
                <span>
                  <small>Experience</small>
                  <strong>{active.exp}</strong>
                </span>
                <span>
                  <small>Notice period</small>
                  <strong>{active.notice}</strong>
                </span>
                <span>
                  <small>Compensation</small>
                  <strong>{active.ctc}</strong>
                </span>
                <span>
                  <small>Location</small>
                  <strong>Bengaluru</strong>
                </span>
              </div>
            )}
            {tab === "consent" && (
              <div className="consent-state">
                <Icon name="shield" />
                <div>
                  <strong>Consent recorded</strong>
                  <p>Hiring use only · Recruiter confirmed · Apr 18</p>
                </div>
              </div>
            )}
          </div>
          <footer className="proof-actions">
            <button className="outline">Flag evidence</button>
            <button className="primary" onClick={verifyNext}>
              Verify and continue <Icon name="arrow" />
            </button>
          </footer>
        </div>

        <aside className="source-reader">
          <div className="reader-toolbar">
            <span>
              <Icon name="document" /> Original CV
            </span>
            <small>Page 2 of 3</small>
          </div>
          <div className="reader-page">
            <h3>{active.name}</h3>
            <p className="reader-role">Senior software engineer</p>
            <hr />
            <h4>Experience</h4>
            <strong>Platform engineering lead</strong>
            <p>Aurora Systems · 2021–present</p>
            <mark>{active.evidence.replace(/[“”]/g, "")}</mark>
            <p>Established service ownership standards and coached a team of 7 engineers.</p>
            <h4>Core skills</h4>
            <p>{active.skills.join(" · ")} · PostgreSQL · Docker · Kubernetes</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

function ClientExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [decision, setDecision] = useState<"shortlist" | "reject" | "interview" | null>(null);
  const [message, setMessage] = useState("");
  const active = candidates[activeIndex];
  const decide = () => {
    setMessage(
      decision === "shortlist"
        ? "Candidate shortlisted"
        : decision === "reject"
          ? "Feedback sent"
          : "Interview options sent",
    );
    setDecision(null);
    setActiveIndex((current) => Math.min(current + 1, candidates.length - 1));
    window.setTimeout(() => setMessage(""), 2400);
  };
  return (
    <main className="client-experience">
      <header className="client-review-header">
        <div className="client-brand">
          <ClientMark name="Northstar Labs" size={38} />
          <p>
            <strong>Northstar Labs</strong>
            <span>Senior Backend Engineer</span>
          </p>
        </div>
        <div className="review-progress-copy">
          <span>
            {activeIndex + 1} of {candidates.length}
          </span>
          <div>
            <i style={{ width: `${((activeIndex + 1) / candidates.length) * 100}%` }} />
          </div>
          <small>Candidate review</small>
        </div>
        <button className="outline">
          <Icon name="document" /> Role criteria
        </button>
      </header>

      <nav className="client-candidate-strip" aria-label="Submitted candidates">
        {candidates.map((candidate, index) => (
          <button
            key={candidate.id}
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <span>{index + 1}</span>
            <p>
              <strong>{candidate.id}</strong>
              <small>{candidate.score}% match</small>
            </p>
          </button>
        ))}
      </nav>

      <section className="focused-client-review">
        <header>
          <div>
            <span className="match-tag">
              <Icon name="shield" /> Identity protected
            </span>
            <h1>{active.id}</h1>
            <p>
              {active.exp} experience · Bengaluru · {active.notice} notice
            </p>
          </div>
          <ScoreRing value={active.score} />
        </header>
        <div className="client-snapshot">
          <span>
            <small>Compensation</small>
            <strong>{active.ctc}</strong>
          </span>
          <span>
            <small>Must-haves</small>
            <strong>3 of 4 met</strong>
          </span>
          <span>
            <small>Evidence</small>
            <strong>Verified</strong>
          </span>
        </div>
        <div className="client-proof-list">
          <p className="eyebrow">Why this candidate matches</p>
          {active.skills.map((skill, index) => (
            <details key={skill} open={index === 0}>
              <summary>
                <span>
                  <Icon name="check" />
                </span>
                <p>
                  <strong>{skill}</strong>
                  <small>{index < 2 ? "Required criterion" : "Preferred criterion"}</small>
                </p>
                <b>{index < 2 ? "Meets" : "Strong"}</b>
                <Icon name="chevron" />
              </summary>
              <blockquote>
                {index === 0
                  ? active.evidence
                  : `“Demonstrated ${skill} ownership across production delivery.”`}
              </blockquote>
              <small>Verified against the candidate CV</small>
            </details>
          ))}
        </div>
      </section>

      <footer className="client-decision-bar">
        <p>
          <strong>Choose the next step</strong>
          <span>The recruiter is notified immediately</span>
        </p>
        <div>
          <button className="reject" onClick={() => setDecision("reject")}>
            Decline
          </button>
          <button className="outline" onClick={() => setDecision("interview")}>
            <Icon name="calendar" /> Interview
          </button>
          <button className="primary" onClick={() => setDecision("shortlist")}>
            <Icon name="check" /> Shortlist
          </button>
        </div>
      </footer>
      {decision && (
        <div className="modal-backdrop" onClick={() => setDecision(null)}>
          <div className="decision-modal" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" onClick={() => setDecision(null)}>
              <Icon name="close" />
            </button>
            <p className="eyebrow">{active.id}</p>
            <h2>
              {decision === "shortlist"
                ? "Add to the shortlist?"
                : decision === "reject"
                  ? "Why isn’t this a fit?"
                  : "Propose interview times"}
            </h2>
            {decision === "reject" && (
              <div className="reason-grid">
                {["Skills mismatch", "Experience mismatch", "Compensation", "Notice period"].map(
                  (reason, index) => (
                    <label key={reason}>
                      <input type="radio" name="reason-v2" defaultChecked={index === 0} />
                      <span>{reason}</span>
                    </label>
                  ),
                )}
              </div>
            )}
            {decision === "interview" && (
              <div className="slot-list">
                {["Apr 28 · 11:30 AM", "Apr 29 · 2 PM", "Apr 30 · 4:30 PM"].map((slot, index) => (
                  <label key={slot}>
                    <input type="checkbox" defaultChecked={index === 0} />
                    <span>{slot}</span>
                  </label>
                ))}
              </div>
            )}
            <button className="primary wide" onClick={decide}>
              Confirm decision <Icon name="arrow" />
            </button>
          </div>
        </div>
      )}
      {message && (
        <div className="toast">
          <Icon name="check" /> {message}
        </div>
      )}
    </main>
  );
}

export default function App() {
  const [role, setRole] = useState<Role>("delivery");
  const [mobileMenu, setMobileMenu] = useState(false);
  const content = useMemo(
    () =>
      role === "delivery" ? (
        <DeliveryExperience />
      ) : role === "recruiter" ? (
        <RecruiterExperience />
      ) : (
        <ClientExperience />
      ),
    [role],
  );
  return (
    <div className={`app-shell role-${role}`}>
      <Topbar
        role={role}
        setRole={(r) => {
          setRole(r);
          setMobileMenu(false);
        }}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      />
      <Sidebar role={role} open={mobileMenu} />
      <div className="content-shell">{content}</div>
    </div>
  );
}
