export default function Card({ image }) {
  return (
    <div
      className="card" /* style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0), rgba(0, 0, 0, 1)), url(${image.urls.regular})` }} */
    >
      <img src={image.urls.regular} />
      <h4>{"12345"}</h4>
    </div>
  );
}
