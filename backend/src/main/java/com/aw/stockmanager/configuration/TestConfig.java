package com.aw.stockmanager.configuration;

import com.aw.stockmanager.model.entities.Role;
import com.aw.stockmanager.model.entities.User;
import com.aw.stockmanager.model.enums.RoleName;
import com.aw.stockmanager.repositories.RoleRepository;
import com.aw.stockmanager.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Profile("test")
public class TestConfig implements CommandLineRunner {
    final RoleRepository roleRepository;
    final UserRepository userRepository;

    public TestConfig(RoleRepository roleRepository, UserRepository userRepository) {
        this.roleRepository = roleRepository;
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Role role = new Role(null, RoleName.ROLE_ADMIN);
        User user = new User(null, "test@test.com", new BCryptPasswordEncoder().encode("test"), role);
        roleRepository.save(role);
        userRepository.save(user);
    }
}
