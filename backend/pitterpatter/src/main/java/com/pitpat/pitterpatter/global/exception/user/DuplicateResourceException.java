package com.pitpat.pitterpatter.global.exception.user;

public class DuplicateResourceException extends RuntimeException {
    public DuplicateResourceException(String message) {
        super(message);
    }
}