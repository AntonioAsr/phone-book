import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MobileTearSheet extends Component {

  static propTypes = {
    children: PropTypes.node,
    height: PropTypes.number.isRequired,
  };
  //pass number of current contacts to set max height?
  static defaultProps = {
    height: 1200,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  render() {
    const {
      prepareStyles,
    } = this.context.muiTheme;

    const styles = {
      root: {
        maxWidth: 560,
        display:'block',
        margin:'auto'
      },
      container: {
        border: 'solid 1px #d9d9d9',
        borderBottom: 'none',
        height: this.props.height,
        display: 'block',
        margin: 'auto'
      }
    };

    return (
      <div style={prepareStyles(styles.root)}>
        <div style={prepareStyles(styles.container)}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MobileTearSheet;