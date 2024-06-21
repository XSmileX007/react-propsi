export default function UserChildren({ ime, godine, children }) {
  return (
    <div>
      <p>
        Moje ime je {ime} a imam godina {godine}
      </p>
      <p>{children}</p>
    </div>
  );
}
