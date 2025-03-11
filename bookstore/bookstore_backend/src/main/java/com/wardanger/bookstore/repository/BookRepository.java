package com.wardanger.bookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.wardanger.bookstore.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {

}
