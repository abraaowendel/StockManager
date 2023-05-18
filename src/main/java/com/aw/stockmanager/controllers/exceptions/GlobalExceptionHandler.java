package com.aw.stockmanager.controllers.exceptions;

import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErroDetails> handleResourceNotFoundException(ResourceNotFoundException exception){
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;
        return ResponseEntity.status(httpStatus).body(copiarDados(httpStatus, exception.getMessage()));
    }

    private ErroDetails copiarDados(HttpStatus status, String message) {
        ErroDetails error = new ErroDetails();
        error.setCode(status.value());
        error.setMessage(message);
        error.setTimestamp(Instant.now());
        return error;
    }

}
