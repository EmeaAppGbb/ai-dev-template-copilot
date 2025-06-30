# GitHub Copilot Instructions

## Technical Stack

- **Frontend:** React (latest stable version)
- **Backend:** Node.js (LTS version, with Express.js as the web framework)
- **Package Manager:** npm or yarn (choose one and be consistent)
- **Version Control:** Git (with GitHub as the remote repository)
- **Testing:** 
    - Frontend: Jest and React Testing Library
    - Backend: Jest or Mocha/Chai
- **Linting & Formatting:** ESLint (with Airbnb or recommended config), Prettier
- **CI/CD:** GitHub Actions (for linting, testing, and deployment)
- **Environment Variables:** Use `.env` files and never commit secrets

## Development Guidelines

### General

- Write clean, modular, and reusable code.
- Use TypeScript for both frontend and backend.
- Follow semantic versioning for releases.
- Write meaningful commit messages.
- Document code with JSDoc or TSDoc where appropriate.

### Frontend (React)

- Use functional components and React Hooks.
- Organize components in a `src/components` directory.
- Use Context API or Redux for state management if needed.
- Style components using CSS Modules or styled-components.
- Write unit and integration tests for components.
- Use PropTypes or TypeScript interfaces for type safety.

### Backend (Node.js + Express)

- Organize code into `routes`, `controllers`, `services`, and `models`.
- Use async/await for asynchronous operations.
- Validate all incoming data (e.g., with Joi or express-validator).
- Handle errors gracefully and return appropriate HTTP status codes.
- Write unit and integration tests for API endpoints.
- Use environment variables for configuration.

### Code Review & Collaboration

- Open pull requests for all changes; no direct commits to main.
- Request at least one review before merging.
- Address all review comments before merging.
- Keep PRs focused and small.

### Security

- Never commit secrets or sensitive data.
- Sanitize and validate all user input.
- Keep dependencies up to date and monitor for vulnerabilities.

### Documentation

- Maintain a clear and up-to-date `README.md`.
- Document API endpoints and usage examples.
- Add comments for complex logic.

---