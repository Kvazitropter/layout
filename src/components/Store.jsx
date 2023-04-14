import React from 'react';
import IconSwitch from './IconSwitch.jsx';
import CardsView from './CardsView.jsx';
import ListView from './ListView.jsx';

const mapping = {
  view_module: (data) => <CardsView cards={data} />,
  view_list: (data) => <ListView items={data} />,
};

class Store extends React.Component {
  constructor(props) {
    super(props);

    const { icon, icons, products } = props;
    const [icon1, icon2] = icons;
    const currentView = icon1 !== icon ? icon1 : icon2;
    this.state = { shownIcon: icon, currentView, products };
  }

  handleSwitch = () => {
    this.setState((state) => {
      const { currentView, shownIcon } = state;
      return { ...state, currentView: shownIcon, shownIcon: currentView };
    });
  };

  render() {
    const { currentView, shownIcon, products } = this.state;

    return (
      <div className='container'>
        <IconSwitch icon={shownIcon} onSwitch={this.handleSwitch} />
        {/* <div className='products'> */}
          {mapping[currentView](products)}
        {/* </div> */}
      </div>
    );
  }
};

Store.defaultProps = {
  icon: 'view_list',
};

export default Store;
