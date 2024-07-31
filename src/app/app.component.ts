import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'E-cart';
  inputText!: string;
  bindInputValue: string = '';

  onBtnSearch() {
    this.bindInputValue = this.inputText;
  }

  products = [
    {
      id: 1,
      product: 'adidas',
      discription: "Adidas mens Aerobolt Running Shoe",
      price: '2,299',
      img: 'https://images-eu.ssl-images-amazon.com/images/I/51+kGGhkCbL._AC_UL232_SR232,232_.jpg',
      inStock: true

    },
    {
      id: 2,
      product: 'puma',
      discription: "Puma Men's Dazzler Sneakers",
      price: '1,999',
      img: 'https://images-eu.ssl-images-amazon.com/images/I/51GOpp8rAJL._AC_UL232_SR232,232_.jpg',
      inStock: true

    },
    {
      id: 3,
      product: 'ASIAN',
      discription: "Men's Wonder-13 Sports Running Shoes",
      price: "545",
      img: 'https://images-eu.ssl-images-amazon.com/images/I/61LctS6qp7L._AC_UL232_SR232,232_.jpg',
      inStock: false

    },
    {
      id: 4,
      product: 'Bersache',
      discription: "Bersache Sports Shoes for Men |Latest Stylish Sports",
      price: '799',
      img: 'https://images-eu.ssl-images-amazon.com/images/I/61bLe2eFyOL._AC_UL232_SR232,232_.jpg',
      inStock: true

    },
    {
      id: 5,
      product: 'Campus',
      discription: "Campus First Running Walking Jogging Walking Gym",
      price: '545',
      img: 'https://images-eu.ssl-images-amazon.com/images/I/61aGSZRDvgL._AC_UL232_SR232,232_.jpg',
      inStock: false

    },
    {
      id: 6,
      product: 'Bersache',
      discription: "Premium Sports,Gym, Tranding Stylish Running Shoes for Men",
      price: '545',
      img: 'https://images-eu.ssl-images-amazon.com/images/I/71W7hnW5R7L._AC_UL232_SR232,232_.jpg',
      inStock: false

    },

  ]
}
