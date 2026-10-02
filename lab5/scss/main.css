:root {
  --bg-page: #f4f8fb;
  --bg-card: #ffffff;
  --bg-header: #ffffff;
  --text-main: #14213d;
  --text-muted: #5f6b7a;
  --border-color: #d6e2ec;
  --table-head-bg: #e9f0f6;
  --table-hover: #f1f6fa;
  --accent-green: #1f8a4c;
  --accent-green-hover: #146c3a;
  --warn-bg: #fff1f2;
  --warn-border: #e53935;
  --warn-text: #9f1239;
  --modal-bg: rgba(15, 23, 42, 0.7);
  --color-scheme: light;
}

.theme-checkbox:checked ~ .page-wrapper {
  --bg-page: #0b0f19;
  --bg-card: #151d2f;
  --bg-header: #111827;
  --text-main: #f8fafc;
  --text-muted: #94a3b8;
  --border-color: #1e293b;
  --table-head-bg: #1a2438;
  --table-hover: #1f2b42;
  --accent-green: #22c55e;
  --accent-green-hover: #16a34a;
  --warn-bg: #2d1219;
  --warn-border: #be123c;
  --warn-text: #fda4af;
  --modal-bg: rgba(0, 0, 0, 0.85);
  --color-scheme: dark;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--text-main);
  background-color: var(--bg-page);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 15px;
  line-height: 1.5;
  transition: background-color 0.25s ease, color 0.25s ease;
}

.page-wrapper {
  background-color: var(--bg-page);
  min-height: 100vh;
  transition: background-color 0.25s ease;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

button,
input,
select,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.main-container {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
}

.section-block {
  margin-top: 40px;
  margin-bottom: 40px;
}

.site-header {
  background-color: var(--bg-header);
  border-bottom: 1px solid var(--border-color);
  padding: 16px 0;
  transition: background-color 0.25s ease, border-color 0.25s ease;
}

.header__inner {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
@media (min-width: 768px) {
  .header__inner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.header__controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (min-width: 768px) {
  .nav {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
  }
}

.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
}
@media (min-width: 768px) {
  .hero {
    grid-template-columns: 1.1fr 0.9fr;
    align-items: center;
    padding: 40px;
  }
}
.hero__title {
  font-size: clamp(1.6rem, 4vw, 2.5rem);
  line-height: 1.2;
  margin: 0 0 16px;
  color: var(--text-main);
}
.hero__desc {
  font-size: 15px;
  color: var(--text-muted);
  margin-bottom: 24px;
}
.hero__image img {
  width: 100%;
  max-height: 260px;
  -o-object-fit: cover;
     object-fit: cover;
  border-radius: 8px;
}

.monitoring-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .monitoring-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .monitoring-grid {
    grid-template-columns: repeat(5, 1fr);
  }
}

.services-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.form {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
}
.form__fields {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}
@media (min-width: 768px) {
  .form__fields {
    grid-template-columns: repeat(2, 1fr);
  }
}
.form__description {
  display: flex;
  flex-direction: column;
}
@media (min-width: 1024px) {
  .form {
    grid-template-columns: 2fr 1fr;
    align-items: start;
    gap: 24px;
  }
}

.site-footer {
  background-color: #111827;
  color: #94a3b8;
  border-top: 1px solid var(--border-color);
  padding: 40px 0 24px;
  margin-top: 60px;
}

.footer__inner {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
@media (min-width: 768px) {
  .footer__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.footer__nav {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (min-width: 768px) {
  .footer__nav {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px;
  }
}
.footer__nav a {
  font-size: 13px;
  color: #cbd5e1;
  transition: color 0.2s ease;
}
.footer__nav a:hover {
  color: #ffffff;
}

.footer__bottom {
  width: min(100% - 32px, 1200px);
  margin-inline: auto;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}
.footer__bottom .copyright {
  margin: 0;
  font-size: 12px;
  color: #64748b;
}

.section-title-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.section-title {
  font-size: 22px;
  margin: 0;
  color: var(--text-main);
}

.section-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin: 0 0 16px;
}

.brand__title {
  font-size: 20px;
  margin: 0;
  color: var(--text-main);
}

.brand__slogan {
  font-size: 12px;
  color: var(--text-muted);
  margin: 2px 0 0;
}

.nav__link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.nav__link:hover, .nav__link.active {
  color: var(--accent-green);
  border-bottom: 2px solid var(--accent-green);
}

.theme-checkbox {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.theme-toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background-color: var(--table-head-bg);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  transition: transform 0.2s ease;
}
.theme-toggle:hover {
  transform: scale(1.1);
}
.theme-toggle__icon--light {
  display: inline-block;
}
.theme-toggle__icon--dark {
  display: none;
}

.theme-checkbox:checked ~ .page-wrapper .theme-toggle__icon--light {
  display: none;
}
.theme-checkbox:checked ~ .page-wrapper .theme-toggle__icon--dark {
  display: inline-block;
}

.btn {
  display: inline-block;
  padding: 10px 22px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  border: none;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease, transform 0.15s ease;
}
.btn--primary {
  background-color: var(--accent-green);
  color: #ffffff;
}
.btn--primary:hover {
  background-color: var(--accent-green-hover);
  transform: translateY(-2px);
}

.metric-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  min-height: 105px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.metric-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-green);
}
.metric-card__label {
  font-size: 12px;
  color: var(--text-muted);
}
.metric-card__value {
  font-size: 16px;
  color: var(--text-main);
  margin: 4px 0;
}
.metric-card__value--active {
  color: var(--accent-green);
  font-size: 14px;
}
.metric-card__sub {
  font-size: 11px;
  color: var(--text-muted);
}

.live-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
  font-weight: 800;
  color: #ef4444;
  background-color: rgba(239, 68, 68, 0.12);
  padding: 3px 8px;
  border-radius: 4px;
}
.live-tag__dot {
  width: 7px;
  height: 7px;
  background-color: #ef4444;
  border-radius: 50%;
  animation: pulse 1.4s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(0.8);
    opacity: 0.6;
  }
  50% {
    transform: scale(1.3);
    opacity: 1;
  }
}
.ticker {
  height: 24px;
  overflow: hidden;
}
.ticker__roller {
  animation: tick-scroll 8s infinite ease-in-out;
}
.ticker__item {
  display: block;
  height: 24px;
  font-size: 16px;
  font-weight: 700;
  color: var(--text-main);
}

