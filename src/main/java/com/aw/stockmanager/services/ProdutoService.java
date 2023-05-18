package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.ProdutoDTO;
import com.aw.stockmanager.repositories.ProdutoRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProdutoService {
    private ProdutoRepository repository;

    public ProdutoService(ProdutoRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public Page<ProdutoDTO> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(ProdutoDTO::new);
    }
    @Transactional(readOnly = true)
    public ProdutoDTO findById(Long id) {
        return repository.findById(id)
               .map(ProdutoDTO::new)
               .orElseThrow();
    }

    public ProdutoDTO insert(ProdutoDTO dto) {
    }

    public ProdutoDTO update(Long id, ProdutoDTO dto) {
    }

    public void delete(Long id) {
    }
}
