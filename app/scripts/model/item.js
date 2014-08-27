'use strict';
function Item(barcode, category,name, price,unit) {
    this.barcode = barcode;
    this.category = category;
    this.name = name;
    this.price = price || 0.00;
    this.unit = unit;
}