@keyframes tick-scroll {
  0%, 20% {
    transform: translateY(0);
  }
  25%, 45% {
    transform: translateY(-24px);
  }
  50%, 70% {
    transform: translateY(-48px);
  }
  75%, 95% {
    transform: translateY(-72px);
  }
  100% {
    transform: translateY(0);
  }
}
.service-card {
  display: flex;
  flex-direction: column;
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 16px;
  transition: transform 0.2s ease, border-color 0.2s ease;
}
.service-card:hover {
  transform: translateY(-3px);
  border-color: var(--accent-green);
}
.service-card__title {
  font-size: 16px;
  color: var(--text-main);
  margin: 0 0 8px;
}
.service-card__text {
  font-size: 13px;
  color: var(--text-muted);
  margin: 0;
  line-height: 1.45;
}

.warning {
  width: 100%;
  padding: 16px;
  border: 1px solid var(--warn-border);
  border-left: 5px solid var(--warn-border);
  border-radius: 8px;
  background-color: var(--warn-bg);
  position: relative;
  box-sizing: border-box;
}
.warning__badge {
  position: absolute;
  top: 14px;
  right: 14px;
  background-color: var(--warn-border);
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  padding: 2px 6px;
  border-radius: 3px;
}
.warning__title {
  display: block;
  font-size: 15px;
  color: var(--warn-text);
  margin-bottom: 4px;
}
.warning__text {
  font-size: 14px;
  color: var(--warn-text);
  margin: 0;
}

.table-wrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-card);
}

.data-table {
  width: 100%;
  min-width: 640px;
  border-collapse: collapse;
  text-align: left;
}
.data-table th, .data-table td {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border-color);
  font-size: 14px;
}
.data-table th {
  background-color: var(--table-head-bg);
  color: var(--text-muted);
  font-weight: 600;
}
.data-table__row-link {
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.data-table__row-link:hover {
  background-color: var(--table-hover);
}
.data-table__row-link:last-child td {
  border-bottom: none;
}

.table-cell-link {
  font-weight: 600;
  color: var(--text-main);
  display: block;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  font-size: 11px;
  font-weight: 600;
  border-radius: 4px;
}
.badge--success {
  background-color: rgba(34, 197, 94, 0.15);
  color: var(--accent-green);
}

.pill {
  display: inline-block;
  padding: 3px 9px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}
.pill--danger {
  background-color: rgba(239, 68, 68, 0.15);
  color: #ef4444;
}
.pill--warning {
  background-color: rgba(245, 158, 11, 0.15);
  color: #f59e0b;
}
.pill--success {
  background-color: rgba(34, 197, 94, 0.15);
  color: var(--accent-green);
}

.text-danger {
  color: #ef4444;
  font-weight: 600;
}

.text-warning {
  color: #f59e0b;
  font-weight: 600;
}

.text-success {
  color: var(--accent-green);
  font-weight: 600;
}

.form__group {
  margin-bottom: 16px;
}
.form__group label {
  display: block;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 6px;
  color: var(--text-main);
}

.req {
  color: #ef4444;
}

.form input,
.form select,
.form textarea {
  width: 100%;
  max-width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-page);
  color: var(--text-main);
  color-scheme: var(--color-scheme);
  outline: none;
  transition: border-color 0.2s ease;
}
.form input:focus,
.form select:focus,
.form textarea:focus {
  border-color: var(--accent-green);
}

.form__submit {
  margin-top: auto;
  width: 100%;
}
@media (min-width: 1024px) {
  .form__submit {
    width: auto;
    align-self: flex-start;
  }
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: none;
  align-items: center;
  justify-content: center;
}
.modal:target {
  display: flex;
}
.modal__backdrop {
  position: absolute;
  inset: 0;
  background-color: var(--modal-bg);
  backdrop-filter: blur(4px);
}
.modal__dialog {
  position: relative;
  z-index: 10000;
  width: min(90%, 500px);
  background-color: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 26px;
  font-weight: 700;
  color: var(--text-muted);
}
.modal__close:hover {
  color: #ef4444;
}
.modal__title {
  font-size: 18px;
  margin: 0 0 16px;
  color: var(--text-main);
}
.modal__body p {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 8px;
  line-height: 1.45;
}
.modal__body p strong {
  color: var(--text-main);
}/*# sourceMappingURL=main.css.map */