package com.aw.stockmanager.model.entities;

import jakarta.persistence.*;

@Entity
@Table(name = "TB_ESTOQUE")
public class Estoque {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @OneToOne
    private Produto produto;

    private Integer quantidade;
    @Column(name = "preco_total")
    private Double precoTotal;

    public Estoque() {
    }

    public Estoque(Long id, Produto produto, Integer quantidade) {
        this.id = id;
        this.produto = produto;
        this.quantidade = quantidade;
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

    public Integer getQuantidade() {
        return quantidade;
    }

    public Double getPrecoTotal() {
        return precoTotal;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public void setPrecoTotal(Produto produto, Integer quantidade) {
        this.precoTotal = produto.getPreco() * quantidade;
    }
}
