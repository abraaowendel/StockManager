package com.aw.stockmanager.model.dto;

import com.aw.stockmanager.model.entities.Categoria;
import com.aw.stockmanager.model.entities.Fornecedor;
import com.aw.stockmanager.model.entities.Produto;
import jakarta.persistence.PrePersist;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;

import java.time.LocalDate;
import java.util.Objects;

public class ProdutoDTO {
    private Long id;
    @NotBlank(message = "Nome inválido.")
    private String nome;
    @NotBlank(message = "Descrição inválida.")
    private String descricao;
    @NotNull(message = "Código inválido.")
    private String codigo;
    @NotNull(message = "Preço não pode ser nulo.")
    @DecimalMin(value = "0.01", message = "Preço inválido.")
    private Double preco;
    @Min(value = 0, message = "Quantidade inválida.")
    private Integer quantidade;
    @Past(message = "A data deve estar no passado.")
    private LocalDate dataDeCadastro;
    @Valid
    private Categoria categoria;
    @Valid
    private Fornecedor fornecedor;

    public ProdutoDTO() {
    }

    public ProdutoDTO(Long id, String nome, String descricao, String codigo, Double preco, Integer quantidade, LocalDate dataDeCadastro, Categoria categoria, Fornecedor fornecedor) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = preco;
        this.quantidade = quantidade;
        this.dataDeCadastro = dataDeCadastro;
        this.categoria = categoria;
        this.fornecedor = fornecedor;
    }

    public ProdutoDTO(Produto entity) {
        id = entity.getId();
        nome = entity.getNome();
        descricao = entity.getDescricao();
        codigo = entity.getCodigo();
        preco = entity.getPreco();
        quantidade = entity.getQuantidade();
        dataDeCadastro = entity.getDataDeCadastro();
        categoria = entity.getCategoria();
        fornecedor = entity.getFornecedor();
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDataDeCadastro() {
        return dataDeCadastro;
    }

    public void setDataDeCadastro(LocalDate dataDeCadastro) {
        this.dataDeCadastro = dataDeCadastro;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public void setFornecedor(Fornecedor fornecedor) {
        this.fornecedor = fornecedor;
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

    public Categoria getCategoria() {
        return categoria;
    }

    public Fornecedor getFornecedor() {
        return fornecedor;
    }


}
