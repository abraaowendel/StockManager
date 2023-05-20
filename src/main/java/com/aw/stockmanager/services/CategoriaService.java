package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.CategoriaDTO;
import com.aw.stockmanager.repositories.CategoriaRepository;
import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoriaService {
    private final CategoriaRepository repository;

    public CategoriaService(CategoriaRepository repository) {
        this.repository = repository;
    }
    @Transactional(readOnly = true)
    public List<CategoriaDTO> findAll() {
        return repository.findAll().stream().map(CategoriaDTO::new).toList();
    }
    @Transactional(readOnly = true)
    public CategoriaDTO findById(Long id) {
        return repository.findById(id)
                .map(CategoriaDTO::new)
                .orElseThrow(() -> new ResourceNotFoundException("Categoria não encontrado."));
    }

}
