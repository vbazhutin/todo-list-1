import React from "react"

export const Contact = () => (
  <form>
    <div className="field">
      <label className="label" htmlFor="name">
        Name
      </label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Text input"
          id="name"
        />
      </div>
    </div>

    <div className="field">
      <label className="label" htmlFor="email">
        Email
      </label>
      <div className="control has-icons-left has-icons-right">
        <input
          className="input is-danger"
          type="email"
          placeholder="Email input"
          value="hello@"
          id="email"
        />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-exclamation-triangle"></i>
        </span>
      </div>
      <p className="help is-danger">This email is invalid</p>
    </div>

    <div className="field">
      <label className="label" htmlFor="msg">
        Message
      </label>
      <div className="control">
        <textarea
          className="textarea"
          placeholder="Textarea"
          id="msg"
        ></textarea>
      </div>
    </div>

    <div className="field is-grouped">
      <div className="control">
        <button className="button is-link">Submit</button>
      </div>
      <div className="control">
        <button className="button is-link is-light">Cancel</button>
      </div>
    </div>
  </form>
)
