package com.aw.stockmanager.controllers;

import com.aw.stockmanager.model.dto.ProdutoDTO;
import com.aw.stockmanager.services.ProdutoService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/produtos")

public class ProdutoController {

    private final ProdutoService service;

    public ProdutoController(ProdutoService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<?> listarProdutos(@RequestParam(required = false) String category, Pageable pageable){

        if(category != null && !category.isEmpty()){
            return ResponseEntity.status(HttpStatus.OK).body(service.findByCategory(category, pageable));
        }

        return ResponseEntity.status(HttpStatus.OK).body(service.findAll(pageable));

    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> listarProduto(@PathVariable Long id){
        return ResponseEntity.status(HttpStatus.OK).body(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<ProdutoDTO> cadastrarProduto(@RequestBody @Valid ProdutoDTO dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.insert(dto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoDTO> atualizarProduto(@PathVariable Long id, @RequestBody @Valid ProdutoDTO dto){
        return ResponseEntity.status(HttpStatus.OK).body(service.update(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarProduto(@PathVariable Long id){
        service.delete(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

}
