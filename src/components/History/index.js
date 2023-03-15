import {Component} from 'react'
import './index.css'
import HistoryItem from '../HistoryItem'

class History extends Component {
  state = {
    searchInput: '',
    historyList: [],
  }

  componentDidMount() {
    const {initialHistoryList} = this.props
    this.setState({historyList: initialHistoryList})
  }

  onChangeInput = event => {
    this.setState({searchInput: event.target.value})
  }

  filterHistoryList = () => {
    const {searchInput, historyList} = this.state
    const updatedHistoryList = historyList.filter(eachHistory =>
      eachHistory.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return updatedHistoryList
  }

  deleteApp = id => {
    const {historyList} = this.state
    const updatedHistoryList = historyList.filter(
      eachList => eachList.id !== id,
    )

    this.setState({historyList: updatedHistoryList})
    console.log(historyList)
  }

  render() {
    const {searchInput} = this.state
    const filteredHistoryList = this.filterHistoryList()

    return (
      <div className="main-container">
        <div className="first-container">
          <div className="header">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
              alt="app logo"
              className="image"
            />

            <div className="items">
              <div className="search-image">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                />
              </div>
              <div>
                <input
                  type="search"
                  className="input"
                  placeholder="Search history"
                  onChange={this.onChangeInput}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
        </div>
        {filteredHistoryList.length === 0 ? (
          <p className="no-history">There is no history to show</p>
        ) : (
          <ul className="bottom-container">
            {filteredHistoryList.map(eachHistory => (
              <HistoryItem
                eachHistory={eachHistory}
                key={eachHistory.id}
                deleteApp={this.deleteApp}
              />
            ))}
            )
          </ul>
        )}
      </div>
    )
  }
}

export default History
