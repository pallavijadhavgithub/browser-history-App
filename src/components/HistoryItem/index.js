import './index.css'

const HistoryItem = props => {
  const {eachHistory, deleteApp} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachHistory

  const onDelete = () => {
    deleteApp(id)
  }

  return (
    <li className="list-items">
      <p className="time">{timeAccessed}</p>
      <div className="middle-container">
        <div className="info-container">
          <img src={logoUrl} className="image" alt="domain logo" />
          <p className="title">{title}</p>
          <p className="domain-url">{domainUrl}</p>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="delete-button"
          onClick={onDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
