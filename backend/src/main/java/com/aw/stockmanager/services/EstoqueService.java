package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.EstoqueDTO;
import com.aw.stockmanager.model.entities.Estoque;
import com.aw.stockmanager.repositories.EstoqueRepository;
import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.BeanUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    public Page<EstoqueDTO> findAll(Pageable pageable) {
        return repository.findAll(pageable).map(EstoqueDTO::new);
    }
    @Transactional(readOnly = true)
    public long getProductCount() {
        return repository.count();
    }
    @Transactional(readOnly = true)
    public long getProductCountWithZeroQuantity() {
        return repository.countByQuantidade(0);
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
