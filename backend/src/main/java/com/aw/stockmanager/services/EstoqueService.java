package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.EstoqueDTO;
import com.aw.stockmanager.model.dto.FornecedorDTO;
import com.aw.stockmanager.model.entities.Estoque;
import com.aw.stockmanager.repositories.EstoqueRepository;
import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class EstoqueService {
    private final EstoqueRepository repository;

    public EstoqueService(EstoqueRepository repository) {
        this.repository = repository;
    }

    @Transactional(readOnly = true)
    public List<EstoqueDTO> findAll() {
        return repository.findAll().stream().map(EstoqueDTO::new).toList();
    }

    @Transactional
    public EstoqueDTO insert(EstoqueDTO dto) {
        var entity = new Estoque();
        copiarDTOtoEntity(dto, entity);
        repository.save(entity);
        return new EstoqueDTO(entity);
    }
    @Transactional

    public EstoqueDTO update(Long id, EstoqueDTO dto) {
        try{
            var entity = repository.getReferenceById(id);
            BeanUtils.copyProperties(dto, entity);
            repository.save(entity);
            return new EstoqueDTO(entity);
        }
        catch (EntityNotFoundException exception){
            throw new ResourceNotFoundException("Mercadoria não encontrada no estoque.");
        }
    }
    public void copiarDTOtoEntity(EstoqueDTO dto, Estoque entity) {
        entity.setId(dto.getId());
        entity.setProduto(dto.getProduto());
        entity.setQuantidade((dto.getQuantidade()));
    }



}
