import React from 'react';
import Paw from '../../assests/paw.svg';
import Input from '../common/Input';
import Button from '../common/Button';
const Header = () => {
  return (
    <div className="header">
      <div className="container header__intro">
        <div className="header__logo">
          <img src={Paw} alt="doggo logo" width="40px" />
          <span className="header__logo-text">Doggo</span>
        </div>
        <div>
          <p className="header__logo-subtext">
            A safe space to view pics of you favourite dogs
          </p>
          <p className="header__logo-subtext">
            Warm your heart with pictures of the cutest dogs
          </p>
        </div>
        <div className="header__search">
          <Input placeholder="Type a specie of dog... e.g Corgi" />
          <Button text="Search" style="btn" />
        </div>
      </div>
    </div>
  );
};

export default Header;
