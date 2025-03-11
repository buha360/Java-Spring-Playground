import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:8080/api/books';

  async getBooks() {
    const response = await axios.get(this.apiUrl);
    return response.data;
  }

  async addBook(book: any) {
    const response = await axios.post(this.apiUrl, book);
    return response.data;
  }

  async deleteBook(id: number) {
    await axios.delete(`${this.apiUrl}/${id}`);
  }
}
