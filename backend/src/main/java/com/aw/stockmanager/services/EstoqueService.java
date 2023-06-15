package com.aw.stockmanager.services;

import com.aw.stockmanager.model.dto.EstoqueDTO;
import com.aw.stockmanager.model.entities.Estoque;
import com.aw.stockmanager.repositories.EstoqueRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstoqueService {
    private final EstoqueRepository repository;

    public EstoqueService(EstoqueRepository repository) {
        this.repository = repository;
    }

    public List<EstoqueDTO> findAll() {
        return repository.findAll().stream().map(EstoqueDTO::new).toList();
    }

    public EstoqueDTO insert(EstoqueDTO dto) {
        var entity = new Estoque();
        copiarDTOtoEntity(dto, entity);
        repository.save(entity);
        return new EstoqueDTO(entity);
    }

    public void copiarDTOtoEntity(EstoqueDTO dto, Estoque entity) {
        entity.setId(dto.getId());
        entity.setProduto(dto.getProduto());
        entity.setQuantidade((dto.getQuantidade()));
        entity.setPrecoTotal(dto.getProduto(), dto.getQuantidade());
    }
}
