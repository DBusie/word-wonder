import React from "react";
import "./WordFinder.css";

export default function WordFinder() {
  return (
    <div className="WordFinder">
      <div className="row">
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            aria-label="large"
            placeholder="Type your word here..."
          />
        </div>
        <div className="col">
          <input className="btn btn-dark" type="submit" value="Search" />
        </div>
      </div>{" "}
    </div>
  );
}
