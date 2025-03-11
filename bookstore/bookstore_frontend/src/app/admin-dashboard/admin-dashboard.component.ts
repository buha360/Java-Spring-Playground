import { Component } from '@angular/core';
import { NgFor, NgIf, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    NgFor, NgIf, FormsModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatTableModule
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['title', 'author', 'genre', 'price', 'actions'];
  newBook = { title: '', author: '', genre: '', price: '', description: '' };

  constructor(private bookService: BookService) {}

  async ngOnInit() {
    try {
      console.log('Fetching books...');
      const books = await this.bookService.getBooks();
      console.log('Books received:', books);
      this.dataSource.data = books;
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  }

  async addBook() {
    try {
      console.log('Adding book:', this.newBook);
      const addedBook = await this.bookService.addBook(this.newBook);
      console.log('Book added successfully:', addedBook);
      this.dataSource.data = [...this.dataSource.data, addedBook];

      this.newBook = { title: '', author: '', genre: '', price: '', description: '' };
    } catch (error) {
      console.error('Error adding book:', error);
    }
  }

  async deleteBook(id: number) {
    try {
      console.log('Deleting book with ID:', id);
      await this.bookService.deleteBook(id);
      this.dataSource.data = this.dataSource.data.filter(book => book.id !== id);
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  }
}
