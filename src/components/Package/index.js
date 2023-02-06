const Package = props => {
  const {details} = props
  const {description, imageUrl, name} = details

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </li>
  )
}

export default Package
