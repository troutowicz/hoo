const assign = Object.assign;
import React from 'react';

export default Component => ({
  render() {
    const props = assign({},
      this._props,
      this.props
    );

    return <Component {...props} />;
  },
});
