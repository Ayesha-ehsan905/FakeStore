const FakeSync = {
  signin(callback: VoidFunction) {
    setTimeout(callback, 100); // after timeout render
  },
  signout(callback: VoidFunction) {
    setTimeout(callback, 100);
  },
};

export { FakeSync };
