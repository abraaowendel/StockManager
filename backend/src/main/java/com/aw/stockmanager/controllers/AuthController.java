package com.aw.stockmanager.controllers;

import com.aw.stockmanager.model.entities.Usuario;
import com.aw.stockmanager.security.token.LoginDTO;
import com.aw.stockmanager.security.token.TokenDTO;
import com.aw.stockmanager.services.TokenService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    private TokenService tokenService;
    private AuthenticationManager authenticationManager;

    public AuthController(TokenService tokenService, AuthenticationManager authenticationManager) {
        this.tokenService = tokenService;
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public TokenDTO fazerLogin(@RequestBody LoginDTO login){

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
                new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());

        Authentication authenticate  = authenticationManager.authenticate(usernamePasswordAuthenticationToken);
        var usuario = (Usuario) authenticate.getPrincipal();
        return new TokenDTO(tokenService.gerarToken(usuario));
    }

}
