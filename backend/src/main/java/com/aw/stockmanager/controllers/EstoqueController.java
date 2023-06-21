package com.aw.stockmanager.controllers;

import com.aw.stockmanager.model.dto.EstoqueDTO;
import com.aw.stockmanager.services.EstoqueService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/estoque")
public class EstoqueController {
    private EstoqueService service;

    public EstoqueController(EstoqueService service) {
        this.service = service;
    }

    @GetMapping
    public ResponseEntity<Page<EstoqueDTO>> findAll(Pageable pageable){
        return ResponseEntity.status(HttpStatus.OK).body(service.findAll(pageable));
    }
    @GetMapping("/count")
    public ResponseEntity<Long> getProductCount() {
        long count = service.getProductCount();
        return ResponseEntity.status(HttpStatus.OK).body(count);
    }
    @GetMapping("/count/zerados")
    public ResponseEntity<Long> getProductCountWithZeroQuantity() {
        long count = service.getProductCountWithZeroQuantity();
        return ResponseEntity.status(HttpStatus.OK).body(count);
    }
    @PostMapping
    public ResponseEntity<EstoqueDTO> insert(@RequestBody EstoqueDTO dto){
        return ResponseEntity.status(HttpStatus.CREATED).body(service.insert(dto));
    }
    @PutMapping("/{id}")
    public ResponseEntity<EstoqueDTO> insert(@PathVariable Long id, @RequestBody EstoqueDTO dto){
        return ResponseEntity.status(HttpStatus.OK).body(service.update(id, dto));
    }

}
