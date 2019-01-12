import React from 'react';

import { NavigationButton } from './NavigationButton';

export class Navigation extends React.Component {
  state = {
    isToggled: true,
    showToggler: false,
  };

  mediaQueryList = {};

  componentDidMount() {
    this.mediaQueryList = window.matchMedia('(min-width: 576px)');
    this.mediaQueryList.addListener(this.checkWidth);

    this.checkWidth(this.mediaQueryList);
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.checkWidth);
  }

  checkWidth = e => {
    if (e.matches) {
      // Big screen
      this.setState(() => ({
        isToggled: true,
        showToggler: false,
      }));
    } else {
      // Small screen
      this.setState(() => ({
        isToggled: false,
        showToggler: true,
      }));
    }
  };

  handleToggle = () =>
    this.setState(({ isToggled }) => ({
      isToggled: !isToggled,
    }));

  render() {
    return (
      <nav role="navigation">
        {this.state.isToggled && (
          <div className="flex flex-col items-end md:items-center md:flex-row">
            <NavigationButton to="/" exact>
              Domov
            </NavigationButton>
            <NavigationButton to="/o-paralelnej-polis">
              O Paralelnej Polis
            </NavigationButton>
            <NavigationButton to="/rychlokurz-bezpecnosti">
              Rýchlokurz
            </NavigationButton>
            <NavigationButton to="/blog">Blog</NavigationButton>
            <NavigationButton to="/kontakt">Kontakt</NavigationButton>
          </div>
        )}
        {this.state.showToggler && (
          <div onClick={this.handleToggle}>
            {this.state.isToggled ? 'x' : '+'}
          </div>
        )}
      </nav>
    );
  }
}
