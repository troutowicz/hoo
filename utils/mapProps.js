const assign = Object.assign;

export default propsMapper => ({
  init() {
    this._props = assign({},
      { ...propsMapper(this._props) }
    );
  },
});
