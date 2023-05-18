package com.aw.stockmanager.model.dto;

import com.aw.stockmanager.model.entities.Endereco;
import com.aw.stockmanager.model.entities.Fornecedor;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

import java.io.Serializable;

public class FornecedorDTO implements Serializable {
    private static final long serialVersionUUID = 1L;
    private Long id;
    @NotBlank(message = "Nome inválido.")
    private String nome;
    @Pattern(regexp = "^\\(?(\\d{2})\\)?[\\s-]?(\\d{4,5})-?(\\d{4})$", message = "Número de telefone inválido")
    private String telefone;

    @Valid
    private Endereco endereco;
    public FornecedorDTO() {
    }

    public FornecedorDTO(Long id, String nome, String telefone, Endereco endereco) {
        this.id = id;
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    public FornecedorDTO(Fornecedor entity) {
        id = entity.getId();
        nome = entity.getNome();
        telefone = entity.getTelefone();
        endereco = entity.getEndereco();
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

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public Endereco getEndereco() {
        return endereco;
    }

    public void setEndereco(Endereco endereco) {
        this.endereco = endereco;
    }
}
