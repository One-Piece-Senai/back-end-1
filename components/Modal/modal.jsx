import './modal.css';

export default function Modal() {
  return (
    <div className="intro-page">
      <div className="container">
        <h1>Say hello to the world</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus nunc, ac rhoncus odio
          congue quis. Sed ac semper orci, eu porttitor lacus.
        </p>
        <button className="btn primary">Sign up for free</button>

        <div className="buttons-group">
          <button className="btn secondary">test 1</button>
          <button className="btn secondary">test 2</button>
          <button className="btn secondary">test 3</button>
          <button className="btn secondary">test 4</button>
          <button className="btn secondary">test 5</button>
        </div>
      </div>
    </div>
  );
}