import React from 'react';

class ListItem extends React.Component {
  constructor() {
    super();
    this.state = { open: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { open } = this.state;
    const { title, description } = this.props;
    return (
      <div className="card">
        <div className="content">
          <div className="header" onClick={this.handleClick}>{title}</div>
          {open && (
            <div className="description">{description}</div>
          )}
        </div>
      </div>
    );
  }
}

export default ListItem;
