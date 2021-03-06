let onCountdownFinished: Function;

export default () => {
  // Remove ability to read focus value.
  Object.defineProperty(document, 'hasFocus', {
    // @ts-ignore
    get: (): ReferenceError => Lumm1t
  });

  // If time has elapsed, don't do anything.
  onCountdownFinished = (): void => {};

  // Lumm1t is not defined, ignore all errors.
  window.onerror = (): boolean => true;
};
