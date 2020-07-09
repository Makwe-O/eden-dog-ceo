import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Paw from '../../assests/paw.svg';
import Input from '../common/Input';
import Button from '../common/Button';
const Header = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const handleSearch = () => {
    history.push(`/search/${search}`);
  };
  return (
    <div className="header">
      <div className="container header__intro">
        <div className="header__logo">
          <Link to="/">
            <img src={Paw} alt="doggo logo" width="40px" />
            <span className="header__logo-text">Doggo</span>
          </Link>
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
          <Input
            placeholder="Type a specie of dog... e.g Corgi"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            text="Search"
            btnStyle="btn"
            onClick={handleSearch}
            disabled={search.length === 0}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
