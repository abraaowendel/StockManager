package com.aw.stockmanager.model.entities;

import jakarta.persistence.Embeddable;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;

@Embeddable
public class Endereco {
    @NotBlank(message = "Numero não pode ser vazio.")
    private String rua;
    @NotBlank(message = "Numero não pode ser vazio.")
    private String numero;
    @NotBlank(message = "Cidade não pode ser vazia.")
    private String cidade;
    @NotBlank(message = "Estado não pode ser vazio.")
    private String estado;
    @NotBlank(message = "CEP não pode ser vazio.")
    @Pattern(regexp = "^\\d{5}-\\d{3}$", message = "CEP inválido.")
    private String cep;

    public Endereco() {
    }

    public Endereco(String rua, String numero, String cidade, String estado, String cep) {
        this.rua = rua;
        this.numero = numero;
        this.cidade = cidade;
        this.estado = estado;
        this.cep = cep;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getNumero() {
        return numero;
    }

    public void setNumero(String numero) {
        this.numero = numero;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
}
