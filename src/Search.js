import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="mt-4">
        <div className="row">
          <div className="col-7 w-100">
            <div className="form-group">
              <input
                type="search"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter your city here"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-primary w-100">
              Go
            </button>
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-success w-100">
              Current location
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
