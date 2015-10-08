const assign = Object.assign;

export default (stateName, stateUpdaterName, initialState) => ({
  init() {
    this.state = { stateValue: initialState };

    this._props = assign({},
      this._props,
      {
        [stateName]: this.state.stateValue,
        [stateUpdaterName]: this.updateStateValue.bind(this),
      }
    );
  },

  componentWillUpdate(nextProps, { stateValue }) {
    this._props[stateName] = stateValue;
  },

  updateStateValue(updateFn) {
    this.setState(({ stateValue }) => ({
      stateValue: typeof updateFn === 'function' ? updateFn(stateValue) : updateFn
    }));
  },
});
