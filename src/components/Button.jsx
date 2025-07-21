export default function Button({ onClick }) {
  return (
    <div style={{ textAlign: 'center', marginTop: 20 }}>
      <button className="button" onClick={onClick}>Load more</button>
    </div>
  );
}
