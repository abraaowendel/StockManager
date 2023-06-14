package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.FornecedorDTO;
import com.aw.stockmanager.model.entities.Fornecedor;
import com.aw.stockmanager.repositories.FornecedorRepository;
import com.aw.stockmanager.services.exceptions.DataBaseException;
import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FornecedorService {
    private final FornecedorRepository repository;

    public FornecedorService(FornecedorRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<FornecedorDTO> findAll() {
        return repository.findAll().stream().map(FornecedorDTO::new).toList();
    }

    @Transactional(readOnly = true)
    public FornecedorDTO findById(Long id) {
        return repository.findById(id)
                .map(FornecedorDTO::new)
                .orElseThrow(() -> new ResourceNotFoundException("Fornecedor não encontrado."));
    }
    @Transactional
    public FornecedorDTO insert(FornecedorDTO dto) {
        var entity = new Fornecedor();
        BeanUtils.copyProperties(dto, entity);
        repository.save(entity);
        return new FornecedorDTO(entity);
    }
    @Transactional
    public FornecedorDTO update(Long id, FornecedorDTO dto) {
        try{
            var entity = repository.getReferenceById(id);
            BeanUtils.copyProperties(dto, entity);
            repository.save(entity);
            return new FornecedorDTO(entity);
        }
        catch (EntityNotFoundException exception){
            throw new ResourceNotFoundException("Fornecedor não encontrado.");
        }
    }
    @Transactional
    public void delete(Long id) {
        try{
            // DEVO DELETAR TODAS AS MERCADORIAS ASSOCIADAS A ESSE VENDEDOR
            if(repository.findById(id).isEmpty()) {
                throw new ResourceNotFoundException("Fornecedor não encontrado.");
            }
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException exception){
            throw new DataBaseException("Essa ação compromete a integridade do banco de dados.");
        }
    }
}
