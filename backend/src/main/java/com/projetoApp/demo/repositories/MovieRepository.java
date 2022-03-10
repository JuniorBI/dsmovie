package com.projetoApp.demo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projetoApp.demo.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {	
	
}
