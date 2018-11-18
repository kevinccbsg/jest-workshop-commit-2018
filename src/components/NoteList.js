import React from 'react';
import ListItem from '../components/ListItem';

const NoteList = ({ items }) => (
  <div className="ui cards" style={{ justifyContent: 'center' }}>
    {items.map((obj) => (
      <ListItem key={obj.id} title={obj.title} description={obj.description} />
    ))}
  </div>
);

export default NoteList;
