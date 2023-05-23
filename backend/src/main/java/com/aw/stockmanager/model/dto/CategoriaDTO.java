package com.aw.stockmanager.model.dto;

import com.aw.stockmanager.model.entities.Categoria;

public class CategoriaDTO {
    private Long id;
    private String nome;
    public CategoriaDTO() {
    }

    public CategoriaDTO(Long id, String nome) {
        this.id = id;
        this.nome = nome;
    }
    public CategoriaDTO(Categoria entity) {
        id = entity.getId();
        nome = entity.getNome();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }


}
