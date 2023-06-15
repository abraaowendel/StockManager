package com.aw.stockmanager.model.dto;

import com.aw.stockmanager.model.entities.Estoque;
import com.aw.stockmanager.model.entities.Produto;

public class EstoqueDTO {
    private Long id;
    private Produto produto;
    private Integer quantidade;
    private Double precoTotal;

    public EstoqueDTO() {
    }

    public EstoqueDTO(Long id, Produto produto, Integer quantidade, Double precoTotal) {
        this.id = id;
        this.produto = produto;
        this.quantidade = quantidade;
        this.precoTotal = precoTotal;
    }

    public EstoqueDTO(Estoque entity) {
        id = entity.getId();
        produto = entity.getProduto();
        quantidade = entity.getQuantidade();
        precoTotal = entity.getPrecoTotal();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Double getPrecoTotal() {
        return precoTotal;
    }

    public void setPrecoTotal(Double precoTotal) {
        this.precoTotal = precoTotal;
    }
}
