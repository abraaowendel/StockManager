package com.aw.stockmanager.controllers.exceptions;

import com.aw.stockmanager.services.exceptions.ResourceNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {
    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDetails> handleResourceNotFoundException(ResourceNotFoundException exception){
        HttpStatus httpStatus = HttpStatus.NOT_FOUND;
        return ResponseEntity.status(httpStatus).body(copiarDados(httpStatus, exception.getMessage()));
    }

    private ErrorDetails copiarDados(HttpStatus status, String message) {
        ErrorDetails error = new ErrorDetails();
        error.setCode(status.value());
        error.setMessage(message);
        return error;
    }

}
