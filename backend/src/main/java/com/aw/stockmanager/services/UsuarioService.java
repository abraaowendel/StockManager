package com.aw.stockmanager.services;

import com.aw.stockmanager.repositories.UsuarioRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {
    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
       return repository.findByUsername(username)
               .orElseThrow(() -> new UsernameNotFoundException("Usuario: " + username + " não encontrado."));
    }

}
