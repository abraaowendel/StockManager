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

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

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
    public List<ProdutoDTO> findByCategory(String category, Pageable pageable) {
        return repository.buscarPorCategoria(category, pageable).stream().map(ProdutoDTO::new).toList();
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
        copiarDTOtoEntity(dto, entity);
        repository.save(entity);
        entity.setCodigo(gerarCodigoPorCategoria(entity));
        return new ProdutoDTO(entity);
    }
    @Transactional
    public ProdutoDTO update(Long id, ProdutoDTO dto) {
        try{
            var entity = repository.getReferenceById(id);
            copiarDTOtoEntity(dto, entity);
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
                throw new ResourceNotFoundException("Produto não encontrado.");
            }
            repository.deleteById(id);
        }
        catch (DataIntegrityViolationException exception){
            throw new DataBaseException("Essa ação compromete a integridade do banco de dados.");
        }
    }
    public void copiarDTOtoEntity(ProdutoDTO dto, Produto entity){
        entity.setId(dto.getId());
        entity.setNome(dto.getNome());
        entity.setCodigo(dto.getCodigo());
        entity.setPreco(dto.getPreco());
        entity.setDescricao(dto.getDescricao());
        entity.setCategoria(dto.getCategoria());
        entity.setFornecedor(dto.getFornecedor());
        entity.setQuantidade(dto.getQuantidade());
        entity.setDataDeCadastro(LocalDate.now());
    }
    public String gerarCodigoPorCategoria(Produto produto) {
        if (produto.getCategoria() != null) {
            String prefixo = "";

            switch (produto.getCategoria().getNome()) {
                case "Eletrônicos" -> prefixo = "ELE";
                case "Moda" -> prefixo = "MOD";
                case "Acessórios" -> prefixo = "ACE";
                case "Livros" -> prefixo = "LVR";
                case "Beleza" -> prefixo = "BEL";
                case "Alimentos" -> prefixo = "ALI";
                case "Móveis" -> prefixo = "MOV";
                case "Esportes" -> prefixo = "ESP";
                case "Jogos" -> prefixo = "JOG";
                case "Automóveis" -> prefixo = "AUT";
            }

            Long countByCategoria = repository.countByCategoria(produto.getCategoria());

            if(countByCategoria <= 9){
                prefixo += "00";
            }
            else {
                prefixo += "0";
            }

            return prefixo + (countByCategoria + 1);
        }
        return null;
    }
}
