import { Component, OnInit } from '@angular/core';

interface MenuOption {
  name: string;
  icon?: string;
}


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  menu!: MenuOption[];
  options!: MenuOption[];

  ngOnInit(): void {
    this.menu = [{ name: 'Buy crypto', icon: '' }, { name: 'Trading' }];

    this.options = [{ name: 'Wallet', icon: '' }, { name: 'EUR' }];
  }
}
