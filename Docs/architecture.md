# SINAOO Architecture

```mermaid
flowchart LR
  U[User] --> FE[React + Vite Frontend<br/>client/src]

  subgraph Frontend
    FE --> R[React Router<br/>App.jsx]
    R --> P1[Auth Pages<br/>Login/Register/ForgotPassword]
    R --> P2[Main Pages<br/>Dashboard/Courses/Leaderboard/Achievement/Profile]
    R --> P3[Learning Pages<br/>ModuleDetail + DailyQuiz]
    FE --> Ctx[UserContext + Hooks]
    Ctx --> API[fetch() calls to /api/*]
  end

  API --> BE[Express API<br/>server/api/index.js]

  subgraph Backend
    BE --> A1[/api/login /register /forgot-password<br/>routes/auth.js]
    BE --> A2[/api/users/*<br/>routes/users.js]
    BE --> A3[/api/courses/*<br/>routes/courses.js]
    BE --> A4[/api/modules/*<br/>routes/modules.js]
    BE --> A5[/api/achievements /titles /leaderboard<br/>routes/gamification.js]
    BE --> A6[/api/daily-quiz/*<br/>routes/dailyQuiz.js]
    BE --> A7[/api/admin/*<br/>routes/admin.js]

    A2 --> SVC[achievementService.js]
    A5 --> SVC
    A6 --> SVC
  end

  subgraph Data
    DB[(MongoDB)]
    M1[User]
    M2[Course]
    M3[Module]
    M4[Achievement]
    M5[Title]
    M6[Mission]
  end

  A1 --> M1
  A2 --> M1
  A2 --> M2
  A2 --> M3
  A2 --> M6
  A3 --> M2
  A3 --> M3
  A4 --> M3
  A4 --> M1
  A5 --> M4
  A5 --> M5
  A5 --> M1
  A6 --> M1
  A6 --> M2
  A6 --> M3
  SVC --> M1
  SVC --> M2
  SVC --> M3
  SVC --> M4
  SVC --> M5

  M1 --- DB
  M2 --- DB
  M3 --- DB
  M4 --- DB
  M5 --- DB
  M6 --- DB
```
