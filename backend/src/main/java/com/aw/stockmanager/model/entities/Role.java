package com.aw.stockmanager.model.entities;

import com.aw.stockmanager.model.enums.RoleName;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name = "TB_ROLE")
public class Role implements Serializable, GrantedAuthority {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID roleId;
    @Enumerated(value = EnumType.STRING)
    private RoleName roleName;

    public Role() {

    }

    public Role(UUID roleId, RoleName roleName) {
        this.roleId = roleId;
        this.roleName = roleName;
    }

    public UUID getRoleId() {
        return roleId;
    }

    public RoleName getRoleName() {
        return roleName;
    }

    @Override
    public String getAuthority() {
        return null;
    }
}
