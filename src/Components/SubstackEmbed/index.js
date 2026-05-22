import React from 'react';
import './index.scss';

const SubstackEmbed = () => (
  <div className="substack-embed">
    <iframe
      src="https://terrament.substack.com/embed?transparent=1"
      width="480"
      height="200"
      style={{ border: 0, background: 'transparent' }}
      frameBorder="0"
      scrolling="no"
      title="Subscribe to Terrament on Substack"
    />
  </div>
);

export default SubstackEmbed;
