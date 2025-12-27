function createShoppingCart() {
  let items = [];
  let discount = 0; 

  return {
    addItem(item) {
      const existing = items.find(i => i.id === item.id);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        items.push({ ...item });
      }
    },

    getItems() {
      return items;
    },

    updateQuantity(id, quantity) {
      const item = items.find(i => i.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },

    removeItem(id) {
      items = items.filter(i => i.id !== id);
    },

    getTotal() {
      let total = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      if (discount > 0) {
        total -= total * (discount / 100);
      }

      return Number(total.toFixed(2));
    },

    getItemCount() {
      return items.reduce((count, item) => count + item.quantity, 0);
    },

    isEmpty() {
      return items.length === 0;
    },

    applyDiscount(code, percent) {
      if (code && percent > 0) {
        discount = percent;
      }
    },

    clear() {
      items = [];
      discount = 0;
    }
  };
}
