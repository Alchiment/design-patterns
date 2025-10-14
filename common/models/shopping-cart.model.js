class ShoppingCart {
  constructor() {
    this.items = [];
    this.discounts = [];
    this.taxRate = 0;
    this.shippingCost = 0;
  }

  // Add item to cart
  addItem(product, quantity = 1) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({
        product: { ...product },
        quantity: quantity
      });
    }
    
    return this;
  }

  // Remove item from cart
  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
    return this;
  }

  // Update item quantity
  updateQuantity(productId, quantity) {
    const item = this.items.find(item => item.product.id === productId);
    
    if (item) {
      if (quantity <= 0) {
        this.removeItem(productId);
      } else {
        item.quantity = quantity;
      }
    }
    
    return this;
  }

  // Get item by product ID
  getItem(productId) {
    return this.items.find(item => item.product.id === productId);
  }

  // Clear cart
  clear() {
    this.items = [];
    this.discounts = [];
    return this;
  }

  // Calculate subtotal (before discounts and tax)
  getSubtotal() {
    return this.items.reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  }

  // Add discount
  addDiscount(discount) {
    // discount object: { type: 'percentage'|'fixed', value: number, code: string }
    this.discounts.push(discount);
    return this;
  }

  // Remove discount
  removeDiscount(code) {
    this.discounts = this.discounts.filter(d => d.code !== code);
    return this;
  }

  // Calculate total discount amount
  getDiscountAmount() {
    const subtotal = this.getSubtotal();
    
    return this.discounts.reduce((total, discount) => {
      if (discount.type === 'percentage') {
        return total + (subtotal * (discount.value / 100));
      } else if (discount.type === 'fixed') {
        return total + discount.value;
      }
      return total;
    }, 0);
  }

  // Set tax rate
  setTaxRate(rate) {
    this.taxRate = rate;
    return this;
  }

  // Calculate tax amount
  getTaxAmount() {
    const subtotalAfterDiscount = this.getSubtotal() - this.getDiscountAmount();
    return subtotalAfterDiscount * (this.taxRate / 100);
  }

  // Set shipping cost
  setShippingCost(cost) {
    this.shippingCost = cost;
    return this;
  }

  // Calculate free shipping eligibility
  isFreeShippingEligible(threshold = 50) {
    return this.getSubtotal() >= threshold;
  }

  // Get final total
  getTotal() {
    const subtotal = this.getSubtotal();
    const discount = this.getDiscountAmount();
    const tax = this.getTaxAmount();
    const shipping = this.isFreeShippingEligible() ? 0 : this.shippingCost;
    
    return Math.max(0, subtotal - discount + tax + shipping);
  }

  // Get cart summary
  getSummary() {
    return {
      items: this.items.map(item => ({
        id: item.product.id,
        name: item.product.name,
        price: item.product.price,
        quantity: item.quantity,
        subtotal: item.product.price * item.quantity
      })),
      subtotal: this.getSubtotal(),
      discounts: this.discounts,
      discountAmount: this.getDiscountAmount(),
      taxRate: this.taxRate,
      taxAmount: this.getTaxAmount(),
      shippingCost: this.isFreeShippingEligible() ? 0 : this.shippingCost,
      freeShipping: this.isFreeShippingEligible(),
      total: this.getTotal(),
      itemCount: this.getItemCount()
    };
  }

  // Get total number of items
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  // Check if cart is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Apply bulk discount based on quantity
  applyBulkDiscount(productId, quantityThreshold, discountPercentage) {
    const item = this.getItem(productId);
    
    if (item && item.quantity >= quantityThreshold) {
      const discountAmount = (item.product.price * item.quantity * discountPercentage) / 100;
      return discountAmount;
    }
    
    return 0;
  }

  // Export cart to JSON
  toJSON() {
    return JSON.stringify({
      items: this.items,
      discounts: this.discounts,
      taxRate: this.taxRate,
      shippingCost: this.shippingCost
    });
  }

  // Import cart from JSON
  fromJSON(json) {
    const data = JSON.parse(json);
    this.items = data.items || [];
    this.discounts = data.discounts || [];
    this.taxRate = data.taxRate || 0;
    this.shippingCost = data.shippingCost || 0;
    return this;
  }
}


module.exports = ShoppingCart;