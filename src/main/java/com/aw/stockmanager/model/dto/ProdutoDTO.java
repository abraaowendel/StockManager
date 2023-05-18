package com.aw.stockmanager.model.dto;

import com.aw.stockmanager.model.entities.Produto;

import java.io.Serializable;
import java.util.Objects;

public class ProdutoDTO implements Serializable {
    private static final long serialVersionUUID = 1L;
    private Long id;
    private String nome;
    private String descricao;
    private String codigo;
    private Double preco;
    private Integer quantidade;

    public ProdutoDTO() {
    }

    public ProdutoDTO(Long id, String nome, String descricao, String codigo, Double preco, Integer quantidade) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public ProdutoDTO(Produto entity) {
        id = entity.getId();
        nome = entity.getNome();
        descricao = entity.getDescricao();
        codigo = entity.getCodigo();
        preco = entity.getPreco();
        quantidade = entity.getQuantidade();
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

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public String getCodigo() {
        return codigo;
    }

    public void setCodigo(String codigo) {
        this.codigo = codigo;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ProdutoDTO that = (ProdutoDTO) o;
        return Objects.equals(id, that.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
