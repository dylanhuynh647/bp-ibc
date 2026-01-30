import type { ChangeEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AVAILABLE_PAGES, getPageOption } from './pageOptions';

function RetrievePages() {
  return AVAILABLE_PAGES;
}

export function PageDropdown() {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedId = getPageOption(id).id;

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    navigate(`/edit/${event.target.value}`);
  };

  return (
    <div className="editor-field">
      <label htmlFor="page-select">Available pages</label>
      <select
        id="page-select"
        className="editor-select"
        value={selectedId}
        onChange={handleChange}
      >
        {AVAILABLE_PAGES.map((page) => (
          <option key={page.id} value={page.id}>
            {page.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default RetrievePages;