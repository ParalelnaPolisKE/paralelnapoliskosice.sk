import React from 'react';
import classnames from 'classnames';

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
    return (
      <nav
        role="navigation"
        className={classnames(
          'fixed sm:static z-50 pin-b pin-r sm:pin-none p-3 pl-12 pt-12 sm:p-0  sm:bg-transparent flex flex-col items-end md:items-center md:flex-row',
          {
            'bg-grey-light shadow':
              this.state.isSmallScreen && this.state.isToggled,
          },
          {
            'pointer-events-none':
              this.state.isSmallScreen && !this.state.isToggled,
          }
        )}
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
            className="bg-grey-dark hover:bg-grey-darker text-xl p-3 mt-8 rounded-full shadow-md cursor-pointer pointer-events-auto"
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
