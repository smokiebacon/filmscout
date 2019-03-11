import React from 'react'
import { AutoComplete } from 'antd';

function onSelect(value) {
  console.log('onSelect', value);
}

class Searchbar extends React.Component {
  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  render() {
    const { dataSource } = this.state;
    return (
      <AutoComplete
        dataSource={dataSource}
        style={{ width: 250 }}
        onSelect={onSelect}
        onSearch={this.handleSearch}
        placeholder="Search..."
      />
    );
  }
}

export default Searchbar;