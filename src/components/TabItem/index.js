// Write your code here
// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTab = () => {
    setActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'tab-button Active' : 'tab-button'

  return (
    <li className="tab-item">
      <button className={activeTabClassName} type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
