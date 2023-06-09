package com.aw.stockmanager.services;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.aw.stockmanager.model.entities.User;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
@Service
public class TokenService {
    public String criarToken(User user){
        return JWT.create()
                .withIssuer("api.StockManager")
                .withSubject(user.getUsername())
                .withClaim("id", user.getId())
                .withExpiresAt(
                        LocalDateTime.now()
                        .plusDays(1)
                        .toInstant(ZoneOffset.of("-03:00")))
                .sign(Algorithm.HMAC256("senhasecreta"));
    }
    public String getSubject(String token){
        return JWT.require(Algorithm.HMAC256("senhasecreta"))
                .withIssuer("api.StockManager")
                .build().verify(token).getSubject();
    }
}
