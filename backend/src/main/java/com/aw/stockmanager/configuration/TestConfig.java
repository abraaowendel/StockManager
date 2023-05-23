package com.aw.stockmanager.configuration;

import com.aw.stockmanager.model.entities.Role;
import com.aw.stockmanager.model.entities.Usuario;
import com.aw.stockmanager.model.enums.RoleName;
import com.aw.stockmanager.repositories.RoleRepository;
import com.aw.stockmanager.repositories.UsuarioRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.ControllerAdvice;

import java.util.Set;

@ControllerAdvice
@Profile("test")
public class TestConfig implements CommandLineRunner {
    private UsuarioRepository usuarioRepository;
    private RoleRepository roleRepository;

    public TestConfig(UsuarioRepository usuarioRepository, RoleRepository roleRepository) {
        this.usuarioRepository = usuarioRepository;
        this.roleRepository = roleRepository;
    }

    @Override
    public void run(String... args) throws Exception {

        Role admin = new Role(null, RoleName.ROLE_ADMIN);
        roleRepository.save(admin);

        Usuario usuario = new Usuario(null, "Administrador",
                new BCryptPasswordEncoder().encode("teste123"), Set.of(admin));
        usuarioRepository.save(usuario);

    }
}
