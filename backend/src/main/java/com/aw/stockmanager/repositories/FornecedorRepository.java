package com.aw.stockmanager.repositories;

import com.aw.stockmanager.model.entities.Fornecedor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FornecedorRepository extends JpaRepository<Fornecedor, Long> {
}
