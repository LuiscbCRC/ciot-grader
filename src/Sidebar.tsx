import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import type { IHighlight } from './lib/pdf/types';

interface Props {
  highlights: Array<IHighlight>;
  resetHighlights: () => void;
  toggleDocument: () => void;
  deleteHighlight: (highlightId: string) => void;
}

const updateHash = (highlight: IHighlight) => {
  document.location.hash = `highlight-${highlight.id}`;
};

export function Sidebar({
  highlights,
  toggleDocument,
  resetHighlights,
  deleteHighlight,
}: Props) {

  return (
    <div className="sidebar" style={{ width: "25vw" }}>
      <div className="description" style={{ padding: "1rem" }}>
        <h2 style={{ marginBottom: "1rem" }}>Grading</h2>
        <p>
          <small>
            To create area highlight hold ⌥ Option key (Alt), then click and
            drag.
          </small>
        </p>
      </div>

      <ul className="sidebar__highlights">
        {highlights.map((highlight, index) => (
          <li
            key={index}
            className="sidebar__highlight"
            onClick={() => {
              updateHash(highlight);
            }}
          >
            <button
            style={{
              position: "relative",
              top: "0",
              left: "300px",
              padding: "0.5rem",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
              className="delete-button"
              onClick={(event) => {
                event.stopPropagation(); // Prevent the click from triggering the li's onClick event
                deleteHighlight(highlight.id);
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <div>
              {highlight && highlight.content.text ? (
                <>
                  <blockquote style={{ marginTop: "0.5rem" }}>
                    {`${highlight.content.text.slice(0, 90).trim()}…`}
                  </blockquote>
                </>
              ) : null}
              {highlight.content.image ? (
                <div
                  className="highlight__image"
                  style={{ marginTop: "0.5rem" }}
                >
                  <img src={highlight.content.image} alt={"Screenshot"} />
                </div>
              ) : null}
            </div>
            <p>
              Grading Comment: <strong>{highlight.comment.text}</strong>{" "}
            </p>
            <p>Grade: {highlight.comment.grade}</p>
            <div className="highlight__location">
              Page {highlight.position.pageNumber}
            </div>
          </li>
        ))}
      </ul>
      {highlights.length > 0 ? (
        <div style={{ padding: "1rem" }}>
          <button
  onClick={resetHighlights}
  style={{
    backgroundColor: "#ffc107",
    color: "#fff", // Text color
    padding: "0.5rem 1rem", // Adjust padding as needed
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  }}
>
  Reset grading
</button>
        </div>
      ) : null}
    </div>
  );
}
