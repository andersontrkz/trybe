import React from 'react';
import Image from './Image'

class UserProfile extends React.Component {
  render() {
    const { name, email, avatar} = this.props.user;
    return (
      <div>
        <p>nome: { name }, </p>
        <p>email: { email }</p>
        <Image source={ avatar } alternativeText={ name } />
      </div>
    );
  }
}

export default UserProfile