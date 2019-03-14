import React from 'react'
import  ReactTags from 'react-tag-autocomplete'
class Searchbar extends React.Component {
  constructor (props) {
    super(props)
 
    this.state = {
      tags: [],
      suggestions: [
        { id: 1, name: "Garden" },
        { id: 2, name: "Sauna" },
        { id: 3, name: "Fireplace" },
        { id: 4, name: "Spa" },
        { id: 5, name: "Pool" },
        { id: 6, name: "Swimming Pool" },
        { id: 7, name: "Playground" },
        { id: 8, name: "Chandelier" },
        { id: 9, name: "Wine Cellar" },
        { id: 10, name: "Gym" },
        { id: 11, name: "Escalator" },
        { id: 12, name: "Billards" },
        { id: 13, name: "Elevator" },
      ]
    }
  }
 
  handleDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  handleAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
    this.props.query(tags)
  }
 
  render () {
    return (
      <ReactTags 
        tags={this.state.tags}
        suggestions={this.state.suggestions}
        handleDelete={this.handleDelete.bind(this)}
        handleAddition={this.handleAddition.bind(this)}
        />
    )
  }
}

export default Searchbar;