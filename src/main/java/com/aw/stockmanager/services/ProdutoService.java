package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.ProdutoDTO;
import com.aw.stockmanager.model.entities.Produto;
import com.aw.stockmanager.repositories.ProdutoRepository;
import com.aw.stockmanager.services.exceptions.DataBaseException;
import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class ProdutoService {
    private final ProdutoRepository repository;

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
               .orElseThrow(() -> new ResourceNotFoundException("Produto não encontrado."));
    }
    @Transactional
    public ProdutoDTO insert(ProdutoDTO dto) {
        var entity = new Produto();
        BeanUtils.copyProperties(dto, entity);
        repository.save(entity);
        return new ProdutoDTO(entity);
    }
    @Transactional
    public ProdutoDTO update(Long id, ProdutoDTO dto) {
        try{
            var entity = repository.getReferenceById(id);
            BeanUtils.copyProperties(dto, entity);
            repository.save(entity);
            return new ProdutoDTO(entity);
        }
        catch (EntityNotFoundException exception){
            throw new ResourceNotFoundException("Produto não encontrado.");
        }
    }
    @Transactional
    public void delete(Long id) {
        try{
            if(repository.findById(id).isEmpty()) {
                throw new ResourceNotFoundException("Produto não encontrado");
            }
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException exception){
            throw new DataBaseException("Essa ação compromete a integridade do banco de dados.");
        }
    }
}
