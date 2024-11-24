export default function Pet(props) {
  return (
    <div>
      <h1>{props.animal}</h1>
      <h2>{props.name}</h2>
      <h2>{props.breed}</h2>
    </div>
  );
}
