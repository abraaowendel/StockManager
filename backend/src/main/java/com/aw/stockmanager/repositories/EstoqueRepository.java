package com.aw.stockmanager.repositories;

import com.aw.stockmanager.model.entities.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EstoqueRepository extends JpaRepository<Estoque, Long> {
    long countByQuantidade(int i);
}
