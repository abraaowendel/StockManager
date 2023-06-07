package com.aw.stockmanager.repositories;

import com.aw.stockmanager.model.entities.Categoria;
import com.aw.stockmanager.model.entities.Produto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>{
    List<Produto> findByCategoriaNome(String category);
    @Query("SELECT p FROM Produto p JOIN p.categoria c WHERE c.nome = :nomeCategoria")
    Page<Produto> buscarPorCategoria(String nomeCategoria, Pageable pageable);

    Long countByCategoria(Categoria categoria);
}
