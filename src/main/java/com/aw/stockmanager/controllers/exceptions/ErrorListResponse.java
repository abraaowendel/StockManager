package com.aw.stockmanager.controllers.exceptions;

import org.springframework.http.HttpStatus;

import java.time.Instant;
import java.util.List;

public class ErrorListResponse {
    private HttpStatus status;
    private String message;
    private Instant timestamp;
    private List<ErrorDetails> errors;

    public ErrorListResponse() {
    }

    public ErrorListResponse(HttpStatus status, String message, Instant timestamp) {
        this.status = status;
        this.message = message;
        this.timestamp = timestamp;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public List<ErrorDetails> getErrors() {
        return errors;
    }
}
