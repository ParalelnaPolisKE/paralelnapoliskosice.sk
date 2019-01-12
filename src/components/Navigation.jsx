import React from 'react';

import { NavigationButton } from './NavigationButton';

export class Navigation extends React.Component {
  state = {
    isToggled: true,
    isSmallScreen: false,
  };

  componentDidMount() {
    this.mediaQueryList = window.matchMedia('(min-width: 576px)');
    this.mediaQueryList.addListener(this.handleScreenWidth);

    this.handleScreenWidth(this.mediaQueryList);
  }

  componentWillUnmount() {
    this.mediaQueryList.removeListener(this.handleScreenWidth);
  }

  handleScreenWidth = e => {
    if (e.matches) {
      // Big screen
      this.setState(() => ({
        isToggled: true,
        isSmallScreen: false,
      }));
    } else {
      // Small screen
      this.setState(() => ({
        isToggled: false,
        isSmallScreen: true,
      }));
    }
  };

  handleToggle = () =>
    this.setState(({ isToggled }) => ({
      isToggled: !isToggled,
    }));

  render() {
    const foo =
      this.state.isSmallScreen && this.state.isToggled
        ? 'bg-grey-lighter shadow'
        : 'pointer-events-none';

    return (
      <nav
        role="navigation"
        className={`fixed sm:static z-50 pin-b pin-r sm:pin-none m-2 p-6 sm:m-0 sm:p-0  sm:bg-transparent flex flex-col items-end md:items-center md:flex-row ${foo}`}
      >
        {this.state.isToggled && [
          <NavigationButton to="/" exact>
            Domov
          </NavigationButton>,
          <NavigationButton to="/o-paralelnej-polis">
            O Paralelnej Polis
          </NavigationButton>,
          <NavigationButton to="/rychlokurz-bezpecnosti">
            Rýchlokurz
          </NavigationButton>,
          <NavigationButton to="/blog">Blog</NavigationButton>,
          <NavigationButton to="/kontakt">Kontakt</NavigationButton>,
        ]}
        {this.state.isSmallScreen && (
          <div
            onClick={this.handleToggle}
            className="bg-grey hover:bg-grey-dark text-xl p-2 mt-8 rounded-full shadow-md cursor-pointer pointer-events-auto"
          >
            {this.state.isToggled ? (
              <span className="icon-cancel" />
            ) : (
              <span className="icon-menu" />
            )}
          </div>
        )}
      </nav>
    );
  }
}
