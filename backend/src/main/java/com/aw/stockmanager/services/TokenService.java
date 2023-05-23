package com.aw.stockmanager.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.aw.stockmanager.model.entities.Usuario;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;

@Service
public class TokenService {
    public String gerarToken(Usuario usuario){
        return JWT.create()
                .withIssuer("api.StockManager")
                .withSubject(usuario.getUsername())
                .withClaim("id", usuario.getId())
                .withExpiresAt(
                        LocalDateTime.now()
                        .plusHours(12)
                        .toInstant(ZoneOffset.of("-03:00")))
                .sign(Algorithm.HMAC256("StockManager-API"));
    }
    public String getSubject(String token){
        return JWT.require(Algorithm.HMAC256("StockManager-API"))
                .withIssuer("api.StockManager")
                .build().verify(token).getSubject();
    }
}
