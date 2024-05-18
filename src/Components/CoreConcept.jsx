export default function CoreConcept({image,title,description}) {
    return (
      <li>
        <img src={image} alt={title} />
        <p>{description}</p>
      </li>
    );
  }