import './App.css'
import { Link } from 'react-router-dom'

type Template = {
  id: number;
  title: string;
  description: string;
};

const templates: Template[] = [
  {
    id: 1,
    title: 'IBC.com',
    description: 'ibc template here'
  }
];

function App() {
  return (
    <div className="library">
      <header className="library__header">
        <p className="eyebrow">Library</p>
        <h1>Website Template library</h1>
        <p className="muted">Select template to edit</p>
      </header>

      <section className="library__grid" aria-label="Template cards">
        {templates.map((template) => (
          <article key={template.id} className="card">
            <div className="card__body">
              <h3>{template.title}</h3>
              <p>{template.description}</p>
            </div>
            <Link className="card__cta" to={`/edit/${template.id}`}>
              Open
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}

export default App