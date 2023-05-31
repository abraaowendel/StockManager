package com.aw.stockmanager.security;

import com.aw.stockmanager.repositories.UserRepository;
import com.aw.stockmanager.services.TokenService;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
public class Filter extends OncePerRequestFilter {
    final TokenService tokenService;
    final UserRepository usuarioRepository;

    public Filter(TokenService tokenService, UserRepository usuarioRepository) {
        this.tokenService = tokenService;
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        var authorizationHeader = request.getHeader("Authorization");
        String token;

        if(authorizationHeader != null){
            token = authorizationHeader.replace("Bearer ", "");
            var subject = tokenService.getSubject(token);
            var usuario = usuarioRepository.findByUsername(subject)
                    .orElseThrow(() -> new UsernameNotFoundException("Usuário não encontrado."));
            var authentication = new UsernamePasswordAuthenticationToken(usuario, null, usuario.getAuthorities());
            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(request, response);
    }
}
