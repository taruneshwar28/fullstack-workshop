function createEventEmitter() {
  const events = {};
  return {
    on(event, callback) {
      if (!events[event]) {
        events[event] = [];
      }

      events[event].push(callback);

      return function unsubscribe() {
        events[event] = events[event].filter(cb => cb !== callback);
      };
    },

    once(event, callback) {
      const wrapper = (...args) => {
        callback(...args);
        this.off(event, wrapper);
      };

      this.on(event, wrapper);
    },

    emit(event, data) {
      if (!events[event]) return;

      [...events[event]].forEach(cb => cb(data));
    },

    off(event, callback) {
      if (!events[event]) return;
      
      if (!callback) {
        delete events[event];
      } else {
        events[event] = events[event].filter(cb => cb !== callback);
      }
    }
  };
}
