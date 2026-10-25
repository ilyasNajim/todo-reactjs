<div align="center">

# ✅ Todo ReactJS

### A small task manager with priorities, filters and local storage

<img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=18&pause=1000&color=00F5FF&center=true&vCenter=true&width=700&height=40&lines=Add+tasks+with+a+priority;Filter+by+priority;Select+and+delete+in+one+click;Saved+in+your+browser" alt="Typing SVG" />

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
<img src="https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/DaisyUI-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white" />

</div>

---

## 📖 About

**Todo ReactJS** is a small task-management web application. You can write down tasks, give each one a priority level, filter the list, and delete one or several tasks once they are done.

The app runs **entirely in the browser**: there is no user account, no server and no database. Tasks are saved in the browser's `localStorage`, so your list is still there after a page reload.

<!-- Pour ajouter une capture d'écran : mets un fichier screenshot.png à la racine du repo, puis remplace cette ligne par :
<div align="center"><img src="screenshot.png" alt="Todo ReactJS preview" width="800" /></div>
-->

---

## ✨ Features

| Feature | Description |
| :-- | :-- |
| ➕ **Add a task** | Type the task text and choose a priority: **Urgent**, **Medium** or **Low**. Empty tasks are ignored. |
| 🔢 **Counters** | Shows the total number of tasks and the number for each priority. |
| 🔍 **Filters** | Display all tasks, or only the tasks of a given priority. |
| ☑️ **Multi-selection** | Select several tasks with the checkboxes. |
| 🗑️ **Delete** | Delete one task with the trash icon, or delete the selected tasks with the **"Finir la sélection"** button. |
| 💾 **Persistence** | The list is kept after a reload thanks to `localStorage`. |

> **Good to know:** the **"Finir la sélection"** button currently *deletes* the selected tasks. The project does not keep a "completed" status, and selections are not saved after a reload.

---

## 🛠️ Built with

| Tool | Role in the project |
| :-- | :-- |
| **React 19** | Builds the interface from components and updates the display when data changes |
| **TypeScript** | Adds types to tasks, priorities and functions for safer code |
| **Vite** | Development server and production build |
| **Tailwind CSS 4** | Utility classes for layout, spacing and style |
| **DaisyUI** | Component classes (buttons, checkboxes, badges, inputs) with the `night` theme |
| **Lucide React** | Icons (trash, empty state) |
| **ESLint** | Code quality rules, including React and hooks rules |
| **localStorage** | Saves the tasks in the browser under the key `todos` |

---

## 🗂️ Project structure

```text
todo-reactjs/
├── index.html         # HTML page that hosts the app
├── src/
│   ├── main.tsx       # React entry point, renders <App />
│   ├── App.tsx        # state, add / delete, filters, counters, selection, local storage
│   ├── TodoItem.tsx   # one task: priority, checkbox, delete button
│   └── index.css      # Tailwind import and DaisyUI configuration
├── vite.config.ts
└── package.json
```

### Data model

Each task has three fields:

- an **id** (number)
- a **text** (string)
- a **priority** (one of the three allowed values)

A new task is added at the **top** of the list, then the priority goes back to "Medium" and the text field is cleared.

---

## 🚀 Getting started

1. Clone the repository:

```bash
git clone https://github.com/ilyasNajim/todo-reactjs.git
cd todo-reactjs
```

2. Install the dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

### Available scripts

| Command | What it does |
| :-- | :-- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Checks the TypeScript project, then builds the production version |
| `npm run preview` | Serves the production build locally |
| `npm run lint` | Runs ESLint |

---

## 🧭 Current limits and ideas

Tasks belong to one browser and its local storage: there is no sync between devices, no server backup and no accounts.

Ideas for future versions:

- [ ] Edit an existing task
- [ ] Due dates and reminders
- [ ] A real "completed" status and a history of finished tasks
- [ ] Keep the selection after a reload

---

## 👤 Author

**Ilyas Najim** · AI & ML engineering student

<a href="https://www.linkedin.com/in/ilyas-najim-050215359/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
<a href="https://github.com/ilyasNajim"><img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" /></a>
